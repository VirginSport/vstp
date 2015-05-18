<?php
/**
 * @file
 * virgin_taxonomy.features.defaultconfig.inc
 */

/**
 * Implements hook_defaultconfig_features().
 */
function virgin_taxonomy_defaultconfig_features() {
  return array(
    'virgin_taxonomy' => array(
      'strongarm' => 'strongarm',
    ),
  );
}

/**
 * Implements hook_defaultconfig_strongarm().
 */
function virgin_taxonomy_defaultconfig_strongarm() {
  $export = array();

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'panelizer_defaults_taxonomy_term_target_audience';
  $strongarm->value = array(
    'status' => 0,
    'view modes' => array(),
  );
  $export['panelizer_defaults_taxonomy_term_target_audience'] = $strongarm;

  return $export;
}
