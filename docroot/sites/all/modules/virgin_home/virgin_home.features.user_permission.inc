<?php
/**
 * @file
 * virgin_home.features.user_permission.inc
 */

/**
 * Implements hook_user_default_permissions().
 */
function virgin_home_user_default_permissions() {
  $permissions = array();

  // Exported permission: 'administer panelizer node home_page content'.
  $permissions['administer panelizer node home_page content'] = array(
    'name' => 'administer panelizer node home_page content',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer node home_page context'.
  $permissions['administer panelizer node home_page context'] = array(
    'name' => 'administer panelizer node home_page context',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer node home_page defaults'.
  $permissions['administer panelizer node home_page defaults'] = array(
    'name' => 'administer panelizer node home_page defaults',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer node home_page layout'.
  $permissions['administer panelizer node home_page layout'] = array(
    'name' => 'administer panelizer node home_page layout',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer node home_page overview'.
  $permissions['administer panelizer node home_page overview'] = array(
    'name' => 'administer panelizer node home_page overview',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer node home_page settings'.
  $permissions['administer panelizer node home_page settings'] = array(
    'name' => 'administer panelizer node home_page settings',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'create home_page content'.
  $permissions['create home_page content'] = array(
    'name' => 'create home_page content',
    'roles' => array(
      'editor' => 'editor',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete any home_page content'.
  $permissions['delete any home_page content'] = array(
    'name' => 'delete any home_page content',
    'roles' => array(),
    'module' => 'node',
  );

  // Exported permission: 'delete own home_page content'.
  $permissions['delete own home_page content'] = array(
    'name' => 'delete own home_page content',
    'roles' => array(
      'editor' => 'editor',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit any home_page content'.
  $permissions['edit any home_page content'] = array(
    'name' => 'edit any home_page content',
    'roles' => array(),
    'module' => 'node',
  );

  // Exported permission: 'edit own home_page content'.
  $permissions['edit own home_page content'] = array(
    'name' => 'edit own home_page content',
    'roles' => array(
      'editor' => 'editor',
    ),
    'module' => 'node',
  );

  // Exported permission: 'view any unpublished home_page content'.
  $permissions['view any unpublished home_page content'] = array(
    'name' => 'view any unpublished home_page content',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'view_unpublished',
  );

  return $permissions;
}
