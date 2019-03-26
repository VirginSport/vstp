<?php

/**
 * @file
 * Page callbacks file for the virgin_user module.
 */

/**
 * Page callback for doing post-checkout actions in tickets
 *
 * @param string $rego_id
 *  The ID of the rego
 * @param string $action
 *  The key of the value
 */
function virgin_user_page_basket_ticket_action($rego_id, $action) {
  global $user;

  // Check if the action the user is trying to make is one of the
  // supported actions.
  $supported_actions = array(
    'personal', 'teams', 'fans', 'merchandise', 'marketing'
  );

  if (!in_array($action, $supported_actions)) {
    drupal_access_denied();
    return;
  }

  // Check if the user owns the ticket he's trying to make a change to,
  // and if he doesn't, block him.
  $sql = "
    SELECT uid
    FROM {virgin_user_tickets}
    WHERE attendly_rego_id = :rego_id
    AND uid = :uid
  ";

  $params = array(
    ':rego_id' => $rego_id,
    ':uid' => $user->uid
  );

  $ticket_found = db_query($sql, $params)->fetchField();

  if (!$ticket_found) {
    drupal_access_denied();
    return;
  }

  // Finally, attempt to redirect the user to attendly, and if it fails
  // for some reason redirect the user back to his profile page and let
  // him know that he can't make the changes he wants at the moment.
  try {
    drupal_goto(virgin_attendly_client()->buildTicketActionPath($rego_id, $action));
  } catch (\Exception $e) {
    watchdog(
      'virgin_user',
      'Failed to redirect user (@user) to Attendly to modify their ticket (@rego) information: @err',
      array(
        '@user' => $user->uid,
        '@rego' => $rego_id,
        '@err' => $e
      ),
      WATCHDOG_ERROR
    );

    drupal_set_message(t("Oops! We're sprinting to fix this error so you can edit your ticket info. Thanks for your patience!"));
    drupal_goto('/user');
  }
}

/**
 * Redirects a user to its preferred hostname depending on a number of factors
 *
 * @param $path
 *  The path under a hostname where the user should be redirected to, i.e: '/user/10'
 * @param array $params
 *  The query parameters of the path
 */
function _virgin_user_page_basket_redirect($path, $params = array()) {

  // Redirection is highly specific for each user, anonymous or authenticated,
  // as such mark all the paths where this function is invoked as uncacheable.
  drupal_page_is_cacheable(FALSE);

  // Helper function to redirect a user to a virgin region host path
  $goto = function ($hostname, $path = '', $params = array()) {
    if ($hostname) {
      $path = virgin_region_add_hostname_protocol($hostname) . $path;
    }

    drupal_goto($path, array('query' => $params));
  };

  // Fetch the cookies that can carry prefered region hostname selection.
  $favorite_hostname = virgin_cookie_get(VIRGIN_REGION_COOKIE, '');
  $basket_hostname = virgin_cookie_get(VIRGIN_USER_BASKET_COOKIE, '');

  // Check if either the basket hostname cookie or prefered region hostname
  // cookie is valid, and if one of them is valid, by this order, redirect
  // the user to the path under one of those hostnames.
  if (virgin_region_valid_hostname($basket_hostname)) {
    $goto($basket_hostname, $path, $params);
    return;
  }

  if (virgin_region_valid_hostname($favorite_hostname)) {
    $goto($favorite_hostname, $path, $params);
    return;
  }

  // If none of the cookies contained a valid hostname, attempt to fetch
  // the favorite region from the user.
  $user_hostname = virgin_region_user_hostname();

  // If the user is anonymous or there's no hostname to redirect the
  // user to, send the user to the current website splash page in order
  // for him pick his region before redirecting him to the right path.
  if (user_is_anonymous() || empty($user_hostname)) {
    $hostname = virgin_get_hostname_by_geo_country();

    // If we don't have a valid hostname send to splash page
    if (empty($hostname)) {
      $goto('', '/splash', array(
        'destination' => $path,
        'destination-params' => drupal_base64_encode(json_encode($params))
      ));
    } else {
      virgin_region_redirect_to_hostname($hostname, $path, $params);
    }

    return;
  }

  // If we reached this point, then there's an authenticated user with
  // a favorite region, which means we can store a cookie with his
  // favorite hostname, before redirecting him to his prefered hostname.
  virgin_cookie_set(VIRGIN_REGION_COOKIE, $user_hostname);
  virgin_cookie_set(VIRGIN_USER_BASKET_COOKIE, $user_hostname);

  $goto($user_hostname, $path, $params);
}

/**s
 * Page callback for the basket claim route
 *
 * @param string $rego
 *  The attendly ticket rego ID
 */
