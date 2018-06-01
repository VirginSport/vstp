<div class="row">
  <div class="col-xs-12">
    <?php if (!empty($row_title)): ?>
      <div class="vs-grid__row-title text-align-center"><?php print($row_title) ?></div>
    <?php endif ?>
  </div>
  <div class="col-xs-12 col-md-8 offset-md-2">
    <?php if (!empty($row_description)): ?>
      <div class="vs-grid__row-text text-align-center"><?php print $row_description ?></div>
    <?php endif ?>
  </div>
</div>

<?php if (!empty($grid_elements)): ?>
  <div class="row center-elements">
    <?php print $grid_elements; ?>
  </div>
<?php endif ?>
