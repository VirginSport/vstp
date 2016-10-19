<?php

/**
 * @file
 * Contains VirginComponentMyLapsTrackMyRunner class
 */

/**
 * Class VirginComponentMyLapsTrackMyRunner
 */
class VirginComponentMyLapsTrackMyRunner implements VirginComponentsInterface {

  /**
   * {@inheritdoc}
   */
  public function supports($entity_type, $bundle) {
      return $entity_type == 'fieldable_panels_pane' && $bundle == 'vs_mylaps_track_my_runner';
  }

  /**
   * {@inheritdoc}
   */
  public function themeSuggestion() {
      return 'virgin_components__fpp__vs_my_laps_track_my_runner';
  }

  /**
   * {@inheritdoc}
   */
  public function preProcess(&$variables) {
    // TODO
  }
}
