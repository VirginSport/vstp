<?php
/**
 * @file
 * Virgin register interest form template.
 */

$mkt_id = 'mkt-' . uniqid();
?>

<div class="v-element vs-contact-form">
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <div class="vs-contact-form__wrapper">
          <?php if (!empty($vars['pre_form']['value'])): ?>
            <div class="vs-contact-form__prefix">
              <div class="row">
                <div class="col-md-8 offset-md-2">
                  <?php print check_markup($vars['pre_form']['value'], $vars['post_form']['format']); ?>
                </div>
              </div>
            </div>
          <?php endif; ?>

          <div class="vs-contact-form__content">
            <div class="row">
              <div class="col-md-8 offset-md-2">
                <validator name="vs_contact_form_validator" v-if="!form.submitted">
                  <form @submit.prevent novalidate>
                    <h4 class="vs-form-header">
                      <?php print t('What did you want to say?'); ?>
                    </h4>

                    <input type="hidden" v-model="form.type" name="type" value="interested_in">

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

                    <div class="vs-form-group">
                      <div class="vs-chosen-wrapper">
                        <label class="vs-focus-label"><?php print t("I'd like to know more about"); ?>*</label>
                        <select class="chosen-select" v-model="form.type" name="type" v-validate:type="['required']">
                            <option value="festival-event"><?php print t('Festival/Event'); ?></option>
                            <option value="volunteering"><?php print t('Volunteering'); ?></option>
                            <option value="fans"><?php print t('Fans'); ?></option>
                            <option value="tickets"><?php print t('Tickets'); ?></option>
                            <option value="vs-membership"><?php print t('Virgin Sport Membership'); ?></option>
                            <option value="results"><?php print t('Results'); ?></option>
                            <option value="potential-partnership"><?php print t('Potential Partnership'); ?></option>
                            <option value="press-inquiry"><?php print t('Results'); ?></option>
                            <option value="results"><?php print t('Press Inquiry'); ?></option>
                            <option value="careers"><?php print t('Careers'); ?></option>
                        </select>
                      </div>
                    </div>

                    <div class="vs-form-group vs-form-group--textarea">
                      <textarea name="message" v-model="form.message" class="form-control vs-textarea" id="message" rows="5"></textarea>
                      <label class="vs-focus-label" for="message"><?php print t('Please write a message'); ?></label>
                    </div>

                    <?php if (user_is_anonymous()): ?>
                      <h4 class="vs-form-header">
                        <?php print t('About You'); ?>
                      </h4>

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

                      <div class="vs-form-group">
                        <input class="form-control" id="contact_number" type="text" v-model="form.contact_number" name="contact_number" v-validate:contact_number="['required']">
                        <label class="vs-focus-label" for="contact_number"><?php print t('Contact number'); ?>*</label>
                        <div class="vs-error-label" v-if="$vs_contact_form_validator.contact_number.dirty && $vs_contact_form_validator.contact_number.required"><?php print t('@ is required', array('@' => t('Contact number'))); ?></div>
                      </div>

                      <div class="vs-form-group vs-form-group--checkboxes">
                        <div class="vs-form-check">
                          <input type="checkbox" v-model="form.mkt_email_opt_ins" name="mkt_email_opt_ins" id="<?php print $mkt_id; ?>" class="vs-form-input vs-form-input--check">
                          <label for="<?php print $mkt_id; ?>" class="vs-form-label vs-form-label--check"><?php print t('Opt in'); ?></label>
                        </div>
                      </div>
                    <?php endif; ?>

                    <div class="vs-form-description">*<?php print t('mandatory fields'); ?></div>

                    <div v-if="form.error" class="vs-error-label"><?php print t('An error ocurred please try again later'); ?></div>

                    <button :disabled="!$vs_contact_form_validator.valid || !formValid()" v-on:click="submit" class="btn vs-btn vs-btn--min-sm"><?php print t('Send Message'); ?></button>
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

          <?php if (!empty($vars['post_form']['value'])): ?>
          <div class="vs-contact-form__suffix">
            <div class="row">
              <div class="col-md-8 offset-md-2">
                <?php print check_markup($vars['post_form']['value'], $vars['post_form']['format']); ?>
              </div>
            </div>
          </div>
        <?php endif; ?>
        </div>
      </div>
    </div>
  </div>
</div>
