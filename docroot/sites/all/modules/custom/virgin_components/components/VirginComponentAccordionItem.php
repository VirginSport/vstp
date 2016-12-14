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

    $variables['title'] = $virgin->fieldGetOne('title_field');
    $title = $this->clean($virgin->fieldGetOne('title_field', '', 'safe_value'));
    $variables['id'] = $title . '-' . $virgin->property('item_id') . '-' . $virgin->property('revision_id');
    $variables['content'] = $virgin->fieldRendered('field_answer');
  }

  /**
   * Remove every special characters from string
   *
   * @param $text
   *  The string to be cleaned
   * @return string
   *  The cleaned string
   */
  protected function clean($text) {
    // Replaces all spaces with hyphens and convert string to lowercase.
    $text = strtolower(str_replace(' ', '-', $text));

    // Removes special chars.
    return preg_replace('/[^A-Za-z0-9\-]/', '', $text);
  }

}
