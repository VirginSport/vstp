<?php
/**
 * @file virgin-components--fpp--vs-hero-banner-block.tpl.php
 * Main template for virgin components fieldable panel panes vs_hero_banner_block
 *
 *  Variables available:
 *  $hero_banner_title - The component title
 *  $hero_banner_subheading - The component sub title
 *  $hero_banner_image - The hero image atom VirginEntityGrapher
 *  $cta_links - An array of links
 */
?>

<div class="vs-hero-banner">
  <div class="vs-hero-banner__background" style="<?php print virginsport_atom_background($hero_banner_image->getEntity()); ?>">
    <div class="vs-hero-banner__social-wrapper">
      <div class="vs-share-button">
        <div class="vs-share-button__content">
          <div class="hidden-xs-down vs-share-button__social-links">
            <a class="vs-share-button__icon-button vs-share-button__icon-twitter" href="#"><i class="icon-twitter"></i><span></span></a>
            <a class="vs-share-button__icon-button vs-share-button__icon-facebook" href="#"><i class="icon-facebook"></i><span></span></a>
            <a class="vs-share-button__icon-button vs-share-button__icon-email" href="#"><i class="icon-email-filled"></i><span></span></a>
          </div>
          <a class="vs-share-button__icon-button vs-share-button__icon-share" href="#">
            <i class="icon-share"></i><span></span>
          </a>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <?php if (!empty($hero_banner_title)): ?>
            <h2 class="vs-hero-banner__title"><?php print $hero_banner_title; ?></h2>
          <?php endif; ?>

          <?php if (!empty($hero_banner_subheading)): ?>
            <div class="vs-hero-banner__date"><?php print $hero_banner_subheading; ?></div>
          <?php endif; ?>

          <div class="vs-hero-banner__button-wrapper">
            <?php print
              theme('virginsport_cta_links',
                array(
                  'links' => $cta_links,
                  'classes' => 'vs-btn--min-sm vs-hero-banner__button'
                )
              );
            ?>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
