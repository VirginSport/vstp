<?php
/**
 * @file
 * User register template.
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
              <h1 class="vs-hero-banner__title"><?php print t('Login'); ?></h1>
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

  <div class="container vs-user-register v-element">
    <div class="row">
      <div class="col-xs-12">
        <ul class="nav nav-tabs vs-tabs--color-blue">
          <li class="nav-item">
            <h3 class="vs-tabs__nav-link-wrapper">
              <a class="nav-link" href="<?php print url('user/login', array('query' => $query)); ?>">
                <?php print t('Sign In'); ?>
              </a>
            </h3>
          </li>
          <li class="nav-item active">
            <h3 class="vs-tabs__nav-link-wrapper">
              <a class="nav-link" href="<?php print url('user/register', array('query' => $query)); ?>">
                <?php print t('Sign Up'); ?>
              </a>
            </h3>
          </li>
        </ul>
        <div class="tab-content">
          <div class="tab-pane fade in active">
            <div class="vs-user-login--form-drupal hidden-xs-up">
              <?php print drupal_render($register_form); ?>
            </div>

            <?php /* FIXME Facebook auth login link code placeholder
            <div class="row">
              <div class="col-xs-12 col-md-10 offset-md-1 col-lg-6 offset-lg-3">
                <div class="social-networks">
                  <?php print drupal_render($hybridauth_widget); ?>
                </div>
              </div>
            </div>
            */ ?>

            <div class="row">
              <div class="col-xs-12 col-md-10 offset-md-1 col-lg-6 offset-lg-3">

                <?php /* FIXME Facebook auth login link code placeholder
                <div class="vs-user-form__email-text"><?php print t('Or with an email address'); ?></div>
                */ ?><div style="clear: both; height: 40px;"></div>

                <form @submit.prevent class="vs-user-register--form" novalidate>
                  <!-- Profile Block -->
                  <validator name="vs_user_register_validator">
                    <div class="row">
                      <div class="col-xs-12">
                        <div class="vs-user-form__wrapper">
                          <div class="field-first-name">
                            <div class="vs-form-group" :class="{ 'vs-has-error': ($vs_user_register_validator.field_first_name.dirty || submitted) && !$vs_user_register_validator.field_first_name.valid }">
                              <input class="form-control" required type="text" v-model="profile.field_first_name" name="field_first_name" id="field_first_name" v-validate:field_first_name="['required']">
                              <label class="vs-focus-label" for="field_first_name"><?php print t('First Name'); ?>*</label>
                              <div class="vs-error-label" v-if="($vs_user_register_validator.field_first_name.dirty || submitted) && $vs_user_register_validator.field_first_name.required"><?php print t('First name is required'); ?></div>
                            </div>
                          </div>

                          <div class="field-last-name">
                            <div class="vs-form-group" :class="{ 'vs-has-error': ($vs_user_register_validator.field_last_name.dirty || submitted) && !$vs_user_register_validator.field_last_name.valid }">
                              <input class="form-control" required type="text" v-model="profile.field_last_name" name="field_last_name" id="field_last_name" v-validate:field_last_name="['required']">
                              <label class="vs-focus-label" for="field_last_name"><?php print t('Last Name'); ?>*</label>
                              <div class="vs-error-label" v-if="($vs_user_register_validator.field_last_name.dirty || submitted) && $vs_user_register_validator.field_last_name.required"><?php print t('Last name is required'); ?></div>
                            </div>
                          </div>

                          <div class="field-mail">
                            <div class="vs-form-group" :class="{ 'vs-has-error': ($vs_user_register_validator.field_email.dirty || submitted) && !$vs_user_register_validator.field_email.valid }">
                              <input class="form-control" type="email" v-model="profile.field_mail" name="field_mail" id="field_mail" v-validate:field_email="{ required: true, email: true }">
                              <label class="vs-focus-label" for="field_mail"><?php print t('Email Address'); ?>*</label>
                              <div class="vs-error-label" v-if="($vs_user_register_validator.field_email.dirty || submitted) && $vs_user_register_validator.field_email.required"><?php print t('Email is required'); ?></div>
                              <div class="vs-error-label" v-if="!$vs_user_register_validator.field_email.required && $vs_user_register_validator.field_email.email"><?php print t('Email is not valid'); ?></div>
                            </div>
                          </div>

                          <div class="field-confirm-mail">
                            <div class="vs-form-group" :class="{ 'vs-has-error': ($vs_user_register_validator.field_confirm_mail.dirty || submitted) && !$vs_user_register_validator.field_confirm_mail.valid }">
                              <input class="form-control" type="email" v-model="profile.field_confirm_mail" name="field_confirm_mail" id="field_confirm_mail" v-validate:field_confirm_mail="{ required: true, match: profile.field_mail }">
                              <label class="vs-focus-label" for="field_confirm_mail"><?php print t('Confirm Email Address'); ?>*</label>
                              <div v-if="$vs_user_register_validator.field_confirm_mail.dirty || submitted">
                                <div class="vs-error-label" v-if="$vs_user_register_validator.field_confirm_mail.required"><?php print t('Email is required'); ?></div>
                                <div class="vs-error-label" v-if="!$vs_user_register_validator.field_confirm_mail.required && $vs_user_register_validator.field_confirm_mail.match"><?php print t('Email do not match'); ?></div>
                              </div>
                            </div>
                          </div>

                          <div class="pass1">
                            <div class="vs-form-group" :class="{ 'vs-has-error': ($vs_user_register_validator.pass1.dirty || submitted) && !$vs_user_register_validator.pass1.valid }">
                              <input class="form-control" type="password" v-model="profile.pass1" name="pass1" id="pass1" v-validate:pass1="{ minlength: 8, required: true, pattern: '/[0-9]+/' }">
                              <label class="vs-focus-label" for="pass1"><?php print t('Password'); ?>*</label>
                              <div class="vs-error-label" v-if="($vs_user_register_validator.pass1.dirty || submitted) && $vs_user_register_validator.pass1.required"><?php print t('The Password is required'); ?></div>
                              <div class="vs-error-label" v-if="!$vs_user_register_validator.pass1.required && $vs_user_register_validator.pass1.minlength"><?php print t('The Password must have at least 8 characters'); ?></div>
                              <div class="vs-error-label" v-if="!$vs_user_register_validator.pass1.minlength && $vs_user_register_validator.pass1.pattern"><?php print t('The Password must have at least one number'); ?></div>
                            </div>
                          </div>

                          <div class="pass2">
                            <div class="vs-form-group" :class="{ 'vs-has-error': ($vs_user_register_validator.pass2.dirty || submitted) && !$vs_user_register_validator.pass2.valid }">
                              <input class="form-control" type="password" v-model="profile.pass2" name="pass2" id="pass2" v-validate:pass2="{ required: true, match: profile.pass1 }">
                              <label class="vs-focus-label" for="pass2"><?php print t('Confirm Password'); ?>*</label>
                              <div class="vs-error-label" v-if="($vs_user_register_validator.pass2.dirty || submitted) && $vs_user_register_validator.pass2.required"><?php print t('Confirm Password is required'); ?></div>
                              <div class="vs-error-label" v-if="!$vs_user_register_validator.pass2.required && $vs_user_register_validator.pass2.match"><?php print t('Passwords do not match'); ?></div>
                            </div>
                          </div>

                          <validator name="vs_user_register_date_validator">
                            <div class="field-date vs-form-group" :class="{ 'vs-has-error': (($vs_user_register_date_validator.field_date_day.dirty || submitted) && $vs_user_register_date_validator.field_date_day.required) || (($vs_user_register_date_validator.field_date_month.dirty || submitted) && $vs_user_register_date_validator.field_date_month.required) || (($vs_user_register_date_validator.field_date_year.dirty || submitted) && $vs_user_register_date_validator.field_date_year.required) || $vs_user_register_date_validator.valid && !validBirthDate() }">
                                <div class="vs-chosen-wrapper vs-chosen-wrapper--3x">
                                  <label class="vs-focus-label"><?php print t('Date of Birth'); ?>*</label>
                                  <select class="vs-select-group__select" v-model="profile.field_date_day" name="field_date_day" v-validate:field_date_day="['required']"></select>
                                  <select class="vs-select-group__select" v-model="profile.field_date_month" name="field_date_month" v-validate:field_date_month="['required']"></select>
                                  <select class="vs-select-group__select" v-model="profile.field_date_year" name="field_date_year" v-validate:field_date_year="['required']"></select>
                                </div>

                                <div class="vs-error-label" v-if="(($vs_user_register_date_validator.field_date_day.dirty || submitted) && $vs_user_register_date_validator.field_date_day.required) || (($vs_user_register_date_validator.field_date_month.dirty || submitted) && $vs_user_register_date_validator.field_date_month.required) || (($vs_user_register_date_validator.field_date_year.dirty || submitted) && $vs_user_register_date_validator.field_date_year.required)">
                                  <?php print t('Date of Birth is required'); ?>
                                </div>

                                <div class="vs-error-label" v-if="$vs_user_register_date_validator.valid && !validBirthDate()">
                                  <?php print t("This is an invalid date"); ?>
                                </div>

                                <div class="vs-error-label" v-if="validBirthDate() && !greaterThan()">
                                  <?php print t("We love your enthusiasm, but you must be 13 to create an account."); ?>
                                </div>

                              <?php
                              /* TODO implement tooltip field
                                <a class="vs-tooltip-trigger" data-placement="right" data-toggle="tooltip" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" >i</a>
                              */
                              ?>
                            </div>
                          </validator>

                          <div class="field-gender vs-form-group" :class="{ 'vs-has-error': ($vs_user_register_validator.field_gender.dirty || submitted) && !$vs_user_register_validator.field_gender.valid }">
                            <div class="vs-chosen-wrapper">
                              <label for="field_gender" class="vs-focus-label"><?php print t('Gender'); ?>*</label>
                              <select v-model="profile.field_gender" name="field_gender" id="field_gender" v-validate:field_gender="['required']"></select>
                            </div>
                            <div class="vs-error-label" v-if="($vs_user_register_validator.field_gender.dirty || submitted) && $vs_user_register_validator.field_gender.required"><?php print t('Gender is required'); ?></div>
                          </div>

                          <div class="field-marketing vs-form-group vs-form-group--checkboxes">
                            <div class="vs-form-check">
                              <input class="vs-form-input vs-form-input--check" type="checkbox" v-model="profile.field_marketing_optin" name="field_marketing_optin" id="field_marketing_optin">
                              <label class="vs-form-label vs-form-label--check" for="field_marketing_optin"><?php print t("Tick this lovely little box if you are game to receive updates on Virgin Sport events, products and partners. If our emails aren't your cup of tea, you can always opt out later."); ?></label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </validator>

                  <div class="col-xs-12">
                    <div class="vs-user-form__wrapper">
                      <button v-on:click="submit" class="btn vs-btn vs-btn--lg vs-btn--min-lg vs-user-register--form-submit"><?php print ('Sign Up'); ?></button>

                      <div class="vs-user-form__member-text">
                        <?php print t('Already a member?'); ?>
                        <a href="<?php print url('user/login', array('query' => $query)); ?>">
                          <?php print t('Sign in'); ?>
                        </a>
                      </div>
                    </div>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
