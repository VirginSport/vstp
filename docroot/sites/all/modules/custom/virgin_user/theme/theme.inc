<?php
/**
 * @file
 * Handles Virgin user theme related logic.
 */


/**
 * Implements hook_preprocess_HOOK() for virgin user tickets theme.
 */
function virgin_user_preprocess_virgin_user__ticket(&$vars) {
  if (empty($vars['ticket'])) {
    return;
  }

  $ticket = $vars['ticket'];

  $get_entity = function ($id, $type) {
    $sql = "
      SELECT *  FROM {node} n
      INNER JOIN {field_data_field_sugar_id} sugar ON sugar.field_sugar_id_value = :id
      INNER JOIN {field_data_field_{$type}_state} es ON es.field_{$type}_state_target_id = sugar.entity_id AND es.entity_id = n.nid
      WHERE n.status = 1 AND n.type = :type
      LIMIT 1
    ";

    // Get the ticket event
    return db_query($sql, array(':id' => $id, ':type' => $type))->fetchObject();
  };

  $event = $get_entity($ticket->event_id, 'event');
  $ticket_type = $get_entity($ticket->ticket_type_id, 'ticket_type');

  if (empty($event) || empty($ticket_type)) {
    return;
  }

  $ticket_level_properties = virgin_ticket_banner_properties();

  $ticket_type_grapher = new VirginEntityGrapher('node', node_load($ticket_type->nid));
  $event_grapher = new VirginEntityGrapher('node', node_load($event->nid));

  $ticket_type_state_grapher = $ticket_type_grapher->relation('field_ticket_type_state');
  $event_state_grapher = $event_grapher->relation('field_event_state');

  $ticket_level = $ticket_type_state_grapher->fieldGetOne('field_ticket_level');
  $event_start_date = $event_state_grapher->fieldGetOne('field_start_date');
  $event_end_date = $event_state_grapher->fieldGetOne('field_end_date');

  $now = time();
  $date_difference = abs($event_start_date - $now);

  // TODO update keys in css instead of mapping here
  if (!empty($ticket_level_properties[$ticket_level])) {
    $ticket_properties = $ticket_level_properties[$ticket_level];

    switch ($ticket_properties[3]) {
      case 'gold':
        $class = 'vip';
        break;

      case 'festival':
        $class = 'hero';
        break;

      default:
        $class = 'standard';
    }

    $vars['ticket_properties'] = $ticket_properties;
    $vars['ticket_class'] = $class;
  }

  // Get the number of days remaining for event
  $vars['brand_color'] = $ticket_type_grapher->fieldGetOne('field_brand_color');
  $vars['ticket_start_time'] = date('g:ia', $event_start_date);
  $vars['event_grapher'] = $event_grapher;
  $vars['event_state_grapher'] = $event_state_grapher;
  $vars['event_past'] = $event_end_date < $now;
  $vars['event_date'] = date('l, d M Y', $event_start_date);
  $vars['event_days_to'] = floor($date_difference / 60 / 60 / 24);
  $vars['event_image_grapher'] = $event_grapher->relation('field_card_image');
}
