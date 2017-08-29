<?php
/**
 * @file
 * Virgin register interest form template.
 */

$mkt_id = 'mkt-' . uniqid();
?>

<div class="v-element vs-contact-form" :class="{ 'vs-contact-form__modal': inModal }">
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
              <div :class="{ 'col-md-8 offset-md-2': !inModal, 'col-xs-12 col-md-8 offset-md-2': inModal }">
                <validator name="vs_contact_form_validator" v-if="!form.submitted">
                  <form @submit.prevent novalidate class="vs-contact-form__form">
                    <h4 class="vs-form-header">
                      <?php print t("What's On Your Mind?"); ?>
                    </h4>

                    <div class="field-festival vs-form-group vs-form-group--chosen" :class="{ 'vs-has-error': ($vs_contact_form_validator.festival_id.dirty || submitted) && !$vs_contact_form_validator.festival_id.valid }">
                      <label for="festival_id" class="vs-focus-label"><?php print t('Festival'); ?>*</label>
                      <select
                        class="form-control"
                        id="festival_id"
                        name="festival_id"
                        v-model="form.festival_id"
                        v-validate:festival_id="['required']"
                      >
                        <?php foreach ($vars['festivals'] as $key => $title): ?>
                          <option value="<?php print $key; ?>" <?php print $key == $vars['festival_id'] ? 'selected' : ''; ?>>
                            <?php print $title; ?>
                          </option>
                        <?php endforeach; ?>
                      </select>
                      <div class="vs-error-label" v-if="($vs_contact_form_validator.festival_id.dirty || submitted) && $vs_contact_form_validator.festival_id.required"><?php print t('Type is required'); ?></div>
                    </div>

                    <div class="vs-form-group vs-form-group--chosen" :class="{ 'vs-has-error': ($vs_contact_form_validator.type.dirty || submitted) && !$vs_contact_form_validator.type.valid }">
                      <label for="type" class="vs-focus-label"><?php print t("Subject"); ?>*</label>
                      <select class="form-control" v-model="form.type" id="type" name="type" v-validate:type="['required']">
                        <option value="charities"><?php print t('Charities'); ?></option>
                        <option value="registration"><?php print t('Registration'); ?></option>
                        <option value="racepack"><?php print t('Racepack'); ?></option>
                        <option value="potential-partnership"><?php print t('Potential Partnership'); ?></option>
                        <option value="press-inquiry"><?php print t('Press Enquiry'); ?></option>
                        <option value="results"><?php print t('Results'); ?></option>
                        <option value="other"><?php print t('Other'); ?></option>
                      </select>
                      <div class="vs-error-label" v-if="($vs_contact_form_validator.type.dirty || submitted) && $vs_contact_form_validator.type.required"><?php print t('Type is required'); ?></div>
                    </div>

                    <div class="vs-form-group vs-form-group--textarea" :class="{ 'vs-has-error': ($vs_contact_form_validator.message.dirty || submitted) && !$vs_contact_form_validator.message.valid }">
                      <textarea name="message" v-model="form.message" class="form-control vs-textarea" id="message" rows="5" v-validate:message="['required']"></textarea>
                      <label class="vs-focus-label" for="message"><?php print t('Please write a message'); ?>*</label>
                      <div class="vs-error-label" v-if="($vs_contact_form_validator.message.dirty || submitted) && $vs_contact_form_validator.message.required"><?php print t('Message is required'); ?></div>
                    </div>

                    <?php if (user_is_anonymous()): ?>
                      <div class="vs-form-group" :class="{ 'vs-has-error': ($vs_contact_form_validator.first_name.dirty || submitted) && !$vs_contact_form_validator.first_name.valid }">
                        <input class="form-control" id="first_name" type="text" v-model="form.first_name" name="first_name" v-validate:first_name="['required']">
                        <label class="vs-focus-label" for="first_name"><?php print t('First Name'); ?>*</label>
                        <div class="vs-error-label" v-if="($vs_contact_form_validator.first_name.dirty || submitted) && $vs_contact_form_validator.first_name.required"><?php print t('@ is required', array('@' => t('First Name'))); ?></div>
                      </div>

                      <div class="vs-form-group" :class="{ 'vs-has-error': ($vs_contact_form_validator.email.dirty || submitted) && !$vs_contact_form_validator.email.valid }">
                        <input class="form-control" id="email" type="email" v-model="form.email" name="email" v-validate:email="['required','email']">
                        <label class="vs-focus-label" for="email"><?php print t('Email'); ?>*</label>
                        <div class="vs-error-label" v-if="($vs_contact_form_validator.email.dirty || submitted) && $vs_contact_form_validator.email.required"><?php print t('@ is required', array('@' => t('Email'))); ?></div>
                        <div class="vs-error-label" v-if="!$vs_contact_form_validator.email.required && $vs_contact_form_validator.email.email"><?php print t('@ is not valid', array('@' => t('Email'))); ?></div>
                      </div>
                    <?php endif; ?>

                    <div class="vs-form-description text-xs-center">*<?php print t('mandatory fields'); ?></div>

                    <div v-if="form.error" class="vs-error-label"><?php print t("It's not you, it's us. We're down for the moment but want to hear from you, so please try again in a little bit."); ?></div>

                    <div class="vs-contact-form__submit text-xs-center">
                      <button :disabled="waitingSubmit" v-on:click="submit" class="btn vs-btn vs-btn--min-sm"><?php print t('Send Message'); ?></button>
                    </div>

                  </form>
                </validator>
                <div v-if="form.submitted" class="form-completion">
                  <h4 class="vs-form-header">
                    <span v-if="form.type === 'charities'"><?php print t("Thanks for your enquiry.<br> We'll get back to you in a jiffy!"); ?></span>
                    <span v-if="form.type === 'racepack'"><?php print t("Thanks for your enquiry.<br> We'll get back to you in a jiffy!"); ?></span>
                    <span v-if="form.type === 'registration'"><?php print t("Thanks for your enquiry.<br> We'll get back to you in a jiffy!"); ?></span>
                    <span v-if="form.type === 'potential-partnership'"><?php print t("Thanks for your enquiry.<br> We'll get back to you in a jiffy!"); ?></span>
                    <span v-if="form.type === 'press-inquiry'"><?php print t("Thanks for your enquiry.<br> We'll get back to you in a jiffy!"); ?></span>
                    <span v-if="form.type === 'results'"><?php print t("Thanks for your enquiry.<br> We'll get back to you in a jiffy!"); ?></span>
                    <span v-if="form.type === 'other'"><?php print t("Thanks for your enquiry.<br> We'll get back to you in a jiffy!"); ?></span>
                  </h4>

                  <button v-if="inModal" v-on:click="closeModal" class="btn vs-btn vs-btn--min-sm"><?php print t('Ok'); ?></button>
                </div>
              </div>
            </div>
          </div>

          <?php if (!empty($vars['post_form']['value'])): ?>
          <div class="vs-contact-form__suffix">
            <div class="row">
              <div class="col-md-8 offset-md-2 text-xs-center">
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
