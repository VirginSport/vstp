
<?php

/**
 * @file
 * Template file for festival results component.
 *
 * @var VirginEntityGrapher[] $events
 * @var VirginEntityGrapher $festival
 * @var VirginEntityGrapher $festival_state
 * @var VirginEntityGrapher $image_atom
 * @var string $race_name
 * @var string $race_start
 * @var string $race_end
 * @var string $link_label
 * @var string $link_url
 * @var string $brand_color
 * @var string $brand_pattern
 */

?>

<div class="vs-festival-results-card vs-festival-results-card--color-<?php print $brand_color; ?>">
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <div class="vs-festival-results-card__image-wrapper">
          <div class="row">
            <div class="col-xs-12 col-md-6">
              <div class="vs-festival-results-card__image" style="<?php print virginsport_atom_background($image_atom->getEntity()); ?>"></div>
            </div>
            <div class="col-xs-12 col-md-6">
              <div class="vs-festival-results-card__name-date">
                <div class="vs-color">
                  <div class="vs-color vs-color--color-blue vs-color--pattern-<?php print $brand_pattern; ?>">
                    <div class="vs-color__layer-1"></div>
                    <div class="vs-color__layer-2"></div>
                    <div class="vs-color__layer-3"></div>
                  </div>
                </div>
                <div class="vs-festival-results-card__name-date-valign">
                  <h4 class="vs-festival-results-card__title"><?php print check_plain($festival->fieldGetOne('title_field')); ?></h4>
                  <div class="vs-festival-results-card__date"><?php print virginsport_date_interval($festival_state->fieldGetOne('field_start_date'), $festival_state->fieldGetOne('field_end_date'), $festival_state->fieldGetOne('field_timezone')); ?></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <div class="vs-festival-results-card__info">
          <div class="row">
            <div class="col-xs-12 col-md-8">
              <div class="row">
                <?php foreach($events as $event): ?>
                  <div class="col-xs-6 vs-festival-results-card__grid-break">
                    <div class="vs-festival-results-card__info-block">
                      <h5 class="vs-festival-results-card__event-name"><?php print check_plain($event->fieldGetOne('title_field')); ?></h5>
                    </div>
                  </div>
                <?php endforeach; ?>
              </div>
            </div>
            <div class="col-xs-12 col-md-4">
              <div class="vs-festival-results-card__button-wrapper text-xs-center text-md-right">
              <a href="<?php print $link_url ?>" class="btn vs-btn vs-btn--outline-black vs-festival-results-card__button"><?php print t('View Results'); ?></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
