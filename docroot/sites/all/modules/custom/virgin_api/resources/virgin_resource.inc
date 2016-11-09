<?php

/**
 * @file
 * Contains the virgin services resources.
 */

/**
 * Virgin API user email update action
 */
function _virgin_api_virgin_mail_update_action($sugar_id) {

  try {

    watchdog(
      'virgin_api',
      "Fetching the contact record for user (@id) from SugarCRM...",
      array('@id' => $sugar_id));

    $contact = sugarcrm_client()->retrieve('Contacts', $sugar_id);
  } catch (\Exception $e) {
    watchdog(
      'virgin_api',
      'Error fetching updated user e-mail address from SugarCRM for user (@id): @err',
      array(
        '@id' => $sugar_id,
        '@err' => $e->getMessage()
      ),
      WATCHDOG_ERROR
    );

    return services_error('Internal Server Error', 500);
  }

  // If the contact does not carry an e-mail, bailout.
  if (empty($contact['email1'])) {

    watchdog(
      'virgin_api',
      'SugarCRM Contact of user (@id) does not have field \'email1\' set.',
      array('@id' => $sugar_id));

    return;
  }

  $query = new EntityFieldQuery();
  $query->entityCondition('entity_type', 'user');
  $query->fieldCondition('field_sugar_id', 'value', $sugar_id);
  $results = $query->execute();

  // If no user in Drupal carries this sugar id, bailout
  if (empty($results['user'])) {

    watchdog(
      'virgin_api',
      'No Drupal user associated with SugarCRM id (@id)',
      array('@id' => $sugar_id));

    return;
  }

  $user_id = reset(array_keys($results['user']));

  // Otherwise update his information without triggering hooks.
  db_update('users')
    ->where('uid = :uid', array(':uid' => $user_id))
    ->fields(array('mail' => $contact['email1']))
    ->execute();

  // And finally clear the cached user fields
  entity_get_controller('user')->resetCache(array($user_id));
}
