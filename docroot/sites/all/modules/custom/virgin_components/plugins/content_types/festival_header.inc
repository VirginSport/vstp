<?php

/**
 * @file
 * Declares the Festival Header ctools content-type plugin.
 */

$plugin = array(
  'single' => TRUE,
  'title' => t('Festival Header'),
  'description' => '',
  'category' => 'VirginSport',
  'required context' => array(
    new ctools_context_required(t('Node'), 'node')
  ),
  'defaults' => array(),
);

/**
 * Implements hook_plugin_content_type_render().
 */
function virgin_components_festival_header_content_type_render($subtype, $conf, $panel_args, $context) {
  if (empty($context) || empty($context[0]->data)) {
    return;
  }

  // Get a shortcut to the node.
  $node = $context[0]->data;
  $g = new VirginEntityGrapher('node', $node);

  // Ensure the festival node is available
  switch ($g->property('type')) {

    // If it's a festival do nothing, as we got everything we need
    case 'festival';
      break;

    case 'page':
      $g = $g->relation('field_festival');
      break;

    // For events there isn't direct relation to the festival, as
    // find the festival via a query indirection
    case 'event':
      $sql = "
        select fs2.entity_id as festival_nid
        from {field_data_field_event_state} es
        join {field_data_field_festival_state} fs1 on fs1.entity_id = es.field_event_state_target_id and fs1.entity_type = 'node' and fs1.bundle = 'event_state'
        join {field_data_field_festival_state} fs2 on fs2.field_festival_state_target_id = fs1.field_festival_state_target_id and fs2.bundle = 'festival'
        where es.entity_id = :id
        limit 1
      ";

      $result = db_query($sql, array(':id' => $g->property('nid')));
      $festival_nid = $result->fetchField();

      if (empty($festival_nid)) {
        return;
      }

      $g = new VirginEntityGrapher('node', node_load($festival_nid));

      break;
    default:
      return;
  }

  // If for some reason, the grapher does not contain a festival
  // bailout now.
  if ($g->property('type') != 'festival') {
    return;
  }

  // Finally, prepare the data for the header
  $g_state = $g->relation('field_festival_state');

  // Build the date information
  $start_date = $g_state->fieldGetOne('field_start_date');
  $end_date = $g_state->fieldGetOne('field_end_date');
  $start = format_date($start_date, 'custom', 'd', 'UTC');
  $end = format_date($end_date, 'custom', 'd M y', 'UTC');
  $date = sprintf('%s - %s', $start, $end);

  // Calculate the number of days left
  $from = new DateTime('now');
  $from->setTimestamp($start_date);
  $now = new DateTime('now');
  $days_left = $from->diff($now)->days;

  // Fetch the image
  $atom = $g->relation('field_header_image');

  $vars = array(
    'title' => $g->fieldGetOne('title_field', 'Festival'),
    'date' => $date,
    'status' => $g->fieldGetOne('field_status'),
    'days_left' => ($days_left < 32 && $end_date > time()) ? $days_left : NULL,
    'atom' => $atom->getEntityType() != 'scald_atom' ? NULL : $atom,
    'color' => $g->fieldGetOne('field_brand_color', ''),
    'link' => '', // Small link at the bottom, not used atm
    'link_label' => '' // Small link at the bottom, not used tm
  );

  $block = new stdClass();
  $block->module = '';
  $block->delta = '';
  $block->content = theme('virgin_components__ct__festival_header', $vars);
  $block->title = '';

  return $block;
}

/**
 * Implements hook_plugin_content_type_edit_form().
 */
function virgin_components_festival_header_content_type_edit_form($form, &$form_state) {
  return $form;
}
