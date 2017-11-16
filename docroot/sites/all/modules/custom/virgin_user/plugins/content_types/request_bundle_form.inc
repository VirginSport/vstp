<?php

/**
 * @file
 * Declares the Request bundle form ctools content-type plugin.
 */

$plugin = array(
  'single' => TRUE,
  'title' => t('Request Bundle Form'),
  'description' => '',
  'category' => 'VirginSport',
  'required context' => array(),
  'defaults' => array(
    'pre_form' => '',
    'post_form' => '',
  ),
);


/**
 * Implements hook_plugin_content_type_render().
 */
function virgin_user_request_bundle_form_content_type_render($subtype, $conf, $panel_args, $context) {
  $vars = array(
    'events' => virgin_base_events(),
    'pre_form' => empty($conf['pre_form']) ? array() : $conf['pre_form'],
    'post_form' => empty($conf['post_form']) ? array() : $conf['post_form'],
  );

  $block = new stdClass();
  $block->module = '';
  $block->delta = '';
  $block->content = theme('virgin_user__request_bundle_form', array('vars' => $vars));
  $block->title = '';

  return $block;
}

/**
 * Implements hook_plugin_content_type_edit_form().
 */
function virgin_user_request_bundle_form_content_type_edit_form($form, &$form_state) {
  $conf = $form_state['conf'];

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
function virgin_user_request_bundle_form_content_type_edit_form_submit($form, &$form_state) {
  // Copy everything from the defaults.
  foreach (array_keys($form_state['plugin']['defaults']) as $key) {
    $form_state['conf'][$key] = $form_state['values'][$key];
  }
}
