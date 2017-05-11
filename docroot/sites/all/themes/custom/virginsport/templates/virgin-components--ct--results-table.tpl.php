<?php
/**
 * @file virgin-components--ct--results-table.tpl.php
 * Template for the results table
 *
 * Variables available:
 *
 * @var bool $is_summary
 *  If the results table is to be rendered as a summary (requires event id)
 * @var bool $is_card
 *  Show in a card format only with 1 result
 * @var bool $is_truncated
 *  If the results are truncated or paginated
 * @var string $brand_color
 *  The brand color to be applied to the results table
 * @var string $results_path
 *  The URL path to the festival full results
 * @var string $replay_path
 *  The URL path to the festival replay
 * @var string $photo_path
 *  The URL path to the festival photos
 * @var string $festival_id
 *  The SugarCRM ID of the festival
 * @var string $ticket_id
 *  The SugarCRM ID of the ticket
 * @var string $event_id
 *  The SugarCRM ID of the event
 * @var string $event_name
 *  The name of the event to be shown a summary for (only if summary is true)
 * @var string $event_date
 *  The date of the event to be shown a summary for (only if summary is true)
 * @var string $event_description
 *  The description of the event to be shown a summary for (only if summary is true)
 * @var int $max_rows
 *  The max rows to be rendered per results page
 */

// Ensure vue templates are only rendered once
$template_rendered = drupal_static(__FILE__, FALSE);
$requires_templates = !$template_rendered;
$template_rendered = TRUE;

// Results table unique id
$results_table_id = uniqid();
?>

<div
  id="vs-results-container--<?php print $results_table_id; ?>"
  class="vs-results-container"
>
  <div class="container">
    <vs-results
      is-card="<?php print check_plain($is_card); ?>"
      ticket-id="<?php print check_plain($ticket_id); ?>"
      brand-color="<?php print check_plain($brand_color); ?>"
      :has-teaser="<?php print (bool) $is_summary; ?>"
      :show-top="<?php print (bool) $show_top; ?>"
      :has-filter="<?php print (bool) !$is_summary; ?>"
      :has-sub-filter="<?php print (bool) !$is_summary; ?>"
      :is-truncated="<?php print (bool) $is_truncated; ?>"
      results-path="<?php print check_plain($results_path); ?>"
      replay-path="<?php print check_plain($replay_path); ?>"
      photo-path="<?php print check_plain($photo_path); ?>"
      festival-id="<?php print check_plain($festival_id); ?>"
      event-id="<?php print check_plain($event_id); ?>"
      event-name="<?php print check_plain($event_name); ?>"
      event-date="<?php print check_plain($event_date); ?>"
      event-description="<?php print check_plain($event_description); ?>"
      :max-rows="<?php print (int) $max_rows; ?>"
      unit="<?php print $unit; ?>"
    ></vs-results>
  </div>
</div>

