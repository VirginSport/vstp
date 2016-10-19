<?php

/**
 * @file
 * Contains VirginComponentCTABlock class
 */

/**
 * Class VirginComponentCTABlock
 */
class VirginComponentCTABlock implements VirginComponentsInterface {

  /**
   * {@inheritdoc}
   */
  public function supports($entity_type, $bundle) {
      return $entity_type == 'fieldable_panels_pane' && $bundle == 'vs_cta_block';
  }

  /**
   * {@inheritdoc}
   */
  public function themeSuggestion() {
      return 'virgin_components__fpp__vs_cta_block';
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

    $variables['heading'] = $virgin->fieldGetOne('field_component_heading');
    $variables['paragraphs'] = $virgin->fieldRendered('field_cta_blocks');
    $x=0;
  }
}
