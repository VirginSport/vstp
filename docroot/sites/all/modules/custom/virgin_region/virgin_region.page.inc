<?php

/**
 * Page callback for the splash page
 */
function virgin_region_page_splash () {
  drupal_add_js(drupal_get_path('module', 'virgin_region') . '/js/virgin_region_page_splash.js');

  // We don't want to use template page.tpl.php which includes elements like
  // navbars, logo and other things that we don't want on this page, so we're
  // printing directly the html theme with page splash theme as a children
  // the html theme.
  print theme('html', array(
    'page' => array(
      'page_top' => array(),
      'page_bottom' => array(),
      '#children' => theme('virgin_region_page_splash', array('regions' => virgin_region_regions()))
    )
  ));
}
