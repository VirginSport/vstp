<?php
/**
 * @file
 * Virgin ticket claim template.
 *
 */

$t_args = array(
  '@logged_name' => $logged_name,
  '@recipient' => $recipient,
  '@purchaser' => $purchaser,
  '@profile_link' => url('user'),
  '@get_in_touch_link' => url(variable_get(VIRGIN_VAR_GET_IN_TOUCH_URL, ''))
);

?>

<?php if (!$ticket): ?>
  <div class="vs-claim-ticket">
    <div class="container">
      <div class="row vs-claim-ticket-wrapper">
        <div class="col-xs-12 vs-claim-ticket__content-wrapper">
          <div class="vs-claim-ticket__content">
            <div class="row">
              <h1 class="col-xs-12 col-md-3 vs-claim-ticket__title"></h1>
              <div class="col-xs-12 col-md-9">
                <h1 class="vs-claim-ticket__recipient">Ooops!</h1>
                <p>
                  <?php print t("Oops! This ticket url doesn't appear to be valid. <a href='@get_in_touch_link'>Get in touch with us</a> or send us an email at hello@virginsport.com.", $t_args); ?>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
<?php endif; ?>

<?php if ($ticket): ?>
<div class="vs-claim-ticket">
  <div class="container">
    <div class="row vs-claim-ticket-wrapper">

      <?php if (!empty($event_image)): ?>
        <div class="vs-claim-ticket__background" style="<?php print virginsport_atom_background($event_image, 'virgin_original') ?>"></div>
      <?php endif; ?>

      <div class="col-xs-12 vs-claim-ticket__content-wrapper">
        <div class="vs-claim-ticket__content">
          <div class="row">
            <h1 class="col-xs-12 col-md-3 vs-claim-ticket__title">
              <?php print $event_name; ?>
            </h1>

            <div class="col-xs-12 col-md-9">
              <form method="post">
                <h1 class="vs-claim-ticket__recipient">
                  <?php print t('Hi @logged_name', $t_args); ?>
                </h1>

                <?php if (user_is_anonymous() && !$uses_purchaser_email): // 1.1 ?>
                  <p><?php print t('Sign up for a Virgin Sport profile or log in to review the details that @purchaser entered and associate the pass with your account.', $t_args); ?></p>

                <?php elseif (user_is_anonymous() && $uses_purchaser_email): // 2.1 ?>
                  <p><?php print t('Sign up for a Virgin Sport profile or log in to review the details that @purchaser entered and associate the pass with your account.', $t_args); ?></p>

                <?php elseif ($is_recipient && !$has_been_claimed): // 1.2 ?>
                  <p><?php print t('Click the button below to review the pass details that @purchaser entered and add the pass to your account', $t_args); ?></p>
                  <button class="btn vs-btn vs-btn--min-sm"><?php print t('Add ticket to your profile'); ?></button>

                <?php elseif ($is_purchaser && !$has_been_claimed): // 2.2 ?>
                  <p><?php print t('Click the button below to associate the ticket you purchased for @recipient with your own profile. Alternatively, you can forward the confirmation email with a link to @recipient for them to associate with their own profile.', $t_args); ?></p>
                  <button class="btn vs-btn vs-btn--min-sm"><?php print t("Add @recipient's ticket to your profile", $t_args); ?></button>

                <?php elseif (!$is_recipient && !$is_purchaser && !$has_been_claimed): ?>
                  <p><?php print t('Click the button below to review the pass details that @purchaser entered and add the pass to your account.', $t_args); ?></p>
                  <button class="btn vs-btn vs-btn--min-sm"><?php print t('Add ticket to your profile'); ?></button>

                <?php elseif ($claimed_by_me): // 3.2 ?>
                  <p><?php print t("You've already added this ticket to your Virgin Sport profile. If this doesn't look right, <a href=\"@get_in_touch_link\">get in touch with us</a> or send us an email at hello@virginsport.com.", $t_args); ?></p>

                <?php elseif (!$claimed_by_me && $has_been_claimed): // 3.1 ?>
                  <p><?php print t("It appears this ticket has already been claimed. If this doesn't look right, <a href=\"@get_in_touch_link\">get in touch with us</a> or send us an email at hello@virginsport.com.", $t_args); ?></p>

                <?php endif; ?>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<?php endif; ?>
