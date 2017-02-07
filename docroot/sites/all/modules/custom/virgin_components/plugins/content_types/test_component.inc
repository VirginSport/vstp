<?php

/**
 * @file
 * Declares the Test Component ctools content-type plugin.
 *
 * This component is to be removed once all the components have been implemented
 */

$plugin = array(
  'single' => TRUE,
  'title' => t('Test Component'),
  'description' => '',
  'category' => 'VirginSport',
  'required context' => array(),
  'defaults' => array(
    'component' => 'results-introduction',
    'festival_id' => '',
    'event_id' => '',
    'asset_id' => '',
    'brand_color' => ''
  ),
);

/**
 * Implements hook_plugin_content_type_render().
 */
function virgin_components_test_component_content_type_render($subtype, $conf, $args, $context) {

  $load_node = function ($nid) {
    if (empty($nid)) return FALSE;
    $node = node_load($nid);
    if (empty($node)) return FALSE;
    return new VirginEntityGrapher('node', $node);
  };

  /** @var \VirginEntityGrapher $festival */
  $festival = $load_node($conf['festival_id']);
  
  /** @var \VirginEntityGrapher $event */
  $event = $load_node($conf['event_id']);

  // Mock data
  switch ($conf['component']) {

    case 'results-introduction':
      $output = theme('virgin_components__ct__results_introduction', array(
        'title' => 'Event Results',
        'description' => 'Praesent et magna sit amet libero semper facilisis vel ac enim. Aliquam consectetur tellus ipsum, vel aliquet nibh elementum vitae. met libero semper facilisis vel ac enim. Ali ibh elementum vitae.',
        'link_label' => 'Festival Page',
        'link_url' => url('<front>'),
        'link_color' => $conf['brand_color'],
        'brand_color' => $conf['brand_color'],
        'image_atom' => empty($conf['asset_id']) ? '' : scald_atom_load($conf['asset_id']),
      ));
      break;

    case 'results-overview':
      $output = 'results-overview-theme';
      break;

    case 'results-card':
      $output = 'results-card-theme';
      break;

    case 'results-table':
      $output = 'results-table-theme';
      break;

    case 'result-card':
      $output = 'result-card-theme';
      break;

    case 'youtube-video':
      $output = 'youtube-video-theme';
      break;

    default:
      $output = 'Not a valid component';
      break;
  }

  $block = new stdClass();
  $block->module = '';
  $block->delta = '';
  $block->content = $output;
  $block->title = '';

  return $block;
}

/**
 * Implements hook_plugin_content_type_edit_form().
 */
function virgin_components_test_component_content_type_edit_form($form, &$form_state) {
  $conf = $form_state['conf'];

  $form['component'] = array(
    '#type' => 'select',
    '#options' => array(
      'results-introduction' => 'Results Introduction',
      'results-overview' => 'Results Overview',
      'results-card' => 'Results Card',
      'results-table' => 'Results Table',
      'result-card' => 'Result Card',
      'youtube-video' => 'Youtube Video',
    ),
    '#required' => TRUE,
    '#default_value' => empty($conf['component']) ? '' : $conf['component']
  );

  $form['festival_id'] = array(
    '#type' => 'textfield',
    '#title' => t('Festival ID'),
    '#default_value' => empty($conf['festival_id']) ? '' : $conf['festival_id']
  );

  $form['event_id'] = array(
    '#type' => 'textfield',
    '#title' => t('Event ID'),
    '#default_value' => empty($conf['event_id']) ? '' : $conf['event_id']
  );
  
  $form['asset_id'] = array(
    '#type' => 'textfield',
    '#title' => t('Asset ID'),
    '#default_value' => empty($conf['asset_id']) ? '' : $conf['asset_id']
  );
  
  // Field brand color has the virgin brand colors
  $field = field_info_field('field_brand_color');
  
  // Extra button color options not covered by brand colors
  $options = array(
    '' => t('Default'),
    'transparent' => t('Transparent'),
    'orange' => t('Solid Orange'),
    'link' => t('Link'),
    'outline-black' => t('Outline-black'),
    'outline-white' => t('Outline-white'),
  );
  
  // Append gradient prefix to all brand colors
  foreach ($field['settings']['allowed_values'] as $key => $value) {
    $options[$key] = $value;
  }
  
  $form['brand_color'] = array(
    '#type' => 'select',
    '#title' => t('Brand Color'),
    '#options' => $options,
    '#default_value' => empty($conf['brand_color']) ? '' : $conf['brand_color'],
    '#required' => TRUE,
  );

  return $form;
}

/**
 * Submit handler for edit form.
 */
function virgin_components_test_component_content_type_edit_form_submit($form, &$form_state) {
  // Copy everything from the defaults.
  foreach (array_keys($form_state['plugin']['defaults']) as $key) {
    $form_state['conf'][$key] = $form_state['values'][$key];
  }
}
