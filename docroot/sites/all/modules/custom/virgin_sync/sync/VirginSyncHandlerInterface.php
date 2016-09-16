<?php
/**
 * @file
 * Contains the VirginSyncHandlerInterface interface.
 */

/**
 * Interface VirginSyncHandlerInterface
 *
 * Defines the interface implemented by all sync handlers
 */
interface VirginSyncHandlerInterface {

  /**
   * Checks whether the external entity exists in Drupal
   *
   * The return value of this method will trigger the execution of the create()
   * method if the entity does not exist, update() otherwise.
   *
   * @param $external_id
   *  The external ID of the entity being synced
   * @return bool
   *  FALSE if the external entity does not exist, TRUE otherwise.
   */
  public function exists($external_id);

  /**
   * Called when the external entity does not exist in Drupal
   *
   * @param \VirginGrapher $g
   *  A grapher object containing the external entity payload
   * @param $external_id
   *  The external ID of the entity being synced
   */
  public function create(VirginGrapher $g, $external_id);

  /**
   * Called when the external entity already exists in Drupal
   *
   * @param \VirginGrapher $g
   *  A grapher object containing the external entity payload
   * @param $external_id
   *  The external ID of the entity being synced
   */
  public function update(VirginGrapher $g, $external_id);
}
