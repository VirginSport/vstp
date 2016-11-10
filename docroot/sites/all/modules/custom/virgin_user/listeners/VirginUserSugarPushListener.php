<?php

/**
 * @file
 * Contains the VirginApiSugarPushListener class
 */

/**
 * Listens for Drupal user related events and pushes information to SugarCRM
 *
 * This class creates and updates user information on SugarCRM when Users are
 * modified on Drupal and contact requests are made on their behalf in Sugar.
 *
 * @see virgin_virgin_contact_content_type_form_validate()
 */
class VirginUserSugarPushListener implements ObserverObserverInterface {

  /**
   * {@inheritdoc}
   */
  public function onNotify(ObserverEventInterface $event) {

    // If SugarCRM is not configured, do not attempt to do anything.
    if (!sugarcrm_is_configured()) {
      return;
    }

    switch ($event->getType()) {

      case VirginUserEvents::USER_CREATED:
        $this->onUserCreate($event);
        break;

      case VirginUserEvents::USER_UPDATED:
        $this->onUserUpdate($event);
        break;

      case 'virgin:contact:request':
        $this->onContactRequest($event);
        break;
    }
  }

  /**
   * Executed when a User is created on Drupal
   *
   * @param \ObserverEventInterface $event
   * @throws \VirginException
   *  Thrown if the user creation failed while attempting to contact SugarCRM.
   */
  private function onUserCreate(ObserverEventInterface $event) {
    $account = $event->getData();

    if ($this->canSynchronizeAccount($account)) {
      try {
        $sugar_id = $this->getEmailSugarId($account->mail);
        $contact_data = $this->transformUserAccountToUserData($account);
        $sugar_id = $this->saveContactToSugar($contact_data, $sugar_id);
        $this->setUserSugarId($account, $sugar_id, TRUE);
      } catch (Exception $e) {
        throw new VirginException($e->getMessage(), t('An error occurred while creating the account. Please try again at a later time.'));
      }
    }
  }

  /**
   * Executed when a User is update on Drupal
   *
   * @param \ObserverEventInterface $event
   * @throws \VirginException
   *  Thrown if the user update failed while attempting to contact SugarCRM.
   */
  private function onUserUpdate(ObserverEventInterface $event) {
    $account = $event->getData();

    if ($this->canSynchronizeAccount($account)) {
      try {
        $sugar_id = $this->getEmailSugarId($account->mail);
        $contact_data = $this->transformUserAccountToUserData($account);
        $sugar_id = $this->saveContactToSugar($contact_data, $sugar_id);
        $this->setUserSugarId($account, $sugar_id, TRUE);
      } catch (Exception $e) {
        throw new VirginException($e->getMessage(), t('An error occurred while updating the account. Please try again at a later time.'));
      }
    }
  }

  /**
   * Executed when a Contact Request is made on Drupal
   *
   * @param \ObserverEventInterface $event
   */
  private function onContactRequest(ObserverEventInterface $event) {
    global $user;

    $account = user_load($user->uid);
    $contact = $event->getData();

    $this->validateEmail($contact['email']);

    if (user_is_logged_in()) {
      $sugar_id = $this->getUserSugarId($account);
    }
    else {
      $sugar_id = $this->getEmailSugarId($contact['email']);
    }

    if (empty($sugar_id)) {
      $contact_data = $this->transformContactRequestToUserData($contact);
      $sugar_id = $this->saveContactToSugar($contact_data);

      if (user_is_logged_in()) {
        $this->setUserSugarId($account, $sugar_id, TRUE);
      }
    }

    $this->saveTaskInSugar($sugar_id, $contact['message']);
  }

  /**
   * Validates the e-mail address
   *
   * @param $email
   *  The e-mail address to be verified
   * @throws \VirginException
   *  Thrown if the user is anonymous and using an e-mail address of an existing
   *  user
   */
  private function validateEmail($email) {
    global $user;

    $account = user_load_by_mail($email);

    if (user_is_anonymous() && $account) {
      throw new VirginException('Attempted to use an e-mail from an existing user.', t('This e-mail belongs to an existing user. Please log in as that user or use a different e-mail address.'));
    }

    if (user_is_logged_in() && ($user->uid != $account->uid)) {
      throw new VirginException('Attempted to use different user email.', t('This e-mail belongs to a different user. Please log in as that user or use a different e-mail address.'));
    }
  }

  /**
   * Gets the Sugar Contact ID from a given user
   *
   * @param stdClass $account
   *  The fully loaded user account object.
   * @return null|string
   *  A string with the Sugar ID, null if the user has no Sugar ID.
   */
  private function getUserSugarId($account) {
    $account_wrapper = entity_metadata_wrapper('user', $account);

    return $account_wrapper->field_sugar_id->value();
  }

  /**
   * Gets a Contact ID from a given e-mail address
   *
   * @param $email
   *  The e-mail to find.
   * @return null|string
   *  A string with the Sugar ID, null if the user has no Sugar ID.
   */
  private function getEmailSugarId($email) {
    $parameters = array(
      'filter' => array(
        array(
          'email1' => $email
        )
      ),
    );

    $data = sugarcrm_client()->postEndpoint('Contacts/filter', $parameters);
    $records = $data['records'];

    return empty($records[0]['id']) ? NULL : $records[0]['id'];
  }

