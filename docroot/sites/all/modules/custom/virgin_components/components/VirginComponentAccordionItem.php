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
    // TODO
  }
}
