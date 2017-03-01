<?php
/**
 * @file virgin-components--fpp--vs-accordion.tpl.php
 * Main template for virgin components fieldable panel panes vs_accordion
 *
 * Variables available:
 * TODO
 */

?>

<div class="vs-accordion">
  <div class="container">
    <div class="row">
      <?php if (!empty($title)): ?>
        <h3 class="vs-accordion__title">
          <?php print check_plain($title); ?>
        </h3>
      <?php endif; ?>

      <div
        aria-multiselectable="true"
        class="vs-accordion__wrapper"
        role="tablist"
      >
        <?php if (!empty($accordion_items)): ?>
          <?php print $accordion_items; ?>
        <?php endif; ?>
      </div>
    </div>
  </div>
</div>