<?php if ($requires_templates): ?>
<script type="text/x-template" id="tpl-vs-results">
  <div
    class="vs-results"
    v-bind:class="['vs-results--color-' + brandColor, { 'vs-results--sub-filtered': hasSubFilter, 'vs-results--truncated': isTruncated, 'vs-results--ready': ready, 'vs-results--loading': loading.find, 'vs-results--card': isCard }]"
  >
    <div v-if="hasTeaser" class="vs-results__teaser">
      <div class="vs-results__btn-wrap">
        <a v-if="replayPath" v-bind:href="replayPath" class="vs-results__btn"><?php print t('Replay Run'); ?></a>
        <a v-if="resultsPath" v-bind:href="resultsPath" class="vs-results__btn"><?php print t('View Full Results'); ?></a>
      </div>

      <h4 class="vs-results__title">{{ eventName }}</h4>
      <p class="vs-results__date">{{ eventDate }}</p>
      <div class="vs-results__description">{{{ eventDescription }}}</div>
    </div>

    <div v-if="hasFilter && !isCard" class="vs-results__filters">
      <h4 class="vs-results__title"><?php print t('Finishers'); ?></h4>

      <div class="vs-results__form">
        <div class="vs-form-group vs-results__form-select">
          <div class="vs-chosen-wrapper">
            <select id="input-race" v-model="filter.race.id" class="chosen-select">
              <option v-for="(index, race) in event.races" v-bind:value="race.id">
                {{ race.name }}
              </option>
            </select>
            <label class="vs-focus-label" for="input-race"><?php print t('Race Type'); ?> *</label>
          </div>
        </div>

        <div class="clearfix">

          <a class="vs-results__collapse-link collapsed" data-toggle="vs-collapse" href="#options" aria-expanded="false">
            <span><?php print t('more options'); ?></span>
            <span><?php print t('hide options'); ?></span>
          </a>

          <div class="vs-results__collapse-content collapse" id="options">
            <div class="vs-form-group">
              <input class="form-control" type="text" id="input-runner-name" v-model="filter.name">
              <label class="vs-focus-label" for="input-runner-name"><?php print t("Runner's Name"); ?> <em><?php print t('(optional)'); ?></em></label>
            </div>

            <div class="vs-form-group">
              <input class="form-control" type="text" id="input-bib-number" v-model="filter.bib">
              <label class="vs-focus-label" for="input-bib-number"><?php print t("BIB Number"); ?> <em><?php print t('(optional)'); ?></em></label>
            </div>

            <div class="vs-form-group">
              <input class="form-control" type="text" id="input-team-name" v-model="filter.team">
              <label class="vs-focus-label" for="input-team-name"><?php print t("Crew Name"); ?> <em><?php print t('(optional)'); ?></em></label>
            </div>

            <div class="vs-form-group">
              <input class="form-control" type="text" id="input-club-name" v-model="filter.club">
              <label class="vs-focus-label" for="input-club-name"><?php print t("Club Name"); ?> <em><?php print t('(optional)'); ?></em></label>
            </div>
          </div>

        </div>
      </div>

      <span>
        <a v-if="photoPath" href="{{ photoPath }}" class="vs-results__btn vs-results__photos-btn"><?php print t('Event Photos'); ?></a>
      </span>
      <span>
        <a href="" v-on:click.stop.prevent="findRaceResults()" class="vs-results__btn vs-results__find-btn"><?php print t('Find'); ?></a>
      </span>
    </div>
    <div>
      <div
        v-if="hasSubFilter"
        v-bind:class="['vs-results__rankings', { 'vs-results__rankings--card': isCard }]"
      >
        <a v-if="!isCard" class="vs-results__collapse-button btn btn-block vs-btn vs-btn--lg vs-btn--min-lg vs-btn--outline-black collapsed" data-toggle="vs-collapse" href="#filters" aria-expanded="false">
          <span class="vs-results__collapse-label"><?php print t('Filter'); ?></span>
        </a>
        <div
          class="vs-results__collapse-content"
          v-bind:class="[{ 'collapse': !isCard }]"
          id="filters"
        >
          <vs-results-ranking
            v-if="!isCard"
            label="<?php print t('Gender'); ?>"
            model="gender"
            :options='<?php print json_encode(array(
              '' => t('All'),
              'male' => t('Male'),
              'female' => t('Female')
            )); ?>'
            :active-key="filter.gender"
            :callback="applySubFilterSearch"
            :is-select="true"
          ></vs-results-ranking>

          <vs-results-ranking
            v-if="!isCard"
            label="<?php print t('Age'); ?>"
            model="category"
            :options='<?php print json_encode(array(
                '0' => t('All'),
                '*20' => t('Under 20'),
                '*20-*24' => t('20 - 24'),
                '*25-*29' => t('25 - 29'),
                '*30-*34' => t('30 - 34'),
                '*35-*39' => t('35 - 39'),
                '*40-*44' => t('40 - 44'),
                '*45-*49' => t('45 - 49'),
                '*50-*54' => t('50 - 54'),
                '*55-*59' => t('55 - 59'),
                '*60-*64' => t('60 - 64'),
                '*65-*69' => t('65 - 69'),
                '*70-*74' => t('70 - 74'),
                '*75-*79' => t('75 - 79'),
                '*80+' => t('80 +'),
            ));?>'
            :active-key="filter.age"
            :callback="applySubFilterSearch"
            :is-select="true"
          ></vs-results-ranking>

          <vs-results-ranking
            label="<?php print t('Unit'); ?>"
            model="unit"
            :options='<?php print json_encode(array(
              'km' => t('KM'),
              'miles' => t('Miles')
            )); ?>'
            :active-key="filter.unit"
            :callback="applySubFilter"
          ></vs-results-ranking>
        </div>
      </div>

      <div v-if="filter.race" class="vs-results__table">
        <div v-if="!isCard" class="vs-results__table-head">
          <span class="vs-result-col vs-result-col-rank"><?php print t('Rank'); ?></span>
          <span class="vs-result-col vs-result-col-name"><?php print t('Name'); ?></span>
          <span class="vs-result-col vs-result-col-bib"><?php print t('BIB'); ?></span>
          <span class="vs-result-col vs-result-col-club"><?php print t('Club'); ?></span>
          <span class="vs-result-col vs-result-col-team"><?php print t('Crew'); ?></span>
          <span class="vs-result-col vs-result-col-category"><?php print t('Age'); ?></span>
          <span class="vs-result-col vs-result-col-gender"><?php print t('Gender'); ?></span>
          <span class="vs-result-col vs-result-col-pace"><?php print t('Pace'); ?> / {{ filter.unit == 'km' ? '<?php print t('km'); ?>' : '<?php print t('mile'); ?>' | capitalize }}</span>
          <span class="vs-result-col vs-result-col-chip"><?php print t('Chip Time'); ?></span>
        </div>

        <!-- Normal Ranking Results -->
        <div v-if="ranks.length && !showTop" class="vs-results__table-list">
          <vs-result
            v-for="(i, rank) in ranks"
            :is-open="ranks.length == 1"
            :brand-color="brandColor"
            :rank="rank"
            :race="filter.race"
            :unit="filter.unit"
            :multiple="ranks.length > 1"
          ></vs-result>
        </div>

        <!-- Top Results -->
        <div v-if="showTop && filter.race.id" class="vs-results__table-list">

          <div class="vs-results__table-list__group"><?php print t('Top'); ?> {{ maxRows }} <?php print t('male'); ?></div>

          <vs-result
            v-for="(i, rank) in genderRanks.male"
            :is-open="genderRanks.male.length == 1"
            :brand-color="brandColor"
            :rank="rank"
            :race="filter.race"
            :unit="filter.unit"
            :multiple="genderRanks.male.length > 1"
            :index="i + 1"
          ></vs-result>

          <div class="vs-results__table-list__group"><?php print t('Top'); ?> {{ maxRows }} <?php print t('female'); ?></div>

          <vs-result
            v-for="(i, rank) in genderRanks.female"
            :is-open="genderRanks.female.length == 1"
            :brand-color="brandColor"
            :rank="rank"
            :race="filter.race"
            :unit="filter.unit"
            :multiple="genderRanks.female.length > 1"
            :index="i + 1"
          ></vs-result>
        </div>

        <!-- Result Card -->
        <div v-if="ticketId && !ranks.length && filter.race.id" class="vs-results__table-list">
          <vs-result
            :is-open="true"
            :brand-color="brandColor"
            :race="filter.race"
            :unit="filter.unit"
            :ticket-id="ticketId"
            :multiple="false"
          ></vs-result>
        </div>

        <div v-if="!isTruncated && !noResults && !isCard && !showTop" class="vs-results__footer">
          <a href
            class="vs-results__more-btn"
             v-on:click.stop.prevent="getRaceResults('more')"
             v-bind:class="{ 'vs-results__more-btn--loading': loading.more  }"
          >
            <?php print t('View More'); ?>
          </a>
        </div>
      </div>
    </div>
  </div>
