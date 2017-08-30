<?php
/**
 * @file virgin-components--fpp--vs-hero-event-card.tpl.php
 * Main template for virgin components fieldable panel panes vs_hero_event_card
 *
 * Variables available:
 *  $brand_color - The event brand color
 *  $brand_pattern - The event brand pattern
 *  $event_title - The event title
 *  $event_date - The event start date
 *  $event_description - The event description
 *  $cta_links - An array with links and its attributes
 */
?>

<div class="container vs-hero-event-card vs-hero-event-card--gradient-<?php print $brand_color; ?>">
  <div class="row">
    <div class="col-xs-12 col-lg-10 offset-lg-1 col-xl-12 offset-xl-0">
      <?php if(!empty($header_image->property('sid'))): ?>
        <div class="vs-hero-event-card__image"
             style="<?php print virginsport_atom_background($header_image->getEntity()); ?>"
        ></div>
      <?php endif; ?>
    </div>
    <div class="col-xs-12 col-lg-10 offset-lg-1 col-xl-12 offset-xl-0">
      <div class="vs-hero-event-card__content">
        <?php if (!empty($event_title)): ?>
          <h3 class="vs-hero-event-card__title">
            <?php print check_plain($event_title); ?>
          </h3>
        <?php endif; ?>

        <?php if (!empty($event_date)): ?>
          <div class="vs-hero-event-card__date">
            <?php print $event_date; ?>
          </div>
        <?php endif; ?>

        <?php if (!empty($event_description)): ?>
          <div class="vs-hero-event-card__text">
            <?php print $event_description; ?>
          </div>
        <?php endif; ?>

        <?php if (!empty($cta_links)): ?>
          <div class="vs-hero-event-card__buttons">
            <?php print
              theme('virginsport_cta_links',
                array(
                  'links' => $cta_links,
                  'classes' => 'vs-btn--min-sm vs-hero-event-card__button'
                )
              );
            ?>
          </div>
        <?php endif; ?>

        <?php if(!empty($outline_title)): ?>
          <span class="vs-teaser__title vs-outline hidden-md-up"><?php print $outline_title; ?></span>
        <?php endif; ?>
        <div class="vs-color vs-color--color-<?php print $brand_color; ?> vs-color--pattern-<?php print $brand_pattern;?>">
          <div class="vs-color__layer-1"></div>
          <div class="vs-color__layer-2"></div>
          <div class="vs-color__layer-3"></div>
        </div>
      </div>
    </div>
  </div>
</div>
