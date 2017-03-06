<?php

/**
 * @file
 * Template file for results introduction component.
 */

?>

<div class="vs-results-introduction vs-results-introduction--color-<?php print $brand_color; ?>">
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-lg-10 offset-lg-1 col-xl-11 offset-xl-0">
        <div class="vs-results-introduction__image" style="<?php print virginsport_atom_background($atom->getEntity()); ?>"></div>
      </div>
      
      <div class="col-xs-12 col-lg-6 offset-lg-6 col-xl-7 offset-xl-5">
        <div class="vs-results-introduction__content">
          <h4 class="vs-results-introduction__title"><?php print t('Results'); ?></h4>
          <p class="vs-results-introduction__description"><?php print $description; ?></p>
          <div class="vs-results-introduction__button-wrapper">
            <?php print
              theme('virginsport_cta_links',
                array(
                  'links' => $cta_links,
                  'classes' => 'vs-results-introduction__button'
                )
              );
            ?>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
