<?php

/**
 * @file
 * Contains the virgin module administrative pages and callbacks.
 */

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
