<?php
/**
 * @file virgin-components--fpp--vs-photo-gallery.tpl.php
 * Main template for virgin components fieldable panel panes vs_photo-gallery
 *
 * Variables available:
 * @var title
 * Component title
 * @var heading
 * Component heading
 * @var thumbnail
 * Define thumbnails if true
 * @var slides
 * A list of paragraphs
 */
?>
<div class="container">
  <div class="row">
    <div class="vs-component-heading vs-photo-gallery-heading">
      <?php if(!empty($heading)): ?>

        <?php print $heading; ?>
        
      <?php endif; ?>
    </div>
  </div>
</div>
<div class="vs-photo-gallery">
  <div class="vs-photo-gallery-wrapper">
    <div class="row">
      <div class="col-xs-12">
        <div class="vs-photo-gallery__image-wrapper">
          <?php foreach ($variables['slides'] as $slide): ?>
            <?php print theme('virginsport_picture', array('atom_id' => $slide['picture']->property('sid'), 'image_style' => 'virgin_original', 'image_classes' => 'vs-photo-gallery__image')); ?>
          <?php endforeach; ?>
        </div>
      </div>
    </div>
    <?php if ($variables['thumbnail'] == TRUE): ?>
      <div class="row">
        <div class="col-xs-12">
          <div class="vs-photo-gallery__thumbnails-wrapper">
            <?php foreach ($variables['slides'] as $slide): ?>
              <div class="vs-photo-gallery__thumbnail" style="<?php print virginsport_atom_background($slide['picture']->getEntity()); ?>"></div>
            <?php endforeach; ?>
          </div>
        </div>
      </div>
    <?php endif; ?>

  </div>

  <!-- Fullscreen view -->
  <div class="vs-photo-gallery-wrapper--fullscreen modal fade in" tabindex="-1" role="dialog" data-keyboard="true" data-backdrop="static">

    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>

    <div class="vs-photo-gallery__image-wrapper">

      <?php foreach ($variables['slides'] as $slide): ?>
        <?php print theme('virginsport_picture', array('atom_id' => $slide['picture']->property('sid'), 'image_style' => 'virgin_original', 'image_classes' => 'vs-photo-gallery__image')); ?>
      <?php endforeach; ?>

    </div>
    <?php if ($variables['thumbnail'] == TRUE): ?>
      <div class="vs-photo-gallery__thumbnails-wrapper">
        <?php foreach ($variables['slides'] as $slide): ?>
          <div class="vs-photo-gallery__thumbnail" style="<?php print virginsport_atom_background($slide['picture']->getEntity()); ?>"></div>
        <?php endforeach; ?>
      </div>
    <?php endif; ?>
  </div>
</div>
