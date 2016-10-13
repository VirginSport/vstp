<?php

/**
 * @file
 * Contains the VirginApiSugarPullListener class
 */

/**
 * Listens for Drupal user related events and pulls information from SugarCRM
 */
class VirginUserSugarPullListener implements ObserverObserverInterface {

  /**
   * {@inheritdoc}
   */
  public function onNotify(ObserverEventInterface $event) {

    // If SugarCRM is not configured, do not attempt to do anything.
    if (!sugarcrm_is_configured()) {
      return;
    }

    switch ($event->getType()) {
      case ObserverEventTypes::USER_LOGIN:
        $this->onUserLogin($event);
        break;

      case VirginUserEvents::BEFORE_USER_EDITS:
        $this->onBeforeUserEdits($event);
        break;
    }
  }

  /**
   * Executed when a user logs in Drupal
   *
   * @param \ObserverEventInterface $event
   */
  protected function onUserLogin(ObserverEventInterface $event) {
    $account = $event->getData();

    $failureCallback = function (\Exception $e) {
      // A sync problem during login is not critical, do nothing here
    };

    $this->sync($account, $failureCallback);
  }

  /**
   * Executed when a user goes to his edit profile page in Drupal
   *
   * @param \ObserverEventInterface $event
   */
  protected function onBeforeUserEdits(ObserverEventInterface $event) {
    $account = $event->getData();

    // A sync problem during edit profile is critical as the user might be
    // editing stale data. Redirect him to his profile in case of error.
    $failureCallback = function (\Exception $e) {
      drupal_set_message(t("Ooops! It's not possible to edit your account at this time, please try again at a later time."), 'error');
      drupal_goto('/user');
    };

    $this->sync($account, $failureCallback);
  }

  /**
   * Syncs a given user account and tickets from SugarCRM
   *
   * @param stdClass $account
   *  The user object for whom data is being fetched for
   * @param callable $failureCallback
   *  A callback that is executed when there has been a sync problem with
   *  SugarCRM. The exception of this failure is passed to the callback.
   * @return string[]
   *  The rego IDs to the tickets that have been synced from SugarCRM
   */
  protected function sync($account, callable $failureCallback) {

    // If it's the admin user, bailout now as we don't sync anything for him
    // from SugarCRM.
    if ($account->uid === "1") {
      return array();
    }

    $account = user_load($account->uid);
    $sugar_id = $this->getUserSugarID($account);
    $modified_since = $this->getUserLastSync($account);

    // If for some reason the user does not have a SugarID, then bailout as
    // there's nothing to fetch from SugarCRM.
    if (empty($sugar_id)) {
      return array();
    }

    // Fetch the digest from SugarCRM
    try {
      $g = $this->fetchDigest($sugar_id, $modified_since);
    } catch (\Exception $e) {

      // In case of a sync failure with SugarCRM, log the problem
      watchdog('virgin_user','SugarCRM user digest sync failure: @msg', array('@msg' => $e->getMessage()), WATCHDOG_ERROR);

      // And then execute the failure callback and let callers handle the
      // exception as they have different levels of acceptance to a failure
      // scenario.
      $failureCallback($e);

      return array();
    }

    // Update the ticket cache and update the profile fields accordingly
    $synced_regos = $this->syncTickets($account, $g->get('tickets'));
    $has_changed = $this->syncProfile($account, $g->get('contact'));

    // Flush any profile changes
    $this->saveProfileChanges($account, $has_changed);

    // And return the list of the rego IDs of the tickets that have been synced
    return $synced_regos;
  }

  /**
   * Get the timestamp of the last sync with SugarCRM for the given user
   *
   * @param $account
   *  The user object to get the last sync timestamp
   * @return int
   *  The timestamp of the last sync
   *
   * @see saveProfileChanges()
   */
  protected function getUserLastSync($account) {
    return empty($account->data[VIRGIN_USER_DATA_LAST_PULL]) ? 0 : $account->data[VIRGIN_USER_DATA_LAST_PULL];
  }

  /**
   * Get the SugarCRM ID for the given user
   *
   * @param $account
   *  The user object to get the SugarCRM ID for
   * @return null|string
   *  NULL if no SugarCRM ID, a string with the ID otherwise
   */
  protected function getUserSugarID($account) {
    return empty($account->field_sugar_id[LANGUAGE_NONE][0]['value']) ? null : $account->field_sugar_id[LANGUAGE_NONE][0]['value'];
  }

  /**
   * Fetch the digest of a given SugarCRM contact from a given timestamp
   *
   * @param string $sugar_id
   *  The user's SugarCRM Contact ID
   * @param int $modified_since
   *  A timestamp value for the modified date of the SugarCRM contact digest
   * @return \VirginGrapher
   *  A grapher object containing the response body
   */
  protected function fetchDigest($sugar_id, $modified_since) {
    $path = sprintf('Contacts/%s/modified-since/%s', $sugar_id, $modified_since);
    $response = sugarcrm_client()->getEndpoint($path);

    return new VirginGrapher($response);
  }

