<?php

/**
 * @file
 * Contains VirginComponentNewsletter class
 */

/**
 * Class VirginComponentNewsletter
 */
class VirginComponentNewsletter implements VirginComponentsInterface {

  /**
   * {@inheritdoc}
   */
  public function supports($entity_type, $bundle) {
      return $entity_type == 'fieldable_panels_pane' && $bundle == 'vs_newsletter';
  }

  /**
   * {@inheritdoc}
   */
  public function themeSuggestion() {
      return 'virgin_components__fpp__vs_newsletter';
  }

  /**
   * {@inheritdoc}
   */
  public function preProcess(&$variables) {
    global $user;

    if (empty($variables['elements']['#fieldable_panels_pane'])) {
      return;
    }

    $variables['fpp'] = $variables['elements']['#fieldable_panels_pane'];
    $virgin = new VirginEntityGrapher('fieldable_panels_pane', $variables['fpp']);

    // If the user is logged in the default value should be his email
    $variables['default_email'] = !user_is_anonymous() ? $user->mail : FALSE;
    $variables['title'] = $virgin->property("title");
    $variables['description'] = $virgin->fieldGetOne('field_description');
    $variables['list'] = $virgin->fieldGetOne('field_sugar_newsletter_list');
    $variables['image_caption'] = $virgin->fieldGetOne('field_image_caption');
    $variables['show_email_input'] = user_is_anonymous();
  }
}
