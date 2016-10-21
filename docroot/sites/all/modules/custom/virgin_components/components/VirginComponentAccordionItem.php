<?php

/**
 * @file
 * Contains VirginComponentAccordionItem  class
 */

/**
 * Class VirginComponentAccordionItem
 */
class VirginComponentAccordionItem implements VirginComponentsInterface {

  /**
   * {@inheritdoc}
   */
  public function supports($entity_type, $bundle) {
      return $entity_type == 'paragraphs_item' && $bundle == 'vs_accordion_item';
  }

  /**
   * {@inheritdoc}
   */
  public function themeSuggestion() {
      return 'virgin_components__p__vs_accordion_item';
  }

  /**
   * {@inheritdoc}
   */
  public function preProcess(&$variables) {
    if (empty($variables['elements']['#entity'])) {
      return;
    }

    $variables['p'] = $variables['elements']['#entity'];
    $virgin = new VirginEntityGrapher('paragraphs_item', $variables['p']);

    $variables['id'] = $virgin->property('item_id') . '-' . $virgin->property('revision_id');
    $variables['title'] = $virgin->fieldGetOne('title_field');
    $variables['content'] = $virgin->fieldRendered('field_answer');
  }
}
