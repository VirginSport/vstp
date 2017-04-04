<?php
/**
 * @file virgin-components--fpp--vs-my-laps-track-my-runner.tpl.php
 * Main template for virgin components fieldable panel panes vs_mylaps_track_my_runner
 *
 * Variables available:
 * @var int $mylaps_id
 *  The MyLaps ID for the race
 */
?>

<?php if (empty($mylaps_id)): ?>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <?php print t('The MyLaps ID for the event is not set in either the component or event.'); ?>
      </div>
    </div>
  </div>
<?php endif; ?>

<?php if (!empty($mylaps_id)): ?>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <iframe class="vs-mylaps" src="<?php print sprintf('//live.sporthive.com/event/%s/live?mode=iframe', $mylaps_id) ;?>"></iframe>
      </div>
    </div>
  </div>
<?php endif; ?>
