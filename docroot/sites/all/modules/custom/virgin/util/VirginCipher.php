<?php

/**
 * @file
 * Contains the VirginCipher class
 */

/**
 * VirginCipher implements the algorithm to uncipher payloads sent by
 * external systems via URL to prevent tampering of the payload by users.
 */
class VirginCipher {

  /**
   * The cipher key
   *
   * @var string
   */
  protected $key;

  /**
   * Constructor
   *
   * @param string $key
   *  The cipher key
   */
  public function __construct($key) {
    $this->key = $key;
  }

  /**
   * Unciphers the contents contained in a base64 URL encoded string
   *
   * @param string $encoded
   *  The base64 encoded envelope
   * @return string
   *  The decrypted data contained in the envelope
   * @throws \Exception
   *  Thrown when the confirmation hash fails
   */
  public function uncipher($encoded) {

    // Decode from the base64 URL
    $envelope = $this->base64URLDecode($encoded);

    // Extract the encrypted data and the MAC
    $algo_bytes = 32; // We're using sha256 MAC which is a 32-byte hash.
    $data = substr($envelope, 0, -$algo_bytes);
    $mac = substr($envelope, -$algo_bytes);

    // Validate the MAC using the ciphered data and key
    if (hash_hmac("sha256", $data, $this->key, true) != $mac) {
      throw new \Exception("Could not validate hash.");
    }

    return $this->decrypt($this->key, $data);
  }

  /**
   * Decrypts the given encrypted data with the given key
   *
   * @param string $key
   *  The encryption key
   * @param string $data
   *  The encrypted data
   * @return string
   *  The decrypted data
   */
  protected function decrypt($key, $data) {
    $cipher = MCRYPT_RIJNDAEL_128;
    $mode = MCRYPT_MODE_CBC;

    // Extract the initialization vector from the decoded message
    $iv_size = mcrypt_get_iv_size($cipher, $mode);

    // Extract the iv and the contents
    $iv = substr($data, 0, $iv_size);
    $ciphertext = substr($data, $iv_size);

    // Decrypt the contents of the decoded message
    $decrypted = mcrypt_decrypt($cipher, $key, $ciphertext, $mode, $iv);

    // Remove block padding from the decrypted contents
    return $this->PKCS5Unpad($decrypted);
  }

  /**
   * Removes PKCS5 padding
   *
   * @param string $text
   *  The padded string
   * @return string
   *  The unpadded string
   */
  protected function PKCS5Unpad($text) {
    $pad = ord($text{strlen($text)-1});

    if ($pad > strlen($text)) {
      return '';
    }

    if (strspn($text, chr($pad), strlen($text) - $pad) != $pad) {
      return '';
    }

    return substr($text, 0, -1 * $pad);
  }

  /**
   * Decodes a base64 URL string
   *
   * @param string $data
   *  The base64 URL encoded string
   * @return string
   *  The decoded data
   */
  protected function base64URLDecode($data) {
    return base64_decode(str_pad(strtr($data, '-_', '+/'), strlen($data) % 4, '=', STR_PAD_RIGHT));
  }
}
