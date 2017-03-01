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

    $path = sprintf('Virgin/Contacts/%s', $sugar_id);
    $contact = sugarcrm_client()->systemGet($path);
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

  $users = array_keys($results['user']);
  $user_id = reset($users);

  // Otherwise update his information without triggering hooks.
  db_update('users')
    ->where('uid = :uid', array(':uid' => $user_id))
    ->fields(array('mail' => $contact['email1']))
    ->execute()
  ;

  // And finally clear the cached user fields
  entity_get_controller('user')->resetCache(array($user_id));
}

/**
 * Callback for virgin checkout-finish API endpoint
 *
 * @param array $args
 */
function _virgin_api_virgin_checkout_finished_action($args = array()) {

  // Find a user account to whom the external ID belongs to
  $query = new EntityFieldQuery();
  $query->entityCondition('entity_type', 'user');
  $query->fieldCondition('field_sugar_id', 'value', $args['external_id']);
  $results = $query->execute();

  if (empty($results['user'])) {
    services_error(sprintf('No user with External ID "%s" was found', $args['external_id']), 404);
    return;
  }

  // And then mark the regos as ticket placeholders to be synced in the future
  $uids = array_keys($results['user']);
  $account = user_load($uids[0]);
  $basket_event = new VirginUserBasketEventData($account, $args['regos']);

  observer_notify(VirginUserEvents::NO_SYNC_BASKET_CHECKOUT, $basket_event);
}

/**
 * Callback for virgin fetch-ids API endpoint
 *
 * @param array $args
 * @return array
 */
function _virgin_api_virgin_fetch_ids($args = array()) {
  if (!is_array($args)) {
    return array();
  }

  // Extract the Contact IDs from the posted list
  $ids = array();

  foreach ($args as $arg) {
    if (!is_string($arg)) {
      continue;
    }

    $ids[] = $arg;
  }

  // Fetch the corresponding UIDs
  $sql = "
    SELECT
      field_sugar_id_value as id,
      entity_id as uid
    FROM {field_data_field_sugar_id}
    WHERE entity_type = 'user'
    AND field_sugar_id_value IN (:ids)
  ";

  $params = array(
    ':ids' => $ids
  );

  try {
    return db_query($sql, $params)->fetchAllKeyed();
  } catch (\Exception $e) {
    watchdog(
      'virgin_api',
      'Could not fetch Virgin Sport IDs from the database: @err',
      array('@err' => $e->getMessage()),
      WATCHDOG_ERROR
    );

    return array();
  }
}
