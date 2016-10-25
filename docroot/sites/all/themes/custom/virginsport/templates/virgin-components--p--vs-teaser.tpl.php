<?php
/**
 * @file virgin-components--p--vs-teaser.tpl.php
 * Main template for virgin components paragraph vs_teaser
 *
 * Variables available:
 * title
 * body
 * teaser_images
 * arrangement
 * outline
 * alignment
 * cta_links
 */

$reverse_class = ($alignment == 'right') ? 'vs-teaser--reverse' : '';

?>

<div class="vs-teaser">

  <!-- Portrait Template -->

  <?php if ($arrangement == 'portrait'): ?>

    <div class="vs-teaser__layout-1-a vs-teaser--portrait <?php print $reverse_class; ?>">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-6">
            <div class="vs-teaser__image-scale">
              <?php print theme('virginsport_picture', array('atom_id' => $teaser_images[0]['sid'], 'image_style' => 'vs_teaser_portrait', 'image_classes' => 'vs-teaser__image-a')); ?>
              <span class="vs-teaser__title hidden-md-up"><?php print $outline; ?></span>
            </div>
          </div>
          <div class="col-xs-12 col-md-6">
            <h3 class="vs-teaser__subtitle"><?php print $title; ?></h3>
            <div class="vs-teaser__text"><?php print $body; ?></div>
            <span class="vs-teaser__title hidden-sm-down"><?php print $outline; ?></span>
          </div>
        </div>
      </div>
    </div>

  <?php endif; ?>

  <!-- Landscape Template -->

  <?php if ($arrangement == 'landscape'): ?>

    <div class="vs-teaser__layout-1-b vs-teaser--landscape <?php print $reverse_class; ?>">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-6">
            <h3 class="vs-teaser__subtitle"><?php print $title; ?></h3>
            <div class="vs-teaser__text"><?php print $body; ?></div>
          </div>
          <div class="col-xs-12 col-md-6">
            <?php print theme('virginsport_picture', array('atom_id' => $teaser_images[0]['sid'], 'image_style' => 'vs_teaser_landscape', 'image_classes' => 'vs-teaser__image-a')); ?>
          </div>
        </div>
      </div>
    </div>

  <?php endif; ?>

  <!-- Portrait, Lower Portrait -->

  <?php if ($arrangement == 'portrait_lower_portrait'): ?>

    <div class="vs-teaser__layout-2-a vs-teaser--landscape-lowerlandscape <?php print $reverse_class; ?>">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-6">
            <span class="vs-teaser__title"><?php print $outline; ?></span>
            <?php print theme('virginsport_picture', array('atom_id' => $teaser_images[0]['sid'], 'image_style' => 'vs_teaser_landscape', 'image_classes' => 'hidden-md-up vs-teaser__image-a')); ?>
            <h3 class="vs-teaser__subtitle"><?php print $title; ?></h3>
            <div class="vs-teaser__text"><?php print $body; ?></div>
          </div>
          <div class="col-xs-12 col-md-6">
            <div class="vs-teaser__image-scale">
              <?php print theme('virginsport_picture', array('atom_id' => $teaser_images[0]['sid'], 'image_style' => 'vs_teaser_landscape', 'image_classes' => 'hidden-sm-down vs-teaser__image-a')); ?>
              <?php print theme('virginsport_picture', array('atom_id' => $teaser_images[1]['sid'], 'image_style' => 'vs_teaser_landscape', 'image_classes' => 'hidden-sm-down vs-teaser__image-b')); ?>
            </div>
          </div>
        </div>
      </div>
    </div>

  <?php endif; ?>

  <!-- Portrait, Large Portrait -->

  <?php if ($arrangement == 'portrait_large_portrait'): ?>

    <div class="vs-teaser__layout-2-b vs-teaser--portrait-upperportrait <?php print $reverse_class; ?>">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-6">
            <h3 class="vs-teaser__subtitle hidden-md-up"><?php print $title; ?></h3>
            <div class="vs-teaser__text hidden-md-up"><?php print $body; ?></div>
            <div class="vs-teaser__image-scale">
              <?php print theme('virginsport_picture', array('atom_id' => $teaser_images[0]['sid'], 'image_style' => 'vs_teaser_portrait', 'image_classes' => 'vs-teaser__image-a')); ?>
              <?php print theme('virginsport_picture', array('atom_id' => $teaser_images[1]['sid'], 'image_style' => 'vs_teaser_portrait', 'image_classes' => 'vs-teaser__image-b hidden-sm-down')); ?>
            </div>
          </div>
          <div class="col-xs-12 col-md-6">
            <h3 class="vs-teaser__subtitle hidden-sm-down"><?php print $title; ?></h3>
            <div class="vs-teaser__text hidden-sm-down"><?php print $body; ?></div>
            <button class="btn vs-btn vs-btn--orange-light vs-teaser__cta-btn hidden-sm-down">Learn more</button>
            <?php print theme('virginsport_picture', array('atom_id' => $teaser_images[1]['sid'], 'image_style' => 'vs_teaser_portrait', 'image_classes' => 'vs-teaser__image-b hidden-md-up')); ?>
            <button class="btn vs-btn vs-btn--orange-light vs-teaser__cta-btn hidden-md-up">Learn more</button>
          </div>
        </div>
      </div>
    </div>

  <?php endif; ?>

  <!-- Portrait Landscape -->

  <?php if ($arrangement == 'portrait_landscape'): ?>

    <div class="vs-teaser__layout-2-c vs-teaser--portrait-landscape <?php print $reverse_class; ?>">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-6">
            <h3 class="vs-teaser__subtitle hidden-md-up"><?php print $title; ?></h3>
            <div class="vs-teaser__text hidden-md-up"><?php print $body; ?></div>
            <div class="vs-teaser__image-scale">
              <?php print theme('virginsport_picture', array('atom_id' => $teaser_images[0]['sid'], 'image_style' => 'vs_teaser_portrait', 'image_classes' => 'vs-teaser__image-a hidden-sm-down')); ?>
              <?php print theme('virginsport_picture', array('atom_id' => $teaser_images[1]['sid'], 'image_style' => 'vs_teaser_landscape', 'image_classes' => 'vs-teaser__image-b')); ?>
            </div>
          </div>
          <div class="col-xs-12 col-md-6">
            <h3 class="vs-teaser__subtitle hidden-sm-down"><?php print $title; ?></h3>
            <div class="vs-teaser__text hidden-sm-down"><?php print $body; ?></div>
          </div>
        </div>
      </div>
    </div>

  <?php endif; ?>

  <!-- Portrait, Upper Portrait, Portrait -->

  <?php if ($arrangement == 'portrait_upper_portrait_portrait'): ?>

    <div class="vs-teaser__layout-3-a vs-teaser--portrait-upperportrait-portrait <?php print $reverse_class; ?>">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-6">
            <span class="vs-teaser__title"><?php print $outline; ?></span>
            <h3 class="vs-teaser__subtitle hidden-sm-down"><?php print $title; ?></h3>
            <div class="vs-teaser__text hidden-sm-down"><?php print $body; ?></div>
          </div>
          <div class="col-xs-12 col-md-6">
            <div class="vs-teaser__image-scale">
              <?php print theme('virginsport_picture', array('atom_id' => $teaser_images[0]['sid'], 'image_style' => 'vs_teaser_landscape', 'image_classes' => 'vs-teaser__image-b')); ?>
              <h3 class="vs-teaser__subtitle hidden-md-up"><?php print $title; ?></h3>
              <div class="vs-teaser__text hidden-md-up"><?php print $body; ?></div>
              <?php print theme('virginsport_picture', array('atom_id' => $teaser_images[1]['sid'], 'image_style' => 'vs_teaser_landscape', 'image_classes' => 'vs-teaser__image-a hidden-sm-down')); ?>
              <?php print theme('virginsport_picture', array('atom_id' => $teaser_images[2]['sid'], 'image_style' => 'vs_teaser_landscape', 'image_classes' => 'vs-teaser__image-c hidden-sm-down')); ?>
            </div>
          </div>
        </div>
      </div>
    </div>

  <?php endif; ?>

  <!-- Landscape, Square Right -->

  <?php if ($arrangement == 'landscape_square_right'): ?>

    <div class="vs-teaser__layout-2-d vs-teaser--landscape-square <?php print $reverse_class; ?>">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-5">
            <span class="vs-teaser__title hidden-sm-down hidden-lg-up"><?php print $outline; ?></span>
            <h3 class="vs-teaser__subtitle"><?php print $title; ?></h3>
            <div class="vs-teaser__text"><?php print $body; ?></div>
            <button class="btn vs-btn vs-btn--min-sm vs-btn--transparent vs-teaser__cta-btn hidden-sm-down">View past festivals</button>
          </div>
          <div class="col-xs-12 col-md-7">
            <div class="vs-teaser__image-scale">
              <span class="vs-teaser__title hidden-md-up"><?php print $outline; ?></span>
              <?php print theme('virginsport_picture', array('atom_id' => $teaser_images[0]['sid'], 'image_style' => 'vs_teaser_square', 'image_classes' => 'vs-teaser__image-a hidden-sm-down')); ?>
              <?php print theme('virginsport_picture', array('atom_id' => $teaser_images[1]['sid'], 'image_style' => 'vs_teaser_landscape', 'image_classes' => 'vs-teaser__image-b')); ?>
              <button class="btn vs-btn vs-btn--min-sm vs-btn--transparent vs-teaser__cta-btn hidden-md-up">View past festivals</button>
            </div>
          </div>
          <div class="col-xs-12">
            <span class="vs-teaser__title hidden-md-down"><?php print $outline; ?></span>
          </div>
        </div>
      </div>
    </div>

  <?php endif; ?>
