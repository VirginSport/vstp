<div class="v-element <?php print empty($wrapper_classes) ? '' : $wrapper_classes; ?>">
  <h3 class="vs-newslettter__title"><?php print $title; ?></h3>
  <?php if ($description != ''): ?>
    <div class="vs-newslettter__text"><?php print $description; ?></div>
  <?php endif; ?>
  <div class="vs-newslettter__form">
    <validator name="vs_newsletter_form_validator">
      <form @submit.prevent novalidate class="vs-newsletter-form__form">
        <input type="hidden" v-model="form.list" name="list" value="<?php print $target_list; ?>">

        <div class="vs-form-group">
          <input
            class="form-control vs-newsletter__input"
            id="newsletter-email"
            type="text"
            name="newsletter-email"
            v-model="form.newsletter_email"
            value="<?php print $default_email; ?>"
            v-validate:newsletter-email="['required','email']"
          >
          <label class="vs-focus-label" for="newsletter"><?php print t('Email Address'); ?></label>
          <div class="vs-newsletter__message-wrapper">
            <p v-if="invalid_email" class="vs-newsletter__error-label"><?php print t('Invalid email.')?></p>
            <p v-if="form.submitted" class="vs-newsletter__message-label"><?php print t('Woohoo – you’re in!')?></p>
            <p v-if="form.error" class="vs-newsletter__error-label"><?php print t('There was an error submitting your request.')?></p>
          </div>
          <?php if ($inline_button): ?>
          <button v-if="!form.submitted" :disabled="waitingSubmit" v-on:click="submit" class="btn vs-btn vs-newsletter__btn-inline"><?php print t('Submit'); ?></button>
          <button v-else class="btn vs-btn vs-newsletter__btn-inline" disabled><?php print t('Sent'); ?></button>
          <?php else: ?>
          <div class="vs-newsletter__button-wrapper text-xs-center text-md-left">
            <button :disabled="waitingSubmit" v-on:click="submit" class="btn vs-btn vs-btn--min-sm vs-newsletter__button"><?php print t('Submit'); ?></button>
          </div>
          <?php endif; ?>
        </div>
      </form>
    </validator>
  </div>
</div>
