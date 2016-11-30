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

  protected $username;
  protected $password;

  protected $isReady = FALSE;
  protected $systemClient;

  /**
   * Constructor
   */
  public function __construct() {
    parent::__construct();
    $this->client = new SugarcrmGuzzle();
    $this->systemClient = new Guzzle\Http\Client();
  }

  /**
   * Perform a post Request
   *
   * @param $endpoint
   *  The Sugar APi endpoint path
   * @param $parameters array
   *  The parameters
   * @return mixed
   */
  public function systemPost($endpoint, $parameters = array()) {
    $this->ensureReady();

    $request = $this->systemClient->post($endpoint, null, json_encode($parameters));
    $request->setAuth($this->username, $this->password);

    $response = $request->send()->json();

    if (!$response) {
      return false;
    }

    return $response;
  }

  /**
   * Perform a get Request
   *
   * @param $endpoint
   *  The Sugar APi endpoint path
   * @param $parameters array
   *  The parameters
   * @return mixed
   */
  public function systemGet($endpoint, $parameters = array()) {
    $this->ensureReady();

    $request = $this->systemClient->get($endpoint);
    $request->setAuth($this->username, $this->password);

    $query = $request->getQuery();

    foreach ($parameters as $key=>$value) {
      $query->add($key, $value);
    }

    $response = $request->send()->json();

    if (!$response) {
      return false;
    }

    return $response;
  }

  /**
   * Ensure system client is ready by setting its base url
   */
  protected function ensureReady() {
    if ($this->isReady) {
      return;
    }

    $url = $this->client->getUrl();
    $this->systemClient->setBaseUrl($url);
  }

  /**
   * @param mixed $username
   * @return SugarcrmClient
   */
  public function setUsername($username) {
    $this->username = $username;
    return $this;
  }

  /**
   * @param mixed $password
   * @return SugarcrmClient
   */
  public function setPassword($password) {
    $this->password = $password;
    return $this;
  }
}
