<?php

/**
 * @file
 * Default theme implementation to format an HTML mail.
 *
 * Copy this file in your default theme folder to create a custom themed mail.
 * Rename it to mimemail-message--[module]--[key].tpl.php to override it for a
 * specific mail.
 *
 * Available variables:
 * - $recipient: The recipient of the message
 * - $subject: The message subject
 * - $body: The message body
 * - $css: Internal style sheets
 * - $module: The sending module
 * - $key: The message identifier
 *
 * @see template_preprocess_mimemail_message()
 */
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Virgin Sport</title>
    <style type="text/css">#outlook a{padding:0}body{width:100%!important;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;margin:0;padding:0;background-color:#fff;font-family:Arial,Helvetica,sans-serif}.ExternalClass{width:100%}.ExternalClass,.ExternalClass p,.ExternalClass span,.ExternalClass font,.ExternalClass td,.ExternalClass div{line-height:100%}#backgroundTable{margin:0;padding:0;width:100%!important;line-height:100%!important;background-color:#ee212c}#contentBody{background-repeat:no-repeat;background-position:top center;background-size:100% auto;line-height:140%}img{outline:0;text-decoration:none;-ms-interpolation-mode:bicubic}a img{border:0}.image_fix{display:block}p{margin:0 0 1.95em 0}h1,h2,h3,h4,h5,h6{color:white!important}h1 a,h2 a,h3 a,h4 a,h5 a,h6 a{color:white!important}h1 a:active,h2 a:active,h3 a:active,h4 a:active,h5 a:active,h6 a:active{color:white!important}h1 a:visited,h2 a:visited,h3 a:visited,h4 a:visited,h5 a:visited,h6 a:visited{color:whiter!important}table td{border-collapse:collapse}table{border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0}a{color:orange}.center{text-align:center}#content-area a{color:#ef312c}#content-area strong,#content-area b{color:#ef312c}#content-area p:last-child{margin:0}.button{display:inline-block;padding:6px 53px;border-radius:21px;text-transform:uppercase;text-decoration:none;color:white!important;background-color:#ef312c;font-size:13px}#footer,#footer p,#footer h3{color:white;line-height:120%}#footer a{color:white}#footer p{font-size:10px}#footer h3{font-size:13px;font-weight:normal;margin:0}.full-width-image{width:100%}#logo{width:26%;opacity:1;margin-left:1%}@media only screen and (max-device-width:480px){}@media only screen and (min-width:599px){.table-sizer{width:600px!important}}a[href^="tel"],a[href^="sms"]{text-decoration:none;color:black;pointer-events:none;cursor:default}.mobile_link a[href^="tel"],.mobile_link a[href^="sms"]{text-decoration:default;color:white!important;pointer-events:auto;cursor:default}}@media only screen and (min-device-width:768px) and (max-device-width:1024px){a[href^="tel"],a[href^="sms"]{text-decoration:none;color:blue;pointer-events:none;cursor:default}.mobile_link a[href^="tel"],.mobile_link a[href^="sms"]{text-decoration:default;color:white!important;pointer-events:auto;cursor:default}}</style>
    <!--[if IEMobile 7]>
    <style type="text/css"></style>
    <![endif]-->
    <!--[if gte mso 9]>
    <style></style>
    <![endif]-->
    <style type="text/css">
      #content-area p { line-height:140%; font-size:16px; margin:0 0 1.95em 0;font-family:arial,helvetica,sans-serif; }
    </style>
  </head>
  <body style="-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;margin:0;padding:0;background-color:#fff;font-family:Arial,Helvetica,sans-serif;width:100%!important">
    <table cellpadding="0" cellspacing="0" border="0" id="backgroundTable" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;margin:0;padding:0;background-color:#fff;width:100%!important;line-height:100%!important">
      <tr>
        <td style="border-collapse:collapse">
          <table id="contentBody" align="center" cellpadding="0" cellspacing="0" border="0">
            <tr>
              <td style="border-collapse:collapse">
                <table class="table-sizer" cellpadding="0" cellspacing="0" border="0" align="center" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0">
                  <tr>
                    <td width="600" valign="top" style="border-collapse:collapse">
                      <img class="image_fix" src="http://i.imgur.com/rrbxkx1.jpg" class="banner" width="600" style="display:block;width:100%" alt="" />
                    </td>
                  </tr>
                </table>
                <table class="table-sizer" cellpadding="0" cellspacing="0" border="0" align="center" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;background-color:#f43d15">
                  <tr>
                    <td width="20" valign="top" style="border-collapse:collapse;background-color:#f43d15">
                      <img class="image_fix" src="http://i.imgur.com/Tpg5f1t.gif" width="20" />
                    </td>
                    <td width="560" valign="top" style="border-collapse:collapse;background-color:#f43d15">
                      <table id="content-area" cellpadding="40" cellspacing="0" border="0" style="background-color:white;border-radius:10px" width="100%">
                        <tr>
                          <td style='padding-left:40px' colspan="5">
                            <?php print $body; ?>
                            <p style="line-height:140%;font-size:16px;margin:0;color:#ef312c;font-family:arial,helvetica,sans-serif"><strong><?php print t('The Virgin Sport team'); ?></strong></p>
                          </td>
                        </tr>
                      </table>
                    </td>
                    <td width="20" valign="top" style="border-collapse:collapse;background-color:#f43d15">
                      <img class="image_fix" src="http://i.imgur.com/Tpg5f1t.gif" width="20" />
                    </td>
                  </tr>
                </table>
                <table class="table-sizer" cellpadding="0" cellspacing="0" border="0" align="center" id="footer" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;color:white;line-height:120%;background-color:white">
                  <tr>
                    <td height='33' width='600'style="background-color:#F43D15;">
                    </td>
                  </tr>
                  <tr>
                    <td width="600" valign="top" style="border-collapse:collapse">
                      <table cellpadding="20" cellspacing="0" border="0">
                        <tr>
                          <td>
                            <h3 style="color:#4c4c4c!important;line-height:120%;font-size:13px;font-weight:normal;margin:0;font-family:arial,helvetica,sans-serif">Virgin Sport UK Limited, The Battleship Building, 179 Harrow Road, London W2 6NB
                              <br>Registered in England and Wales with Company Registration Number: 08371074
                              <br>VAT No: 165034231.</h3>
                            <p style="margin:1em 0;color:#7f7f7f;line-height:120%;font-size:10px;font-family:arial,helvetica,sans-serif"><?php print t('This message was sent to !email: We hope you found it relevant.', array('!email' => '<a href="#" style="color:#7f7f7f;text-decoration:none">' . $recipient->mail . '</a>')); ?></td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
