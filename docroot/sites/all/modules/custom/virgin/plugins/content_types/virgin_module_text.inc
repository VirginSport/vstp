<?php

/**
 * @file
 * CTools content-type plugin file. Adds a custom title pane.
 */

$plugin = array(
  'single' => TRUE,
  'title' => t('Module (Text)'),
  'description' => '',
  'category' => 'Virgin Sport',
  'defaults' => array(),
  'all contexts' => TRUE,
);

/**
 * Implements hook_FILE_NAME_plugin_render().
 */
function virgin_virgin_module_text_content_type_render($subtype, $conf, $panel_args, $context) {

  $images = array();

  for ($i = 0; $i < 8; $i++) {
    $images[] = array(
      'url' => 'http://lorempixel.com/400/' . rand(300, 600),
      'alt' => 'Hello world',
    );
  }

  $variables = array(
    'title' => "Sport will never be the same again",
    'sub_title' => "At virgin sport, we're all about the good times, not just the fast times. Come and see how we're redefining the way we exercise together.",
    'link' => "http://google.com",
    'link_title' => "Find out more",
    'images' => $images
  );

  $content = theme('virgin_module_text', $variables);

  $block = new stdClass();
  $block->module = '';
  $block->delta = '';
  $block->content = $content;
  $block->title = '';

  return $block;
}
