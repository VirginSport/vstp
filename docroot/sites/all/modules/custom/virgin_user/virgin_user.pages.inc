<?php

/**
 * @file
 * Page callbacks file for the virgin_user module.
 */

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
