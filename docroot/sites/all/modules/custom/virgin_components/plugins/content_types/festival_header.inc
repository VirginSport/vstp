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
function virgin_components_festival_header_content_type_render($subtype, $conf, $args, $context) {
  if (empty($args['festival']) && empty($context[0]->data)) {
    return;
  }

  // Get a shortcut to the node.
  $node = empty($args['festival']) ? $context[0]->data : $args['festival'];
  $g = new VirginEntityGrapher('node', $node);

  $show_sharer = TRUE;

  // Ensure the festival or event node is available
  switch ($g->property('type')) {

    // If it's a festival, we've already got all the data we need
    case 'festival':
      break;

    case 'page':
      $show_sharer = $g->fieldGetOne('field_has_share_button');
      $g = $g->relation('field_festival');
      break;

    // For events there isn't direct relation to the festival, as such
    // find the festival via a query indirection.
    case 'event':
      $sql = "
        SELECT fs2.entity_id AS festival_nid
        FROM {field_data_field_event_state} es
        JOIN {field_data_field_festival_state} fs1
          ON fs1.entity_id = es.field_event_state_target_id
          AND fs1.entity_type = 'node'
          AND fs1.bundle = 'event_state'
        JOIN {field_data_field_festival_state} fs2
          ON fs2.field_festival_state_target_id = fs1.field_festival_state_target_id
          AND fs2.bundle = 'festival'
        JOIN {node} n
          ON n.nid = fs2.entity_id
          AND n.status = 1
        WHERE es.entity_id = :id
        LIMIT 1
      ";

      $result = db_query($sql, array(':id' => $g->property('nid')));
      $festival_nid = $result->fetchField();
      break;

    default:
      return;
  }

  // If  the grapher does not contain a festival or an event bailout now
  if (!in_array($g->property('type'), array('festival', 'event'))) {
    return;
  }

  // Fetch the hostname of the festival of this event or festival
  $sql = "
    SELECT h.field_hostname_value as hostname
    FROM {field_data_field_region} r
    JOIN {field_data_field_hostname} h
      ON h.entity_id = r.field_region_target_id
      AND h.bundle = 'region'
    WHERE r.bundle = 'festival'
      AND r.entity_id = :nid
  ";

  // Event will return the festival nid, if it is not an event we'll use the
  // grapher nid because it will correspond to the festival nid
  $festival_nid = empty($festival_nid) ? $g->property('nid') : $festival_nid;

  $hostname = db_query($sql, array(':nid' => $festival_nid))->fetchField();

  // Fetch the right state depending if the grapher contains a festival
  // or an event.
  $state_field = ($g->property('type') == 'festival') ? 'field_festival_state' : 'field_event_state';
  $g_state = $g->relation($state_field);

  // Build the date information
  $start_date = $g_state->fieldGetOne('field_start_date');
  $end_date = $g_state->fieldGetOne('field_end_date');
  $timezone = $g_state->fieldGetOne('field_timezone');

  // Fetch the header image from the grapher
  $atom = $g->relation('field_header_image');
  $logo = $g->relation('field_logo');

  // Load the festival node, if a festival nid is available.
  $g_festival = NULL;

  if (!empty($festival_nid)) {
    $g_festival = new VirginEntityGrapher('node', node_load($festival_nid));
  }

  // If the header image could not be loaded, and there's a festival available,
  // then fetch the header image from the festival instead.
  if ($g_festival && ($atom->getEntityType() != 'scald_atom')) {
    $atom = $g_festival->relation('field_header_image');
  }

  // Ensure any alerts in the related festival are visible in the page where
  // the festival header component is visible.
  if ($g->property('type') == 'festival') {
    virgin_set_alert($g->fieldGetOne('field_alert'));
  } else if ($g_festival) {
    virgin_set_alert($g_festival->fieldGetOne('field_alert'));
  }

  // Get current menu path
  $menu_item = menu_get_item();

  // Build the template variables
  $vars = array(
    'title' => $g->fieldGetOne('title_field'),
    'start_date' => $start_date,
    'start_date_formatted' => !empty($start_date) ? format_date($start_date, 'custom', 'c', 'UTC') : '',
    'end_date' => $end_date,
    'timezone' => check_plain($timezone),
    'status' => ($g->property('type') == 'festival') ? $g->fieldGetOne('field_status') : $g->fieldGetOne('field_event_status'),
    'atom' => $atom->getEntityType() != 'scald_atom' ? NULL : $atom,
    'logo' => $logo->getEntityType() != 'scald_atom' ? NULL : $logo,
    'color' => $g->fieldGetOne('field_brand_color', ''),
    'show_sharer' => $show_sharer,
    'nid' => $g->property('nid'),
    'festival_nid' => $festival_nid,
    'event_nid' => $g->property('type') == 'festival' ? '' : $g->property('nid'),
    'festival_hostname' => $hostname,
    'link' => '', // Small link at the bottom, not used atm
    'link_label' => '', // Small link at the bottom, not used tm
    'cta_links' => $g->fieldGetAll('field_cta_link'),
    'is_tickets_page' => !empty($menu_item['path']) && $menu_item['path'] == 'node/%/tickets'
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
