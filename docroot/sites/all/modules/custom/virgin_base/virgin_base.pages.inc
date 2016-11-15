<?php
/**
 * @file
 * Page callbacks file for the virgin_base module.
 */

/**
 * Get the events related to given festival
 *
 * @param $festival_id
 *  The festival node id
 * @return array
 */
function virgin_base_ajax_festival_events($festival_id) {
  $events = virgin_base_events($festival_id);

  print drupal_json_encode($events);
}
