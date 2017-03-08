<?php
/**
 * @file virgin-components--fpp--vs-gameface-photo-gallery.tpl.php
 * Main template for virgin components fieldable panel panes vs_gameface_gallery
 *
 * Variables available:
 *  $url - The Gameface iframe url
 */
?>

<?php if (!empty($url)): ?>
  <?php if (!empty($component_heading)): ?>
    <div class="container">
      <div class="row">
        <div class="vs-component-heading">
          <?php print check_plain($component_heading); ?>
        </div>
      </div>
    </div>
  <?php endif; ?>

  <iframe scrolling="no" class="vs-iframe vs-iframe--gameface" src="<?php print url($url); ?>"></iframe>
<?php endif; ?>