  /**
   * Generates the data structure for a Contact in SugarCRM via a User account
   *
   * @param stdClass $account
   * @return array
   */
  private function transformUserAccountToUserData($account) {
    $account_wrapper = entity_metadata_wrapper('user', $account);

    $birth_date = $account_wrapper->field_birth_date->value();

    return array(
      'virgin_sport_id' => $account_wrapper->uid->value(),
      'first_name' => $account_wrapper->field_first_name->value(),
      'last_name' => $account_wrapper->field_last_name->value(),
      'gender' => $account_wrapper->field_gender->value(),
      'birthdate' => empty($birth_date) ? '' : format_date($birth_date, 'custom', 'Y-m-d'),
      'phone_mobile' => $account_wrapper->field_contact_number->value(),
      'email1' => $account_wrapper->mail->value(),
      'primary_address_street' => $account_wrapper->field_address_line_1->value() . PHP_EOL . $account_wrapper->field_address_line_2->value(),
      'primary_address_city' => $account_wrapper->field_address_city->value(),
      'primary_address_state' => $account_wrapper->field_address_state->value(),
      'primary_address_postalcode' => $account_wrapper->field_address_postcode->value(),
      'primary_address_country' => $account_wrapper->field_address_country->value(),
      'marketing_email_opt_ins' => $account_wrapper->field_marketing_optin->value(),
      'affiliated_uk_athlete' => $account_wrapper->field_uk_athletics_number->value(),
      'medical_conditions' => $account_wrapper->field_medical_conditions->value(),
      'medical_conditions_other' => $account_wrapper->field_medical_conditions_other->value(),
      'medications' => $account_wrapper->field_medications->value(),
      'allergies' => $account_wrapper->field_allergies->value(),
      'share_info_with_vs' => $account_wrapper->field_agree_share_medical_info->value(),
    );
  }

  /**
   * Generates the data structure for a Contact in SugarCRM
   *
   * @param $contact
   *  The contact request data array.
   * @return array
   *  The data structured in the format expected by SugarCRM.
   */
  private function transformContactRequestToUserData($contact) {
    $defaults = array(
      'given_name' => '',
      'surname' => '',
      'phone' => '',
      'email' => '',
      'company_name' => ''
    );

    $contact = $contact + $defaults;

    return array(
      'first_name' => $contact['given_name'],
      'last_name' => $contact['surname'],
      'email1' => $contact['email'],
      'mobile' => $contact['phone']
      // TODO company name is missing a mapping in SugarCRM
    );
  }

  /**
   * Creates or Updates a Contact on SugarCRM
   *
   * @param $data
   *  The contact data
   * @param null|string $sugar_id
   *  If null a new contact will be created on Sugar, if filled it will try to
   *  create a new contact.
   * @return string
   *  The ID of the contact
   */
  private function saveContactToSugar($data, $sugar_id = NULL) {

    // If there's no Sugar ID it's because we haven't synced the event before.
    if (empty($sugar_id)) {
      $response = sugarcrm_client()->postEndpoint('Contacts', $data);
    }
    else {
      // In case we have the Sugar ID, attempt to update it instead on Sugar.
      // If it fails with a 404 it's because the event was not found on Sugar.
      // In this case, we'll create it there instead.
      try {
        $response = sugarcrm_client()->putEndpoint('Contacts/' . $sugar_id, $data);
      } catch (\Guzzle\Http\Exception\ClientErrorResponseException $e) {
        if ($e->getResponse()->getStatusCode() == 404) {
          $response = sugarcrm_client()->postEndpoint('Contacts', $data);
        }
        else {
          throw $e;
        }
      }
    }

    return $response['id'];
  }

  /**
   * Sets the SugarCRM ID on a given User
   *
   * @param stdClass $account
   *  The user account to have the Sugar ID set.
   * @param string $sugar_id
   *  The sugar id.
   * @param bool $save
   *  If true the account will be saved.
   */
  private function setUserSugarId($account, $sugar_id, $save = FALSE) {
    $account_wrapper = entity_metadata_wrapper('user', $account);
    $account_wrapper->field_sugar_id->set($sugar_id);

    if ($save && empty($account->is_new)) {
      // Save the changes to the user without triggering a hook_user_update().
      field_attach_update('user', $account);
    }
  }

  /**
   * Saves a Task in SugarCRM
   *
   * @param $contact_id
   *  The ID of the Contact to assign the Task in SugarCRM. Locally this is the
   *  field_sugar_id on the User entity.
   * @param $message
   *  The message of the task that will be created on Sugar.
   */
  private function saveTaskInSugar($contact_id, $message) {
    $data = array(
      'name' => 'Get in Touch',
      'contact_id' => $contact_id,
      'description' => $message,
      'date_start' => date('c')
    );

    sugarcrm_client()->postEndpoint('Tasks', $data);
  }

  /**
   * Checks whether the given account can be synchronized to SugarCRM
   *
   * @param $account
   *  The user account object.
   * @return bool
   *  TRUE if the account can be synchronized, FALSE otherwise.
   */
  private function canSynchronizeAccount($account) {

    // Accounts that were not enabled, are not synchronized.
    return !empty($account->status);
  }

}
