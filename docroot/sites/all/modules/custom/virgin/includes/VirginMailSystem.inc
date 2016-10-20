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
    return $this->mailClass->mail($message);
  }
}
