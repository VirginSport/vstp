<?php
/**
 * @file virgin-components--fpp--vs-carousel.tpl.php
 * Main template for virgin components fieldable panel panes vs_carousel
 *
 * Variables available:
 * TODO
 */
?>
<div class="vs-photo-gallery">
  <div class="vs-photo-gallery-wrapper">
    <div class="row">
      <div class="col-xs-12">
        <div class="vs-photo-gallery__image-wrapper">
          <?php foreach ($variables['banners'] as $banner): ?>
            <?php print theme('virginsport_picture', array('atom_id' => $banner['picture']->property('sid'), 'image_style' => 'virgin_original', 'image_classes' => 'vs-photo-gallery__image')); ?>
          <?php endforeach; ?>
        </div>
      </div>
    </div>

    <?php if ($thumbnail == TRUE): ?>
    <div class="row">
      <div class="col-xs-12">
        <div class="vs-photo-gallery__thumbnails-wrapper">
          <?php foreach ($variables['banners'] as $banner): ?>
            <div class="vs-photo-gallery__thumbnail" style="<?php print virginsport_atom_background($banner['picture']->getEntity()); ?>"></div>
          <?php endforeach; ?>
        </div>
      </div>
    </div>
    <?php endif; ?>
  </div>
  <!-- Fullscreen view -->
  <div class="vs-photo-gallery-wrapper--fullscreen modal fade" tabindex="-1" role="dialog" data-backdrop="static">

    <button
      type="button"
      class="close"
      data-dismiss="modal"
      aria-label="Close"
    >
      <span aria-hidden="true">&times;</span>
    </button>

    <div class="vs-photo-gallery__image-wrapper">
      <?php foreach ($variables['banners'] as $banner): ?>
        <?php print theme('virginsport_picture', array('atom_id' => $banner['picture']->property('sid'), 'image_style' => 'virgin_original', 'image_classes' => 'img-fluid')); ?>
      <?php endforeach; ?>
    </div>

    <?php if ($thumbnail == TRUE): ?>
      <div class="vs-photo-gallery__thumbnails-wrapper">
      <?php foreach ($variables['banners'] as $banner): ?>
        <div title="{{ photo.title }}" class="vs-photo-gallery__thumbnail" style="<?php print virginsport_atom_background($banner['picture']->getEntity()); ?>"></div>
      <?php endforeach; ?>
      </div>
    <?php endif; ?>
  </div>
</div>
