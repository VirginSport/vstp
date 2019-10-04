<?php
/**
 * @file
 * User login template.
 */

$query = drupal_get_query_parameters();
?>

<div class="vs-head-region">
  <div class="vs-region vs-region--no-padding">
    <div class="vs-hero-banner vs-hero-banner--small">
      <div class="vs-hero-banner__background vs-hero-banner__default-background">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <h2 class="vs-hero-banner__title"><?php print t('Login'); ?></h2>
              <div class="vs-hero-banner-block__subtitle"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="vs-region vs-region--gradient-default" data-vs-region-curved="1" data-vs-region-color="default" data-vs-region-overlap="<?php print empty($claim_ticket) ? 'none' : 'medium'; ?>">
  <?php print $claim_ticket; ?>

  <div class="container vs-user-login v-element">
    <div class="row">
      <div class="col-xs-12">
        <ul class="nav nav-tabs vs-tabs--color-blue">
          <li class="nav-item active">
            <h3 class="vs-tabs__nav-link-wrapper">
              <?php print t('Sign In'); ?>
            </h3>
          </li>
        </ul>
        <div class="tab-content">
          <div class="tab-pane fade in active">
            <div class="vs-login-update-notice col-xs-12 col-md-10 offset-md-1 col-lg-6 offset-lg-3">
              <h3><?php print t('NOTICE'); ?></h3>
              <p><?php print t('All event registrations are now handled using Race Roster.<br>Please use the registration links on the individual event pages to sign up.'); ?></p>
            </div>
            <div class="vs-user-login--form-drupal hidden-xs-up">
              <?php print drupal_render($login_form); ?>
            </div>

            <div class="row">
              <div class="col-xs-12 col-md-10 offset-md-1 col-lg-6 offset-lg-3">
                <div class="vs-user-login--form">
                  <div class="vs-user-login--form" v-on:keyup.enter="submit">
                    <validator name="vs_user_login_validator">
                      <div class="row">
                        <div class="col-xs-12">
                          <div class="vs-user-form__wrapper">
                            <div class="field-name vs-form-group" :class="{ 'vs-has-error': ($vs_user_login_validator.name.dirty || submitted) && !$vs_user_login_validator.name.valid }">
                              <input autocorrect="off" autocapitalize="none" id="name" class="form-control" type="email" v-model="profile.name" name="name" v-validate:name="['required']">
                              <label for="name" class="vs-focus-label"><?php print t('Email'); ?>*</label>
                              <div class="vs-error-label" v-if="($vs_user_login_validator.name.dirty || submitted) && $vs_user_login_validator.name.required"><?php print t('Name is required'); ?></div>
                            </div>

                            <div class="field-password vs-form-group" :class="{ 'vs-has-error': ($vs_user_login_validator.password.dirty || submitted) && !$vs_user_login_validator.password.valid }">
                              <input id="password" class="form-control" type="password" v-model="profile.password" name="password" v-validate:password="['required']" v-on:change="password_changed = true">
                              <label for="password" class="vs-focus-label"><?php print t('Password'); ?>*</label>
                              <div class="vs-error-label" v-if="($vs_user_login_validator.password.dirty || submitted) && $vs_user_login_validator.password.required"><?php print t('Password is required'); ?></div>
                            </div>

                            <a href="<?php print url('user/password', array('query' => $query)); ?>" class="vs-user-login--form__recover-pass">
                              <?php print t('Forgot password?'); ?>
                            </a>

                            <button v-on:click="submit" class="btn vs-btn vs-btn--lg vs-btn--min-lg vs-user-login--form-submit"><?php print t('Sign in'); ?></button>
                          </div>
                        </div>
                      </div>
                    </validator>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
