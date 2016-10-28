<?php

/**
 * @file
 * Page callbacks file for the virgin_user module.
 */

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
    $addr = virgin_region_add_hostname_protocol($hostname);
    drupal_goto($addr . $path, array('query' => $params));
  };

  // Fetch the cookies that can carry prefered region hostname selection.
  $favorite_hostname = virgin_cookie(VIRGIN_REGION_COOKIE, '');
  $basket_hostname = virgin_cookie(VIRGIN_USER_BASKET_COOKIE, '');

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
  // favorite hostname, before redirecting him to his prefer hostname.
  setcookie(VIRGIN_REGION_COOKIE, $user_hostname);
  setcookie(VIRGIN_USER_BASKET_COOKIE, $user_hostname);

  $goto($user_hostname, $path, $params);
}

/**
 * Page callback for the basket claim route
 *
 * @param string $rego
 *  The attendly ticket rego ID
 */
function virgin_user_page_basket_claim($rego) {
}

/**
 * Page callback for the basket login signup route
 */
function virgin_user_page_basket_login_signup() {
}

/**
 * Page callback for the basket festival list route
 */
function virgin_user_page_basket_festival_list() {
}

/**
 * Page callback for the basket checkout finished route
 */
function virgin_user_page_basket_checkout_finished() {
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
