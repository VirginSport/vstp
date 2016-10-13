<?php

/**
 * @file
 * Main file for the virginsport theme.
 */

/**
 * Implements hook_theme().
 */
function virginsport_theme($existing, $type, $theme, $path) {
  $themes = array();

  $default = array(
    'file' => 'theme.inc',
    'path' => $path . '/theme'
  );

  $themes['virginsport_picture'] = array(
    'template' => 'virginsport-picture',
    'variables' => array(
      'image_style' => '',
      'classes' => '',
      'atom_id' => array(),
    )
  ) + $default;

  return $themes;
}

/**
 * Implements hook_js_alter().
 */
function virginsport_js_alter(&$js) {
  // Forcefully remove the bootstrap js file that's added by the
  // parent bootstrap theme as the code contained is deprecated
  // for the bootstrap version in use by virginsport.
  unset($js['sites/all/themes/contrib/bootstrap/js/bootstrap.js']);
}

/**
 * Implements hook_preprocess_HOOK() for page theme.
 */
function virginsport_preprocess_page(&$vars) {
  global $user;

  // Check if page manager is handling the current page
  $vars['page_manager'] = (module_exists('page_manager') && page_manager_get_current_page());

  // Setup the user information
  if (user_is_logged_in()) {
    $account = user_load($user->uid);
    $account_wrapper = entity_metadata_wrapper('user', $account);
    $first_name = $account_wrapper->field_first_name->value();
    $last_name = $account_wrapper->field_last_name->value();

    $vars['account'] = array(
      'first_name' => check_plain($first_name),
      'last_name' => check_plain($last_name),
      'initials' => check_plain(substr($first_name, 0, 1) . substr($last_name, 0, 1))
    );
  }

  // Setup the menus
  $vars['main_menu'] = virginsport_menu_items('main-menu');
  $vars['footer_menu'] = virginsport_menu_items('menu-footer-menu');

  // Setup the social networks
  $vars['social_networks'] = array();
  $networks = virgin_social_networks();

  foreach ($networks as $key => $network) {
    $url = variable_get('virgin_social_network_' . $key);

    if (empty($url)) {
      continue;
    }

    $vars['social_networks'][] = array(
      'key' => check_plain($key),
      'label' => check_plain($network),
      'url' => check_plain($url),
    );
  }
}

// Template Overrides
// -----------------------------------------------------------------------------

// Helpers
// -----------------------------------------------------------------------------

/**
 * Get the first level of menu items in a menu
 *
 * @param $menu_name
 *  The name of the menu to fetch the items from
 * @return array
 *  An array of structured arrays for each of the menu items with the keys:
 *  - url: The url of the link
 *  - title: The escaped title of the link
 *  - active: A boolean indicating if the link is active
 */
function virginsport_menu_items($menu_name) {
  $menu_items = &drupal_static(__FUNCTION__, array());

  if (!isset($menu_items[$menu_name])) {
    $tree = virginsport_menu_tree($menu_name, 1);
    $items = array();

    foreach ($tree as $key => $branch) {
      if (!is_numeric($key)) continue; // Skip render array properties

      $items[] = array(
        'url' => url($branch['#href']),
        'title' => check_plain($branch['#title']),
        'active' => (bool) $branch['#original_link']['in_active_trail']
      );
    }

    $menu_items[$menu_name] = $items;
  }

  return $menu_items[$menu_name];
}

/**
 * Gets a menu tree based on the current path with a customizable depth option.
 *
 * @param $menu_name
 *   The name of the menu
 * @param $max_depth
 *   The max depth of links to retrieve
 * @return
 *   A structured array representing the specified menu on the current page, to
 *   be rendered by drupal_render().
 */
function virginsport_menu_tree($menu_name, $max_depth = NULL) {
  $menu_output = &drupal_static(__FUNCTION__, array());
  $index = empty($max_depth) ? 0 : $max_depth;
  $menu_key = sprintf('%s-%s', $menu_name, $index);

  if (!isset($menu_output[$menu_key])) {
    $tree = menu_tree_page_data($menu_name, $max_depth);
    $menu_output[$menu_key] = menu_tree_output($tree);
  }

  return $menu_output[$menu_key];
}

/**
 * Gets the base url path relative to the theme
 *
 * @param $path
 *  The path without a / prefix
 * @return string
 *  The url path
 */
function virgin_sport_path($path) {
  return drupal_get_path('theme', 'virginsport') . '/' . $path;
}
