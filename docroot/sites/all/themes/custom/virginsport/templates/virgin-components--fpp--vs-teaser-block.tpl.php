<?php
/**
 * @file virgin-components--fpp--vs-teaser-block.tpl.php
 * Main template for virgin components fieldable panel panes vs_teaser_block
 *
 * Variables available:
 * $paragraphs - an array of paragraphs
 */
?>

<div class="vs-introduction__container-wrapper">
  <div class="vs-introduction__image" style="<?php print virginsport_atom_background($hero_banner_image->getEntity()); ?>"></div>

  <div class="vs-introduction__content">
    <?php print $paragraphs; ?>
  </div>
</div>
