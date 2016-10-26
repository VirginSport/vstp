<?php
/**
 * @file virgin-components--p--vs-untimed-event-card.tpl.php
 * Main template for virgin components paragraph vs_untimed_event_card
 *
 * Variables available:
 *  $title - The event title
 *  $description - The event description
 *  $card_image - The event image atom
 *  $card_pattern - The card pattern of the event
 *  $card_color - The card color of the event
 *  $start_date - The start date of the event state. Related with event
 *  $festival_id - The id of festival related with the event
 *  $package_price - The package price
 *  $package_currency - The package currency
 *  $no_card_pattern_class - It's a css class added when there is no card pattern
 */

?>
<div class="vs-card-untimed-event">
  <div class="container">
    <div class="row">
      <?php if($card_pattern!='none'): ?>
      <div class="hidden-md-down col-lg-4 vs-card-untimed-event__outline-wrapper">
        <div class="vs-card-untimed-event__outline">
          <div class="vs-card-untimed-event__<?php print $card_pattern;?>"></div>
        </div>
      </div>
      <?php endif; ?>
      <div class="col-xs-12 col-lg-4 vs-card-untimed-event__image-wrapper <?php print $no_card_pattern_class; ?>">
        <?php print theme('virginsport_picture', array('atom_id' => $card_image->property('sid'), 'image_style' => 'virgin_original', 'classes' => 'vs-card-untimed-event__image', 'image_classes' => 'img-fluid')); ?>
      </div>
      <div class="col-xs-12 col-lg-4 vs-card-untimed-event__content-wrapper <?php print $no_card_pattern_class; ?>">
        <div class="vs-card-untimed-event__content">
          <div class="col-xs-12 vs-card-untimed-event__content-header">
            <?php if(!empty($title)): ?>
            <h4 class="col-xs-7 vs-card-untimed-event__title"><?php print check_plain($title); ?></h4>
            <?php endif; ?>
            <div class="col-xs-5 hidden-xl-up vs-card-untimed-event__price">
              <span><?php print t("from"); ?>&nbsp;</span>
              <?php print virginsport_currency($package_currency, $package_price); ?>
            </div>
          </div>
          <?php if(!empty($start_date)): ?>
          <div class="vs-card-untimed-event__date-wrapper">
            <div class="vs-card-untimed-event__date">
              <?php print date('d M', $start_date); ?>
            </div>
          </div>
          <?php endif; ?>
          <?php if(!empty($description)): ?>
          <div class="vs-card-untimed-event__text-wrapper">
            <p class="vs-card-untimed-event__text"><?php print $description; ?></p>
          </div>
          <?php endif; ?>
          <?php if(!empty($festival_id)): ?>
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
          <?php endif; ?>
        </div>
      </div>
    </div>
  </div>
</div>
