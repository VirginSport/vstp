<?php
/**
 * @file
 * Virgin cta links template.
 */
?>
<?php if (!empty($links)): ?>
  <?php foreach ($links as $link): ?>
    <?php

    $query = array();
    $url = empty($link['url']) ? current_path() : $link['url'];

    // Add festival query param if available
    if (!empty($link['attributes']['virgin_festival'])) {
      $query['festival_id'] = $link['attributes']['virgin_festival'];
    }

    // Add event query param if available
    if (!empty($link['attributes']['virgin_event'])) {
      $query['event_id'] = $link['attributes']['virgin_event'];
    }

    $attributes = array(
      'href' => url($url, array('query' => $query)),
      'virgin-type' => $link['attributes']['virgin_type'],
      'class' => array(
        'btn vs-btn',
        $classes,
        empty($link['attributes']['virgin_class']) ? '' : 'vs-btn--' . $link['attributes']['virgin_class'],
      )
    );

    // Add event query param if available
    if (!empty($link['attributes']['virgin_gtm_event'])) {
      $attributes['virgin-event'] = $link['attributes']['virgin_gtm_event'];
    }

    print sprintf('<a %s>%s</a>', drupal_attributes($attributes), $link['title']); ?>

  <?php endforeach; ?>
<?php endif; ?>

