<?php

/**
 * @file
 * virgin_ticket_type.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function virgin_ticket_type_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_node_info().
 */
function virgin_ticket_type_node_info() {
  $items = array(
    'ticket_type' => array(
      'name' => t('Ticket Type'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
    'ticket_type_state' => array(
      'name' => t('Ticket Type State'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  drupal_alter('node_info', $items);
  return $items;
}
