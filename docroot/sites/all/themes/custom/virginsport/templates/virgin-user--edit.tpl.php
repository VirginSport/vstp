<?php
/**
 * @file
 * User profile edit template.
 */
?>

<div class="vs-head-region">
  <div class="vs-region vs-region--no-padding">
    <div class="vs-hero-banner vs-hero-banner--small">
      <div class="vs-hero-banner__background vs-hero-banner__background--profile">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <h2 class="vs-hero-banner__title"><?php print $user_name; ?></h2>
              <div class="vs-hero-banner__subtitle">
                <?php if ($user_grapher->fieldGetOne('field_gender') == 'female'): ?>
                  <?php print t("She's bringing flexy back"); ?>
                <?php else: ?>
                  <?php print t("He's bringing flexy back"); ?>
                <?php endif; ?>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="vs-region vs-region--gradient-default" data-vs-region-curved="1" data-vs-region-color="default">
  <div class="vs-subnav">
    <div class="vs-subnav__overlay"></div>

    <ul class="vs-subnav__list">
      <li class="vs-subnav__item">
        <a class="vs-subnav__link" href="<?php print url('user'); ?>">
          <?php print t('My Profile'); ?>
        </a>
      </li>
      <li class="vs-subnav__item">
        <a class="vs-subnav__link vs-subnav__link--active" href="<?php print url('user/' . $user->uid . '/edit') ?>">
          <?php print t('Account Details'); ?>
        </a>
      </li>
    </ul>
  </div>
</div>

