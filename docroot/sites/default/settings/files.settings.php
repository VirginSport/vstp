<?php

// In Acquia cloud, this file path is symlinked to the correct server dir.
$conf['file_public_path'] = 'sites/default/files';

// We write composer.json to sites/all/vendor so that it is under VCS,
// as per Composer's best practices.
// @see https://getcomposer.org/doc/01-basic-usage.md#composer-lock-the-lock-file
$conf['composer_manager_file_dir'] = '../';

// We do NOT put it at the repo root because we do not want composer_manager
// to overwrite the manually mantained composer.json (for automated testing)
// that lives there. This is not a best practice. It's either this, or register
// dependencies at /composer.json with Drupal via a module.
$conf['composer_manager_vendor_dir'] = '../vendor';

if ($is_ah_env) {
  // File directories.
  $conf['file_private_path'] = '/mnt/files/' . $_ENV['AH_SITE_NAME'] . '/files-private';
  $conf['file_temporary_path'] = '/mnt/tmp/' . $_ENV['AH_SITE_NAME'];

  // When we're on the Acquia Cloud, we won't have write access to
  // /vendor, so we disable auto-generation.
  $conf['composer_manager_autobuild_file'] = 0;
  $conf['composer_manager_autobuild_packages'] = 0;

  // Compensate for issues uploading files in ACE environments with multiple
  // web servers.
  // NOTE: you will need to SSH into your environments and create the temp dirs.
  // @see https://docs.acquia.com/articles/correcting-broken-uploads-acquia-cloud-enterprise
  // $conf['plupload_temporary_uri'] = "/mnt/gfs/{$_ENV['AH_SITE_GROUP']}.{$_ENV['AH_SITE_ENVIRONMENT']}/tmp";

}
// Settings for local development.
else {
  // Enable composer_manager autobuilds.
  $conf['composer_manager_autobuild_file'] = 1;
  $conf['composer_manager_autobuild_packages'] = 1;
}
