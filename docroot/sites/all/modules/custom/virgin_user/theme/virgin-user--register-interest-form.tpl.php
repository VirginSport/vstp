<?php
/**
 * @file
 * Virgin register interest form template.
 */

$over_12_id = 'over-12-' . uniqid();
$mkt_id = 'mkt-' . uniqid();
?>

<div class="v-element vs-contact-form vs-contact-form--register">
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <div class="vs-contact-form__wrapper">
          <div class="vs-contact-form__content">
            <div class="row">
              <div class="col-md-8 offset-md-2">
                <validator name="vs_contact_form_validator" v-if="!form.submitted">
                  <form @submit.prevent novalidate>
                    <h4 class="vs-form-header">
                      <?php print t('Be the first to know'); ?>
                    </h4>

                    <input type="hidden" v-model="form.type" name="type" value="interested_in">

                    <?php if (user_is_anonymous()): ?>
                      <div class="vs-form-group">
                        <input class="form-control" id="first_name" type="text" v-model="form.first_name" name="first_name" v-validate:first_name="['required']">
                        <label class="vs-focus-label" for="first_name"><?php print t('First Name'); ?>*</label>
                        <div class="vs-error-label" v-if="$vs_contact_form_validator.first_name.dirty && $vs_contact_form_validator.first_name.required"><?php print t('@ is required', array('@' => t('First Name'))); ?></div>
                      </div>

                      <div class="vs-form-group">
                        <input class="form-control" id="last_name" type="text" v-model="form.last_name" name="last_name" v-validate:last_name="['required']">
                        <label class="vs-focus-label" for="last_name"><?php print t('Last Name'); ?>*</label>
                        <div class="vs-error-label" v-if="$vs_contact_form_validator.last_name.dirty && $vs_contact_form_validator.last_name.required"><?php print t('@ is required', array('@' => t('Last Name'))); ?></div>
                      </div>

                      <div class="vs-form-group">
                        <input class="form-control" id="email" type="email" v-model="form.email" name="email" v-validate:email="['required','email']">
                        <label class="vs-focus-label" for="email"><?php print t('Email'); ?>*</label>
                        <div class="vs-error-label" v-if="$vs_contact_form_validator.email.dirty && $vs_contact_form_validator.email.required"><?php print t('@ is required', array('@' => t('Email'))); ?></div>
                        <div class="vs-error-label" v-if="!$vs_contact_form_validator.email.required && $vs_contact_form_validator.email.email"><?php print t('@ is not valid', array('@' => t('Email'))); ?></div>
                      </div>
                    <?php endif; ?>


                    <div class="vs-form-group">
                      <div class="vs-chosen-wrapper">
                        <label class="vs-focus-label"><?php print t('Festival'); ?>*</label>
                        <select
                          class="chosen-select"
                          name="festival_id"
                          v-model="form.festival_id"
                          v-init='{ events: <?php print $vars['events']; ?>, event_id: <?php print $vars['event_id']; ?> }'
                        >
                          <?php foreach ($vars['festivals'] as $key => $title): ?>
                            <option value="<?php print $key; ?>" <?php print $key == $vars['festival_id'] ? 'selected' : ''; ?>>
                              <?php print $title; ?>
                            </option>
                          <?php endforeach; ?>
                        </select>
                      </div>
                      <div class="vs-loading" v-if="loading"><?php print t('loading'); ?>...</div>
                    </div>

                    <div class="vs-form-group">
                      <div class="vs-chosen-wrapper">
                        <label class="vs-focus-label"><?php print t('Event'); ?>*</label>
                        <select multiple="multiple" class="chosen-select" v-model="form.event_ids" name="event_ids">
                          <option v-for="(index, title) in form.events" v-bind:value="index" :selected="form.event_ids == index">
                            {{ title }}
                          </option>
                        </select>
                      </div>

                      <div class="vs-error-label" v-if="!form.event_ids"><?php print t('@ is required', array('@' => t('Event'))); ?></div>
                    </div>

                    <?php if (user_is_anonymous()): ?>
                      <div class="vs-form-group vs-form-group--checkboxes">
                        <div class="vs-form-check">
                          <input type="checkbox" v-model="form.over_12" name="over_12" id="<?php print $over_12_id; ?>" class="vs-form-input vs-form-input--check" v-validate:over_12="['required']">
                          <label for="<?php print $over_12_id; ?>" class="vs-form-label vs-form-label--check"><?php print t("I'm over 12 yrs old"); ?></label>
                          <div class="vs-error-label" v-if="$vs_contact_form_validator.over_12.required"><?php print t('You must confirm tha you have more than 12 yrs old'); ?></div>
                        </div>
                      </div>
                    <?php endif; ?>

                    <div v-if="form.error" class="vs-error-label"><?php print t('An error ocurred please try again later'); ?></div>

                    <button :disabled="!$vs_contact_form_validator.valid || !formValid()" v-on:click="submit" class="btn vs-btn vs-btn--min-sm"><?php print t("I'm Interested"); ?></button>

                    <div class="vs-form-description"><?php print t('By submitting now, you are agreeing to the T&Cs'); ?></div>
                  </form>
                </validator>
                <div v-if="form.submitted">
                  <h4 class="vs-form-header">
                    <?php print t('Form submitted'); ?>
                  </h4>

                  <button v-if="inModal" v-on:click="closeModal" class="btn vs-btn vs-btn--min-sm"><?php print t('Ok'); ?></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
