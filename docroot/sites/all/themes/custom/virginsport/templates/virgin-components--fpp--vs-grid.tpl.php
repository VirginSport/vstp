<?php
/**
 * @file virgin-components--fpp--vs-grid.tpl.php
 * Main template for virgin components fieldable panel panes vs_grid
 */
?>

<div class="vs-grid">
  <div class="container">
    <div class="vs-grid__wrapper">
      <div class="row">
        <div class="col-xs-12">
          <?php if (!empty($heading_title)): ?>
            <div class="vs-grid__title"><?php print($heading_title) ?></div>
          <?php endif ?>
        </div>
        <div class="col-xs-12 col-md-8">
          <?php if (!empty($heading_description)): ?>
            <div class="vs-grid__text"><?php print $heading_description ?></div>
          <?php endif ?>
        </div>
      </div>
      <div class="row center-elements">
        <?php print $paragraphs; ?>
      </div>
    </div>
  </div>
</div>
