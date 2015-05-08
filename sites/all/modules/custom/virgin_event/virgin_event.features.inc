<?php
/**
 * @file
 * virgin_event.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function virgin_event_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "panelizer" && $api == "panelizer") {
    return array("version" => "1");
  }
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_node_info().
 */
function virgin_event_node_info() {
  $items = array(
    'event' => array(
      'name' => t('Event'),
      'base' => 'node_content',
      'description' => t('This type of content represents a race event coming from race events entered in Attendly which are owned by Virgin Sport'),
      'has_title' => '1',
      'title_label' => t('Event Name'),
      'help' => '',
    ),
  );
  drupal_alter('node_info', $items);
  return $items;
}
