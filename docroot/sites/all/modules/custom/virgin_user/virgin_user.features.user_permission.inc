<?php
/**
 * @file
 * virgin_user.features.user_permission.inc
 */

/**
 * Implements hook_user_default_permissions().
 */
function virgin_user_user_default_permissions() {
  $permissions = array();

  // Exported permission: 'use hybridauth'.
  $permissions['use hybridauth'] = array(
    'name' => 'use hybridauth',
    'roles' => array(
      'anonymous user' => 'anonymous user',
    ),
    'module' => 'hybridauth',
  );

  return $permissions;
}
