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
    // TODO
  }
}
