<?php
/**
 * @file virgin-components--fpp--vs-video-block.tpl.php
 * Main template for virgin components fieldable panel panes vs_video_block
 *
 * Variables available:
 * TODO
 */
?>

<div class="vs-video vs-video--block">
  <div class="vs-video__wrapper" style="<?php print virginsport_atom_background($poster->getEntity()); ?>">
    <div class="vs-video__video-wrapper hidden-xs-down">
      <video
        muted
        loop
        class="vs-video__video vs-video-block__video"
        autoplay
        poster="<?php print virginsport_atom_url($poster->getEntity()); ?>"
      >
        <source src="<?php print $video_url; ?>" type="video/mp4">
      </video>
    </div>

    <?php if(!empty($title)): ?>
      <div class="vs-video__content-wrapper">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3 text-xs-center">
              <h2 class="vs-video__title"><?php print check_plain($title); ?></h2>
            </div>
          </div>
        </div>
      </div>
    <?php endif; ?>
  </div>
</div>
