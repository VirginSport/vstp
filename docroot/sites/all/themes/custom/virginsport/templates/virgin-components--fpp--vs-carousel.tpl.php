<?php
/**
 * @file virgin-components--fpp--vs-carousel.tpl.php
 * Main template for virgin components fieldable panel panes vs_carousel
 *
 * Variables available:
 * TODO
 */

$width = ($carousel_style == 'full_width') ? 'vs-carousel-wrapper' : 'vs-carousel-wrapper--contained';
$autoplay = ($variables['autoplay'] == TRUE) ? 'autoplay' : '';

?>

<!--Carousel-->
<div class="vs-carousel">

  <div class="<?php print $width; ?>">

    <div class="row">
      <div class="col-xs-12 vs-carousel__item-wrapper <?php print $autoplay; ?>">
        <?php foreach ($variables['banners'] as $banner): ?>

          <?php $slide_item = new VirginEntityGrapher('paragraphs_item', $banner['entity_grapher']); ?>

          <!-- vs_custom_banner -->

          <?php if($slide_item->property('bundle') == 'vs_custom_banner') : ?>

            <div class="vs-carousel__item">
              <div class="vs-promo-banner vs-promo-banner--color-<?php print $variables['brand_color']; ?>">
                <div class="container-fluid">
                  <div class="row">
                    <div class="vs-promo-banner-block-wrapper">
                      <div class="vs-promo-banner__background" style="<?php print virginsport_atom_background($slide_item->relation('field_hero_image')->getEntity()); ?>"></div>
                      <div class="col-xs-12 vs-promo-banner__content-wrapper">
                        <h1 class="vs-promo-banner__title"><?php print $slide_item->fieldGetOne('title_field'); ?></h1>
                        <div class="vs-promo-banner__content">
                          <?php print $slide_item->fieldGetOne('field_description_short'); ?>
                        </div>
                        <div class="vs-promo-banner__ctaButton-wrapper">
                            <?php print
                              theme('virginsport_cta_links',
                                array(
                                  'links' => $slide_item->fieldGetAll('field_cta_links'),
                                  'classes' => 'vs-btn--min-sm vs-promo-banner__ctaButton'
                                )
                              );
                            ?>
                        </div>
                      </div>
                      <div class="hidden-md-down vs-promo-banner__caption"><?php print $slide_item->fieldGetOne('field_caption'); ?></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          <?php endif; ?>

          <!-- vs_event_festival_banner -->

          <?php if($slide_item->property('bundle') == 'vs_event_festival_banner') : ?>

            <?php $event = $slide_item->relation('field_festival_event_reference'); ?>

            <div class="vs-carousel__item">
              <div class="vs-promo-banner vs-promo-banner--color-<?php print $variables['brand_color']; ?>">
                <div class="container-fluid">
                  <div class="row">
                    <div class="vs-promo-banner-block-wrapper">
                      <div class="vs-promo-banner__background" style="<?php print virginsport_atom_background($event->relation('field_header_image')->getEntity()); ?>"></div>
                      <div class="col-xs-12 vs-promo-banner__content-wrapper">
                        <h1 class="vs-promo-banner__title"><?php print $event->fieldGetOne('title_field'); ?></h1>
                        <div class="vs-promo-banner__content">
                          <?php print $event->fieldGetOne('field_description'); ?>
                        </div>
                        <div class="vs-promo-banner__ctaButton-wrapper">
                          <?php print
                            theme('virginsport_cta_links',
                              array(
                                'links' => $slide_item->fieldGetAll('field_cta_links'),
                                'classes' => 'vs-btn--min-sm vs-promo-banner__ctaButton'
                              )
                            );
                          ?>
                        </div>
                      </div>
                      <div class="hidden-md-down vs-promo-banner__caption"><?php print $slide_item->fieldGetOne('field_caption'); ?></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          <?php endif; ?>

          <!-- vs_slide -->

          <?php if($slide_item->property('bundle') == 'vs_slide') : ?>

            <div class="vs-carousel__item">
              <div class="vs-carousel__image vs-carousel__image--color-<?php print $variables['brand_color']; ?>" style="<?php print virginsport_atom_background($slide_item->relation('field_slide_image')->getEntity()); ?>">
                <div class="vs-carousel__image-description"><?php print $slide_item->fieldGetOne('field_description')?></div>
              </div>
            </div>

          <?php endif; ?>

        <?php endforeach; ?>
      </div>
    </div>

  </div>
</div>

