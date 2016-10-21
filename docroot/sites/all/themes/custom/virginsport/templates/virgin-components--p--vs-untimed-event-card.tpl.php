<?php
/**
 * @file virgin-components--p--vs-untimed-event-card.tpl.php
 * Main template for virgin components paragraph vs_untimed_event_card
 *
 * Variables available:
 * $title
 * $description
 * $card_image
 * $card_pattern
 * $card_color
 * $start_date
 * $festival_id
 * $package_price
 * $package_currency
 */

?>
<div class="vs-region vs-region--gradient-blue">
<div class="vs-card-untimed-event">
  <div class="container">
    <div class="row">
      <div class="hidden-md-down col-lg-4 vs-card-untimed-event__outline-wrapper">
        <div class="vs-card-untimed-event__outline">
          <img src="">
        </div>
      </div>
      <div class="col-xs-12 col-lg-4 vs-card-untimed-event__image-wrapper">
        <?php print theme('virginsport_picture', array('atom_id' => $card_image->property('sid'), 'image_style' => 'virgin_original', 'classes' => 'vs-card-untimed-event__image', 'image_classes' => 'img-fluid')); ?>
      </div>
      <div class="col-xs-12 col-lg-4 vs-card-untimed-event__content-wrapper">
        <div class="vs-card-untimed-event__content">
          <div class="col-xs-12 vs-card-untimed-event__content-header">
            <h4 class="col-xs-7 vs-card-untimed-event__title"><?php print check_plain($title); ?></h4>
            <div class="col-xs-5 hidden-xl-up vs-card-untimed-event__price">
              <span><?php print t("from"); ?>&nbsp;</span>
              <?php print virginsport_currency($package_currency, $package_price); ?>
            </div>
          </div>
          <div class="vs-card-untimed-event__date-wrapper">
            <div class="vs-card-untimed-event__date">
              <?php
              print date('d M', $start_date);
              ?>
            </div>
          </div>
          <div class="vs-card-untimed-event__text-wrapper">
            <p class="vs-card-untimed-event__text"><?php print $description; ?></p>
          </div>
          <div class="col-xs-12 vs-card-untimed-event__content-footer">
            <a
              class="btn vs-btn vs-btn--min-sm vs-card-untimed-event__button vs-btn--gradient-<?php print $brand_color; ?>"
              href="<?php print url('node/'.$festival_id); ?>"
            >Get tickets</a>
            <div class="hidden-lg-down col-lg-5 vs-card-untimed-event__price">
              <span>from&nbsp;</span>
              <?php print virginsport_currency($package_currency, $package_price); ?>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
