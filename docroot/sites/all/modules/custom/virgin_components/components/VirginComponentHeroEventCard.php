<?php

/**
 * @file
 * Contains VirginComponentHeroEventCard class
 */

/**
 * Class VirginComponentHeroEventCard
 */
class VirginComponentHeroEventCard implements VirginComponentsInterface {

  /**
   * {@inheritdoc}
   */
  public function supports($entity_type, $bundle) {
      return $entity_type == 'fieldable_panels_pane' && $bundle == 'vs_hero_event_card';
  }

  /**
   * {@inheritdoc}
   */
  public function themeSuggestion() {
      return 'virgin_components__fpp__vs_hero_event_card';
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
    $event_grapher = $virgin->relation('field_hero_event_reference');
    $event_state_grapher = $event_grapher->relation('field_event_state');

    $variables['event_grapher'] = $event_grapher;
    $variables['event_state_grapher'] = $event_state_grapher;
    $variables['header_image'] = $event_grapher->relation('field_card_image');
    $variables['brand_color'] = $event_grapher->fieldGetOne('field_brand_color');
    $variables['brand_pattern'] = $event_grapher->fieldGetOne('field_brand_pattern');
    $variables['event_title'] = $event_grapher->fieldGetOne('title_field');
    $variables['event_description'] = $event_grapher->fieldRendered('field_description');
    $variables['event_date'] = date('d M', $event_state_grapher->fieldGetOne('field_start_date'));
    $variables['hide_dates'] = $event_grapher->fieldGetOne('field_hide_dates');
    $variables['align'] = $virgin->fieldGetOne('field_hero_event_align');
    $variables['outline_title'] = $virgin->fieldGetOne('field_outline_title');
    $variables['card_color'] = $virgin->fieldGetOne('field_brand_color');
    $variables['cta_links'] = $virgin->fieldGetAll('field_cta_links');
  }
}
