<?php

  /**
   * @file
   * Contains the template for the virgin module text.
   *
   * @param $title
   *  The title for the text module.
   *
   * @param $sub_title
   *  The sub-title for the text module.
   *
   * @param array $images
   *  An array of structured arrays with the following keys.
   *  - url: The image URL
   *  - alt: The image alternative text
   *
   * @param $link
   *  A link for the text module.
   *
   * @param $link_title
   *  The title for the link.
   */

$columns = array();
$rows = 2;

for ($i = 0; $i < count($images); $i++) {
  $column = (int) round(($i + 1)/$rows);
  $columns[$column][] = $images[$i];
}

?>

<section id="virgin-module-text" color-trigger="purple-blue">
  <div class="container">
    <h1><?php print $title; ?></h1>
    <p><?php print $sub_title; ?></p>
    <div class="text-center">
      <a href="<?php print $link; ?>"><?php print $link_title; ?></a>
    </div>

    <div class="image-columns">
      <?php foreach ($columns as $column): ?>
        <div class="image-column">
          <?php foreach ($column as $image): ?>
            <img class="img-responsive" src="<?php print $image['url']; ?>" alt="<?php print $image['alt']; ?>">
          <?php endforeach; ?>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>
