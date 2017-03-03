
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

<div class="container-fluid">
  <div class="row">
    <div class="vs-promo-banner-block-wrapper">
      <div class="vs-promo-banner__background" style="<?php print virginsport_atom_background($image_atom->getEntity()); ?>"></div>
      <div class="col-xs-12 vs-promo-banner__content-wrapper">
        <h1 class="vs-promo-banner__title"><?php print $race_name; ?></h1>
        <div class="vs-promo-banner__content">
          <p><?php print $race_description; ?></p>
        </div>
        <a href="<?php print $link_url; ?>" class="btn vs-btn vs-btn--min-sm vs-btn--gradient-<?php print $brand_color; ?>"><?php print $link_label; ?></a>
      </div>
      <div class="hidden-md-down vs-promo-banner__caption"></div>
    </div>
  </div>
</div>
