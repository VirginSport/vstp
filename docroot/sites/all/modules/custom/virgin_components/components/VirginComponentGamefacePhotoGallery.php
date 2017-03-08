<?php

/**
 * @file
 * Contains VirginComponentGamefacePhotoGallery class
 */

/**
 * Class VirginComponentGamefacePhotoGallery
 */
class VirginComponentGamefacePhotoGallery implements VirginComponentsInterface {

  /**
   * {@inheritdoc}
   */
  public function supports($entity_type, $bundle) {
      return $entity_type == 'fieldable_panels_pane' && $bundle == 'vs_gameface_gallery';
  }

  /**
   * {@inheritdoc}
   */
  public function themeSuggestion() {
      return 'virgin_components__fpp__vs_gameface_photo_gallery';
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

    // The related fields of basic content block
    $gameface_id = $virgin->fieldGetOne('field_gameface_id');
    $url_placeholder = 'https://rm.gamefacemedia.com/races/%s/embed';

    if (!empty($gameface_id)) {
      $variables['url'] = sprintf($url_placeholder, $gameface_id);
    } else {
      $event_grapher = $virgin->relation('field_event_reference');
      $variables['url'] = sprintf($url_placeholder, $event_grapher->fieldGetOne('field_gameface_id'));
    }

    $variables['component_heading'] = $virgin->fieldGetOne('field_component_heading');
  }
}
