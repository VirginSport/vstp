<?php
/**
 * @file virgin-components--p--vs-teaser.tpl.php
 * Main template for virgin components paragraph vs_teaser
 *
 * Variables available:
 * $title - Teaser title
 * body - Teaser content
 * teaser_images - An array of teaser atom images
 * arrangement - The layout arrangement
 * outline - The outline text
 * alignment - The layout alignment
 * cta_links - An array with links and its attributes
 */

// Set the right reverse class depending on the aligment
$reverse_map = array(
  'portrait' => 'right',
  'landscape' => 'left',
  'portrait_lower_portrait' => 'left',
  'portrait_large_portrait' => 'right',
  'portrait_landscape' => 'right',
  'landscape_upper_landscape_landscape' => 'left',
  'landscape_square_right' => 'left',
  'portrait_upper_portrait_portrait' => 'left',
  'portrait_square' => 'right'
);

$reverse_class = ($reverse_map[$arrangement] == $alignment) ? 'vs-teaser--reverse' : '';

?>
<div class="vs-teaser">

  <!-- Portrait Template -->
  <div>
    <?php if ($arrangement == 'portrait'): ?>

      <div class="vs-teaser__layout-1-a vs-teaser--portrait <?php print $reverse_class; ?>">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-md-6">
              <div class="vs-teaser__image-scale">
                <?php if(!empty($teaser_images[0]['sid'])): ?>

                  <?php print theme('virginsport_picture', array('atom_id' => $teaser_images[0]['sid'], 'image_style' => 'vs_teaser_portrait', 'image_classes' => 'vs-teaser__image-a')); ?>

                <?php endif; ?>

                <?php if(!empty($outline)): ?>
                  <span class="vs-teaser__title vs-outline hidden-md-up"><?php print $outline; ?></span>
                <?php endif; ?>
              </div>
            </div>
            <div class="col-xs-12 col-md-6">
              <div class="vs-teaser__content">
                <?php if(!empty($title)): ?>
                  <h3 class="vs-teaser__subtitle"><?php print $title; ?></h3>
                <?php endif; ?>

                <?php if(!empty($body)): ?>
                  <div class="vs-teaser__text"><?php print $body; ?></div>
                <?php endif; ?>

                <?php print
                  theme('virginsport_cta_links',
                    array(
                      'links' => $cta_links,
                      'classes' => 'vs-teaser__cta-btn'
                    )
                  );
                ?>

                <?php if(!empty($outline)): ?>
                  <span class="vs-teaser__title vs-outline hidden-sm-down"><?php print $outline; ?></span>
                <?php endif; ?>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Landscape Template -->

    <?php elseif ($arrangement == 'landscape'): ?>

      <div class="vs-teaser__layout-1-b vs-teaser--landscape <?php print $reverse_class; ?>">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-md-6">
              <div class="vs-teaser__content">
                <?php if(!empty($title)): ?>
                  <h3 class="vs-teaser__subtitle"><?php print $title; ?></h3>
                <?php endif; ?>

                <?php if(!empty($body)): ?>
                  <div class="vs-teaser__text"><?php print $body; ?></div>
                <?php endif; ?>

                <?php print
                  theme('virginsport_cta_links',
                    array(
                      'links' => $cta_links,
                      'classes' => 'vs-teaser__cta-btn hidden-sm-down'
                    )
                  );
                ?>
              </div>
            </div>
            <div class="col-xs-12 col-md-6">
              <?php if(!empty($teaser_images[0]['sid'])): ?>
                <?php print theme('virginsport_picture', array('atom_id' => $teaser_images[0]['sid'], 'image_style' => 'vs_teaser_landscape', 'image_classes' => 'vs-teaser__image-a')); ?>
              <?php endif; ?>
              <div class="vs-teaser__content">
                <?php print
                  theme('virginsport_cta_links',
                    array(
                      'links' => $cta_links,
                      'classes' => 'vs-teaser__cta-btn hidden-md-up'
                    )
                  );
                ?>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Portrait, Lower Portrait -->

    <?php elseif ($arrangement == 'portrait_lower_portrait'): ?>

      <div class="vs-teaser__layout-2-a vs-teaser--landscape-lowerlandscape <?php print $reverse_class; ?>">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-md-6">
              <?php if(!empty($outline)): ?>
                <span class="vs-teaser__title vs-outline"><?php print $outline; ?></span>
              <?php endif; ?>

              <?php if(!empty($teaser_images[0]['sid'])): ?>
                <?php print theme('virginsport_picture', array('atom_id' => $teaser_images[0]['sid'], 'image_style' => 'vs_teaser_landscape', 'image_classes' => 'hidden-md-up vs-teaser__image-a')); ?>
              <?php endif; ?>

              <div class="vs-teaser__content">
                <?php if(!empty($title)): ?>
                  <h3 class="vs-teaser__subtitle"><?php print $title; ?></h3>
                <?php endif; ?>

                <?php if(!empty($body)): ?>
                  <div class="vs-teaser__text"><?php print $body; ?></div>
                <?php endif; ?>

                <?php print
                  theme('virginsport_cta_links',
                    array(
                      'links' => $cta_links,
                      'classes' => 'vs-teaser__cta-btn'
                    )
                  );
                ?>
              </div>
            </div>
            <div class="col-xs-12 col-md-6">
              <div class="vs-teaser__image-scale">
                <?php if(!empty($teaser_images[0]['sid'])): ?>
                  <?php print theme('virginsport_picture', array('atom_id' => $teaser_images[0]['sid'], 'image_style' => 'vs_teaser_landscape', 'image_classes' => 'hidden-sm-down vs-teaser__image-a')); ?>
                <?php endif; ?>

                <?php if(!empty($teaser_images[1]['sid'])): ?>
                  <?php print theme('virginsport_picture', array('atom_id' => $teaser_images[1]['sid'], 'image_style' => 'vs_teaser_landscape', 'image_classes' => 'hidden-sm-down vs-teaser__image-b')); ?>
                <?php endif; ?>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Portrait, Large Portrait -->

    <?php elseif ($arrangement == 'portrait_large_portrait'): ?>

      <div class="vs-teaser__layout-2-b vs-teaser--portrait-upperportrait <?php print $reverse_class; ?>">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-md-6">
              <div class="vs-teaser__content">
                <?php if(!empty($title)): ?>
                  <h3 class="vs-teaser__subtitle hidden-md-up"><?php print $title; ?></h3>
                <?php endif; ?>

                <?php if(!empty($body)): ?>
                  <div class="vs-teaser__text hidden-md-up"><?php print $body; ?></div>
                <?php endif; ?>
              </div>
              <div class="vs-teaser__image-scale">
                <?php if(!empty($teaser_images[0]['sid'])): ?>
                  <?php print theme('virginsport_picture', array('atom_id' => $teaser_images[0]['sid'], 'image_style' => 'vs_teaser_portrait', 'image_classes' => 'vs-teaser__image-a')); ?>
                <?php endif; ?>

                <?php if(!empty($teaser_images[1]['sid'])): ?>
                  <?php print theme('virginsport_picture', array('atom_id' => $teaser_images[1]['sid'], 'image_style' => 'vs_teaser_portrait', 'image_classes' => 'vs-teaser__image-b hidden-sm-down')); ?>
                <?php endif; ?>
              </div>
            </div>
            <div class="col-xs-12 col-md-6">
              <div class="vs-teaser__content">
                <?php if(!empty($title)): ?>
                  <h3 class="vs-teaser__subtitle hidden-sm-down"><?php print $title; ?></h3>
                <?php endif; ?>

                <?php if(!empty($body)): ?>
                  <div class="vs-teaser__text hidden-sm-down"><?php print $body; ?></div>
                <?php endif; ?>

                <?php print
                  theme('virginsport_cta_links',
                    array(
                      'links' => $cta_links,
                      'classes' => 'vs-teaser__cta-btn hidden-sm-down'
                    )
                  );
                ?>

                <?php if(!empty($teaser_images[1]['sid'])): ?>
                  <?php print theme('virginsport_picture', array('atom_id' => $teaser_images[1]['sid'], 'image_style' => 'vs_teaser_portrait', 'image_classes' => 'vs-teaser__image-b hidden-md-up')); ?>
                <?php endif; ?>

                <?php print
                  theme('virginsport_cta_links',
                    array(
                      'links' => $cta_links,
                      'classes' => 'vs-teaser__cta-btn hidden-md-up'
                    )
                  );
                ?>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Portrait Landscape -->

    <?php elseif ($arrangement == 'portrait_landscape'): ?>
      <div class="vs-teaser__layout-2-c vs-teaser--portrait-landscape <?php print $reverse_class; ?>">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-md-6">
              <div class="vs-teaser_content">
                <?php if(!empty($title)): ?>
                  <h3 class="vs-teaser__subtitle hidden-md-up"><?php print $title; ?></h3>
                <?php endif; ?>

                <?php if(!empty($body)): ?>
                  <div class="vs-teaser__text hidden-md-up"><?php print $body; ?></div>
                <?php endif; ?>
              </div>

              <div class="vs-teaser__image-scale">
                <?php if(!empty($teaser_images[0]['sid'])): ?>
                  <?php print theme('virginsport_picture', array('atom_id' => $teaser_images[0]['sid'], 'image_style' => 'vs_teaser_portrait', 'image_classes' => 'vs-teaser__image-a hidden-sm-down')); ?>
                <?php endif; ?>

                <?php if(!empty($teaser_images[1]['sid'])): ?>
                  <?php print theme('virginsport_picture', array('atom_id' => $teaser_images[1]['sid'], 'image_style' => 'vs_teaser_landscape', 'image_classes' => 'vs-teaser__image-b')); ?>
                <?php endif; ?>
              </div>
            </div>
            <div class="col-xs-12 col-md-6">
              <div class="vs-teaser__content">
                <?php if(!empty($title)): ?>
                  <h3 class="vs-teaser__subtitle hidden-sm-down"><?php print $title; ?></h3>
                <?php endif; ?>

                <?php if(!empty($body)): ?>
                  <div class="vs-teaser__text hidden-sm-down"><?php print $body; ?></div>
                <?php endif; ?>
                <?php print
                  theme('virginsport_cta_links',
                    array(
                      'links' => $cta_links,
                      'classes' => 'vs-teaser__cta-btn'
                    )
                  );
                ?>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Portrait, Upper Portrait, Portrait -->

    <?php elseif ($arrangement == 'portrait_upper_portrait_portrait'): ?>

      <div class="vs-teaser__layout-3-a vs-teaser--portrait-upperportrait-portrait <?php print $reverse_class; ?>">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-md-6">
              <div class="vs-teaser__content">
                <?php if(!empty($outline)): ?>
                  <span class="vs-teaser__title vs-outline"><?php print $outline; ?></span>
                <?php endif; ?>

                <?php if(!empty($title)): ?>
                  <h3 class="vs-teaser__subtitle hidden-sm-down"><?php print $title; ?></h3>
                <?php endif; ?>

                <?php if(!empty($body)): ?>
                  <div class="vs-teaser__text hidden-sm-down"><?php print $body; ?></div>
                <?php endif; ?>
                <?php print
                  theme('virginsport_cta_links',
                    array(
                      'links' => $cta_links,
                      'classes' => 'vs-teaser__cta-btn hidden-sm-down'
                    )
                  );
                ?>
              </div>
            </div>
            <div class="col-xs-12 col-md-6">
              <div class="vs-teaser__image-scale">
                <?php if(!empty($teaser_images[0]['sid'])): ?>
                  <?php print theme('virginsport_picture', array('atom_id' => $teaser_images[0]['sid'], 'image_style' => 'vs_teaser_landscape', 'image_classes' => 'vs-teaser__image-b')); ?>
                <?php endif; ?>

                <div class="vs-teaser__content">
                  <?php if(!empty($title)): ?>
                    <h3 class="vs-teaser__subtitle hidden-md-up"><?php print $title; ?></h3>
                  <?php endif; ?>

                  <?php if(!empty($body)): ?>
                    <div class="vs-teaser__text hidden-md-up"><?php print $body; ?></div>
                  <?php endif; ?>

                  <?php if(!empty($teaser_images[1]['sid'])): ?>
                    <?php print theme('virginsport_picture', array('atom_id' => $teaser_images[1]['sid'], 'image_style' => 'vs_teaser_landscape', 'image_classes' => 'vs-teaser__image-a hidden-sm-down')); ?>
                  <?php endif; ?>

                  <?php if(!empty($teaser_images[2]['sid'])): ?>
                    <?php print theme('virginsport_picture', array('atom_id' => $teaser_images[2]['sid'], 'image_style' => 'vs_teaser_landscape', 'image_classes' => 'vs-teaser__image-c hidden-sm-down')); ?>
                  <?php endif; ?>

                  <?php print
                    theme('virginsport_cta_links',
                      array(
                        'links' => $cta_links,
                        'classes' => 'vs-teaser__cta-btn hidden-md-up'
                      )
                    );
                  ?>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Landscape, Square Right -->

    <?php elseif ($arrangement == 'landscape_square_right'): ?>

      <div class="vs-teaser__layout-2-d vs-teaser--landscape-square <?php print $reverse_class; ?>">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-md-5">
              <?php if(!empty($outline)): ?>
                <span class="vs-teaser__title vs-outline hidden-sm-down hidden-lg-up"><?php print $outline; ?></span>
              <?php endif; ?>

              <div class="vs-teaser__content">
                <?php if(!empty($title)): ?>
                  <h3 class="vs-teaser__subtitle"><?php print $title; ?></h3>
                <?php endif; ?>

                <?php if(!empty($body)): ?>
                  <div class="vs-teaser__text"><?php print $body; ?></div>
                <?php endif; ?>

                <?php print
                  theme('virginsport_cta_links',
                    array(
                      'links' => $cta_links,
                      'classes' => 'vs-teaser__cta-btn hidden-sm-down'
                    )
                  );
                ?>
              </div>
            </div>
            <div class="col-xs-12 col-md-7">
              <div class="vs-teaser__image-scale">
                <?php if(!empty($outline)): ?>
                  <span class="vs-teaser__title vs-outline hidden-md-up"><?php print $outline; ?></span>
                <?php endif; ?>

                <?php if(!empty($teaser_images[0]['sid'])): ?>
                  <?php print theme('virginsport_picture', array('atom_id' => $teaser_images[0]['sid'], 'image_style' => 'vs_teaser_square', 'image_classes' => 'vs-teaser__image-a hidden-sm-down')); ?>
                <?php endif; ?>

                <?php if(!empty($teaser_images[1]['sid'])): ?>
                  <?php print theme('virginsport_picture', array('atom_id' => $teaser_images[1]['sid'], 'image_style' => 'vs_teaser_landscape', 'image_classes' => 'vs-teaser__image-b')); ?>
                <?php endif; ?>

                <div class="vs-teaser__coontent">
                  <?php print
                    theme('virginsport_cta_links',
                      array(
                        'links' => $cta_links,
                        'classes' => 'vs-teaser__cta-btn hidden-md-up'
                      )
                    );
                  ?>
                </div>
              </div>
            </div>
            <div class="col-xs-12">
              <?php if(!empty($outline)): ?>
                <span class="vs-teaser__title vs-outline hidden-md-down"><?php print $outline; ?></span>
              <?php endif; ?>
            </div>
          </div>
        </div>
      </div>

      <!-- Portrait, Square -->

    <?php elseif ($arrangement == 'portrait_square'): ?>

      <div class="vs-teaser__layout-2-e vs-teaser--square-portrait <?php print $reverse_class; ?>">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-md-6">
              <div class="vs-teaser__content">
                <?php if(!empty($title)): ?>
                  <h3 class="vs-teaser__subtitle hidden-md-up"><?php print $title; ?></h3>
                <?php endif; ?>

                <?php if(!empty($body)): ?>
                  <div class="vs-teaser__text hidden-md-up"><?php print $body; ?></div>
                <?php endif; ?>
              </div>
              <div class="vs-teaser__image-scale">
                <?php if(!empty($teaser_images[0]['sid'])): ?>
                  <?php print theme('virginsport_picture', array('atom_id' => $teaser_images[0]['sid'], 'image_style' => 'vs_teaser_portrait', 'image_classes' => 'vs-teaser__image-a')); ?>
                <?php endif; ?>

                <?php if(!empty($teaser_images[1]['sid'])): ?>
                  <?php print theme('virginsport_picture', array('atom_id' => $teaser_images[1]['sid'], 'image_style' => 'vs_teaser_square', 'image_classes' => 'vs-teaser__image-b hidden-sm-down')); ?>
                <?php endif; ?>
              </div>
            </div>
            <div class="col-xs-12 col-md-6">
              <div class="vs-teaser__content">
                <?php if(!empty($title)): ?>
                  <h3 class="vs-teaser__subtitle hidden-sm-down"><?php print $title; ?></h3>
                <?php endif; ?>

                <?php if(!empty($body)): ?>
                  <div class="vs-teaser__text hidden-sm-down"><?php print $body; ?></div>
                <?php endif; ?>

                <?php print
                  theme('virginsport_cta_links',
                    array(
                      'links' => $cta_links,
                      'classes' => 'vs-teaser__cta-btn'
                    )
                  );
                ?>
              </div>
            </div>
          </div>
        </div>
      </div>

    <?php endif; ?>
  </div>
</div>
