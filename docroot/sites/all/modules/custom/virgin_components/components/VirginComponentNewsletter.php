<?php

/**
 * @file
 * Contains VirginComponentNewsletter class
 */

/**
 * Class VirginComponentNewsletter
 */
class VirginComponentNewsletter implements VirginComponentsInterface {

  /**
   * {@inheritdoc}
   */
  public function supports($entity_type, $bundle) {
      return $entity_type == 'fieldable_panels_pane' && $bundle == 'vs_newsletter';
  }

  /**
   * {@inheritdoc}
   */
  public function themeSuggestion() {
      return 'virgin_components__fpp__vs_newsletter';
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

//    $variables['heading'] = $virgin->fieldGetOne('field_component_heading');
//    $variables['paragraphs'] = $virgin->fieldRendered('field_cta_blocks');
//    $variables['size'] = count($variables['field_cta_blocks']);
  }
}
