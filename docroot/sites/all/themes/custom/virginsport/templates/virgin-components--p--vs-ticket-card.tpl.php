<?php
/**
 * @file virgin-components--p--vs-ticket-card.tpl.php
 * Main template for virgin components paragraph vs_ticket_card
 *
 * Variables available:
 * $title
 * $description
 * $card_color
 * $card_pattern
 * $price
 * $currency
 * $nid
 */

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
          <div class="vs-ticket-type__text">
            <?php print $description; ?>
          </div>
          <?php endif; ?>
          <?php if(!empty($price)): ?>
          <span class="vs-ticket-type__price"><?php print virginsport_currency($currency, $price); ?></span>
          <?php endif; ?>
          <button class="btn vs-btn vs-btn--sm vs-btn--transparent vs-ticket-type__cta">Select tickets</button>
          <div class="vs-ticket-type__pass hidden-sm-down">
            <span>Standard Pass</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<!--<div class="vs-ticket-type">
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <div class="vs-ticket-type__wrapper materialShadow vs-ticket-type--gradient-blue">
          <h2 class="vs-ticket-type__title vs-ticket-type__title--vip">
            5K Run
          </h2>
          <p class="vs-ticket-type__text vs-ticket-type__text--vip">
            Nunc laoreet ullamcorper tellus, ac lacinia metus mattis a. Praesent ut arcu ac tortor ornare mollis et ac justo. Sed eleifend eu dolor ac blandit.
          </p>

          <span class="vs-ticket-type__price">£35</span>
          <button class="btn vs-btn vs-btn--sm vs-btn--transparent vs-ticket-type__cta">Select tickets</button>
          <div class="vs-ticket-type__vip">
            <span>Vip Pass</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>-->
