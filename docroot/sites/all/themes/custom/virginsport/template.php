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

  $themes['virginsport_notification'] = array(
    'template' => 'virginsport-notification',
    'variables' => array(
      'classes' => '',
      'message' => '',
      'sticky' => FALSE,
      'close_button' => TRUE
    )
  ) + $default;

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

  $themes['virginsport_share_buttons'] = array(
      'template' => 'virginsport-share-buttons',
      'variables' => array(
        'subject' => '',
        'url' => ''
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

  drupal_add_library('system', 'drupal.ajax');
  drupal_add_library('chosen', 'drupal.chosen');

  // Check if page manager is handling the current page
  $vars['apply_page_wrapper'] = virginsport_check_wrapper_required();

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

  // Setup attendly basket link counter
  $attendly_url = variable_get(VIRGIN_VAR_ATTENDLY_URL);
  $attendly_env = variable_get(VIRGIN_VAR_ATTENDLY_ENV);

  $vars['basket_url'] = sprintf('%s/e/checkout', $attendly_url);
  $vars['basket_cookie'] = empty($attendly_env) ? VIRGIN_USER_ATTENDLY_ITEMS_COOKIE : VIRGIN_USER_ATTENDLY_ITEMS_COOKIE . '-' . $attendly_env;

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

  // Fetch the list of regions
  $vars['regions'] = virginsport_regions();
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
 * Generates an HTML style attribute with background-image from an atom object
 *
 * @param $atom
 *  The asset id
 * @param $style
 *  The image style
 * @return string
 *  HTML style attribute with background-image. For example: background-image: url(...);"
 */
function virginsport_atom_background($atom, $style = 'virgin_original') {
  if (empty($atom) || empty($atom->sid)) {
    return '';
  }

  if (empty($atom->file_source)) {
    $atom = scald_atom_load($atom->sid);
  }

  $image_url = image_style_url($style, $atom->file_source);

  return 'background-image: url(' . $image_url . ');';
}

/**
 * Generates the url from an atom object
 *
 * @param $atom
 *  The asset
 * @return string
 *  The asset url
 */
function virginsport_atom_url($atom) {
  if (empty($atom) || empty($atom->sid)) {
    return '';
  }

  if (empty($atom->file_source)) {
    $atom = scald_atom_load($atom->sid);
  }

  $url = file_create_url($atom->file_source);

  return $url;
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

  if ($value == 0) {
    return t('Free');
  }

  return check_plain(sprintf($format, $value));
}

/**
 * Get the number of days left for a specific date
 *
 * @param $date
 *  The date timestamp
 * @return string
 *  The number of days
 */
function virginsport_days_left($date) {
  // Make sure we don't have negative interval
  $date_difference = abs($date - time());

  // Get the number of days between dates
  $days_left = floor($date_difference / 60 / 60 / 24);

  // Only return days left if it is smaller than 32 days
  return $days_left > 32 ? 0 : $days_left;
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

  // If the end date and start date are the same, simply return
  // the fully formatted start date.
  if (date('d M Y', $start_date) == date('d M Y', $end_date)) {
    return date('d M Y', $start_date);
  }

  // Otherwise, build the start/end date string
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

  return date($start_date_format, $start_date) . ' - ' . date('d M Y', $end_date);
}

/**
 * Checks whether a default page wrapper is required
 *
 * @return bool
 *  TRUE the page wrapper is required, FALSE otherwise
 */
function virginsport_check_wrapper_required() {
  $excluded_routes = array(
    'user',
    'user/login',
    'user/register',
    'user/password',
    'user/%',
    'user/%/edit',
    'node/%/tickets',
    'basket/confirm-claim/%'
  );

  $item = menu_get_item();

  if (in_array($item['path'], $excluded_routes)) {
    return FALSE;
  }

  if (module_exists('page_manager') && page_manager_get_current_page()) {
    return FALSE;
  }

  return TRUE;
}

/**
 * Get the list of regions
 *
 * @return array
 */
function virginsport_regions() {
  $regions = virgin_region_regions();
  $current_region = virgin_region_current();

  if ($current_region) {
    unset($regions[$current_region['hostname']]);
  }

  return array(
    'current' => $current_region,
    'other' => $regions
  );
}
