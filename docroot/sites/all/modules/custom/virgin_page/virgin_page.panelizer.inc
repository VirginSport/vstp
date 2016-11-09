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
  $display->uuid = '1a8db080-40d4-4032-a98e-3fca414b4916';
  $display->storage_type = 'panelizer_default';
  $display->storage_id = 'node:page:default';
  $display->content = array();
  $display->panels = array();
  $pane = new stdClass();
  $pane->pid = 'new-876e99a8-74a0-4983-b420-45e29a82378d';
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
  $pane->uuid = '876e99a8-74a0-4983-b420-45e29a82378d';
  $display->content['new-876e99a8-74a0-4983-b420-45e29a82378d'] = $pane;
  $display->panels['first'][0] = 'new-876e99a8-74a0-4983-b420-45e29a82378d';
  $pane = new stdClass();
  $pane->pid = 'new-34044a8b-8bf0-4d68-8348-ae41eaf5bbea';
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
  $pane->uuid = '34044a8b-8bf0-4d68-8348-ae41eaf5bbea';
  $display->content['new-34044a8b-8bf0-4d68-8348-ae41eaf5bbea'] = $pane;
  $display->panels['second'][0] = 'new-34044a8b-8bf0-4d68-8348-ae41eaf5bbea';
  $display->hide_title = PANELS_TITLE_FIXED;
  $display->title_pane = '0';
  $panelizer->display = $display;
  $export['node:page:default'] = $panelizer;

  return $export;
}
