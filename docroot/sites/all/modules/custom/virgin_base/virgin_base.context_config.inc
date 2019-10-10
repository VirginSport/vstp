<?php

/**
 * @file
 * virgin_base.context_config.inc
 */

/**
 * Implements hook_default_scald_context_config().
 */
function virgin_base_default_scald_context_config() {
  $export = array();

  $context_config = new stdClass();
  $context_config->disabled = FALSE; /* Edit this to true to make a default context_config disabled initially */
  $context_config->api_version = 1;
  $context_config->context = 'sdl_editor_representation';
  $context_config->transcoder = array(
    'image' => array(
      '*' => 'style-vs_scald_preview',
    ),
  );
  $context_config->player = array(
    'image' => array(
      '*' => 'default',
      'settings' => array(),
    ),
  );
  $context_config->data = array(
    'width' => '',
    'height' => '',
  );
  $export['sdl_editor_representation'] = $context_config;

  return $export;
}
