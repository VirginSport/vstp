<?php

/**
 * @file
 * Declares the Festival Header ctools content-type plugin.
 */

$plugin = array(
  'single' => TRUE,
  'title' => t('Contact Form'),
  'description' => '',
  'category' => 'VirginSport',
  'required context' => array(),
  'defaults' => array(
    'festival_id' => '',
    'event_id' => '',
    'pre_form' => '',
    'post_form' => '',
  ),
);

/**
 * Implements hook_plugin_content_type_render().
 */
function virgin_user_contact_form_content_type_render($subtype, $conf, $panel_args, $context) {
  $festival_id = empty($conf['festival_id']) ? array() : $conf['festival_id'];

  $vars = array(
    'festival_id' => $festival_id,
    'festivals' => virgin_base_festivals(),
    'event_id' => empty($conf['event_id']) ? array() : $conf['event_id'],
    'events' => drupal_json_encode(virgin_base_events($festival_id)),
    'pre_form' => empty($conf['pre_form']) ? array() : $conf['pre_form'],
    'post_form' => empty($conf['post_form']) ? array() : $conf['post_form'],
  );

  $block = new stdClass();
  $block->module = '';
  $block->delta = '';
  $block->content = theme('virgin_user__contact_form', array('vars' => $vars));
  $block->title = '';

  return $block;
}

/**
 * Implements hook_plugin_content_type_edit_form().
 */
function virgin_user_contact_form_content_type_edit_form($form, &$form_state) {
  $conf = $form_state['conf'];

  $form['festival_id'] = array(
    '#type' => 'textfield',
    '#title' => t('Festival Id'),
    '#default_value' => empty($conf['festival_id']) ? '' : $conf['festival_id'],
  );

  $form['event_id'] = array(
    '#type' => 'textfield',
    '#title' => t('Event Id'),
    '#default_value' => empty($conf['event_id']) ? '' : $conf['event_id'],
  );

  $form['pre_form'] = array(
    '#title' => t('Text before form'),
    '#type' => 'text_format',
    '#format' => 'filtered_html',
    '#default_value' => empty($conf['pre_form']['value']) ? '' : $conf['pre_form']['value']
  );

  $form['post_form'] = array(
    '#title' => t('Text after form'),
    '#type' => 'text_format',
    '#format' => 'filtered_html',
    '#default_value' => empty($conf['post_form']['value']) ? '' : $conf['post_form']['value']
  );

  return $form;
}

/**
 * Submit handler for edit form.
 */
function virgin_user_contact_form_content_type_edit_form_submit($form, &$form_state) {
  // Copy everything from the defaults.
  foreach (array_keys($form_state['plugin']['defaults']) as $key) {
    $form_state['conf'][$key] = $form_state['values'][$key];
  }
}
