<?php
/**
 * @file virgin-components--p--vs-custom-banner.tpl.php
 * Main template for virgin components paragraphs vs_custom_banner
 *
 * Variables available:
 *  $brand_color - The brand color key
 *  $hero_image_grapher - The hero image atom VirginEntityGrapher
 *  $hero_image_caption - The hero image caption
 *  $card_title - The card title
 *  $card_description - The card description
 *  $cta_links - An array with links and its attributes
 */

?>

<div class="vs-promo-banner vs-promo-banner--color-<?php print $brand_color; ?>">
  <div class="container-fluid">
    <div class="row">
      <div class="vs-promo-banner-block-wrapper">
        <div
          class="vs-promo-banner__background"
          <?php if (!empty($hero_image_grapher->property('sid'))): ?>
          style="<?php print virginsport_atom_background($hero_image_grapher->getEntity()); ?>">
          <?php endif; ?>
        </div>
        <div class="col-xs-12 vs-promo-banner__content-wrapper">
          <?php if (!empty($card_title)): ?>
            <h1 class="vs-promo-banner__title">
              <?php print check_plain($card_title); ?>
            </h1>
          <?php endif; ?>

          <?php if (!empty($card_description)): ?>
            <div class="vs-promo-banner__content">
              <?php print $card_description ?>
            </div>
          <?php endif; ?>

          <?php if (!empty($cta_links)): ?>
            <div class="vs-promo-banner__ctaButton-wrapper">
              <?php print
                theme('virginsport_cta_links',
                  array(
                    'links' => $cta_links,
                    'classes' => 'vs-btn--min-sm vs-promo-banner__ctaButton'
                  )
                );
              ?>
            </div>
          <?php endif; ?>
        </div>

        <?php if (!empty($hero_image_caption)): ?>
          <div class="hidden-md-down vs-promo-banner__caption">
            <?php print $hero_image_caption ?>
          </div>
        <?php endif; ?>
    </div>
  </div>
</div>
