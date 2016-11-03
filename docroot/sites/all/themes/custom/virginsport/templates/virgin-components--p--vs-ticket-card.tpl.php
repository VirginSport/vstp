<?php
/**
 * @file virgin-components--p--vs-ticket-card.tpl.php
 * Main template for virgin components paragraph vs_ticket_card
 *
 * Variables available:
 * $title - The ticket title
 * $description - The ticket description
 * $card_color - The ticket card color
 * $card_pattern - The ticket card pattern
 * $price - The ticket price
 * $currency - The package currency iso code of the package price
 * $nid - The ticket ID
 * $ticket_class - The name of the ticket class (ex. vip, pass, etc)
 * $ticket_properties - The text showed in ticket button
 */

$vip_class = ($ticket_class == 'vip') ? 'vs-ticket-type__text--vip' : '';

?>

<div class="vs-ticket-type">
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <div class="vs-ticket-type__wrapper materialShadow vs-ticket-type--gradient-<?php print $card_color;?>">
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
            href="<?php print url('node/' . $nid); ?>"
            class="btn vs-btn vs-btn--sm vs-btn--transparent vs-ticket-type__cta"
          >
            <?php print t('Select tickets');?>
          </a>
          <?php if(!empty($ticket_class)): ?>
          <div class="vs-ticket-type__<?php print $ticket_class; ?>">
            <?php if(!empty($ticket_properties['desktop title'])): ?>
              <span><?php print t($ticket_properties['desktop title']); ?></span>
            <?php endif; ?>
          </div>
          <?php endif; ?>
        </div>
      </div>
    </div>
  </div>
</div>

