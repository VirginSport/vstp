<?php
/**
 * @file virgin-components--ct--festival-header.tpl.php
 * Template for the festival header
 *
 * Variables available:
 * @var string $title
 *  The title of the festival
 * @var string $nid
 *  The NID of the festival
 * @var string $status
 *  The status key of the festival
 * @var int $days_left
 *  The number of days left until the festival starts
 * @var stdClass $atom
 *  The atom object with the festival header image
 * @var string $color
 *  The color key of the festival
 * @var string $link
 *  The URL of the link that appears below the button
 * @var string $link_label
 *  The label of the link that appears below the button
 * @var string $festival_hostname
 *  The hostname of the region this festival is in
 */

// Get number of days remaining to festival
$days_left = virginsport_days_left($start_date);
$x=0;
?>

<div class="vs-hero-banner">
  <div class="vs-hero-banner__background--fixed" style="<?php print $atom ? virginsport_atom_background($atom->getEntity()) : ''; ?>"></div>

  <div class="vs-hero-banner__background">
    <?php if (!empty($days_left)): ?>
      <div class="vs-hero-banner__days-left-wrapper hidden-sm-down">
        <span class="vs-hero-banner__days-left"><?php print check_plain($days_left); ?></span>
        <span class="vs-hero-banner__days-label"><?php print t('Days to go'); ?></span>
      </div>
    <?php endif; ?>
    <?php if ($variables['show_sharer']==1):?>
      <div class="vs-hero-banner__social-wrapper">
        <?php print theme('virginsport_share_buttons', array('subject' => $variables['title'], 'url' => url(current_path(), array('absolute' => TRUE)))); ?>
      </div>
    <?php endif; ?>

    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <h2 class="vs-hero-banner__title"><?php print check_plain($title); ?></h2>
          <div class="vs-hero-banner__date"><?php print virginsport_date_interval($start_date, $end_date); ?></div>

          <?php if (!empty($days_left)): ?>
            <div class="vs-hero-banner__days-left-wrapper hidden-md-up">
              <span class="vs-hero-banner__days-left"><?php print check_plain($days_left); ?></span>
              <span class="vs-hero-banner__days-label"><?php print t('Days to go'); ?></span>
            </div>
          <?php endif; ?>

          <div class="vs-hero-banner__button-wrapper">
            <?php if (in_array($status, array('announced', 'over'))): ?>
              <a virgin-type="<?php print VIRGIN_BASE_REGISTER_INTEREST_FORM; ?>" href="?festival_id=<?php print $festival_nid; ?>&event_id=<?php print $event_nid; ?>" class="btn vs-btn vs-btn--min-sm vs-hero-banner__button">
                <?php print t('Register your interest'); ?>
              </a>
            <?php endif; ?>

            <?php if (in_array($status, array('open', 'in-progress'))): ?>
              <a
                href="<?php print url('node/' . $nid . '/tickets'); ?>"
                class="btn vs-btn vs-btn--min-sm vs-hero-banner__button <?php print (empty($color) ? '' : 'vs-btn--gradient-' . $color); ?>"
                vs-ticket-hostname="<?php print check_plain($festival_hostname); ?>"
                vs-ticket-event="SelectTicketsCTA"
              >
                <?php print t('Select Tickets'); ?>
              </a>
            <?php endif; ?>
          </div>

          <?php if (!empty($link_label)): ?>
          <a class="vs-hero-banner__link" href="<?php print $link; ?>"><?php print check_plain($link_label); ?></a>
          <?php endif; ?>
        </div>
      </div>
    </div>
  </div>
</div>
