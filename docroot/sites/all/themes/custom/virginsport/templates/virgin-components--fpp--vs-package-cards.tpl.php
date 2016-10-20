<?php
/**
 * @file virgin-components--fpp--vs-package-cards.tpl.php
 * Main template for virgin components fieldable panel panes vs_package_cards
 *
 * Variables available:
 * $paragraphs - an array of paragraphs
 */
?>

<div class="vs-package-cards-wrapper">
  <div class="container">
    <div class="row">
      <div class="vs-component-heading vs-package-card-list-heading">
        <?php print check_plain($component_heading); ?>
      </div>
    </div>
  </div>

  <?php print $paragraphs; ?>
</div>
