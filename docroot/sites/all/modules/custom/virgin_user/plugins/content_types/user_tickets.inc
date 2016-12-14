<?php

/**
 * @file
 * Declares the Festival Header ctools content-type plugin.
 */

$plugin = array(
  'single' => TRUE,
  'title' => t('User tickets'),
  'description' => '',
  'category' => 'VirginSport',
  'required context' => array(
    new ctools_context_required(t('User'), 'user')
  ),
  'defaults' => array(
    'upcoming' => 0
  ),
);

/**
 * Implements hook_plugin_content_type_render().
 */
function virgin_user_user_tickets_content_type_render($subtype, $conf, $panel_args, $context) {
  if (empty($context[0]->data)) {
    return;
  }

  $account = $context[0]->data;

  // Check if the tickets are fully synced
  observer_notify(VirginUserEvents::CHECK_TICKET_SYNC, $account);

  // And then build the list of tickets
  $user_grapher = new VirginEntityGrapher('user', $account);

  /**
   * Load tickets must accomplish the following conditions:
   *  - The ticket status must be active
   *  - The ticket uid must be the same as current user
   *  - The ticket event id refers to a event state
   *  - The event state sugar id must exist in field_sugar_id table
   *  - The event state must relate a festival state
   *  - The node event related to its state must exist and be published
   *  - The festival state must be related by a festival
   *  - The festival must be published
   */
  $query = db_select('virgin_user_tickets', 'tickets');

  $query->join('field_data_field_sugar_id', 'sugar', 'sugar.field_sugar_id_value = tickets.event_id');
  $query->join('field_data_field_festival_state', 'fs', 'sugar.entity_id = fs.entity_id');
  $query->join('field_data_field_event_state', 'ev', 'ev.field_event_state_target_id = sugar.entity_id');
  $query->join('field_data_field_festival_state', 'f', 'f.field_festival_state_target_id = fs.field_festival_state_target_id');
  $query->join('field_data_field_end_date', 'd', 'fs.field_festival_state_target_id = d.entity_id');
  $query->join('node', 'n', 'n.nid = f.entity_id AND n.status = 1');
  $query->join('node', 'nev', 'nev.nid = ev.entity_id AND nev.status = 1');

  $query->addField('n', 'nid', 'festival_node_id');
  $query->addField('n', 'title', 'festival_node_title');
  $query->addField('nev', 'nid', 'event_node_id');

  $query
    ->fields('tickets')
    ->condition('tickets.uid', $user_grapher->property('uid'), '=')
    ->condition('tickets.ticket_status', 'active', '=')
    ->condition('n.type', 'festival', '=')
    ->condition('nev.type', 'event', '=')
    ->condition('f.bundle', 'festival', '=')
  ;


  /**
   * If the component configuration sets the upcoming variable to true,
   * upcoming tickets will be returned, otherwise the component will return
   * past tickets. This logic is based on festival date.
   */
  $query->condition('d.field_end_date_value', time(), !empty($conf['upcoming']) ? '>' : '<');

  // Fetch all results
  $results = $query->execute()->fetchAll();

  // Group tickets by festival
  $data = array();
  foreach ($results as $ticket) {
    // Tickets query guarantees that event exists
    $event = node_load($ticket->event_node_id);

    // If ticket is not related to a ticket type skip it and log
    $ticket_type = virgin_user_user_tickets_content_type_get_entity($ticket->ticket_type_id, 'ticket_type');
    if (empty($ticket_type)) {
      watchdog('virgin_user', 'The ticket @rego_id is not related to a ticket type or it has been deleted', array('@rego_id' => $ticket->attendly_rego_id));
      continue;
    }

    // If festival not added yet load it and add to array
    if (empty($data[$ticket->festival_node_id])) {
      // Tickets query guarantees that festival always exist
      $festival_grapher = new VirginEntityGrapher('node', node_load($ticket->festival_node_id));

      $attributes = array(
        'festival_grapher' => $festival_grapher,
        'festival_state_grapher' => $festival_grapher->relation('field_festival_state'),
        'tickets' => ''
      );

      $data[$ticket->festival_node_id] = $attributes;
    }

    // Add ticket to to festival array
    $data[$ticket->festival_node_id]['tickets'] .= theme('virgin_user__ticket', array('ticket' => $ticket, 'event' => $event, 'ticket_type' => $ticket_type, 'festival_upcoming' => !empty($conf['upcoming'])));
  }

  $block = new stdClass();
  $block->module = '';
  $block->delta = '';
  $block->content = theme('virgin_user__ct__user_tickets', array('data' => $data, 'upcoming' => !empty($conf['upcoming'])));
  $block->title = '';

  return $block;
}

/**
 * Implements hook_plugin_content_type_edit_form().
 */
function virgin_user_user_tickets_content_type_edit_form($form, &$form_state) {
  $conf = $form_state['conf'];

  $form['upcoming'] = array(
    '#title' => t('Date'),
    '#type' => 'select',
    '#options' => array(
      0 => t('Past'),
      1 => t('Upcoming'),
    ),
    '#default_value' => empty($conf['upcoming']) ? '' : $conf['upcoming'],
  );

  return $form;
}

/**
 * Submit handler for edit form.
 */
function virgin_user_user_tickets_content_type_edit_form_submit($form, &$form_state) {
  // Copy everything from the defaults.
  foreach (array_keys($form_state['plugin']['defaults']) as $key) {
    $form_state['conf'][$key] = $form_state['values'][$key];
  }
}

/**
 * Return a ticket related entity
 */
function virgin_user_user_tickets_content_type_get_entity($id, $type) {
  $table = "field_data_field_{$type}_state";

  // If table does not exist return null
  if (!db_table_exists($table)) {
    return NULL;
  }

  $sql = "
      SELECT *  FROM {node} n
      INNER JOIN {field_data_field_sugar_id} sugar ON sugar.field_sugar_id_value = :id
      INNER JOIN {{$table}} es ON es.field_{$type}_state_target_id = sugar.entity_id AND es.entity_id = n.nid
      WHERE n.status = 1 AND n.type = :type
      LIMIT 1
    ";

  // Get the ticket event
  return db_query($sql, array(':id' => $id, ':type' => $type))->fetchObject();
}
