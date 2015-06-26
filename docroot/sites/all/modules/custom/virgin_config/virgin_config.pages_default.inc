<?php
/**
 * @file
 * virgin_config.pages_default.inc
 */

/**
 * Implements hook_default_page_manager_pages().
 */
function virgin_config_default_page_manager_pages() {
  $page = new stdClass();
  $page->disabled = FALSE; /* Edit this to true to make a default page disabled initially */
  $page->api_version = 1;
  $page->name = 'get_in_touch';
  $page->task = 'page';
  $page->admin_title = 'Get in Touch';
  $page->admin_description = '';
  $page->path = 'get-in-touch';
  $page->access = array();
  $page->menu = array();
  $page->arguments = array();
  $page->conf = array(
    'admin_paths' => FALSE,
  );
  $page->default_handlers = array();
  $handler = new stdClass();
  $handler->disabled = FALSE; /* Edit this to true to make a default handler disabled initially */
  $handler->api_version = 1;
  $handler->name = 'page_get_in_touch__panel_context_27a4a52c-69d2-47f9-a361-9e0e4f792a78';
  $handler->task = 'page';
  $handler->subtask = 'get_in_touch';
  $handler->handler = 'panel_context';
  $handler->weight = 0;
  $handler->conf = array(
    'title' => 'Panel',
    'no_blocks' => 0,
    'pipeline' => 'standard',
    'body_classes_to_remove' => '',
    'body_classes_to_add' => '',
    'css_id' => '',
    'css' => '',
    'contexts' => array(),
    'relationships' => array(),
  );
  $display = new panels_display();
  $display->layout = 'onecol';
  $display->layout_settings = array();
  $display->panel_settings = array(
    'style_settings' => array(
      'default' => NULL,
      'top' => NULL,
      'left' => NULL,
      'right' => NULL,
      'bottom' => NULL,
      'middle' => NULL,
    ),
  );
  $display->cache = array();
  $display->title = 'Get in Touch';
  $display->uuid = 'e55f1bc6-d6d5-4c9b-bc2d-f78f1309ae76';
  $display->content = array();
  $display->panels = array();
    $pane = new stdClass();
    $pane->pid = 'new-bda641d2-ef10-4bf2-a9f4-2472b88377b7';
    $pane->panel = 'middle';
    $pane->type = 'virgin_contact';
    $pane->subtype = 'virgin_contact';
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
    $pane->uuid = 'bda641d2-ef10-4bf2-a9f4-2472b88377b7';
    $display->content['new-bda641d2-ef10-4bf2-a9f4-2472b88377b7'] = $pane;
    $display->panels['middle'][0] = 'new-bda641d2-ef10-4bf2-a9f4-2472b88377b7';
  $display->hide_title = PANELS_TITLE_FIXED;
  $display->title_pane = '0';
  $handler->conf['display'] = $display;
  $page->default_handlers[$handler->name] = $handler;
  $pages['get_in_touch'] = $page;

  return $pages;

}
