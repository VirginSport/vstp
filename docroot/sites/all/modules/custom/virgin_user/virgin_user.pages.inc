<?php

/**
 * @file
 * Page callbacks file for the virgin_user module.
 */

/**
 * Page callback for the user profile edit route
 *
 * This callback overrides the core drupal user edit route to ensure the user
 * profile is synced before the form is rendered.
 */
function virgin_user_page_user_edit($account) {

  // Trigger the event that's going to sync the user profile
  observer_notify(VirginUserEvents::BEFORE_USER_EDITS, $account);

  // And after the profile is synced render the user profile form
  module_load_include('inc', 'user', 'user.pages');
  drupal_get_form('user_profile_form', $account);
}
