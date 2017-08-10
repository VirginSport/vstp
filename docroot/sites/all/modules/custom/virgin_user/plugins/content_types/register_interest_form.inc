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

  // If the festival is set the end user will have no options so we only include
  // the chosen festival and avoid to load all the festivals
  $festival_node = empty($conf['festival_id']) ? FALSE : node_load($festival_id);
  $is_festival = $festival_node && $festival_node->type == 'festival';
  if ($is_festival) {
    $festivals = array($festival_node->nid => $festival_node->title);
  } else {
    $festivals = virgin_base_festivals(array('over'));
  }

  $event_id = empty($conf['event_id']) ? '' : $conf['event_id'];
  $event_node = empty($conf['event_id']) ? FALSE : node_load($event_id);
  $hide_event = FALSE;

  // If festival and event are set we need to check if they are related,
  // or else show all events. Again if the event and the festival are set and
  // related we don't show them to end user so we avoid loading all events
  if ($is_festival && $event_node && $event_node->type == 'event') {
    $f = virgin_base_event_festival($event_node->nid);
    if($f && $f->property('nid') == $festival_node->nid) {
      $events = array($event_node->nid => $event_node->title);
      $hide_event = TRUE;
    }
  }

  if (!isset($events)) {
    $events = array(t('All events at this festival')) + virgin_base_events($festival_id);
  }

  $vars = array(
    'festival_id' => $festival_id,
    'festivals' => $festivals,
    'event_id' => empty($conf['event_id']) ? array() : $conf['event_id'],
    'events_list' => drupal_json_encode(array('events' => $events, 'event_id' => $event_id)),
    'hide_festival' => $is_festival,
    'hide_event' => $hide_event,
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
