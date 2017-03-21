<?php

/**
 * @file
 * Template file for results overview component.
 */

?>

<div class="vs-results-overview">
  <div class="container">
    <div class="row">
      <div class="vs-results-overview-banner-block-wrapper vs-results-overview-banner--color-<?php print $brand_color; ?>">
        <div class="col-xs-12">
          <div class="vs-results-overview-banner__background" style="<?php print virginsport_atom_background($atom->getEntity()); ?>"></div>
          <div class="row">
            <div class="col-xs-12">
              <div class="vs-results-overview-banner__content-wrapper">
                <h2 class="vs-results-overview-banner__title"><?php print check_plain($title); ?></h2>
                <div class="vs-results-overview-banner__content">
                  <p><?php print $description; ?></p>
                </div>
                <?php print
                  theme('virginsport_cta_links',
                    array(
                      'links' => $cta_links,
                      'classes' => 'vs-btn--min-sm vs-results-overview-banner_button'
                    )
                  );
                ?>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

