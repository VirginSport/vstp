<?php
/**
 * @file virgin-components--p--vs-package-card.tpl.php
 * Main template for virgin components paragraph vs_package_card
 *
 * Variables available:
 * $card_image - The image atom VirginEntityGrapher
 * $package_title - The package content title
 * $package_description - The package content description
 * $package_price - The package content price
 * $package_nid - The package content id
 * $tile - The package title
 * $description - The package description
 */

?>

<div class="vs-package-card">
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-md-6">
        <div class="vs-package-card-wrapper materialShadow" style="<?php print virginsport_atom_background($card_image->getEntity()); ?>">

          <div class="vs-package-card-content">
            <?php if (!empty($package_title)): ?>
            <h2 class="vs-package-card__title"><?php print $package_title; ?></h2>
            <?php endif; ?>
            <?php if (!empty($package_description)): ?>
            <p class="vs-package-card__description"><?php print $package_description; ?></p>
            <?php endif; ?>
          </div>

          <div class="vs-package-card-footer">
            <?php if (!empty($package_price)): ?>
            <div class="vs-package-card__price"><?php print '£'.$package_price; ?></div>
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
          <h2 class="vs-package-card__descriptive-title"><?php print $title; ?></h2>
          <?php endif; ?>
          <?php if (!empty($description)): ?>
          <p class="vs-package-card__descriptive-content"><?php print $description; ?></p>
          <?php endif; ?>
        </div>
      </div>
    </div>
  </div>
</div>
