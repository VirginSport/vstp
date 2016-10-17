<?php
/**
 * @file
 * Virgin cta links template.
 */
?>
<?php if (!empty($links)): ?>
  <?php foreach ($links as $link): ?>
    <?php print
      sprintf('<a %s>%s</a>', drupal_attributes(array(
        'href' => url($link['url']),
        'class' => array(
          'btn vs-btn',
          $classes,
          empty($link['attributes']['class']) ? '' : 'vs-btn--gradient-' . $link['attributes']['class'],
        )
      )), $link['title']);
    ?>  
  <?php endforeach; ?>
<?php endif; ?>

