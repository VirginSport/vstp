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
  '@get_in_touch_link' => url(''), // FIXME variable?
  '@support_number' => 'X', // FIXME variable?
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
                  <?php print t("The ticket url is not valid please check the link or contact customer's service."); ?><br>
                  <?php print t("Contact customers service or get in touch <a href='@get_in_touch_link'>here</a>", $t_args); ?>
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
                  <p><?php print t('@purchaser bought a ticket for @recipient', $t_args); ?></p>

                <?php elseif (user_is_anonymous() && $uses_purchaser_email): // 2.1 ?>
                  <p><?php print t('You bought a ticket for @recipient', $t_args); ?></p>

                <?php elseif ($is_recipient && !$has_been_claimed): // 1.2 ?>
                  <p><?php print t('@purchaser has bought this ticket for you.', $t_args); ?></p>
                  <button class="btn vs-btn vs-btn--min-sm"><?php print t('Add ticket to your profile'); ?></button>

                <?php elseif ($is_purchaser && !$has_been_claimed): // 2.2 ?>
                  <p><?php print t('You bought a ticket for @recipient. You can forward the link to @recipient to allow them to accept the ticket to their profile', $t_args); ?></p>
                  <button class="btn vs-btn vs-btn--min-sm"><?php print t("Add @recipient's ticket to your profile", $t_args); ?></button>

                <?php elseif (!$is_recipient && !$is_purchaser && !$has_been_claimed): ?>
                  <p><?php print t('@purchaser bought a ticket for @recipient', $t_args); ?></p>
                  <button class="btn vs-btn vs-btn--min-sm"><?php print t('Add ticket to your profile'); ?></button>

                <?php elseif ($claimed_by_me): // 3.2 ?>
                  <p><?php print t('You have already added this ticket to your Virgin Sport profile.<br> Click <a href="@profile_link">here</a> to see the ticket in your VS profile or contact customer services on @support_number if this is a mistake.', $t_args); ?></p>

                <?php elseif (!$claimed_by_me && $has_been_claimed): // 3.1 ?>
                  <p><?php print t('This ticket has already been claimed.<br> Please call customer services on @support_number or fill in a get in touch form <a href="@get_in_touch_link">here</a>.', $t_args); ?></p>

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
