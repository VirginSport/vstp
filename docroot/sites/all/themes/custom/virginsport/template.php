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
 * Implements hook_preprocess_HOOK() for page theme.
 */
function virginsport_preprocess_page(&$vars) {
  global $user;

  // Check if page manager is handling the current page.
  $vars['page_manager'] = (module_exists('page_manager') && page_manager_get_current_page());

  // User information
  if (user_is_logged_in()) {
    $account = user_load($user->uid);
    $account_wrapper = entity_metadata_wrapper('user', $account);

    $vars['account'] = array(
      'first_name' => $account_wrapper->field_first_name->value()
    );
  }

  // Menus
  $vars['main_menu'] = virginsport_get_menu_tree('main-menu', 2);
  $vars['footer_menu'] = virginsport_get_menu_tree('menu-footer-menu', 1);

  unset($vars['main_menu']['#theme_wrappers']);
  unset($vars['footer_menu']['#theme_wrappers']);

  // Social Networks
  $vars['social_networks'] = array();
  $networks = virgin_social_networks();

  foreach ($networks as $key => $network) {
    $url = variable_get('virgin_social_network_' . $key);

    if (empty($url)) continue;

    $vars['social_networks'][] = array(
      'key' => check_plain($key),
      'label' => check_plain($network),
      'url' => check_plain($url),
    );
  }
}

// Template Overrides
// -----------------------------------------------------------------------------

/**
 * Overrides theme_menu_tree().
 *
 * @see bootstrap_menu_tree()
 */
function virginsport_menu_tree(&$variables) {
  return '<ul class="menu">' . $variables['tree'] . '</ul>';
}

/**
 * Overrides theme_menu_link().
 *
 * @see bootstrap_menu_link()
 */
function virginsport_menu_link(&$vars) {
  $element = $vars['element'];
  $sub_menu = '';

  if ($element['#below']) {
    $sub_menu = drupal_render($element['#below']);
  }
  // On primary navigation menu, class 'active' is not set on active menu item.
  // @see https://drupal.org/node/1896674
  if (($element['#href'] == $_GET['q'] || ($element['#href'] == '<front>' && drupal_is_front_page())) && (empty($element['#localized_options']['language']))) {
    $element['#attributes']['class'][] = 'active';
  }
  $output = l($element['#title'], $element['#href'], $element['#localized_options']);
  return '<li' . drupal_attributes($element['#attributes']) . '>' . $output . $sub_menu . "</li>\n";
}

// Helpers
// -----------------------------------------------------------------------------

/**
 * Gets a menu tree based on the current path with a customizable depth option.
 *
 * @param $menu_name
 *   The name of the menu.
 * @param $max_depth
 *   The max depth of links to retrieve.
 * @return
 *   A structured array representing the specified menu on the current page, to
 *   be rendered by drupal_render().
 */
function virginsport_get_menu_tree($menu_name, $max_depth = NULL) {
  $menu_output = &drupal_static(__FUNCTION__, array());
  $index = empty($max_depth) ? 0 : $max_depth;
  $menu_key = $menu_name + '-' + $index;

  if (!isset($menu_output[$menu_name])) {
    $tree = menu_tree_page_data($menu_name, $max_depth);

    $menu_output[$menu_key] = menu_tree_output($tree);
  }

  return $menu_output[$menu_key];
}

/**
 * Generates an HTML style attribute with background-image from an atom object.
 *
 * @param $atom
 *  The asset id-
 * @param $style
 *  The image style.
 * @return string
 *  HTML style attribute with background-image. For example: background-image: url(...);"
 */
function virginsport_atom_background($atom, $style = 'virgin_original') {

  if (empty($atom->file_source)) {
    $atom = scald_atom_load($atom->sid);
  }

  $image_url = image_style_url($style, $atom->file_source);

  return 'background-image: url(' . $image_url . ');';
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
