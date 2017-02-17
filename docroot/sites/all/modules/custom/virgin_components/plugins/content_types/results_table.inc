<?php

/**
 * @file
 * Declares the Test Component ctools content-type plugin.
 *
 * This component is to be removed once all the components have been implemented
 */

$plugin = array(
  'single' => TRUE,
  'title' => t('Results table'),
  'description' => '',
  'category' => 'VirginSport',
  'required context' => array(),
  'defaults' => array(
    'summary' => FALSE,
    'event_id' => '',
  ),
);

/**
 * Implements hook_plugin_content_type_render().
 */
function virgin_components_results_table_content_type_render($subtype, $conf, $args, $context) {
  /** @var \VirginEntityGrapher $event */
  $node = node_load($conf['event_id']);

  if (empty($node) || $node->type != 'event') {
    return;
  }

  $event = new VirginEntityGrapher('node', $node);
  $event_state = $event->relation('field_event_state');

  $festival = virgin_base_event_festival($event->property('nid'));
  $festival_state = $festival->relation('field_festival_state');

  if (empty($conf['summary'])) {
    $vars = array(
      'is_summary' => FALSE,
      'is_card' => empty($conf['is_card']) ? NULL : $conf['is_card'],
      'ticket_id' => empty($conf['ticket_id']) ? NULL : $conf['ticket_id'],
      'festival_id' => $festival_state->fieldGetOne('field_sugar_id'),
      'event_id' => $event_state->fieldGetOne('field_sugar_id'),
      'brand_color' => $event->fieldGetOne('field_brand_color'),
      'replay_path' => url('/node/' . $event->property('nid')),
      'photo_path' => url('/node/' . $event->property('nid')),
      'max_rows' => 10
    );
  } else {
    $start_date = $event_state->fieldGetOne('field_start_date');
    $timezone = $event_state->fieldGetOne('field_timezone');

    $vars = array( 
      'is_summary' => TRUE,
      'is_card' => empty($conf['is_card']) ? NULL : $conf['is_card'],
      'ticket_id' => empty($conf['ticket_id']) ? NULL : $conf['ticket_id'],
      'brand_color' => $event->fieldGetOne('field_brand_color'),
      'festival_id' => $festival_state->fieldGetOne('field_sugar_id'),
      'event_id' => $event_state->fieldGetOne('field_sugar_id'),
      'event_name' => $event->fieldGetOne('title_field'),
      'event_date' => virgin_date($start_date, $timezone)->format('d M'),
      'event_description' => strip_tags($event->fieldGetOne('field_description')),
      'replay_path' => url('/node/' . $event->property('nid')),
      'results_path' => url('/node/' . $event->property('nid')),
      'max_rows' => 5
    );
  }

  $block = new stdClass();
  $block->module = '';
  $block->delta = '';
  $block->content = theme('virgin_components__ct__results_table', $vars);
  $block->title = '';

  return $block;
}

/**
 * Implements hook_plugin_content_type_edit_form().
 */
function virgin_components_results_table_content_type_edit_form($form, &$form_state) {
  $conf = $form_state['conf'];

  $form['event_id'] = array(
    '#type' => 'textfield',
    '#title' => t('Event ID'),
    '#default_value' => empty($conf['event_id']) ? '' : $conf['event_id']
  );

  $form['summary'] = array(
    '#type' => 'checkbox',
    '#title' => t('Show summary'),
    '#default_value' => empty($conf['summary']) ? '' : $conf['summary']
  );

  return $form;
}

/**
 * Submit handler for edit form.
 */
function virgin_components_results_table_content_type_edit_form_submit($form, &$form_state) {
  // Copy everything from the defaults.
  foreach (array_keys($form_state['plugin']['defaults']) as $key) {
    $form_state['conf'][$key] = $form_state['values'][$key];
  }
}
