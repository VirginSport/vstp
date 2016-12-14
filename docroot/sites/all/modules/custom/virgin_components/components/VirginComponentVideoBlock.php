<?php

/**
 * @file
 * Contains VirginComponentVideoBlock class
 */

/**
 * Class VirginComponentVideoBlock
 */
class VirginComponentVideoBlock implements VirginComponentsInterface {

  /**
   * {@inheritdoc}
   */
  public function supports($entity_type, $bundle) {
      return $entity_type == 'fieldable_panels_pane' && $bundle == 'vs_video_block';
  }

  /**
   * {@inheritdoc}
   */
  public function themeSuggestion() {
      return 'virgin_components__fpp__vs_video_block';
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
    $variables['video_url'] = $virgin->fieldGetOne('field_video_url');
    $variables['poster'] = $virgin->relation('field_video_poster_image');
  }
}