  /**
   * Save the user profile changes to the database
   *
   * @param $account
   *  The user account object to be saved
   * @param bool $save_field_changes
   *  (Optional) If set to true, all the changes to fields in the user entity
   *  will be persisted to the database. TRUE by default.
   */
  protected function saveProfileChanges($account, $save_field_changes = TRUE) {

    // Save the user field changes without triggering a hook_user_update(), as
    // we do not want to trigger an update loop between SugarCRM and Drupal.
    if ($save_field_changes) {
      field_attach_update('user', $account);
    }

    // Store the last sync timestamp in the user data column
    $account->data[VIRGIN_USER_DATA_LAST_PULL] = time();

    // Also manually update the user data column in the database so as to not
    // trigger any update hook.
    db_update('users')
      ->where('uid = :uid', array(':uid' => $account->uid))
      ->fields(array('data' => serialize($account->data)))
      ->execute()
    ;

    // And finally clear the cached user fields
    entity_get_controller('user')->resetCache(array($account->uid));
  }

  /**
   * Sync the user profile to the database
   *
   * @param $account
   *  The user account object whose profile is to be updated
   * @param \VirginGrapher $g
   *  A grapher object containing the contact object
   * @return bool
   *  FALSE the profile has not been changed, TRUE otherwise.
   */
  protected function syncProfile($account, VirginGrapher $g) {

    // If the contact grapher is empty, then there's nothing to be updated
    if (empty($g->raw())) {
      return FALSE;
    }

    // With the exception of the e-mail, all other fields that come from
    // the digest are updated here. E-mail is not updated in here because that
    // goes through an entirely separate process.
    $fields = array(
      'field_first_name' => $g->get('first_name')->value(),
      'field_last_name' => $g->get('last_name')->value(),
      'field_gender' => $g->get('gender')->value(),
      'field_contact_number' => $g->get('phone_mobile')->value(),
      'field_address_line_1' => $g->get('primary_address_line_1')->value(),
      'field_address_line_2' => $g->get('primary_address_line_2')->value(),
      'field_address_city' => $g->get('primary_address_city')->value(),
      'field_address_state' => $g->get('primary_address_state')->value(),
      'field_address_postcode' => $g->get('primary_address_postalcode')->value(),
      'field_address_country' => $g->get('primary_address_country')->value(),
      'field_marketing_optin' => $g->get('marketing_email_opt_ins')->value(),
      'field_uk_athletics_number' => $g->get('affiliated_uk_athlete')->value(),
      'field_medical_conditions_other' => $g->get('medical_conditions_other')->value(),
      'field_medications' => $g->get('medications')->value(),
      'field_allergies' => $g->get('allergies')->value(),
      'field_agree_share_medical_info' => $g->get('share_info_with_vs')->value(),
      'field_birth_date' => strtotime($g->get('birth_date')->value('1900')),
      'field_medical_conditions' => $g->get('medical_conditions')->items(),
    );

    $w = entity_metadata_wrapper('user', $account);

    foreach ($fields as $field => $value) {
      $w->{$field}->set($value);
    }

    return TRUE;
  }

  /**
   * Sync the ticket list to the database
   *
   * @param $account
   *  The user account object who is going to be set as the owner of the ticket
   * @param \VirginGrapher $tickets
   *  A grapher object containing the ticket list
   * @return string[]
   *  A list of Attendly rego IDs that were fetched and synced from SugarCRM
   */
  protected function syncTickets($account, VirginGrapher $tickets) {
    $ticket_ids = array();

    foreach ($tickets->all() as $ticket) {
      $q = db_merge('virgin_user_tickets');

      // Store the list of all the tickets that have been stored
      $rego_id = $ticket->get('ticket_rego')->value();
      $ticket_ids[] = $rego_id;

      $q->key(array(
        'attendly_rego_id' => $rego_id,
      ));

      $q->fields(array(
        'attendly_rego_id' => $rego_id,
        'sugar_id' => $ticket->get('id')->value(),
        'name' => $ticket->get('name')->value(),
        'attendly_ticket_id' => $ticket->get('attendly_ticket_id')->value(),
        'attendly_attendee_id' => $ticket->get('attendly_attendee_id')->value(),
        'ticket_status' => $ticket->get('ticket_status')->value(),
        'start_time' => $ticket->get('start_time')->value(),
        'target_time' => $ticket->get('target_time')->value(),
        'contact_id' => $ticket->get('contact_id')->value(),
        'event_id' => $ticket->get('event_id')->value(),
        'package_id' => $ticket->get('package_id')->value(),
        'partner_account_id' => $ticket->get('partner_account_id')->value(),
        'purchaser_contact_id' => $ticket->get('purchaser_contact_id')->value(),
        'ticket_type_id' => $ticket->get('ticket_type_id')->value(),
        'first_name' => $ticket->get('first_name')->value(),
        'last_name' => $ticket->get('last_name')->value(),
        'date_of_birth' => $ticket->get('date_of_birth')->value(),
        'whos_ticket_for' => $ticket->get('whos_ticket_for')->value(),
        'club_number' => $ticket->get('club_number')->value(),
        'club_name' => $ticket->get('club_name')->value(),
        'team_name' => $ticket->get('team_name')->value(),
        'has_answered_mkt_questions' => (int) $ticket->get('has_answered_mkt_questions')->value(),
        'is_wheelchair_user' => (int) $ticket->get('is_wheelchair_user')->value(),
        'is_placeholder' => (int) FALSE, // If the ticket has been fetched that means it's not a placeholder ticket
        'uid' => $account->uid,
      ));

      $q->execute();
    }

    return $ticket_ids;
  }
}
