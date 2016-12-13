<?php

/**
 * @file
 * Contains VirginComponentCarousel class
 */

/**
 * Class VirginComponentCarousel
 */
class VirginComponentCarousel implements VirginComponentsInterface {

  /**
   * {@inheritdoc}
   */
  public function supports($entity_type, $bundle) {
      return $entity_type == 'fieldable_panels_pane' && $bundle == 'vs_carousel';
  }

  /**
   * {@inheritdoc}
   */
  public function themeSuggestion() {
      return 'virgin_components__fpp__vs_carousel';
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

    $variables['title'] = $virgin->fieldGetOne('title_field');
    $variables['heading'] = $virgin->fieldGetOne('field_component_heading');
    $variables['carousel_style'] = $virgin->fieldGetOne('field_carousel_style');
    $variables['thumbnail'] = $virgin->fieldGetOne('field_thumbnails');
    $banners = array();

    foreach($variables['field_banners'] as $banner) {
      $entity = entity_load_single('paragraphs_item', $banner['value']);
      $grapher = new VirginEntityGrapher('paragraphs_item', $entity);
      $bundle = $grapher->property('bundle');

      $picture = NULL;

      if ($bundle == 'vs_custom_banner') {
        $picture = $grapher->relation('field_hero_image');
      }

      if ($bundle == 'vs_event_festival_banner') {
        $picture = $grapher->relation('field_festival_event_reference')->relation('field_header_image');
      }

      if ($bundle == 'vs_slide'){
        $picture = $grapher->relation('field_slide_image');
      }

      if (empty($picture)) {
        continue;
      }

      $banners[] = array(
        'entity_grapher' => $grapher,
        'picture' => $picture
      );
    }

    $variables['banners'] = $banners;
  }
}
