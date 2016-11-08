<?php

/**
 * @file
 * Contains forms for virgin_user module.
 */

function virgin_user_form_contact($form, $form_state) {

  $form['title_info'] = array(
    '#prefix' => '<h4 class="vs-contact-form__title">',
    '#markup' => t('What did you want to say'),
    '#suffix' => '</h4>',
  );

  $form['festival'] = array(
    '#type' => 'select',
    '#options' => _virgin_user_form_festivals(),
  );

  $form['event'] = array(
    '#type' => 'select',
    '#options' => _virgin_user_form_events(),
  );

  $form['interested_in'] = array(
    '#type' => 'select',
    '#options' => array(
      'festival-event' => 'Festival/Event',
      'volunteering' => 'Volunteering',
      'fans' => 'Fans',
      'tickets' => 'Tickets',
      'vs-membership' => 'Virgin Sport Membership',
      'results' => 'Results',
      'potential-partnership' => 'Potential Partnership',
      'press-inquiry' => 'Press Inquiry',
      'careers' => 'Careers',
    )
  );

  $form['message'] = array(
    '#type' => 'textarea',
    '#title' => t('Message')
  );

  // Anonymous
  $form['title_about_you'] = array(
    '#prefix' => '<h4 class="vs-contact-form__title">',
    '#markup' => t('About you'),
    '#suffix' => '</h4>',
    '#access' => user_is_anonymous(),
  );

  $form['first_name'] = array(
    '#type' => 'textfield',
    '#title' => t('First Name'),
    '#access' => user_is_anonymous(),
    '#required' => TRUE,
  );

  $form['last_name'] = array(
    '#type' => 'textfield',
    '#title' => t('Last Name'),
    '#access' => user_is_anonymous(),
    '#required' => TRUE,
  );

  $form['email'] = array(
    '#type' => 'textfield',
    '#title' => t('Email'),
    '#access' => user_is_anonymous(),
    '#element_validate' => array('virgin_element_email_validate'),
    '#required' => TRUE,
  );

  $form['contact_number'] = array(
    '#type' => 'textfield',
    '#title' => t('Contact Number'),
    '#access' => user_is_anonymous(),
    '#required' => TRUE,
  );

  $form['mkt_optin'] = array(
    '#type' => 'checkbox',
    '#title' => t('Opt in for Marketing')
  );

  $form['required_notice'] = array(
    '#prefix' => '<div class="vs-contact-form__required-notice">',
    '#markup' => t('*mandatory fields'),
    '#suffix' => '</div>',
  );

  $form['submit'] = array(
    '#type' => 'submit',
    '#value' => t('Send Message'),
    '#ajax' => array(
      //'path' => 'upload/js',
      'wrapper' => 'attach-wrapper',
      'progress' => array(
        'type' => 'bar',
        'message' => t('Please wait...')
      ),
    ),
    //'#submit' => array('node_form_submit_build_node'),
  );

  return $form;
}

function virgin_user_form_contact_validate($form, $form_state) {

}

function virgin_user_form_contact_submit($form, $form_state) {

}

function _virgin_user_form_festivals() {
  $ids = db_query("
    SELECT n.nid
    FROM {node} n
    WHERE n.type = 'festival'
    AND n.status = 1
  ")->fetchCol();

  $nodes = node_load_multiple($ids);

  $list = array_map(function ($node) {
    return $node->title;
  }, $nodes);

  asort($list);

  return $list;
}

function _virgin_user_form_events() {
  $ids = db_query("
    SELECT n.nid
    FROM {node} n
    WHERE n.type = 'event'
    AND n.status = 1
  ")->fetchCol();

  $nodes = node_load_multiple($ids);

  $list = array_map(function ($node) {
    return $node->title;
  }, $nodes);

  asort($list);

  return $list;
}
