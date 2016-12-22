<?php

/**
 * @file
 * Contains VirginComponentPhotoGallery class
 */

/**
 * Class VirginComponentPhotoGallery
 */
class VirginComponentPhotoGallery implements VirginComponentsInterface {

  /**
   * {@inheritdoc}
   */
  public function supports($entity_type, $bundle) {
      return $entity_type == 'fieldable_panels_pane' && $bundle == 'vs_photo_gallery';
  }

  /**
   * {@inheritdoc}
   */
  public function themeSuggestion() {
      return 'virgin_components__fpp__vs_photo_gallery';
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
    $variables['thumbnail'] = $virgin->fieldGetOne('field_thumbnail');
    $slides = array();

    foreach($variables['field_slides'] as $slide) {
      $entity = entity_load_single('paragraphs_item', $slide['value']);
      $grapher = new VirginEntityGrapher('paragraphs_item', $entity);
      $slides[] = array(
        'entity_grapher' => $grapher,
        'picture' => $grapher->relation('field_slide_image'),
      );
    }

    $variables['slides'] = $slides;

  }
}
