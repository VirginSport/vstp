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
  $display->layout = 'virginsport_states';
  $display->layout_settings = array();
  $display->panel_settings = array(
    'style_settings' => array(
      'first' => array(
        'is_curved' => 0,
        'brand_color' => 'default',
        'overlap' => 'none',
      ),
      'announced_first' => array(
        'is_curved' => 1,
        'brand_color' => 'default',
        'overlap' => 'none',
      ),
      'announced_second' => array(
        'is_curved' => 1,
        'brand_color' => 'default',
        'overlap' => 'none',
      ),
      'announced_third' => array(
        'is_curved' => 1,
        'brand_color' => 'default',
        'overlap' => 'none',
      ),
      'announced_fourth' => array(
        'is_curved' => 1,
        'brand_color' => 'default',
        'overlap' => 'none',
      ),
      'announced_fifth' => array(
        'is_curved' => 1,
        'brand_color' => 'default',
        'overlap' => 'none',
      ),
      'announced_sixth' => array(
        'is_curved' => 1,
        'brand_color' => 'default',
        'overlap' => 'none',
      ),
      'open_first' => array(
        'is_curved' => 1,
        'brand_color' => 'default',
        'overlap' => 'none',
      ),
      'open_second' => array(
        'is_curved' => 1,
        'brand_color' => 'default',
        'overlap' => 'none',
      ),
      'open_third' => array(
        'is_curved' => 1,
        'brand_color' => 'default',
        'overlap' => 'none',
      ),
      'open_fourth' => array(
        'is_curved' => 1,
        'brand_color' => 'default',
        'overlap' => 'none',
      ),
      'open_fifth' => array(
        'is_curved' => 1,
        'brand_color' => 'default',
        'overlap' => 'none',
      ),
      'open_sixth' => array(
        'is_curved' => 1,
        'brand_color' => 'default',
        'overlap' => 'none',
      ),
      'in_progress_first' => array(
        'is_curved' => 1,
        'brand_color' => 'default',
        'overlap' => 'none',
      ),
      'in_progress_second' => array(
        'is_curved' => 1,
        'brand_color' => 'default',
        'overlap' => 'none',
      ),
      'in_progress_third' => array(
        'is_curved' => 1,
        'brand_color' => 'default',
        'overlap' => 'none',
      ),
      'in_progress_fourth' => array(
        'is_curved' => 1,
        'brand_color' => 'default',
        'overlap' => 'none',
      ),
      'in_progress_fifth' => array(
        'is_curved' => 1,
        'brand_color' => 'default',
        'overlap' => 'none',
      ),
      'in_progress_sixth' => array(
        'is_curved' => 1,
        'brand_color' => 'default',
        'overlap' => 'none',
      ),
      'over_first' => array(
        'is_curved' => 1,
        'brand_color' => 'default',
        'overlap' => 'none',
      ),
      'over_second' => array(
        'is_curved' => 1,
        'brand_color' => 'default',
        'overlap' => 'none',
      ),
      'over_third' => array(
        'is_curved' => 1,
        'brand_color' => 'default',
        'overlap' => 'none',
      ),
      'over_fourth' => array(
        'is_curved' => 1,
        'brand_color' => 'default',
        'overlap' => 'none',
      ),
      'over_fifth' => array(
        'is_curved' => 1,
        'brand_color' => 'default',
        'overlap' => 'none',
      ),
      'over_sixth' => array(
        'is_curved' => 1,
        'brand_color' => 'default',
        'overlap' => 'none',
      ),
      'closed_first' => array(
        'is_curved' => 1,
        'brand_color' => 'default',
        'overlap' => 'none',
      ),
      'closed_second' => array(
        'is_curved' => 1,
        'brand_color' => 'default',
        'overlap' => 'none',
      ),
      'closed_third' => array(
        'is_curved' => 1,
        'brand_color' => 'default',
        'overlap' => 'none',
      ),
      'closed_fourth' => array(
        'is_curved' => 1,
        'brand_color' => 'default',
        'overlap' => 'none',
      ),
      'closed_fifth' => array(
        'is_curved' => 1,
        'brand_color' => 'default',
        'overlap' => 'none',
      ),
      'closed_sixth' => array(
        'is_curved' => 1,
        'brand_color' => 'default',
        'overlap' => 'none',
      ),
      'default' => NULL,
    ),
    'first' => array(
      'style' => 'curve',
    ),
    'announced_first' => array(
      'style' => 'curve',
    ),
    'announced_second' => array(
      'style' => 'curve',
    ),
    'announced_third' => array(
      'style' => 'curve',
    ),
    'announced_fourth' => array(
      'style' => 'curve',
    ),
    'announced_fifth' => array(
      'style' => 'curve',
    ),
    'announced_sixth' => array(
      'style' => 'curve',
    ),
    'open_first' => array(
      'style' => 'curve',
    ),
    'open_second' => array(
      'style' => 'curve',
    ),
    'open_third' => array(
      'style' => 'curve',
    ),
    'open_fourth' => array(
      'style' => 'curve',
    ),
    'open_fifth' => array(
      'style' => 'curve',
    ),
    'open_sixth' => array(
      'style' => 'curve',
    ),
    'in_progress_first' => array(
      'style' => 'curve',
    ),
    'in_progress_second' => array(
      'style' => 'curve',
    ),
    'in_progress_third' => array(
      'style' => 'curve',
    ),
    'in_progress_fourth' => array(
      'style' => 'curve',
    ),
    'in_progress_fifth' => array(
      'style' => 'curve',
    ),
    'in_progress_sixth' => array(
      'style' => 'curve',
    ),
    'over_first' => array(
      'style' => 'curve',
    ),
    'over_second' => array(
      'style' => 'curve',
    ),
    'over_third' => array(
      'style' => 'curve',
    ),
    'over_fourth' => array(
      'style' => 'curve',
    ),
    'over_fifth' => array(
      'style' => 'curve',
    ),
    'over_sixth' => array(
      'style' => 'curve',
    ),
    'closed_first' => array(
      'style' => 'curve',
    ),
    'closed_second' => array(
      'style' => 'curve',
    ),
    'closed_third' => array(
      'style' => 'curve',
    ),
    'closed_fourth' => array(
      'style' => 'curve',
    ),
    'closed_fifth' => array(
      'style' => 'curve',
    ),
    'closed_sixth' => array(
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
  $pane->pid = 'new-2143a3cc-ae4f-4645-8b93-78bc6a89ea9b';
  $pane->panel = 'announced_first';
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
  $pane->uuid = '2143a3cc-ae4f-4645-8b93-78bc6a89ea9b';
  $display->content['new-2143a3cc-ae4f-4645-8b93-78bc6a89ea9b'] = $pane;
  $display->panels['announced_first'][0] = 'new-2143a3cc-ae4f-4645-8b93-78bc6a89ea9b';
  $pane = new stdClass();
  $pane->pid = 'new-50f79dd2-d2a8-4199-9d88-30992564950e';
  $pane->panel = 'closed_first';
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
  $pane->locks = array(
    'type' => 'none',
    'regions' => array(
      'closed_first' => 'closed_first',
    ),
  );
  $pane->uuid = '50f79dd2-d2a8-4199-9d88-30992564950e';
  $display->content['new-50f79dd2-d2a8-4199-9d88-30992564950e'] = $pane;
  $display->panels['closed_first'][0] = 'new-50f79dd2-d2a8-4199-9d88-30992564950e';
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
  $pane->pid = 'new-714d6476-af53-416e-ac41-e029b6dd2c27';
  $pane->panel = 'in_progress_first';
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
  $pane->locks = array(
    'type' => 'none',
    'regions' => array(
      'in_progress_first' => 'in_progress_first',
    ),
  );
  $pane->uuid = '714d6476-af53-416e-ac41-e029b6dd2c27';
  $display->content['new-714d6476-af53-416e-ac41-e029b6dd2c27'] = $pane;
  $display->panels['in_progress_first'][0] = 'new-714d6476-af53-416e-ac41-e029b6dd2c27';
  $pane = new stdClass();
  $pane->pid = 'new-1303a8c7-b0ef-4361-9126-676a7a60cc22';
  $pane->panel = 'open_first';
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
  $pane->locks = array(
    'type' => 'none',
    'regions' => array(
      'open_first' => 'open_first',
    ),
  );
  $pane->uuid = '1303a8c7-b0ef-4361-9126-676a7a60cc22';
  $display->content['new-1303a8c7-b0ef-4361-9126-676a7a60cc22'] = $pane;
  $display->panels['open_first'][0] = 'new-1303a8c7-b0ef-4361-9126-676a7a60cc22';
  $pane = new stdClass();
  $pane->pid = 'new-fc8e9a3e-8422-442e-ba5a-67a766bd6e67';
  $pane->panel = 'over_first';
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
  $pane->locks = array(
    'type' => 'none',
    'regions' => array(
      'over_first' => 'over_first',
    ),
  );
  $pane->uuid = 'fc8e9a3e-8422-442e-ba5a-67a766bd6e67';
  $display->content['new-fc8e9a3e-8422-442e-ba5a-67a766bd6e67'] = $pane;
  $display->panels['over_first'][0] = 'new-fc8e9a3e-8422-442e-ba5a-67a766bd6e67';
  $display->hide_title = PANELS_TITLE_FIXED;
  $display->title_pane = '0';
  $panelizer->display = $display;
  $export['node:event:default'] = $panelizer;

  return $export;
}
