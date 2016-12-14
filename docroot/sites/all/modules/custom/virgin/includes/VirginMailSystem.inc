<?php

/**
 * @file
 * Contains VirginMailSystem class
 */

/**
 * Class VirginMailSystem
 *
 * Uses SmtpMailSystem to send mails and MimeMailSystem to format mail content
 */
class VirginMailSystem implements MailSystemInterface {

  /**
   * @var \MailSystemInterface
   */
  protected $formatClass;

  /**
   * @var \MailSystemInterface
   */
  protected $mailClass;

  /**
   * Constructor
   */
  public function __construct() {
    if (drupal_autoload_class('MimeMailSystem')) {
      $this->formatClass = new MimeMailSystem();
    }
    else {
      $this->formatClass = new DefaultMailSystem();
    }
    if (drupal_autoload_class('SmtpMailSystem')) {
      $this->mailClass = new SmtpMailSystem();
    }
    else {
      $this->mailClass = new DefaultMailSystem();
    }
  }

  /**
   * {@inheritdoc}
   */
  public function format(array $message) {
    return $this->formatClass->format($message);
  }

  /**
   * {@inheritdoc}
   */
  public function mail(array $message) {

    // Fetch the message ID from the account object if there's one
    // passed via the message params.
    $vs_id = '';

    if (!empty($message['params']['account'])) {
      $g = new VirginEntityGrapher('user', $message['params']['account']);
      $vs_id = $g->fieldGetOne('field_sugar_id');
    }

    // Send an additional SMTP header as part of the email so that
    // SugarCRM can capture the required information to
    // identify the user when it receives a webhook from sendgrid.
    $message['headers']['X-SMTPAPI'] = json_encode(array(
      'unique_args' => array(
        'vs_description' => $this->description($message['id']),
        'vs_id' => $vs_id
      )
    ));

    return $this->mailClass->mail($message);
  }

  /**
   * Get a human description for a given e-mail ID
   *
   * @param $key
   *  The email message ID
   * @return string
   *  The email human description or the key if no description exists
   */
  protected function description($key) {
    $map = array(
      'user_register_no_approval_required' => 'Account Created',
      'user_password_reset' => 'Password Reset Request'
    );

    return empty($map[$key]) ? $key : $map[$key];
  }
}
