<?php
/**
 * @file
 * User Tickets template.
 */
?>

<?php foreach ($data as $row): ?>
  <?php if ($upcoming): ?>
    <div class="vs-festival-profile-header vs-festival-profile-header--upcoming">
      <div class="container">
        <div class="row">
          <div class="vs-festival-profile-header__content-wrapper">
            <div class="vs-festival-profile-header__content">
              <div class="vs-festival-profile-header__title">
                <?php print $row['festival_grapher']->fieldGetOne('title_field'); ?>
              </div>
              <div class="vs-festival-profile-header__date">
                <?php print virginsport_date_interval($row['festival_state_grapher']->fieldGetOne('field_start_date'),$row['festival_state_grapher']->fieldGetOne('field_end_date')); ?>
              </div>
              <div class="vs-festival-profile-header__buttons-wrapper">
                <a
                  class="btn vs-btn vs-festival-profile-header__button hidden-md-up vs-btn--min-sm vs-btn--outline-black"
                  href="<?php print url('node/' . $row['festival_grapher']->property('nid')); ?>"
                >
                  <?php print t('View festival'); ?>
                </a>
                <a
                  class="btn vs-btn vs-festival-profile-header__button hidden-sm-down vs-btn--sm vs-btn--outline-black"
                  href="<?php print url('node/' . $row['festival_grapher']->property('nid')); ?>"
                >
                  <?php print t('View festival'); ?>
                </a>
              </div>
            </div>

            <div class="vs-festival-profile-header__tickets">
              <?php print $row['tickets']; ?>
            </div>
          </div>
        </div>
      </div>
    </div>
  <?php else: ?>
    <div class="vs-festival-profile-header vs-festival-profile-header--past vs-festival-profile-header--color-white">
      <div
        class="vs-festival-profile-header__background"
        style="<?php print virginsport_atom_background($row['festival_grapher']->relation('field_header_image')->getEntity()); ?>">
      </div>
      <div class="container">
        <div class="row">
          <div class="vs-festival-profile-header__content-wrapper">
            <div class="vs-festival-profile-header__content">
              <div class="vs-festival-profile-header__title">
                <?php print $row['festival_grapher']->fieldGetOne('title_field'); ?>
              </div>
              <div class="vs-festival-profile-header__date">
                <?php print virginsport_date_interval($row['festival_state_grapher']->fieldGetOne('field_start_date'),$row['festival_state_grapher']->fieldGetOne('field_end_date')); ?>
              </div>
              <div class="vs-festival-profile-header__buttons-wrapper">
                <a
                  class="btn vs-btn vs-festival-profile-header__button hidden-md-up vs-btn--min-sm vs-btn--gradient-<?php print $row['festival_grapher']->fieldGetOne('field_brand_color'); ?>"
                  href="<?php print url('node/' . $row['festival_grapher']->property('nid')); ?>"
                >
                  <?php print t('Sign up for the next year'); ?>
                </a>
                <a
                  class="btn vs-btn vs-festival-profile-header__button hidden-sm-down vs-btn--lg vs-btn--min-lg vs-btn--gradient-<?php print $row['festival_grapher']->fieldGetOne('field_brand_color'); ?>"
                  href="<?php print url('node/' . $row['festival_grapher']->property('nid')); ?>"
                >
                  <?php print t('Sign up for the next year'); ?>
                </a>
              </div>
            </div>
            <div class="vs-festival-profile-header__tickets">
              <?php print $row['tickets']; ?>
            </div>
          </div>
        </div>
      </div>
    </div>
  <?php endif; ?>
<?php endforeach; ?>
