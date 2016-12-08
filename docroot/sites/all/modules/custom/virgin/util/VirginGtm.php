<?php

/**
 * @file
 * Contains VirginGtm class
 */

/**
 * Class VirginGtm
 *
 * Save object event to be triggered on Google tag manager data layer
 */
class VirginGtm {

  const KEY = 'virgin_gtm';

  /**
   * Register error to push later to GTM data layer
   *
   * @param $error_type
   *  The error description
   */
  public function addError($error_type) {
    $this->push(array('event' => 'ErrorEvent', 'ErrorType' => $error_type));
  }

  /**
   * Register event to push later to GTM data layer
   *
   * @param $event_name
   *  The event name
   */
  public function addEvent($event_name) {
    $this->push(array('event' => $event_name));
  }

  /**
   * Register custom object to push later to GTM data layer
   *
   * @param $data
   *  An array to be json encoded
   */
  public function push(array $data) {
    // if session is not defined initialize it
    if (empty($_SESSION[self::KEY])) {
      $_SESSION[self::KEY] = array();
    }

    $_SESSION[self::KEY][] = drupal_json_encode($data);
  }

  /**
   * Get all registered events, and clear it from
   */
  public function get() {
    $data = $_SESSION[self::KEY];

    if (empty($data)) {
      return array();
    }

    // Clear registered events
    $this->clear();

    return $data;
  }

  protected function clear() {
    unset($_SESSION[self::KEY]);
  }
}
