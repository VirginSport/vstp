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
      'Content Manager' => 'Content Manager',
      'administrator' => 'administrator',
      'anonymous user' => 'anonymous user',
      'authenticated user' => 'authenticated user',
    ),
    'module' => 'node',
  );

  // Exported permission: 'access content overview'.
  $permissions['access content overview'] = array(
    'name' => 'access content overview',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
      'administrator' => 'administrator',
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

  // Exported permission: 'access navbar'.
  $permissions['access navbar'] = array(
    'name' => 'access navbar',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
      'administrator' => 'administrator',
    ),
    'module' => 'navbar',
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

  // Exported permission: 'access workbench'.
  $permissions['access workbench'] = array(
    'name' => 'access workbench',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
      'administrator' => 'administrator',
    ),
    'module' => 'workbench',
  );

  // Exported permission: 'administer advanced pane settings'.
  $permissions['administer advanced pane settings'] = array(
    'name' => 'administer advanced pane settings',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'panels',
  );

  // Exported permission: 'administer content revisions'.
  $permissions['administer content revisions'] = array(
    'name' => 'administer content revisions',
    'roles' => array(
      'Content Manager' => 'Content Manager',
      'administrator' => 'administrator',
    ),
    'module' => 'nra',
  );

  // Exported permission: 'administer menu'.
  $permissions['administer menu'] = array(
    'name' => 'administer menu',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'menu',
  );

  // Exported permission: 'administer nodes'.
  $permissions['administer nodes'] = array(
    'name' => 'administer nodes',
    'roles' => array(
      'Content Manager' => 'Content Manager',
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'administer page manager'.
  $permissions['administer page manager'] = array(
    'name' => 'administer page manager',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'page_manager',
  );

  // Exported permission: 'administer pane access'.
  $permissions['administer pane access'] = array(
    'name' => 'administer pane access',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'panels',
  );

  // Exported permission: 'administer panelizer'.
  $permissions['administer panelizer'] = array(
    'name' => 'administer panelizer',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer fieldable_panels_pane fieldable_panels_pane defaults'.
  $permissions['administer panelizer fieldable_panels_pane fieldable_panels_pane defaults'] = array(
    'name' => 'administer panelizer fieldable_panels_pane fieldable_panels_pane defaults',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer fieldable_panels_pane vs_accordion defaults'.
  $permissions['administer panelizer fieldable_panels_pane vs_accordion defaults'] = array(
    'name' => 'administer panelizer fieldable_panels_pane vs_accordion defaults',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer fieldable_panels_pane vs_basic_content_block defaults'.
  $permissions['administer panelizer fieldable_panels_pane vs_basic_content_block defaults'] = array(
    'name' => 'administer panelizer fieldable_panels_pane vs_basic_content_block defaults',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer fieldable_panels_pane vs_carousel defaults'.
  $permissions['administer panelizer fieldable_panels_pane vs_carousel defaults'] = array(
    'name' => 'administer panelizer fieldable_panels_pane vs_carousel defaults',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer fieldable_panels_pane vs_cta_block defaults'.
  $permissions['administer panelizer fieldable_panels_pane vs_cta_block defaults'] = array(
    'name' => 'administer panelizer fieldable_panels_pane vs_cta_block defaults',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer fieldable_panels_pane vs_gameface_gallery defaults'.
  $permissions['administer panelizer fieldable_panels_pane vs_gameface_gallery defaults'] = array(
    'name' => 'administer panelizer fieldable_panels_pane vs_gameface_gallery defaults',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer fieldable_panels_pane vs_hero_banner_block defaults'.
  $permissions['administer panelizer fieldable_panels_pane vs_hero_banner_block defaults'] = array(
    'name' => 'administer panelizer fieldable_panels_pane vs_hero_banner_block defaults',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer fieldable_panels_pane vs_hero_event_card defaults'.
  $permissions['administer panelizer fieldable_panels_pane vs_hero_event_card defaults'] = array(
    'name' => 'administer panelizer fieldable_panels_pane vs_hero_event_card defaults',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer fieldable_panels_pane vs_hootsuite_feed defaults'.
  $permissions['administer panelizer fieldable_panels_pane vs_hootsuite_feed defaults'] = array(
    'name' => 'administer panelizer fieldable_panels_pane vs_hootsuite_feed defaults',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer fieldable_panels_pane vs_mylaps_track_my_runner defaults'.
  $permissions['administer panelizer fieldable_panels_pane vs_mylaps_track_my_runner defaults'] = array(
    'name' => 'administer panelizer fieldable_panels_pane vs_mylaps_track_my_runner defaults',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer fieldable_panels_pane vs_package_cards defaults'.
  $permissions['administer panelizer fieldable_panels_pane vs_package_cards defaults'] = array(
    'name' => 'administer panelizer fieldable_panels_pane vs_package_cards defaults',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer fieldable_panels_pane vs_photo_gallery defaults'.
  $permissions['administer panelizer fieldable_panels_pane vs_photo_gallery defaults'] = array(
    'name' => 'administer panelizer fieldable_panels_pane vs_photo_gallery defaults',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer fieldable_panels_pane vs_promo_banner defaults'.
  $permissions['administer panelizer fieldable_panels_pane vs_promo_banner defaults'] = array(
    'name' => 'administer panelizer fieldable_panels_pane vs_promo_banner defaults',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer fieldable_panels_pane vs_teaser_block defaults'.
  $permissions['administer panelizer fieldable_panels_pane vs_teaser_block defaults'] = array(
    'name' => 'administer panelizer fieldable_panels_pane vs_teaser_block defaults',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer fieldable_panels_pane vs_ticket_cards defaults'.
  $permissions['administer panelizer fieldable_panels_pane vs_ticket_cards defaults'] = array(
    'name' => 'administer panelizer fieldable_panels_pane vs_ticket_cards defaults',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer fieldable_panels_pane vs_untimed_event_cards defaults'.
  $permissions['administer panelizer fieldable_panels_pane vs_untimed_event_cards defaults'] = array(
    'name' => 'administer panelizer fieldable_panels_pane vs_untimed_event_cards defaults',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer fieldable_panels_pane vs_video_block defaults'.
  $permissions['administer panelizer fieldable_panels_pane vs_video_block defaults'] = array(
    'name' => 'administer panelizer fieldable_panels_pane vs_video_block defaults',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer node event content'.
  $permissions['administer panelizer node event content'] = array(
    'name' => 'administer panelizer node event content',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
    ),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer node event context'.
  $permissions['administer panelizer node event context'] = array(
    'name' => 'administer panelizer node event context',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer node event defaults'.
  $permissions['administer panelizer node event defaults'] = array(
    'name' => 'administer panelizer node event defaults',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer node event layout'.
  $permissions['administer panelizer node event layout'] = array(
    'name' => 'administer panelizer node event layout',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer node event overview'.
  $permissions['administer panelizer node event overview'] = array(
    'name' => 'administer panelizer node event overview',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer node event settings'.
  $permissions['administer panelizer node event settings'] = array(
    'name' => 'administer panelizer node event settings',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer node event_state defaults'.
  $permissions['administer panelizer node event_state defaults'] = array(
    'name' => 'administer panelizer node event_state defaults',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer node festival content'.
  $permissions['administer panelizer node festival content'] = array(
    'name' => 'administer panelizer node festival content',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
    ),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer node festival context'.
  $permissions['administer panelizer node festival context'] = array(
    'name' => 'administer panelizer node festival context',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer node festival defaults'.
  $permissions['administer panelizer node festival defaults'] = array(
    'name' => 'administer panelizer node festival defaults',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer node festival layout'.
  $permissions['administer panelizer node festival layout'] = array(
    'name' => 'administer panelizer node festival layout',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer node festival overview'.
  $permissions['administer panelizer node festival overview'] = array(
    'name' => 'administer panelizer node festival overview',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer node festival settings'.
  $permissions['administer panelizer node festival settings'] = array(
    'name' => 'administer panelizer node festival settings',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer node festival_state defaults'.
  $permissions['administer panelizer node festival_state defaults'] = array(
    'name' => 'administer panelizer node festival_state defaults',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer node package defaults'.
  $permissions['administer panelizer node package defaults'] = array(
    'name' => 'administer panelizer node package defaults',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer node package_state defaults'.
  $permissions['administer panelizer node package_state defaults'] = array(
    'name' => 'administer panelizer node package_state defaults',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer node page content'.
  $permissions['administer panelizer node page content'] = array(
    'name' => 'administer panelizer node page content',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
    ),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer node page context'.
  $permissions['administer panelizer node page context'] = array(
    'name' => 'administer panelizer node page context',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer node page defaults'.
  $permissions['administer panelizer node page defaults'] = array(
    'name' => 'administer panelizer node page defaults',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer node page layout'.
  $permissions['administer panelizer node page layout'] = array(
    'name' => 'administer panelizer node page layout',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer node page overview'.
  $permissions['administer panelizer node page overview'] = array(
    'name' => 'administer panelizer node page overview',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer node page settings'.
  $permissions['administer panelizer node page settings'] = array(
    'name' => 'administer panelizer node page settings',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer node region content'.
  $permissions['administer panelizer node region content'] = array(
    'name' => 'administer panelizer node region content',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
    ),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer node region context'.
  $permissions['administer panelizer node region context'] = array(
    'name' => 'administer panelizer node region context',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer node region defaults'.
  $permissions['administer panelizer node region defaults'] = array(
    'name' => 'administer panelizer node region defaults',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer node region layout'.
  $permissions['administer panelizer node region layout'] = array(
    'name' => 'administer panelizer node region layout',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer node region overview'.
  $permissions['administer panelizer node region overview'] = array(
    'name' => 'administer panelizer node region overview',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer node region settings'.
  $permissions['administer panelizer node region settings'] = array(
    'name' => 'administer panelizer node region settings',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer node ticket_type defaults'.
  $permissions['administer panelizer node ticket_type defaults'] = array(
    'name' => 'administer panelizer node ticket_type defaults',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer node ticket_type_state defaults'.
  $permissions['administer panelizer node ticket_type_state defaults'] = array(
    'name' => 'administer panelizer node ticket_type_state defaults',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer paragraphs_item vs_accordion_item defaults'.
  $permissions['administer panelizer paragraphs_item vs_accordion_item defaults'] = array(
    'name' => 'administer panelizer paragraphs_item vs_accordion_item defaults',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer paragraphs_item vs_cta_block defaults'.
  $permissions['administer panelizer paragraphs_item vs_cta_block defaults'] = array(
    'name' => 'administer panelizer paragraphs_item vs_cta_block defaults',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer paragraphs_item vs_custom_banner defaults'.
  $permissions['administer panelizer paragraphs_item vs_custom_banner defaults'] = array(
    'name' => 'administer panelizer paragraphs_item vs_custom_banner defaults',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer paragraphs_item vs_event_festival_banner defaults'.
  $permissions['administer panelizer paragraphs_item vs_event_festival_banner defaults'] = array(
    'name' => 'administer panelizer paragraphs_item vs_event_festival_banner defaults',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer paragraphs_item vs_package_card defaults'.
  $permissions['administer panelizer paragraphs_item vs_package_card defaults'] = array(
    'name' => 'administer panelizer paragraphs_item vs_package_card defaults',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer paragraphs_item vs_slide defaults'.
  $permissions['administer panelizer paragraphs_item vs_slide defaults'] = array(
    'name' => 'administer panelizer paragraphs_item vs_slide defaults',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer paragraphs_item vs_teaser defaults'.
  $permissions['administer panelizer paragraphs_item vs_teaser defaults'] = array(
    'name' => 'administer panelizer paragraphs_item vs_teaser defaults',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer paragraphs_item vs_ticket_card defaults'.
  $permissions['administer panelizer paragraphs_item vs_ticket_card defaults'] = array(
    'name' => 'administer panelizer paragraphs_item vs_ticket_card defaults',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer paragraphs_item vs_untimed_event_card defaults'.
  $permissions['administer panelizer paragraphs_item vs_untimed_event_card defaults'] = array(
    'name' => 'administer panelizer paragraphs_item vs_untimed_event_card defaults',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer taxonomy_term scald_authors defaults'.
  $permissions['administer panelizer taxonomy_term scald_authors defaults'] = array(
    'name' => 'administer panelizer taxonomy_term scald_authors defaults',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer taxonomy_term scald_tags defaults'.
  $permissions['administer panelizer taxonomy_term scald_tags defaults'] = array(
    'name' => 'administer panelizer taxonomy_term scald_tags defaults',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer user user defaults'.
  $permissions['administer panelizer user user defaults'] = array(
    'name' => 'administer panelizer user user defaults',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panels layouts'.
  $permissions['administer panels layouts'] = array(
    'name' => 'administer panels layouts',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'panels',
  );

  // Exported permission: 'administer panels styles'.
  $permissions['administer panels styles'] = array(
    'name' => 'administer panels styles',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
      'administrator' => 'administrator',
    ),
    'module' => 'panels',
  );

  // Exported permission: 'administer paragraphs bundles'.
  $permissions['administer paragraphs bundles'] = array(
    'name' => 'administer paragraphs bundles',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'paragraphs',
  );

  // Exported permission: 'administer permissions'.
  $permissions['administer permissions'] = array(
    'name' => 'administer permissions',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'user',
  );

  // Exported permission: 'administer scald'.
  $permissions['administer scald'] = array(
    'name' => 'administer scald',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'scald',
  );

  // Exported permission: 'administer scald atoms'.
  $permissions['administer scald atoms'] = array(
    'name' => 'administer scald atoms',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
      'administrator' => 'administrator',
    ),
    'module' => 'scald',
  );

  // Exported permission: 'administer users'.
  $permissions['administer users'] = array(
    'name' => 'administer users',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'user',
  );

  // Exported permission: 'bypass access in place editing'.
  $permissions['bypass access in place editing'] = array(
    'name' => 'bypass access in place editing',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'panels',
  );

  // Exported permission: 'bypass atom access restrictions'.
  $permissions['bypass atom access restrictions'] = array(
    'name' => 'bypass atom access restrictions',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'scald',
  );

  // Exported permission: 'change layouts in place editing'.
  $permissions['change layouts in place editing'] = array(
    'name' => 'change layouts in place editing',
    'roles' => array(
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

  // Exported permission: 'create fieldable vs_grid'.
  $permissions['create fieldable vs_grid'] = array(
    'name' => 'create fieldable vs_grid',
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

  // Exported permission: 'create fieldable vs_newsletter'.
  $permissions['create fieldable vs_newsletter'] = array(
    'name' => 'create fieldable vs_newsletter',
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

  // Exported permission: 'create fieldable vs_results_introduction'.
  $permissions['create fieldable vs_results_introduction'] = array(
    'name' => 'create fieldable vs_results_introduction',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
      'administrator' => 'administrator',
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

  // Exported permission: 'create fieldable vs_video_banner'.
  $permissions['create fieldable vs_video_banner'] = array(
    'name' => 'create fieldable vs_video_banner',
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
      'Content Manager' => 'Content Manager',
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
      'Content Manager' => 'Content Manager',
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete any region content'.
  $permissions['delete any region content'] = array(
    'name' => 'delete any region content',
    'roles' => array(
      'Content Manager' => 'Content Manager',
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

  // Exported permission: 'delete fieldable vs_grid'.
  $permissions['delete fieldable vs_grid'] = array(
    'name' => 'delete fieldable vs_grid',
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

  // Exported permission: 'delete fieldable vs_newsletter'.
  $permissions['delete fieldable vs_newsletter'] = array(
    'name' => 'delete fieldable vs_newsletter',
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

  // Exported permission: 'delete fieldable vs_results_introduction'.
  $permissions['delete fieldable vs_results_introduction'] = array(
    'name' => 'delete fieldable vs_results_introduction',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
      'administrator' => 'administrator',
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

  // Exported permission: 'delete fieldable vs_video_banner'.
  $permissions['delete fieldable vs_video_banner'] = array(
    'name' => 'delete fieldable vs_video_banner',
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
      'Content Manager' => 'Content Manager',
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete own region content'.
  $permissions['delete own region content'] = array(
    'name' => 'delete own region content',
    'roles' => array(
      'Content Manager' => 'Content Manager',
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
      'Content Manager' => 'Content Manager',
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
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
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
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
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
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
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
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
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

  // Exported permission: 'edit fieldable vs_grid'.
  $permissions['edit fieldable vs_grid'] = array(
    'name' => 'edit fieldable vs_grid',
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

  // Exported permission: 'edit fieldable vs_newsletter'.
  $permissions['edit fieldable vs_newsletter'] = array(
    'name' => 'edit fieldable vs_newsletter',
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

  // Exported permission: 'edit fieldable vs_results_introduction'.
  $permissions['edit fieldable vs_results_introduction'] = array(
    'name' => 'edit fieldable vs_results_introduction',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
      'administrator' => 'administrator',
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

  // Exported permission: 'edit fieldable vs_video_banner'.
  $permissions['edit fieldable vs_video_banner'] = array(
    'name' => 'edit fieldable vs_video_banner',
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

  // Exported permission: 'edit meta tags'.
  $permissions['edit meta tags'] = array(
    'name' => 'edit meta tags',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
      'administrator' => 'administrator',
    ),
    'module' => 'metatag',
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
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
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
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
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
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
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
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit own ticket_type content'.
  $permissions['edit own ticket_type content'] = array(
    'name' => 'edit own ticket_type content',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
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
    'roles' => array(),
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
      'Content Manager' => 'Content Manager',
      'administrator' => 'administrator',
    ),
    'module' => 'workbench_moderation',
  );

  // Exported permission: 'moderate content from draft to published'.
  $permissions['moderate content from draft to published'] = array(
    'name' => 'moderate content from draft to published',
    'roles' => array(
      'Content Manager' => 'Content Manager',
      'administrator' => 'administrator',
    ),
    'module' => 'workbench_moderation',
  );

  // Exported permission: 'moderate content from needs_review to draft'.
  $permissions['moderate content from needs_review to draft'] = array(
    'name' => 'moderate content from needs_review to draft',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
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

  // Exported permission: 'restrict atom access'.
  $permissions['restrict atom access'] = array(
    'name' => 'restrict atom access',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'scald',
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

  // Exported permission: 'use hybridauth'.
  $permissions['use hybridauth'] = array(
    'name' => 'use hybridauth',
    'roles' => array(
      'anonymous user' => 'anonymous user',
    ),
    'module' => 'hybridauth',
  );

  // Exported permission: 'use ipe with page manager'.
  $permissions['use ipe with page manager'] = array(
    'name' => 'use ipe with page manager',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
      'administrator' => 'administrator',
    ),
    'module' => 'panels',
  );

  // Exported permission: 'use page manager'.
  $permissions['use page manager'] = array(
    'name' => 'use page manager',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'page_manager',
  );

  // Exported permission: 'use panels caching features'.
  $permissions['use panels caching features'] = array(
    'name' => 'use panels caching features',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'panels',
  );

  // Exported permission: 'use panels dashboard'.
  $permissions['use panels dashboard'] = array(
    'name' => 'use panels dashboard',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'panels',
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

  // Exported permission: 'use panels locks'.
  $permissions['use panels locks'] = array(
    'name' => 'use panels locks',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'panels',
  );

  // Exported permission: 'use text format filtered_html'.
  $permissions['use text format filtered_html'] = array(
    'name' => 'use text format filtered_html',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
      'administrator' => 'administrator',
    ),
    'module' => 'filter',
  );

  // Exported permission: 'use workbench_moderation my drafts tab'.
  $permissions['use workbench_moderation my drafts tab'] = array(
    'name' => 'use workbench_moderation my drafts tab',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
      'administrator' => 'administrator',
    ),
    'module' => 'workbench_moderation',
  );

  // Exported permission: 'use workbench_moderation needs review tab'.
  $permissions['use workbench_moderation needs review tab'] = array(
    'name' => 'use workbench_moderation needs review tab',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
      'administrator' => 'administrator',
    ),
    'module' => 'workbench_moderation',
  );

  // Exported permission: 'view all unpublished content'.
  $permissions['view all unpublished content'] = array(
    'name' => 'view all unpublished content',
    'roles' => array(
      'Content Manager' => 'Content Manager',
      'administrator' => 'administrator',
    ),
    'module' => 'workbench_moderation',
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

  // Exported permission: 'view moderation history'.
  $permissions['view moderation history'] = array(
    'name' => 'view moderation history',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
      'administrator' => 'administrator',
    ),
    'module' => 'workbench_moderation',
  );

  // Exported permission: 'view moderation messages'.
  $permissions['view moderation messages'] = array(
    'name' => 'view moderation messages',
    'roles' => array(
      'Content Editor' => 'Content Editor',
      'Content Manager' => 'Content Manager',
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
