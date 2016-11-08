<?php

/**
 * @file
 * Declares the Festival Header ctools content-type plugin.
 */

$plugin = array(
  'single' => TRUE,
  'title' => t('Contact Form'),
  'description' => '',
  'category' => 'Forms',
  'defaults' => array(),
);

/**
 * Implements hook_plugin_content_type_render().
 */
function virgin_components_contact_form_content_type_render($subtype, $conf, $args, $context) {
  module_load_include('inc', 'virgin_user', 'virgin_user.forms');
  $form = drupal_get_form('virgin_user_form_contact');

  $params = array(
    'pre_form' => '',
    'form' => drupal_render($form),
    'post_form' => '',
  );

  $block = new stdClass();
  $block->module = '';
  $block->delta = '';
  $block->content = theme('virgin_components__ct__contact_form', $params);
  $block->title = '';

  return $block;
}

/**
 * Implements hook_plugin_content_type_edit_form().
 */
function virgin_components_contact_form_content_type_edit_form($form, &$form_state) {
  return $form;
}
