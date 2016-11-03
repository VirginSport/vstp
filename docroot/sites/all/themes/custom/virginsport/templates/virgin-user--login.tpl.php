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
      <div class="vs-hero-banner__background">
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

<div id="vs-user-login" class="vs-region vs-region--gradient-default" data-vs-region-curved="1" data-vs-region-color="default">
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
              <div class="col-xs-12">
                <div class="social-networks">
                  <?php print drupal_render($hybridauth_widget); ?>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-xs-12">

                <div><?php print t('Or with an email address'); ?></div>

                <form @submit.prevent class="vs-user-login--form" novalidate>
                  <validator name="vs_user_login_validator">
                    <div class="row">
                      <div class="col-xs-12">
                        <div class="field-name">
                          <label><?php print t('Name'); ?>*</label>
                            <input type="text" v-model="profile.name" name="name" v-validate:name="['required']">
                            <div v-if="$vs_user_login_validator.name.dirty && $vs_user_login_validator.name.required"><?php print t('Name is required'); ?></div>
                        </div>

                        <div class="field-password">
                          <label><?php print t('Password'); ?>*</label>
                          <input type="password" v-model="profile.password" name="password" v-validate:password="['required']">
                          <div v-if="$vs_user_login_validator.password.dirty && $vs_user_login_validator.password.required"><?php print t('Password is required'); ?></div>
                        </div>

                        <a href="<?php print url('user/password', array('query' => $query)); ?>">
                          <?php print t('Forgot password?'); ?>
                        </a>

                        <button :disabled="!$vs_user_login_validator.valid" v-on:click="submit"><?php print t('Sign Up'); ?></button>

                        <div>
                          <?php print t('Not yet a member?'); ?>
                          <a href="<?php print url('user/register', array('query' => $query)); ?>">
                            <?php print t('Sign up'); ?>
                          </a>
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
