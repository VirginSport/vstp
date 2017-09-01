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
                <div class="row <?php print !$can_edit_password ? 'no-border' : ''?>">
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

                          <div class="field-contact-number vs-form-group" :class="{ 'vs-has-error': !$vs_user_profile_validator.field_contact_number.valid }">
                            <div v-show="edit_mode">
                              <input class="form-control" type="text" v-model="profile.field_contact_number" name="field_contact_number">
                              <label class="vs-focus-label"><?php print t('Telephone Number'); ?></label>
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

                <?php if ($can_edit_password): ?>
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
                <?php endif ;?>
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