function virgin_user_page_basket_claim($rego) {

  // Check if rego is in the blacklist to redirect to not found page.
  $blacklist_enabled = variable_get('virgin_user_blacklist_regos', FALSE);
  if ($blacklist_enabled) {
    $path = DRUPAL_ROOT . '/' . dirname(drupal_get_filename('module', 'virgin_user'));
    $file = file_get_contents($path. '/black_regos.csv');
    $regos = explode("\n", $file);
    unset($file);

    if (in_array($rego, $regos)) {
      drupal_not_found();
      die;
    }
  }

  // An anonymous, has to login or register to claim a ticket.
  if (user_is_anonymous()) {
    _virgin_user_page_basket_redirect('/user/register', array(
      'basket-action' => 'claim',
      'rego' => $rego
    ));

    return;
  }

  // If the user's already logged in, then we can send him to the
  // ticket claim confirmation page.
  _virgin_user_page_basket_redirect('/basket/confirm-claim/' . $rego);
}

/**
 * Page callback for the ticket claim confirmation route
 */
function virgin_user_page_basket_confirm_claim($rego) {
  global $user;

  $ticket = _virgin_user_get_ticket($rego);

  // Depending on the HTTP method, we either show the claim info, for
  // GET method, or we redirect the user to attendly to modify his
  // ticket information on POST.
  switch ($_SERVER['REQUEST_METHOD']) {

    case 'GET':
      return theme('virgin_user__claim_ticket_page', array(
        'claim_ticket' => theme('virgin_user__claim_ticket', array('ticket' => $ticket))
      ));
      break;

    case 'POST':

      // If we weren't able to retrieve the ticket, or the ticket has been
      // claimed, redirect the user to his profile page and let him now
      // the ticket could not be claimed.
      if (!$ticket || $ticket['has_been_claimed']) {
        drupal_set_message(t("Oops! It looks like this ticket has already been claimed."));
        drupal_goto('user');
        return;
      }

      // Otherwise, attempt to build the ticket claim path to Attendly
      // and redirect him there if successful.
      try {
        $g = new VirginEntityGrapher('user', user_load($user->uid));
        $sugar_id = $g->fieldGetOne('field_sugar_id');
        $mail = $g->property('mail');

        drupal_goto(virgin_attendly_client()->buildTicketClaimPath($rego, $sugar_id, $mail));
      } catch (\Exception $e) {
        watchdog(
          'virgin_user',
          'Failed to redirect user (@user) to Attendly to claim their ticket (@rego) information: @err',
          array(
            '@user' => $user->uid,
            '@rego' => $rego,
            '@err' => $e
          ),
          WATCHDOG_ERROR
        );

        drupal_set_message(t("It's not you, it's us. We're sweating trying to get our systems back online and we hope to be back on track shortly. Thanks for your patience!"));
        drupal_goto('/user');
      }

      break;
  }
}

/**
 * Page callback for the basket authenticate route
 */
function virgin_user_page_basket_authenticate() {

  // An anonymous user will have to login or register in order
  // to be able to checkout.
  if (user_is_anonymous()) {
    _virgin_user_page_basket_redirect('/user/register', array(
      'basket-action' => 'authenticate'
    ));

    return;
  }

  // If the user is authenticated, then attempt to bind the user's
  // attendly session with the authenticated user.
  $bound_session = virgin_user_bind_attendly_checkout_session();

  // If the session was bound successfuly, then redirect the user to the
  // checkout path in Attendly, otherwise send him to his profile page
  // and let him know something happened.
  if ($bound_session) {
    drupal_goto(sprintf('%s/e/checkout', variable_get(VIRGIN_VAR_ATTENDLY_URL)));
  } else {
    drupal_set_message(t("Oops! It looks like we've veered off course. We'll be back on track shortly. Please try again later."), 'warning');
    drupal_goto('/user');
  }
}

/**
 * Page callback for the basket festival list route
 */
function virgin_user_page_basket_festival_list() {
  _virgin_user_page_basket_redirect('/events');
}

/**
 * Page callback for the basket checkout finished route
 */
