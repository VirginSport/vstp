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

<section id="virgin-module-signup" color-trigger="green-blue">
  <div class="signup-container">
    <div class="container floater-container">
      <h1><?php print $title; ?></h1>

      <span floater="0" class="visible-xs"></span>
      <span floater="1"></span>
      <span floater="2"></span>
    </div>

    <div class="signup-slider">
      <?php foreach ($images as $image): ?>
        <div class="signup-slide">
          <div class="signup-image" style="background-image: url(<?php print $image['url']; ?>)"></div>
          <img src="<?php print $image['url']; ?>" alt="<?php print $image['alt']; ?>" title="<?php print $image['title']; ?>">
        </div>
      <?php endforeach; ?>
    </div>

    <div class="container floater-container">
      <p class="sub-title"><?php print $sub_title; ?></p>
      <div class="text-center">
        <a class="signup-link action-link" href="<?php print url('user'); ?>"><span><?php print t('Sign Up'); ?></span></a>
      </div>

      <span floater="3"></span>
      <span floater="4"></span>
    </div>
  </div>

  <div class="container facts-container">
    <h2 class="facts-title"><?php print $facts_title; ?></h2>

    <div class="floater-container">
      <ul class="facts">
        <?php foreach ($facts as $fact): ?>
          <li class="fact">
            <span><?php print $fact; ?></span>
          </li>
        <?php endforeach; ?>
      </ul>

      <span floater="5"></span>
      <span floater="6"></span>
      <span floater="7"></span>
      <span floater="8"></span>
      <span floater="9"></span>
      <span floater="10"></span>
      <span floater="11"></span>
      <span floater="12"></span>
    </div>

    <p class="facts-sub-title"><?php print $facts_sub_title; ?></p>
    <div class="text-center">
      <a class="fact-link action-link" href="#"><span><?php print $facts_button_label; ?></span></a>
    </div>
  </div>
</section>
