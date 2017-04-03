<?php

if ($is_ah_env) {
  switch ($ah_env) {
    case 'prod':
    case 'prelaunch':

      // Enforce caching in production.
      $conf['cache'] = TRUE;

      // When using varnish, set cache_lifetime to 0.
      // @see https://backlog.acquia.com/browse/NN-7868 and
      // https://confluence.acquia.com/display/support/Caching+Bible
      // Setting this to 0 allows direct cache clears to clear caches that
      // have not yet reached expiration.
      // Sites with large amounts of content creation/edits could benefit from
      // setting this to a non-zero value as it impacts the block cache as well.
      $conf['cache_lifetime'] = 0;

      // Set default cache expiration to 5 mins.
      $conf['page_cache_maximum_age'] = 300;

      $conf['block_cache'] = TRUE;

      /**
       * Block caching:
       *
       * Block caching may not be compatible with node access modules depending on
       * how the original block cache policy is defined by the module that provides
       * the block. By default, Drupal therefore disables block caching when one or
       * more modules implement hook_node_grants(). If you consider block caching to
       * be safe on your site and want to bypass this restriction, uncomment the line
       * below.
       */
      // Allows Block to be cached on sites with hook_node_grant() implementations
      // $conf['block_cache_bypass_node_grants'] = TRUE;

      // Enforce aggregation and compression.
      $conf['page_compression'] = TRUE;
      $conf['preprocess_css'] = TRUE;
      $conf['preprocess_js'] = TRUE;

      // Disabling error reporting, which prevents caching.
      $conf['error_level'] = 0;
      break;
  }

  // Added to the memcache module in version 7.x-1.6
  // Force memcache to use PHP's core serialize functions.
  $conf['memcache_serialize'] = 'serialize';

  // Memcache for caching on Acquia Cloud.
  $conf['cache_backends'][] = $module_dir . '/contrib/memcache/memcache.inc';
  $conf['lock_inc'] =  $module_dir . '/contrib/memcache/memcache-lock.inc';
  $conf['memcache_stampede_protection'] = TRUE;
  $conf['cache_default_class'] = 'MemCacheDrupal';

  // Memcache stampede protection can be disabled for entire bins, specific cid's
  // in specific bins, or cid's starting with a specific prefix in specific bins.
  // see: https://www.drupal.org/node/2419757
  $conf['memcache_stampede_protection_ignore'] = array(
    // Ignore some cids in 'cache_bootstrap'.
    'cache_bootstrap' => array(
      'module_implements',
      'variables',
      'lookup_cache',
      'schema:runtime:*',
      'theme_registry:runtime:*',
    ),
    // Ignore all cids in the 'cache' bin starting with 'i18n:string:'
    'cache' => array(
      'i18n:string:*',
    ),
    // Disable stampede protection for the entire 'cache_path' and 'cache_rules'
    // bins.
    'cache_path',
    'cache_rules',
    // Ignore stampede protection for cache_views because of delayed cache_set.
    'cache_views',
  );

  // The 'cache_form' bin must be assigned to non-volatile storage.
  $conf['cache_class_cache_form'] = 'DrupalDatabaseCache';

  // Cache bins that often grow too large to keep in memcache
  // $conf['cache_class_cache_entity_bean'] = 'DrupalDatabaseCache';
  // $conf['cache_class_cache_entity_comment'] = 'DrupalDatabaseCache';
  // $conf['cache_class_cache_entity_file'] = 'DrupalDatabaseCache';
  // $conf['cache_class_cache_entity_node'] = 'DrupalDatabaseCache';
  // $conf['cache_class_cache_block'] = 'DrupalDatabaseCache';
  // $conf['cache_class_cache_views']      = 'DrupalDatabaseCache';
  // $conf['cache_class_cache_views_data'] = 'DrupalDatabaseCache';

  // Don't bootstrap the database when serving pages from the cache.
  // With the page cache disabled, no sense invoking hooks. Note that this is
  // NOT compatible with domain access.
  $conf['page_cache_without_database'] = TRUE;
  $conf['page_cache_invoke_hooks'] = FALSE;

  // Varnish and page caching are fundamentally the same. In all SSL through
  // Varnish backed environments (all Acquia envs), disable the page cache.
  // @See https://backlog.acquia.com/browse/DOC-2961
  $conf['cache_backends'][] = 'includes/cache-install.inc';
  $conf['cache_class_cache_page'] = 'DrupalFakeCache';

  // Even though our page cache backend is fake, setting redirects to be
  // stored in the page cache will set the appropriate cache headers.
  $conf['redirect_page_cache'] = TRUE;
}


/** Override and configure domain detection in Acquia Purge. */
if ($is_ah_env) {

  // Only purge https content as all requests are routed to https
  $conf['acquia_purge_https'] = TRUE;
  $conf['acquia_purge_http'] = FALSE;

  switch ($ah_env) {
    case 'prod': // Production environment.
      $conf['acquia_purge_domains'] = array(
      'www.virginsport.com','uk.virginsport.com','us.virginsport.com',
        );
      // Don't log successful purges to avoid flooding prod,
      // errors are always logged.
      $conf['acquia_purge_log_success'] = FALSE;
      break;
    case 'prelaunch': // Staging environment.
      $conf['acquia_purge_domains'] = array(
        'www-prelaunch.virginsport.com','uk-prelaunch.virginsport.com','us-prelaunch.virginsport.com',
        );
      break;
    case 'test': // Staging environment.
      $conf['acquia_purge_domains'] = array(
        'www-stg.virginsport.com','uk-stg.virginsport.com','us-stg.virginsport.com',
        );
      break;
    case 'dev': // Development environment.
      $conf['acquia_purge_domains'] = array(
        'www-dev.virginsport.com','uk-dev.virginsport.com','us-dev.virginsport.com',
        );
      break;
    case 'ra': // RA environment
      $conf['acquia_purge_domains'] = array(
        'www-ra.virginsport.com','uk-ra.virginsport.com','us-ra.virginsport.com',
        );
      break;
    default:
      // Do nothing if no specific environment detected.
  }
} else {
  // Do not purge in other environments (such as local development).
  $conf['acquia_purge_passivemode'] = TRUE;
}
