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
      'taxonomy_default_vocabularies' => 'taxonomy_default_vocabularies',
      'user_default_permissions' => 'user_default_permissions',
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

/**
 * Implements hook_defaultconfig_taxonomy_default_vocabularies().
 */
function virgin_taxonomy_defaultconfig_taxonomy_default_vocabularies() {
  return array(
    'target_audience' => array(
      'name' => 'Target Audience',
      'machine_name' => 'target_audience',
      'description' => 'This vocabulary is used to identify content target audiences',
      'hierarchy' => 0,
      'module' => 'taxonomy',
      'weight' => 0,
    ),
  );
}

/**
 * Implements hook_defaultconfig_user_default_permissions().
 */
function virgin_taxonomy_defaultconfig_user_default_permissions() {
  $permissions = array();

  // Exported permission: 'administer panelizer taxonomy_term target_audience defaults'.
  $permissions['administer panelizer taxonomy_term target_audience defaults'] = array(
    'name' => 'administer panelizer taxonomy_term target_audience defaults',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'delete terms in target_audience'.
  $permissions['delete terms in target_audience'] = array(
    'name' => 'delete terms in target_audience',
    'roles' => array(),
    'module' => 'taxonomy',
  );

  // Exported permission: 'edit terms in target_audience'.
  $permissions['edit terms in target_audience'] = array(
    'name' => 'edit terms in target_audience',
    'roles' => array(),
    'module' => 'taxonomy',
  );

  return $permissions;
}
