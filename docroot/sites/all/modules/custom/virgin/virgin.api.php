<?php

/**
 * Add allowed current paths to be redirected, paths that you have sure that
 * doesn't create a redirect loop.
 */
function hook_virgin_exception_redirect_paths() {
  return array(
    'user/%/edit'
  );
}
