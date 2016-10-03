<?php

/**
 * Page callback for the splash page
 */
function virgin_region_page_splash () {
  global $cookie_domain;

  drupal_add_js(array('virgin_region' => array('cookie_domain' => $cookie_domain)), array('type' => 'setting'));
  drupal_add_js(drupal_get_path('module', 'virgin_region') . '/js/virgin_region_page_splash_redirect.js');

  // TODO implement splash page
  $links = '';

  // Placeholder for the final splash page implementation.
  foreach (virgin_region_regions() as $host => $region) {
    $links .= sprintf('<a href="http://%s" region-hostname="%s">%s</a><br>', $host, check_plain($region['hostname']), check_plain($region['title']));
  }

  $links .= '<style type="text/css">body.page-splash { display: none; } body.page-splash.page-splash--ready { display: block; }</style>';
  $links .= '<noscript><style type="text/css">body { display: block !important; }</style></noscript>';
  $links .= '<script>document.body.classList.add("page-splash--ready")</script>';

  print theme('html', array(
    'page' => array(
      'page_top' => array(),
      'page_bottom' => array(),
      '#children' => $links
    )
  ));
}
