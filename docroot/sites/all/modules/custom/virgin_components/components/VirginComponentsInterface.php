<?php

/**
 * @file
 * Contains VirginComponentsInterface interface
 */

/**
 * Interface VirginComponentsInterface
 *
 * Implemented by all components
 */
interface VirginComponentsInterface {

  /**
   * Checks if this component supports the given theme entity type and bundle
   *
   * @param string $entity_type
   * @param string $bundle
   * @return bool
   */
  public function supports($entity_type, $bundle);

  /**
   * Gets the component theme hook sugestion
   *
   * @return string
   */
  public function themeSuggestion();

  /**
   * Preprocesses the component variables
   *
   * @param $variables
   */
  public function preProcess(&$variables);
}
