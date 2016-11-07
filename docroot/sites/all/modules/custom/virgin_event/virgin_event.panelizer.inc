<?php
/**
 * @file
 * virgin_event.panelizer.inc
 */

/**
 * Implements hook_panelizer_defaults().
 */
function virgin_event_panelizer_defaults() {
  $export = array();

  $panelizer = new stdClass();
  $panelizer->disabled = FALSE; /* Edit this to true to make a default panelizer disabled initially */
  $panelizer->api_version = 1;
  $panelizer->title = 'Default';
  $panelizer->panelizer_type = 'node';
  $panelizer->panelizer_key = 'event';
  $panelizer->access = array();
  $panelizer->view_mode = 'page_manager';
  $panelizer->name = 'node:event:default';
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
  $display->uuid = '91750b8a-ff62-4c11-9843-9a81277e6956';
  $display->storage_type = 'panelizer_default';
  $display->storage_id = 'node:event:default';
  $display->content = array();
  $display->panels = array();
  $pane = new stdClass();
  $pane->pid = 'new-c0ef1e58-55b5-4dc1-90e3-5ba4562ca5d3';
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
  $pane->uuid = 'c0ef1e58-55b5-4dc1-90e3-5ba4562ca5d3';
  $display->content['new-c0ef1e58-55b5-4dc1-90e3-5ba4562ca5d3'] = $pane;
  $display->panels['first'][0] = 'new-c0ef1e58-55b5-4dc1-90e3-5ba4562ca5d3';
  $pane = new stdClass();
  $pane->pid = 'new-8d8956eb-bde2-4a17-849f-cc421d232657';
  $pane->panel = 'second';
  $pane->type = 'subnav';
  $pane->subtype = 'subnav';
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
  $pane->uuid = '8d8956eb-bde2-4a17-849f-cc421d232657';
  $display->content['new-8d8956eb-bde2-4a17-849f-cc421d232657'] = $pane;
  $display->panels['second'][0] = 'new-8d8956eb-bde2-4a17-849f-cc421d232657';
  $display->hide_title = PANELS_TITLE_FIXED;
  $display->title_pane = '0';
  $panelizer->display = $display;
  $export['node:event:default'] = $panelizer;

  return $export;
}
