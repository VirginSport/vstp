<?php
/**
 * @file
 * User register template.
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

<div class="vs-user-register v-element vs-region vs-region--gradient-default" data-vs-region-curved="1" data-vs-region-color="default">
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <ul class="nav nav-tabs vs-tabs--color-blue">
          <li class="nav-item">
            <a class="nav-link" href="<?php print url('user/login', array('query' => $query)); ?>">
              <?php print t('Sign In'); ?>
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="<?php print url('user/register', array('query' => $query)); ?>">
              <?php print t('Sign Up'); ?>
            </a>
          </li>
        </ul>
        <div class="tab-content">
          <div class="tab-pane fade in active">
            <div class="vs-user-login--form-drupal hidden-xs-up">
              <?php print drupal_render($register_form); ?>
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
                <div class="vs-user-login--form__email-text"><?php print t('Or with an email address'); ?></div>
                <form @submit.prevent class="vs-user-register--form" novalidate>
                  <!-- Profile Block -->
                  <validator name="vs_user_register_validator">
                    <div class="row">
                      <div class="col-xs-12">
                        <div class="vs-user-login--form-wrapper">
                          <div class="field-first-name">
                            <div class="vs-form-group">
                              <input class="form-control" required type="text" v-model="profile.field_first_name" name="field_first_name" id="field_first_name" v-validate:field_first_name="['required']">
                              <label class="vs-focus-label" for="field_first_name"><?php print t('First Name'); ?>*</label>
                              <div v-if="$vs_user_register_validator.field_first_name.dirty && $vs_user_register_validator.field_first_name.required"><?php print t('First name is required'); ?></div>
                            </div>
                          </div>

                          <div class="field-last-name">
                            <div class="vs-form-group">
                              <input class="form-control" required type="text" v-model="profile.field_last_name" name="field_last_name" id="field_last_name" v-validate:field_last_name="['required']">
                              <label class="vs-focus-label" for="field_last_name"><?php print t('Last Name'); ?>*</label>
                              <div v-if="$vs_user_register_validator.field_last_name.dirty && $vs_user_register_validator.field_last_name.required"><?php print t('Last name is required'); ?></div>
                            </div>
                          </div>

                          <div class="field-mail">
                            <div class="vs-form-group">
                              <input class="form-control" type="email" v-model="profile.field_mail" name="field_mail" id="field_mail" v-validate:field_email="{ required: true, email: true }">
                              <label class="vs-focus-label" for="field_mail"><?php print t('Email Address'); ?>*</label>
                              <div v-if="$vs_user_register_validator.field_email.dirty && $vs_user_register_validator.field_email.required"><?php print t('Email is required'); ?></div>
                              <div v-if="!$vs_user_register_validator.field_email.required && $vs_user_register_validator.field_email.email"><?php print t('Email is not valid'); ?></div>
                            </div>
                          </div>

                          <div class="field-confirm-mail">
                            <div class="vs-form-group">
                              <input class="form-control" type="email" v-model="profile.field_confirm_mail" name="field_confirm_mail" id="field_confirm_mail" v-validate:field_confirm_mail="{ required: true, match: profile.field_mail }">
                              <label class="vs-focus-label" for="field_confirm_mail"><?php print t('Confirm Email Address'); ?>*</label>
                              <div v-if="$vs_user_register_validator.field_confirm_mail.dirty && $vs_user_register_validator.field_confirm_mail.required"><?php print t('Email is required'); ?></div>
                              <div v-if="!$vs_user_register_validator.field_confirm_mail.required && $vs_user_register_validator.field_email.email"><?php print t('Email is not valid'); ?></div>
                              <div v-if="!$vs_user_register_validator.field_email.email && $vs_user_register_validator.field_confirm_mail.match"><?php print t('Email do not match'); ?></div>
                            </div>
                          </div>

                          <div class="pass1">
                            <div class="vs-form-group">
                              <input class="form-control" type="password" v-model="profile.pass1" name="pass1" id="pass1" v-validate:pass1="{ minlength: 8, required: true, pattern: '/[0-9]+/' }">
                              <label class="vs-focus-label" for="pass1"><?php print t('Password'); ?>*</label>
                              <div v-if="$vs_user_register_validator.pass1.dirty && $vs_user_register_validator.pass1.required"><?php print t('The Password is required'); ?></div>
                              <div v-if="!$vs_user_register_validator.pass1.required && $vs_user_register_validator.pass1.minlength"><?php print t('The Password must have at least 8 characters'); ?></div>
                              <div v-if="!$vs_user_register_validator.pass1.minlength && $vs_user_register_validator.pass1.pattern"><?php print t('The Password must have at least one number'); ?></div>
                            </div>
                          </div>

                          <div class="pass2">
                            <div class="vs-form-group">
                              <input class="form-control" type="password" v-model="profile.pass2" name="pass2" id="pass2" v-validate:pass2="{ required: true, match: profile.pass1 }">
                              <label class="vs-focus-label" for="pass2"><?php print t('Confirm Password'); ?>*</label>
                              <div v-if="$vs_user_register_validator.pass2.dirty && $vs_user_register_validator.pass2.required"><?php print t('Confirm Password is required'); ?></div>
                              <div v-if="!$vs_user_register_validator.pass2.required && $vs_user_register_validator.pass2.match"><?php print t('Passwords do not match'); ?></div>
                            </div>
                          </div>

                          <div class="field-address vs-form-group--tooltip">
                            <div class="vs-select-wrapper">
                              <label><?php print t('Address'); ?></label>
                              <div>
                                <input @keydown.13.prevent v-show="!address_manual" id="google-autocomplete" placeholder="search" type="text">

                                <button v-show="!address_manual" v-on:click="address_manual = true"><?php print t('Enter manually'); ?></button>
                                <button v-show="address_manual" v-on:click="address_manual = false"><?php print t('Close manual'); ?></button>

                                <div v-show="address_manual">
                                  <div>
                                    <label><?php print t('Address Line 1'); ?>*</label>
                                    <input required type="text" v-model="profile.field_address_line_1" name="field_address_line_1" v-validate:field_address_line_1="['required']">
                                    <div v-if="$vs_user_register_validator.field_address_line_1.dirty && $vs_user_register_validator.field_address_line_1.required"><?php print t('Address Line 1 is required'); ?></div>
                                  </div>

                                  <div>
                                    <label><?php print t('Address Line 2'); ?></label>
                                    <input type="text" v-model="profile.field_address_line_2" name="field_address_line_2">
                                  </div>

                                  <div>
                                    <label><?php print t('City'); ?>*</label>
                                    <input required type="text" v-model="profile.field_address_city" name="field_address_city" v-validate:field_address_city="['required']">
                                    <div v-if="$vs_user_register_validator.field_address_city.dirty && $vs_user_register_validator.field_address_city.required"><?php print t('City 1 is required'); ?></div>
                                  </div>

                                  <div>
                                    <label><?php print t('State'); ?>*</label>
                                    <input required type="text" v-model="profile.field_address_state" name="field_address_state" v-validate:field_address_state="['required']">
                                    <div v-if="$vs_user_register_validator.field_address_state.dirty && $vs_user_register_validator.field_address_state.required"><?php print t('State is required'); ?></div>
                                  </div>

                                  <div>
                                    <label><?php print t('Postcode'); ?>*</label>
                                    <input required type="text" v-model="profile.field_address_postcode" name="field_address_postcode" v-validate:field_address_postcode="['required']">
                                    <div v-if="$vs_user_register_validator.field_address_postcode.dirty && $vs_user_register_validator.field_address_postcode.required"><?php print t('Postcode is required'); ?></div>
                                  </div>


                                  <div>
                                    <label><?php print t('Country'); ?>*</label>
                                    <div>
                                      <select required v-model="profile.field_address_country" name="field_address_country" v-validate:field_address_country="['required']">
                                      </select>
                                      <div v-if="$vs_user_register_validator.field_address_country.dirty && $vs_user_register_validator.field_address_country.required"><?php print t('Country is required'); ?></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <a class="vs-tooltip-trigger" data-placement="right" data-toggle="tooltip" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" >i</a>
                          </div>

                          <div class="field-contact-number vs-form-group--tooltip">
                            <div class="vs-select-wrapper">
                              <label><?php print t('Contact Number'); ?>*</label>
                              <div>
                                <input required type="text" v-model="profile.field_contact_number" name="field_contact_number" v-validate:field_contact_number="['required']">
                                <div v-if="$vs_user_register_validator.field_contact_number.dirty && $vs_user_register_validator.field_contact_number.required"><?php print t('Telephone is required'); ?></div>
                              </div>
                            </div>
                            <a class="vs-tooltip-trigger" data-placement="right" data-toggle="tooltip" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" >i</a>
                          </div>

                          <div class="field-date vs-form-group--tooltip">
                            <div class="vs-select-wrapper">
                              <label><?php print t('Date of Birth'); ?>*</label>
                              <select v-model="profile.field_date_month" name="field_date_month" v-validate:field_date_month="['required']"></select>
                              <select v-model="profile.field_date_day" name="field_date_day" v-validate:field_date_day="['required']"></select>
                              <select v-model="profile.field_date_year" name="field_date_year" v-validate:field_date_year="['required']"></select>
                              <div v-if="($vs_user_register_validator.field_date_day.dirty && $vs_user_register_validator.field_date_day.required) || ($vs_user_register_validator.field_date_month.dirty && $vs_user_register_validator.field_date_month.required) || ($vs_user_register_validator.field_date_year.dirty && $vs_user_register_validator.field_date_year.required)">
                                <?php print t('Date of Birth is required'); ?>
                              </div>
                            </div>
                            <a class="vs-tooltip-trigger" data-placement="right" data-toggle="tooltip" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" >i</a>
                          </div>

                          <div class="field-gender">
                            <label><?php print t('Gender'); ?>*</label>
                            <select v-model="profile.field_gender" name="field_gender" v-validate:field_gender="['required']"></select>
                            <div v-if="$vs_user_register_validator.field_gender.dirty && $vs_user_register_validator.field_gender.required"><?php print t('Gender is required'); ?></div>
                          </div>

                          <div class="field-marketing">
                            <input type="checkbox" v-model="profile.field_marketing_optin" name="field_marketing_optin">
                            <label><?php print t('Opt-in for marketing'); ?></label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </validator>

                  <div class="col-xs-12">
                    <button  :disabled="!$vs_user_register_validator.valid" v-on:click="submit"><?php print ('Confirm Changes'); ?></button>
                  </div>

                  <div>
                    <?php print t('Already a member?'); ?>
                    <a href="<?php print url('user/login', array('query' => $query)); ?>">
                      <?php print t('Sign in'); ?>
                    </a>
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
