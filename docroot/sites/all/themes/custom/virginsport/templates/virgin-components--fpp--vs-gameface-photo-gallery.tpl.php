<?php
/**
 * @file virgin-components--fpp--vs-gameface-photo-gallery.tpl.php
 * Main template for virgin components fieldable panel panes vs_gameface_gallery
 *
 * Variables available:
 *  $url - The Gameface iframe url
 */
?>

<div class="vs-gameface-gallery">
  <?php if (!empty($url)): ?>
    <?php if (!empty($component_heading)): ?>
      <div class="container">
        <div class="row">
          <div class="vs-component-heading vs-gameface-gallery-heading">
            <?php print check_plain($component_heading); ?>
          </div>
        </div>
      </div>
    <?php endif; ?>
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <iframe scrolling="no" class="vs-iframe vs-iframe--gameface" src="<?php print url($url); ?>"></iframe>
        </div>
      </div>
    </div>
  <?php endif; ?>
</div>