function virgin_user_page_basket_checkout_finished() {
  global $user;

  // Fetch the required query parameter that contains the ciphered regos
  $ciphered_regos = virgin_param('rego');

  // If there are no ciphered regos, then there's nothing to uncipher and this
  // means that the user has not acquired tickets for himself.
  if (empty($ciphered_regos)) {
    _virgin_user_page_basket_redirect('/user/' . $user->uid);
  }

  try {
    $unciphered_regos = virgin_cipher()->uncipher($ciphered_regos);
    $regos = explode('|', $unciphered_regos);
  } catch (\Exception $e) {

    // If the cipher failed, that might be for two reasons: either the key
    // used to cipher the contents is different from what we have in our
    // system, or someone is tampering with the payload. In either case
    // log the issue and let the user know something didn't go as planned.
    $regos = array();

    // Log and alert the user something failed
    watchdog('virgin_user', "Failed to uncipher basket checkout rego.", array(), WATCHDOG_ERROR);
    drupal_set_message(t("It's not you, it's us. We're sprinting to fix this error and we hope to be back on track shortly. Thanks for your patience!"), 'warning');
  }

  // Notify all observers of a basket checkout
  $basket_event = new VirginUserBasketEventData($user, $regos);
  observer_notify(VirginUserEvents::BASKET_CHECKOUT, $basket_event);

  // And finally send the user to his profile page
  _virgin_user_page_basket_redirect('/user/' . $user->uid);
}

/**
 * Page callback for the basket post checkout route
 */
function virgin_user_page_basket_post_checkout() {

  // At this moment the post checkout has exactly the same behaviour as
  // the checkout route. As such simply execute the checkout finished
  // for now.
  virgin_user_page_basket_checkout_finished();
}

/**
 * Page callback for the user profile edit route
 *
 * This callback overrides the core drupal user edit route to ensure the user
 * profile is synced before the form is rendered.
 *
 * @param $form
 *  The user edit profile form
 * @param $account
 *  The account being edited
 * @return array
 *  A drupal render array
 */
function virgin_user_page_user_edit($form, $account) {

  // Trigger the event that's going to sync the user profile
  observer_notify(VirginUserEvents::BEFORE_USER_EDITS, $account);

  // And after the profile is synced render the user profile form
  module_load_include('inc', 'user', 'user.pages');

  return theme('virgin_user__edit', array(
    'profile_form' => drupal_get_form($form, $account),
    'group_sales_url' => _virgin_user_get_group_sales_url(),
  ));
}

/**
 * Page callback for the user login route
 *
 * This callback overrides the core drupal user login route
 *
 * @return string
 *  The html template
 */
function virgin_user_page_user_login() {
  $login_form = drupal_get_form('user_login');

  // If the basket action parameter is for claiming a ticket
  // load the ticket and render the claim ticket widget.
  $claim_ticket = '';
  if (virgin_param('basket-action') == 'claim') {
    $rego = virgin_param('rego');
    $ticket = _virgin_user_get_ticket($rego);
    $claim_ticket = theme('virgin_user__claim_ticket', array('ticket' => $ticket));
  }

  return theme('virgin_user__login', array(
    'login_form' => $login_form,
    'claim_ticket' => $claim_ticket,
    'hybridauth_widget' => array(
      '#type' => 'hybridauth_widget'
    )
  ));
}

/**
 * Page callback for the user register route
 *
 * This callback overrides the core drupal user register route
 *
 * @return string
 *  The html template
 */
function virgin_user_page_user_register() {
  $register_form = drupal_get_form('user_register_form');

  // If the basket action parameter is for claiming a ticket
  // load the ticket and render the claim ticket widget.
  $claim_ticket = '';
  if (virgin_param('basket-action') == 'claim') {
    $rego = virgin_param('rego');
    $ticket = _virgin_user_get_ticket($rego);
    $claim_ticket = theme('virgin_user__claim_ticket', array('ticket' => $ticket));
  }

  return theme('virgin_user__register', array(
    'register_form' => $register_form,
    'claim_ticket' => $claim_ticket,
    'hybridauth_widget' => array(
      '#type' => 'hybridauth_widget'
    )
  ));
}

/**
 * Page callback for the user password route
 *
 * This callback overrides the core drupal user password route
 */
function virgin_user_page_user_password() {
  module_load_include('inc', 'user', 'user.pages');
  $password_form = drupal_get_form('user_pass');

  return theme('virgin_user__password', array('password_form' => $password_form));
}

/**
 * Page callback for the user password reset route
 *
 * This callback overrides the core drupal user password reset route
 */
function virgin_user_page_user_password_reset($form_name, $uid, $timestamp, $hashed_pass, $action = NULL) {
  module_load_include('inc', 'user', 'user.pages');
  $form = drupal_get_form($form_name, $uid, $timestamp, $hashed_pass, $action);

  return theme('virgin_user__password_reset', array('form' => $form));
}

/**
 * Page callback for the user contact form
 */
