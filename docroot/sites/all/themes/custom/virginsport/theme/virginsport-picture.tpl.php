<?php
/**
 * @file
 * Virgin image template.
 *
 * @var stdClass $atom
 *  The picture atom object
 * @var string $image_style
 *  The image style key
 * @var string $image_style_hdpi
 *  The HDPI image style key
 * @var string $alt_text
 *  The image alt text
 * @var string $classes
 *  The classes to be applied to the picture element
 * @var string $image_classes
 *  The classes to be applied to the image element
 */
?>

<?php if (!empty($atom)): ?>
<picture class="vs-picture <?php print empty($classes) ? '' : $classes; ?>">
  <source
    srcset="<?php print image_style_url($image_style_hdpi, $atom->file_source); ?>"
    media="(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)"
    class="<?php print empty($image_classes) ? '' : $image_classes; ?>"
  >
  <img
    src="<?php print image_style_url($image_style, $atom->file_source); ?>"
    class="<?php print empty($image_classes) ? '' : $image_classes; ?>"
    alt="<?php print check_plain($alt_text); ?>"
  >
</picture>
<?php endif; ?>
