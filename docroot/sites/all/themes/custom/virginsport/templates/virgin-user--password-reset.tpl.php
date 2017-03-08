<?php
/**
 * @file
 * User password reset template.
 */
?>

<div class="vs-head-region">
  <div class="vs-region vs-region--no-padding">
    <div class="vs-hero-banner vs-hero-banner--small">
      <div
        class="vs-hero-banner__background vs-hero-banner__default-background">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <h1 class="vs-hero-banner__title"><?php print t('Reset Password'); ?></h1>
              <div class="vs-hero-banner-block__subtitle"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="vs-region vs-region--gradient-white" data-vs-region-curved="1" data-vs-region-color="default">
  <div class="container vs-user-password-reset">
    <div class="row">
      <div class="col-xs-12">
        <div class="vs-user-password-reset__drupal-form hidden-xs-up">
          <?php print drupal_render($form); ?>
        </div>

        <br>

        <p class="text-xs-center">
          <?php print t('Click on this button to log in and change your password.'); ?><br>
          <?php print t('This link can only be used once.'); ?>
        </p>

        <div class="col-xs-12">
          <div class="vs-user-form__wrapper">
            <div v-on:click="submit" class="btn vs-btn vs-btn--min-xxl vs-user-password--form-submit"><?php print ('Change Password'); ?></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
