<?php
/**
 * @file
 * User profile edit template.
 */
?>

<div class="vs-head-region">
  <div class="vs-region vs-region--no-padding">
    <div class="vs-hero-banner">
      <div class="vs-hero-banner__background">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <h2 class="vs-hero-banner__title"><?php print $user_name; ?></h2>
              <div class="vs-hero-banner-block__subtitle"></div>
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
        <a class="vs-subnav__link vs-subnav__link--active" href="<?php print url('user'); ?>">
          <?php print t('My Profile'); ?>
        </a>
      </li>
      <li class="vs-subnav__item">
        <a class="vs-subnav__link" href="<?php print url('user/' . $user->uid . '/edit') ?>">
          <?php print t('Account Details'); ?>
        </a>
      </li>
    </ul>
  </div>
</div>

<div v-element="vs-user-profile" class="vs-region vs-region--gradient-gray">
  <ul class="nav nav-tabs" role="tablist">
    <li class="nav-item active">
      <a class="nav-link" data-toggle="tab" role="tab" href="#account-details">
        <?php print t('Account Details'); ?>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-toggle="tab" role="tab" href="#purchase-history">
        <?php print t('Purchase History'); ?>
      </a>
    </li>
  </ul>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <div class="tab-content">
          <div class="tab-pane fade in active" role="tabpanel" id="account-details">
            <div class="vs-user-profile--form-drupal hidden-xs-up">
              <?php print drupal_render($profile_form); ?>
            </div>
            <div class="row">
              <div class="col-xs-6">
                <div class="user-name">
                  <label><?php print t('Name:'); ?></label>
                  <?php print $user_name; ?>
                 </div>
                <div class="user-birth">
                  <label><?php print t('Date of Birth:'); ?></label>
                  <?php print $user_birth_date; ?>
                </div>
              </div>
              <div class="col-xs-6">
                <div class="user-gender">
                  <label><?php print t('Gender:'); ?></label>
                  <?php print $user_gender; ?>
                </div>
                <div class="user-number">
                  <label><?php print t('Account no:'); ?></label>
                  <?php print $user_grapher->property('uid'); ?>
                </div>
              </div>
            </div>
              <form @submit.prevent class="vs-user-profile--form" novalidate>

                <!-- Profile Block -->
                <validator name="vs_user_profile_validator">
                <div class="row">
                  <div class="col-xs-6">
                    <div class="field-mail">
                      <label><?php print t('Email Address'); ?>*</label>
                      <div v-show="edit_mode">
                        <input type="email" v-model="profile.field_mail" name="field_mail" v-validate:field_email="['required','email']">
                        <div v-if="$vs_user_profile_validator.field_email.required"><?php print t('Email is required'); ?></div>
                        <div v-if="$vs_user_profile_validator.field_email.email"><?php print t('Email is not valid'); ?></div>
                      </div>
                      <span v-show="!edit_mode">{{ profile.field_mail }}</span>
                    </div>
  
                    <div class="field-address">
                      <label><?php print t('Delivery Address'); ?></label>
                      <div v-show="edit_mode">
                        <input @keydown.13.prevent v-show="!address_manual" id="google-autocomplete" placeholder="search" type="text">

                        <button v-show="!address_manual" v-on:click="address_manual = true"><?php print t('Enter manually'); ?></button>
                        <button v-show="address_manual" v-on:click="address_manual = false"><?php print t('Close manual'); ?></button>

                        <div v-show="address_manual">
                          <div>
                            <label><?php print t('Address Line 1'); ?>*</label>
                            <input required type="text" v-model="profile.field_address_line_1" name="field_address_line_1" v-validate:field_address_line_1="['required']">
                            <div v-if="$vs_user_profile_validator.field_address_line_1.required"><?php print t('Address Line 1 is required'); ?></div>
                          </div>

                          <div>
                            <label><?php print t('Address Line 2'); ?>1</label>
                            <input type="text" v-model="profile.field_address_line_2" name="field_address_line_2">
                          </div>

                          <div>
                            <label><?php print t('City'); ?>*</label>
                            <input required type="text" v-model="profile.field_address_city" name="field_address_city" v-validate:field_address_city="['required']">
                            <div v-if="$vs_user_profile_validator.field_address_city.required"><?php print t('City 1 is required'); ?></div>
                          </div>

                          <div>
                            <label><?php print t('State'); ?>*</label>
                            <input required type="text" v-model="profile.field_address_state" name="field_address_state" v-validate:field_address_state="['required']">
                            <div v-if="$vs_user_profile_validator.field_address_state.required"><?php print t('State is required'); ?></div>
                          </div>

                          <div>
                            <label><?php print t('Postcode'); ?>*</label>
                            <input required type="text" v-model="profile.field_address_postcode" name="field_address_postcode" v-validate:field_address_postcode="['required']">
                            <div v-if="$vs_user_profile_validator.field_address_postcode.required"><?php print t('Postcode is required'); ?></div>
                          </div>
                        </div>
                      </div>

                      <div v-show="!edit_mode">
                        <span>{{ profile.field_address_line_1 }}</span>
                        <span>{{ profile.field_address_line_2 }}</span>
                        <span>{{ profile.field_address_city }}</span>
                        <span>{{ profile.field_address_state }}</span>
                        <span>{{ profile.field_address_postcode }}</span>
                      </div>
                    </div>

                    <div class="field-contact-number">
                      <label><?php print t('Telephone Number'); ?>*</label>
                      <div v-show="edit_mode">
                        <input required type="text" v-model="profile.field_contact_number" name="field_contact_number" v-validate:field_contact_number="['required']">
                        <div v-if="$vs_user_profile_validator.field_contact_number.required"><?php print t('Telephone is required'); ?></div>
                      </div>
                      <span v-show="!edit_mode">{{ profile.field_contact_number }}</span>
                    </div>
  
                    <div class="field-athletics-number">
                      <label><?php print t('UK Athletics Number'); ?></label>
                      <input v-show="edit_mode" type="text" v-model="profile.field_uk_athletics_number" name="field_uk_athletics_number">
                      <span v-show="!edit_mode">{{ profile.field_uk_athletics_number }}</span>
                    </div>
                  </div>
                  <div class="col-xs-6">
                    <div class="field-medical-conditions">
                      <label><?php print t('Medical Conditions'); ?></label>
                      <select v-show="edit_mode" multiple="multiple" v-model="profile.field_medical_conditions" name="field_medical_conditions"></select>
                      <div v-show="!edit_mode" v-for="condition in profile.field_medical_conditions">
                        <span>{{ condition }}</span>
                      </div>
                    </div>
  
                    <div class="field-medical-conditions-other">
                      <textarea v-show="edit_mode" v-model="profile.field_medical_conditions_other" name="field_medical_conditions_other"></textarea>
                      <span v-show="!edit_mode">{{ profile.field_medical_conditions_other }}</span>
                    </div>
  
                    <div class="field-medications">
                      <label><?php print t('Medications'); ?></label>
                      <textarea v-show="edit_mode" v-model="profile.field_medications" name="field_medications"></textarea>
                      <span v-show="!edit_mode">{{ profile.field_medications }}</span>
                    </div>
  
                    <div class="field-allergies">
                      <label><?php print t('Allergies'); ?></label>
                      <textarea v-show="edit_mode" v-model="profile.field_allergies" name="field_allergies"></textarea>
                      <span v-show="!edit_mode">{{ profile.field_allergies }}</span>
                    </div>
  
                    <div v-show="edit_mode" class="field-share-medical-info">
                      <label><?php print t('Agree to share medical information and allergies with Virgin Sport'); ?></label>
                      <input v-show="edit_mode" type="checkbox" v-model="profile.field_agree_share_medical_info" name="field_agree_share_medical_info">
                    </div>
  
                    <div class="field-country">
                      <label><?php print t('Country'); ?>*</label>
                      <div v-show="edit_mode">
                        <select required v-model="profile.field_address_country" name="field_address_country" v-validate:field_address_country="['required']">
                        </select>
                        <div v-if="$vs_user_profile_validator.field_address_country.required"><?php print t('Country is required'); ?></div>
                      </div>
                      <span v-show="!edit_mode">{{ getListText('field_address_country', profile.field_address_country) }}</span>
                    </div>
  
                    <div class="field-marketing">
                      <label><?php print t('Marketing Options'); ?></label>
                      <input :disabled="!edit_mode" type="checkbox" v-model="profile.field_marketing_optin" name="field_marketing_optin">
                    </div>
                  </div>

                  <div class="col-xs-12">
                    <button :disabled="password_mode" v-show="!edit_mode" v-on:click="edit('edit_mode')"><?php print ('Edit Account Details'); ?></button>
                    <button v-show="edit_mode" v-on:click="cancel('edit_mode')"><?php print ('Cancel Changes'); ?></button>
                    <button :disabled="!$vs_user_profile_validator.valid" v-show="edit_mode" v-on:click="submit"><?php print ('Confirm Changes'); ?></button>
                  </div>
                </div>
                </validator>

                <!-- Password Block -->
                <validator name="vs_user_password_validator">
                <div class="row">
                  <div class="col-xs-6">
                    <div v-show="password_mode">
                      <div v-if="require_password" class="current-pass">
                        <label><?php print t('Old Password'); ?>*</label>
                        <input type="password" v-model="profile.current_pass" name="current_pass" v-validate:current_pass="['required']">
                        <div v-if="$vs_user_password_validator.current_pass.required"><?php print t('Old Password is required'); ?></div>
                      </div>

                      <div class="pass1">
                        <label><?php print t('New Password'); ?>*</label>
                        <input type="password" v-model="profile.pass1" name="pass1" v-validate:pass1="{ minlength: 8, required: true }">
                        <div v-if="$vs_user_password_validator.pass1.required"><?php print t('New Password is required'); ?></div>
                        <div v-if="$vs_user_password_validator.pass1.minlength"><?php print t('New Password must have at least 8 characters'); ?></div>
                      </div>

                      <div class="pass2">
                        <label><?php print t('Confirm Password'); ?>*</label>
                        <input type="password" v-model="profile.pass2" name="pass2" v-validate:pass2="{ required: true, match: profile.pass1 }">
                        <div v-if="$vs_user_password_validator.pass2.required"><?php print t('Confirm Password is required'); ?></div>
                        <div v-if="$vs_user_password_validator.pass2.match"><?php print t('Passwords do not match'); ?></div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-12">
                    <button :disabled="edit_mode" v-show="!password_mode" v-on:click="edit('password_mode')"><?php print ('Edit Password'); ?></button>
                    <button v-show="password_mode" v-on:click="cancel('password_mode')"><?php print ('Cancel Changes'); ?></button>
                    <button :disabled="!$vs_user_password_validator.valid" v-show="password_mode" v-on:click="submit"><?php print ('Confirm Changes'); ?></button>
                  </div>
                </div>
                </validator>
                </form>
            </validator>
          </div>
          <div class="tab-pane fade" role="tabpanel" id="purchase-history">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
