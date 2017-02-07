<?php

/**
 * @file
 * Template file for results introduction component.
 *
 * @var string $title
 * @var string $description
 * @var string $link_label
 * @var string $link_url
 * @var string $link_color
 * @var string $brand_color
 * @var string $image_atom
 */

?>

<div class="vs-results-introduction vs-results-introduction--color-<?php print $brand_color; ?>">
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-lg-10 offset-lg-1 col-xl-11 offset-xl-0">
        <div class="vs-results-introduction__image" style="<?php print virginsport_atom_background($image_atom); ?>"></div>
        <div class="vs-results-introductions__wave"></div>
      </div>
      
      <div class="col-xs-12 col-lg-6 offset-lg-6 col-xl-7 offset-xl-5">
        <div class="vs-results-introduction__content">
          <h4 class="vs-results-introduction__title"><?php print check_plain($title); ?></h4>
          <p class="vs-results-introduction__description"><?php print check_plain($description); ?></p>
          <a href="<?php print $link_url; ?>" class="btn vs-btn vs-btn--gradient-<?php print $link_color; ?> vs-results-introduction__button">
            <?php print check_plain($link_label); ?>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
