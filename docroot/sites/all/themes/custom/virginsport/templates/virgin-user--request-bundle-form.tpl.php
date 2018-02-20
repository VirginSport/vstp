<?php
/**
 * @file
 * Virgin register bundle form template.
 */

$mkt_id = 'mkt-' . uniqid();
?>

<div class="vs-head-region">
  <div class="vs-region vs-region--no-padding">
    <div class="vs-hero-banner vs-hero-banner--small">
      <div class="vs-hero-banner__background vs-placeholder-bg vs-placeholder-bg--red">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <h2 class="vs-hero-banner__title"><?php print t('Group Sales Application'); ?></h2>
              <div class="vs-hero-banner-block__subtitle"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="vs-region vs-region--gradient-default" data-vs-region-curved="1" data-vs-region-color="default" data-vs-region-overlap="none">
  <div class="v-element vs-request-bundle-form">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div class="vs-contact-form__wrapper">
            <div class="vs-contact-form__content">
              <div class="row">
                <div :class="{ 'col-md-8 offset-md-2': !inModal, 'col-xs-12 col-md-8 offset-md-2': inModal }">
                  <validator name="vs_request_bundle_form_validator" v-if="!form.submitted">
                    <form @submit.prevent novalidate class="vs-contact-form__form">
                      <h4 class="vs-form-header">
                        <?php print t("Tell us about yourself"); ?>
                      </h4>

                      <div class="vs-form-group" :class="{ 'vs-has-error': ($vs_request_bundle_form_validator.organization.dirty || submitted) && !$vs_request_bundle_form_validator.organization.valid }">
                        <input class="form-control" id="organization_name" type="text" v-model="form.organization" name="organization" v-validate:organization="['required']">
                        <label class="vs-focus-label" for="organization"><?php print t('Organisation'); ?>*</label>
                        <div class="vs-error-label" v-if="($vs_request_bundle_form_validator.organization.dirty || submitted) && $vs_request_bundle_form_validator.organization.required"><?php print t('@ is required', array('@' => t('Organization'))); ?></div>
                      </div>

                      <div class="vs-form-group" :class="{ 'vs-has-error': ($vs_request_bundle_form_validator.event.dirty || submitted) && !$vs_request_bundle_form_validator.event.valid }">
                        <input class="form-control" id="event" type="text" v-model="form.event" name="event" v-validate:event="['required']">
                        <label class="vs-focus-label" for="event"><?php print t('Event'); ?>*</label>
                        <div class="vs-error-label" v-if="($vs_request_bundle_form_validator.event.dirty || submitted) && $vs_request_bundle_form_validator.event.required"><?php print t('@ is required', array('@' => t('Event'))); ?></div>
                      </div>

                      <div class="vs-form-group" :class="{ 'vs-has-error': ($vs_request_bundle_form_validator.tickets.dirty || submitted) && !$vs_request_bundle_form_validator.tickets.valid }">
                        <input class="form-control" id="tickets" type="number" v-model="form.tickets" min="1" name="tickets" v-validate:tickets="{ required: { rule: true }, min: 1, maxlength: 10 }">
                        <label class="vs-focus-label" for="tickets"><?php print t('Number of tickets'); ?>*</label>
                        <div class="vs-error-label" v-if="($vs_request_bundle_form_validator.tickets.dirty || submitted) && $vs_request_bundle_form_validator.tickets.required"><?php print t('@ is required', array('@' => t('Number of tickets'))); ?></div>
                        <div class="vs-error-label" v-if="($vs_request_bundle_form_validator.tickets.dirty || submitted) && $vs_request_bundle_form_validator.tickets.min"><?php print t('@ should be greater than 1', array('@' => t('Number of tickets'))); ?></div>
                        <div class="vs-error-label" v-if="($vs_request_bundle_form_validator.tickets.dirty || submitted) && $vs_request_bundle_form_validator.tickets.maxlength"><?php print t('@ should be less than 11 digits', array('@' => t('Number of tickets'))); ?></div>
                      </div>
                      <div class="vs-form-group vs-form-group--chosen" :class="{ 'vs-has-error': ($vs_request_bundle_form_validator.payment_type.dirty || submitted) && !$vs_request_bundle_form_validator.payment_type.valid }">
                        <label for="payment_type" class="vs-focus-label"><?php print t("Preferred Payment Method"); ?>*</label>
                        <select class="form-control" v-model="form.payment_type" id="payment_type" name="payment_type" v-validate:payment_type="['required']">
                          <option value="invoice"><?php print t('Invoice'); ?></option>
                          <option value="creditcard"><?php print t('Credit Card'); ?></option>
                        </select>
                        <div class="vs-error-label" v-if="($vs_request_bundle_form_validator.payment_type.dirty || submitted) && $vs_request_bundle_form_validator.payment_type.required"><?php print t('@ is required', array('@' => t('Payment preference'))); ?></div>
                      </div>

                      <div class="vs-form-group vs-form-group--textarea">
                        <textarea name="message" v-model="form.additional_notes" class="form-control vs-textarea" id="additional_notes" rows="5"></textarea>
                        <label class="vs-focus-label" for="additional_notes"><?php print t('Additional Info'); ?></label>
                      </div>

                      <div class="vs-form-description text-xs-center">*<?php print t('mandatory fields'); ?></div>

                      <p v-if="form.error" class="vs-error-label text-xs-center text-md-left"><?php print t("It's not you, it's us. We're down for the moment but want to hear from you, so please try again in a little bit."); ?></p>

                      <div class="vs-contact-form__submit text-xs-center">
                        <button :disabled="waitingSubmit" v-on:click="submit" class="btn vs-btn vs-btn--min-sm"><?php print t('Submit'); ?></button>
                      </div>

                    </form>
                  </validator>
                  <div v-if="form.submitted" class="form-completion">
                    <h4 class="vs-form-header">
                      <span><?php print t("Thanks for your request!<br> We'll be in touch shortly with next steps."); ?></span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
