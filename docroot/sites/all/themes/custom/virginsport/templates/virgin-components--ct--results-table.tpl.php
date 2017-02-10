<?php
/**
 * @file virgin-components--ct--results-table.tpl.php
 * Template for the results table
 *
 * Variables available:
 *
 * @var bool $is_summary
 *  If the results table is to be rendered as a summary (requires event id)
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

?>

<div class="vs-results-container">
  <div class="container">
    <vs-results
      brand-color="<?php print check_plain($brand_color); ?>"
      :has-teaser="<?php print (bool) $is_summary; ?>"
      :has-filter="<?php print (bool) !$is_summary; ?>"
      :has-sub-filter="<?php print (bool) !$is_summary; ?>"
      :is-truncated="<?php print (bool) $is_truncated; ?>"
      replay-path="<?php print check_plain($replay_path); ?>"
      photo-path="<?php print check_plain($photo_path); ?>"
      event-name="<?php print check_plain($event_name); ?>"
      event-date="<?php print check_plain($event_date); ?>"
      event-description="<?php print check_plain($event_description); ?>"
      :max-rows="<?php print (int) $max_rows; ?>"
    ></vs-results>
  </div>
</div>

<?php if ($requires_templates): ?>
<script type="text/x-template" id="tpl-vs-results">
  <div
    class="vs-results"
    v-bind:class="['vs-results--color-' + brandColor, { 'vs-results--sub-filtered': hasSubFilter, 'vs-results--truncated': isTruncated }]"
  >
    <div v-if="hasTeaser" class="vs-results__teaser">
      <div class="vs-results__btn-wrap">
        <a v-if="replayPath" v-bind:href="replayPath" class="vs-results__btn"><?php print t('Replay Run'); ?></a>
        <a v-if="resultsPath" v-bind:href="resultsPath" class="vs-results__btn"><?php print t('View Full Results'); ?></a>
      </div>

      <h4 class="vs-results__title">{{ eventName }}</h4>
      <p class="vs-results__date">{{ eventDate }}</p>
      <p class="vs-results__description">{{ eventDescription }}</p>
    </div>

    <div v-if="hasFilter" class="vs-results__filters">
      <h4 class="vs-results__title"><?php print t('See how they run'); ?></h4>

      <div class="vs-results__form">
        <div class="vs-form-group vs-results__form-select">
          <div class="vs-chosen-wrapper">
            <select id="input-race">
              <option>Main Race</option>
              <option>Hackney Half</option>
            </select>
            <label class="vs-focus-label" for="input-race"><?php print t('Race Type'); ?></label>
          </div>
        </div>

        <div class="clearfix">
          <div class="vs-form-group">
            <input class="form-control" type="text" id="input-runner-name">
            <label class="vs-focus-label" for="input-runner-name"><?php print t("Runner's Name"); ?> <em><?php print t('(optional)'); ?></em></label>
          </div>

          <div class="vs-form-group">
            <input class="form-control" type="text" id="input-bib-number">
            <label class="vs-focus-label" for="input-bib-number"><?php print t("BIB Number"); ?> <em><?php print t('(optional)'); ?></em></label>
          </div>

          <div class="vs-form-group">
            <input class="form-control" type="text" id="input-team-name">
            <label class="vs-focus-label" for="input-team-name"><?php print t("Team Name"); ?> <em><?php print t('(optional)'); ?></em></label>
          </div>

          <div class="vs-form-group">
            <input class="form-control" type="text" id="input-club-name">
            <label class="vs-focus-label" for="input-club-name"><?php print t("Club Name"); ?> <em><?php print t('(optional)'); ?></em></label>
          </div>
        </div>
      </div>

      <a v-if="photoPath" href="{{ photoPath }}" class="vs-results__photos-btn"><?php print t('Event Photos'); ?></a>
      <a v-if="replayPath" href="{{ replayPath }}" class="vs-results__btn vs-results__find-btn"><?php print t('Find'); ?></a>
    </div>

    <div v-if="hasSubFilter" class="vs-results__rankings">
      <vs-results-ranking
        label="<?php print t('Gender'); ?>"
        :options='<?php print json_encode(array(
          'all' => t('All'),
          'male' => t('Male'),
          'female' => t('Female')
        )); ?>'
        :active-key="'male'"
      ></vs-results-ranking>

      <vs-results-ranking
        label="<?php print t('Age'); ?>"
        :options='<?php print json_encode(array(
            'all' => t('All'),
            '16-24' => t('16-24'),
            '25-34' => t('25-34'),
            '35-59' => t('35-59'),
            '60+' => t('60+'))
        );?>'
        :active-key="'all'"
      ></vs-results-ranking>

      <vs-results-ranking
        label="<?php print t('Unit'); ?>"
        :options='<?php print json_encode(array(
          'km' => t('KM'),
          'miles' => t('Miles')
        )); ?>'
        :active-key="'miles'"
      ></vs-results-ranking>
    </div>

    <div class="vs-results__table">
      <div class="vs-results__table-head">
        <span class="vs-result-col vs-result-col-rank"></span>
        <span class="vs-result-col vs-result-col-name"><?php print t('Name'); ?></span>
        <span class="vs-result-col vs-result-col-bib"><?php print t('BIB'); ?></span>
        <span class="vs-result-col vs-result-col-club"><?php print t('Club'); ?></span>
        <span class="vs-result-col vs-result-col-team"><?php print t('Team'); ?></span>
        <span class="vs-result-col vs-result-col-category"><?php print t('Category'); ?></span>
        <span class="vs-result-col vs-result-col-gender"><?php print t('Gender'); ?></span>
        <span class="vs-result-col vs-result-col-pace"><?php print t('Pace/KM'); ?></span>
        <span class="vs-result-col vs-result-col-chip"><?php print t('Chip Time'); ?></span>
      </div>

      <div class="vs-results__table-list">
        <vs-result v-for="i in maxRows"
          :is-open="i == 1"
          :brand-color="brandColor"
          :stages="stages"
          :rank="rankings[i]"
        ></vs-result>
      </div>

      <div v-if="!isTruncated" class="vs-results__footer">
        <a class="vs-results__more-btn" href="#"><?php print t('View More'); ?></a>
      </div>
    </div>
  </div>
</script>
<?php endif; ?>

<?php if ($requires_templates): ?>
<script type="text/x-template" id="tpl-vs-results-ranking">
  <div class="vs-results__ranking">
    <span class="vs-results__ranking-label">{{ label }}</span>
    <ul class="vs-results__ranking-options">
      <li
        v-for="(key, option) in options"
        v-bind:class="{ 'vs-results__ranking--active': (key == activeKey)  }"
        v-on:click="activeKey = key"
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
      v-on:click="toggleOpen()"
      v-bind:class='["vs-result--color-" + brandColor, { "vs-result--open": isOpen }]'
    >
      <div class="vs-result__head">
        <span class="vs-result-col vs-result-col-rank">{{ rank.rank }}</span>
        <span class="vs-result-col vs-result-col-name vs-result__border vs-result__strong">{{ rank.participantFirstName }} {{ rank.participantLastName }}</span>
        <span class="vs-result-col vs-result-col-bib vs-result__border vs-result__muted">{{ rank.participantBibNumber }}</span>
        <span class="vs-result-col vs-result-col-club vs-result__border">{{ rank.participantClub }}</span>
        <span class="vs-result-col vs-result-col-team vs-result__border">{{ rank.participantTeam }}</span>
        <span class="vs-result-col vs-result-col-category vs-result__border">{{ rank.participantCategory }}</span>
        <span class="vs-result-col vs-result-col-gender vs-result__border">{{ rank.participantGender == 'male' ? 'M' : 'F' }}</span>
        <span class="vs-result-col vs-result-col-pace vs-result__border">TODO</span>
        <span class="vs-result-col vs-result-col-chip vs-result__border">{{ rank.chipTime }}</span>
      </div>

      <div class="vs-result__body" v-if="isOpen">
        <div class="vs-result__meta-wrapper">
          <div class="vs-result__meta-first"><span class="vs-result__meta-label"><?php print t('Country'); ?></span> {{ result.country }}</div>
          <div><span class="vs-result__meta-label"><?php print t('City'); ?></span> {{ result.city }}</div>
          <div><span class="vs-result__meta-label"><?php print t('Overall Place'); ?></span> {{ result.generalGunTime }}/{{ result.generalTotal }}</div>
          <div><span class="vs-result__meta-label"><?php print t('Gender Place'); ?></span> {{ result.genderGunTime }}/{{ result.genderTotal }}</div>
          <div class="vs-result__meta-last"><span class="vs-result__meta-label"><?php print t('Division Place'); ?></span> {{ result.categoryGunTime }}/{{ result.categoryTotal }}</div>
        </div>

        <div class="vs-result__times">
          <div class="vs-result__average-label"><?php print t('Average Pace/KM'); ?></div>

          <div>
            <div class="vs-result__time" v-for="p in getPassings()">
              <div class="vs-result__time-average">
                <div class="vs-result__progress">
                  <div class="vs-result__progress-state" v-bind:style='{ "width": getRandomProgress() + "%" }'>9:30</div>
                </div>
              </div>

              <div class="vs-result__time-stage">
                <span class="vs-result__time-stage-name">{{ p.stage.name }}</span>
                <span class="vs-result__time-stage-time">1:50:32</span>
              </div>
            </div>
          </div>
        </div>

        <div class="vs-result__stats">
          <div class="vs-result__stat">
            <span class="vs-result__stat-value">8:12</span>
            <span class="vs-result__stat-label">Average Pace/KM</span>
          </div>

          <div class="vs-result__stat">
            <span class="vs-result__stat-value">2:06:55</span>
            <span class="vs-result__stat-label">Total Time</span>
          </div>
        </div>
      </div>
    </div>
  </script>
<?php endif; ?>
