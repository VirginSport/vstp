<?php

/**
 * @file
 * Contains the SugarcrmClient class
 */

use Spinegar\Sugar7Wrapper\Rest;

/**
 * Class SugarcrmClient
 *
 * Overrides the original sugar rest client with a custom implementation that
 * stores the authentication token in cache for re-use between requests.
 */
class SugarcrmClient extends Rest {

  /**
   * Constructor
   */
  public function __construct() {
    parent::__construct();
    $this->client = new SugarcrmGuzzle();
  }
}
