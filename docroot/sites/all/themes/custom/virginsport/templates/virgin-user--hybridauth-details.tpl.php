<?php
/**
 * @file
 * Facebook gender select template.
 */

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

<div class="vs-region vs-region--gradient-default" data-vs-region-curved="1" data-vs-region-color="default">
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <div class="vs-content-wrapper vs-content-wrapper--white">
          <div class="row">
            <div class="col-xs-12 col-md-10 offset-md-1 col-lg-6 offset-lg-3">
              <div class="vs-user-form__wrapper">
                <div class="hidden-xs-up vs-user-hybridauth-form-drupal">
                  <?php print drupal_render($vars['form']); ?>
                </div>
  
                <h4 class="vs-form-header"><?php print t('Required information'); ?></h4>
                
                <div class="vs-form-header__info">
                  <?php print t('Please fill in additional information to complete your registration.'); ?>
                </div>
                <form @submit.prevent class="v-element vs-user-hybridauth-form" novalidate>
                  <validator name="vs_user_hybridauth_validator">
                    <?php if (isset($vars['form']['fset']['email'])): ?>
                    <div class="vs-form-group">
                      <input class="form-control" type="email" v-model="profile.field_mail" name="field_mail" id="field_mail" v-validate:field_email="['required','email']">
                      <label class="vs-focus-label" for="field_mail"><?php print t('Email Address'); ?>*</label>
                      <div class="vs-error-label" v-if="($vs_user_hybridauth_validator.dirty || submitted) && $vs_user_hybridauth_validator.field_email.required""><?php print t('Email is required'); ?></div>
                      <div class="vs-error-label" v-if="!$vs_user_hybridauth_validator.field_email.required && $vs_user_hybridauth_validator.field_email.email"><?php print t('Email is not valid'); ?></div>
                    </div>
                    <?php endif; ?>

                    <?php if (isset($vars['form']['fset']['gender'])): ?>
                    <div class="vs-form-group vs-form-group--radio-buttons vs-form-group--radio-buttons--inline" :class="{ 'vs-has-error': ($vs_user_hybridauth_validator.field_gender.dirty || submitted) && !$vs_user_hybridauth_validator.field_gender.valid }">
                      <div class="vs-label-form-wrapper d-block">
                        <label class="vs-label" for="field_gender"><?php print t('Gender'); ?>*</label>
                      </div>
                      <div class="vs-form-radio">
                        <input class="vs-form-input vs-form-input--radio" v-model="profile.field_gender" id="gender_female" name="field_gender" tabindex="1" type="radio" value="female" v-validate:field_gender="['required']">
                        <label class="vs-form-label vs-form-label--radio" for="gender_female"><?php print t('Female'); ?></label>
                      </div>
                      <div class="vs-form-radio">
                        <input class="vs-form-input vs-form-input--radio" v-model="profile.field_gender" id="gender_male" name="field_gender" tabindex="1" type="radio" value="male" v-validate:field_gender="['required']">
                        <label class="vs-form-label vs-form-label--radio" for="gender_male"><?php print t('Male'); ?></label>
                      </div>
                      <div class="vs-error-label d-block" v-if="($vs_user_hybridauth_validator.field_gender.dirty || submitted) && $vs_user_hybridauth_validator.field_gender.required"><?php print t('Gender is required'); ?></div>
                    </div>
                    <?php endif; ?>

                    <?php if (isset($vars['form']['fset']['field_marketing_optin'])): ?>
                      <div class="field-marketing vs-form-group vs-form-group--checkboxes">
                        <div class="vs-form-check">
                          <input type="checkbox" v-model="profile.field_marketing_optin" name="field_marketing_optin" id="field_marketing_optin" class="vs-form-input vs-form-input--check">
                          <label for="field_marketing_optin" class="vs-form-label vs-form-label--check vs-form-label--large">
                            <?php print t("I'd like to receive emails about Virgin Sport events, any special offers and competitions and its partners and their products. I understand that I can unsubscribe at any time and my email address will only be used in accordance with Virgin Sport’s privacy policy."); ?>
                          </label>
                        </div>
                      </div>
                    <?php endif; ?>

                    <div class="vs-form-submit">
                      <button :disabled="valid_submit" class="btn vs-btn vs-btn--lg vs-btn--min-lg" v-on:click="submit"><?php print ('Submit'); ?></button>
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
