<?php

/**
 * @file
 * Contains VirginComponentResultsIntroduction class
 */

/**
 * Class VirginComponentResultsOverview
 */
class VirginComponentResultsOverview implements VirginComponentsInterface {

  /**
   * {@inheritdoc}
   */
  public function supports($entity_type, $bundle) {
    return $entity_type == 'fieldable_panels_pane' && $bundle == 'vs_results_overview';
  }

  /**
   * {@inheritdoc}
   */
  public function themeSuggestion() {
    return 'virgin_components__fpp__vs_results_overview';
  }

  /**
   * {@inheritdoc}
   */
  public function preProcess(&$variables) {
    if (empty($variables['elements']['#fieldable_panels_pane'])) {
      return;
    }

    $variables['fpp'] = $variables['elements']['#fieldable_panels_pane'];
    $virgin = new VirginEntityGrapher('fieldable_panels_pane', $variables['fpp']);

    $eg = $virgin->relation('field_event_reference');
    $esg = $eg->relation('field_event_state');
    $start_date = $esg->fieldGetOne('field_start_date');
    $timezone = $esg->fieldGetOne('field_timezone');

    $variables['brand_color'] = $eg->fieldGetOne('field_brand_color');
    $variables['atom'] = $eg->relation('field_results_overview_image');
    $variables['description'] = $eg->fieldRendered('field_results_overview_content');
    $variables['title'] = $eg->fieldGetOne('title_field');
    $variables['start_date'] = virgin_date($start_date, $timezone)->format('d M');
    $variables['cta_links'] = $virgin->fieldGetAll('field_cta_links');
  }
}
