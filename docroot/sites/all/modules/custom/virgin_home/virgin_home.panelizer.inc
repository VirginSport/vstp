<?php
/**
 * @file
 * virgin_home.panelizer.inc
 */

/**
 * Implements hook_panelizer_defaults().
 */
function virgin_home_panelizer_defaults() {
  $export = array();

  $panelizer = new stdClass();
  $panelizer->disabled = FALSE; /* Edit this to true to make a default panelizer disabled initially */
  $panelizer->api_version = 1;
  $panelizer->name = 'node:home_page:default';
  $panelizer->title = 'Default';
  $panelizer->panelizer_type = 'node';
  $panelizer->panelizer_key = 'home_page';
  $panelizer->no_blocks = FALSE;
  $panelizer->css_id = '';
  $panelizer->css = '';
  $panelizer->pipeline = 'standard';
  $panelizer->contexts = array();
  $panelizer->relationships = array();
  $panelizer->access = array();
  $panelizer->view_mode = 'page_manager';
  $panelizer->css_class = '';
  $panelizer->title_element = 'H2';
  $panelizer->link_to_entity = TRUE;
  $panelizer->extra = array();
  $display = new panels_display();
  $display->layout = 'virginsport_zero';
  $display->layout_settings = array();
  $display->panel_settings = array(
    'style_settings' => array(
      'default' => NULL,
      'center' => NULL,
      'content' => NULL,
    ),
  );
  $display->cache = array();
  $display->title = '%node:title';
  $display->uuid = '7a11a8f9-0e44-4435-8eca-c3ab3feab905';
  $display->content = array();
  $display->panels = array();
    $pane = new stdClass();
    $pane->pid = 'new-b6a0e8a9-52a0-4f3c-90a1-72a577b019aa';
    $pane->panel = 'content';
    $pane->type = 'virgin_module_text';
    $pane->subtype = 'virgin_module_text';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array();
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array();
    $pane->extras = array();
    $pane->position = 0;
    $pane->locks = array();
    $pane->uuid = 'b6a0e8a9-52a0-4f3c-90a1-72a577b019aa';
    $display->content['new-b6a0e8a9-52a0-4f3c-90a1-72a577b019aa'] = $pane;
    $display->panels['content'][0] = 'new-b6a0e8a9-52a0-4f3c-90a1-72a577b019aa';
    $pane = new stdClass();
    $pane->pid = 'new-39db26bf-9c60-4c0a-b7f0-6a404e7c0527';
    $pane->panel = 'content';
    $pane->type = 'virgin_module_signup';
    $pane->subtype = 'virgin_module_signup';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array();
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array();
    $pane->extras = array();
    $pane->position = 1;
    $pane->locks = array();
    $pane->uuid = '39db26bf-9c60-4c0a-b7f0-6a404e7c0527';
    $display->content['new-39db26bf-9c60-4c0a-b7f0-6a404e7c0527'] = $pane;
    $display->panels['content'][1] = 'new-39db26bf-9c60-4c0a-b7f0-6a404e7c0527';
  $display->hide_title = PANELS_TITLE_FIXED;
  $display->title_pane = '0';
  $panelizer->display = $display;
  $export['node:home_page:default'] = $panelizer;

  return $export;
}
