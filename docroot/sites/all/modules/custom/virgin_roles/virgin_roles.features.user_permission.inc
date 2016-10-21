<?php
/**
 * @file
 * virgin_roles.features.user_permission.inc
 */

/**
 * Implements hook_user_default_permissions().
 */
function virgin_roles_user_default_permissions() {
  $permissions = array();

  // Exported permission: 'access administration pages'.
  $permissions['access administration pages'] = array(
    'name' => 'access administration pages',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
      'administrator' => 'administrator',
    ),
    'module' => 'system',
  );

  // Exported permission: 'access content'.
  $permissions['access content'] = array(
    'name' => 'access content',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'administrator' => 'administrator',
      'anonymous user' => 'anonymous user',
      'authenticated user' => 'authenticated user',
    ),
    'module' => 'node',
  );

  // Exported permission: 'access fieldable panels panes master list'.
  $permissions['access fieldable panels panes master list'] = array(
    'name' => 'access fieldable panels panes master list',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
      'administrator' => 'administrator',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'access scald dnd library'.
  $permissions['access scald dnd library'] = array(
    'name' => 'access scald dnd library',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
      'administrator' => 'administrator',
    ),
    'module' => 'scald_dnd_library',
  );

  // Exported permission: 'access site in maintenance mode'.
  $permissions['access site in maintenance mode'] = array(
    'name' => 'access site in maintenance mode',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
      'administrator' => 'administrator',
    ),
    'module' => 'system',
  );

  // Exported permission: 'access user profiles'.
  $permissions['access user profiles'] = array(
    'name' => 'access user profiles',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
      'administrator' => 'administrator',
    ),
    'module' => 'user',
  );

  // Exported permission: 'administer content revisions'.
  $permissions['administer content revisions'] = array(
    'name' => 'administer content revisions',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'nra',
  );

  // Exported permission: 'administer menu'.
  $permissions['administer menu'] = array(
    'name' => 'administer menu',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
      'administrator' => 'administrator',
    ),
    'module' => 'menu',
  );

  // Exported permission: 'administer panelizer fieldable_panels_pane vs_cta_block defaults'.
  $permissions['administer panelizer fieldable_panels_pane vs_cta_block defaults'] = array(
    'name' => 'administer panelizer fieldable_panels_pane vs_cta_block defaults',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer permissions'.
  $permissions['administer permissions'] = array(
    'name' => 'administer permissions',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'user',
  );

  // Exported permission: 'administer users'.
  $permissions['administer users'] = array(
    'name' => 'administer users',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
      'administrator' => 'administrator',
    ),
    'module' => 'user',
  );

  // Exported permission: 'bypass access in place editing'.
  $permissions['bypass access in place editing'] = array(
    'name' => 'bypass access in place editing',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
      'administrator' => 'administrator',
    ),
    'module' => 'panels',
  );

  // Exported permission: 'create atom of any type'.
  $permissions['create atom of any type'] = array(
    'name' => 'create atom of any type',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
      'administrator' => 'administrator',
    ),
    'module' => 'scald',
  );

  // Exported permission: 'create atom of image type'.
  $permissions['create atom of image type'] = array(
    'name' => 'create atom of image type',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
      'administrator' => 'administrator',
    ),
    'module' => 'scald',
  );

  // Exported permission: 'create event content'.
  $permissions['create event content'] = array(
    'name' => 'create event content',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'create event_state content'.
  $permissions['create event_state content'] = array(
    'name' => 'create event_state content',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'create festival content'.
  $permissions['create festival content'] = array(
    'name' => 'create festival content',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'create festival_state content'.
  $permissions['create festival_state content'] = array(
    'name' => 'create festival_state content',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'create fieldable fieldable_panels_pane'.
  $permissions['create fieldable fieldable_panels_pane'] = array(
    'name' => 'create fieldable fieldable_panels_pane',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'create fieldable vs_accordion'.
  $permissions['create fieldable vs_accordion'] = array(
    'name' => 'create fieldable vs_accordion',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
      'administrator' => 'administrator',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'create fieldable vs_basic_content_block'.
  $permissions['create fieldable vs_basic_content_block'] = array(
    'name' => 'create fieldable vs_basic_content_block',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'create fieldable vs_carousel'.
  $permissions['create fieldable vs_carousel'] = array(
    'name' => 'create fieldable vs_carousel',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'create fieldable vs_cta_block'.
  $permissions['create fieldable vs_cta_block'] = array(
    'name' => 'create fieldable vs_cta_block',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'create fieldable vs_gameface_gallery'.
  $permissions['create fieldable vs_gameface_gallery'] = array(
    'name' => 'create fieldable vs_gameface_gallery',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'create fieldable vs_hero_banner_block'.
  $permissions['create fieldable vs_hero_banner_block'] = array(
    'name' => 'create fieldable vs_hero_banner_block',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'create fieldable vs_hero_event_card'.
  $permissions['create fieldable vs_hero_event_card'] = array(
    'name' => 'create fieldable vs_hero_event_card',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'create fieldable vs_hootsuite_feed'.
  $permissions['create fieldable vs_hootsuite_feed'] = array(
    'name' => 'create fieldable vs_hootsuite_feed',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'create fieldable vs_mylaps_track_my_runner'.
  $permissions['create fieldable vs_mylaps_track_my_runner'] = array(
    'name' => 'create fieldable vs_mylaps_track_my_runner',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'create fieldable vs_package_cards'.
  $permissions['create fieldable vs_package_cards'] = array(
    'name' => 'create fieldable vs_package_cards',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'create fieldable vs_photo_gallery'.
  $permissions['create fieldable vs_photo_gallery'] = array(
    'name' => 'create fieldable vs_photo_gallery',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'create fieldable vs_promo_banner'.
  $permissions['create fieldable vs_promo_banner'] = array(
    'name' => 'create fieldable vs_promo_banner',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'create fieldable vs_teaser_block'.
  $permissions['create fieldable vs_teaser_block'] = array(
    'name' => 'create fieldable vs_teaser_block',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'create fieldable vs_ticket_cards'.
  $permissions['create fieldable vs_ticket_cards'] = array(
    'name' => 'create fieldable vs_ticket_cards',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'create fieldable vs_untimed_event_cards'.
  $permissions['create fieldable vs_untimed_event_cards'] = array(
    'name' => 'create fieldable vs_untimed_event_cards',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'create fieldable vs_video_block'.
  $permissions['create fieldable vs_video_block'] = array(
    'name' => 'create fieldable vs_video_block',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'create package content'.
  $permissions['create package content'] = array(
    'name' => 'create package content',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'create package_state content'.
  $permissions['create package_state content'] = array(
    'name' => 'create package_state content',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'create page content'.
  $permissions['create page content'] = array(
    'name' => 'create page content',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'create region content'.
  $permissions['create region content'] = array(
    'name' => 'create region content',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'create ticket_type content'.
  $permissions['create ticket_type content'] = array(
    'name' => 'create ticket_type content',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'create ticket_type_state content'.
  $permissions['create ticket_type_state content'] = array(
    'name' => 'create ticket_type_state content',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete any atom'.
  $permissions['delete any atom'] = array(
    'name' => 'delete any atom',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
      'administrator' => 'administrator',
    ),
    'module' => 'scald',
  );

  // Exported permission: 'delete any event content'.
  $permissions['delete any event content'] = array(
    'name' => 'delete any event content',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete any event_state content'.
  $permissions['delete any event_state content'] = array(
    'name' => 'delete any event_state content',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete any festival content'.
  $permissions['delete any festival content'] = array(
    'name' => 'delete any festival content',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete any festival_state content'.
  $permissions['delete any festival_state content'] = array(
    'name' => 'delete any festival_state content',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete any package content'.
  $permissions['delete any package content'] = array(
    'name' => 'delete any package content',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete any package_state content'.
  $permissions['delete any package_state content'] = array(
    'name' => 'delete any package_state content',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete any page content'.
  $permissions['delete any page content'] = array(
    'name' => 'delete any page content',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete any region content'.
  $permissions['delete any region content'] = array(
    'name' => 'delete any region content',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete any ticket_type content'.
  $permissions['delete any ticket_type content'] = array(
    'name' => 'delete any ticket_type content',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete any ticket_type_state content'.
  $permissions['delete any ticket_type_state content'] = array(
    'name' => 'delete any ticket_type_state content',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete any webform content'.
  $permissions['delete any webform content'] = array(
    'name' => 'delete any webform content',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete fieldable fieldable_panels_pane'.
  $permissions['delete fieldable fieldable_panels_pane'] = array(
    'name' => 'delete fieldable fieldable_panels_pane',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'delete fieldable vs_accordion'.
  $permissions['delete fieldable vs_accordion'] = array(
    'name' => 'delete fieldable vs_accordion',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
      'administrator' => 'administrator',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'delete fieldable vs_basic_content_block'.
  $permissions['delete fieldable vs_basic_content_block'] = array(
    'name' => 'delete fieldable vs_basic_content_block',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'delete fieldable vs_carousel'.
  $permissions['delete fieldable vs_carousel'] = array(
    'name' => 'delete fieldable vs_carousel',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'delete fieldable vs_cta_block'.
  $permissions['delete fieldable vs_cta_block'] = array(
    'name' => 'delete fieldable vs_cta_block',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'delete fieldable vs_gameface_gallery'.
  $permissions['delete fieldable vs_gameface_gallery'] = array(
    'name' => 'delete fieldable vs_gameface_gallery',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'delete fieldable vs_hero_banner_block'.
  $permissions['delete fieldable vs_hero_banner_block'] = array(
    'name' => 'delete fieldable vs_hero_banner_block',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'delete fieldable vs_hero_event_card'.
  $permissions['delete fieldable vs_hero_event_card'] = array(
    'name' => 'delete fieldable vs_hero_event_card',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'delete fieldable vs_hootsuite_feed'.
  $permissions['delete fieldable vs_hootsuite_feed'] = array(
    'name' => 'delete fieldable vs_hootsuite_feed',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'delete fieldable vs_mylaps_track_my_runner'.
  $permissions['delete fieldable vs_mylaps_track_my_runner'] = array(
    'name' => 'delete fieldable vs_mylaps_track_my_runner',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'delete fieldable vs_package_cards'.
  $permissions['delete fieldable vs_package_cards'] = array(
    'name' => 'delete fieldable vs_package_cards',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'delete fieldable vs_photo_gallery'.
  $permissions['delete fieldable vs_photo_gallery'] = array(
    'name' => 'delete fieldable vs_photo_gallery',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'delete fieldable vs_promo_banner'.
  $permissions['delete fieldable vs_promo_banner'] = array(
    'name' => 'delete fieldable vs_promo_banner',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'delete fieldable vs_teaser_block'.
  $permissions['delete fieldable vs_teaser_block'] = array(
    'name' => 'delete fieldable vs_teaser_block',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'delete fieldable vs_ticket_cards'.
  $permissions['delete fieldable vs_ticket_cards'] = array(
    'name' => 'delete fieldable vs_ticket_cards',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'delete fieldable vs_untimed_event_cards'.
  $permissions['delete fieldable vs_untimed_event_cards'] = array(
    'name' => 'delete fieldable vs_untimed_event_cards',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'delete fieldable vs_video_block'.
  $permissions['delete fieldable vs_video_block'] = array(
    'name' => 'delete fieldable vs_video_block',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'delete own atom'.
  $permissions['delete own atom'] = array(
    'name' => 'delete own atom',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
      'administrator' => 'administrator',
    ),
    'module' => 'scald',
  );

  // Exported permission: 'delete own event content'.
  $permissions['delete own event content'] = array(
    'name' => 'delete own event content',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete own event_state content'.
  $permissions['delete own event_state content'] = array(
    'name' => 'delete own event_state content',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete own festival content'.
  $permissions['delete own festival content'] = array(
    'name' => 'delete own festival content',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete own festival_state content'.
  $permissions['delete own festival_state content'] = array(
    'name' => 'delete own festival_state content',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete own package content'.
  $permissions['delete own package content'] = array(
    'name' => 'delete own package content',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete own package_state content'.
  $permissions['delete own package_state content'] = array(
    'name' => 'delete own package_state content',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete own page content'.
  $permissions['delete own page content'] = array(
    'name' => 'delete own page content',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete own region content'.
  $permissions['delete own region content'] = array(
    'name' => 'delete own region content',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete own ticket_type content'.
  $permissions['delete own ticket_type content'] = array(
    'name' => 'delete own ticket_type content',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete own ticket_type_state content'.
  $permissions['delete own ticket_type_state content'] = array(
    'name' => 'delete own ticket_type_state content',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete revisions'.
  $permissions['delete revisions'] = array(
    'name' => 'delete revisions',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit any atom'.
  $permissions['edit any atom'] = array(
    'name' => 'edit any atom',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
      'administrator' => 'administrator',
    ),
    'module' => 'scald',
  );

  // Exported permission: 'edit any event content'.
  $permissions['edit any event content'] = array(
    'name' => 'edit any event content',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit any event_state content'.
  $permissions['edit any event_state content'] = array(
    'name' => 'edit any event_state content',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit any festival content'.
  $permissions['edit any festival content'] = array(
    'name' => 'edit any festival content',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit any festival_state content'.
  $permissions['edit any festival_state content'] = array(
    'name' => 'edit any festival_state content',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit any package content'.
  $permissions['edit any package content'] = array(
    'name' => 'edit any package content',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit any package_state content'.
  $permissions['edit any package_state content'] = array(
    'name' => 'edit any package_state content',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit any page content'.
  $permissions['edit any page content'] = array(
    'name' => 'edit any page content',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit any region content'.
  $permissions['edit any region content'] = array(
    'name' => 'edit any region content',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit any ticket_type content'.
  $permissions['edit any ticket_type content'] = array(
    'name' => 'edit any ticket_type content',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit any ticket_type_state content'.
  $permissions['edit any ticket_type_state content'] = array(
    'name' => 'edit any ticket_type_state content',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit fieldable fieldable_panels_pane'.
  $permissions['edit fieldable fieldable_panels_pane'] = array(
    'name' => 'edit fieldable fieldable_panels_pane',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'edit fieldable vs_accordion'.
  $permissions['edit fieldable vs_accordion'] = array(
    'name' => 'edit fieldable vs_accordion',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
      'administrator' => 'administrator',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'edit fieldable vs_basic_content_block'.
  $permissions['edit fieldable vs_basic_content_block'] = array(
    'name' => 'edit fieldable vs_basic_content_block',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'edit fieldable vs_carousel'.
  $permissions['edit fieldable vs_carousel'] = array(
    'name' => 'edit fieldable vs_carousel',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'edit fieldable vs_cta_block'.
  $permissions['edit fieldable vs_cta_block'] = array(
    'name' => 'edit fieldable vs_cta_block',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'edit fieldable vs_gameface_gallery'.
  $permissions['edit fieldable vs_gameface_gallery'] = array(
    'name' => 'edit fieldable vs_gameface_gallery',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'edit fieldable vs_hero_banner_block'.
  $permissions['edit fieldable vs_hero_banner_block'] = array(
    'name' => 'edit fieldable vs_hero_banner_block',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'edit fieldable vs_hero_event_card'.
  $permissions['edit fieldable vs_hero_event_card'] = array(
    'name' => 'edit fieldable vs_hero_event_card',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'edit fieldable vs_hootsuite_feed'.
  $permissions['edit fieldable vs_hootsuite_feed'] = array(
    'name' => 'edit fieldable vs_hootsuite_feed',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'edit fieldable vs_mylaps_track_my_runner'.
  $permissions['edit fieldable vs_mylaps_track_my_runner'] = array(
    'name' => 'edit fieldable vs_mylaps_track_my_runner',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'edit fieldable vs_package_cards'.
  $permissions['edit fieldable vs_package_cards'] = array(
    'name' => 'edit fieldable vs_package_cards',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'edit fieldable vs_photo_gallery'.
  $permissions['edit fieldable vs_photo_gallery'] = array(
    'name' => 'edit fieldable vs_photo_gallery',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'edit fieldable vs_promo_banner'.
  $permissions['edit fieldable vs_promo_banner'] = array(
    'name' => 'edit fieldable vs_promo_banner',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'edit fieldable vs_teaser_block'.
  $permissions['edit fieldable vs_teaser_block'] = array(
    'name' => 'edit fieldable vs_teaser_block',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'edit fieldable vs_ticket_cards'.
  $permissions['edit fieldable vs_ticket_cards'] = array(
    'name' => 'edit fieldable vs_ticket_cards',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'edit fieldable vs_untimed_event_cards'.
  $permissions['edit fieldable vs_untimed_event_cards'] = array(
    'name' => 'edit fieldable vs_untimed_event_cards',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'edit fieldable vs_video_block'.
  $permissions['edit fieldable vs_video_block'] = array(
    'name' => 'edit fieldable vs_video_block',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'edit own atom'.
  $permissions['edit own atom'] = array(
    'name' => 'edit own atom',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
      'administrator' => 'administrator',
    ),
    'module' => 'scald',
  );

  // Exported permission: 'edit own event content'.
  $permissions['edit own event content'] = array(
    'name' => 'edit own event content',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit own event_state content'.
  $permissions['edit own event_state content'] = array(
    'name' => 'edit own event_state content',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit own festival content'.
  $permissions['edit own festival content'] = array(
    'name' => 'edit own festival content',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit own festival_state content'.
  $permissions['edit own festival_state content'] = array(
    'name' => 'edit own festival_state content',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit own package content'.
  $permissions['edit own package content'] = array(
    'name' => 'edit own package content',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit own package_state content'.
  $permissions['edit own package_state content'] = array(
    'name' => 'edit own package_state content',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit own page content'.
  $permissions['edit own page content'] = array(
    'name' => 'edit own page content',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit own region content'.
  $permissions['edit own region content'] = array(
    'name' => 'edit own region content',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit own ticket_type content'.
  $permissions['edit own ticket_type content'] = array(
    'name' => 'edit own ticket_type content',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit own ticket_type_state content'.
  $permissions['edit own ticket_type_state content'] = array(
    'name' => 'edit own ticket_type_state content',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'execute virgin sync'.
  $permissions['execute virgin sync'] = array(
    'name' => 'execute virgin sync',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
      'administrator' => 'administrator',
    ),
    'module' => 'virgin_sync',
  );

  // Exported permission: 'fetch any atom'.
  $permissions['fetch any atom'] = array(
    'name' => 'fetch any atom',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
      'administrator' => 'administrator',
    ),
    'module' => 'scald',
  );

  // Exported permission: 'fetch own atom'.
  $permissions['fetch own atom'] = array(
    'name' => 'fetch own atom',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
      'administrator' => 'administrator',
    ),
    'module' => 'scald',
  );

  // Exported permission: 'moderate content from draft to needs_review'.
  $permissions['moderate content from draft to needs_review'] = array(
    'name' => 'moderate content from draft to needs_review',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'administrator' => 'administrator',
    ),
    'module' => 'workbench_moderation',
  );

  // Exported permission: 'moderate content from needs_review to published'.
  $permissions['moderate content from needs_review to published'] = array(
    'name' => 'moderate content from needs_review to published',
    'roles' => array(
      'Content Manager' => 'Content Manager',
      'administrator' => 'administrator',
    ),
    'module' => 'workbench_moderation',
  );

  // Exported permission: 'revert revisions'.
  $permissions['revert revisions'] = array(
    'name' => 'revert revisions',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'use panels in place editing'.
  $permissions['use panels in place editing'] = array(
    'name' => 'use panels in place editing',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
      'administrator' => 'administrator',
    ),
    'module' => 'panels',
  );

  // Exported permission: 'use text format filtered_html'.
  $permissions['use text format filtered_html'] = array(
    'name' => 'use text format filtered_html',
    'roles' => array(
      'administrator' => 'administrator',
      'anonymous user' => 'anonymous user',
      'authenticated user' => 'authenticated user',
    ),
    'module' => 'filter',
  );

  // Exported permission: 'view any unpublished content'.
  $permissions['view any unpublished content'] = array(
    'name' => 'view any unpublished content',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
      'administrator' => 'administrator',
    ),
    'module' => 'view_unpublished',
  );

  // Exported permission: 'view moderation messages'.
  $permissions['view moderation messages'] = array(
    'name' => 'view moderation messages',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'workbench_moderation',
  );

  // Exported permission: 'view own atom'.
  $permissions['view own atom'] = array(
    'name' => 'view own atom',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
      'administrator' => 'administrator',
    ),
    'module' => 'scald',
  );

  // Exported permission: 'view own unpublished content'.
  $permissions['view own unpublished content'] = array(
    'name' => 'view own unpublished content',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'view pane admin links'.
  $permissions['view pane admin links'] = array(
    'name' => 'view pane admin links',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
      'administrator' => 'administrator',
    ),
    'module' => 'panels',
  );

  // Exported permission: 'view revisions'.
  $permissions['view revisions'] = array(
    'name' => 'view revisions',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'view the administration theme'.
  $permissions['view the administration theme'] = array(
    'name' => 'view the administration theme',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
      'administrator' => 'administrator',
    ),
    'module' => 'system',
  );

  return $permissions;
}
