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
  $display->uuid = '7f71c88f-9d89-4aa3-a8d2-af1695207b33';
  $display->storage_type = 'panelizer_default';
  $display->storage_id = 'node:festival:default';
  $display->content = array();
  $display->panels = array();
  $pane = new stdClass();
  $pane->pid = 'new-d046c39d-17ec-4c56-bc1d-c2f91190ac07';
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
  $pane->locks = array(
    'type' => 'none',
    'regions' => array(
      'announced_first' => 'announced_first',
    ),
  );
  $pane->uuid = 'd046c39d-17ec-4c56-bc1d-c2f91190ac07';
  $display->content['new-d046c39d-17ec-4c56-bc1d-c2f91190ac07'] = $pane;
  $display->panels['announced_first'][0] = 'new-d046c39d-17ec-4c56-bc1d-c2f91190ac07';
  $pane = new stdClass();
  $pane->pid = 'new-16df7b52-3550-4f1f-98d7-4964d9fcbbb7';
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
  $pane->uuid = '16df7b52-3550-4f1f-98d7-4964d9fcbbb7';
  $display->content['new-16df7b52-3550-4f1f-98d7-4964d9fcbbb7'] = $pane;
  $display->panels['closed_first'][0] = 'new-16df7b52-3550-4f1f-98d7-4964d9fcbbb7';
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
  $pane->pid = 'new-e0df253f-0cd7-4c33-8eee-8b293cf3ef34';
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
  $pane->uuid = 'e0df253f-0cd7-4c33-8eee-8b293cf3ef34';
  $display->content['new-e0df253f-0cd7-4c33-8eee-8b293cf3ef34'] = $pane;
  $display->panels['in_progress_first'][0] = 'new-e0df253f-0cd7-4c33-8eee-8b293cf3ef34';
  $pane = new stdClass();
  $pane->pid = 'new-b9d2ca50-4912-48d6-a012-35855c631366';
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
  $pane->uuid = 'b9d2ca50-4912-48d6-a012-35855c631366';
  $display->content['new-b9d2ca50-4912-48d6-a012-35855c631366'] = $pane;
  $display->panels['open_first'][0] = 'new-b9d2ca50-4912-48d6-a012-35855c631366';
  $pane = new stdClass();
  $pane->pid = 'new-ea616449-bf45-4d7b-bb8f-749182f92837';
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
  $pane->uuid = 'ea616449-bf45-4d7b-bb8f-749182f92837';
  $display->content['new-ea616449-bf45-4d7b-bb8f-749182f92837'] = $pane;
  $display->panels['over_first'][0] = 'new-ea616449-bf45-4d7b-bb8f-749182f92837';
  $display->hide_title = PANELS_TITLE_FIXED;
  $display->title_pane = '0';
  $panelizer->display = $display;
  $export['node:festival:default'] = $panelizer;

  return $export;
}
