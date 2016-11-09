<?php
/**
 * @file
 * virgin_festival.panelizer.inc
 */

/**
 * Implements hook_panelizer_defaults().
 */
function virgin_festival_panelizer_defaults() {
  $export = array();

  $panelizer = new stdClass();
  $panelizer->disabled = FALSE; /* Edit this to true to make a default panelizer disabled initially */
  $panelizer->api_version = 1;
  $panelizer->title = 'Default';
  $panelizer->panelizer_type = 'node';
  $panelizer->panelizer_key = 'festival';
  $panelizer->access = array();
  $panelizer->view_mode = 'page_manager';
  $panelizer->name = 'node:festival:default';
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
      'default' => NULL,
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
    'nineth' => array(
      'style' => 'curve',
    ),
    'tenth' => array(
      'style' => 'curve',
    ),
  );
  $display->cache = array();
  $display->title = '%node:title';
  $display->uuid = '7f71c88f-9d89-4aa3-a8d2-af1695207b33';
  $display->storage_type = 'panelizer_default';
  $display->storage_id = 'node:festival:default';
  $display->content = array();
  $display->panels = array();
  $pane = new stdClass();
  $pane->pid = 'new-2dc364bd-0893-4188-948f-a2dcf3a988d8';
  $pane->panel = 'first';
  $pane->type = 'festival_header';
  $pane->subtype = 'festival_header';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'context' => array(
      0 => 'panelizer',
    ),
    'override_title' => 0,
    'override_title_text' => '',
    'override_title_heading' => 'h2',
  );
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array();
  $pane->extras = array();
  $pane->position = 0;
  $pane->locks = array(
    'type' => 'immovable',
    'regions' => array(
      'first' => 'first',
    ),
  );
  $pane->uuid = '2dc364bd-0893-4188-948f-a2dcf3a988d8';
  $display->content['new-2dc364bd-0893-4188-948f-a2dcf3a988d8'] = $pane;
  $display->panels['first'][0] = 'new-2dc364bd-0893-4188-948f-a2dcf3a988d8';
  $pane = new stdClass();
  $pane->pid = 'new-d046c39d-17ec-4c56-bc1d-c2f91190ac07';
  $pane->panel = 'second';
  $pane->type = 'festival_subnav';
  $pane->subtype = 'festival_subnav';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'context' => array(
      0 => 'panelizer',
    ),
    'override_title' => 0,
    'override_title_text' => '',
    'override_title_heading' => 'h2',
  );
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array();
  $pane->extras = array();
  $pane->position = 0;
  $pane->locks = array();
  $pane->uuid = 'd046c39d-17ec-4c56-bc1d-c2f91190ac07';
  $display->content['new-d046c39d-17ec-4c56-bc1d-c2f91190ac07'] = $pane;
  $display->panels['second'][0] = 'new-d046c39d-17ec-4c56-bc1d-c2f91190ac07';
  $display->hide_title = PANELS_TITLE_FIXED;
  $display->title_pane = '0';
  $panelizer->display = $display;
  $export['node:festival:default'] = $panelizer;

  return $export;
}
