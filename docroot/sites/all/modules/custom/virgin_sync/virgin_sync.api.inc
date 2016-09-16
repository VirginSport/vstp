<?php
/**
 * @file
 * Describes all virgin_sync hooks and alter functions.
 */

/**
 * Registers sync handlers.
 *
 * @return VirginSyncHandlerInterface[]
 *  An array of object instances that implement the VirginSyncHandlerInterface interface.
 */
function hook_virgin_sync_handlers() {
  return array(
    new MyModulePersonSyncHandler()
  );
}
