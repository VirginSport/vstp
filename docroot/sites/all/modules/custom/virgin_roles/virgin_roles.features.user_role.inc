<?php

/**
 * @file
 * virgin_roles.features.user_role.inc
 */

/**
 * Implements hook_user_default_roles().
 */
function virgin_roles_user_default_roles() {
  $roles = array();

  // Exported role: Content Editor.
  $roles['Content Editor'] = array(
    'name' => 'Content Editor',
    'weight' => 3,
  );

  // Exported role: Content Manager.
  $roles['Content Manager'] = array(
    'name' => 'Content Manager',
    'weight' => 4,
  );

  return $roles;
}
