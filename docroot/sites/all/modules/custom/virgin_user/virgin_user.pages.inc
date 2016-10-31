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

    drupal_set_message(t("Ooops! It's not possible to edit your ticket information at this time, please try again later"));
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
    $goto('', '/splash', array(
      'destination' => $path,
      'destination-params' => drupal_base64_encode(json_encode($params))
    ));
    return;
  }

  // If we reached this point, then there's an authenticated user with
  // a favorite region, which means we can store a cookie with his
  // favorite hostname, before redirecting him to his prefered hostname.
  virgin_cookie_set(VIRGIN_REGION_COOKIE, $user_hostname);
  virgin_cookie_set(VIRGIN_USER_BASKET_COOKIE, $user_hostname);

  $goto($user_hostname, $path, $params);
}

/**
 * Page callback for the basket claim route
 *
 * @param string $rego
 *  The attendly ticket rego ID
 */
function virgin_user_page_basket_claim($rego) {
  // An anonymous, has to login or register to claim a ticket.
  if (user_is_anonymous()) {
    _virgin_user_page_basket_redirect('/user/login', array(
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
  // Left blank as a placeholder
}

/**
 * Page callback for the basket login signup route
 */
function virgin_user_page_basket_login_signup() {

  // An anonymous user will have to login or register in order
  // to be able to checkout.
  if (user_is_anonymous()) {
    _virgin_user_page_basket_redirect('/user/login', array(
      'basket-action' => 'checkout'
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
    drupal_set_message(t("Ooops! It wasn't possible to checkout your cart, please try again later."), 'warning');
    drupal_goto('/user');
  }
}

/**
 * Page callback for the basket festival list route
 */
function virgin_user_page_basket_festival_list() {
  _virgin_user_page_basket_redirect('/festivals');
}

/**
 * Page callback for the basket checkout finished route
 */
function virgin_user_page_basket_checkout_finished() {
  global $user;

  // Fetch the required query parameter that contains the ciphered regos
  $ciphered_regos = virgin_param('rego');

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
    drupal_set_message(t("Ooops! Something didn't go as expected"), 'warning');
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
  return drupal_get_form($form, $account);
}
