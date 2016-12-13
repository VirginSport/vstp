<?php

/**
 * @file
 * Contains VirginComponentAccordionItem  class
 */

/**
 * Class VirginComponentAccordionItem
 */
class VirginComponentVideoBanner implements VirginComponentsInterface {

  /**
   * {@inheritdoc}
   */
  public function supports($entity_type, $bundle) {
      return $entity_type == 'fieldable_panels_pane' && $bundle == 'vs_video_banner';
  }

  /**
   * {@inheritdoc}
   */
  public function themeSuggestion() {
      return 'virgin_components__fpp__vs_video_banner';
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


    $variables['title'] = $virgin->fieldGetOne('field_component_heading');
    $variables['header_image_grapher'] = $virgin->relation('field_header_image');
    $variables['video_url'] = $virgin->fieldGetOne('field_video_url');
    $variables['poster'] = $virgin->relation('field_video_poster_image');
    $variables['overlay_video_url'] = $virgin->fieldGetOne('field_overlay_video_url');
    $variables['overlay_poster'] = $virgin->relation('field_overlay_video_poster_image');
    $variables['slider_images'] = $virgin->allRelations('field_slider_images');
    $variables['cta_links'] = $virgin->fieldGetAll('field_cta_links');
  }
}
