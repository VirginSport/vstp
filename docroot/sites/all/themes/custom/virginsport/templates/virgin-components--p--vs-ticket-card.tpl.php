<?php
/**
 * @file virgin-components--p--vs-ticket-card.tpl.php
 * Main template for virgin components paragraph vs_ticket_card
 *
 * Variables available:
 * @var $title - The ticket title
 * @var $description - The ticket description
 * @var $card_color - The ticket card color
 * @var $card_pattern - The ticket card pattern
 * @var $price - The ticket price
 * @var $currency - The package currency iso code of the package price
 * @var $nid - The ticket ID
 * @var $festival_nid - The festival ID
 * @var $ticket_class - The name of the ticket class (ex. vip, pass, etc)
 * @var $ticket_properties - The text showed in ticket button
 */

$vip_class = ($ticket_class == 'vip') ? 'vs-ticket-type__text--vip' : '';

?>

<div class="vs-ticket-type">
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <div class="vs-ticket-type__wrapper materialShadow">
          <div class="vs-color vs-color--color-<?php print $card_color;?> vs-color--pattern-<?php print $card_pattern;?>">
            <div class="vs-color__layer-1"></div>
            <div class="vs-color__layer-2"></div>
            <div class="vs-color__layer-3"></div>
          </div>
          <?php if(!empty($title)): ?>
          <h2 class="vs-ticket-type__title">
            <?php print check_plain($title); ?>
          </h2>
          <?php endif; ?>
          <?php if(!empty($description)): ?>
          <div class="vs-ticket-type__text <?php print $vip_class; ?>">
            <?php print $description; ?>
          </div>
          <?php endif; ?>
          <?php if(!empty($price)): ?>
          <span class="vs-ticket-type__price"><?php print virginsport_currency($currency, $price); ?></span>
          <?php endif; ?>

          <a
            href="<?php print url('node/' . $festival_nid . '/tickets'); ?>"
            class="btn vs-btn vs-btn--sm vs-btn--transparent vs-ticket-type__cta"
            vs-ticket-hostname="<?php print check_plain($ticket_hostname); ?>"
            vs-ticket-event="SelectTicketsCTA"
            vs-ticket-level="<?php print $ticket_level; ?>"
          >
            <?php print t('Get Passes');?>
          </a>
          <?php if(!empty($ticket_properties)): ?>
          <div class="vs-ticket-type__<?php print $ticket_class; ?>">
              <span><?php print t($ticket_properties['desktop title']); ?></span>
          </div>
          <?php endif; ?>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Google Tag Manager Data Layer Ticket Cards-->
<script>
  window.addEventListener('load', function() {
    dataLayer.push(
      {
        'page': 'detail',
        'ecommerce': {
          'detail': {
            'actionField': {
              'list': ['Ticket Cards']
            },
            'products': <?php print $products; ?>
          }
        }
      }
    );
  });
</script>
<!-- End Google Tag Manager Data Layer Ticket Cards-->
