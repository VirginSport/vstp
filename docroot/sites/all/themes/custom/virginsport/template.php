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
      'placeholder' => TRUE,
      'image_style' => '',
      'classes' => '',
      'atom_id' => array(),
      'use_h1' => FALSE,
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
      'location' => '',
      'use_placeholder' => FALSE,
      'twitter_text' => '',
      'facebook_text' => '',
      'classes' => '',
      'subject' => '',
      'body' => '',
      'url' => ''
    )
  ) + $default;

  $themes['virginsport_bar'] = array(
    'template' => 'virginsport-bar',
    'variables' => array(
      'use_path' => FALSE,
      'classes' => '',
      'label' => '',
      'url' => '',
    )
  ) + $default;

  $themes['virginsport_newsletter_form'] = array(
      'template' => 'virginsport-newsletter-form',
      'variables' => array(
        'default_email' => '',
        'classes' => '',
        'target_list' => '',
        'inline_button' => FALSE,
        'title' => '',
        'description' => '',
        'wrapper_classes' => '',
      )
    ) + $default;

  $themes['virginsport_checkout_bar'] = array(
    'template' => 'virginsport-checkout-bar',
    'variables' => array(
      'node' => '',
      'basket_url' => '',
      'brand_color' => '',
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
 * Implements hook_preprocess_HOOK() for html theme.
 */
function virginsport_preprocess_html(&$vars) {
  global $base_path, $theme_path;
  $vars['current_path'] = $base_path . $theme_path;

  $vars['node'] = menu_get_object('node');

  // Add content data to google tag manager data layer
  virginsport_add_gtm_data_layer($vars);

  // Add collected google tag manager data layer events
  $vars['data_layer_events'] = virgin_gtm()->get();

  // Add the Google Libraries defined
  $vars['ua_code'] = variable_get('ua_code', '');
  $vars['gtm_code'] = variable_get('gtm_code', '');
}

/**
 * Implements hook_preprocess_HOOK() for page theme.
 */
function virginsport_preprocess_page(&$vars) {
  global $user;

  drupal_add_library('system', 'drupal.ajax');
  drupal_add_library('chosen', 'drupal.chosen');

  // Check if this page has attendly header
  $vars['apply_attendly_header'] = virginsport_check_is_attendly_header();

  // Check if page manager is handling the current page
  $vars['apply_page_wrapper'] = virginsport_check_wrapper_required();

  // Setup the user information
  if (user_is_logged_in()) {
    $account = user_load($user->uid);
    $account_wrapper = entity_metadata_wrapper('user', $account);
    $first_name = $account_wrapper->field_first_name->value();
    $last_name = $account_wrapper->field_last_name->value();

    // Fallback to a 'default' name if the name fields are empty
    $first_name = empty($first_name) ? 'Virgin' : $first_name;
    $last_name = empty($last_name) ? 'Sport' : $last_name;

    $vars['account'] = array(
      'first_name' => check_plain($first_name),
      'last_name' => check_plain($last_name),
      'initials' => check_plain(substr($first_name, 0, 1) . substr($last_name, 0, 1))
    );
  }

  // Setup the menus
  $vars['main_menu'] = virginsport_menu_items('main-menu');
  $vars['footer_menu'] = virgin_region_footer_links();

  // Setup attendly basket link counter
  $attendly_url = variable_get(VIRGIN_VAR_ATTENDLY_URL);
  $attendly_env = variable_get(VIRGIN_VAR_ATTENDLY_ENV);

  $vars['basket_url'] = sprintf('%s/e/checkout', $attendly_url);
  $vars['basket_cookie'] = empty($attendly_env) ? VIRGIN_USER_ATTENDLY_ITEMS_COOKIE : VIRGIN_USER_ATTENDLY_ITEMS_COOKIE . '-' . $attendly_env;

  $vars['show_checkout_bar'] = drupal_static(VIRGIN_ATTENDLY_IFRAME_RENDERED);

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

  // Setup the alerts
  $vars['alerts'] = virginsport_alerts();

  // Setup which Sugar target-list the user enrolls in footer
  $newsletter_list = virgin_region_get_current_region_newsletter_list();
  $vars['newsletter_list'] = !empty($newsletter_list) ? $newsletter_list : '';
  $vars['default_email'] = $user->uid > 0 ? $user->mail : '';

  // Make cookie template available in javascript
  $message = t('We use cookies. We eat them too, but only after a run. By using this website, you agree to our use of cookies. Check out our privacy policy to learn more.');
  $cookie_template = theme('virginsport_notification', array('message' => $message));
  drupal_add_js(array('virginsport' => array('cookie_template' => $cookie_template)), array('type' => 'setting'));
}

/**
 * Implements hook_preprocess_HOOK() for node theme.
 */
function virginsport_preprocess_node(&$vars) {
  // Add node vie mode suggestion
  $vars['theme_hook_suggestions'][] = sprintf('node__%s__%s', $vars['type'], $vars['view_mode']);

  $vars['grapher'] = new VirginEntityGrapher('node', $vars['node']);
}

/**
 * Implements hook_preprocess_HOOK() for mimemail_message theme.
 */
function virginsport_preprocess_mimemail_message(&$vars) {
  global $base_root, $base_path, $theme_path;

  $vars['theme_url'] = $base_root . $base_path . $theme_path;
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
 * @param string $style
 *  The image style
 * @param bool $url_only
 *  Whether the only the URL should be returned with no background-image css
 *  attribute.
 * @return string
 *  HTML style attribute with background-image e.g "background-image: url(...)"
 *  OR the URL is url_only is set to TRUE
 */
function virginsport_atom_background($atom, $style = 'virgin_original', $url_only = FALSE) {
  if (empty($atom) || empty($atom->sid)) {
    return '';
  }

  if (empty($atom->file_source)) {
    $atom = scald_atom_load($atom->sid);
  }

  $image_url = image_style_url($style, $atom->file_source);

  return $url_only ? $image_url : 'background-image: url(' . $image_url . ');';
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
 * @param string $tz_to
 *  The timezone the date interval should be converted to
 * @param string $tz_from
 *  The timezone the timestamps are relative to
 * @return string
 * The formatted date interval
 */
function virginsport_date_interval($start_date, $end_date, $tz_to = 'UTC', $tz_from = 'UTC') {
  $start = virgin_date($start_date, $tz_to, $tz_from);
  $end = virgin_date($end_date, $tz_to, $tz_from);

  // If the end date and start date are the same, simply return
  // the fully formatted start date.
  if ($start->format('d M Y') == $end->format('d M Y')) {
    return $start->format('d M Y');
  }

  // Otherwise, build the start/end date string
  $start_date_parts = array(
    'year' => $start->format('Y'),
    'month' => $end->format('M')
  );

  $end_date_parts = array(
    'year' => $end->format('Y'),
    'month' => $end->format('M')
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

  return $start->format($start_date_format) . ' - ' . $end->format('d M Y');
}

/**
 * Checks if a page applies the attendly header
 *
 * @return bool
 *  TRUE the page applies the attendly header, FALSE otherwise
 */
function virginsport_check_is_attendly_header() {
  $routes = array(
    'user/photos/%/%',
    'user/results/%',
    'node/%/photos'
  );

  $item = menu_get_item();

  if (in_array($item['path'], $routes)) {
    return TRUE;
  }

  return FALSE;
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
    'user/reset/%/%/%',
    'user/%',
    'user/%/edit',
    'node/%/tickets',
    'basket/confirm-claim/%',
    'hybridauth/window/%'
  );

  $item = menu_get_item();

  if (in_array($item['path'], $excluded_routes) || virginsport_check_is_attendly_header()) {
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

/**
 * Add GTM data layer property
 */
function virginsport_add_gtm_data_layer(&$vars) {
  // Get current path item
  $item = menu_get_item();
  $path = $item['path'];

  // Static pages Titles
  $routeKeys = array(
    'user/%' => 'Profile Page',
    'user/%/edit' => 'Account Details Page',
    'user/login' => 'Member Sign in Page',
    'user/register' => 'Member Sign up Page',
  );

  // Set default date format
  $date_format = 'd.m.Y';

  // Set default properties
  $properties = $metadata = array();

  // If gtm keys change, the metadata array keeps the original keys, for website events logic
  $properties['LoginState'] = $metadata['vs-login-state'] = user_is_anonymous() ? 'Not Logged In' : 'Logged In';
  $properties['URL'] = $metadata['vs-url'] = url(current_path(), array('absolute' => TRUE));
  $properties['PageName'] = $metadata['vs-page-name'] = array_key_exists($path, $routeKeys) ? $routeKeys[$path] : drupal_get_title();

  // Add specific properties for each node type
  if (!empty($vars['node'])) {
    $grapher = new VirginEntityGrapher('node', $vars['node']);

    $metadata['vs-content-type'] = $grapher->property('type');

    /**
     * Add festival metadata to festival related content
     *
     * @param $properties
     * @param $festival_grapher
     * @param $date_format
     */
    $addFestivalMetadata = function(&$properties, &$metadata, $festival_grapher, $date_format) {
      if ($festival_grapher->property('type') == 'festival') {
        $festival_state_grapher = $festival_grapher->relation('field_festival_state');
        $timezone = $festival_state_grapher->fieldGetOne('field_timezone');
        $start_date = virgin_date($festival_state_grapher->fieldGetOne('field_start_date'), $timezone)->format($date_format);
        $end_date = virgin_date($festival_state_grapher->fieldGetOne('field_end_date'), $timezone)->format($date_format);

        $properties['Festival Name'] = $metadata['vs-festival-name'] = $festival_grapher->property('title');
        $properties['Festival Date'] = $metadata['vs-festival-date'] = sprintf('%s - %s', $start_date,  $end_date);
      }
    };

    switch ($grapher->property('type')) {
      case 'region':
        $properties['PageName'] = $metadata['vs-page-name'] = $grapher->property('title') . ' Homepage';
        break;

      case 'page':
        $festival_grapher = $grapher->relation('field_festival');
        $addFestivalMetadata($properties, $metadata, $festival_grapher, $date_format);
        break;

      case 'festival':
        $addFestivalMetadata($properties, $metadata, $grapher, $date_format);
        break;

      case 'event':
        $festival_grapher = virgin_base_event_festival($grapher->property('nid'));
        $addFestivalMetadata($properties, $metadata, $festival_grapher, $date_format);

        $event_state_grapher = $grapher->relation('field_event_state');
        $timezone = $event_state_grapher->fieldGetOne('field_timezone');

        $start_date = virgin_date($event_state_grapher->fieldGetOne('field_start_date'), $timezone)->format($date_format);
        $properties['Event Name'] = $metadata['vs-event-name'] = $grapher->property('title');
        $properties['Event Type'] = $metadata['vs-event-type'] = $event_state_grapher->fieldGetOne('field_event_type');
        $properties['Event Date'] = $metadata['vs-event-date'] = $start_date;
        break;

      default:
        $properties['PageName'] = $metadata['vs-page-name'] = $grapher->property('title');
    }
  }

  // Add data layer encoded JSON
  $vars['gtm_metadata'] = $metadata;
  $vars['gtm_data_layer'] = drupal_json_encode(array($properties));
}

/**
 * Get the HTML of the list of alerts in the current request
 *
 * @return string
 *  The HTML of the list of alerts
 */
function virginsport_alerts() {
  $content = '';

  foreach (virgin_get_alerts() as $alert) {
    $content .= theme('virginsport_notification', array('message' => filter_xss($alert)));
  }

  return $content;
}
