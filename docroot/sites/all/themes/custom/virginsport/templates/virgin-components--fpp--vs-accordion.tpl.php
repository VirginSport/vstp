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
        <h4 class="vs-accordion__title">
          <?php print $title; ?>
        </h4>
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
