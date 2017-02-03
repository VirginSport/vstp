<?php
/**
 * @file virgin-components--fpp--vs-promotional-banner.tpl.php
 * Main template for virgin components fieldable panel panes vs_promo_banner
 *
 * Variables available:
 *  $component_heading - The component heading
 *  $promo_banners - Promo banners html output
 */
?>
<?php if ($apply_constraint) : ?>
<div class="vs-promo-banner-constraint">
  <div class="vs-promo-banner-constraint__container container">
    <?php endif; ?>
    <div class="vs-promo-banner-wrapper">
      <?php if (!empty($component_heading)): ?>
        <div class="vs-component-heading vs-promo-banner-heading">
          <?php print check_plain($component_heading); ?>
        </div>
      <?php endif; ?>

      <?php if (!empty($promo_banners)): ?>
        <?php print $promo_banners; ?>
      <?php endif; ?>
    </div>
    <?php if ($apply_constraint) : ?>
  </div>
</div>
<?php endif; ?>
