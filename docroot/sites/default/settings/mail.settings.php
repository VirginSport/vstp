<?php

// Disable mail on non-production enviroments
//if (!$is_ah_env || !in_array($ah_env, array('prod'))) {
//  // Ensure DevelMailLog is available even if Devel module is disabled
//  include_once('includes/mail.inc');
//  include_once('modules/system/system.mail.inc');
//  include_once($module_dir . '/development/devel/devel.mail.inc');
//
//  $conf['mail_system'] = array(
//    'default-system' => 'DevelMailLog',
//  );
//}

if ($is_ah_env) {
  $conf['smtp_on'] = TRUE; // Enables sending e-mails via SMTP
  $conf['smtp_allowhtml'] = TRUE;
  $conf['smtp_deliver'] = TRUE;
  $conf['smtp_queue'] = FALSE; // If the e-mail should be queued before sending

  // SMTP email settings
  $conf['smtp_from'] = 'hello@email.virginsport.com'; // The e-mail that is sending the e-mail
  $conf['smtp_fromname'] = 'Virgin Sport'; // The name that should appear in the e-mail

  // SMTP access
  $conf['smtp_host'] = 'smtp.sendgrid.net';
  $conf['smtp_hostbackup'] = 'smtp.sendgrid.net';
  $conf['smtp_port'] = 465;
  $conf['smtp_protocol'] = 'ssl';

  // Prod settings stored in secrets.settings.php
  switch ($ah_env) {
    case 'prelaunch':
      $conf['smtp_username'] = 'drupal-sendgrid-prelaunch';
      $conf['smtp_password'] = 'sendGrid1234';
      break;
    case 'test':
      $conf['smtp_username'] = 'drupal-sendgrid-stg';
      $conf['smtp_password'] = 'sendGrid1234';
      break;
    case 'dev':
      $conf['smtp_username'] = 'drupal-sendgrid-dev';
      $conf['smtp_password'] = 'sendGrid1234';
      break;
  }
}
