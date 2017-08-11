<?php

/**
 * @file
 * Template file for the virgin_festival__tickets theme.
 *
 * @var string $header
 *  The festival header
 * @var string $subnav
 *  The festival subnav
 * @var string $iframe_url
 *  The attendly iframe URL for the festival cart
 * @var string $brand_color
 *  The brand color of the festival
 */
?>

<div class="vs-head-region">
  <div class="vs-region">
    <?php print $header; ?>
  </div>
</div>

<div class="vs-region vs-region--gradient-default" data-vs-region-curved="1" data-vs-region-color="default">
  <?php print $subnav; ?>
  <iframe class="vs-iframe vs-iframe--hide-load" src="<?php print $iframe_url; ?>" scrolling="no"></iframe>
</div>

<?php print theme('virginsport_checkout_bar', array('basket_url' => $basket_url, 'node' => $node, 'brand_color' => $brand_color)); ?>