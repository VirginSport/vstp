<?php
/**
 * @file
 * Contains the VirginSyncSugarHandlerInterface interface.
 */

/**
 * Interface VirginSyncSugarHandlerInterface
 *
 * Defines the interface implemented by all sugar sync handlers
 */
interface VirginSyncSugarHandlerInterface extends VirginSyncHandlerInterface {

  /**
   * Gets the Sugar bean name
   *
   * @return string
   */
  public function bean();
}
