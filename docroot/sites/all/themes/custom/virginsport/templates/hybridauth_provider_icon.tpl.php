<span class="btn vs-btn vs-btn--lg vs-btn--min-xxl <?php print $icon_pack_classes; ?>">
  <i class="icon-facebook"></i>
  <?php if ($_GET['q'] == 'user/register'): ?>
    <?php print t('Sign up with @', array('@' => $provider_name)); ?>
  <?php else: ?>
    <?php print t('Sign in with @', array('@' => $provider_name)); ?>
  <?php endif; ?>
</span>
