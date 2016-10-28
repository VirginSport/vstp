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
  'defaults' => array(),
);

/**
 * Implements hook_plugin_content_type_render().
 */
function virgin_user_user_tickets_content_type_render($subtype, $conf, $panel_args, $context) {
  // TODO Finish user tickets implementation
  if (empty($context[0]->data)) {
    return;
  }

  $user_grapher = new VirginEntityGrapher('user', $context[0]->data);

  $sql = "
    SELECT n.nid AS festival_id, tickets.*  FROM {virgin_user_tickets} tickets
    INNER JOIN {field_data_field_sugar_id} sugar ON sugar.field_sugar_id_value = tickets.event_id
    INNER JOIN {field_data_field_festival_state} fs ON sugar.entity_id = fs.entity_id
    INNER JOIN {field_data_field_festival_state} f ON f.field_festival_state_target_id = fs.field_festival_state_target_id
    INNER JOIN {field_data_field_start_date} d ON fs.field_festival_state_target_id = d.entity_id 
    -- AND d.field_start_date_value > UNIX_TIMESTAMP()
    INNER JOIN {node} n ON n.nid = f.entity_id AND n.status = 1 AND n.type = 'festival'
    WHERE tickets.uid = :uid
    ORDER BY d.field_start_date_value ASC, tickets.name ASC
  ";

  // Get the tickets
  $results = db_query($sql, array(':uid' => $user_grapher->property('uid')))->fetchAll();

  // Group tickets by festival
  $data = array();
  foreach ($results as $result) {
    // If festival not added yet load it and add to array
    if (empty($data[$result->festival_id])) {
      $data[$result->festival_id]['festival_grapher'] = new VirginEntityGrapher('node', node_load($result->festival_id));
      $data[$result->festival_id]['tickets'] = '';
    }

    // Add ticket to to festival array
    $data[$result->festival_id]['tickets'] .= theme('virgin_user__ticket', array('ticket' => $result));
  }

  $block = new stdClass();
  $block->module = '';
  $block->delta = '';
  $block->content = theme('virgin_user__ct__user_tickets', array('data' => $data));
  $block->title = '';

  return $block;
}

/**
 * Implements hook_plugin_content_type_edit_form().
 */
function virgin_user_user_tickets_content_type_edit_form($form, &$form_state) {
  return $form;
}