<div class="vs-region vs-region--gradient-gray vs-user-profile v-element">
  <div class="container">
    <div class="row">
      <div class="col-xs-12">

        <ul class="nav nav-tabs" role="tablist">
          <li class="nav-item active">
            <a class="nav-link" data-toggle="tab" role="tab" href="#account-details">
              <?php print t('Account Details'); ?>
            </a>
          </li>

          <?php if (!empty($purchase_history_path)): ?>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" role="tab" href="#purchase-history">
              <?php print t('Purchase History'); ?>
            </a>
          </li>
          <?php endif; ?>

        </ul>

        <div class="tab-content">
          <div class="tab-pane fade in active" role="tabpanel" id="account-details">
            <div class="vs-user-profile--form-drupal hidden-xs-up">
              <?php print drupal_render($profile_form); ?>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <div class="vs-user-profile-form vs-user-profile-form--head">
                  <div class="row">
                  <div class="col-xs-12 col-md-5 offset-md-1 col-lg-4 offset-lg-2">
                    <div class="user-name vs-form-group">
                      <label><?php print t('Name:'); ?></label>
                      <?php print $user_name; ?>
                     </div>
                    <div class="user-birth vs-form-group">
                      <label><?php print t('Date of Birth:'); ?></label>
                      <?php print $user_birth_date; ?>
                    </div>
                  </div>
                  <div class="col-xs-12 col-md-5 col-lg-4">
                    <div class="user-gender vs-form-group">
                      <label><?php print t('Gender:'); ?></label>
                      <?php print $user_gender; ?>
                    </div>
                    <div class="user-number vs-form-group">
                      <label><?php print t('Account no:'); ?></label>
                      <?php print $user_grapher->property('uid'); ?>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
              <form @submit.prevent class="vs-user-profile-form vs-user-profile-form--body" v-bind:class="{ 'vs-user-profile-form--edit': edit_mode }" novalidate>

                <!-- Profile Block -->
                <validator name="vs_user_profile_validator">
                <div class="row">
                  <div class="col-xs-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                    <div class="row">
                      <div class="col-xs-12 col-md-6">
                        <div class="vs-contact-form__content">
                          <div class="field-mail vs-form-group" :class="{ 'vs-has-error': !$vs_user_profile_validator.field_email.valid }">
                            <div v-show="edit_mode">
                              <input class="form-control" type="email" v-model="profile.field_mail" name="field_mail" id="field_mail" v-validate:field_email="['required','email']">
                              <label for="field_mail" class="vs-focus-label"><?php print t('Email Address'); ?>*</label>
                              <div class="vs-error-label" v-if="$vs_user_profile_validator.field_email.required"><?php print t('Email is required'); ?></div>
                              <div class="vs-error-label" v-if="!$vs_user_profile_validator.field_email.required && $vs_user_profile_validator.field_email.email"><?php print t('Email is not valid'); ?></div>
                            </div>
                            <div v-show="!edit_mode">
                              <label class="vs-focus-label vs-focus-label--static"><?php print t('Email Address'); ?></label>
                              {{ profile.field_mail }}
                            </div>
                          </div>

                          <div class="field-address vs-form-group">
                            <div v-show="edit_mode">
                              <div v-show="!address_manual" class="vs-form-group vs-form-group--manual">
                                <input class="form-control" @keydown.13.prevent id="google-autocomplete" placeholder="" type="text">
                                <label for="google-autocomplete" class="vs-focus-label"><?php print t('Address'); ?></label>
                                <button class="btn btn-link vs-user-profile-form__manual-link" style="float: none" v-show="!address_manual" v-on:click="address_manual = true"><?php print t('Enter manually'); ?></button>
                              </div>

                              <button class="btn btn-link vs-user-profile-form__manual-link vs-user-profile-form__manual-link--close" style="float: none" v-show="address_manual" v-on:click="address_manual = false"><?php print t('Close manual'); ?></button>

                              <div v-show="address_manual">
                                <div class="vs-form-group vs-form-group--manual" :class="{ 'vs-has-error': !$vs_user_profile_validator.field_address_line_1.valid }">
                                  <input :class="{'vs-form-control--not-empty': profile.field_address_line_1.length > 1 }" class="form-control" required type="text" v-model="profile.field_address_line_1" name="field_address_line_1" id="field_address_line_1" v-validate:field_address_line_1="['required']">
                                  <label for="field_address_line_1" class="vs-focus-label"><?php print t('Address Line 1'); ?>*</label>
                                  <div class="vs-error-label" v-if="$vs_user_profile_validator.field_address_line_1.required"><?php print t('Address Line 1 is required'); ?></div>
                                </div>

                                <div class="vs-form-group vs-form-group--manual">
                                  <input :class="{'vs-form-control--not-empty': profile.field_address_line_2.length > 1 }" class="form-control" type="text" v-model="profile.field_address_line_2" name="field_address_line_2" id="field_address_line_2">
                                  <label for="field_address_line_2" class="vs-focus-label"><?php print t('Address Line 2'); ?></label>
                                </div>

                                <div class="vs-form-group vs-form-group--manual" :class="{ 'vs-has-error': !$vs_user_profile_validator.field_address_city.valid }">
                                  <input :class="{'vs-form-control--not-empty': profile.field_address_city.length > 1 }" class="form-control" required type="text" v-model="profile.field_address_city" name="field_address_city" id="field_address_city" v-validate:field_address_city="['required']">
                                  <label for="field_address_city" class="vs-focus-label"><?php print t('City'); ?>*</label>
                                  <div class="vs-error-label" v-if="$vs_user_profile_validator.field_address_city.required"><?php print t('City 1 is required'); ?></div>
                                </div>

                                <div v-show="profile.field_address_country != 'GB'" class="vs-form-group" :class="{ 'vs-has-error': ($vs_user_profile_validator.field_address_state.dirty || submitted) && !$vs_user_profile_validator.field_address_state.valid }">
                                  <input :class="{'vs-form-control--not-empty': profile.field_address_state.length > 1 }" class="form-control" required type="text" v-model="profile.field_address_state" name="field_address_state" id="field_address_state" v-validate:field_address_state="{ required_if: [{ value: profile.field_address_country, equals: 'US' }] }">
                                  <label class="vs-focus-label" for="field_address_state"><?php print t('State'); ?><span v-if="profile.field_address_country == 'US'">*</span></label>
                                  <div class="vs-error-label" v-if="($vs_user_profile_validator.field_address_state.dirty || submitted) && $vs_user_profile_validator.field_address_state.required_if"><?php print t('State is required'); ?></div>
                                </div>

                                <div class="vs-form-group vs-form-group--manual" :class="{ 'vs-has-error': !$vs_user_profile_validator.field_address_postcode.valid }">
                                  <input :class="{'vs-form-control--not-empty': profile.field_address_postcode.length > 1 }" class="form-control" required type="text" v-model="profile.field_address_postcode" name="field_address_postcode" id="field_address_postcode" v-validate:field_address_postcode="['required']">
                                  <label v-if="profile.field_address_country != 'US'" class="vs-focus-label" for="field_address_postcode"><?php print t('Postcode'); ?>*</label>
                                  <label v-if="profile.field_address_country == 'US'" class="vs-focus-label" for="field_address_postcode"><?php print t('Zipcode'); ?>*</label>
                                  <div class="vs-error-label" v-if="$vs_user_profile_validator.field_address_postcode.required && profile.field_address_country != 'US'"><?php print t('Postcode is required'); ?></div>
                                  <div class="vs-error-label" v-if="$vs_user_profile_validator.field_address_postcode.required && profile.field_address_country == 'US'"><?php print t('Zipcode is required'); ?></div>
                                </div>

                                <div class="field-country vs-form-group" :class="{ 'vs-has-error': !$vs_user_profile_validator.field_address_country.valid }">
                                  <div class="vs-chosen-wrapper">
                                    <select required v-model="profile.field_address_country" name="field_address_country" id="field_address_country" v-validate:field_address_country="['required']">
                                    </select>
                                    <label for="field_address_country" class="vs-focus-label"><?php print t('Country'); ?>*</label>
                                  </div>
                                  <div class="vs-error-label" v-if="$vs_user_profile_validator.field_address_country.required"><?php print t('Country is required'); ?></div>
                                </div>
                              </div>
                            </div>

                            <div v-show="!edit_mode">
                              <label class="vs-focus-label vs-focus-label--static"><?php print t('Delivery Address'); ?></label>
                              <span class="vs-field-address__span">{{ profile.field_address_line_1 }}</span>
                              <span class="vs-field-address__span">{{ profile.field_address_line_2 }}</span>
                              <span class="vs-field-address__span">{{ profile.field_address_city }}</span>
                              <span v-show="profile.field_address_country == 'US'" class="vs-field-address__span">{{ profile.field_address_state }}</span>
                              <span class="vs-field-address__span">{{ profile.field_address_postcode }}</span>
                              <span class="vs-field-address__span">{{ getListText('field_address_country', profile.field_address_country) }}</span>
                            </div>
                          </div>

                          <div class="field-contact-number vs-form-group" :class="{ 'vs-has-error': !$vs_user_profile_validator.field_contact_number.valid }">
                            <div v-show="edit_mode">
                              <input class="form-control" required type="text" v-model="profile.field_contact_number" name="field_contact_number" v-validate:field_contact_number="['required']">
                              <label class="vs-focus-label"><?php print t('Telephone Number'); ?>*</label>
                              <div class="vs-error-label" v-if="$vs_user_profile_validator.field_contact_number.required"><?php print t('Telephone is required'); ?></div>
                            </div>
                            <div v-show="!edit_mode">
                              <label class="vs-focus-label vs-focus-label--static"><?php print t('Telephone Number'); ?></label>
                              {{ profile.field_contact_number }}
                            </div>
                          </div>

                          <div class="field-athletics-number vs-form-group" >
                          <div v-show="edit_mode">
                            <input class="form-control" type="text" v-model="profile.field_uk_athletics_number" name="field_uk_athletics_number" id="field_uk_athletics_number">
                            <label for="field_uk_athletics_number" class="vs-focus-label"><?php print t('UK Athletics Number'); ?></label>
                          </div>
                          <div v-show="!edit_mode">
                            <label class="vs-focus-label vs-focus-label--static"><?php print t('UK Athletics Number'); ?></label>
                            {{ profile.field_uk_athletics_number }}
                          </div>
                        </div>
                        </div>
                      </div>
                      <div class="col-xs-12 col-md-6">
                        <div class="vs-contact-form__content">
                      <div class="field-medical-conditions vs-form-group vs-form-group--chosen">
                        <div v-show="edit_mode">
                          <label for="field_medical_conditions" class="vs-focus-label"><?php print t('Medical Conditions'); ?></label>
                          <select v-show="edit_mode" class="form-control" multiple="multiple" v-model="profile.field_medical_conditions" name="field_medical_conditions" id="field_medical_conditions"></select>
                        </div>
                        <div v-show="!edit_mode">
                          <label class="vs-focus-label vs-focus-label--static"><?php print t('Medical Conditions'); ?></label>
                          <div v-for="condition in profile.field_medical_conditions">
                            <span class="vs-field-medical-conditions__span">{{ condition }}</span>
                          </div>
                        </div>
                      </div>

                      <div
                          v-show="profile.field_medical_conditions && profile.field_medical_conditions.indexOf('Other') != -1"
                          class="field-medical-conditions-other vs-form-group"
                      >
                        <div v-show="edit_mode">
                          <textarea class="form-control vs-textarea" v-model="profile.field_medical_conditions_other" name="field_medical_conditions_other" id="field_medical_conditions_other"></textarea>
                          <label for="field_medical_conditions_other" class="vs-focus-label vs-focus-label"><?php print t('Any other medical condition you think we should know about'); ?></label>
                        </div>
                        <div v-show="!edit_mode">
                          <label class="vs-focus-label vs-focus-label vs-focus-label--static"><?php print t('Other Medical Conditions'); ?></label>
                          {{ profile.field_medical_conditions_other }}
                        </div>
                      </div>

                      <div class="field-medications vs-form-group">
                        <div v-show="edit_mode">
                          <textarea class="form-control vs-textarea" v-model="profile.field_medications" name="field_medications" id="field_medications"></textarea>
                          <label for="field_medications" class="vs-focus-label"><?php print t('Medications'); ?></label>
                        </div>
                        <div v-show="!edit_mode">
                          <label class="vs-focus-label vs-focus-label--static"><?php print t('Medications'); ?></label>
                          {{ profile.field_medications }}
                        </div>
                      </div>

                      <div class="field-allergies vs-form-group">
                        <div v-show="edit_mode">
                          <textarea class="form-control vs-textarea" v-model="profile.field_allergies" name="field_allergies" id="field_allergies"></textarea>
                          <label for="field_allergies" class="vs-focus-label"><?php print t('Allergies'); ?></label>
                        </div>
                        <div v-show="!edit_mode">
                          <label class="vs-focus-label vs-focus-label--static"><?php print t('Allergies'); ?></label>
                          {{ profile.field_allergies }}
                        </div>
                      </div>

                      <div class="field-region vs-form-group" :class="{ 'vs-has-error': !$vs_user_profile_validator.field_region.valid }">
                        <div v-show="edit_mode">
                          <div class="vs-chosen-wrapper">
                            <select v-show="edit_mode" v-model="profile.field_region" name="field_region" id="field_region" v-validate:field_region="['required']"></select>
                            <label for="field_region" class="vs-focus-label"><?php print t('Region'); ?>*</label>
                          </div>
                          <div class="vs-error-label" v-if="$vs_user_profile_validator.field_region.required"><?php print t('Region is required'); ?></div>
                        </div>
                        <div v-show="!edit_mode">
                          <label class="vs-focus-label vs-focus-label--static"><?php print t('Region'); ?></label>
                          {{ getListText('field_region', profile.field_region) }}
                        </div>
                      </div>

                      <div v-show="edit_mode" class="field-share-medical-info vs-form-group">
                        <input class="vs-form-input vs-form-input--check" v-show="edit_mode" type="checkbox" v-model="profile.field_agree_share_medical_info" name="field_agree_share_medical_info" id="field_agree_share_medical_info" v-validate:field_agree_share_medical_info="{ conditional_required: [profile.field_medical_conditions, profile.field_medical_conditions_other, profile.field_medications, profile.field_allergies] }">
                        <label class="vs-form-label vs-form-label--check" for="field_agree_share_medical_info"><?php print t('Agree to share medical information and allergies with Virgin Sport'); ?></label>
                        <div class="vs-error-label" v-if="$vs_user_profile_validator.field_agree_share_medical_info.conditional_required"><?php print t('You must agree to share your medical information if you fill any of the medical fields.'); ?></div>
                      </div>

                      <div class="field-marketing vs-form-group vs-form-group--checkboxes">
                      <div class="vs-form-check">
                        <input :disabled="!edit_mode" type="checkbox" v-model="profile.field_marketing_optin" name="field_marketing_optin" id="field_marketing_optin" class="vs-form-input vs-form-input--check">
                        <label for="field_marketing_optin" class="vs-form-label vs-form-label--check vs-form-label--large"><?php print t("Tick this lovely little box if you are game to receive updates on Virgin Sport events, products and partners. If our emails aren't your cup of tea, you can always opt out later."); ?></label>
                      </div>
                    </div>
                        </div>
                  </div>
                      <div class="col-xs-12 text-md-right">
                        <div class="vs-form-group--buttons">
                          <button class="btn vs-btn vs-btn--outline-black" :disabled="password_mode" v-show="!edit_mode" v-on:click="edit('edit_mode')"><?php print ('Edit Account Details'); ?></button>
                          <button class="btn vs-btn vs-btn--min-sm pull-md-right" v-show="edit_mode" v-on:click="submit"><?php print ('Confirm Changes'); ?></button>
                          <button class="btn vs-btn vs-btn--outline-black pull-md-left" v-show="edit_mode" v-on:click="cancel('edit_mode')"><?php print ('Cancel Changes'); ?></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </validator>

                <!-- Password Block -->
                <validator name="vs_user_password_validator">
                <div class="row">
                  <div class="col-xs-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                    <div class="row">
                      <div class="col-xs-12 col-md-6">
                        <div v-show="password_mode" class="vs-user-profile-form--password" v-bind:class="{ 'vs-user-profile-form--edit': password_mode }">
                          <div v-if="require_password" class="vs-form-group current-pass" :class="{ 'vs-has-error': ($vs_user_password_validator.current_pass.dirty || submitted) && !$vs_user_password_validator.current_pass.valid }">
                            <input class="form-control" type="password" v-model="profile.current_pass" name="current_pass" id="current_pass" v-validate:current_pass="['required']">
                            <label for="current_pass" class="vs-focus-label"><?php print t('Old Password'); ?>*</label>
                            <div class="vs-error-label" v-if="($vs_user_password_validator.current_pass.dirty || submitted) && $vs_user_password_validator.current_pass.required"><?php print t('Old Password is required'); ?></div>
                          </div>

                          <div class="vs-form-group pass1" :class="{ 'vs-has-error': ($vs_user_password_validator.pass1.dirty || submitted) && !$vs_user_password_validator.pass1.valid }">
                            <input class="form-control" type="password" v-model="profile.pass1" name="pass1" id="pass1" v-validate:pass1="{ minlength: 8, required: true, pattern: '/[0-9]+/' }">
                            <label for="pass1" class="vs-focus-label"><?php print t('New Password'); ?>*</label>
                            <div class="vs-error-label" v-if="($vs_user_password_validator.pass1.dirty || submitted) && $vs_user_password_validator.pass1.required"><?php print t('New Password is required'); ?></div>
                            <div class="vs-error-label" v-if="!$vs_user_password_validator.pass1.required && $vs_user_password_validator.pass1.minlength"><?php print t('New Password must have at least 8 characters'); ?></div>
                            <div class="vs-error-label" v-if="!$vs_user_password_validator.pass1.required && $vs_user_password_validator.pass1.pattern"><?php print t('New Password must have at least one number'); ?></div>
                          </div>

                          <div class="vs-form-group pass2" :class="{ 'vs-has-error': ($vs_user_password_validator.pass2.dirty || submitted) && !$vs_user_password_validator.pass2.valid }">
                            <input class="form-control" type="password" v-model="profile.pass2" name="pass2" id="pass2" v-validate:pass2="{ required: true, match: profile.pass1 }">
                            <label for="pass2" class="vs-focus-label"><?php print t('Confirm Password'); ?>*</label>
                            <div class="vs-error-label" v-if="($vs_user_password_validator.pass2.dirty || submitted) && $vs_user_password_validator.pass2.required"><?php print t('Confirm Password is required'); ?></div>
                            <div class="vs-error-label" v-if="!$vs_user_password_validator.pass2.required && $vs_user_password_validator.pass2.match"><?php print t('Passwords do not match'); ?></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                    <div class="vs-form-group--buttons">
                      <button class="btn vs-btn vs-btn--outline-black pull-md-right" :disabled="edit_mode" v-show="!password_mode" v-on:click="edit('password_mode')"><?php print ('Edit Password'); ?></button>
                      <button class="btn vs-btn vs-btn--outline-black" v-show="password_mode" v-on:click="cancel('password_mode')"><?php print ('Cancel Changes'); ?></button>
                      <button class="btn vs-btn pull-md-right" v-show="password_mode" v-on:click="submit"><?php print ('Confirm Changes'); ?></button>
                    </div>
                  </div>
                </div>
                </validator>
                </form>
            </validator>
          </div>

          <?php if (!empty($purchase_history_path)): ?>
          <div class="tab-pane fade" role="tabpanel" id="purchase-history">
            <iframe class="vs-iframe" src="<?php print $purchase_history_path; ?>"></iframe>
          </div>
          <?php endif; ?>

        </div>
      </div>
    </div>
  </div>
</div>
