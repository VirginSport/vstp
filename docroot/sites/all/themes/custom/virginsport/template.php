<?php

/**
 * @file
 * Main file for the virginsport theme.
 */

/**
 * Implements hook_preprocess_HOOK() for page theme.
 */
function virginsport_preprocess_page(&$vars) {
  // Menus
  $vars['main_menu'] = virginsport_get_menu_tree('main-menu', 2);
  $vars['footer_menu'] = virginsport_get_menu_tree('menu-footer-menu', 1);

  unset($vars['main_menu']['#theme_wrappers']);
  unset($vars['footer_menu']['#theme_wrappers']);
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
