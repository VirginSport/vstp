<?php

/**
 * @file
 * CTools content-type plugin file. Adds a custom title pane.
 */

$plugin = array(
  'single' => TRUE,
  'title' => t('Contact Form'),
  'description' => '',
  'category' => 'Virgin Sports',
  'defaults' => array(),
  'all contexts' => TRUE,
);

/**
 * Implements hook_FILE_NAME_plugin_render().
 */
function virgin_virgin_contact_content_type_render($subtype, $conf, $panel_args, $context) {
  global $user;

  $account = user_load($user->uid);
  $account_wrapper = entity_metadata_wrapper('user', $account);

  $form_state = array(
    'contact' => array(
      'given_name' => '',
      'surname' => '',
      'email' => '',
      'phone' => '',
    )
  );

  if (!empty($account)) {
    $given_name = $account_wrapper->field_given_name->value();
    $surname = $account_wrapper->field_surname->value();
    $email = $account_wrapper->mail->value();
    $phone = $account_wrapper->field_phone->value();

    $form_state['contact']['given_name'] = $given_name;
    $form_state['contact']['surname'] = $surname;
    $form_state['contact']['email'] = $email;
    $form_state['contact']['phone'] = $phone;
  }

  $block = new stdClass();
  $block->module = '';
  $block->delta = '';
  $block->content = drupal_build_form('virgin_virgin_contact_content_type_form', $form_state);
  $block->title = '';

  return $block;
}

/**
 * The contact form.
 */
function virgin_virgin_contact_content_type_form($form, &$form_state) {
  $form = array();

  $contact = $form_state['contact'];

  $form['given_name'] = array(
    '#title' => t('Given Name'),
    '#type' => 'textfield',
    '#required' => TRUE
  );

  if (!empty($contact['given_name'])) {
    $form['given_name'] += array(
      '#value' => $contact['given_name'],
      '#disabled' => TRUE,
    );
  }

  $form['surname'] = array(
    '#title' => t('Surname'),
    '#type' => 'textfield',
    '#required' => TRUE
  );

  if (!empty($contact['surname'])) {
    $form['surname'] += array(
      '#value' => $contact['surname'],
      '#disabled' => TRUE,
    );
  }

  $form['company_name'] = array(
    '#title' => t('Company Name'),
    '#type' => 'textfield',
  );

  $form['email'] = array(
    '#title' => t('E-Mail'),
    '#type' => 'textfield',
    '#required' => TRUE,
    '#element_validate' => array(
      'virgin_element_email_validate'
    )
  );

  if (!empty($contact['email'])) {
    $form['email'] += array(
      '#value' => $contact['email'],
      '#disabled' => TRUE,
    );
  }

  $form['phone'] = array(
    '#title' => t('Contact Number'),
    '#type' => 'textfield',
    '#required' => TRUE,
  );

  if (!empty($contact['phone'])) {
    $form['phone'] += array(
      '#value' => $contact['phone'],
      '#disabled' => TRUE,
    );
  }

  $form['message'] = array(
    '#title' => t('Message'),
    '#type' => 'textarea',
    '#required' => TRUE,
  );

  $form['submit'] = array(
    '#type' => 'submit',
    '#value' => t('Submit')
  );

  return $form;
}

/**
 * Validation callback for the Virgin Contact form
 *
 * @see virgin_virgin_contact_content_type_form()
 */
function virgin_virgin_contact_content_type_form_validate($form, &$form_state) {

  // If the form has field errors, do not notify observers.
  if (form_get_errors()) {
    return;
  }

  $values = $form_state['values'];

  $data = array(
    'given_name' => $values['given_name'],
    'surname' => $values['surname'],
    'company_name' => $values['company_name'],
    'email' => $values['email'],
    'phone' => $values['phone'],
    'message' => $values['message'],
  );

  $error = FALSE;
  $error_message = t('It was not possible to send your contact message at this time. Please try again later.');

  try {
    observer_notify('virgin:contact:request', $data);
  } catch (VirginException $e) {
    watchdog_exception('virgin', $e);

    if ($e->hasUserMessage()) {
      $error_message = $e->getUserMessage();
    }

    $error = TRUE;

  } catch (Exception $e) {
    watchdog_exception('virgin', $e);
    $error = TRUE;
  }

  if ($error) {
    form_set_error('', $error_message);
  }
}

/**
 * Submission callback for the Virgin Contact form
 *
 * @see virgin_virgin_contact_content_type_form()
 */
function virgin_virgin_contact_content_type_form_submit($form, &$form_state) {
  drupal_set_message(t('Your contact request has been sent.'));
}
