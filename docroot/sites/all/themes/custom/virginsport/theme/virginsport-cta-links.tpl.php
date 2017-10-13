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

    // The query parameters should only be added if the virgin_type is not a
    // link and the link url should be populated with a link only otherwise.
    // This verification is need in case the user as all the fields populated.
    if ($link['attributes']['virgin_type'] == 'link') {
      $url = empty($link['url']) ? current_path() : $link['url'];
    } else {
      $url = current_path();
      if (!empty($link['attributes']['virgin_festival'])) {
        $query['festival_id'] = $link['attributes']['virgin_festival'];
      }

      // Only contact form uses the virgin_event field
      if ($link['attributes']['virgin_type'] == 'contact_form' &&
        !empty($link['attributes']['virgin_event'])) {
        $query['event_id'] = $link['attributes']['virgin_event'];
      }

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

    // Add target attribute if available
    if (!empty($link['attributes']['target'])) {
      $attributes['target'] = $link['attributes']['target'];
    }

    // Add region data attribute if available
    if (!empty($link['attributes']['virgin_show_region_modal'])) {
      $attributes['virgin-region-modal'] = $link['attributes']['virgin_show_region_modal'];
    }

    print sprintf('<a %s>%s</a>', drupal_attributes($attributes), check_plain($link['title'])); ?>

  <?php endforeach; ?>
<?php endif; ?>

