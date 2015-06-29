<?php

/**
 * @file
 * CTools content-type plugin file. Adds the virgin module signup.
 */

$plugin = array(
  'single' => TRUE,
  'title' => t('Module (Sign Up)'),
  'description' => '',
  'category' => 'Virgin Sport',
  'defaults' => array(),
  'required context' => new ctools_context_required(t('Node'), 'node'),
);

/**
 * Implements hook_FILE_NAME_plugin_render().
 */
function virgin_virgin_module_signup_content_type_render($subtype, $conf, $panel_args, $context) {

  // If the context is empty, bailout.
  if (empty($context->data)) {
    return;
  }

  $node_wrapper = entity_metadata_wrapper('node', $context->data);
  $raw_images = $node_wrapper->field_hp_signup_images->value();

  $images = array();

  foreach ($raw_images as $image) {
    $images[] = array(
      'url' => image_style_url('one_half', $image['uri']),
      'alt' => $image['alt'],
      'title' => $image['title'],
    );
  }

  $variables = array(
    'title' => $node_wrapper->field_hp_signup_title->value(),
    'sub_title' => $node_wrapper->field_hp_signup_desc->value(),
    'images' => $images,
    'facts_title' => $node_wrapper->field_hp_signup_facts_title->value(),
    'facts_sub_title' => $node_wrapper->field_hp_signup_facts_desc->value(),
    'facts_button_label' => t('Gimme Another'),
    'facts' => $node_wrapper->field_hp_signup_facts->value(),
  );

  $content = theme('virgin_module_signup', $variables);

  $block = new stdClass();
  $block->module = '';
  $block->delta = '';
  $block->content = $content;
  $block->title = '';

  return $block;
}
