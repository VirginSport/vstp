<?php

/**
 * @file
 * Page callbacks file for the virgin_user module.
 */

/**
 * Page callback for doing post-checkout actions in tickets
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
  // him know that he can't make the changes he want at the moment.
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
