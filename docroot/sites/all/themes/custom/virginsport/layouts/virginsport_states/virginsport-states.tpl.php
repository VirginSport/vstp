<?php

/**
 * @file
 * Template for virginsport_states display plugin.
 *
 * Variables:
 * - $id: An optional CSS id to use for the layout.
 * - $content: An array of content, each item in the array is keyed to one
 *   panel of the layout.
 * - $editor_mode: If the template is being used by an editor
 * - $state: The state of the entity
 * - $entity_type: The type of the entity
 */

if (!isset($editor_mode) && !isset($state)) {
  $admin_mode = TRUE;
  $editor_mode = TRUE;
  $state = '';
}

?>

<div class="vs-head-region">
  <?php print $content['first']; ?>
</div>

<?php if ($editor_mode || $state == 'announced'): ?>
  <div data-vs-state="announced">
    <?php print $content['announced_first']; ?>
    <?php print $content['announced_second']; ?>
    <?php print $content['announced_third']; ?>
    <?php print $content['announced_fourth']; ?>
  </div>
<?php endif; ?>

<?php if ($editor_mode || $state == 'open'): ?>
  <div data-vs-state="open">
    <?php print $content['open_first']; ?>
    <?php print $content['open_second']; ?>
    <?php print $content['open_third']; ?>
    <?php print $content['open_fourth']; ?>
  </div>
<?php endif; ?>

<?php if ($editor_mode || $state == 'in_progress'): ?>
  <div data-vs-state="in_progress">
    <?php print $content['in_progress_first']; ?>
    <?php print $content['in_progress_second']; ?>
    <?php print $content['in_progress_third']; ?>
    <?php print $content['in_progress_fourth']; ?>
  </div>
<?php endif; ?>

<?php if ($editor_mode || $state == 'over'): ?>
<div data-vs-state="over">
  <?php print $content['over_first']; ?>
  <?php print $content['over_second']; ?>
  <?php print $content['over_third']; ?>
  <?php print $content['over_fourth']; ?>
</div>
<?php endif; ?>

<?php if ($editor_mode || $state == 'closed'): ?>
<div data-vs-state="closed">
  <?php print $content['closed_first']; ?>
  <?php print $content['closed_second']; ?>
  <?php print $content['closed_third']; ?>
  <?php print $content['closed_fourth']; ?>
</div>
<?php endif; ?>

<?php if ($editor_mode && empty($admin_mode)): ?>
  <div class="virginsport-states__controls">
    <span class="virginsport-states__label"><?php print t('Previewing State'); ?></span>

    <select class="virginsport-states__select">
      <option value="announced"><?php print t('Announced'); ?></option>
      <option value="open"><?php print t('Open'); ?></option>
      <option value="in_progress"><?php print t('In Progress'); ?></option>

      <?php if ($entity_type == 'festival'): ?>
        <option value="over"><?php print t('Over'); ?></option>
      <?php endif; ?>

      <?php if ($entity_type == 'event'): ?>
        <option value="closed"><?php print t('Closed'); ?></option>
      <?php endif; ?>
    </select>
  </div>

  <style>
    .virginsport-states__controls {
      position: relative;
      z-index: 20;
      background-color: white;
      padding: 10px;
      border-top: 1px solid #ececec;
      border-bottom: 1px solid #ececec;
      text-align: center;
    }

    .virginsport-states__label {
      padding-right: 10px;
      vertical-align: middle;
      display: inline-block;
      color: #888888;
    }

    .virginsport-states__select {
      display: inline-block !important;
    }

    .virginsport-states__controls .chosen-container {
      display: none !important;
    }

    [data-vs-state] {
      display: none;
    }

    [data-vs-state="<?php print $state; ?>"] {
      display: block;
    }
  </style>

  <script>
    (function () {
      document.addEventListener('DOMContentLoaded', onLoad, false);

      function onLoad() {
        window.Drupal.behaviors.virginSportStatesLayout = {
          attach: activateStateChange
        };
      }

      function activateStateChange() {
        var $ = window.jQuery;
        var current_state = window.virginSportStateSelected || "<?php print $state; ?>";
        var $select = $('.virginsport-states__select');

        toggleState(current_state)

        $select
          .val(current_state)
          .on('change', function (event, data) {
            var value = $select.val();
            window.virginSportStateSelected = value;
            toggleState(value);
          })
        ;

        function toggleState(state) {
          var $states = $('[data-vs-state]');

          $states.hide();
          $states.filter('[data-vs-state=' + state + ']').show();
        }
      }
    }());
  </script>
<?php endif; ?>
