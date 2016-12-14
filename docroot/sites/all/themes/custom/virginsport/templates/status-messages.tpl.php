<?php
/**
 * @file
 * Virgin messages template.
 */
?>

<?php foreach (drupal_get_messages() as $type => $messages): ?>
  <?php foreach ($messages as $message): ?>
    <?php print theme('virginsport_notification', array('message' => $message, 'sticky' => TRUE)); ?>
  <?php endforeach; ?>
<?php endforeach; ?>
