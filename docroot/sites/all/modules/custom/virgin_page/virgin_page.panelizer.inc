<?php
/**
 * @file
 * virgin_page.panelizer.inc
 */

/**
 * Implements hook_panelizer_defaults().
 */
function virgin_page_panelizer_defaults() {
  $export = array();

  $panelizer = new stdClass();
  $panelizer->disabled = FALSE; /* Edit this to true to make a default panelizer disabled initially */
  $panelizer->api_version = 1;
  $panelizer->title = 'Default';
  $panelizer->panelizer_type = 'node';
  $panelizer->panelizer_key = 'page';
  $panelizer->access = array();
  $panelizer->view_mode = 'page_manager';
  $panelizer->name = 'node:page:default';
  $panelizer->css_id = '';
  $panelizer->css_class = '';
  $panelizer->css = '';
  $panelizer->no_blocks = FALSE;
  $panelizer->title_element = 'H2';
  $panelizer->link_to_entity = TRUE;
  $panelizer->extra = array();
  $panelizer->pipeline = 'ipe';
  $panelizer->contexts = array();
  $panelizer->relationships = array();
  $display = new panels_display();
  $display->layout = 'virginsport';
  $display->layout_settings = array();
  $display->panel_settings = array(
    'style_settings' => array(
      'first' => array(
        'is_curved' => 0,
        'brand_color' => 'default',
        'overlap' => 'none',
      ),
      'second' => array(
        'is_curved' => 1,
        'brand_color' => 'default',
        'overlap' => 'none',
      ),
      'third' => array(
        'is_curved' => 1,
        'brand_color' => 'default',
        'overlap' => 'none',
      ),
      'fourth' => array(
        'is_curved' => 1,
        'brand_color' => 'default',
        'overlap' => 'none',
      ),
      'fifth' => array(
        'is_curved' => 1,
        'brand_color' => 'default',
        'overlap' => 'none',
      ),
      'sixth' => array(
        'is_curved' => 1,
        'brand_color' => 'default',
        'overlap' => 'none',
      ),
      'seventh' => array(
        'is_curved' => 1,
        'brand_color' => 'default',
        'overlap' => 'none',
      ),
      'eighth' => array(
        'is_curved' => 1,
        'brand_color' => 'default',
        'overlap' => 'none',
      ),
      'seventh' => array(
        'is_curved' => 1,
        'brand_color' => 'default',
        'overlap' => 'none',
      ),
      'nineth' => array(
        'is_curved' => 1,
        'brand_color' => 'default',
        'overlap' => 'none',
      ),
      'tenth' => array(
        'is_curved' => 1,
        'brand_color' => 'default',
        'overlap' => 'none',
      ),
    ),
    'first' => array(
      'style' => 'curve',
    ),
    'second' => array(
      'style' => 'curve',
    ),
    'third' => array(
      'style' => 'curve',
    ),
    'fourth' => array(
      'style' => 'curve',
    ),
    'fifth' => array(
      'style' => 'curve',
    ),
    'sixth' => array(
      'style' => 'curve',
    ),
    'seventh' => array(
      'style' => 'curve',
    ),
    'eighth' => array(
      'style' => 'curve',
    ),
    'seventh' => array(
      'style' => 'curve',
    ),
    'nineth' => array(
      'style' => 'curve',
    ),
    'tenth' => array(
      'style' => 'curve',
    ),
  );
  $display->cache = array();
  $display->title = '%node:title';
  $display->uuid = '1a8db080-40d4-4032-a98e-3fca414b4916';
  $display->storage_type = 'panelizer_default';
  $display->storage_id = 'node:page:default';
  $display->content = array();
  $display->panels = array();
  $display->hide_title = PANELS_TITLE_FIXED;
  $display->title_pane = '0';
  $panelizer->display = $display;
  $export['node:page:default'] = $panelizer;

  return $export;
}
