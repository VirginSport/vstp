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
      <div
        class="vs-hero-banner__background vs-hero-banner__default-background">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <h2 class="vs-hero-banner__title"><?php print t(
                  'Recover Password'
                ); ?></h2>
              <div class="vs-hero-banner-block__subtitle"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div
  class="vs-user-password v-element vs-region vs-region--gradient-default"
  data-vs-region-curved="1" data-vs-region-color="default"
>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <div class="vs-user-password--form-drupal hidden-xs-up">
          <?php print drupal_render($password_form); ?>
        </div>

        <form @submit.prevent class="vs-user-password--form" novalidate>
          <!-- Profile Block -->
          <validator name="vs_user_password_validator">
            <div class="row">
              <div class="col-xs-12">
                <div class="vs-user-form__wrapper">
                  <div class="field-mail">
                    <div class="vs-form-group">
                      <input class="form-control" type="email" v-model="profile.field_mail" name="field_mail" id="field_mail" v-validate:field_email="{ required: true, email: true }">
                      <label class="vs-focus-label" for="field_mail"><?php print t('Email Address'); ?>*</label>
                      <div class="vs-error-label" v-if="$vs_user_password_validator.field_email.dirty && $vs_user_password_validator.field_email.required"><?php print t('Email is required'); ?></div>
                      <div class="vs-error-label" v-if="!$vs_user_password_validator.field_email.required && $vs_user_password_validator.field_email.email"><?php print t('Email is not valid'); ?></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </validator>

          <div class="col-xs-12">
            <div class="vs-user-form__wrapper">
              <button  :disabled="!$vs_user_password_validator.valid" v-on:click="submit" class="btn vs-btn vs-btn--min-xxl vs-user-password--form-submit"><?php print ('E-mail new Password'); ?></button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
