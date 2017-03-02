<?php
/**
 * @file virgin-components--p--vs-cta-block.tpl.php
 * Main template for virgin components paragraph vs_cta_block_item
 *
 * Variables available:
 * $title - The CTA title
 * $description - The CTA description
 * $card_image - The CTA image atom
 * $image_effect - The image effect
 * $cta_links - An array with links and its attributes
 */

?>

<div class="vs-cta-block__item">
  <div class="vs-cta-block__background--with-image-limited-opacity" style="<?php print virginsport_atom_background($card_image->getEntity()); ?>"></div>
  <?php if(!empty($title)): ?>
  <h3 class="vs-cta-block__title"><?php print check_plain($title); ?></h3>
  <?php endif; ?>
  <?php if(!empty($description)): ?>
  <p class="vs-cta-block__content"><?php print $description; ?></p>
  <?php endif; ?>
  <?php if(!empty($cta_links)): ?>
  <div class="vs-cta-block__cta-wrapper">
      <?php print
        theme('virginsport_cta_links',
          array(
            'links' => $cta_links,
            'classes' => 'vs-btn--sm vs-cta-block__cta'
          )
        );
      ?>
  </div>
  <?php endif; ?>
</div>

