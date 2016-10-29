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

  $user_grapher = new VirginEntityGrapher('user', $context[0]->data);

  $query = db_select('virgin_user_tickets', 'tickets');
  $query->join('field_data_field_sugar_id', 'sugar', 'sugar.field_sugar_id_value = tickets.event_id');
  $query->join('field_data_field_festival_state', 'fs', 'sugar.entity_id = fs.entity_id');
  $query->join('field_data_field_festival_state', 'f', 'f.field_festival_state_target_id = fs.field_festival_state_target_id');
  $query->join('node', 'n', 'n.nid = f.entity_id AND n.status = 1');
  $query
    ->fields('tickets')
    ->condition('tickets.uid', $user_grapher->property('uid'), '=')
    ->condition('n.type', 'festival', '=')
    ->addField('n', 'nid', 'festival_id')
  ;

  // Past Festivals
  if (empty($conf['upcoming'])) {
    $query->join('field_data_field_end_date', 'd', 'fs.field_festival_state_target_id = d.entity_id');
    $query->condition('d.field_end_date_value', time(), '<');
  } else {
    $query->join('field_data_field_start_date', 'd', 'fs.field_festival_state_target_id = d.entity_id');
    $query->condition('d.field_start_date_value', time(), '>');
  }

  $results = $query->execute()->fetchAll();

  // Group tickets by festival
  $data = array();
  foreach ($results as $result) {
    // If festival not added yet load it and add to array
    if (empty($data[$result->festival_id])) {
      $festival_grapher = new VirginEntityGrapher('node', node_load($result->festival_id));

      $attributes = array(
        'festival_grapher' => $festival_grapher,
        'festival_state_grapher' => $festival_grapher->relation('field_festival_state'),
        'tickets' => ''
      );

      $data[$result->festival_id] = $attributes;
    }

    // Add ticket to to festival array
    $data[$result->festival_id]['tickets'] .= theme('virgin_user__ticket', array('ticket' => $result));
  }

  $block = new stdClass();
  $block->module = '';
  $block->delta = '';
  $block->content = theme('virgin_user__ct__user_tickets', array('data' => $data, 'upcoming' => empty($conf['upcoming'])));
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
