<?php
/**
 * @file virgin-components--fpp--vs-teaser-block.tpl.php
 * Main template for virgin components fieldable panel panes vs_teaser_block
 *
 * Variables available:
 * @var stdClass[] $paragraphs
 *  an array of paragraphs
 * @var string $brand_color
 *  The brand color key
 * @var stdClass $hero_banner_image
 *  The hero banner image atom
 */
?>

<div class="vs-introduction__container-wrapper vs-introduction--gradient-<?php print $brand_color; ?>">
  <div class="vs-introduction__image" style="<?php print virginsport_atom_background($hero_banner_image->getEntity()); ?>"></div>

  <div class="vs-introduction__content">
    <?php print $paragraphs; ?>
  </div>
</div>
