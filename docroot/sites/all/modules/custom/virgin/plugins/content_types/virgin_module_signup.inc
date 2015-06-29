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
  $raw_images = array();

  $images = array();

  for ($i = 0; $i < 6; $i++) {
  //foreach ($raw_images as $image) {
    $images[] = array(
      'url' => 'http://lorempixel.com/400/' . rand(300, 600),
      'alt' => '',
      'title' => '',
      //'url' => image_style_url('one_fourth', $image['uri']),
      //'alt' => $image['alt'],
      //'title' => $image['title'],
    );
  }

  $variables = array(
    'title' => 'Sign up today',
    'sub_title' => "Virgin Sport members are part of a family. So naturally, they're the first to know everything and we shower them affection and Virgin Sport rewards.",
    'images' => $images,
    'facts_title' => 'Did you know?',
    'facts_sub_title' => "Interesting huh?\n There's more where that came from.",
    'facts_button_label' => 'Gimme Another',
    'facts' => array(
      "That 72% of our 10k's were finished in over 1:30hrs.",
      "That most runners usually make the same mistake?",
      "That we organized 3 races just last month?",
    ),
  );

  $content = theme('virgin_module_signup', $variables);

  $block = new stdClass();
  $block->module = '';
  $block->delta = '';
  $block->content = $content;
  $block->title = '';

  return $block;
}
