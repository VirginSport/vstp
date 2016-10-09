<?php
/**
 * @file
 * Virgin images template.
 */
?>
<?php if(!empty($atom)): ?>
<picture class="<?php print $classes; ?>">
  <source
    srcset="<?php print image_style_url($image_style_hdpi, $atom->file_source); ?>"
    media="(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)"
  >
  <img
    src="<?php print image_style_url($image_style, $atom->file_source); ?>"
    class="img-fluid"
    alt="Virgin Sport"
    title=""
  >
</picture>
<?php endif; ?>