function virgin_user_page_ajax_form() {
  $commands = array();

  $conf = array(
    'type' => virgin_param('virgin_type'),
    'festival_id' => virgin_param('festival_id'),
    'event_id'  => virgin_param('event_id'),
  );

  $valid_ctools_types = array(
    VIRGIN_BASE_CONTACT_FORM,
    VIRGIN_BASE_REGISTER_INTEREST_FORM
  );

  if (!in_array($conf['type'], $valid_ctools_types)) {
    drupal_access_denied();
  }

  ctools_include('content');
  $contact_form = ctools_content_render($conf['type'], null, $conf, array(), array());

  $commands[] = array(
    'command' => 'vsContactForm',
    'data' => $contact_form->content
  );

  return array(
    '#type' => 'ajax',
    '#commands' => $commands
  );
}

/**
 * Page callback for the user newsletter form submission
 */
function virgin_user_page_ajax_newsletter_form_post() {
  if ($_SERVER['REQUEST_METHOD'] != 'POST') {
    drupal_access_denied();
  }

  $raw = file_get_contents('php://input');
  $data = drupal_json_decode($raw);

  // If one of the required parameters is empty return error state
  if (empty($data['id']) || empty($data['type'])) {
    $result['result'] = FALSE;
    print drupal_json_encode($result);
    drupal_exit();
  }

  if ($data['type'] == 'component') {
    // Load the panel and get the list
    $fpp = fieldable_panels_panes_load($data['id']);
    if ($fpp->bundle == 'vs_newsletter' && !empty($fpp->field_sugar_newsletter_list[LANGUAGE_NONE])) {
      $list = $fpp->field_sugar_newsletter_list[LANGUAGE_NONE][0]['value'];
    }
  }  else if ($data['type'] == 'footer') {
    // Load the region and get the list
    $region = node_load($data['id']);
    if ($region->type == 'region' && !empty($region->field_sugar_newsletter_list[LANGUAGE_NONE])) {
      $list = $region->field_sugar_newsletter_list[LANGUAGE_NONE][0]['value'];
    }
  }

  // In case we can't load the list throw an error
  if (!isset($list)) {
    $result['result'] = FALSE;
    print drupal_json_encode($result);
    drupal_exit();
  }

  $params = array(
    'target_list' => $list,
    'email' => $data['newsletter_email'],
    'marketing_email_opt_ins' => TRUE,
  );

  try {
    $result['result'] = sugarcrm_client()->systemPost('Virgin/subscribe-newsletter', $params);
  } catch (\Exception $e) {
    $result['result'] = FALSE;
  }

  print drupal_json_encode($result);

  drupal_exit();
}

/**
 * Page callback for the request bundle form submission
 */
function virgin_user_page_ajax_request_bundle_form_post() {
  global $user;

  if ($_SERVER['REQUEST_METHOD'] != 'POST') {
    drupal_access_denied();
  }

  $raw = file_get_contents('php://input');
  $data = drupal_json_decode($raw);

  // If one of the required parameters is empty return error state
  if (empty($data['organization']) || empty($data['event'])
    || empty($data['tickets']) || empty($data['payment_type'])) {
    $result['result'] = FALSE;
    print drupal_json_encode($result);
    drupal_exit();
  }

  $user_anonymous = user_is_anonymous();
  $user_grapher = new VirginEntityGrapher('user', user_load($user->uid));

  $params = array(
    'organization' => $data['organization'],
    'event' => $data['event'],
    'tickets' => $data['tickets'],
    'payment_type' => $data['payment_type'],
    'additional_notes' => $data['additional_notes'],
    'contact_id' => $user_anonymous ? '' : $user_grapher->fieldGetOne('field_sugar_id', NULL),
  );

  try {
    $result['result'] = sugarcrm_client()->systemPost('Virgin/request-bundle', $params);
  } catch (\Exception $e) {
    $result['result'] = FALSE;
  }

  print drupal_json_encode($result);

  drupal_exit();
}

/**
 * Page callback for the group sales page
 */
function virgin_user_page_group_sales() {
  if (user_is_anonymous()) {
    drupal_goto('user/login', array('query' => array('destination' => current_path())));
  }

  return theme('virgin_user__request_bundle_form', array());
}

/**
 * Page callback for the user contact form submission
 */
