<?php
/**
 * @file
 * virgin_rich_page.panelizer.inc
 */

/**
 * Implements hook_panelizer_defaults().
 */
function virgin_rich_page_panelizer_defaults() {
  $export = array();

  $panelizer = new stdClass();
  $panelizer->disabled = FALSE; /* Edit this to true to make a default panelizer disabled initially */
  $panelizer->api_version = 1;
  $panelizer->name = 'node:rich_page:default';
  $panelizer->title = 'Default';
  $panelizer->panelizer_type = 'node';
  $panelizer->panelizer_key = 'rich_page';
  $panelizer->no_blocks = FALSE;
  $panelizer->css_id = '';
  $panelizer->css = '';
  $panelizer->pipeline = 'ipe';
  $panelizer->contexts = array();
  $panelizer->relationships = array();
  $panelizer->access = array();
  $panelizer->view_mode = 'page_manager';
  $panelizer->css_class = '';
  $panelizer->title_element = 'H2';
  $panelizer->link_to_entity = TRUE;
  $panelizer->extra = array();
  $display = new panels_display();
  $display->layout = 'twocol_bricks';
  $display->layout_settings = array();
  $display->panel_settings = array(
    'style_settings' => array(
      'default' => NULL,
      'top' => NULL,
      'left_above' => NULL,
      'right_above' => NULL,
      'middle' => NULL,
      'left_below' => NULL,
      'right_below' => NULL,
      'bottom' => NULL,
    ),
  );
  $display->cache = array();
  $display->title = '%node:title';
  $display->uuid = '76412d2e-9316-4b67-9e28-e58ff9237a8f';
  $display->content = array();
  $display->panels = array();
    $pane = new stdClass();
    $pane->pid = 'new-909d8252-6163-4a1b-bf14-6d41342f3674';
    $pane->panel = 'left_above';
    $pane->type = 'entity_field';
    $pane->subtype = 'node:body';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'label' => 'hidden',
      'formatter' => 'text_default',
      'delta_limit' => 0,
      'delta_offset' => '0',
      'delta_reversed' => FALSE,
      'formatter_settings' => array(
        'quickedit' => array(
          'editor' => 'plain_text',
        ),
      ),
      'context' => 'panelizer',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array();
    $pane->extras = array();
    $pane->position = 0;
    $pane->locks = array();
    $pane->uuid = '909d8252-6163-4a1b-bf14-6d41342f3674';
    $display->content['new-909d8252-6163-4a1b-bf14-6d41342f3674'] = $pane;
    $display->panels['left_above'][0] = 'new-909d8252-6163-4a1b-bf14-6d41342f3674';
    $pane = new stdClass();
    $pane->pid = 'new-ca75c61e-d750-4120-a2b8-ff41a10ee30e';
    $pane->panel = 'right_above';
    $pane->type = 'node_links';
    $pane->subtype = 'node_links';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'override_title' => FALSE,
      'override_title_text' => '',
      'build_mode' => 'page_manager',
      'identifier' => '',
      'link' => TRUE,
      'context' => 'panelizer',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array(
      'css_class' => 'link-wrapper',
    );
    $pane->extras = array();
    $pane->position = 0;
    $pane->locks = array();
    $pane->uuid = 'ca75c61e-d750-4120-a2b8-ff41a10ee30e';
    $display->content['new-ca75c61e-d750-4120-a2b8-ff41a10ee30e'] = $pane;
    $display->panels['right_above'][0] = 'new-ca75c61e-d750-4120-a2b8-ff41a10ee30e';
    $pane = new stdClass();
    $pane->pid = 'new-1653f1c1-f692-4ff9-9e5b-6b7126362b6f';
    $pane->panel = 'top';
    $pane->type = 'entity_field';
    $pane->subtype = 'node:field_target_audience';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'label' => 'above',
      'formatter' => 'taxonomy_term_reference_link',
      'delta_limit' => 0,
      'delta_offset' => '0',
      'delta_reversed' => FALSE,
      'formatter_settings' => array(
        'quickedit' => array(
          'editor' => 'form',
        ),
      ),
      'context' => 'panelizer',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array();
    $pane->extras = array();
    $pane->position = 0;
    $pane->locks = array();
    $pane->uuid = '1653f1c1-f692-4ff9-9e5b-6b7126362b6f';
    $display->content['new-1653f1c1-f692-4ff9-9e5b-6b7126362b6f'] = $pane;
    $display->panels['top'][0] = 'new-1653f1c1-f692-4ff9-9e5b-6b7126362b6f';
  $display->hide_title = PANELS_TITLE_FIXED;
  $display->title_pane = 'new-ca75c61e-d750-4120-a2b8-ff41a10ee30e';
  $panelizer->display = $display;
  $export['node:rich_page:default'] = $panelizer;

  return $export;
}
