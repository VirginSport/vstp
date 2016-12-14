<?php
/**
 * @file virgin-components--p--vs-event_festival_banner.tpl.php
 * Main template for virgin components paragraph vs_event_festival_banner
 *
 * Variables available:
 *  $brand_color - The brand color key
 *  $hero_image_grapher - The hero image atom VirginEntityGrapher
 *  $hero_image_caption - The hero image caption
 *  $card_title - The card title
 *  $card_description - The card description
 *  $cta_label - The label of the cta
 *
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
            <h1 class="vs-promo-banner__title vs-outline">
              <?php print check_plain($card_title); ?>
            </h1>
          <?php endif; ?>

          <?php if (!empty($card_title) || !empty($hashtag)): ?>
            <div class="vs-promo-banner__content">
              <?php if (!empty($card_description)): ?>
                <?php print $card_description; ?>
              <?php endif; ?>
              <?php if (!empty($hashtag)): ?>
                <p class="vs-promo-banner__ctaTexts-wrapper">
                  <a>
                    <?php print $hashtag; ?>
                  </a>
                </p>
              <?php endif; ?>
            </div>
          <?php endif; ?>

          <?php if (!empty($cta_label)): ?>
            <div class="vs-promo-banner__ctaButton-wrapper">
              <a
                class="btn vs-btn vs-btn--min-sm vs-promo-banner__ctaButton vs-btn--gradient-<?php print $brand_color; ?>"
                href="<?php print url('node/' . $node_grapher->property('nid')); ?>"
              >
                <?php print $cta_label; ?>
              </a>
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
</div>