function virgin_user_page_ajax_form_post() {
  global $user;

  if ($_SERVER['REQUEST_METHOD'] != 'POST') {
    drupal_access_denied();
  }

  $user_anonymous = user_is_anonymous();
  $user_grapher = new VirginEntityGrapher('user', user_load($user->uid));

  $defaults = array(
    'first_name' => $user_anonymous ? '' : $user_grapher->fieldGetOne('field_first_name'),
    'last_name' => $user_anonymous ? '' : $user_grapher->fieldGetOne('field_last_name'),
    'contact_number' => $user_anonymous ? '' : $user_grapher->fieldGetOne('field_contact_number'),
    'email' => $user_anonymous ? '' : $user_grapher->property('mail'),
    'message' => '',
    '$type' => '',
    'festival_id' => '',
    'event_ids' => array()
  );

  $raw = file_get_contents('php://input');
  $data = drupal_json_decode($raw) + $defaults;

  // If user has selected 'all events' option
  if (in_array(0, $data['event_ids'])) {
    $data['event_ids'] = array_keys($data['events']);
  }

  $params = array(
    'type' => $data['type'],
    'contact_id' => $user_anonymous ? '' : $user_grapher->fieldGetOne('field_sugar_id', NULL),
    'email' => $data['email'],
    'festival' => '',
  );

  if ($data['type'] != 'interested_in') {
    $params += array(
      'email' => $data['email'],
      'first_name' => $data['first_name'],
      'last_name' => $data['last_name'],
      'contact_number' => $data['contact_number'],
      'message' => $data['message'],
      'events' => array(),
    );
  }

  if ($data['type'] == 'interested_in') {
    $params += array(
      'marketing_email_opt_ins' => TRUE,
    );
  }

  if (!empty($data['festival_id'])) {
    $festival = node_load((int) $data['festival_id']);

    if (empty($festival) || $festival->type != 'festival') {
      drupal_access_denied();
      drupal_exit();
    }

    $festival_grapher = new VirginEntityGrapher('node', $festival);
    $festival_state_grapher = $festival_grapher->relation('field_festival_state');
    $params['festival'] = $festival_state_grapher->fieldGetOne('field_sugar_id');
  }

  // To be populated with GTM data
  $gtm = array();

  foreach ($data['event_ids'] as $event_id) {
    $event = node_load($event_id);

    // If event does not exist continue
    if (empty($event->nid) || $event->type != 'event') {
      continue;
    }

    $event_grapher = new VirginEntityGrapher('node', $event);
    $event_state_grapher = $event_grapher->relation('field_event_state');
    $params['events'][] = $event_state_grapher->fieldGetOne('field_sugar_id');

    // If form is interested in send google tag manager info to push into data layer
    if ($data['type'] == 'interested_in') {
      $start_date = $event_state_grapher->fieldGetOne('field_start_date');
      $timezone = $event_state_grapher->fieldGetOne('field_timezone');

      $gtm_event = array(
        'event' => 'RegisterInterest',
        'EventType' => $event_state_grapher->fieldGetOne('field_event_type'),
        'EventName' => $event_grapher->property('title'),
        'EventDate' => virgin_date($start_date, $timezone)->format('d.m.Y')
      );

      $gtm[] = $gtm_event;
    }
  }

  $result = array(
    'gtm' => $gtm,
  );

  try {
    $result['result'] = sugarcrm_client()->systemPost('Virgin/form', $params);

    $message = sprintf('%s submitted successfully.', $data['type']);

    $result['gtm'][] = array(
      'event' => $data['type'],
      'message' => $message,
    );
  } catch (\Exception $e) {
    $result['result'] = FALSE;

    $error_message = sprintf('It was not possible to send %s at this time. Please try again later.', $data['type']);

    $result['gtm'][] = array(
      'event' => 'ErrorEvent',
      'ErrorType' => $error_message,
    );
  }

  print drupal_json_encode($result);

  drupal_exit();
}

/**
 * Page callback for user event results page
 */
function virgin_user_page_results($ticket_sugar_id) {
  $current_region = virgin_region_current();
  $country_code = empty($current_region['country_letter_code']) ? $current_region['country_letter_code'] : '';

  $vars = array(
    'is_card' => TRUE,
    'ticket_id' => $ticket_sugar_id,
    'unit' => $country_code == 'US' ? 'miles' : 'km'
  );

  return theme('virgin_components__ct__results_table', $vars);
}

function virgin_user_page_hybridauth_extra($provider_id) {
  module_load_include('inc', 'hybridauth', 'hybridauth.pages');

  if (!function_exists('hybridauth_window_start')) {
    drupal_not_found();

    exit;
  }

  $vars = array(
    'form' => hybridauth_window_start($provider_id),
  );

  return theme('virgin_user__hybridauth_details', array('vars' => $vars));

}

/**
 * Redirects the user to group sales in Attendly
 */
function virgin_user_page_group_sales_redirect() {
  $url = _virgin_user_get_group_sales_url();

  if (!empty($url)) {
    drupal_goto($url);
  }

  drupal_access_denied();
}
