<?php

/**
 * @file
 * Contains VirginComponentAccordion class
 */

/**
 * Class VirginComponentAccordion
 */
class VirginComponentAccordion implements VirginComponentsInterface {

  /**
   * {@inheritdoc}
   */
  public function supports($entity_type, $bundle) {
    return $entity_type == 'fieldable_panels_pane' && $bundle == 'vs_accordion';
  }

  /**
   * {@inheritdoc}
   */
  public function themeSuggestion() {
    return 'virgin_components__fpp__vs_accordion';
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

    $variables['title'] = $virgin->fieldGetOne('field_accordion_title');
    $variables['accordion_items'] = $virgin->fieldRendered('field_accordion_items');
  }
}
