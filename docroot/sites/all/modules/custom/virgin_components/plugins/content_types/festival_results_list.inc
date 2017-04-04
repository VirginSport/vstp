<?php

/**
 * @file
 * Declares the Festival Header ctools content-type plugin.
 */

$plugin = array(
  'single' => TRUE,
  'title' => t('Festival Results'),
  'description' => '',
  'category' => 'Lists',
  'defaults' => array(),
);

/**
 * Implements hook_plugin_content_type_render().
 */
function virgin_components_festival_results_list_content_type_render($subtype, $conf, $args, $context) {
  $query = db_query("
    SELECT nid from {node} n
    INNER JOIN {field_data_field_festival_state} fs ON fs.entity_id = n.nid
    INNER JOIN {field_data_field_end_date} fed ON fed.entity_id = fs.field_festival_state_target_id
    INNER JOIN {field_data_field_status} fstatus ON fstatus.entity_id = n.nid
    WHERE n.type = 'festival' AND fstatus.field_status_value = 'over'
    ORDER BY fed.field_end_date_value DESC
  ");

  $results = $query->fetchCol();

  $content = '';

  foreach ($results as $festival_nid) {
    $fg = new VirginEntityGrapher('node', node_load($festival_nid));
    $fsg = $fg->relation('field_festival_state');

    $festival_events = virgin_base_events($fg->property('nid'));
    $events = array();

    foreach ($festival_events as $nid => $name) {
      $eg = new VirginEntityGrapher('node', node_load($nid));
      $esg = $eg->relation('field_event_state');

      if ($esg->fieldGetOne('field_event_type') != 'timed_event') {
        continue;
      }

      $events[$nid] = $eg;
    }

    $results_url = $fg->fieldGetOne('field_results_url', 'node/' . $festival_nid, 'url');

    $vars = array(
      'festival' => $fg,
      'festival_state' => $fsg,
      'events' => $events,
      'link_url' => url($results_url),
      'brand_color' => $fg->fieldGetOne('field_brand_color'),
      'brand_pattern' => $fg->fieldGetOne('field_brand_pattern'),
      'image_atom' => $fg->relation('field_card_image_results')
    );

    $content .= theme('virgin_components__ct__festival_results_card', $vars);
  }

  $block = new stdClass();
  $block->module = '';
  $block->delta = '';
  $block->content = $content;
  $block->title = '';

  return $block;
}

/**
 * Implements hook_plugin_content_type_edit_form().
 */
function virgin_components_festival_results_list_content_type_edit_form($form, &$form_state) {
  return $form;
}
