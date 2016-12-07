<?php
/**
 * @file virgin-components--p--vs-untimed-event-card.tpl.php
 * Main template for virgin components paragraph vs_untimed_event_card
 *
 * Variables available:
 *  @var $title - The event title
 *  @var $description - The event description
 *  @var $card_image - The event image atom
 *  @var $card_pattern - The card pattern of the event
 *  @var $card_color - The card color of the event
 *  @var $start_date - The start date of the event state. Related with event
 *  @var $festival_id - The id of festival related with the event
 *  @var $event_price - The event price
 *  @var $event_currency - The event currency
 *  @var $no_card_pattern_class - It's a css class added when there is no card pattern
 */

?>
<div class="vs-card-untimed-event">
  <div class="container">
    <div class="row">
      <?php if ($card_pattern != 'none'): ?>
      <div class="hidden-md-down col-lg-4 vs-card-untimed-event__outline-wrapper">
        <div class="vs-card-untimed-event__outline">
          <div class="vs-card-untimed-event__<?php print $card_pattern; ?>"></div>
        </div>
      </div>
      <?php endif; ?>
      <div class="col-xs-12 col-lg-4 vs-card-untimed-event__image-wrapper <?php print $no_card_pattern_class; ?>">
        <div class="vs-card-untimed-event__image" style="<?php print virginsport_atom_background($card_image->getEntity()); ?>"></div>
      </div>
      <div class="col-xs-12 col-lg-4 vs-card-untimed-event__content-wrapper <?php print $no_card_pattern_class; ?>">
        <div class="vs-card-untimed-event__content">
          <div class="col-xs-12 vs-card-untimed-event__content-header">
            <?php if (!empty($title)): ?>
            <h4 class="col-xs-7 col-xl-12 vs-card-untimed-event__title"><?php print check_plain($title); ?></h4>
            <?php endif; ?>

            <?php if ($event_price !== ''): ?>
              <div class="col-xs-5 hidden-xl-up vs-card-untimed-event__price">
                <?php if ($event_price != '0.00'): ?>
                  <span><?php print t('from'); ?>&nbsp;</span>
                <?php endif; ?>

                <?php print virginsport_currency($event_currency, $event_price); ?>
              </div>
            <?php endif; ?>

          </div>
          <?php if (!empty($start_date)): ?>
          <div class="vs-card-untimed-event__date-wrapper">
            <div class="vs-card-untimed-event__date">
              <?php print $start_date; ?>
            </div>
          </div>
          <?php endif; ?>
          <?php if (!empty($description)): ?>
          <div class="vs-card-untimed-event__text-wrapper">
            <div class="vs-card-untimed-event__text">
              <?php print $description; ?>
            </div>
          </div>
          <?php endif; ?>
          <?php if (!empty($festival_id)): ?>
          <div class="col-xs-12 vs-card-untimed-event__content-footer">
            <a
              class="btn vs-btn vs-btn--min-sm vs-card-untimed-event__button vs-btn--gradient-<?php print $brand_color; ?>"
              href="<?php print url('node/' . $festival_id . '/tickets'); ?>"
              vs-ticket-hostname="<?php print check_plain($ticket_hostname); ?>"
            >
              <?php print t('Get tickets'); ?>
            </a>

            <?php if ($event_price !== ''): ?>
              <div class="hidden-lg-down col-lg-5 vs-card-untimed-event__price">
                <?php if ($event_price != '0.00'): ?>
                  <span><?php print t('from'); ?>&nbsp;</span>
                <?php endif; ?>

                <?php print virginsport_currency($event_currency, $event_price); ?>
              </div>
            <?php endif; ?>

          </div>
          <?php endif; ?>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Google Tag Manager Data Layer Untimed Event Cards-->
<script>
  dataLayer.push(
    {
      'page': 'detail',
      'ecommerce': {
        'detail': {
          'actionField': {
            'list': ['Untimed Event Cards']
          },
          'products': <?php print $products; ?>
        }
      }
    }
  );
</script>
<!-- End Google Tag Manager Data Layer Untimed Event Cards-->
