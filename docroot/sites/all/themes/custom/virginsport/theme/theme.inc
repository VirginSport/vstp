<?php
/**
 * @file
 * Handles virgin sport theme related logic.
 */

/**
 * Implements hook_preprocess_HOOK() for page theme.
 */
function virginsport_preprocess_virginsport_picture(&$vars) {
  $vars['atom'] = scald_atom_load($vars['atom_id']);
  $vars['image_style_hdpi'] = virgin_image_image_style_hdpi($vars['image_style']);
}