</script>
<?php endif; ?>

<?php if ($requires_templates): ?>
<script type="text/x-template" id="tpl-vs-results-ranking">

    <div class="vs-results__ranking vs-results__ranking--chosen">
      <span class="vs-results__ranking-label">{{ label }}</span>

      <select v-if="isSelect" id="input-race" v-model="activeKey" class="chosen-select">
        <option v-for="(key, option) in options" v-bind:value="key">
          {{ option }}
        </option>
      </select>

      <ul v-if="!isSelect" class="vs-results__ranking-options">
        <li
          v-for="(key, option) in options"
          v-bind:class="{ 'vs-results__ranking--active': (key == activeKey)  }"
          v-on:click="onClick(key)"
        >
          <span>{{ option }}</span>
        </li>
      </ul>
    </div>

</script>
<?php endif; ?>

<?php if ($requires_templates): ?>
  <script type="text/x-template" id="tpl-vs-result">
    <div
      class="vs-result"
      v-bind:class="['vs-result--color-' + brandColor, { 'vs-result--open': isOpen, 'vs-result--loading': loading }]"
    >
      <div v-if="rank" class="vs-result__head" v-on:click="getParticipantDetails(rank.participantId)">
        <span class="vs-result-col vs-result-col-rank">{{ index ? index : rank.rank }}</span>
        <span class="vs-result-col vs-result-col-name vs-result__border vs-result__strong">{{ rank.participantFirstName }} {{ rank.participantLastName }}</span>
        <span class="vs-result-col vs-result-col-bib vs-result__border vs-result__muted">{{ rank.participantBibNumber }}</span>
        <span class="vs-result-col vs-result-col-club vs-result__border">{{ rank.participantClub }}</span>
        <span class="vs-result-col vs-result-col-team vs-result__border">{{ rank.participantTeam }}</span>
        <span class="vs-result-col vs-result-col-category vs-result__border">{{ rank.participantAge }}</span>
        <span class="vs-result-col vs-result-col-gender vs-result__border">{{ rank.participantGender == 'male' ? 'M' : 'F' }}</span>
        <span class="vs-result-col vs-result-col-pace vs-result__border">{{ timeStampFormat("mm:ss", diff(0, rank.chipTime) / getTotalDistance()) }}</span>
        <span class="vs-result-col vs-result-col-chip vs-result__border">{{ diffFormat("hh:mm:ss", 0, rank.chipTime) }}</span>
      </div>

      <div v-if="!rank && result" class="vs-result__head">
        <span class="vs-result-col vs-result-col-name vs-result__border vs-result__strong">Name:<br>{{ result.firstName }} {{ result.lastName }}</span>
        <span class="vs-result-col vs-result-col-bib vs-result__border vs-result__muted">Bib:<br>{{ result.bibNumber }}</span>
        <span class="vs-result-col vs-result-col-club vs-result__border">Club:<br>{{ result.club }}</span>
        <span class="vs-result-col vs-result-col-team vs-result__border">Crew:<br>{{ result.team }}</span>
        <span class="vs-result-col vs-result-col-age vs-result__border">Age:<br>{{ result.age }}</span>
        <span class="vs-result-col vs-result-col-gender vs-result__border">Gender:<br>{{ result.gender == 'male' ? 'M' : 'F' }}</span>
        <span class="vs-result-col vs-result-col-chip vs-result__border">ChipTime:<br>{{ result.displayChipTime }}</span>
      </div>

      <div
        class="vs-result__body"
        v-bind:class="{ 'vs-result__body--ready': ready, 'vs-result__body--down': downFinished, 'vs-result__body--up': upFinished }"
      >
        <div v-if="result">
          <div class="vs-result__meta-wrapper clearfix">
            <div class="vs-result__meta vs-result__meta--first">
              <span class="vs-result__meta-label"><?php print t('Country'); ?></span>
              {{ result.country }}
            </div>
            <div class="vs-result__meta">
              <span class="vs-result__meta-label"><?php print t('City'); ?></span>
              {{ result.city }}
            </div>
            <div class="vs-result__meta">
              <span class="vs-result__meta-label"><?php print t('Gender Place'); ?></span>
              {{ result.genderGunTime }}/{{ race.participants[rank ? rank.participantGender : result.gender] }}
            </div>
            <div class="vs-result__meta vs-result__meta--last">
              <span class="vs-result__meta-label"><?php print t('Division Place'); ?></span>
              {{ result.categoryGunTime }}/{{ race.participants[rank ? rank.participantCategory : result.category] }}
            </div>
          </div>

          <div class="vs-result__share">
            <vs-result-share
              :url="'<?php print url('user/results/', array('absolute' => TRUE)); ?>' + result.participantId"
              :participant-name="result.firstName + ' ' + result.lastName"
              :finish-time="diffFormat('hh:mm:ss', initialTime, lastTime)"
            >
            </vs-result-share>
          </div>

          <div class="vs-result__stats hidden-lg-up">
            <div class="vs-result__stat">
              <span class="vs-result__stat-value"> {{ timeStampFormat("mm:ss", diff(initialTime, lastTime) / getTotalDistance()) }} </span>
              <span class="vs-result__stat-label"><?php print t('Average Pace'); ?> / {{ unit == 'km' ? '<?php print t('km'); ?>' : '<?php print t('mile'); ?>' | capitalize }}</span>
            </div>

            <div class="vs-result__stat">
              <span class="vs-result__stat-value">{{ result.displayChipTime }}</span>
              <span class="vs-result__stat-label"><?php print t('Total Time'); ?></span>
            </div>
          </div>

          <div class="vs-result__times">
            <div class="vs-result__average-label"><?php print t('Pace'); ?> / {{ unit == 'km' ? '<?php print t('km'); ?>' : '<?php print t('mile'); ?>' | capitalize }}</div>

            <div>
              <div class="vs-result__time" v-for="p in getPassings()">
                <div class="vs-result__time-average">
                  <div class="vs-result__progress">
                    <div class="vs-result__progress-state" v-bind:style='{ "width": ((p.average * 100) / maxAverage[unit]) + "%" }'>{{ timeStampFormat("mm:ss", p.average) }}</div>
                  </div>
                </div>

                <div class="vs-result__time-stage">
                  <span class="vs-result__time-stage-name">{{ p.stage.name }}</span>
                  <span class="vs-result__time-stage-time">{{ diffFormat("mm:ss", p.startTime, p.pass.chipTime) }}</span>

                </div>
              </div>
            </div>
          </div>

          <div class="vs-result__stats hidden-md-down">
            <div class="vs-result__stat">
              <span class="vs-result__stat-value"> {{ timeStampFormat("mm:ss", diff(initialTime, lastTime) / getTotalDistance()) }} </span>
              <span class="vs-result__stat-label"><?php print t('Average Pace'); ?> / {{ unit == 'km' ? '<?php print t('km'); ?>' : '<?php print t('mile'); ?>' | capitalize }}</span>
            </div>

            <div class="vs-result__stat">
              <span class="vs-result__stat-value">{{ result.displayChipTime }}</span>
              <span class="vs-result__stat-label"><?php print t('Total Time'); ?></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </script>
