<?php

/**
 * @file
 * Contains VirginComponentTicketCards class
 */

/**
 * Class VirginComponentTicketCards
 */
class VirginComponentTicketCards implements VirginComponentsInterface {

  /**
   * {@inheritdoc}
   */
  public function supports($entity_type, $bundle) {
      return $entity_type == 'fieldable_panels_pane' && $bundle == 'vs_ticket_cards';
  }

  /**
   * {@inheritdoc}
   */
  public function themeSuggestion() {
      return 'virgin_components__fpp__vs_ticket_cards';
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

    $variables['component_heading'] = $virgin->fieldGetOne('field_component_heading');
    $variables['paragraphs'] = $virgin->fieldRendered('field_ticket_cards');
  }
}
