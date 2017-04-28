<?php
/**
 * @file
 * Splash Page template.
 */
?>

<div class="vs-splash__wrapper">
  <div class="vs-splash__container">
    <picture class="vs-splash__logo-wrapper">
      <source srcset="<?php print virgin_sport_path('build/public/img/vs-logo-red@2x.png'); ?>" media="(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)">
      <img src="<?php print virgin_sport_path('build/public/img/vs-logo-red.png'); ?>" class="img-fluid" alt="Virgin Sport" title="">
    </picture>

    <p class="vs-splash__text"><?php print t('Select your country'); ?></p>
    <?php if(!empty($regions)): ?>
    <div class="vs-splash__link-wrapper">
      <?php foreach ($regions as $region): ?>
      <a
        href="<?php print virgin_region_add_hostname_protocol($region['hostname']) ?>"
        vs-region-hostname="<?php print $region['hostname'] ?>"
        vs-region-default="<?php print (int) $region['is_default']; ?>"
        class="vs-splash__link"
      >
        <?php if(!empty($region['icon'])): ?>
          <?php print theme('virginsport_picture', array('placeholder' => FALSE, 'atom_id' => $region['icon']->sid, 'image_style' => 'virgin_original', 'image_classes' => 'img-fluid', 'classes' => 'vs-splash__icon')) ?>
        <?php endif; ?>
        <span class="vs-splash__icon-label"><?php print $region['title']; ?></span>
      </a>
      <?php endforeach; ?>
    </div>
    <?php endif; ?>
  </div>
</div>

<style type="text/css">
  body.page-splash { display: none; }
  body.page-splash.page-splash--ready { display: block; }
</style>

<noscript>
  <style type="text/css">
    body { display: block !important; }
  </style>
</noscript>

<script>
  // Delay to avoid flash on redirection
  window.setTimeout(function() {
    document.body.classList.add("page-splash--ready");
  }, 500);
</script>
