<?php
/**
 * @file
 * Splash Page default template.
 *
 * Available variables:
 *  - $regions:
 *  An array of structured arrays with the following keys:
 *    - nid: The nid of the region
 *    - title: The original title of the region
 *    - flag: The atom object of the flag
 *    - hostname: The hostname of the region
 */
?>

<?php if(!empty($regions)): ?>
  <?php foreach ($regions as $region): ?>
    <a href="<?php print virgin_region_add_hostname_protocol($region['hostname']) ?>">
      <?php print $region['title']; ?>
    </a>
  <?php endforeach; ?>
<?php endif; ?>
