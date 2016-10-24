<?php
/**
 * @file virgin-components--fpp--vs-basic-content-block.tpl.php
 * Main template for virgin components fieldable panel panes vs_basic_content_block
 *
 * Variables available:
 * $size - the size of field panable pane
 * $paragraphs - an array of paragraphs
 */
?>

<div class="vs-cta-block vs-cta-block--col-<?php print $size; ?>">
  <div class="container-fluid">
    <div class="row vs-cta-block__row">
      <?php print $paragraphs; ?>
    </div>
  </div>
</div>
