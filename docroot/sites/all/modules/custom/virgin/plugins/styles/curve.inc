<?php

/**
 * @file
 * CTools style plugin file. Adds custom region style.
 */

$plugin = array(
  'title' => t('Virgin Curve'),
  'description' => t('Virgin branded region style'),
  'render region' => 'virgin_styles_curve_render_region', // @see theme_virgin_styles_curve_render_region()
  'settings form'  => 'virgin_styles_curve_settings_form',
);

/**
 * Render callback for the virgin curve region style
 *
 * @param array $vars
 *  The theme array options
 * @return string
 */
function theme_virgin_styles_curve_render_region($vars) {
  $get_value = function ($name, $default = '') use($vars) {
    return !isset($vars['settings'][$name]) ? $default : $vars['settings'][$name];
  };

  $classes = array(
    'vs-region',
    'vs-region--gradient-' . $get_value('brand_color', 'default'),
    'vs-region--overlap-' . $get_value('overlap', 'default'),
  );

  $attr = array('class' => $classes);
  $content = implode($vars['panes']);

  return sprintf('<div %s>%s</div>', drupal_attributes($attr), $content);
}

/**
 * Settings form for the virgin curve region style
 *
 * @param array $settings
 *  The conf array
 * @param panels_display $display
 *  The panels display object
 * @return array
 *  The form array
 */
function virgin_styles_curve_settings_form($settings, $display) {
  $form = array();

  $get_value = function ($name, $default = '') use ($settings) {
    return !isset($settings[$name]) ? $default : $settings[$name];
  };

  $form['is_curved'] = array(
    '#type' => 'checkbox',
    '#title' => t('Activate Curve'),
    '#description' => t('The curve is optional. If disabled the other options still apply but without the top edge curve'),
    '#default_value' => $get_value('is_curved', TRUE)
  );

  $form['brand_color'] = array(
    '#type' => 'select',
    '#title' => t('Brand Color'),
    '#options' => virgin_styles_curve_brand_options(),
    '#default_value' => $get_value('brand_color', '')
  );

  $form['overlap'] = array(
    '#type' => 'select',
    '#title' => t('Overlap'),
    '#description' => t('If configured, the elements contained in this region will overlap the previous region by a given amount'),
    '#options' => array(
      'none' => t('No Overlap'),
      'small' => t('Small Overlap'),
      'medium' => t('Medium Overlap'),
      'large' => t('Large Overlap'),
    ),
    '#default_value' => $get_value('overlap', '')
  );

  return $form;
}

/**
 * Get the available brand color options
 *
 * @return array
 */
function virgin_styles_curve_brand_options() {
  $options = array(
    'default' => t('Default')
  );

  $info = field_info_field('field_brand_color');

  if (empty($info['settings']['allowed_values'])) {
    return $options;
  }

  return array_merge($options, $info['settings']['allowed_values']);
}
