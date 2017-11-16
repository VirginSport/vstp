<?php
/**
 * @file
 * Virgin register bundle form template.
 */

$mkt_id = 'mkt-' . uniqid();
?>

<div class="v-element vs-request-bundle-form">
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
                <validator name="vs_request_bundle_form_validator" v-if="!form.submitted">
                  <form @submit.prevent novalidate class="vs-contact-form__form">
                    <h4 class="vs-form-header">
                      <?php print t("Request a bundle"); ?>
                    </h4>

                    <div class="vs-form-group" :class="{ 'vs-has-error': ($vs_request_bundle_form_validator.organization_name.dirty || submitted) && !$vs_request_bundle_form_validator.organization_name.valid }">
                      <input class="form-control" id="organization_name" type="text" v-model="form.organization_name" name="organization_name" v-validate:organization_name="['required']">
                      <label class="vs-focus-label" for="organization_name"><?php print t('Organization Name'); ?>*</label>
                      <div class="vs-error-label" v-if="($vs_request_bundle_form_validator.organization_name.dirty || submitted) && $vs_request_bundle_form_validator.organization_name.required"><?php print t('@ is required', array('@' => t('Organization Name'))); ?></div>
                    </div>

                    <div class="field-event vs-form-group vs-form-group--chosen" :class="{ 'vs-has-error': ($vs_request_bundle_form_validator.event_id.dirty || submitted) && !$vs_request_bundle_form_validator.event_id.valid }">
                      <label for="event_id" class="vs-focus-label"><?php print t('Event'); ?>*</label>
                      <select
                        class="form-control"
                        id="event_id"
                        name="event_id"
                        v-model="form.event_id"
                        v-validate:event_id="['required']"
                      >
                        <?php foreach ($vars['events'] as $key => $title): ?>
                          <option value="<?php print $key; ?>" <?php print $key == $vars['event_id'] ? 'selected' : ''; ?>>
                            <?php print $title; ?>
                          </option>
                        <?php endforeach; ?>
                      </select>
                      <div class="vs-error-label" v-if="($vs_request_bundle_form_validator.event_id.dirty || submitted) && $vs_request_bundle_form_validator.event_id.required"><?php print t('Event is required'); ?></div>
                    </div>

                    <div class="vs-form-group" :class="{ 'vs-has-error': ($vs_request_bundle_form_validator.tickets.dirty || submitted) && !$vs_request_bundle_form_validator.tickets.valid }">
                      <input class="form-control" id="tickets" type="number" v-model="form.tickets" name="tickets" v-validate:tickets="['required']">
                      <label class="vs-focus-label" for="tickets"><?php print t('Number of tickets'); ?>*</label>
                      <div class="vs-error-label" v-if="($vs_request_bundle_form_validator.tickets.dirty || submitted) && $vs_request_bundle_form_validator.tickets.required"><?php print t('@ is required', array('@' => t('Number of tickets'))); ?></div>
                    </div>
                    <div class="vs-form-group vs-form-group--chosen" :class="{ 'vs-has-error': ($vs_request_bundle_form_validator.payment_type.dirty || submitted) && !$vs_request_bundle_form_validator.payment_type.valid }">
                      <label for="payment_type" class="vs-focus-label"><?php print t("Payment preference"); ?>*</label>
                      <select class="form-control" v-model="form.payment_type" id="payment_type" name="payment_type" v-validate:payment_type="['required']">
                        <option value="invoice"><?php print t('Invoice'); ?></option>
                        <option value="credit"><?php print t('Credit Card'); ?></option>
                      </select>
                      <div class="vs-error-label" v-if="($vs_request_bundle_form_validator.payment_type.dirty || submitted) && $vs_request_bundle_form_validator.payment_type.required"><?php print t('@ is required', array('@' => t('Payment preference'))); ?></div>
                    </div>

                    <div class="vs-form-group vs-form-group--textarea">
                      <textarea name="message" v-model="form.additional_info" class="form-control vs-textarea" id="additional_info" rows="5"></textarea>
                      <label class="vs-focus-label" for="message"><?php print t('Additional Info'); ?></label>
                    </div>

                    <div class="vs-form-description text-xs-center">*<?php print t('mandatory fields'); ?></div>

                    <div v-if="form.error" class="vs-error-label"><?php print t("It's not you, it's us. We're down for the moment but want to hear from you, so please try again in a little bit."); ?></div>

                    <div class="vs-contact-form__submit text-xs-center">
                      <button :disabled="waitingSubmit" v-on:click="submit" class="btn vs-btn vs-btn--min-sm"><?php print t('Request bundle'); ?></button>
                    </div>

                  </form>
                </validator>
                <div v-if="form.submitted" class="form-completion">
                  <h4 class="vs-form-header">
                    <span><?php print t("Thanks for your enquiry.<br> We'll get back to you in a jiffy!"); ?></span>
                  </h4>
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
