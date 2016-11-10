<?php

/**
 * @file
 * Declares the Page Header ctools content-type plugin.
 */

$plugin = array(
  'single' => TRUE,
  'title' => t('Page Header'),
  'description' => '',
  'category' => 'VirginSport',
  'required context' => array(
    new ctools_context_required(t('Node'), 'node')
  ),
  'defaults' => array(),
);

/**
 * Implements hook_plugin_content_type_render().
 */
function virgin_components_page_header_content_type_render($subtype, $conf, $args, $context) {
  if (empty($args['page']) && empty($context[0]->data)) {
    return;
  }

  // Get a shortcut to the node.
  $node = empty($args['page']) ? $context[0]->data : $args['page'];
  $g = new VirginEntityGrapher('node', $node);



  // Fetch the image
  $atom = $g->relation('field_header_image');
  $vars = array(
    'title' => $g->fieldGetOne('title_field', ''),
    'body' => $g->fieldRendered('field_page_body'),
    'atom' => $atom->getEntityType() != 'scald_atom' ? NULL : $atom,
    'festival' => $g->property('field_festival', ''),
  );

  if(!empty($g->property('field_festival', ''))) {
    return;
  }

  $block = new stdClass();
  $block->module = '';
  $block->delta = '';
  $block->content = theme('virgin_components__ct__page_header', $vars);
  $block->title = '';

  return $block;
}

/**
 * Implements hook_plugin_content_type_edit_form().
 */
function virgin_components_page_header_content_type_edit_form($form, &$form_state) {
  return $form;
}
