<?php

/**
 * @file
 * Declares the Festival Header ctools content-type plugin.
 */

$plugin = array(
  'single' => TRUE,
  'title' => t('Register Interest Form'),
  'description' => '',
  'category' => 'VirginSport',
  'required context' => array(),
  'defaults' => array(
    'festival_id' => '',
  ),
);

/**
 * Implements hook_plugin_content_type_render().
 */
function virgin_user_register_interest_form_content_type_render($subtype, $conf, $panel_args, $context) {
  $festival_id = empty($conf['festival_id']) ? array() : $conf['festival_id'];
  $events = array(t('All events at this festival')) + virgin_base_events($festival_id);

  $vars = array(
    'festival_id' => $festival_id,
    'festivals' => virgin_base_festivals(),
    'event_id' => empty($conf['event_id']) ? array() : $conf['event_id'],
    'events' => drupal_json_encode($events),
  );

  $block = new stdClass();
  $block->module = '';
  $block->delta = '';
  $block->content = theme('virgin_user__register_interest_form', array('vars' => $vars));
  $block->title = '';

  return $block;
}

/**
 * Implements hook_plugin_content_type_edit_form().
 */
function virgin_user_register_interest_form_content_type_edit_form($form, &$form_state) {
  $conf = $form_state['conf'];

  $form['festival_id'] = array(
    '#type' => 'textfield',
    '#title' => t('Festival Id'),
    '#default_value' => empty($conf['festival_id']) ? '' : $conf['festival_id'],
  );

  return $form;
}

/**
 * Submit handler for edit form.
 */
function virgin_user_register_interest_form_content_type_edit_form_submit($form, &$form_state) {

  // Copy everything from the defaults.
  foreach (array_keys($form_state['plugin']['defaults']) as $key) {
    $form_state['conf'][$key] = $form_state['values'][$key];
  }
}

/**
 * Get the list of festivals
 *
 * @return array
 */
function virgin_user_register_interest_form_content_type_festivals() {
  $ids = db_query("
    SELECT n.nid
    FROM {node} n
    WHERE n.type = 'festival'
    AND n.status = 1
  ")->fetchCol();

  $nodes = node_load_multiple($ids);

  $list = array_map(function ($node) {
    return $node->title;
  }, $nodes);

  asort($list);

  return $list;
}
