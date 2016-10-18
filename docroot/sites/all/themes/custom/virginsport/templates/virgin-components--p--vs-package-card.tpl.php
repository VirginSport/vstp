<?php
/**
 * @file virgin-components--p--vs-package-card.tpl.php
 * Main template for virgin components paragraph vs_package_card
 *
 * Variables available:
 * $event_image - The image atom VirginEntityGrapher
 * $event_title - The event title
 * $event_description - The event description
 */

?>

<div class="vs-package-card">
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-md-6">
        <div class="vs-package-card-wrapper materialShadow" style="<?php print virginsport_atom_background($card_image->getEntity()); ?>">

          <div class="vs-package-card-content">
            <h2 class="vs-package-card__title"><?php print $package_title; ?></h2>
            <p class="vs-package-card__description"><?php print $package_description; ?></p>
          </div>

          <div class="vs-package-card-footer">
            <div class="vs-package-card__price"><?php print $package_price; ?></div>
            <div class="vs-package-card__button-wrapper">
              <a class="btn vs-btn vs-btn--sm vs-btn--transparent vs-package-card__button">details</a>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xs-12 col-md-6">
        <div class="vs-package-card-descriptive-wrapper">
          <h2 class="vs-package-card__descriptive-title"><?php print $title; ?></h2>
          <p class="vs-package-card__descriptive-content"><?php print $description; ?></p>
        </div>
      </div>
    </div>
  </div>
</div>
