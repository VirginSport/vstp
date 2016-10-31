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

  $themes['virginsport_color'] = array(
    'template' => 'virginsport-color',
    'variables' => array(
      'brand_color' => '',
      'brand_pattern' => '',
    )
  ) + $default;

  $themes['virginsport_picture'] = array(
    'template' => 'virginsport-picture',
    'variables' => array(
      'image_style' => '',
      'classes' => '',
      'atom_id' => array(),
    )
  ) + $default;

  $themes['virginsport_cta_links'] = array(
    'template' => 'virginsport-cta-links',
    'variables' => array(
      'links' => '',
      'classes' => '',
    )
  ) + $default;

  return $themes;
}

/**
 * Implements hook_js_alter().
 *
 * TODO remove this alter once bootstrap is extracted as the parent theme
 */
function virginsport_js_alter(&$js) {
  // Forcefully remove the bootstrap js file that's added by the
  // parent bootstrap theme as the code contained is deprecated
  // for the bootstrap version in use by virginsport.
  unset($js['sites/all/themes/contrib/bootstrap/js/bootstrap.js']);

  // Restore default drupal vertical tabs behaviour overriden
  // by bootstrap theme.
  unset($js['sites/all/themes/contrib/bootstrap/js/misc/_vertical-tabs.js']);
  $js['misc/vertical-tabs.js'] = drupal_js_defaults('misc/vertical-tabs.js');
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

/**
 * Implements hook_preprocess_HOOK() for node theme.
 */
function virginsport_preprocess_node(&$vars) {
  // Add node vie mode suggestion
  $vars['theme_hook_suggestions'][] = sprintf('node__%s__%s', $vars['type'], $vars['view_mode']);

  $vars['grapher'] = new VirginEntityGrapher('node', $vars['node']);
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

/**
 * Get a properly formatted currency string
 *
 * @param $iso_code
 *  The currency ISO Code
 * @param $value
 *  The currency value
 * @return string
 *  The formatted currency value
 */
function virginsport_currency($iso_code, $value) {
  $symbols = array(
    'none' => '%s',
    'GBP' => '£%s',
    'USD' => '$%s',
    'EUR' => '€%s'
  );

  $format = empty($symbols[$iso_code]) ? $symbols['none'] : $symbols[$iso_code];

  // Remove cents from the value if their value is 0
  if (substr($value, -3) == '.00') {
    $value = substr($value, 0, -3);
  }

  return check_plain(sprintf($format, $value));
}

/**
 * Get a properly formatted date interval
 *
 * @param $start_date
 *  The start date timestamp
 * @param $end_date
 *  The end date timestamp
 * @return string
 *  The formatted date interval
 */
function virginsport_date_interval($start_date, $end_date) {
  // Get start_date, end_date month and year parts
  $start_date_parts = array(
    'year' => date('Y', $start_date),
    'month' => date('M', $start_date)
  );

  $end_date_parts = array(
    'year' => date('Y', $end_date),
    'month' => date('M', $end_date)
  );

  $start_date_format = 'd M Y';
  // If year is the same start date does not have year
  if ($start_date_parts['year'] == $end_date_parts['year']) {
    $start_date_format = 'd M';

    // If year is the same and month the same too, start date does not have
    // neither year and month
    if ($start_date_parts['month'] == $end_date_parts['month']) {
      $start_date_format = 'd';
    }
  }

  // Return the formatted dates interval
  return date($start_date_format, $start_date) . ' - ' . date('d M Y', $end_date);
}
