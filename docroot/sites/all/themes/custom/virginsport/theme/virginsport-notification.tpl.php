<?php
/**
 * @file
 * Virgin notifications template.
 *
 *  $classes: The element classes
 *  $message: The element message
 *  $sticky: Make element sticky or not
 *  $close_button: Show close button or not
 */

$classes .= empty($sticky) ? '' : 'vs-notification__wrapper--sticky';
?>

<div class="vs-notification vs-notification__wrapper vs-notification__wrapper--close vs-notification--show <?php print $classes; ?>">
  <?php if (!empty($close_button)): ?>
    <a class="vs-notification__close" href="#">
      <svg height="21" viewBox="290 9 20 21" width="20" xmlns="http://www.w3.org/2000/svg">
        <g class="vs-notification__close-icon" fill="#000" fill-rule="evenodd">
          <path d="M294.373 23.9l9.192-9.192 1.06 1.06-9.192 9.193z"></path>
          <path d="M295.433 14.708l9.193 9.192-1.06 1.06-9.193-9.192z"></path>
        </g>
      </svg>
    </a>
  <?php endif; ?>

  <div class="vs-notification__message">
    <?php print $message; ?>
  </div>
</div>
