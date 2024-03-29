<?php
/**
 * @file virgin-components--ct--festival-header.tpl.php
 * Template for the festival header
 *
 * Variables available:
 * @var string $title
 *  The title of the festival
 * @var string $nid
 *  The NID of the festival OR event
 * @var string $festival_nid
 *  The NID of the festival
 * @var string $status
 *  The status key of the festival OR event
 * @var int $start_date
 *  The timestamp of the start date of the event
 * @var string $start_date_formatted
 *  The formatted date of the event start date
 * @var string $show_time
 *  If the date should be shown with time or not
 * @var boolean $hide_dates
 *  If the dates should be hidden from view.
 * @var int $end_date
 *  The timestamp of the end date of the event
 * @var string $timezone
 *  The timezone of the start and end date of the event
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
?>

<div
  class="vs-hero-banner"
  data-vs-countdown-ts="<?php print $start_date_formatted; ?>"
  data-vs-countdown-tz="<?php print $timezone; ?>"
  data-color="<?php print $color; ?>"
  data-vs-hostname="<?php print check_plain($festival_hostname); ?>"
>
  <div class="vs-hero-banner__background--fixed" style="<?php print $atom ? virginsport_atom_background($atom->getEntity()) : ''; ?>"></div>

  <div class="vs-hero-banner__background">

    <?php if ($hide_dates != 1): ?>
      <div class="vs-hero-banner__days-left-wrapper hidden-sm-down" style="display: none">
        <span class="vs-hero-banner__days-left"></span>
        <span class="vs-hero-banner__days-label"></span>
      </div>
    <?php endif; ?>

    <?php if ($variables['show_sharer'] == 1):?>
      <div class="vs-hero-banner__social-wrapper <?php print (empty($color) ? '' : 'vs-share-button--gradient-' . $color); ?>">
        <?php print theme('virginsport_share_buttons', array('location' => 'Festival Header', 'subject' => $variables['title'], 'url' => url(current_path(), array('absolute' => TRUE)))); ?>
      </div>
    <?php endif; ?>

    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <?php if(!empty($logo)): ?>
            <div class="vs-hero-banner__logo">
              <?php print theme('virginsport_picture', array('placeholder' => FALSE, 'atom_id' => $logo->property('sid'), 'image_style' => 'virgin_original', 'image_classes' => 'img-fluid vs-hero-banner__logo', 'use_h1' => TRUE)); ?>
            </div>
          <?php else: ?>
            <h1 class="vs-hero-banner__title"><?php print check_plain($title); ?></h1>
          <?php endif; ?>

          <?php if ($hide_dates != 1): ?>
            <div class="vs-hero-banner__date">
              <?php print virginsport_date_interval($start_date, $end_date, $timezone, $timezone, $show_time); ?>
            </div>

            <div class="vs-hero-banner__days-left-wrapper hidden-md-up" style="display: none">
              <span class="vs-hero-banner__days-left"></span>
              <span class="vs-hero-banner__days-label"></span>
            </div>
          <?php endif; ?>

          <?php
          /**
           * We're keeping the old logic in the CTA print for the old
           * Events/Festivals, that not contain the new fields filled, follow
           * the old behaviour
           */
          ?>
          <div class="vs-hero-banner__button-wrapper">
            <?php if (!empty($cta_links)): ?>
              <?php print
                theme('virginsport_cta_links',
                  array(
                    'links' => $cta_links,
                    'classes' => 'btn vs-btn vs-btn--min-sm'
                  )
                );
              ?>
            <?php elseif (in_array($status, array('announced'))): ?>
              <a
                virgin-type="<?php print VIRGIN_BASE_REGISTER_INTEREST_FORM; ?>"
                href="?festival_id=<?php print $festival_nid; ?><?php print empty($event_nid) ? '' : '&event_id=' . $event_nid; ?>"
                class="btn vs-btn vs-btn--min-sm vs-hero-banner__button">
                <?php print t('Register interest'); ?>
              </a>
            <?php elseif (in_array($status, array('over'))): ?>
              <?php print theme('virginsport_cta_links', array('links' => $cta_links, 'classes' => 'btn vs-btn vs-btn--min-sm vs-hero-banner__button')); ?>
            <?php elseif (in_array($status, array('open')) && !$is_tickets_page): ?>
              <a
                href="<?php print url('node/' . $festival_nid . '/tickets'); ?>"
                class="btn vs-btn vs-btn--min-sm vs-hero-banner__button <?php print (empty($color) ? '' : 'vs-btn--gradient-' . $color); ?>"
                vs-ticket-hostname="<?php print check_plain($festival_hostname); ?>"
                vs-ticket-event="SelectTicketsCTA"
              >
                <?php print t('Get Passes'); ?>
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
