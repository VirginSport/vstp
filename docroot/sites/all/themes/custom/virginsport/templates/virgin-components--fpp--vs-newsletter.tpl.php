
<div class="vs-newsletter">
  <div class="container">
    <div class="row grid-align-middle--md-up">
      
      <div class="col-xs-12 col-md-6 hidden-sm-down">
        <div class="vs-newsletter__image-wrapper clearfix">
          <?php print theme('virginsport_picture', array('atom_id' => $field_newsletter_image[0]['sid'], 'image_style' => 'virgin_original', 'image_classes' => 'vs-newsletter__image')); ?>
          <div class="vs-newsletter__image-caption"><?php print $image_caption; ?></div>
        </div>
      </div>
      
      <div class="col-xs-12 col-md-6">
        <?php print theme('virginsport_newsletter_form', array('title' => $title, 'description' => $description, 'target_list' => $list, 'default_email' => $default_email , 'wrapper_classes' => 'vs-newsletter__content')); ?>
      </div>
  
      <div class="col-xs-12 col-md-6 hidden-md-up">
        <div class="vs-newsletter__image-wrapper">
          <?php print theme('virginsport_picture', array('atom_id' => $field_newsletter_image[0]['sid'], 'image_style' => 'virgin_original', 'image_classes' => 'vs-newsletter__image')); ?>
          <div class="vs-newsletter__image-caption"><?php print $image_caption; ?></div>
        </div>
      </div>
      
    </div>
  </div>
</div>
