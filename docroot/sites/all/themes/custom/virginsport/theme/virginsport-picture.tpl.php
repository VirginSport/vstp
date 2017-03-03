<?php
/**
 * @file
 * Virgin image template.
 *
 * @var string $placeholder
 *  Add placeholder element
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

$image_info = function($image_style, $uri) {
  $path = image_style_path($image_style, $uri);

  if (!file_exists($path)) {
    $image_style = image_style_load($image_style);
    image_style_create_derivative($image_style, $uri, $path);
  }

  return image_get_info($path);
};

$image_hdpi_info = $image_info($image_style_hdpi, $atom->file_source);
$image_info = $image_info($image_style, $atom->file_source);
?>

<?php if (!empty($atom)): ?>
  <div class="picture-wrapper">
    <picture class="<?php print empty($classes) ? '' : $classes; ?>">
      <source
        srcset="<?php print image_style_url($image_style_hdpi, $atom->file_source); ?>"x  
        media="(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)"
        class="<?php print empty($image_classes) ? '' : $image_classes; ?>"
        <?php if(!empty($image_hdpi_info)): ?>
          data-width="<?php print $image_hdpi_info['width']; ?>"
          data-height="<?php print $image_hdpi_info['height']; ?>"
        <?php endif; ?>
      >
      <img
        src="<?php print image_style_url($image_style, $atom->file_source); ?>"
        class="<?php print empty($image_classes) ? '' : $image_classes; ?>"
        alt="<?php print check_plain($alt_text); ?>"
        <?php if(!empty($image_hdpi_info)): ?>
          data-width="<?php print $image_info['width']; ?>"
          data-height="<?php print $image_info['height']; ?>"
        <?php endif; ?>
      >
    </picture>

    <?php if ($placeholder): ?>
      <div class="picture-wrapper__placeholder <?php print empty($image_classes) ? '' : $image_classes; ?>"></div>
    <?php endif; ?>
  </div>
<?php endif; ?>
