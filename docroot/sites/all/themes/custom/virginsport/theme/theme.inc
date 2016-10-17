<?php
/**
 * @file
 * Handles virgin sport theme related logic.
 */

/**
 * Implements hook_preprocess_HOOK() for page theme.
 */
function virginsport_preprocess_virginsport_picture(&$vars) {
  // Load the atom image
  $vars['atom'] = scald_atom_load($vars['atom_id']);

  // Load hdpi image style
  $image_style_hdpi_name = virgin_image_image_style_hdpi($vars['image_style']);
  $image_style_hdpi = image_style_load($image_style_hdpi_name);

  // If hdpi image style does not exist fallback to original
  $vars['image_style_hdpi'] = empty($image_style_hdpi) ? $vars['image_style'] : $image_style_hdpi_name;
}
