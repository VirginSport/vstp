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
  $panelizer->name = 'node:event:default';
  $panelizer->title = 'Default';
  $panelizer->panelizer_type = 'node';
  $panelizer->panelizer_key = 'event';
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
  $display->layout = 'flexible';
  $display->layout_settings = array();
  $display->panel_settings = array();
  $display->cache = array();
  $display->title = '%node:title';
  $display->uuid = 'a83f279a-8ef8-481d-b44c-d9aef05d3c19';
  $display->content = array();
  $display->panels = array();
    $pane = new stdClass();
    $pane->pid = 'new-1c8f2f44-d56f-4be6-bbf1-29faf02caf12';
    $pane->panel = 'center';
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
    $pane->style = array();
    $pane->css = array();
    $pane->extras = array();
    $pane->position = 0;
    $pane->locks = array();
    $pane->uuid = '1c8f2f44-d56f-4be6-bbf1-29faf02caf12';
    $display->content['new-1c8f2f44-d56f-4be6-bbf1-29faf02caf12'] = $pane;
    $display->panels['center'][0] = 'new-1c8f2f44-d56f-4be6-bbf1-29faf02caf12';
    $pane = new stdClass();
    $pane->pid = 'new-9a410824-5487-4863-8b6f-c530be1a9282';
    $pane->panel = 'center';
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
    $pane->style = array();
    $pane->css = array(
      'css_class' => 'link-wrapper',
    );
    $pane->extras = array();
    $pane->position = 0;
    $pane->locks = array();
    $pane->uuid = '9a410824-5487-4863-8b6f-c530be1a9282';
    $display->content['new-9a410824-5487-4863-8b6f-c530be1a9282'] = $pane;
    $display->panels['center'][1] = 'new-9a410824-5487-4863-8b6f-c530be1a9282';
  $display->hide_title = PANELS_TITLE_FIXED;
  $display->title_pane = 'new-9a410824-5487-4863-8b6f-c530be1a9282';
  $panelizer->display = $display;
  $export['node:event:default'] = $panelizer;

  $panelizer = new stdClass();
  $panelizer->disabled = FALSE; /* Edit this to true to make a default panelizer disabled initially */
  $panelizer->api_version = 1;
  $panelizer->name = 'node:event:default:teaser';
  $panelizer->title = 'Default';
  $panelizer->panelizer_type = 'node';
  $panelizer->panelizer_key = 'event';
  $panelizer->no_blocks = FALSE;
  $panelizer->css_id = '';
  $panelizer->css = '';
  $panelizer->pipeline = 'standard';
  $panelizer->contexts = array();
  $panelizer->relationships = array();
  $panelizer->access = array();
  $panelizer->view_mode = 'teaser';
  $panelizer->css_class = '';
  $panelizer->title_element = 'H2';
  $panelizer->link_to_entity = TRUE;
  $panelizer->extra = array();
  $display = new panels_display();
  $display->layout = 'flexible';
  $display->layout_settings = array();
  $display->panel_settings = array();
  $display->cache = array();
  $display->title = '%node:title';
  $display->uuid = '7467813a-f99c-41e5-85f7-2a04c488608d';
  $display->content = array();
  $display->panels = array();
    $pane = new stdClass();
    $pane->pid = 'new-9520f3ea-ca48-48f8-8e19-7cf0bf216713';
    $pane->panel = 'center';
    $pane->type = 'entity_field';
    $pane->subtype = 'node:body';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'label' => 'hidden',
      'formatter' => 'text_summary_or_trimmed',
      'delta_limit' => 0,
      'delta_offset' => '0',
      'delta_reversed' => FALSE,
      'formatter_settings' => array(
        'trim_length' => 600,
        'quickedit' => array(
          'editor' => 'form',
        ),
      ),
      'context' => 'panelizer',
    );
    $pane->cache = array();
    $pane->style = array();
    $pane->css = array();
    $pane->extras = array();
    $pane->position = 0;
    $pane->locks = array();
    $pane->uuid = '9520f3ea-ca48-48f8-8e19-7cf0bf216713';
    $display->content['new-9520f3ea-ca48-48f8-8e19-7cf0bf216713'] = $pane;
    $display->panels['center'][0] = 'new-9520f3ea-ca48-48f8-8e19-7cf0bf216713';
    $pane = new stdClass();
    $pane->pid = 'new-4aeda03c-64ec-41c2-b130-9050f04ad9d1';
    $pane->panel = 'center';
    $pane->type = 'node_links';
    $pane->subtype = 'node_links';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'override_title' => FALSE,
      'override_title_text' => '',
      'build_mode' => 'teaser',
      'identifier' => '',
      'link' => TRUE,
      'context' => 'panelizer',
    );
    $pane->cache = array();
    $pane->style = array();
    $pane->css = array(
      'css_class' => 'link-wrapper',
    );
    $pane->extras = array();
    $pane->position = 0;
    $pane->locks = array();
    $pane->uuid = '4aeda03c-64ec-41c2-b130-9050f04ad9d1';
    $display->content['new-4aeda03c-64ec-41c2-b130-9050f04ad9d1'] = $pane;
    $display->panels['center'][1] = 'new-4aeda03c-64ec-41c2-b130-9050f04ad9d1';
  $display->hide_title = PANELS_TITLE_FIXED;
  $display->title_pane = 'new-4aeda03c-64ec-41c2-b130-9050f04ad9d1';
  $panelizer->display = $display;
  $export['node:event:default:teaser'] = $panelizer;

  return $export;
}
