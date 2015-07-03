<?php

/**
 * @file
 * Contains the template for the virgin module sign-up.
 *
 * @param string $title
 *  The title for the sign-up module.
 *
 * @param string $sub_title
 *  The sub-title for the sign-up module.
 *
 * @param array $images
 *  An array of structured arrays with the following keys.
 *  - url: The image URL
 *  - alt: The image alternative text
 *  - title: The image title
 *
 * @param string $facts_title
 *  The title for the facts zone.
 *
 * @param string $facts_sub_title
 *  The sub-title for the facts zone.
 *
 * @param string $facts_button_label
 *  The label for the facts button.
 *
 * @param array $facts
 *  An array of strings.
 */

?>

<h1><?php print $title; ?></h1>
<p><?php print $sub_title; ?></p>
<?php foreach ($images as $image): ?>
  <img src="<?php print $image['url']; ?>" alt="<?php print $image['alt']; ?>" title="<?php print $image['title']; ?>">
<?php endforeach; ?>
<h2><?php print $facts_title; ?></h2>
<p><?php print $facts_sub_title; ?></p>
<ul>
  <?php foreach ($facts as $fact): ?>
    <li><?php print $fact; ?></li>
  <?php endforeach; ?>
</ul>
