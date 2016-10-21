<?php
/**
 * @file
 * virgin_roles.context_config.inc
 */

/**
 * Implements hook_default_scald_context_config().
 */
function virgin_roles_default_scald_context_config() {
  $export = array();

  $context_config = new stdClass();
  $context_config->disabled = FALSE; /* Edit this to true to make a default context_config disabled initially */
  $context_config->api_version = 1;
  $context_config->context = 'sdl_library_item';
  $context_config->transcoder = array(
    'image' => array(
      '*' => 'style-library',
    ),
  );
  $context_config->player = array(
    'image' => array(
      '*' => 'default',
    ),
  );
  $context_config->data = array();
  $export['sdl_library_item'] = $context_config;

  return $export;
}
