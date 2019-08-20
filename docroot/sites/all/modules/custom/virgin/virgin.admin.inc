<?php

/**
 * @file
 * Contains the virgin module administrative pages and callbacks.
 */

/**
 * Virgin social networks administrative callback.
 */
function virgin_admin_general_settings($form, &$form_state) {
  $form = array();

  $cookie_message = variable_get('cookie_message', '');

  $form['cookie_message'] = array(
    '#title' => t('Cookie message '),
    '#type' => 'text_format',
    '#default_value' => empty($cookie_message['value']) ? '' : $cookie_message['value'],
  );

  return system_settings_form($form);
}

/**
 * Virgin social networks administrative callback.
 */
function virgin_admin_social_networks_settings($form, &$form_state) {
  $form = array();

  $networks = virgin_social_networks();

  foreach ($networks as $key => $network) {
    $variable = 'virgin_social_network_' . $key;

    $form[$variable] = array(
      '#title' => t('@network URL', array('@network' => $network)),
      '#type' => 'textfield',
      '#default_value' => variable_get($variable, '')
    );
  }

  return system_settings_form($form);
}

/**
 * Virgin google libraries administrative callback.
 */
function virgin_admin_google_libraries($form, &$form_state) {
  $form = array();

  $form["ua_code"] = array(
    '#title' => t('Google Analytics tracking ID'),
    '#type' => 'textfield',
    '#description' => '',
    '#default_value' => variable_get('ua_code', '')
  );

  $form["gtm_code"] = array(
    '#title' => t('Google Optimize container ID'),
    '#type' => 'textfield',
    '#description' => '',
    '#default_value' => variable_get('gtm_code', '')
  );

  return system_settings_form($form);
}
