<?php
/**
 * @file
 * Virgin register interest form template.
 */

$mkt_id = 'mkt-' . uniqid();
?>

<div class="v-element vs-contact-form vs-contact-form--register" :class="{ 'vs-contact-form__modal': inModal }">
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <div class="vs-contact-form__wrapper">
          <div class="vs-contact-form__content">
            <div class="row">
              <div :class="{ 'col-md-8 offset-md-2': !inModal, 'col-md-6 offset-md-3': inModal }">
                <validator name="vs_contact_form_validator" v-if="!form.submitted">
                  <form
                    @submit.prevent
                    novalidate class="vs-contact-form__form"
                    v-init="{autoSubmit: <?php !user_is_anonymous() ? print "true" : print "false"; ?>}"
                  >
                    <h4 class="vs-form-header">
                      <?php print t('Be the first to know'); ?>
                    </h4>

                    <input type="hidden" v-model="form.type" name="type" value="interested_in">

                    <?php if (user_is_anonymous()): ?>
                      <div class="vs-form-group" :class="{ 'vs-has-error': ($vs_contact_form_validator.email.dirty || submitted) && !$vs_contact_form_validator.email.valid }">
                        <input class="form-control" id="email" type="email" v-model="form.email" name="email" v-validate:email="['required','email']">
                        <label class="vs-focus-label" for="email"><?php print t('Email'); ?>*</label>
                        <div class="vs-error-label" v-if="($vs_contact_form_validator.email.dirty || submitted) && $vs_contact_form_validator.email.required"><?php print t('@ is required', array('@' => t('Email'))); ?></div>
                        <div class="vs-error-label" v-if="!$vs_contact_form_validator.email.required && $vs_contact_form_validator.email.email"><?php print t('@ is not valid', array('@' => t('Email'))); ?></div>
                      </div>
                    <?php endif; ?>

                    <input type="hidden" v-model="form.festival_id" name="festival_id" id="festival_id" value="<?php print $vars['festival_id']; ?>">

                    <div v-if="form.error" class="vs-error-label"><?php print t("Oops! We're sprinting to fix this error and we hope to be back on track shortly."); ?></div>

                    <div class="vs-form-submit">
                      <button :disabled="waitingSubmit" v-on:click="submit" class="btn vs-btn vs-btn--min-sm"><?php print t("Count me in"); ?></button>
                    </div>

                    <div class="vs-form-description"><?php print t('By registering your interest, you are agreeing to receive information about Virgin Sport events and partners. Game on!'); ?></div>
                  </form>
                </validator>
                <div v-if="form.submitted" class="form-completion">
                  <h4 class="vs-form-header">
                    <?php print t("Brilliant! We're excited that you're excited! We'll be in touch soon."); ?>
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
