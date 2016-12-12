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

      case VirginUserEvents::BASKET_CHECKOUT:
        $this->onBasketCheckout($event->getData());
        break;

      case VirginUserEvents::NO_SYNC_BASKET_CHECKOUT:
        $this->onNoSyncBasketCheckout($event->getData());
        break;

      case VirginUserEvents::CHECK_TICKET_SYNC:
        $this->onCheckTicketSync($event);
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

    // If user is accessing for the first time do not sync
    if (empty($account->access)) {
      return;
    }

    $failure_callback = function (\Exception $e) {
      // A sync problem during login is not critical, do nothing here
    };

    $this->sync($account, $failure_callback);
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
    $failure_callback = function (\Exception $e) {
      drupal_set_message(t("It's not you, it's us. We're sprinting to fix this error and we hope to be back on track shortly. Thanks for your patience!"), 'error');
      drupal_goto('/user');
    };

    $this->sync($account, $failure_callback);
  }

  /**
   * Executed when the basket checkout is finished
   *
   * @param \VirginUserBasketEventData $data
   */
  protected function onBasketCheckout(VirginUserBasketEventData $data) {
    $account = $data->getAccount();
    $expected_regos = $data->getTicketRegos();

    // On sync failure create placeholder tickets for all the tickets that
    // were expected and let the user know something happened.
    $failure_callback = function () use ($account, $expected_regos) {
      drupal_set_message(t("It's not you, it's us. We're sprinting to deliver your tickets here. Thanks for your patience!"), 'warning');
      $this->createPlaceholderTickets($account, $expected_regos);
    };

    // On success, compute the difference between the synced regos and the
    // regos that were expected, and if tickets are missing add placeholders
    // for each one of them.
    $success_callback = function ($synced_regos) use ($account, $expected_regos) {
      $rego_diff = array_diff($expected_regos, $synced_regos);

      if (count($rego_diff)) {
        drupal_set_message(t("It's not you, it's us. We're sprinting to deliver your tickets here. Thanks for your patience!"), 'warning');

        watchdog(
          'virgin_user',
          "Ticket sync problem ocurred. Expected: @expected Got: @got",
          array(
            '@expected' => implode(', ', $expected_regos),
            '@got' => implode(', ', $synced_regos)
          )
        );

        $this->createPlaceholderTickets($account, $rego_diff);
      }
    };

    // Execute the sync with SugarCRM
    $this->sync($account, $failure_callback, $success_callback);
  }

  /**
   * Executed when the basket checkout is finished but no sync should be done
   *
   * @param \VirginUserBasketEventData $data
   */
  protected function onNoSyncBasketCheckout(VirginUserBasketEventData $data) {
    $account = $data->getAccount();
    $expected_regos = $data->getTicketRegos();

    // Mark these regos as placeholder tickets so that the system can know
    // that there are tickets to be synced. @see onCheckTicketSync()
    $this->createPlaceholderTickets($account, $expected_regos);
  }

  /**
   * Executed when there's a check to see if the user's tickets are in sync
   *
   * @param \ObserverEventInterface $event
   */
  protected function onCheckTicketSync(ObserverEventInterface $event) {
    $account = $event->getData();
    $elapsed = time() - $this->getUserLastAttemptedSync($account);

    // If the elapsed time since last sync is less than the period that is
    // set between sync attempts, bailout now.
    if ($elapsed < VIRGIN_USER_TICKET_SYNC_PERIOD) {
      return;
    }

    // Otherwise check if there are placeholder tickets belonging to this user
    $sql = "
      SELECT uid
      FROM {virgin_user_tickets}
      WHERE uid = :uid
      AND is_placeholder = 1
      LIMIT 1
    ";

    $uid = db_query($sql, array(':uid' => $account->uid))->fetchField();

    // If there aren't placeholder tickets for this user bailout now
    if (empty($uid)) {
      return;
    }

    // Otherwise attempt to sync, and if it fails do nothing as the user does
    // not need to know the background sync failed.
    $this->sync($account, function () {});
  }

  /**
   * Syncs a given user account and tickets from SugarCRM
   *
   * @param stdClass $account
   *  The user object for whom data is being fetched for
   * @param callable $failure_callback
   *  A callback that is executed when there has been a sync problem with
   *  SugarCRM. The exception of this failure is passed to the callback.
   * @param callable $success_callback
   *  A callback that is executed when there has been a successful sync
   *  with SugarCRM. The list of synced ticket regos are passed to the
   *  callback.
   */
  protected function sync($account, callable $failure_callback, callable $success_callback = NULL) {

    // If it's the admin user, bailout now as we don't sync anything for him
    // from SugarCRM.
    if ($account->uid === "1") {
      return;
    }

    $account = user_load($account->uid);
    $sugar_id = $this->getUserSugarID($account);
    $modified_since = $this->getUserLastSuccessfulSync($account);

    // If for some reason the user does not have a SugarID, then bailout as
    // there's nothing to fetch from SugarCRM.
    if (empty($sugar_id)) {
      return;
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
      $failure_callback($e);

      return;
    }

    // Update the ticket cache and update the profile fields accordingly
    $sync_time = $g->get('timestamp')->value(time());
    $synced_regos = $this->syncTickets($account, $g->get('tickets'));
    $is_profile_updated = $this->syncProfile($account, $g->get('contact'));

    // If either some tickets were synced or the profile has been updated,
    // we consider this a successful pull.
    $mark_as_success = (!empty($synced_regos) || $is_profile_updated);

    // Flush any profile changes
    $this->saveProfileChanges($account, $is_profile_updated, $mark_as_success, $sync_time);

    // And finally execute the success callback with the list of synced rego IDs
    if ($success_callback) {
      $success_callback($synced_regos);
    }
  }

  /**
   * Get the timestamp of the last attempted sync with SugarCRM for the given user
   *
   * @param $account
   *  The user object to get the last attempted sync timestamp
   * @return int
   *  The timestamp of the last attempted sync
   *
   * @see saveProfileChanges()
   */
  protected function getUserLastAttemptedSync($account) {
    return empty($account->data[VIRGIN_USER_DATA_LAST_ATTEMPTED_PULL]) ? 0 : $account->data[VIRGIN_USER_DATA_LAST_ATTEMPTED_PULL];
  }

  /**
   * Get the timestamp of the last successful sync with SugarCRM for the given user
   *
   * @param $account
   *  The user object to get the last successful sync timestamp
   * @return int
   *  The timestamp of the last successful sync
   *
   * @see saveProfileChanges()
   */
  protected function getUserLastSuccessfulSync($account) {
    return empty($account->data[VIRGIN_USER_DATA_LAST_SUCCESSFUL_PULL]) ? 0 : $account->data[VIRGIN_USER_DATA_LAST_SUCCESSFUL_PULL];
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
    $path = sprintf('Virgin/Contacts/%s/digest/%s', $sugar_id, $modified_since);
    $response = sugarcrm_client()->systemGet($path);

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
   * @param bool $is_successful_pull
   *  (Optional) If set to true, then the user's last successful sync timestamp
   *  will be updated to the sync time. FALSE by default.
   * @param int $sync_time
   *  (Optional) If set, this will be the timestamp that's used to mark the
   *  last successful sync. If empty, fallbacks to the current time.
   */
  protected function saveProfileChanges($account, $save_field_changes = TRUE, $is_successful_pull = FALSE, $sync_time = 0) {

    // Save the user field changes without triggering a hook_user_update(), as
    // we do not want to trigger an update loop between SugarCRM and Drupal.
    if ($save_field_changes) {
      field_attach_update('user', $account);
    }

    // Store the last attempted sync timestamp in the user data column
    $account->data[VIRGIN_USER_DATA_LAST_ATTEMPTED_PULL] = time();

    if ($is_successful_pull) {
      $account->data[VIRGIN_USER_DATA_LAST_SUCCESSFUL_PULL] = empty($sync_time) ? time() : $sync_time;
    }

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

  /**
   * Creates placeholder tickets for each ticket regos
   *
   * @param stdClass $account
   *  The user account object who is going to be set as the owner of the ticket
   * @param string[] $ticket_regos
   *  A list of Attendly rego IDs that are to be set as placeholder tickets
   */
  protected function createPlaceholderTickets($account, $ticket_regos = array()) {
    foreach ($ticket_regos as $rego) {
      $q = db_merge('virgin_user_tickets');

      $q->key(array(
        'attendly_rego_id' => $rego,
      ));

      $q->fields(array(
        'attendly_rego_id' => $rego,
        'uid' => $account->uid,
        'is_placeholder' => TRUE,
        'placeholder_date' => time()
      ));

      $q->execute();
    }
  }
}
