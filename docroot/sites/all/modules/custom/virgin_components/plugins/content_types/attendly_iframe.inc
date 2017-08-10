<?php

/**
 * @file
 * Declares the Attendly iframe ctools content-type plugin.
 */

$plugin = array(
  'single' => TRUE,
  'title' => t('Attendly iframe'),
  'description' => '',
  'category' => 'VirginSport',
  'defaults' => array(
    'iframe_url' => '',
  ),
);

/**
 * Implements hook_plugin_content_type_render().
 */
function virgin_components_attendly_iframe_content_type_render($subtype, $conf, $args, $context) {
  $vars = array(
    'url' => $conf['iframe_url'],
  );

  // Set a static variable so we know we have to render the checkout component
  $block = &drupal_static(__FUNCTION__);

  $block = new stdClass();
  $block->module = '';
  $block->delta = '';
  $block->content = theme('virgin_components__ct__attendly_iframe', $vars);
  $block->title = '';

  return $block;
}

/**
 * Implements hook_plugin_content_type_edit_form().
 */
function virgin_components_attendly_iframe_content_type_edit_form($form, &$form_state) {
  $conf = $form_state['conf'];

  $form['iframe_url'] = array(
    '#type' => 'textfield',
    '#title' => t('iframe url'),
    '#weight' => -100,
    '#required' => TRUE,
    '#default_value' => empty($conf['iframe_url']) ? FALSE : $conf['iframe_url'],
  );

  return $form;
}

/**
 * Submit handler for edit form.
 */
function virgin_components_attendly_iframe_content_type_edit_form_submit($form, &$form_state) {
  // Copy everything from the defaults.
  foreach (array_keys($form_state['plugin']['defaults']) as $key) {
    $form_state['conf'][$key] = $form_state['values'][$key];
  }
}