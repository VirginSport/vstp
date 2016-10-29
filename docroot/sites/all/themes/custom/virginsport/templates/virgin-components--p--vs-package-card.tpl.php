<?php
/**
 * @file virgin-components--p--vs-package-card.tpl.php
 * Main template for virgin components paragraph vs_package_card
 *
 * Variables available:
 * @var stdClass $card_image - The image atom VirginEntityGrapher
 * @var string $package_title - The package content title
 * @var string $package_description - The package content description
 * @var string $package_currency - The package currency iso code of the package price
 * @var float $package_price - The package content price
 * @var int $package_nid - The package content id
 * @var string $title - The package title
 * @var string $description - The package description
 * @var string $card_color - The card color
 * @var string card_pattern - The card pattern
 */

?>

<div class="vs-package-card vs-package-card--color-<?php print $card_color;?>">
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-md-6">
        <div
          class="vs-package-card-wrapper vs-color-container materialShadow"
          <?php if(!empty($card_image->property('sid'))): ?>
          style="<?php print virginsport_atom_background($card_image->getEntity()); ?>"
          <?php endif; ?>
        >
          <?php if(empty($card_image->property('sid'))): ?>
            <?php print theme('virginsport_color', array('brand_color' => $card_color, 'brand_pattern' => $card_pattern)); ?>
          <?php endif; ?>

          <div class="vs-package-card-content">
            <?php if (!empty($package_title)): ?>
            <h2 class="vs-package-card__title"><?php print check_plain($package_title); ?></h2>
            <?php endif; ?>
            <?php if (!empty($package_description)): ?>
            <p class="vs-package-card__description"><?php print $package_description; ?></p>
            <?php endif; ?>
          </div>

          <div class="vs-package-card-footer">
            <?php if (!empty($package_price)): ?>
            <div class="vs-package-card__price"><?php print virginsport_currency($package_currency, $package_price); ?></div>
            <?php endif; ?>
            <div class="vs-package-card__button-wrapper">
              <?php print l(t('details'), 'node/'.$package_nid, array('attributes' => array('class' => array('btn vs-btn vs-btn--sm vs-btn--transparent vs-package-card__button')))); ?>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xs-12 col-md-6">
        <div class="vs-package-card-descriptive-wrapper">
          <?php if (!empty($title)): ?>
          <h2 class="vs-package-card__descriptive-title"><?php print check_plain($title); ?></h2>
          <?php endif; ?>
          <?php if (!empty($description)): ?>
          <div class="vs-package-card__descriptive-content"><?php print $description; ?></div>
          <?php endif; ?>
        </div>
      </div>
    </div>
  </div>
</div>
