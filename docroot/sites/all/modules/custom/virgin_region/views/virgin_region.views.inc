<?php
/**
 * @file
 * Views hooks implemented for the Virgin Region module.
 */

/**
 * Implements hook_views_data_alter().
 */
function virgin_region_views_data_alter(&$data) {
  $data['node']['virgin_region']['title'] = 'Regional content';
  $data['node']['virgin_region']['help'] = 'Filters content that is either from the current Region or all other Regions';
  $data['node']['virgin_region']['filter']['handler'] = 'virgin_region_handler_filter_region';
}