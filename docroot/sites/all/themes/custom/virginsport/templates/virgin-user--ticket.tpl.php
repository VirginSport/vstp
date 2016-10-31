<?php
/**
 * @file
 * Virgin ticket template.
 */

// Get number of days lefting to the festival
$event_days_left = virginsport_days_left($event_start_date);
?>

<div class="vs-ticket-card vs-ticket-card--color-<?php print $brand_color; ?>">
  <div class="container">
    <div
      class="vs-ticket-card-wrapper materialShadow"
    >
      <div class="row">
        <div class="col-xs-12 col-md-11 vs-ticket-card__content-wrapper">
          <div class="row">
            <div class="col-xs-9 col-md-5 col-lg-4 vs-ticket-card__header">
              <?php if (!empty($ticket->name)): ?>
                <h1 class="vs-ticket-card__title">
                  <?php print check_plain($ticket->name); ?>
                </h1>
              <?php endif; ?>
              <div class="vs-ticket-card__details">
                <?php if (!empty($event_date)): ?>
                  <p class="vs-ticket-card__date">
                    <?php print $event_date; ?>
                  </p>
                <?php endif; ?>

                <?php if (!empty($ticket_start_time)): ?>
                  <p class="vs-ticket-card__time">
                    <?php print $ticket_start_time; ?>
                  </p>
                <?php endif; ?>

                <?php if (empty($member_is_participant)): ?>
                  <p class="vs-ticket-card__participant-mame">
                    <?php print t("Recipient's name: @", array('@' => check_plain($ticket->first_name . ' ' . $ticket->last_name))); ?>
                  </p>
                <?php endif; ?>

                <a class="vs-ticket-card__edit-ticket" href="#">
                  <?php print t('Edit ticket'); ?>
                </a>
              </div>
            </div>

            <div class="col-xs-12 col-md-7 col-lg-8 clearfix">
              <?php if ($event_past): ?>
                <div class="row vs-ticket-card__past-event-details">
                  <?php if ($ticket->club_name): ?>
                  <div class="col-xs-6 col-md-6 col-lg-3 vs-ticket-card__club">
                    <span class="vs-ticket-card__club-label">
                      <?php print t('club'); ?>
                    </span>
                    <p><?php print check_plain($ticket->club_name); ?></p>
                  </div>
                  <?php endif; ?>
                  <?php if ($ticket->team_name): ?>
                    <div class="col-xs-6 col-md-6 col-lg-4 vs-ticket-card__team">
                    <span class="vs-ticket-card__team-label">
                      <?php print t('team'); ?>
                    </span>
                      <p><?php print check_plain($ticket->team_name); ?></p>
                    </div>
                  <?php endif; ?>
                  <?php
                  /* TODO placeholder for release 2 when there's results
                    <div class="col-xs-6 col-md-6 col-lg-3 vs-ticket-card__session-time">
                    <span class="vs-ticket-card__session-time-label">
                      time
                    </span>
                      <p>48:25</p>
                    </div>
                    <div class="col-xs-6 col-md-6 col-lg-2 vs-ticket-card__distance">
                    <span class="vs-ticket-card__distance-label">
                      km/h
                    </span>
                      <p>9.43</p>
                    </div>
                  */
                  ?>
                </div>
              <?php elseif (!empty($event_days_left)): ?>
                <div class="vs-ticket-card__days-left-wrapper hidden-sm-down">
                  <span class="vs-ticket-card__days-left">
                    <?php print $event_days_left; ?>
                  </span>

                    <span class="vs-ticket-card__days-left-label">
                    <?php print t('Days to go'); ?>
                  </span>
                </div>
              <?php endif; ?>
            </div>
          </div>

          <div class="row clearfix vs-ticket-card__ctas-wrapper">
            <?php if ($event_past): ?>
              <?php
              /* TODO placeholder for release 2 when there's results
              <div class="vs-ticket-card__cta-wrapper">
                <a class="vs-ticket-card__cta--full-results" href="#">
                  <i class="icon-results-medal"></i>
                  <span>full results</span>
                </a>
              </div>
              */
              ?>

              <?php
              /* TODO link up to an event photo page and pass bib# and the GamefaceID for the associated event */
              ?>
              <?php if (!empty($event_grapher->fieldGetOne('field_gameface_id'))): ?>
                <div class="vs-ticket-card__cta-wrapper">
                  <a class="vs-ticket-card__cta--event-photos" href="#">
                    <i class="icon-event-selfie"></i>
                    <span>
                      <?php print t('event photos'); ?>
                    </span>
                  </a>
                </div>
              <?php endif; ?>

              <?php if (!empty($member_is_participant) && !empty($event_state_grapher->fieldGetOne('field_has_fans'))): ?>
                <div class="vs-ticket-card__cta-wrapper">
                  <a class="vs-ticket-card__cta--invite-fans" href="#">
                    <i class="icon-average-pace"></i>
                    <?php print t('invite fans'); ?>
                  </a>
                </div>
              <?php endif; ?>

              <div class="vs-ticket-card__cta-wrapper">
                <a
                  class="vs-ticket-card__cta--event-review"
                  href="<?php print url('node/' . $event_grapher->property('nid')); ?>"
                >
                  <i class="icon-review"></i>
                  <span>
                    <?php print t('event review'); ?>
                  </span>
                </a>
              </div>
            <?php else: ?>

              <?php if (!empty($member_is_participant)): ?>
                <?php if (!empty($event_state_grapher->fieldGetOne('field_has_fans'))): ?>
                  <div class="vs-ticket-card__cta-wrapper">
                    <a class="vs-ticket-card__cta--invite-fans" href="#">
                      <i class="icon-average-pace"></i>
                      <?php print t('invite fans'); ?>
                    </a>
                  </div>
                <?php endif; ?>

                <?php if (!empty($event_state_grapher->fieldGetOne('field_has_teams'))): ?>
                  <div class="vs-ticket-card__cta-wrapper">
                    <a class="vs-ticket-card__cta--join-team" href="#">
                      <i class="icon-join-team"></i>
                      <?php print t('join / create team'); ?>
                    </a>
                  </div>
                <?php endif; ?>

                <?php if (!empty($event_state_grapher->fieldGetOne('field_has_marketing_questions'))): ?>
                  <div class="vs-ticket-card__cta-wrapper">
                    <a class="vs-ticket-card__cta--about-yourself" href="#">
                      <i class="icon-tell-us"></i>
                      <?php print t('tell us about yourself'); ?>
                    </a>
                  </div>
                <?php endif; ?>
              <?php endif; ?>

              <?php if (!empty($event_state_grapher->fieldGetOne('field_has_merchandise'))): ?>
              <div class="vs-ticket-card__cta-wrapper">
                <a class="vs-ticket-card__cta--buy-gear" href="#">
                  <i class="icon-buy-gear"></i>
                  <?php print t('buy gear'); ?>
                </a>
              </div>
              <?php endif; ?>
            <?php endif; ?>
            <div class="vs-ticket-card__social-wrapper"></div>
          </div>
        </div>

        <?php if (!empty($ticket_properties)): ?>
          <div class="hidden-md-up">
            <div class="vs-ticket-card__ribbon vs-ticket-card__ribbon--<?php print $ticket_class; ?>">
              <span><?php print t($ticket_properties['mobile_title']); ?></span>
            </div>
          </div>

          <div class="col-md-1 hidden-sm-down vs-ticket-card__ribbon-desktop-wrapper">
            <div class="vs-ticket-card__ribbon-desktop-bg vs-ticket-card__ribbon-desktop-bg--<?php print $ticket_class; ?>"></div>

            <div class="vs-ticket-card__ribbon vs-ticket-card__ribbon--<?php print $ticket_class; ?>">
              <span><?php print t($ticket_properties['desktop_title']); ?></span>
            </div>
          </div>
        <?php endif; ?>
      </div>
      
      <?php print theme('virginsport_color', array('brand_color' => $brand_color, 'brand_pattern' => $brand_pattern)); ?>
    </div>
  </div>
</div>
