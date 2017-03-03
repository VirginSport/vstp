
<?php

/**
 * @file
 * Template file for results overview banner component.
 *
 * @var string $race_name
 * @var string $race_date
 * @var string $race_description
 * @var string $link_label
 * @var string $link_url
 * @var string $brand_color
 * @var string $brand_pattern
 */
?>

<div class="container">
  <div class="row">
    <div class="vs-results-overview-banner-block-wrapper vs-results-overview-banner--color-<?php print $brand_color; ?>">
      <div class="col-xs-12">
        <div class="vs-results-overview-banner__background" style="<?php print virginsport_atom_background($image_atom); ?>"></div>
        <div class="row">
          <div class="col-xs-12">
            <div class="vs-results-overview-banner__content-wrapper">
              <h2 class="vs-results-overview-banner__title"><?php print check_plain($race_name); ?></h2>
              <div class="vs-results-overview-banner__content">
                <p><?php print check_plain($race_description); ?></p>
              </div>
              <a href="<?php print $link_url; ?>" class="btn vs-btn vs-btn--min-sm vs-results-overview-banner_button vs-btn--gradient-<?php print $brand_color; ?>"><?php print check_plain($link_label); ?></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
