<?php

/**
 * @file
 * Declares the Test Component ctools content-type plugin.
 *
 * This component is to be removed once all the components have been implemented
 */

define('RESULTS_TABLE_MAX_ROWS', 10);

$plugin = array(
  'single' => TRUE,
  'title' => t('Results table'),
  'description' => '',
  'category' => 'VirginSport',
  'required context' => array(),
  'defaults' => array(
    'is_summary' => FALSE,
    'show_top' => FALSE,
    'max_rows' => RESULTS_TABLE_MAX_ROWS,
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
  $start_date = $event_state->fieldGetOne('field_start_date');
  $timezone = $event_state->fieldGetOne('field_timezone');

  $festival = virgin_base_event_festival($event->property('nid'));
  $festival_state = $festival->relation('field_festival_state');

  $current_region = virgin_region_current() + array('country_letter_code');

  $vars = array(
    'is_summary' => !empty($conf['is_summary']),
    'show_top' => !empty($conf['is_summary']) && !empty($conf['show_top']),
    'is_card' => !empty($conf['is_card']),
    'ticket_id' => empty($conf['ticket_id']) ? NULL : $conf['ticket_id'],
    'festival_name' => $festival->fieldGetOne('title_field'),
    'festival_id' => $festival_state->fieldGetOne('field_sugar_id'),
    'event_id' => $event_state->fieldGetOne('field_sugar_id'),
    'event_name' => $event->fieldGetOne('title_field'),
    'event_date' => virgin_date($start_date, $timezone)->format('d M'),
    'event_description' => $event->fieldRendered('field_results_summary'),
    'brand_color' => $event->fieldGetOne('field_brand_color'),
    'replay_path' => url('/node/' . $event->property('nid')),
    'photo_path' => url('/node/' . $event->property('nid')),
    'max_rows' => empty($conf['max_rows']) ? RESULTS_TABLE_MAX_ROWS: $conf['max_rows'],
    'unit' => $current_region['country_letter_code'] == 'US' ? 'miles' : 'km',
  );

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

  $form['is_summary'] = array(
    '#type' => 'checkbox',
    '#title' => t('Show Summary'),
    '#default_value' => empty($conf['is_summary']) ? '' : $conf['is_summary']
  );

  $form['show_top'] = array(
    '#type' => 'checkbox',
    '#title' => t('Show Male/Female Tops'),
    '#default_value' => empty($conf['show_top']) ? '' : $conf['show_top'],
    '#states' => array(
      'visible' => array(
        ':input[name="is_summary"]' => array('checked' => TRUE),
      ),
    ),
  );

  $form['max_rows'] = array(
    '#type' => 'textfield',
    '#title' => t('Maximum number of rows'),
    '#default_value' => empty($conf['max_rows']) ? '' : $conf['max_rows'],
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
