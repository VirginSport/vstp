<?php

/**
 * Page callback for the splash page
 */
function virgin_region_page_splash () {
  $links = '';

  // Placeholder for the final splash page implementation.
  foreach (virgin_region_regions() as $host => $region) {
    $links .= sprintf('<a href="http://%s">%s</a><br>', $host, check_plain($region['title']));
  }

  return $links;
}
