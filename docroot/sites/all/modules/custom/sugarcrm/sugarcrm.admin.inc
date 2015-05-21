<?php

/**
 * @file
 * Handles administration facing pages.
 */

/**
 * Page callback handler for the sugarcrm configuration page.
 */
function sugarcrm_config_form($form, &$form_state) {

  $form['sugarcrm_url'] = array(
    '#type' => 'textfield',
    '#default_value' => variable_get('sugarcrm_url', ''),
    '#title' => t('SugarCRM URL'),
    '#description' => t('The SugarCRM instance URL'),
    '#required' => TRUE,
  );

  $form['sugarcrm_username'] = array(
    '#type' => 'textfield',
    '#default_value' => variable_get('sugarcrm_username', ''),
    '#title' => t('Username'),
    '#description' => t('The SugarCRM user username on whose behalf API calls will be made.'),
    '#required' => TRUE,
  );

  $form['sugarcrm_password'] = array(
    '#type' => 'password',
    '#default_value' => variable_get('sugarcrm_password', ''),
    '#title' => t('Password'),
    '#description' => t('The SugarCRM user password on whose behalf API calls will be made.'),
    '#required' => TRUE,
  );

  return system_settings_form($form);
}
