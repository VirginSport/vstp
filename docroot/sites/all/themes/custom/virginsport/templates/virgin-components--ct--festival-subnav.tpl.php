<?php
/**
 * @file virgin-components--ct--subnav.tpl.php
 * Template for the festival header
 *
 * Variables available:
 * @var string $title
 *  The title of the festival
 * @var string $status
 *  The status key of the festival
 * @var int $days_left
 *  The number of days left until the festival starts
 * @var stdClass $atom
 *  The atom object with the festival header image
 * @var string $color
 *  The color key of the festival
 * @var string $link
 *  The URL of the link that appears below the button
 * @var string $link_label
 *  The label of the link that appears below the button
 */
?>

<div class="vs-subnav">
  <div class="vs-subnav__overlay"></div>
  <ul class="vs-subnav__list">
    <?php foreach ($links as $link): ?>
      <li class="vs-subnav__item">
        <a
          class="vs-subnav__link <?php print empty($link['active']) ? '' : 'vs-subnav__link--active'; ?>"
          href="<?php print $link['url']; ?>"
        >
          <?php print $link['title']; ?>
        </a>
      </li>
    <?php endforeach; ?>
  </ul>
</div>
