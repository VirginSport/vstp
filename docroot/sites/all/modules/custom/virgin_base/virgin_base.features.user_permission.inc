<?php
/**
 * @file
 * virgin_base.features.user_permission.inc
 */

/**
 * Implements hook_user_default_permissions().
 */
function virgin_base_user_default_permissions() {
  $permissions = array();

  // Exported permission: 'view any atom'.
  $permissions['view any atom'] = array(
    'name' => 'view any atom',
    'roles' => array(
      'administrator' => 'administrator',
      'anonymous user' => 'anonymous user',
      'authenticated user' => 'authenticated user',
    ),
    'module' => 'scald',
  );

  return $permissions;
}
