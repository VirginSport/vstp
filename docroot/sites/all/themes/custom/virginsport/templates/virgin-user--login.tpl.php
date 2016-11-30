<?php
/**
 * @file
 * User login template.
 */

$query = drupal_get_query_parameters();
?>

<div class="vs-head-region">
  <div class="vs-region vs-region--no-padding">
    <div class="vs-hero-banner">
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

<div class="vs-user-login v-element vs-region vs-region--gradient-default" data-vs-region-curved="1" data-vs-region-color="default" data-vs-region-overlap="<?php print empty($claim_ticket) ? 'none' : 'medium'; ?>">
  <?php print $claim_ticket; ?>

  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <ul class="nav nav-tabs vs-tabs--color-blue">
          <li class="nav-item active">
            <a class="nav-link" href="<?php print url('user/login', array('query' => $query)); ?>">
              <?php print t('Sign In'); ?>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="<?php print url('user/register', array('query' => $query)); ?>">
              <?php print t('Sign Up'); ?>
            </a>
          </li>
        </ul>
        <div class="tab-content">
          <div class="tab-pane fade in active">
            <div class="vs-user-login--form-drupal hidden-xs-up">
              <?php print drupal_render($login_form); ?>
            </div>

            <div class="row">
              <div class="col-xs-12 col-md-10 offset-md-1 col-lg-6 offset-lg-3">
                <div class="social-networks">
                  <?php print drupal_render($hybridauth_widget); ?>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-xs-12 col-md-10 offset-md-1 col-lg-6 offset-lg-3">
                <div class="vs-user-login--form">
                  <div class="vs-user-form__email-text"><?php print t('Or with an email address'); ?></div>
                  <form @submit.prevent class="vs-user-login--form" novalidate>
                    <validator name="vs_user_login_validator">
                      <div class="row">
                        <div class="col-xs-12">
                          <div class="vs-user-form__wrapper">
                            <div class="field-name vs-form-group">
                              <input class="form-control" type="text" v-model="profile.name" name="name" v-validate:name="['required']">
                              <label class="vs-focus-label"><?php print t('Name'); ?>*</label>
                              <div class="vs-error-label" v-if="$vs_user_login_validator.name.dirty && $vs_user_login_validator.name.required"><?php print t('Name is required'); ?></div>
                            </div>

                            <div class="field-password vs-form-group">
                              <input class="form-control" type="password" v-model="profile.password" name="password" v-validate:password="['required']">
                              <label class="vs-focus-label"><?php print t('Password'); ?>*</label>
                              <div class="vs-error-label" v-if="$vs_user_login_validator.password.dirty && $vs_user_login_validator.password.required"><?php print t('Password is required'); ?></div>
                            </div>

                            <a href="<?php print url('user/password', array('query' => $query)); ?>" class="vs-user-login--form__recover-pass">
                              <?php print t('Forgot password?'); ?>
                            </a>

                            <button :disabled="!$vs_user_login_validator.name.required && !passwordValid()" v-on:click="submit" class="btn vs-btn vs-btn--lg vs-btn--min-lg vs-user-login--form-submit"><?php print t('Sign Up'); ?></button>

                            <div class="vs-user-form__member-text">
                              <?php print t('Not yet a member?'); ?>
                              <a href="<?php print url('user/register', array('query' => $query)); ?>">
                                <?php print t('Sign up'); ?>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </validator>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
