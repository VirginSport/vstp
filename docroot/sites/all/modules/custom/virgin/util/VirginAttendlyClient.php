<?php

/**
 * @file
 * Contains the VirginAttendlyClient class
 */

use Guzzle\Http\Client;

/**
 * VirginAttendlyClient is a small API client to interact with custom attendly
 * endpoints built for VirginSport website.
 */
class VirginAttendlyClient {

  /**
   * @var Client
   */
  protected $client;

  /**
   * The attendly user facing instance url
   *
   * @var string
   */
  protected $url;

  /**
   * Constructor
   *
   * @param $url
   *  The attendly user facing instance url
   * @param string $api_url
   *  The attendly API instance base url
   * @param string $username
   *  The attendly API username
   * @param string $password
   *  The attendly API password
   */
  public function __construct($url, $api_url, $username, $password) {
    $this->url = $url;

    $this->client = new Client($api_url, array(
      'auth' => array($username, $password)
    ));
  }

  /**
   * Redirects the current user to a Attendly to make an action in a ticket
   *
   * @param $rego_id
   *  The ticket rego ID
   * @param $action
   *  The name of the key of the action being done one the ticket
   * @return string
   *  The attendly ticket action URL
   */
  public function buildTicketActionPath($rego_id, $action) {
    $token = $this->getPostRegoAccessToken($rego_id);
    $path = sprintf('%s/post/%s/%s/%s', $this->url, $action, $rego_id, $token);

    return $path;
  }

  /**
   * Get the access token for a given ticket rego id
   *
   * @param $rego_id
   *  The ticket rego for which a token is being fetched
   * @throws \Exception
   *  If it was not possible to fetch an access token
   */
  protected function getPostRegoAccessToken($rego_id) {
    $data = array(
      'Rego' => $rego_id,
    );

    $response = $this->client->post('/v2/attendee/postregoaccess', null, json_encode($data))->send();
    $response_data = $response->json();

    if (empty($response_data['Result']['Token'])) {
      throw new \Exception("Could not fetch a valid attendly post checkout token");
    }

    return $response_data['Result']['Token'];
  }
}
