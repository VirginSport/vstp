<?php
/**
 * @file virgin-components--fpp--vs-carousel.tpl.php
 * Main template for virgin components fieldable panel panes vs_carousel
 *
 * Variables available:
 * @var title
 * The component title
 * @var heading
 * The component heading
 * @var carousel_style
 * Define if carousel is full width or not
 * @var autoplay
 * Defines carousel autoplay ability
 * @var brand_color
 * The component brand color
 * @var banners
 * A list of paragraphs
 */
$width = ($carousel_style == 'full_width') ? 'vs-carousel-wrapper' : 'vs-carousel-wrapper--contained';
$autoplay = ($variables['autoplay'] == TRUE) ? 'autoplay' : '';
$container_heading = ($carousel_style == 'full_width') ? '-fluid' : '';
?>

<!--Carousel-->
<div class="vs-carousel vs-carousel--color-<?php print $brand_color; ?>">
  
  <div class="container<?php print $container_heading; ?>">
    <div class="row">
      <div class="vs-component-heading vs-carousel-heading">
        <?php print $heading; ?>
      </div>
    </div>
  </div>

  <div class="<?php print $width; ?>">

    <div class="row">
      <div class="col-xs-12 vs-carousel__item-wrapper <?php print $autoplay; ?>">
        <?php foreach ($variables['banners'] as $banner): ?>

          <?php $slide_item = new VirginEntityGrapher('paragraphs_item', $banner['entity_grapher']); ?>
          <!-- vs_custom_banner -->

          <?php if($slide_item->property('bundle') == 'vs_custom_banner') : ?>

            <div class="vs-carousel__item">
              <div class="vs-promo-banner vs-promo-banner--color-<?php print $slide_item->fieldGetOne('field_brand_color'); ?>">
                <div class="container-fluid">
                  <div class="row">
                    <div class="vs-promo-banner-block-wrapper">
                      <div class="vs-promo-banner__background" style="<?php print virginsport_atom_background($slide_item->relation('field_hero_image')->getEntity()); ?>"></div>
                      <div class="col-xs-12 vs-promo-banner__content-wrapper">
                        <h1 class="vs-promo-banner__title vs-outline"><?php print $slide_item->fieldGetOne('title_field'); ?></h1>
                        <?php if(!empty($slide_item->fieldGetOne('field_description_short'))): ?>
                          <div class="vs-promo-banner__content">
                            <?php print $slide_item->fieldGetOne('field_description_short'); ?>
                          </div>
                        <?php endif; ?>
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
                      <?php if(!empty($slide_item->fieldGetOne('field_caption'))): ?>
                        <div class="hidden-md-down vs-promo-banner__caption"><?php print $slide_item->fieldGetOne('field_caption'); ?></div>
                      <?php endif; ?>
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
              <div class="vs-promo-banner vs-promo-banner--color-<?php print $event->fieldGetOne('field_brand_color'); ?>">
                <div class="container-fluid">
                  <div class="row">
                    <div class="vs-promo-banner-block-wrapper">
                      <div class="vs-promo-banner__background" style="<?php print virginsport_atom_background($event->relation('field_header_image')->getEntity()); ?>"></div>
                      <div class="col-xs-12 vs-promo-banner__content-wrapper">
                        <h1 class="vs-promo-banner__title vs-outline"><?php print $event->fieldGetOne('title_field'); ?></h1>
                        <?php if(!empty($event->fieldGetOne('field_description'))): ?>
                          <div class="vs-promo-banner__content">
                            <?php print $event->fieldGetOne('field_description'); ?>
                          </div>
                        <?php endif; ?>
                      </div>
                      <?php if(!empty($event->fieldGetOne('field_caption'))): ?>
                        <div class="hidden-md-down vs-promo-banner__caption"><?php print $event->fieldGetOne('field_caption'); ?></div>
                      <?php endif; ?>
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

