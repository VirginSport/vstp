<?php
/**
 * @file
 * Virgin ticket template.
 */

// Get number of days lefting to the festival
$event_days_left = virginsport_days_left($event_start_date);

// TODO, move the unit for a user configuration
$unit = 'km';
?>

<div
  id="vs-ticket-card--<?php print $ticket->attendly_rego_id; ?>"
  class="vs-ticket-card vs-ticket-card--<?php print $ticket->attendly_rego_id; ?> vs-ticket-card--color-<?php print $brand_color; ?>"
  v-init='<?php print drupal_json_encode(array('unit' => $unit, 'ticket_id' => $ticket->sugar_id, 'festival_id' => $ticket->festival_id, 'event_id' => $ticket->event_id)) ?>'
>
  <div class="container">
    <div
      class="vs-ticket-card-wrapper materialShadow"
    >
      <div class="row">
        <div class="col-xs-12 col-md-11 vs-ticket-card__content-wrapper">
          <div class="row">
            <div class="col-xs-9 col-md-5 col-lg-4 vs-ticket-card__header">
              <?php if (!empty($ticket_type_title)): ?>
                <h1 class="vs-ticket-card__title">
                  <?php print check_plain($ticket_type_title); ?>
                </h1>
              <?php endif; ?>
              <div class="vs-ticket-card__details">
                <?php if (!empty($event_date)): ?>
                  <p class="vs-ticket-card__date">
                    <?php print $event_date; ?>
                  </p>
                <?php endif; ?>

                <?php if (!empty($ticket->start_time)): ?>
                  <p class="vs-ticket-card__time">
                    <?php print check_plain($ticket->start_time); ?>
                  </p>
                <?php endif; ?>

                <?php if (empty($member_is_participant)): ?>
                  <p class="vs-ticket-card__participant-mame">
                    <?php print t("Recipient's name: @", array('@' => check_plain($ticket->first_name . ' ' . $ticket->last_name))); ?>
                  </p>
                <?php endif; ?>
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

                  <div v-if="participant" class="col-xs-6 col-md-6 col-lg-3 vs-ticket-card__session-time">
                    <span class="vs-ticket-card__session-time-label">
                      time
                    </span>
                    <p>{{ participant.displayChipTime }}</p>
                  </div>

                  <div v-if="race && participant" class="col-xs-6 col-md-6 col-lg-2 vs-ticket-card__distance">
                    <span class="vs-ticket-card__distance-label">
                      {{ unit }}/h
                    </span>
                    <p>{{ getAverageDistance() }}</p>
                  </div>
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

              <?php if (!empty($event_grapher->fieldGetOne('field_gameface_id'))): ?>
                <div class="vs-ticket-card__cta-wrapper">
                  <a
                    class="vs-ticket-card__cta--event-photos"
                    href="<?php print url(sprintf('node/%s/photos', $event_grapher->property('nid'))); ?>{{ participant  ? `?bib=${participant.bibNumber}`: '' }}"
                    interaction-type="event photos"
                  >
                    <i class="icon-event-selfie"></i>
                    <span>
                      <?php print t('event photos'); ?>
                    </span>
                  </a>
                </div>
              <?php endif; ?>

              <div class="vs-ticket-card__cta-wrapper">
                <a
                  class="vs-ticket-card__cta--event-review"
                  href="<?php print url('node/' . $event_grapher->property('nid')); ?>"
                  interaction-type="event review"
                >
                  <i class="icon-review"></i>
                  <span>
                    <?php print t('event review'); ?>
                  </span>
                </a>
              </div>
            <?php endif; ?>
            <div class="vs-ticket-card__social-wrapper">
              <?php print theme('virginsport_share_buttons', array('location' => 'User Ticket', 'subject' => $event_grapher->fieldGetOne('title_field'), 'url' => url('node/' . $event_grapher->property('nid'), array('absolute' => TRUE)))); ?>
            </div>
          </div>
        </div>

        <?php if (!empty($ticket_properties)): ?>
          <div class="hidden-md-up">
            <div class="vs-ticket-card__ribbon vs-ticket-card__ribbon--<?php print $ticket_class; ?>">
              <span><?php print t($ticket_properties['mobile title']); ?></span>
            </div>
          </div>

          <div class="col-md-1 hidden-sm-down vs-ticket-card__ribbon-desktop-wrapper">
            <div class="vs-ticket-card__ribbon-desktop-bg vs-ticket-card__ribbon-desktop-bg--<?php print $ticket_class; ?>"></div>

            <div class="vs-ticket-card__ribbon vs-ticket-card__ribbon--<?php print $ticket_class; ?>">
              <span><?php print t($ticket_properties['desktop title']); ?></span>
            </div>
          </div>
        <?php endif; ?>
      </div>

      <?php print theme('virginsport_color', array('brand_color' => $brand_color, 'brand_pattern' => $brand_pattern)); ?>
    </div>
  </div>

  <?php if (!$festival_upcoming): ?>
    <!-- Push ticket events to Google Tag Manager Data Layer -->
    <script>
      window.addEventListener('load', function() {
        jQuery('.vs-ticket-card--<?php print $ticket->attendly_rego_id; ?> a').click(function (e) {
          var type = jQuery(this).attr('interaction-type');

          var data = {
            'event': 'PastFestivalInteraction',
            'Interaction Type': type ? type : 'share',
            'Festival Name': '<?php print empty($ticket->festival_node_title) ? '' : $ticket->festival_node_title; ?>',
            'Event Type': '<?php print $event_state_grapher->fieldGetOne('field_event_type'); ?>',
            'EventName': '<?php print $event_grapher->property('title'); ?>'
          };

          // Push ticket data and interaction to google tag manager
          if (dataLayer) {
            dataLayer.push(data);
          }
        });
      });
    </script>
    <!-- End Push ticket events to Google Tag Manager Data Layer -->
  <?php endif; ?>
</div>
