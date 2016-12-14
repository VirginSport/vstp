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
  'defaults' => array(
    'is_small' => FALSE
  ),
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
    'show_sharer' => $g->fieldGetOne('field_has_share_button'),
    'is_small' => empty($conf['is_small']) ? FALSE : $conf['is_small'],
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
  $conf = $form_state['conf'];

  $form['is_small'] = array(
    '#type' => 'checkbox',
    '#title' => t('Small Header'),
    '#weight' => -100,
    '#default_value' => empty($conf['is_small']) ? FALSE : $conf['is_small'],
  );

  return $form;
}

/**
 * Submit handler for edit form.
 */
function virgin_components_page_header_content_type_edit_form_submit($form, &$form_state) {
  // Copy everything from the defaults.
  foreach (array_keys($form_state['plugin']['defaults']) as $key) {
    $form_state['conf'][$key] = $form_state['values'][$key];
  }
}
