<?php

/**
 * @file
 * CTools content-type plugin file. Adds the virgin module text.
 */

$plugin = array(
  'single' => TRUE,
  'title' => t('Module (Text)'),
  'description' => '',
  'category' => 'Virgin Sport',
  'defaults' => array(),
  'required context' => new ctools_context_required(t('Node'), 'node'),
);

/**
 * Implements hook_FILE_NAME_plugin_render().
 */
function virgin_virgin_module_text_content_type_render($subtype, $conf, $panel_args, $context) {

  // If the context is empty, bailout.
  if (empty($context->data)) {
    return;
  }

  $node_wrapper = entity_metadata_wrapper('node', $context->data);

  $title = $node_wrapper->field_hp_text_title->value();
  $sub_title = $node_wrapper->field_hp_text_description->value();
  $link = $node_wrapper->field_hp_text_link->value();
  $raw_images = $node_wrapper->field_hp_text_images->value();

  $images = array();

  foreach ($raw_images as $image) {
    $images[] = array(
      'url' => image_style_url('one_fourth', $image['uri']),
      'alt' => $image['alt'],
      'title' => $image['title'],
    );
  }

  $variables = array(
    'title' => check_plain($title),
    'sub_title' => check_plain($sub_title),
    'link' => $link['url'],
    'link_title' => $link['title'],
    'images' => $images,
  );

  $content = theme('virgin_module_text', $variables);

  $block = new stdClass();
  $block->module = '';
  $block->delta = '';
  $block->content = $content;
  $block->title = '';

  return $block;
}