<?php endif; ?>

<?php if ($requires_templates): ?>
  <script type="text/x-template" id="tpl-vs-result-share">
    <?php print theme('virginsport_share_buttons',
      array(
        'facebook_text' => t("@participantName has just crossed the finish line at @eventName with a time of @finishTime! Let's celebrate with a beer (or three).", array('@participantName' => '{{ participantName }}', '@finishTime' => '{{ finishTime }}', '@eventName' => check_plain($event_name))),
        'twitter_text' => t('@participantName just rocked the @eventName with a time of @finishTime. 3 Cheers!', array('@participantName' => '{{ participantName }}', '@finishTime' => '{{ finishTime }}', '@eventName' => check_plain($event_name))),
        'subject' => t('@participantName has just crossed the finish line @eventName', array('@participantName' => '{{ participantName }}', '@eventName' => check_plain($event_name))),
        'body' => t("You know how hard @participantName has been training for @eventName at @festivalName and we've got exciting news. @participantName has just crossed the finish line with a time of @finishTime! Give them a high five and treat them to a drink at the pub.", array('@participantName' => '{{ participantName }}', '@finishTime' => '{{ finishTime }}', '@eventName' => check_plain($event_name), '@festivalName' => check_plain($festival_name))),
        'use_placeholder' => TRUE,
        'classes' => 'vs-share-button--results'
      )
    ); ?>
  </script>
<?php endif;
