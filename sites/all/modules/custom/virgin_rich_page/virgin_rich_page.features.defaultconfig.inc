<?php
/**
 * @file
 * virgin_rich_page.features.defaultconfig.inc
 */

/**
 * Implements hook_defaultconfig_features().
 */
function virgin_rich_page_defaultconfig_features() {
  return array(
    'virgin_rich_page' => array(
      'strongarm' => 'strongarm',
      'user_default_permissions' => 'user_default_permissions',
    ),
  );
}

/**
 * Implements hook_defaultconfig_strongarm().
 */
function virgin_rich_page_defaultconfig_strongarm() {
  $export = array();

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'additional_settings__active_tab_rich_page';
  $strongarm->value = 'edit-submission';
  $export['additional_settings__active_tab_rich_page'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'diff_enable_revisions_page_node_rich_page';
  $strongarm->value = 1;
  $export['diff_enable_revisions_page_node_rich_page'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'diff_show_preview_changes_node_rich_page';
  $strongarm->value = 1;
  $export['diff_show_preview_changes_node_rich_page'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'diff_view_mode_preview_node_rich_page';
  $strongarm->value = 'full';
  $export['diff_view_mode_preview_node_rich_page'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'field_bundle_settings_node__rich_page';
  $strongarm->value = array(
    'view_modes' => array(),
    'extra_fields' => array(
      'form' => array(
        'metatags' => array(
          'weight' => '5',
        ),
        'title' => array(
          'weight' => '0',
        ),
        'path' => array(
          'weight' => '3',
        ),
        'redirect' => array(
          'weight' => '4',
        ),
      ),
      'display' => array(),
    ),
  );
  $export['field_bundle_settings_node__rich_page'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'language_content_type_rich_page';
  $strongarm->value = '0';
  $export['language_content_type_rich_page'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'menu_options_rich_page';
  $strongarm->value = array(
    0 => 'main-menu',
  );
  $export['menu_options_rich_page'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'menu_parent_rich_page';
  $strongarm->value = 'main-menu:0';
  $export['menu_parent_rich_page'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'node_options_rich_page';
  $strongarm->value = array(
    0 => 'moderation',
    1 => 'panelizer',
    2 => 'revision',
  );
  $export['node_options_rich_page'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'node_preview_rich_page';
  $strongarm->value = '1';
  $export['node_preview_rich_page'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'node_submitted_rich_page';
  $strongarm->value = 0;
  $export['node_submitted_rich_page'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'panelizer_defaults_node_rich_page';
  $strongarm->value = array(
    'status' => 1,
    'view modes' => array(
      'page_manager' => array(
        'status' => 1,
        'substitute' => '',
        'default' => 1,
        'choice' => 1,
      ),
      'default' => array(
        'status' => 0,
        'substitute' => 0,
        'default' => 0,
        'choice' => 0,
      ),
      'teaser' => array(
        'status' => 0,
        'substitute' => 0,
        'default' => 0,
        'choice' => 0,
      ),
      'alternate' => array(
        'status' => 0,
        'substitute' => 0,
        'default' => 0,
        'choice' => 0,
      ),
      'thumbnail' => array(
        'status' => 0,
        'substitute' => 0,
        'default' => 0,
        'choice' => 0,
      ),
    ),
  );
  $export['panelizer_defaults_node_rich_page'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'save_continue_rich_page';
  $strongarm->value = 'Save and add fields';
  $export['save_continue_rich_page'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'webform_node_rich_page';
  $strongarm->value = 0;
  $export['webform_node_rich_page'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'workbench_moderation_default_state_rich_page';
  $strongarm->value = 'draft';
  $export['workbench_moderation_default_state_rich_page'] = $strongarm;

  return $export;
}

/**
 * Implements hook_defaultconfig_user_default_permissions().
 */
function virgin_rich_page_defaultconfig_user_default_permissions() {
  $permissions = array();

  // Exported permission: 'administer panelizer node rich_page choice'.
  $permissions['administer panelizer node rich_page choice'] = array(
    'name' => 'administer panelizer node rich_page choice',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer node rich_page content'.
  $permissions['administer panelizer node rich_page content'] = array(
    'name' => 'administer panelizer node rich_page content',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer node rich_page context'.
  $permissions['administer panelizer node rich_page context'] = array(
    'name' => 'administer panelizer node rich_page context',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer node rich_page defaults'.
  $permissions['administer panelizer node rich_page defaults'] = array(
    'name' => 'administer panelizer node rich_page defaults',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer node rich_page layout'.
  $permissions['administer panelizer node rich_page layout'] = array(
    'name' => 'administer panelizer node rich_page layout',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer node rich_page overview'.
  $permissions['administer panelizer node rich_page overview'] = array(
    'name' => 'administer panelizer node rich_page overview',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer node rich_page settings'.
  $permissions['administer panelizer node rich_page settings'] = array(
    'name' => 'administer panelizer node rich_page settings',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'create rich_page content'.
  $permissions['create rich_page content'] = array(
    'name' => 'create rich_page content',
    'roles' => array(),
    'module' => 'node',
  );

  // Exported permission: 'delete any rich_page content'.
  $permissions['delete any rich_page content'] = array(
    'name' => 'delete any rich_page content',
    'roles' => array(),
    'module' => 'node',
  );

  // Exported permission: 'delete own rich_page content'.
  $permissions['delete own rich_page content'] = array(
    'name' => 'delete own rich_page content',
    'roles' => array(),
    'module' => 'node',
  );

  // Exported permission: 'edit any rich_page content'.
  $permissions['edit any rich_page content'] = array(
    'name' => 'edit any rich_page content',
    'roles' => array(),
    'module' => 'node',
  );

  // Exported permission: 'edit own rich_page content'.
  $permissions['edit own rich_page content'] = array(
    'name' => 'edit own rich_page content',
    'roles' => array(),
    'module' => 'node',
  );

  return $permissions;
}
