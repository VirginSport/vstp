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
   * The attendly API username
   *
   * @var string
   */
  protected $username;

  /**
   * The attendly API password
   *
   * @var string
   */
  protected $password;

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
    $this->username = $username;
    $this->password = $password;

    $this->client = new Client($api_url);
  }

  /**
   * Binds an attendly session with a given virgin sport ID
   *
   * @param $attendly_session_id
   *  The attendly session ID
   * @param $virgin_sport_id
   *  The virgin sport user ID
   * @return string
   *  The user checkout token, that needs to be set as a cookie in order for
   *  attendly to recognize the user as having been successfuly authorized
   *  to act as the given virgin sport user.
   * @throws \Exception
   *  Whenever a token could not be fetched from Attendly
   */
  public function bindCheckoutSession($attendly_session_id, $virgin_sport_id) {
    $data = array(
      'SessionID' => $attendly_session_id,
      'VirginSportID' => $virgin_sport_id
    );

    $request = $this->client->post('/v2/virgin/requestusertoken', null, json_encode($data));
    $request->setAuth($this->username, $this->password);
    $response_data = $request->send()->json();

    if (empty($response_data['Result']['Token'])) {
      throw new \Exception("Could not bind session to a checkout token");
    }

    return $response_data['Result']['Token'];
  }

  /**
   * Builds the full path to make an action in a ticket
   *
   * @param $rego_id
   *  The ticket rego ID
   * @param $action
   *  The name of the key of the action being done one the ticket
   * @return string
   *  The attendly ticket action URL
   */
  public function buildTicketActionPath($rego_id, $action) {
    $token = $this->getTicketActionToken($rego_id);
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
  protected function getTicketActionToken($rego_id) {
    $data = array(
      'Rego' => $rego_id,
    );

    $request = $this->client->post('/v2/attendee/postregoaccess', null, json_encode($data));
    $request->setAuth($this->username, $this->password);
    $response_data = $request->send()->json();

    if (empty($response_data['Result']['Token'])) {
      throw new \Exception("Could not fetch a valid attendly post checkout token");
    }

    return $response_data['Result']['Token'];
  }

  /**
   * Builds the full path to claim a ticket
   *
   * @param $rego_id
   *  The ticket rego ID
   * @param string $virgin_sport_id
   *  The virgin sport ID of the user that's claiming this ticket
   * @param string $email
   *  The email of the the user that's claiming this ticket
   * @return string
   *  The attendly ticket claim URL
   */
  public function buildTicketClaimPath($rego_id, $virgin_sport_id, $email) {
    $token = $this->getTicketClaimToken($rego_id, $virgin_sport_id, $email);
    $path = sprintf('%s/post/personal/%s/%s', $this->url, $rego_id, $token);

    return $path;
  }

  /**
   * Get the ticket claim access token for a given ticket rego id
   *
   * @param $rego_id
   *  The ticket rego for which a token is being fetched
   * @param string $virgin_sport_id
   *  The virgin sport ID of the user that's claiming this ticket
   * @param string $email
   *  The email of the the user that's claiming this ticket
   * @throws \Exception
   *  If it was not possible to fetch an access token
   */
  protected function getTicketClaimToken($rego_id, $virgin_sport_id, $email) {
    $data = array(
      'Rego' => $rego_id,
      'ExternalID' => $virgin_sport_id,
      'Email' => $email
    );

    $request = $this->client->post('/v2/attendee/postregoaccess', null, json_encode($data));
    $request->setAuth($this->username, $this->password);
    $response_data = $request->send()->json();

    if (empty($response_data['Result']['Token'])) {
      throw new \Exception("Could not fetch a valid attendly post checkout token");
    }

    return $response_data['Result']['Token'];
  }

  /**
   * Builds the full path to the purchase history page
   *
   * @param string $virgin_sport_id
   *  The virgin sport ID of the user that's claiming this ticket
   * @return string
   *  The attendly ticket claim URL
   */
  public function buildPurchaseHistoryPath($virgin_sport_id) {
    $token = $this->getPurchaseHistoryToken($virgin_sport_id);
    $path = sprintf('%s/post/purchasehistory/%', $this->url, $token);

    return $path;
  }

  /**
   * Get the ticket claim access token to access the purchase history page
   *
   * @param string $virgin_sport_id
   *  The virgin sport ID of the user that's viewing the purchase history
   * @throws \Exception
   *  If it was not possible to fetch an access token
   */
  protected function getPurchaseHistoryToken($virgin_sport_id) {
    $data = array(
      'ExternalID' => $virgin_sport_id,
    );

    $request = $this->client->post('/v2/attendee/purchasehistoryaccess', null, json_encode($data));
    $request->setAuth($this->username, $this->password);
    $response_data = $request->send()->json();

    $token = '';
    if (!empty($response_data['Result']['Token'])) {
      $token = $response_data['Result']['Token'];
    }

    return $token;
  }
}
