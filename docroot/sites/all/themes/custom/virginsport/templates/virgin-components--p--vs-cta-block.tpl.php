<?php
/**
 * @file virgin-components--p--vs-cta-block.tpl.php
 * Main template for virgin components paragraph vs_cta_block_item
 *
 * Variables available:
 * $title
 * $description
 * $cta_type
 * $card_image
 * $image_effect

 */

?>

<div class="col-xs-12 col-lg-12 vs-cta-block__item">
  <div class="vs-cta-block__background--with-image-limited-opacity" style="background-color: rgb(48, 50, 65);"></div>
  <h1 class="vs-cta-block__title"><?php print $title; ?></h1>
  <p class="vs-cta-block__content"><?php print $description; ?></p>
  <div class="vs-cta-block__cta-wrapper">
    <button class="btn vs-btn vs-btn--sm vs-btn--outline-white vs-cta-block__cta">learn more</button>
    <button class="btn vs-btn vs-btn--sm vs-btn--outline-white vs-cta-block__cta">learn more</button>
  </div>
</div>


