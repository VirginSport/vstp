<?php

/**
 * @file
 * Contains the template for the virgin module text.
 *
 * @param string $title
 *  The title for the text module.
 *
 * @param string $sub_title
 *  The sub-title for the text module.
 *
 * @param array $images
 *  An array of structured arrays with the following keys.
 *  - url: The image URL
 *  - alt: The image alternative text
 *  - title: The image title
 *
 * @param string $link
 *  A link for the text module.
 *
 * @param string $link_title
 *  The title for the link.
 */

?>

<h1><?php print $title; ?></h1>
<p><?php print $sub_title; ?></p>
<a href="<?php print $link; ?>"><?php print $link_title; ?></a>
<?php foreach ($images as $image): ?>
  <img src="<?php print $image['url']; ?>" alt="<?php print $image['alt']; ?>" title="<?php print $image['title']; ?>">
<?php endforeach; ?>
