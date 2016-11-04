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

  // Exported permission: 'edit meta tags'.
  $permissions['edit meta tags'] = array(
    'name' => 'edit meta tags',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'administrator' => 'administrator',
    ),
    'module' => 'metatag',
  );

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
