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
  public function preProcess(&$vars) {
    $vars['fpp'] = $vars['elements']['#fieldable_panels_pane'];
    $g = new VirginEntityGrapher('fieldable_panels_pane', $vars['fpp']);

    $manual_mylaps_id = $g->fieldGetOne('field_mylaps_id');
    $event_mylaps_id = $g->relation('field_event')->fieldGetOne('field_mylaps_id');

    if (empty($manual_mylaps_id) && empty($event_mylaps_id)) {
      return;
    }

    $vars['mylaps_id'] = empty($manual_mylaps_id) ? $event_mylaps_id : $manual_mylaps_id;
  }
}
