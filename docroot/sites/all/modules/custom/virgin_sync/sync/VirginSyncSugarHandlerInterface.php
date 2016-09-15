<?php
/**
 * @file
 * Contains the VirginSyncSugarHandlerInterface interface.
 */

/**
 * Interface VirginSyncSugarHandlerInterface
 *
 * Defines the interface implemented by all sugar syncable mechanisms
 */
interface VirginSyncSugarHandlerInterface extends VirginSyncHandlerInterface {

  /**
   * Gets the Sugar bean name
   *
   * @return string
   */
  public function bean();
}
