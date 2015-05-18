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
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'system',
  );

  // Exported permission: 'access all views'.
  $permissions['access all views'] = array(
    'name' => 'access all views',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'views',
  );

  // Exported permission: 'access all webform results'.
  $permissions['access all webform results'] = array(
    'name' => 'access all webform results',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'webform',
  );

  // Exported permission: 'access bean overview'.
  $permissions['access bean overview'] = array(
    'name' => 'access bean overview',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'bean',
  );

  // Exported permission: 'access content'.
  $permissions['access content'] = array(
    'name' => 'access content',
    'roles' => array(
      'administrator' => 'administrator',
      'anonymous user' => 'anonymous user',
      'authenticated user' => 'authenticated user',
      'editor' => 'editor',
    ),
    'module' => 'node',
  );

  // Exported permission: 'access content overview'.
  $permissions['access content overview'] = array(
    'name' => 'access content overview',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'node',
  );

  // Exported permission: 'access contextual links'.
  $permissions['access contextual links'] = array(
    'name' => 'access contextual links',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'contextual',
  );

  // Exported permission: 'access in-place editing'.
  $permissions['access in-place editing'] = array(
    'name' => 'access in-place editing',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'quickedit',
  );

  // Exported permission: 'access media browser'.
  $permissions['access media browser'] = array(
    'name' => 'access media browser',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'media',
  );

  // Exported permission: 'access mollom statistics'.
  $permissions['access mollom statistics'] = array(
    'name' => 'access mollom statistics',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'mollom',
  );

  // Exported permission: 'access navbar'.
  $permissions['access navbar'] = array(
    'name' => 'access navbar',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'navbar',
  );

  // Exported permission: 'access own authorizations'.
  $permissions['access own authorizations'] = array(
    'name' => 'access own authorizations',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'oauth_common',
  );

  // Exported permission: 'access own consumers'.
  $permissions['access own consumers'] = array(
    'name' => 'access own consumers',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'oauth_common',
  );

  // Exported permission: 'access own webform results'.
  $permissions['access own webform results'] = array(
    'name' => 'access own webform results',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'webform',
  );

  // Exported permission: 'access own webform submissions'.
  $permissions['access own webform submissions'] = array(
    'name' => 'access own webform submissions',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'webform',
  );

  // Exported permission: 'access rules debug'.
  $permissions['access rules debug'] = array(
    'name' => 'access rules debug',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'rules',
  );

  // Exported permission: 'access service links'.
  $permissions['access service links'] = array(
    'name' => 'access service links',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'service_links',
  );

  // Exported permission: 'access site in maintenance mode'.
  $permissions['access site in maintenance mode'] = array(
    'name' => 'access site in maintenance mode',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'system',
  );

  // Exported permission: 'access site reports'.
  $permissions['access site reports'] = array(
    'name' => 'access site reports',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'system',
  );

  // Exported permission: 'access user profiles'.
  $permissions['access user profiles'] = array(
    'name' => 'access user profiles',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'user',
  );

  // Exported permission: 'access workbench'.
  $permissions['access workbench'] = array(
    'name' => 'access workbench',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'workbench',
  );

  // Exported permission: 'add media from remote sources'.
  $permissions['add media from remote sources'] = array(
    'name' => 'add media from remote sources',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'media_internet',
  );

  // Exported permission: 'administer actions'.
  $permissions['administer actions'] = array(
    'name' => 'administer actions',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'system',
  );

  // Exported permission: 'administer advanced pane settings'.
  $permissions['administer advanced pane settings'] = array(
    'name' => 'administer advanced pane settings',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'panels',
  );

  // Exported permission: 'administer bean settings'.
  $permissions['administer bean settings'] = array(
    'name' => 'administer bean settings',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'bean',
  );

  // Exported permission: 'administer bean types'.
  $permissions['administer bean types'] = array(
    'name' => 'administer bean types',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'bean',
  );

  // Exported permission: 'administer beans'.
  $permissions['administer beans'] = array(
    'name' => 'administer beans',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'bean',
  );

  // Exported permission: 'administer block classes'.
  $permissions['administer block classes'] = array(
    'name' => 'administer block classes',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'block_class',
  );

  // Exported permission: 'administer blocks'.
  $permissions['administer blocks'] = array(
    'name' => 'administer blocks',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'block',
  );

  // Exported permission: 'administer ckeditor'.
  $permissions['administer ckeditor'] = array(
    'name' => 'administer ckeditor',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'ckeditor',
  );

  // Exported permission: 'administer consumers'.
  $permissions['administer consumers'] = array(
    'name' => 'administer consumers',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'oauth_common',
  );

  // Exported permission: 'administer content revisions'.
  $permissions['administer content revisions'] = array(
    'name' => 'administer content revisions',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'nra',
  );

  // Exported permission: 'administer content types'.
  $permissions['administer content types'] = array(
    'name' => 'administer content types',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'administer default config'.
  $permissions['administer default config'] = array(
    'name' => 'administer default config',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'defaultconfig',
  );

  // Exported permission: 'administer embed buttons'.
  $permissions['administer embed buttons'] = array(
    'name' => 'administer embed buttons',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'entity_embed',
  );

  // Exported permission: 'administer entityform types'.
  $permissions['administer entityform types'] = array(
    'name' => 'administer entityform types',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'entityform',
  );

  // Exported permission: 'administer features'.
  $permissions['administer features'] = array(
    'name' => 'administer features',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'features',
  );

  // Exported permission: 'administer field collections'.
  $permissions['administer field collections'] = array(
    'name' => 'administer field collections',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'field_collection',
  );

  // Exported permission: 'administer fieldable panels panes'.
  $permissions['administer fieldable panels panes'] = array(
    'name' => 'administer fieldable panels panes',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'administer file types'.
  $permissions['administer file types'] = array(
    'name' => 'administer file types',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'administer files'.
  $permissions['administer files'] = array(
    'name' => 'administer files',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'administer filters'.
  $permissions['administer filters'] = array(
    'name' => 'administer filters',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'filter',
  );

  // Exported permission: 'administer flags'.
  $permissions['administer flags'] = array(
    'name' => 'administer flags',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'flag',
  );

  // Exported permission: 'administer google analytics'.
  $permissions['administer google analytics'] = array(
    'name' => 'administer google analytics',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'googleanalytics',
  );

  // Exported permission: 'administer group'.
  $permissions['administer group'] = array(
    'name' => 'administer group',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'og',
  );

  // Exported permission: 'administer image styles'.
  $permissions['administer image styles'] = array(
    'name' => 'administer image styles',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'image',
  );

  // Exported permission: 'administer languages'.
  $permissions['administer languages'] = array(
    'name' => 'administer languages',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'locale',
  );

  // Exported permission: 'administer linkit'.
  $permissions['administer linkit'] = array(
    'name' => 'administer linkit',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'linkit',
  );

  // Exported permission: 'administer media browser'.
  $permissions['administer media browser'] = array(
    'name' => 'administer media browser',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'media',
  );

  // Exported permission: 'administer media oembed'.
  $permissions['administer media oembed'] = array(
    'name' => 'administer media oembed',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'media_oembed',
  );

  // Exported permission: 'administer menu'.
  $permissions['administer menu'] = array(
    'name' => 'administer menu',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'menu',
  );

  // Exported permission: 'administer meta tags'.
  $permissions['administer meta tags'] = array(
    'name' => 'administer meta tags',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'metatag',
  );

  // Exported permission: 'administer module filter'.
  $permissions['administer module filter'] = array(
    'name' => 'administer module filter',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'module_filter',
  );

  // Exported permission: 'administer modules'.
  $permissions['administer modules'] = array(
    'name' => 'administer modules',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'system',
  );

  // Exported permission: 'administer mollom'.
  $permissions['administer mollom'] = array(
    'name' => 'administer mollom',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'mollom',
  );

  // Exported permission: 'administer nodes'.
  $permissions['administer nodes'] = array(
    'name' => 'administer nodes',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'administer oauth'.
  $permissions['administer oauth'] = array(
    'name' => 'administer oauth',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'oauth_common',
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
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer node event choice'.
  $permissions['administer panelizer node event choice'] = array(
    'name' => 'administer panelizer node event choice',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer node event content'.
  $permissions['administer panelizer node event content'] = array(
    'name' => 'administer panelizer node event content',
    'roles' => array(),
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

  // Exported permission: 'administer panelizer node rich_page choice'.
  $permissions['administer panelizer node rich_page choice'] = array(
    'name' => 'administer panelizer node rich_page choice',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer node rich_page content'.
  $permissions['administer panelizer node rich_page content'] = array(
    'name' => 'administer panelizer node rich_page content',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer node rich_page context'.
  $permissions['administer panelizer node rich_page context'] = array(
    'name' => 'administer panelizer node rich_page context',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer node rich_page defaults'.
  $permissions['administer panelizer node rich_page defaults'] = array(
    'name' => 'administer panelizer node rich_page defaults',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer node rich_page layout'.
  $permissions['administer panelizer node rich_page layout'] = array(
    'name' => 'administer panelizer node rich_page layout',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer node rich_page overview'.
  $permissions['administer panelizer node rich_page overview'] = array(
    'name' => 'administer panelizer node rich_page overview',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer node rich_page settings'.
  $permissions['administer panelizer node rich_page settings'] = array(
    'name' => 'administer panelizer node rich_page settings',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer taxonomy_term event_flag defaults'.
  $permissions['administer panelizer taxonomy_term event_flag defaults'] = array(
    'name' => 'administer panelizer taxonomy_term event_flag defaults',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer taxonomy_term event_type defaults'.
  $permissions['administer panelizer taxonomy_term event_type defaults'] = array(
    'name' => 'administer panelizer taxonomy_term event_type defaults',
    'roles' => array(),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer taxonomy_term faq_topic defaults'.
  $permissions['administer panelizer taxonomy_term faq_topic defaults'] = array(
    'name' => 'administer panelizer taxonomy_term faq_topic defaults',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'panelizer',
  );

  // Exported permission: 'administer panelizer taxonomy_term target_audience defaults'.
  $permissions['administer panelizer taxonomy_term target_audience defaults'] = array(
    'name' => 'administer panelizer taxonomy_term target_audience defaults',
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
      'administrator' => 'administrator',
    ),
    'module' => 'panels',
  );

  // Exported permission: 'administer pathauto'.
  $permissions['administer pathauto'] = array(
    'name' => 'administer pathauto',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'pathauto',
  );

  // Exported permission: 'administer permissions'.
  $permissions['administer permissions'] = array(
    'name' => 'administer permissions',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'user',
  );

  // Exported permission: 'administer redirects'.
  $permissions['administer redirects'] = array(
    'name' => 'administer redirects',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'redirect',
  );

  // Exported permission: 'administer rules'.
  $permissions['administer rules'] = array(
    'name' => 'administer rules',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'rules',
  );

  // Exported permission: 'administer services'.
  $permissions['administer services'] = array(
    'name' => 'administer services',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'services',
  );

  // Exported permission: 'administer shortcuts'.
  $permissions['administer shortcuts'] = array(
    'name' => 'administer shortcuts',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'shortcut',
  );

  // Exported permission: 'administer site configuration'.
  $permissions['administer site configuration'] = array(
    'name' => 'administer site configuration',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'system',
  );

  // Exported permission: 'administer software updates'.
  $permissions['administer software updates'] = array(
    'name' => 'administer software updates',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'system',
  );

  // Exported permission: 'administer taxonomy'.
  $permissions['administer taxonomy'] = array(
    'name' => 'administer taxonomy',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'taxonomy',
  );

  // Exported permission: 'administer themes'.
  $permissions['administer themes'] = array(
    'name' => 'administer themes',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'system',
  );

  // Exported permission: 'administer url aliases'.
  $permissions['administer url aliases'] = array(
    'name' => 'administer url aliases',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'path',
  );

  // Exported permission: 'administer users'.
  $permissions['administer users'] = array(
    'name' => 'administer users',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'user',
  );

  // Exported permission: 'administer views'.
  $permissions['administer views'] = array(
    'name' => 'administer views',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'views',
  );

  // Exported permission: 'administer workbench'.
  $permissions['administer workbench'] = array(
    'name' => 'administer workbench',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'workbench',
  );

  // Exported permission: 'administer workbench moderation'.
  $permissions['administer workbench moderation'] = array(
    'name' => 'administer workbench moderation',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'workbench_moderation',
  );

  // Exported permission: 'administer xmlsitemap'.
  $permissions['administer xmlsitemap'] = array(
    'name' => 'administer xmlsitemap',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'xmlsitemap',
  );

  // Exported permission: 'advanced migration information'.
  $permissions['advanced migration information'] = array(
    'name' => 'advanced migration information',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'migrate',
  );

  // Exported permission: 'block IP addresses'.
  $permissions['block IP addresses'] = array(
    'name' => 'block IP addresses',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'system',
  );

  // Exported permission: 'bypass file access'.
  $permissions['bypass file access'] = array(
    'name' => 'bypass file access',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'bypass mollom protection'.
  $permissions['bypass mollom protection'] = array(
    'name' => 'bypass mollom protection',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'mollom',
  );

  // Exported permission: 'bypass node access'.
  $permissions['bypass node access'] = array(
    'name' => 'bypass node access',
    'roles' => array(),
    'module' => 'node',
  );

  // Exported permission: 'bypass rules access'.
  $permissions['bypass rules access'] = array(
    'name' => 'bypass rules access',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'rules',
  );

  // Exported permission: 'bypass workbench moderation'.
  $permissions['bypass workbench moderation'] = array(
    'name' => 'bypass workbench moderation',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'workbench_moderation',
  );

  // Exported permission: 'cancel account'.
  $permissions['cancel account'] = array(
    'name' => 'cancel account',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'user',
  );

  // Exported permission: 'change layouts in place editing'.
  $permissions['change layouts in place editing'] = array(
    'name' => 'change layouts in place editing',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'panels',
  );

  // Exported permission: 'change own username'.
  $permissions['change own username'] = array(
    'name' => 'change own username',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'user',
  );

  // Exported permission: 'create any bean_tax_listing bean'.
  $permissions['create any bean_tax_listing bean'] = array(
    'name' => 'create any bean_tax_listing bean',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'bean',
  );

  // Exported permission: 'create any bean_tax_related bean'.
  $permissions['create any bean_tax_related bean'] = array(
    'name' => 'create any bean_tax_related bean',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'bean',
  );

  // Exported permission: 'create event content'.
  $permissions['create event content'] = array(
    'name' => 'create event content',
    'roles' => array(),
    'module' => 'node',
  );

  // Exported permission: 'create event_state content'.
  $permissions['create event_state content'] = array(
    'name' => 'create event_state content',
    'roles' => array(),
    'module' => 'node',
  );

  // Exported permission: 'create fieldable content'.
  $permissions['create fieldable content'] = array(
    'name' => 'create fieldable content',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'create fieldable fieldable_panels_pane'.
  $permissions['create fieldable fieldable_panels_pane'] = array(
    'name' => 'create fieldable fieldable_panels_pane',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'create fieldable map'.
  $permissions['create fieldable map'] = array(
    'name' => 'create fieldable map',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'create fieldable media_pane'.
  $permissions['create fieldable media_pane'] = array(
    'name' => 'create fieldable media_pane',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'create fieldable quick_links'.
  $permissions['create fieldable quick_links'] = array(
    'name' => 'create fieldable quick_links',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'create fieldable raw_html'.
  $permissions['create fieldable raw_html'] = array(
    'name' => 'create fieldable raw_html',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'create fieldable text'.
  $permissions['create fieldable text'] = array(
    'name' => 'create fieldable text',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'create files'.
  $permissions['create files'] = array(
    'name' => 'create files',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'create rich_page content'.
  $permissions['create rich_page content'] = array(
    'name' => 'create rich_page content',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'node',
  );

  // Exported permission: 'create url aliases'.
  $permissions['create url aliases'] = array(
    'name' => 'create url aliases',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'path',
  );

  // Exported permission: 'create webform content'.
  $permissions['create webform content'] = array(
    'name' => 'create webform content',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'customize ckeditor'.
  $permissions['customize ckeditor'] = array(
    'name' => 'customize ckeditor',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'ckeditor',
  );

  // Exported permission: 'customize shortcut links'.
  $permissions['customize shortcut links'] = array(
    'name' => 'customize shortcut links',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'shortcut',
  );

  // Exported permission: 'delete all webform submissions'.
  $permissions['delete all webform submissions'] = array(
    'name' => 'delete all webform submissions',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'webform',
  );

  // Exported permission: 'delete any audio files'.
  $permissions['delete any audio files'] = array(
    'name' => 'delete any audio files',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'delete any bean_tax_listing bean'.
  $permissions['delete any bean_tax_listing bean'] = array(
    'name' => 'delete any bean_tax_listing bean',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'bean',
  );

  // Exported permission: 'delete any bean_tax_related bean'.
  $permissions['delete any bean_tax_related bean'] = array(
    'name' => 'delete any bean_tax_related bean',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'bean',
  );

  // Exported permission: 'delete any document files'.
  $permissions['delete any document files'] = array(
    'name' => 'delete any document files',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'delete any entityform'.
  $permissions['delete any entityform'] = array(
    'name' => 'delete any entityform',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'entityform',
  );

  // Exported permission: 'delete any event content'.
  $permissions['delete any event content'] = array(
    'name' => 'delete any event content',
    'roles' => array(),
    'module' => 'node',
  );

  // Exported permission: 'delete any event_state content'.
  $permissions['delete any event_state content'] = array(
    'name' => 'delete any event_state content',
    'roles' => array(),
    'module' => 'node',
  );

  // Exported permission: 'delete any image files'.
  $permissions['delete any image files'] = array(
    'name' => 'delete any image files',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'delete any rich_page content'.
  $permissions['delete any rich_page content'] = array(
    'name' => 'delete any rich_page content',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete any video files'.
  $permissions['delete any video files'] = array(
    'name' => 'delete any video files',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'delete any webform content'.
  $permissions['delete any webform content'] = array(
    'name' => 'delete any webform content',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete fieldable content'.
  $permissions['delete fieldable content'] = array(
    'name' => 'delete fieldable content',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'delete fieldable fieldable_panels_pane'.
  $permissions['delete fieldable fieldable_panels_pane'] = array(
    'name' => 'delete fieldable fieldable_panels_pane',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'delete fieldable map'.
  $permissions['delete fieldable map'] = array(
    'name' => 'delete fieldable map',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'delete fieldable media_pane'.
  $permissions['delete fieldable media_pane'] = array(
    'name' => 'delete fieldable media_pane',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'delete fieldable quick_links'.
  $permissions['delete fieldable quick_links'] = array(
    'name' => 'delete fieldable quick_links',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'delete fieldable raw_html'.
  $permissions['delete fieldable raw_html'] = array(
    'name' => 'delete fieldable raw_html',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'delete fieldable text'.
  $permissions['delete fieldable text'] = array(
    'name' => 'delete fieldable text',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'delete own audio files'.
  $permissions['delete own audio files'] = array(
    'name' => 'delete own audio files',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'delete own document files'.
  $permissions['delete own document files'] = array(
    'name' => 'delete own document files',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'delete own entityform'.
  $permissions['delete own entityform'] = array(
    'name' => 'delete own entityform',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'entityform',
  );

  // Exported permission: 'delete own event content'.
  $permissions['delete own event content'] = array(
    'name' => 'delete own event content',
    'roles' => array(),
    'module' => 'node',
  );

  // Exported permission: 'delete own event_state content'.
  $permissions['delete own event_state content'] = array(
    'name' => 'delete own event_state content',
    'roles' => array(),
    'module' => 'node',
  );

  // Exported permission: 'delete own image files'.
  $permissions['delete own image files'] = array(
    'name' => 'delete own image files',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'delete own rich_page content'.
  $permissions['delete own rich_page content'] = array(
    'name' => 'delete own rich_page content',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete own video files'.
  $permissions['delete own video files'] = array(
    'name' => 'delete own video files',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'delete own webform content'.
  $permissions['delete own webform content'] = array(
    'name' => 'delete own webform content',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete own webform submissions'.
  $permissions['delete own webform submissions'] = array(
    'name' => 'delete own webform submissions',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'webform',
  );

  // Exported permission: 'delete revisions'.
  $permissions['delete revisions'] = array(
    'name' => 'delete revisions',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete terms in event_flag'.
  $permissions['delete terms in event_flag'] = array(
    'name' => 'delete terms in event_flag',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'taxonomy',
  );

  // Exported permission: 'delete terms in event_type'.
  $permissions['delete terms in event_type'] = array(
    'name' => 'delete terms in event_type',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'taxonomy',
  );

  // Exported permission: 'delete terms in faq_topic'.
  $permissions['delete terms in faq_topic'] = array(
    'name' => 'delete terms in faq_topic',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'taxonomy',
  );

  // Exported permission: 'delete terms in target_audience'.
  $permissions['delete terms in target_audience'] = array(
    'name' => 'delete terms in target_audience',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'taxonomy',
  );

  // Exported permission: 'download any audio files'.
  $permissions['download any audio files'] = array(
    'name' => 'download any audio files',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'download any document files'.
  $permissions['download any document files'] = array(
    'name' => 'download any document files',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'download any image files'.
  $permissions['download any image files'] = array(
    'name' => 'download any image files',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'download any video files'.
  $permissions['download any video files'] = array(
    'name' => 'download any video files',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'download own audio files'.
  $permissions['download own audio files'] = array(
    'name' => 'download own audio files',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'download own document files'.
  $permissions['download own document files'] = array(
    'name' => 'download own document files',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'download own image files'.
  $permissions['download own image files'] = array(
    'name' => 'download own image files',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'download own video files'.
  $permissions['download own video files'] = array(
    'name' => 'download own video files',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'edit all webform submissions'.
  $permissions['edit all webform submissions'] = array(
    'name' => 'edit all webform submissions',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'webform',
  );

  // Exported permission: 'edit any audio files'.
  $permissions['edit any audio files'] = array(
    'name' => 'edit any audio files',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'edit any bean_tax_listing bean'.
  $permissions['edit any bean_tax_listing bean'] = array(
    'name' => 'edit any bean_tax_listing bean',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'bean',
  );

  // Exported permission: 'edit any bean_tax_related bean'.
  $permissions['edit any bean_tax_related bean'] = array(
    'name' => 'edit any bean_tax_related bean',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'bean',
  );

  // Exported permission: 'edit any document files'.
  $permissions['edit any document files'] = array(
    'name' => 'edit any document files',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'edit any entityform'.
  $permissions['edit any entityform'] = array(
    'name' => 'edit any entityform',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'entityform',
  );

  // Exported permission: 'edit any event content'.
  $permissions['edit any event content'] = array(
    'name' => 'edit any event content',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit any event_state content'.
  $permissions['edit any event_state content'] = array(
    'name' => 'edit any event_state content',
    'roles' => array(),
    'module' => 'node',
  );

  // Exported permission: 'edit any image files'.
  $permissions['edit any image files'] = array(
    'name' => 'edit any image files',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'edit any rich_page content'.
  $permissions['edit any rich_page content'] = array(
    'name' => 'edit any rich_page content',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit any video files'.
  $permissions['edit any video files'] = array(
    'name' => 'edit any video files',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'edit any webform content'.
  $permissions['edit any webform content'] = array(
    'name' => 'edit any webform content',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit bean view mode'.
  $permissions['edit bean view mode'] = array(
    'name' => 'edit bean view mode',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'bean',
  );

  // Exported permission: 'edit fieldable content'.
  $permissions['edit fieldable content'] = array(
    'name' => 'edit fieldable content',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'edit fieldable fieldable_panels_pane'.
  $permissions['edit fieldable fieldable_panels_pane'] = array(
    'name' => 'edit fieldable fieldable_panels_pane',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'edit fieldable map'.
  $permissions['edit fieldable map'] = array(
    'name' => 'edit fieldable map',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'edit fieldable media_pane'.
  $permissions['edit fieldable media_pane'] = array(
    'name' => 'edit fieldable media_pane',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'edit fieldable quick_links'.
  $permissions['edit fieldable quick_links'] = array(
    'name' => 'edit fieldable quick_links',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'edit fieldable raw_html'.
  $permissions['edit fieldable raw_html'] = array(
    'name' => 'edit fieldable raw_html',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'edit fieldable text'.
  $permissions['edit fieldable text'] = array(
    'name' => 'edit fieldable text',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'edit meta tags'.
  $permissions['edit meta tags'] = array(
    'name' => 'edit meta tags',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'metatag',
  );

  // Exported permission: 'edit own audio files'.
  $permissions['edit own audio files'] = array(
    'name' => 'edit own audio files',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'edit own document files'.
  $permissions['edit own document files'] = array(
    'name' => 'edit own document files',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'edit own entityform'.
  $permissions['edit own entityform'] = array(
    'name' => 'edit own entityform',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'entityform',
  );

  // Exported permission: 'edit own event content'.
  $permissions['edit own event content'] = array(
    'name' => 'edit own event content',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit own event_state content'.
  $permissions['edit own event_state content'] = array(
    'name' => 'edit own event_state content',
    'roles' => array(),
    'module' => 'node',
  );

  // Exported permission: 'edit own image files'.
  $permissions['edit own image files'] = array(
    'name' => 'edit own image files',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'edit own rich_page content'.
  $permissions['edit own rich_page content'] = array(
    'name' => 'edit own rich_page content',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit own video files'.
  $permissions['edit own video files'] = array(
    'name' => 'edit own video files',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'edit own webform content'.
  $permissions['edit own webform content'] = array(
    'name' => 'edit own webform content',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit own webform submissions'.
  $permissions['edit own webform submissions'] = array(
    'name' => 'edit own webform submissions',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'webform',
  );

  // Exported permission: 'edit terms in event_flag'.
  $permissions['edit terms in event_flag'] = array(
    'name' => 'edit terms in event_flag',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'taxonomy',
  );

  // Exported permission: 'edit terms in event_type'.
  $permissions['edit terms in event_type'] = array(
    'name' => 'edit terms in event_type',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'taxonomy',
  );

  // Exported permission: 'edit terms in faq_topic'.
  $permissions['edit terms in faq_topic'] = array(
    'name' => 'edit terms in faq_topic',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'taxonomy',
  );

  // Exported permission: 'edit terms in target_audience'.
  $permissions['edit terms in target_audience'] = array(
    'name' => 'edit terms in target_audience',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'taxonomy',
  );

  // Exported permission: 'edit webform components'.
  $permissions['edit webform components'] = array(
    'name' => 'edit webform components',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'webform',
  );

  // Exported permission: 'generate features'.
  $permissions['generate features'] = array(
    'name' => 'generate features',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'features',
  );

  // Exported permission: 'get a system variable'.
  $permissions['get a system variable'] = array(
    'name' => 'get a system variable',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'services',
  );

  // Exported permission: 'get any binary files'.
  $permissions['get any binary files'] = array(
    'name' => 'get any binary files',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'services',
  );

  // Exported permission: 'get own binary files'.
  $permissions['get own binary files'] = array(
    'name' => 'get own binary files',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'services',
  );

  // Exported permission: 'import media'.
  $permissions['import media'] = array(
    'name' => 'import media',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'media_bulk_upload',
  );

  // Exported permission: 'manage features'.
  $permissions['manage features'] = array(
    'name' => 'manage features',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'features',
  );

  // Exported permission: 'migration information'.
  $permissions['migration information'] = array(
    'name' => 'migration information',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'migrate',
  );

  // Exported permission: 'moderate content from draft to needs_review'.
  $permissions['moderate content from draft to needs_review'] = array(
    'name' => 'moderate content from draft to needs_review',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'workbench_moderation',
  );

  // Exported permission: 'moderate content from needs_review to draft'.
  $permissions['moderate content from needs_review to draft'] = array(
    'name' => 'moderate content from needs_review to draft',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'workbench_moderation',
  );

  // Exported permission: 'moderate content from needs_review to published'.
  $permissions['moderate content from needs_review to published'] = array(
    'name' => 'moderate content from needs_review to published',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'workbench_moderation',
  );

  // Exported permission: 'notify of path changes'.
  $permissions['notify of path changes'] = array(
    'name' => 'notify of path changes',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'pathauto',
  );

  // Exported permission: 'oauth authorize any consumers'.
  $permissions['oauth authorize any consumers'] = array(
    'name' => 'oauth authorize any consumers',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'oauth_common',
  );

  // Exported permission: 'oauth register any consumers'.
  $permissions['oauth register any consumers'] = array(
    'name' => 'oauth register any consumers',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'oauth_common',
  );

  // Exported permission: 'opt-in or out of tracking'.
  $permissions['opt-in or out of tracking'] = array(
    'name' => 'opt-in or out of tracking',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'googleanalytics',
  );

  // Exported permission: 'perform unlimited index queries'.
  $permissions['perform unlimited index queries'] = array(
    'name' => 'perform unlimited index queries',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'services',
  );

  // Exported permission: 'rename features'.
  $permissions['rename features'] = array(
    'name' => 'rename features',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'features',
  );

  // Exported permission: 'report to mollom'.
  $permissions['report to mollom'] = array(
    'name' => 'report to mollom',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'mollom',
  );

  // Exported permission: 'revert revisions'.
  $permissions['revert revisions'] = array(
    'name' => 'revert revisions',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'node',
  );

  // Exported permission: 'save file information'.
  $permissions['save file information'] = array(
    'name' => 'save file information',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'services',
  );

  // Exported permission: 'schedule revisions'.
  $permissions['schedule revisions'] = array(
    'name' => 'schedule revisions',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'revision_scheduler',
  );

  // Exported permission: 'select account cancellation method'.
  $permissions['select account cancellation method'] = array(
    'name' => 'select account cancellation method',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'user',
  );

  // Exported permission: 'set a system variable'.
  $permissions['set a system variable'] = array(
    'name' => 'set a system variable',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'services',
  );

  // Exported permission: 'show format selection for bean'.
  $permissions['show format selection for bean'] = array(
    'name' => 'show format selection for bean',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'better_formats',
  );

  // Exported permission: 'show format selection for entityform'.
  $permissions['show format selection for entityform'] = array(
    'name' => 'show format selection for entityform',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'better_formats',
  );

  // Exported permission: 'show format selection for field_collection_item'.
  $permissions['show format selection for field_collection_item'] = array(
    'name' => 'show format selection for field_collection_item',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'better_formats',
  );

  // Exported permission: 'show format selection for fieldable_panels_pane'.
  $permissions['show format selection for fieldable_panels_pane'] = array(
    'name' => 'show format selection for fieldable_panels_pane',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'better_formats',
  );

  // Exported permission: 'show format selection for file'.
  $permissions['show format selection for file'] = array(
    'name' => 'show format selection for file',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'better_formats',
  );

  // Exported permission: 'show format selection for flagging'.
  $permissions['show format selection for flagging'] = array(
    'name' => 'show format selection for flagging',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'better_formats',
  );

  // Exported permission: 'show format selection for node'.
  $permissions['show format selection for node'] = array(
    'name' => 'show format selection for node',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'better_formats',
  );

  // Exported permission: 'show format selection for og_membership'.
  $permissions['show format selection for og_membership'] = array(
    'name' => 'show format selection for og_membership',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'better_formats',
  );

  // Exported permission: 'show format selection for og_membership_type'.
  $permissions['show format selection for og_membership_type'] = array(
    'name' => 'show format selection for og_membership_type',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'better_formats',
  );

  // Exported permission: 'show format selection for rules_config'.
  $permissions['show format selection for rules_config'] = array(
    'name' => 'show format selection for rules_config',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'better_formats',
  );

  // Exported permission: 'show format selection for taxonomy_term'.
  $permissions['show format selection for taxonomy_term'] = array(
    'name' => 'show format selection for taxonomy_term',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'better_formats',
  );

  // Exported permission: 'show format selection for user'.
  $permissions['show format selection for user'] = array(
    'name' => 'show format selection for user',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'better_formats',
  );

  // Exported permission: 'show format tips'.
  $permissions['show format tips'] = array(
    'name' => 'show format tips',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'better_formats',
  );

  // Exported permission: 'show more format tips link'.
  $permissions['show more format tips link'] = array(
    'name' => 'show more format tips link',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'better_formats',
  );

  // Exported permission: 'switch shortcut sets'.
  $permissions['switch shortcut sets'] = array(
    'name' => 'switch shortcut sets',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'shortcut',
  );

  // Exported permission: 'translate interface'.
  $permissions['translate interface'] = array(
    'name' => 'translate interface',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'locale',
  );

  // Exported permission: 'use PHP for service visibility'.
  $permissions['use PHP for service visibility'] = array(
    'name' => 'use PHP for service visibility',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'service_links',
  );

  // Exported permission: 'use PHP for tracking visibility'.
  $permissions['use PHP for tracking visibility'] = array(
    'name' => 'use PHP for tracking visibility',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'googleanalytics',
  );

  // Exported permission: 'use ctools import'.
  $permissions['use ctools import'] = array(
    'name' => 'use ctools import',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'ctools',
  );

  // Exported permission: 'use flag import'.
  $permissions['use flag import'] = array(
    'name' => 'use flag import',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'flag',
  );

  // Exported permission: 'use hybridauth'.
  $permissions['use hybridauth'] = array(
    'name' => 'use hybridauth',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'hybridauth',
  );

  // Exported permission: 'use ipe with page manager'.
  $permissions['use ipe with page manager'] = array(
    'name' => 'use ipe with page manager',
    'roles' => array(
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
      'administrator' => 'administrator',
      'editor' => 'editor',
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
      'administrator' => 'administrator',
    ),
    'module' => 'filter',
  );

  // Exported permission: 'use text format full_html'.
  $permissions['use text format full_html'] = array(
    'name' => 'use text format full_html',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'filter',
  );

  // Exported permission: 'use text format raw_html'.
  $permissions['use text format raw_html'] = array(
    'name' => 'use text format raw_html',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'filter',
  );

  // Exported permission: 'use text format userbase'.
  $permissions['use text format userbase'] = array(
    'name' => 'use text format userbase',
    'roles' => array(
      'administrator' => 'administrator',
      'authenticated user' => 'authenticated user',
    ),
    'module' => 'filter',
  );

  // Exported permission: 'use workbench_moderation my drafts tab'.
  $permissions['use workbench_moderation my drafts tab'] = array(
    'name' => 'use workbench_moderation my drafts tab',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'workbench_moderation',
  );

  // Exported permission: 'use workbench_moderation needs review tab'.
  $permissions['use workbench_moderation needs review tab'] = array(
    'name' => 'use workbench_moderation needs review tab',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'workbench_moderation',
  );

  // Exported permission: 'view all unpublished content'.
  $permissions['view all unpublished content'] = array(
    'name' => 'view all unpublished content',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'workbench_moderation',
  );

  // Exported permission: 'view any bean_tax_listing bean'.
  $permissions['view any bean_tax_listing bean'] = array(
    'name' => 'view any bean_tax_listing bean',
    'roles' => array(
      'administrator' => 'administrator',
      'anonymous user' => 'anonymous user',
      'authenticated user' => 'authenticated user',
    ),
    'module' => 'bean',
  );

  // Exported permission: 'view any bean_tax_related bean'.
  $permissions['view any bean_tax_related bean'] = array(
    'name' => 'view any bean_tax_related bean',
    'roles' => array(
      'administrator' => 'administrator',
      'anonymous user' => 'anonymous user',
      'authenticated user' => 'authenticated user',
    ),
    'module' => 'bean',
  );

  // Exported permission: 'view any entityform'.
  $permissions['view any entityform'] = array(
    'name' => 'view any entityform',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'entityform',
  );

  // Exported permission: 'view bean page'.
  $permissions['view bean page'] = array(
    'name' => 'view bean page',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'bean',
  );

  // Exported permission: 'view bean revisions'.
  $permissions['view bean revisions'] = array(
    'name' => 'view bean revisions',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'bean',
  );

  // Exported permission: 'view ember support mods'.
  $permissions['view ember support mods'] = array(
    'name' => 'view ember support mods',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'ember_support',
  );

  // Exported permission: 'view files'.
  $permissions['view files'] = array(
    'name' => 'view files',
    'roles' => array(
      'administrator' => 'administrator',
      'anonymous user' => 'anonymous user',
      'authenticated user' => 'authenticated user',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'view moderation history'.
  $permissions['view moderation history'] = array(
    'name' => 'view moderation history',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'workbench_moderation',
  );

  // Exported permission: 'view moderation messages'.
  $permissions['view moderation messages'] = array(
    'name' => 'view moderation messages',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'workbench_moderation',
  );

  // Exported permission: 'view own entityform'.
  $permissions['view own entityform'] = array(
    'name' => 'view own entityform',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'entityform',
  );

  // Exported permission: 'view own files'.
  $permissions['view own files'] = array(
    'name' => 'view own files',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'view own private files'.
  $permissions['view own private files'] = array(
    'name' => 'view own private files',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'view own unpublished content'.
  $permissions['view own unpublished content'] = array(
    'name' => 'view own unpublished content',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'node',
  );

  // Exported permission: 'view pane admin links'.
  $permissions['view pane admin links'] = array(
    'name' => 'view pane admin links',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'panels',
  );

  // Exported permission: 'view private files'.
  $permissions['view private files'] = array(
    'name' => 'view private files',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'view revisions'.
  $permissions['view revisions'] = array(
    'name' => 'view revisions',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'node',
  );

  // Exported permission: 'view the administration theme'.
  $permissions['view the administration theme'] = array(
    'name' => 'view the administration theme',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'system',
  );

  return $permissions;
}
