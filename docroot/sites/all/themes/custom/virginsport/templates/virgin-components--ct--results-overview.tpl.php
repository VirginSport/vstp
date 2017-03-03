
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

<div class="vs-results-overview-banner vs-results-overview-banner--color-<?php print $brand_color; ?>" style="<?php print virginsport_atom_background($image_atom->getEntity()); ?>">
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <?php print $race_name; ?>
        <?php print $race_date; ?>
        <?php print $race_description; ?>
        <a href="<?php print $link_url; ?>"><?php print $link_label; ?></a>
      </div>
    </div>
  </div>
</div>
