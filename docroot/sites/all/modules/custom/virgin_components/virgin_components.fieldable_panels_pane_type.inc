<?php
/**
 * @file
 * virgin_components.fieldable_panels_pane_type.inc
 */

/**
 * Implements hook_default_fieldable_panels_pane_type().
 */
function virgin_components_default_fieldable_panels_pane_type() {
  $export = array();

  $fieldable_panels_pane_type = new stdClass();
  $fieldable_panels_pane_type->disabled = FALSE; /* Edit this to true to make a default fieldable_panels_pane_type disabled initially */
  $fieldable_panels_pane_type->api_version = 1;
  $fieldable_panels_pane_type->name = 'vs_basic_content_block';
  $fieldable_panels_pane_type->title = 'Basic Content Block';
  $fieldable_panels_pane_type->description = '';
  $export['vs_basic_content_block'] = $fieldable_panels_pane_type;

  $fieldable_panels_pane_type = new stdClass();
  $fieldable_panels_pane_type->disabled = FALSE; /* Edit this to true to make a default fieldable_panels_pane_type disabled initially */
  $fieldable_panels_pane_type->api_version = 1;
  $fieldable_panels_pane_type->name = 'vs_cta_block';
  $fieldable_panels_pane_type->title = 'CTA Block';
  $fieldable_panels_pane_type->description = '';
  $export['vs_cta_block'] = $fieldable_panels_pane_type;

  $fieldable_panels_pane_type = new stdClass();
  $fieldable_panels_pane_type->disabled = FALSE; /* Edit this to true to make a default fieldable_panels_pane_type disabled initially */
  $fieldable_panels_pane_type->api_version = 1;
  $fieldable_panels_pane_type->name = 'vs_hero_banner_block';
  $fieldable_panels_pane_type->title = 'Hero Banner Block';
  $fieldable_panels_pane_type->description = '';
  $export['vs_hero_banner_block'] = $fieldable_panels_pane_type;

  $fieldable_panels_pane_type = new stdClass();
  $fieldable_panels_pane_type->disabled = FALSE; /* Edit this to true to make a default fieldable_panels_pane_type disabled initially */
  $fieldable_panels_pane_type->api_version = 1;
  $fieldable_panels_pane_type->name = 'vs_promo_banner';
  $fieldable_panels_pane_type->title = 'Promotional Banner';
  $fieldable_panels_pane_type->description = '';
  $export['vs_promo_banner'] = $fieldable_panels_pane_type;

  $fieldable_panels_pane_type = new stdClass();
  $fieldable_panels_pane_type->disabled = FALSE; /* Edit this to true to make a default fieldable_panels_pane_type disabled initially */
  $fieldable_panels_pane_type->api_version = 1;
  $fieldable_panels_pane_type->name = 'vs_teaser_block';
  $fieldable_panels_pane_type->title = 'Teaser Block';
  $fieldable_panels_pane_type->description = '';
  $export['vs_teaser_block'] = $fieldable_panels_pane_type;

  return $export;
}
