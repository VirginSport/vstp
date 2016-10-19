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
    // TODO
  }
}
