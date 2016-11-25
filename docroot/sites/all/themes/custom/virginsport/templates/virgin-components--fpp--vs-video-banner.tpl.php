<?php
/**
 * @file virgin-components--fpp--vs-video-block.tpl.php
 * Main template for virgin components fieldable panel panes vs_video_block
 *
 * Variables available:
 * TODO
 */

$modal_id = uniqid();
?>

<div class="vs-video">
  <div class="vs-video__wrapper">
    <button class="vs-video__close">X</button>
    <?php if (!empty($header_image_grapher->property('sid'))): ?>
      <div
        class="vs-video__header-image"
        style="<?php print virginsport_atom_background($header_image_grapher->getEntity()); ?>"
      >
      </div>
    <?php endif; ?>

    <?php if (!empty($video_url)): ?>
      <div class="vs-video__video-wrapper hidden-xs-down">
        <video
          loop
          class="vs-video__video"
          preload="none"
          src="<?php print check_plain($video_url); ?>"
          poster="<?php print virginsport_atom_url($poster->getEntity()); ?>"
        >
        </video>
      </div>
    <?php endif; ?>

    <div class="slider slider hidden-sm-up">
      <?php foreach ($slider_images as $atom_grapher): ?>
        <?php if (!empty($atom_grapher->property('sid'))): ?>
          <div>
            <img src="<?php print virginsport_atom_url($atom_grapher->getEntity()); ?>">
          </div>
        <?php endif; ?>
      <?php endforeach; ?>
    </div>

    <?php if(!empty($title)): ?>
      <div class="vs-video__content-wrapper">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3 text-xs-center">
              <h2 class="vs-video__title"><?php print check_plain($title); ?></h2>
              <?php if(!empty($cta_links)): ?>
                <?php print
                  theme('virginsport_cta_links',
                    array(
                      'links' => $cta_links,
                      'classes' => 'vs-btn--sm-min vs-video__cta'
                    )
                  );
                ?>
              <?php elseif (!empty($overlay_video_url)): ?>
                <a href="#" class="vs-video__play-button" data-toggle="modal" data-target="vs-video-modal-<?php print $modal_id; ?>"></a>
              <?php else: ?>
                <a href="#" class="vs-video__arrow"></a>
              <?php endif; ?>
            </div>
          </div>
        </div>
      </div>
    <?php endif; ?>
  </div>
</div>

<?php if (!empty($overlay_video_url)): ?>
  <div id="vs-video-modal-<?php print $modal_id; ?>" class="modal" role="dialog">
    <div class="vs-video__vertical-aligner">
      <div class="modal-dialog vs-video__vertical-align">
        <div class="modal-content">
          <div class="modal-body">
            <div class="vs-video">
              <div class="vs-video__wrapper">
                <div class="vs-video__video-wrapper hidden-xs-down">
                  <video
                    loop
                    preload="none"
                    src="<?php print $overlay_video_url; ?>"
                    poster="<?php print virginsport_atom_url($overlay_poster->getEntity()); ?>"
                  >
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
<?php endif; ?>
