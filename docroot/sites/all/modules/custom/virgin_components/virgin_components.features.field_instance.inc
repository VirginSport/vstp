<?php
/**
 * @file
 * virgin_components.features.field_instance.inc
 */

/**
 * Implements hook_field_default_field_instances().
 */
function virgin_components_field_default_field_instances() {
  $field_instances = array();

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_accordion-field_accordion_items'.
  $field_instances['fieldable_panels_pane-vs_accordion-field_accordion_items'] = array(
    'bundle' => 'vs_accordion',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'paragraphs',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'form',
          ),
          'view_mode' => 'full',
        ),
        'type' => 'paragraphs_view',
        'weight' => 3,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_accordion_items',
    'label' => 'Accordion Items',
    'required' => 1,
    'settings' => array(
      'add_mode' => 'button',
      'allowed_bundles' => array(
        'vs_accordion_item' => 'vs_accordion_item',
        'vs_cta_block' => -1,
        'vs_custom_banner' => -1,
        'vs_event_festival_banner' => -1,
        'vs_package_card' => -1,
        'vs_slide' => -1,
        'vs_teaser' => -1,
        'vs_ticket_card' => -1,
        'vs_untimed_event_card' => -1,
      ),
      'bundle_weights' => array(
        'vs_accordion_item' => 2,
        'vs_cta_block' => 3,
        'vs_custom_banner' => 4,
        'vs_event_festival_banner' => 5,
        'vs_package_card' => 6,
        'vs_slide' => 7,
        'vs_teaser' => 8,
        'vs_ticket_card' => 9,
        'vs_untimed_event_card' => 10,
      ),
      'default_edit_mode' => 'open',
      'entity_translation_sync' => FALSE,
      'title' => 'Paragraph',
      'title_multiple' => 'Paragraphs',
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 0,
      'module' => 'paragraphs',
      'settings' => array(),
      'type' => 'paragraphs_embed',
      'weight' => -6,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_accordion-field_accordion_title'.
  $field_instances['fieldable_panels_pane-vs_accordion-field_accordion_title'] = array(
    'bundle' => 'vs_accordion',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'plain_text',
          ),
        ),
        'type' => 'text_default',
        'weight' => 2,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_accordion_title',
    'label' => 'Accordion Title',
    'required' => 0,
    'settings' => array(
      'context' => 'title',
      'context_default' => 'sdl_editor_representation',
      'dnd_enabled' => 0,
      'entity_translation_sync' => FALSE,
      'mee_enabled' => 0,
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'size' => 60,
      ),
      'type' => 'text_textfield',
      'weight' => -7,
    ),
  );

  // Exported field_instance: 'fieldable_panels_pane-vs_accordion-title_field'.
  $field_instances['fieldable_panels_pane-vs_accordion-title_field'] = array(
    'bundle' => 'vs_accordion',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => 'A field replacing fieldable panel pane title.',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'plain_text',
          ),
        ),
        'type' => 'text_default',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'title_field',
    'label' => 'Title',
    'required' => FALSE,
    'settings' => array(
      'context' => '',
      'dnd_enabled' => 0,
      'entity_translation_sync' => FALSE,
      'hide_label' => array(
        'entity' => FALSE,
        'page' => FALSE,
      ),
      'mee_enabled' => 0,
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'module' => 'text',
      'settings' => array(
        'size' => 60,
      ),
      'type' => 'text_textfield',
      'weight' => -10,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_basic_content_block-field_component_heading'.
  $field_instances['fieldable_panels_pane-vs_basic_content_block-field_component_heading'] = array(
    'bundle' => 'vs_basic_content_block',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'plain_text',
          ),
        ),
        'type' => 'text_default',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_component_heading',
    'label' => 'Component Heading',
    'required' => 0,
    'settings' => array(
      'context' => 'title',
      'context_default' => 'sdl_editor_representation',
      'dnd_enabled' => 0,
      'entity_translation_sync' => FALSE,
      'mee_enabled' => 0,
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'size' => 60,
      ),
      'type' => 'text_textfield',
      'weight' => 1,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_basic_content_block-field_content_align_to'.
  $field_instances['fieldable_panels_pane-vs_basic_content_block-field_content_align_to'] = array(
    'bundle' => 'vs_basic_content_block',
    'default_value' => array(
      0 => array(
        'value' => 'left',
      ),
    ),
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'list',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'form',
          ),
        ),
        'type' => 'list_default',
        'weight' => 4,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_content_align_to',
    'label' => 'Align content',
    'required' => 0,
    'settings' => array(
      'entity_translation_sync' => FALSE,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'options',
      'settings' => array(
        'apply_chosen' => '',
      ),
      'type' => 'options_select',
      'weight' => 5,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_basic_content_block-field_content_heading'.
  $field_instances['fieldable_panels_pane-vs_basic_content_block-field_content_heading'] = array(
    'bundle' => 'vs_basic_content_block',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'plain_text',
          ),
        ),
        'type' => 'text_default',
        'weight' => 6,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_content_heading',
    'label' => 'Heading',
    'required' => 0,
    'settings' => array(
      'context' => 'title',
      'context_default' => 'sdl_editor_representation',
      'dnd_enabled' => 0,
      'entity_translation_sync' => FALSE,
      'mee_enabled' => 0,
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'size' => 60,
      ),
      'type' => 'text_textfield',
      'weight' => 6,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_basic_content_block-field_content_subheading'.
  $field_instances['fieldable_panels_pane-vs_basic_content_block-field_content_subheading'] = array(
    'bundle' => 'vs_basic_content_block',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'plain_text',
          ),
        ),
        'type' => 'text_default',
        'weight' => 7,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_content_subheading',
    'label' => 'Subheading',
    'required' => 0,
    'settings' => array(
      'context' => 'title',
      'context_default' => 'sdl_editor_representation',
      'dnd_enabled' => 0,
      'entity_translation_sync' => FALSE,
      'mee_enabled' => 0,
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'size' => 60,
      ),
      'type' => 'text_textfield',
      'weight' => 7,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_basic_content_block-field_cta_links'.
  $field_instances['fieldable_panels_pane-vs_basic_content_block-field_cta_links'] = array(
    'bundle' => 'vs_basic_content_block',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'link',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'form',
          ),
        ),
        'type' => 'link_default',
        'weight' => 9,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_cta_links',
    'label' => 'Call to action buttons',
    'required' => 0,
    'settings' => array(
      'absolute_url' => 1,
      'attributes' => array(
        'class' => '',
        'configurable_class' => 0,
        'configurable_title' => 0,
        'rel' => '',
        'target' => 'user',
        'title' => '',
      ),
      'display' => array(
        'url_cutoff' => 80,
      ),
      'enable_tokens' => 1,
      'entity_translation_sync' => FALSE,
      'rel_remove' => 'default',
      'title' => 'required',
      'title_label_use_field_label' => 0,
      'title_maxlength' => 128,
      'title_value' => '',
      'url' => 'optional',
      'user_register_form' => FALSE,
      'validate_url' => 1,
    ),
    'widget' => array(
      'active' => 0,
      'module' => 'link',
      'settings' => array(),
      'type' => 'link_field',
      'weight' => 10,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_basic_content_block-field_hero_image'.
  $field_instances['fieldable_panels_pane-vs_basic_content_block-field_hero_image'] = array(
    'bundle' => 'vs_basic_content_block',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'atom_reference',
        'settings' => array(
          'link' => 0,
          'override' => 0,
          'quickedit' => array(
            'editor' => 'form',
          ),
        ),
        'type' => 'title',
        'weight' => 10,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_hero_image',
    'label' => 'Hero Image',
    'required' => 0,
    'settings' => array(
      'allow_override' => 0,
      'entity_translation_sync' => FALSE,
      'referencable_types' => array(
        'image' => 'image',
      ),
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'atom_reference',
      'settings' => array(
        'context' => 'sdl_editor_representation',
      ),
      'type' => 'atom_reference_textfield',
      'weight' => 2,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_basic_content_block-field_hero_image_size'.
  $field_instances['fieldable_panels_pane-vs_basic_content_block-field_hero_image_size'] = array(
    'bundle' => 'vs_basic_content_block',
    'default_value' => array(
      0 => array(
        'value' => 'scale_to_fit',
      ),
    ),
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'list',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'form',
          ),
        ),
        'type' => 'list_default',
        'weight' => 5,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_hero_image_size',
    'label' => 'Hero Image Size',
    'required' => 0,
    'settings' => array(
      'entity_translation_sync' => FALSE,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'options',
      'settings' => array(
        'apply_chosen' => '',
      ),
      'type' => 'options_select',
      'weight' => 4,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_basic_content_block-field_hero_image_title'.
  $field_instances['fieldable_panels_pane-vs_basic_content_block-field_hero_image_title'] = array(
    'bundle' => 'vs_basic_content_block',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'plain_text',
          ),
        ),
        'type' => 'text_default',
        'weight' => 3,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_hero_image_title',
    'label' => 'Hero Image Title',
    'required' => 0,
    'settings' => array(
      'context' => 'title',
      'context_default' => 'sdl_editor_representation',
      'dnd_enabled' => 0,
      'entity_translation_sync' => FALSE,
      'mee_enabled' => 0,
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'size' => 60,
      ),
      'type' => 'text_textfield',
      'weight' => 3,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_basic_content_block-field_page_body'.
  $field_instances['fieldable_panels_pane-vs_basic_content_block-field_page_body'] = array(
    'bundle' => 'vs_basic_content_block',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'plain_text',
          ),
        ),
        'type' => 'text_default',
        'weight' => 8,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_page_body',
    'label' => 'Content',
    'required' => 0,
    'settings' => array(
      'context' => 'virgin_full',
      'context_default' => 'virgin_full',
      'display_summary' => 0,
      'dnd_enabled' => 0,
      'entity_translation_sync' => FALSE,
      'mee_enabled' => 0,
      'text_processing' => 1,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'rows' => 20,
        'summary_rows' => 5,
      ),
      'type' => 'text_textarea_with_summary',
      'weight' => 8,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_basic_content_block-field_scrollable_image'.
  $field_instances['fieldable_panels_pane-vs_basic_content_block-field_scrollable_image'] = array(
    'bundle' => 'vs_basic_content_block',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'atom_reference',
        'settings' => array(
          'link' => 0,
          'override' => 0,
          'quickedit' => array(
            'editor' => 'form',
          ),
        ),
        'type' => 'title',
        'weight' => 11,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_scrollable_image',
    'label' => 'Horizontal Scrolling Image',
    'required' => 0,
    'settings' => array(
      'allow_override' => 0,
      'entity_translation_sync' => FALSE,
      'referencable_types' => array(
        'image' => 'image',
      ),
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'atom_reference',
      'settings' => array(
        'context' => 'sdl_editor_representation',
      ),
      'type' => 'atom_reference_textfield',
      'weight' => 9,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_basic_content_block-title_field'.
  $field_instances['fieldable_panels_pane-vs_basic_content_block-title_field'] = array(
    'bundle' => 'vs_basic_content_block',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => 'A field replacing fieldable panel pane title.',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'plain_text',
          ),
        ),
        'type' => 'text_default',
        'weight' => 2,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'title_field',
    'label' => 'Title',
    'required' => FALSE,
    'settings' => array(
      'context' => '',
      'dnd_enabled' => 0,
      'entity_translation_sync' => FALSE,
      'hide_label' => array(
        'entity' => FALSE,
        'page' => FALSE,
      ),
      'mee_enabled' => 0,
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'module' => 'text',
      'settings' => array(
        'size' => 60,
      ),
      'type' => 'text_textfield',
      'weight' => 0,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_carousel-field_autoplay'.
  $field_instances['fieldable_panels_pane-vs_carousel-field_autoplay'] = array(
    'bundle' => 'vs_carousel',
    'default_value' => array(
      0 => array(
        'value' => 0,
      ),
    ),
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'list',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'form',
          ),
        ),
        'type' => 'list_default',
        'weight' => 4,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_autoplay',
    'label' => 'Autoplay',
    'required' => 0,
    'settings' => array(
      'entity_translation_sync' => FALSE,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'options',
      'settings' => array(
        'display_label' => 0,
      ),
      'type' => 'options_onoff',
      'weight' => -5,
    ),
  );

  // Exported field_instance: 'fieldable_panels_pane-vs_carousel-field_banners'.
  $field_instances['fieldable_panels_pane-vs_carousel-field_banners'] = array(
    'bundle' => 'vs_carousel',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'paragraphs',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'form',
          ),
          'view_mode' => 'full',
        ),
        'type' => 'paragraphs_view',
        'weight' => 3,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_banners',
    'label' => 'Banners',
    'required' => 0,
    'settings' => array(
      'add_mode' => 'button',
      'allowed_bundles' => array(
        'vs_accordion_item' => -1,
        'vs_cta_block' => -1,
        'vs_custom_banner' => 'vs_custom_banner',
        'vs_event_festival_banner' => 'vs_event_festival_banner',
        'vs_package_card' => -1,
        'vs_slide' => 'vs_slide',
        'vs_teaser' => -1,
        'vs_ticket_card' => -1,
        'vs_untimed_event_card' => -1,
      ),
      'bundle_weights' => array(
        'vs_accordion_item' => 2,
        'vs_cta_block' => 3,
        'vs_custom_banner' => 4,
        'vs_event_festival_banner' => 5,
        'vs_package_card' => 6,
        'vs_slide' => 7,
        'vs_teaser' => 8,
        'vs_ticket_card' => 9,
        'vs_untimed_event_card' => 10,
      ),
      'default_edit_mode' => 'open',
      'entity_translation_sync' => FALSE,
      'title' => 'Paragraph',
      'title_multiple' => 'Paragraphs',
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 0,
      'module' => 'paragraphs',
      'settings' => array(),
      'type' => 'paragraphs_embed',
      'weight' => -6,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_carousel-field_brand_color'.
  $field_instances['fieldable_panels_pane-vs_carousel-field_brand_color'] = array(
    'bundle' => 'vs_carousel',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'list',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'form',
          ),
        ),
        'type' => 'list_default',
        'weight' => 5,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_brand_color',
    'label' => 'Brand Color',
    'required' => 0,
    'settings' => array(
      'entity_translation_sync' => FALSE,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'options',
      'settings' => array(
        'apply_chosen' => '',
      ),
      'type' => 'options_select',
      'weight' => -3,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_carousel-field_carousel_style'.
  $field_instances['fieldable_panels_pane-vs_carousel-field_carousel_style'] = array(
    'bundle' => 'vs_carousel',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'list',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'form',
          ),
        ),
        'type' => 'list_default',
        'weight' => 2,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_carousel_style',
    'label' => 'Carousel Style',
    'required' => 1,
    'settings' => array(
      'entity_translation_sync' => FALSE,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'options',
      'settings' => array(
        'apply_chosen' => '',
      ),
      'type' => 'options_select',
      'weight' => -7,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_carousel-field_component_heading'.
  $field_instances['fieldable_panels_pane-vs_carousel-field_component_heading'] = array(
    'bundle' => 'vs_carousel',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'plain_text',
          ),
        ),
        'type' => 'text_default',
        'weight' => 1,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_component_heading',
    'label' => 'Component Heading',
    'required' => 0,
    'settings' => array(
      'context' => 'title',
      'context_default' => 'sdl_editor_representation',
      'dnd_enabled' => 0,
      'entity_translation_sync' => FALSE,
      'mee_enabled' => 0,
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'size' => 60,
      ),
      'type' => 'text_textfield',
      'weight' => -8,
    ),
  );

  // Exported field_instance: 'fieldable_panels_pane-vs_carousel-title_field'.
  $field_instances['fieldable_panels_pane-vs_carousel-title_field'] = array(
    'bundle' => 'vs_carousel',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => 'A field replacing fieldable panel pane title.',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'plain_text',
          ),
        ),
        'type' => 'text_default',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'title_field',
    'label' => 'Title',
    'required' => FALSE,
    'settings' => array(
      'context' => '',
      'dnd_enabled' => 0,
      'entity_translation_sync' => FALSE,
      'hide_label' => array(
        'entity' => FALSE,
        'page' => FALSE,
      ),
      'mee_enabled' => 0,
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'module' => 'text',
      'settings' => array(
        'size' => 60,
      ),
      'type' => 'text_textfield',
      'weight' => -10,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_cta_block-field_component_heading'.
  $field_instances['fieldable_panels_pane-vs_cta_block-field_component_heading'] = array(
    'bundle' => 'vs_cta_block',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'plain_text',
          ),
        ),
        'type' => 'text_default',
        'weight' => 1,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_component_heading',
    'label' => 'Component Heading',
    'required' => 0,
    'settings' => array(
      'context' => 'title',
      'context_default' => 'sdl_editor_representation',
      'dnd_enabled' => 0,
      'entity_translation_sync' => FALSE,
      'mee_enabled' => 0,
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'size' => 60,
      ),
      'type' => 'text_textfield',
      'weight' => -8,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_cta_block-field_cta_blocks'.
  $field_instances['fieldable_panels_pane-vs_cta_block-field_cta_blocks'] = array(
    'bundle' => 'vs_cta_block',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'paragraphs',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'form',
          ),
          'view_mode' => 'full',
        ),
        'type' => 'paragraphs_view',
        'weight' => 2,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_cta_blocks',
    'label' => 'CTA Blocks',
    'required' => 1,
    'settings' => array(
      'add_mode' => 'button',
      'allowed_bundles' => array(
        'vs_accordion_item' => -1,
        'vs_cta_block' => 'vs_cta_block',
        'vs_custom_banner' => -1,
        'vs_event_festival_banner' => -1,
        'vs_package_card' => -1,
        'vs_slide' => -1,
        'vs_teaser' => -1,
        'vs_ticket_card' => -1,
        'vs_untimed_event_card' => -1,
      ),
      'bundle_weights' => array(
        'vs_accordion_item' => 2,
        'vs_cta_block' => 3,
        'vs_custom_banner' => 4,
        'vs_event_festival_banner' => 5,
        'vs_package_card' => 6,
        'vs_slide' => 7,
        'vs_teaser' => 8,
        'vs_ticket_card' => 9,
        'vs_untimed_event_card' => 10,
      ),
      'default_edit_mode' => 'open',
      'entity_translation_sync' => FALSE,
      'title' => 'Paragraph',
      'title_multiple' => 'Paragraphs',
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 0,
      'module' => 'paragraphs',
      'settings' => array(),
      'type' => 'paragraphs_embed',
      'weight' => -7,
    ),
  );

  // Exported field_instance: 'fieldable_panels_pane-vs_cta_block-title_field'.
  $field_instances['fieldable_panels_pane-vs_cta_block-title_field'] = array(
    'bundle' => 'vs_cta_block',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => 'A field replacing fieldable panel pane title.',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'plain_text',
          ),
        ),
        'type' => 'text_default',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'title_field',
    'label' => 'Title',
    'required' => FALSE,
    'settings' => array(
      'context' => '',
      'dnd_enabled' => 0,
      'entity_translation_sync' => FALSE,
      'hide_label' => array(
        'entity' => FALSE,
        'page' => FALSE,
      ),
      'mee_enabled' => 0,
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'module' => 'text',
      'settings' => array(
        'size' => 60,
      ),
      'type' => 'text_textfield',
      'weight' => -10,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_gameface_gallery-field_component_heading'.
  $field_instances['fieldable_panels_pane-vs_gameface_gallery-field_component_heading'] = array(
    'bundle' => 'vs_gameface_gallery',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'plain_text',
          ),
        ),
        'type' => 'text_default',
        'weight' => 1,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_component_heading',
    'label' => 'Component Heading',
    'required' => 0,
    'settings' => array(
      'context' => 'title',
      'context_default' => 'sdl_editor_representation',
      'dnd_enabled' => 0,
      'entity_translation_sync' => FALSE,
      'mee_enabled' => 0,
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'size' => 60,
      ),
      'type' => 'text_textfield',
      'weight' => -8,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_gameface_gallery-field_event_reference'.
  $field_instances['fieldable_panels_pane-vs_gameface_gallery-field_event_reference'] = array(
    'bundle' => 'vs_gameface_gallery',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'entityreference',
        'settings' => array(
          'link' => FALSE,
        ),
        'type' => 'entityreference_label',
        'weight' => 3,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_event_reference',
    'label' => 'Event',
    'required' => 0,
    'settings' => array(
      'entity_translation_sync' => FALSE,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'options',
      'settings' => array(
        'apply_chosen' => '',
      ),
      'type' => 'options_select',
      'weight' => -4,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_gameface_gallery-field_gameface_id'.
  $field_instances['fieldable_panels_pane-vs_gameface_gallery-field_gameface_id'] = array(
    'bundle' => 'vs_gameface_gallery',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'plain_text',
          ),
        ),
        'type' => 'text_default',
        'weight' => 2,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_gameface_id',
    'label' => 'Gameface ID',
    'required' => 0,
    'settings' => array(
      'context' => 'title',
      'context_default' => 'sdl_editor_representation',
      'dnd_enabled' => 0,
      'entity_translation_sync' => FALSE,
      'mee_enabled' => 0,
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'size' => 60,
      ),
      'type' => 'text_textfield',
      'weight' => -6,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_gameface_gallery-title_field'.
  $field_instances['fieldable_panels_pane-vs_gameface_gallery-title_field'] = array(
    'bundle' => 'vs_gameface_gallery',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => 'A field replacing fieldable panel pane title.',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'plain_text',
          ),
        ),
        'type' => 'text_default',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'title_field',
    'label' => 'Title',
    'required' => FALSE,
    'settings' => array(
      'context' => '',
      'dnd_enabled' => 0,
      'entity_translation_sync' => FALSE,
      'hide_label' => array(
        'entity' => FALSE,
        'page' => FALSE,
      ),
      'mee_enabled' => 0,
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'module' => 'text',
      'settings' => array(
        'size' => 60,
      ),
      'type' => 'text_textfield',
      'weight' => -10,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_hero_banner_block-field_constrained_width'.
  $field_instances['fieldable_panels_pane-vs_hero_banner_block-field_constrained_width'] = array(
    'bundle' => 'vs_hero_banner_block',
    'default_value' => array(
      0 => array(
        'value' => 0,
      ),
    ),
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'list',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'form',
          ),
        ),
        'type' => 'list_default',
        'weight' => 5,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_constrained_width',
    'label' => 'Constrained width',
    'required' => 0,
    'settings' => array(
      'entity_translation_sync' => FALSE,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'options',
      'settings' => array(
        'display_label' => 0,
      ),
      'type' => 'options_onoff',
      'weight' => 4,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_hero_banner_block-field_cta_links'.
  $field_instances['fieldable_panels_pane-vs_hero_banner_block-field_cta_links'] = array(
    'bundle' => 'vs_hero_banner_block',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'link',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'form',
          ),
        ),
        'type' => 'link_default',
        'weight' => 3,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_cta_links',
    'label' => 'Call to action button',
    'required' => 0,
    'settings' => array(
      'absolute_url' => 1,
      'attributes' => array(
        'class' => '',
        'configurable_class' => 0,
        'configurable_title' => 0,
        'rel' => '',
        'target' => 'user',
        'title' => '',
      ),
      'display' => array(
        'url_cutoff' => 80,
      ),
      'enable_tokens' => 1,
      'entity_translation_sync' => FALSE,
      'rel_remove' => 'default',
      'title' => 'required',
      'title_label_use_field_label' => 0,
      'title_maxlength' => 128,
      'title_value' => '',
      'url' => 'optional',
      'user_register_form' => FALSE,
      'validate_url' => 1,
    ),
    'widget' => array(
      'active' => 0,
      'module' => 'link',
      'settings' => array(),
      'type' => 'link_field',
      'weight' => 3,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_hero_banner_block-field_description'.
  $field_instances['fieldable_panels_pane-vs_hero_banner_block-field_description'] = array(
    'bundle' => 'vs_hero_banner_block',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'plain_text',
          ),
        ),
        'type' => 'text_default',
        'weight' => 1,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_description',
    'label' => 'Subheading',
    'required' => 0,
    'settings' => array(
      'context' => 'title',
      'context_default' => 'sdl_editor_representation',
      'display_summary' => 0,
      'dnd_enabled' => 0,
      'entity_translation_sync' => FALSE,
      'mee_enabled' => 0,
      'text_processing' => 1,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'rows' => 20,
        'summary_rows' => 5,
      ),
      'type' => 'text_textarea_with_summary',
      'weight' => 1,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_hero_banner_block-field_has_share_button'.
  $field_instances['fieldable_panels_pane-vs_hero_banner_block-field_has_share_button'] = array(
    'bundle' => 'vs_hero_banner_block',
    'default_value' => array(
      0 => array(
        'value' => 0,
      ),
    ),
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'list',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'form',
          ),
        ),
        'type' => 'list_default',
        'weight' => 6,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_has_share_button',
    'label' => 'Show share buttons',
    'required' => 0,
    'settings' => array(
      'entity_translation_sync' => FALSE,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'options',
      'settings' => array(
        'display_label' => 1,
      ),
      'type' => 'options_onoff',
      'weight' => 5,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_hero_banner_block-field_hero_banner_shorter'.
  $field_instances['fieldable_panels_pane-vs_hero_banner_block-field_hero_banner_shorter'] = array(
    'bundle' => 'vs_hero_banner_block',
    'default_value' => array(
      0 => array(
        'value' => 0,
      ),
    ),
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'list',
        'settings' => array(),
        'type' => 'list_default',
        'weight' => 7,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_hero_banner_shorter',
    'label' => 'Smaller height',
    'required' => 0,
    'settings' => array(
      'entity_translation_sync' => FALSE,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'options',
      'settings' => array(
        'display_label' => 1,
      ),
      'type' => 'options_onoff',
      'weight' => 6,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_hero_banner_block-field_hero_image'.
  $field_instances['fieldable_panels_pane-vs_hero_banner_block-field_hero_image'] = array(
    'bundle' => 'vs_hero_banner_block',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'atom_reference',
        'settings' => array(
          'link' => 0,
          'override' => 0,
          'quickedit' => array(
            'editor' => 'form',
          ),
        ),
        'type' => 'title',
        'weight' => 4,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_hero_image',
    'label' => 'Hero Banner Image',
    'required' => 1,
    'settings' => array(
      'allow_override' => 0,
      'entity_translation_sync' => FALSE,
      'referencable_types' => array(
        'image' => 'image',
      ),
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'atom_reference',
      'settings' => array(
        'context' => 'sdl_editor_representation',
      ),
      'type' => 'atom_reference_textfield',
      'weight' => 2,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_hero_banner_block-title_field'.
  $field_instances['fieldable_panels_pane-vs_hero_banner_block-title_field'] = array(
    'bundle' => 'vs_hero_banner_block',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => 'A field replacing fieldable panel pane title.',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'plain_text',
          ),
        ),
        'type' => 'text_default',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'title_field',
    'label' => 'Banner Image Title',
    'required' => 0,
    'settings' => array(
      'context' => 'title',
      'context_default' => 'sdl_editor_representation',
      'dnd_enabled' => 0,
      'entity_translation_sync' => FALSE,
      'hide_label' => array(
        'entity' => 0,
        'page' => 0,
      ),
      'mee_enabled' => 0,
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'size' => 60,
      ),
      'type' => 'text_textfield',
      'weight' => 0,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_hero_event_card-field_brand_color'.
  $field_instances['fieldable_panels_pane-vs_hero_event_card-field_brand_color'] = array(
    'bundle' => 'vs_hero_event_card',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'list',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'form',
          ),
        ),
        'type' => 'list_default',
        'weight' => 6,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_brand_color',
    'label' => 'Brand Color',
    'required' => 1,
    'settings' => array(
      'entity_translation_sync' => FALSE,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'options',
      'settings' => array(
        'apply_chosen' => '',
      ),
      'type' => 'options_select',
      'weight' => 2,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_hero_event_card-field_cta_links'.
  $field_instances['fieldable_panels_pane-vs_hero_event_card-field_cta_links'] = array(
    'bundle' => 'vs_hero_event_card',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'link',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'form',
          ),
        ),
        'type' => 'link_default',
        'weight' => 5,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_cta_links',
    'label' => 'Call to action buttons',
    'required' => 0,
    'settings' => array(
      'absolute_url' => 1,
      'attributes' => array(
        'class' => '',
        'configurable_class' => 0,
        'configurable_title' => 0,
        'rel' => '',
        'target' => 'user',
        'title' => '',
      ),
      'display' => array(
        'url_cutoff' => 80,
      ),
      'enable_tokens' => 1,
      'entity_translation_sync' => FALSE,
      'rel_remove' => 'default',
      'title' => 'required',
      'title_label_use_field_label' => 0,
      'title_maxlength' => 128,
      'title_value' => '',
      'url' => 'optional',
      'user_register_form' => FALSE,
      'validate_url' => 1,
    ),
    'widget' => array(
      'active' => 0,
      'module' => 'link',
      'settings' => array(),
      'type' => 'link_field',
      'weight' => 5,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_hero_event_card-field_hero_event_align'.
  $field_instances['fieldable_panels_pane-vs_hero_event_card-field_hero_event_align'] = array(
    'bundle' => 'vs_hero_event_card',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'list',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'form',
          ),
        ),
        'type' => 'list_default',
        'weight' => 3,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_hero_event_align',
    'label' => 'Alignment',
    'required' => 0,
    'settings' => array(
      'entity_translation_sync' => FALSE,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'options',
      'settings' => array(
        'apply_chosen' => '',
      ),
      'type' => 'options_select',
      'weight' => 3,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_hero_event_card-field_hero_event_reference'.
  $field_instances['fieldable_panels_pane-vs_hero_event_card-field_hero_event_reference'] = array(
    'bundle' => 'vs_hero_event_card',
    'default_value' => NULL,
    'default_value_function' => '',
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'entityreference',
        'settings' => array(
          'link' => FALSE,
          'quickedit' => array(
            'editor' => 'form',
          ),
        ),
        'type' => 'entityreference_label',
        'weight' => 1,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_hero_event_reference',
    'label' => 'Choose a Hero Event',
    'required' => 1,
    'settings' => array(
      'behaviors' => array(
        'prepopulate' => array(
          'status' => 0,
        ),
      ),
      'entity_translation_sync' => FALSE,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'options',
      'settings' => array(
        'apply_chosen' => '',
        'match_operator' => 'CONTAINS',
        'path' => '',
        'size' => 60,
      ),
      'type' => 'options_select',
      'weight' => 4,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_hero_event_card-field_outline_title'.
  $field_instances['fieldable_panels_pane-vs_hero_event_card-field_outline_title'] = array(
    'bundle' => 'vs_hero_event_card',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'plain_text',
          ),
        ),
        'type' => 'text_default',
        'weight' => 2,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_outline_title',
    'label' => 'Outline Title',
    'required' => 0,
    'settings' => array(
      'context' => 'title',
      'context_default' => 'sdl_editor_representation',
      'dnd_enabled' => 0,
      'entity_translation_sync' => FALSE,
      'mee_enabled' => 0,
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'size' => 60,
      ),
      'type' => 'text_textfield',
      'weight' => 1,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_hero_event_card-title_field'.
  $field_instances['fieldable_panels_pane-vs_hero_event_card-title_field'] = array(
    'bundle' => 'vs_hero_event_card',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => 'A field replacing fieldable panel pane title.',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'plain_text',
          ),
        ),
        'type' => 'text_default',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'title_field',
    'label' => 'Title',
    'required' => FALSE,
    'settings' => array(
      'context' => '',
      'dnd_enabled' => 0,
      'entity_translation_sync' => FALSE,
      'hide_label' => array(
        'entity' => FALSE,
        'page' => FALSE,
      ),
      'mee_enabled' => 0,
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'module' => 'text',
      'settings' => array(
        'size' => 60,
      ),
      'type' => 'text_textfield',
      'weight' => 0,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_hootsuite_feed-field_hootsuite_campaign_url'.
  $field_instances['fieldable_panels_pane-vs_hootsuite_feed-field_hootsuite_campaign_url'] = array(
    'bundle' => 'vs_hootsuite_feed',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'plain_text',
          ),
        ),
        'type' => 'text_default',
        'weight' => 1,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_hootsuite_campaign_url',
    'label' => 'Hootsuite Campaign URL',
    'required' => 1,
    'settings' => array(
      'context' => 'title',
      'context_default' => 'sdl_editor_representation',
      'dnd_enabled' => 0,
      'entity_translation_sync' => FALSE,
      'mee_enabled' => 0,
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'size' => 60,
      ),
      'type' => 'text_textfield',
      'weight' => -9,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_hootsuite_feed-title_field'.
  $field_instances['fieldable_panels_pane-vs_hootsuite_feed-title_field'] = array(
    'bundle' => 'vs_hootsuite_feed',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => 'A field replacing fieldable panel pane title.',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'plain_text',
          ),
        ),
        'type' => 'text_default',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'title_field',
    'label' => 'Title',
    'required' => FALSE,
    'settings' => array(
      'context' => '',
      'dnd_enabled' => 0,
      'entity_translation_sync' => FALSE,
      'hide_label' => array(
        'entity' => FALSE,
        'page' => FALSE,
      ),
      'mee_enabled' => 0,
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'module' => 'text',
      'settings' => array(
        'size' => 60,
      ),
      'type' => 'text_textfield',
      'weight' => -10,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_mylaps_track_my_runner-field_component_heading'.
  $field_instances['fieldable_panels_pane-vs_mylaps_track_my_runner-field_component_heading'] = array(
    'bundle' => 'vs_mylaps_track_my_runner',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'plain_text',
          ),
        ),
        'type' => 'text_default',
        'weight' => 1,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_component_heading',
    'label' => 'Component Heading',
    'required' => 0,
    'settings' => array(
      'context' => 'title',
      'context_default' => 'sdl_editor_representation',
      'dnd_enabled' => 0,
      'entity_translation_sync' => FALSE,
      'mee_enabled' => 0,
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'size' => 60,
      ),
      'type' => 'text_textfield',
      'weight' => -8,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_mylaps_track_my_runner-field_event'.
  $field_instances['fieldable_panels_pane-vs_mylaps_track_my_runner-field_event'] = array(
    'bundle' => 'vs_mylaps_track_my_runner',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'entityreference',
        'settings' => array(
          'link' => FALSE,
        ),
        'type' => 'entityreference_label',
        'weight' => 3,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_event',
    'label' => 'Event',
    'required' => 0,
    'settings' => array(
      'entity_translation_sync' => FALSE,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'options',
      'settings' => array(
        'apply_chosen' => '',
      ),
      'type' => 'options_select',
      'weight' => -5,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_mylaps_track_my_runner-field_mylaps_id'.
  $field_instances['fieldable_panels_pane-vs_mylaps_track_my_runner-field_mylaps_id'] = array(
    'bundle' => 'vs_mylaps_track_my_runner',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'plain_text',
          ),
        ),
        'type' => 'text_default',
        'weight' => 2,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_mylaps_id',
    'label' => 'MyLaps ID',
    'required' => 0,
    'settings' => array(
      'context' => 'title',
      'context_default' => 'sdl_editor_representation',
      'dnd_enabled' => 0,
      'entity_translation_sync' => FALSE,
      'mee_enabled' => 0,
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'size' => 60,
      ),
      'type' => 'text_textfield',
      'weight' => -6,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_mylaps_track_my_runner-title_field'.
  $field_instances['fieldable_panels_pane-vs_mylaps_track_my_runner-title_field'] = array(
    'bundle' => 'vs_mylaps_track_my_runner',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => 'A field replacing fieldable panel pane title.',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'plain_text',
          ),
        ),
        'type' => 'text_default',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'title_field',
    'label' => 'Title',
    'required' => FALSE,
    'settings' => array(
      'context' => '',
      'dnd_enabled' => 0,
      'entity_translation_sync' => FALSE,
      'hide_label' => array(
        'entity' => FALSE,
        'page' => FALSE,
      ),
      'mee_enabled' => 0,
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'module' => 'text',
      'settings' => array(
        'size' => 60,
      ),
      'type' => 'text_textfield',
      'weight' => -10,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_package_cards-field_component_heading'.
  $field_instances['fieldable_panels_pane-vs_package_cards-field_component_heading'] = array(
    'bundle' => 'vs_package_cards',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'plain_text',
          ),
        ),
        'type' => 'text_default',
        'weight' => 1,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_component_heading',
    'label' => 'Component Heading',
    'required' => 0,
    'settings' => array(
      'context' => 'title',
      'context_default' => 'sdl_editor_representation',
      'dnd_enabled' => 0,
      'entity_translation_sync' => FALSE,
      'mee_enabled' => 0,
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'size' => 60,
      ),
      'type' => 'text_textfield',
      'weight' => -8,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_package_cards-field_package_cards'.
  $field_instances['fieldable_panels_pane-vs_package_cards-field_package_cards'] = array(
    'bundle' => 'vs_package_cards',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'paragraphs',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'form',
          ),
          'view_mode' => 'full',
        ),
        'type' => 'paragraphs_view',
        'weight' => 2,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_package_cards',
    'label' => 'Packages',
    'required' => 1,
    'settings' => array(
      'add_mode' => 'button',
      'allowed_bundles' => array(
        'vs_accordion_item' => -1,
        'vs_cta_block' => -1,
        'vs_custom_banner' => -1,
        'vs_event_festival_banner' => -1,
        'vs_package_card' => 'vs_package_card',
        'vs_slide' => -1,
        'vs_teaser' => -1,
        'vs_ticket_card' => -1,
        'vs_untimed_event_card' => -1,
      ),
      'bundle_weights' => array(
        'vs_accordion_item' => 2,
        'vs_cta_block' => 3,
        'vs_custom_banner' => 4,
        'vs_event_festival_banner' => 5,
        'vs_package_card' => 6,
        'vs_slide' => 7,
        'vs_teaser' => 8,
        'vs_ticket_card' => 9,
        'vs_untimed_event_card' => 10,
      ),
      'default_edit_mode' => 'open',
      'entity_translation_sync' => FALSE,
      'title' => 'Paragraph',
      'title_multiple' => 'Paragraphs',
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 0,
      'module' => 'paragraphs',
      'settings' => array(),
      'type' => 'paragraphs_embed',
      'weight' => -7,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_package_cards-title_field'.
  $field_instances['fieldable_panels_pane-vs_package_cards-title_field'] = array(
    'bundle' => 'vs_package_cards',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => 'A field replacing fieldable panel pane title.',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'plain_text',
          ),
        ),
        'type' => 'text_default',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'title_field',
    'label' => 'Title',
    'required' => FALSE,
    'settings' => array(
      'context' => '',
      'dnd_enabled' => 0,
      'entity_translation_sync' => FALSE,
      'hide_label' => array(
        'entity' => FALSE,
        'page' => FALSE,
      ),
      'mee_enabled' => 0,
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'module' => 'text',
      'settings' => array(
        'size' => 60,
      ),
      'type' => 'text_textfield',
      'weight' => -10,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_photo_gallery-field_component_heading'.
  $field_instances['fieldable_panels_pane-vs_photo_gallery-field_component_heading'] = array(
    'bundle' => 'vs_photo_gallery',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'plain_text',
          ),
        ),
        'type' => 'text_default',
        'weight' => 1,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_component_heading',
    'label' => 'Component Heading',
    'required' => 0,
    'settings' => array(
      'context' => 'title',
      'context_default' => 'sdl_editor_representation',
      'dnd_enabled' => 0,
      'entity_translation_sync' => FALSE,
      'mee_enabled' => 0,
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'size' => 60,
      ),
      'type' => 'text_textfield',
      'weight' => -8,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_photo_gallery-field_slides'.
  $field_instances['fieldable_panels_pane-vs_photo_gallery-field_slides'] = array(
    'bundle' => 'vs_photo_gallery',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'paragraphs',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'form',
          ),
          'view_mode' => 'full',
        ),
        'type' => 'paragraphs_view',
        'weight' => 2,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_slides',
    'label' => 'Slide',
    'required' => 1,
    'settings' => array(
      'add_mode' => 'button',
      'allowed_bundles' => array(
        'vs_accordion_item' => -1,
        'vs_cta_block' => -1,
        'vs_custom_banner' => -1,
        'vs_event_festival_banner' => -1,
        'vs_package_card' => -1,
        'vs_slide' => 'vs_slide',
        'vs_teaser' => -1,
        'vs_ticket_card' => -1,
        'vs_untimed_event_card' => -1,
      ),
      'bundle_weights' => array(
        'vs_accordion_item' => 2,
        'vs_cta_block' => 3,
        'vs_custom_banner' => 4,
        'vs_event_festival_banner' => 5,
        'vs_package_card' => 6,
        'vs_slide' => 7,
        'vs_teaser' => 8,
        'vs_ticket_card' => 9,
        'vs_untimed_event_card' => 10,
      ),
      'default_edit_mode' => 'open',
      'entity_translation_sync' => FALSE,
      'title' => 'Paragraph',
      'title_multiple' => 'Paragraphs',
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 0,
      'module' => 'paragraphs',
      'settings' => array(),
      'type' => 'paragraphs_embed',
      'weight' => -7,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_photo_gallery-field_thumbnail'.
  $field_instances['fieldable_panels_pane-vs_photo_gallery-field_thumbnail'] = array(
    'bundle' => 'vs_photo_gallery',
    'default_value' => array(
      0 => array(
        'value' => 0,
      ),
    ),
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'list',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'form',
          ),
        ),
        'type' => 'list_default',
        'weight' => 3,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_thumbnail',
    'label' => 'Thumbnails',
    'required' => 0,
    'settings' => array(
      'entity_translation_sync' => FALSE,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'options',
      'settings' => array(
        'display_label' => 0,
      ),
      'type' => 'options_onoff',
      'weight' => -6,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_photo_gallery-title_field'.
  $field_instances['fieldable_panels_pane-vs_photo_gallery-title_field'] = array(
    'bundle' => 'vs_photo_gallery',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => 'A field replacing fieldable panel pane title.',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'plain_text',
          ),
        ),
        'type' => 'text_default',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'title_field',
    'label' => 'Title',
    'required' => FALSE,
    'settings' => array(
      'context' => '',
      'dnd_enabled' => 0,
      'entity_translation_sync' => FALSE,
      'hide_label' => array(
        'entity' => FALSE,
        'page' => FALSE,
      ),
      'mee_enabled' => 0,
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'module' => 'text',
      'settings' => array(
        'size' => 60,
      ),
      'type' => 'text_textfield',
      'weight' => -10,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_promo_banner-field_component_heading'.
  $field_instances['fieldable_panels_pane-vs_promo_banner-field_component_heading'] = array(
    'bundle' => 'vs_promo_banner',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'plain_text',
          ),
        ),
        'type' => 'text_default',
        'weight' => 1,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_component_heading',
    'label' => 'Component Heading',
    'required' => 0,
    'settings' => array(
      'context' => 'title',
      'context_default' => 'sdl_editor_representation',
      'dnd_enabled' => 0,
      'entity_translation_sync' => FALSE,
      'mee_enabled' => 0,
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'size' => 60,
      ),
      'type' => 'text_textfield',
      'weight' => 1,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_promo_banner-field_constrained_width'.
  $field_instances['fieldable_panels_pane-vs_promo_banner-field_constrained_width'] = array(
    'bundle' => 'vs_promo_banner',
    'default_value' => array(
      0 => array(
        'value' => 0,
      ),
    ),
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'list',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'form',
          ),
        ),
        'type' => 'list_default',
        'weight' => 3,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_constrained_width',
    'label' => 'Constrained width',
    'required' => 0,
    'settings' => array(
      'entity_translation_sync' => FALSE,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'options',
      'settings' => array(
        'display_label' => 0,
      ),
      'type' => 'options_onoff',
      'weight' => 4,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_promo_banner-field_promo_banners'.
  $field_instances['fieldable_panels_pane-vs_promo_banner-field_promo_banners'] = array(
    'bundle' => 'vs_promo_banner',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'paragraphs',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'form',
          ),
          'view_mode' => 'full',
        ),
        'type' => 'paragraphs_view',
        'weight' => 2,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_promo_banners',
    'label' => 'Banners',
    'required' => 0,
    'settings' => array(
      'add_mode' => 'button',
      'allowed_bundles' => array(
        'vs_accordion_item' => -1,
        'vs_cta_block' => -1,
        'vs_custom_banner' => 'vs_custom_banner',
        'vs_event_festival_banner' => 'vs_event_festival_banner',
        'vs_package_card' => -1,
        'vs_slide' => -1,
        'vs_teaser' => -1,
        'vs_ticket_card' => -1,
        'vs_untimed_event_card' => -1,
      ),
      'bundle_weights' => array(
        'vs_accordion_item' => 2,
        'vs_cta_block' => 3,
        'vs_custom_banner' => 4,
        'vs_event_festival_banner' => 5,
        'vs_package_card' => 6,
        'vs_slide' => 7,
        'vs_teaser' => 8,
        'vs_ticket_card' => 9,
        'vs_untimed_event_card' => 10,
      ),
      'default_edit_mode' => 'open',
      'entity_translation_sync' => FALSE,
      'title' => 'Paragraph',
      'title_multiple' => 'Paragraphs',
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 0,
      'module' => 'paragraphs',
      'settings' => array(),
      'type' => 'paragraphs_embed',
      'weight' => 2,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_promo_banner-title_field'.
  $field_instances['fieldable_panels_pane-vs_promo_banner-title_field'] = array(
    'bundle' => 'vs_promo_banner',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => 'A field replacing fieldable panel pane title.',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'plain_text',
          ),
        ),
        'type' => 'text_default',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'title_field',
    'label' => 'Title',
    'required' => FALSE,
    'settings' => array(
      'context' => '',
      'dnd_enabled' => 0,
      'entity_translation_sync' => FALSE,
      'hide_label' => array(
        'entity' => FALSE,
        'page' => FALSE,
      ),
      'mee_enabled' => 0,
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'module' => 'text',
      'settings' => array(
        'size' => 60,
      ),
      'type' => 'text_textfield',
      'weight' => 0,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_results_introduction-field_cta_links'.
  $field_instances['fieldable_panels_pane-vs_results_introduction-field_cta_links'] = array(
    'bundle' => 'vs_results_introduction',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'link',
        'settings' => array(),
        'type' => 'link_default',
        'weight' => 1,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_cta_links',
    'label' => 'Call to action button',
    'required' => 0,
    'settings' => array(
      'absolute_url' => 1,
      'attributes' => array(
        'class' => '',
        'configurable_class' => 0,
        'configurable_title' => 0,
        'rel' => '',
        'target' => 'user',
        'title' => '',
      ),
      'display' => array(
        'url_cutoff' => 80,
      ),
      'enable_tokens' => 1,
      'entity_translation_sync' => FALSE,
      'rel_remove' => 'default',
      'title' => 'required',
      'title_label_use_field_label' => 0,
      'title_maxlength' => 128,
      'title_value' => '',
      'url' => 'optional',
      'user_register_form' => FALSE,
      'validate_url' => 1,
    ),
    'widget' => array(
      'active' => 0,
      'module' => 'link',
      'settings' => array(),
      'type' => 'link_field',
      'weight' => -2,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_results_introduction-field_festival_reference'.
  $field_instances['fieldable_panels_pane-vs_results_introduction-field_festival_reference'] = array(
    'bundle' => 'vs_results_introduction',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'entityreference',
        'settings' => array(
          'link' => FALSE,
        ),
        'type' => 'entityreference_label',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_festival_reference',
    'label' => 'Festival',
    'required' => 1,
    'settings' => array(
      'entity_translation_sync' => FALSE,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'options',
      'settings' => array(
        'apply_chosen' => '',
        'match_operator' => 'CONTAINS',
        'path' => '',
        'size' => 60,
      ),
      'type' => 'options_select',
      'weight' => -4,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_results_overview-field_cta_links'.
  $field_instances['fieldable_panels_pane-vs_results_overview-field_cta_links'] = array(
    'bundle' => 'vs_results_overview',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'link',
        'settings' => array(),
        'type' => 'link_default',
        'weight' => 1,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_cta_links',
    'label' => 'Call to action button',
    'required' => 0,
    'settings' => array(
      'absolute_url' => 1,
      'attributes' => array(
        'class' => '',
        'configurable_class' => 0,
        'configurable_title' => 0,
        'rel' => '',
        'target' => 'user',
        'title' => '',
      ),
      'display' => array(
        'url_cutoff' => 80,
      ),
      'enable_tokens' => 1,
      'entity_translation_sync' => FALSE,
      'rel_remove' => 'default',
      'title' => 'required',
      'title_label_use_field_label' => 0,
      'title_maxlength' => 128,
      'title_value' => '',
      'url' => 'optional',
      'user_register_form' => FALSE,
      'validate_url' => 1,
    ),
    'widget' => array(
      'active' => 0,
      'module' => 'link',
      'settings' => array(),
      'type' => 'link_field',
      'weight' => -1,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_results_overview-field_event_reference'.
  $field_instances['fieldable_panels_pane-vs_results_overview-field_event_reference'] = array(
    'bundle' => 'vs_results_overview',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'entityreference',
        'settings' => array(
          'link' => FALSE,
        ),
        'type' => 'entityreference_label',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_event_reference',
    'label' => 'Event',
    'required' => 1,
    'settings' => array(
      'entity_translation_sync' => FALSE,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'options',
      'settings' => array(
        'apply_chosen' => '',
      ),
      'type' => 'options_select',
      'weight' => -3,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_teaser_block-field_brand_color'.
  $field_instances['fieldable_panels_pane-vs_teaser_block-field_brand_color'] = array(
    'bundle' => 'vs_teaser_block',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'list',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'form',
          ),
        ),
        'type' => 'list_default',
        'weight' => 3,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_brand_color',
    'label' => 'Brand Color',
    'required' => 1,
    'settings' => array(
      'entity_translation_sync' => FALSE,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'options',
      'settings' => array(
        'apply_chosen' => '',
      ),
      'type' => 'options_select',
      'weight' => 1,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_teaser_block-field_hero_image'.
  $field_instances['fieldable_panels_pane-vs_teaser_block-field_hero_image'] = array(
    'bundle' => 'vs_teaser_block',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'atom_reference',
        'settings' => array(
          'link' => 0,
          'override' => 0,
          'quickedit' => array(
            'editor' => 'form',
          ),
        ),
        'type' => 'title',
        'weight' => 2,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_hero_image',
    'label' => 'Background Image',
    'required' => 0,
    'settings' => array(
      'allow_override' => 0,
      'entity_translation_sync' => FALSE,
      'referencable_types' => array(
        'image' => 0,
      ),
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'atom_reference',
      'settings' => array(
        'context' => 'sdl_editor_representation',
      ),
      'type' => 'atom_reference_textfield',
      'weight' => 2,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_teaser_block-field_teasers'.
  $field_instances['fieldable_panels_pane-vs_teaser_block-field_teasers'] = array(
    'bundle' => 'vs_teaser_block',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'paragraphs',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'form',
          ),
          'view_mode' => 'full',
        ),
        'type' => 'paragraphs_view',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_teasers',
    'label' => 'Content',
    'required' => 1,
    'settings' => array(
      'add_mode' => 'button',
      'allowed_bundles' => array(
        'vs_accordion_item' => -1,
        'vs_cta_block' => -1,
        'vs_custom_banner' => -1,
        'vs_event_festival_banner' => -1,
        'vs_package_card' => -1,
        'vs_slide' => -1,
        'vs_teaser' => 'vs_teaser',
        'vs_ticket_card' => -1,
        'vs_untimed_event_card' => -1,
      ),
      'bundle_weights' => array(
        'vs_accordion_item' => 2,
        'vs_cta_block' => 3,
        'vs_custom_banner' => 4,
        'vs_event_festival_banner' => 5,
        'vs_package_card' => 6,
        'vs_slide' => 7,
        'vs_teaser' => 8,
        'vs_ticket_card' => 9,
        'vs_untimed_event_card' => 10,
      ),
      'default_edit_mode' => 'open',
      'entity_translation_sync' => FALSE,
      'title' => 'Paragraph',
      'title_multiple' => 'Paragraphs',
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 0,
      'module' => 'paragraphs',
      'settings' => array(),
      'type' => 'paragraphs_embed',
      'weight' => 3,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_teaser_block-title_field'.
  $field_instances['fieldable_panels_pane-vs_teaser_block-title_field'] = array(
    'bundle' => 'vs_teaser_block',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => 'A field replacing fieldable panel pane title.',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'plain_text',
          ),
        ),
        'type' => 'text_default',
        'weight' => 1,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'title_field',
    'label' => 'Title',
    'required' => FALSE,
    'settings' => array(
      'context' => '',
      'dnd_enabled' => 0,
      'entity_translation_sync' => FALSE,
      'hide_label' => array(
        'entity' => FALSE,
        'page' => FALSE,
      ),
      'mee_enabled' => 0,
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'module' => 'text',
      'settings' => array(
        'size' => 60,
      ),
      'type' => 'text_textfield',
      'weight' => 0,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_ticket_cards-field_component_heading'.
  $field_instances['fieldable_panels_pane-vs_ticket_cards-field_component_heading'] = array(
    'bundle' => 'vs_ticket_cards',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'plain_text',
          ),
        ),
        'type' => 'text_default',
        'weight' => 1,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_component_heading',
    'label' => 'Component Heading',
    'required' => 0,
    'settings' => array(
      'context' => 'title',
      'context_default' => 'sdl_editor_representation',
      'dnd_enabled' => 0,
      'entity_translation_sync' => FALSE,
      'mee_enabled' => 0,
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'size' => 60,
      ),
      'type' => 'text_textfield',
      'weight' => -8,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_ticket_cards-field_ticket_cards'.
  $field_instances['fieldable_panels_pane-vs_ticket_cards-field_ticket_cards'] = array(
    'bundle' => 'vs_ticket_cards',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'paragraphs',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'form',
          ),
          'view_mode' => 'full',
        ),
        'type' => 'paragraphs_view',
        'weight' => 2,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_ticket_cards',
    'label' => 'Tickets',
    'required' => 1,
    'settings' => array(
      'add_mode' => 'button',
      'allowed_bundles' => array(
        'vs_accordion_item' => -1,
        'vs_cta_block' => -1,
        'vs_custom_banner' => -1,
        'vs_event_festival_banner' => -1,
        'vs_package_card' => -1,
        'vs_slide' => -1,
        'vs_teaser' => -1,
        'vs_ticket_card' => 'vs_ticket_card',
        'vs_untimed_event_card' => -1,
      ),
      'bundle_weights' => array(
        'vs_accordion_item' => 2,
        'vs_cta_block' => 3,
        'vs_custom_banner' => 4,
        'vs_event_festival_banner' => 5,
        'vs_package_card' => 6,
        'vs_slide' => 7,
        'vs_teaser' => 8,
        'vs_ticket_card' => 9,
        'vs_untimed_event_card' => 10,
      ),
      'default_edit_mode' => 'open',
      'entity_translation_sync' => FALSE,
      'title' => 'Paragraph',
      'title_multiple' => 'Paragraphs',
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 0,
      'module' => 'paragraphs',
      'settings' => array(),
      'type' => 'paragraphs_embed',
      'weight' => -7,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_ticket_cards-title_field'.
  $field_instances['fieldable_panels_pane-vs_ticket_cards-title_field'] = array(
    'bundle' => 'vs_ticket_cards',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => 'A field replacing fieldable panel pane title.',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'plain_text',
          ),
        ),
        'type' => 'text_default',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'title_field',
    'label' => 'Title',
    'required' => FALSE,
    'settings' => array(
      'context' => '',
      'dnd_enabled' => 0,
      'entity_translation_sync' => FALSE,
      'hide_label' => array(
        'entity' => FALSE,
        'page' => FALSE,
      ),
      'mee_enabled' => 0,
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'module' => 'text',
      'settings' => array(
        'size' => 60,
      ),
      'type' => 'text_textfield',
      'weight' => -10,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_untimed_event_cards-field_component_heading'.
  $field_instances['fieldable_panels_pane-vs_untimed_event_cards-field_component_heading'] = array(
    'bundle' => 'vs_untimed_event_cards',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'plain_text',
          ),
        ),
        'type' => 'text_default',
        'weight' => 1,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_component_heading',
    'label' => 'Component Heading',
    'required' => 0,
    'settings' => array(
      'context' => 'title',
      'context_default' => 'sdl_editor_representation',
      'dnd_enabled' => 0,
      'entity_translation_sync' => FALSE,
      'mee_enabled' => 0,
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'size' => 60,
      ),
      'type' => 'text_textfield',
      'weight' => -8,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_untimed_event_cards-field_untimed_event_cards'.
  $field_instances['fieldable_panels_pane-vs_untimed_event_cards-field_untimed_event_cards'] = array(
    'bundle' => 'vs_untimed_event_cards',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'paragraphs',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'form',
          ),
          'view_mode' => 'full',
        ),
        'type' => 'paragraphs_view',
        'weight' => 2,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_untimed_event_cards',
    'label' => 'Untimed Events',
    'required' => 1,
    'settings' => array(
      'add_mode' => 'button',
      'allowed_bundles' => array(
        'vs_accordion_item' => -1,
        'vs_cta_block' => -1,
        'vs_custom_banner' => -1,
        'vs_event_festival_banner' => -1,
        'vs_package_card' => -1,
        'vs_slide' => -1,
        'vs_teaser' => -1,
        'vs_ticket_card' => -1,
        'vs_untimed_event_card' => 'vs_untimed_event_card',
      ),
      'bundle_weights' => array(
        'vs_accordion_item' => 2,
        'vs_cta_block' => 3,
        'vs_custom_banner' => 4,
        'vs_event_festival_banner' => 5,
        'vs_package_card' => 6,
        'vs_slide' => 7,
        'vs_teaser' => 8,
        'vs_ticket_card' => 9,
        'vs_untimed_event_card' => 10,
      ),
      'default_edit_mode' => 'open',
      'entity_translation_sync' => FALSE,
      'title' => 'Paragraph',
      'title_multiple' => 'Paragraphs',
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 0,
      'module' => 'paragraphs',
      'settings' => array(),
      'type' => 'paragraphs_embed',
      'weight' => -7,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_untimed_event_cards-title_field'.
  $field_instances['fieldable_panels_pane-vs_untimed_event_cards-title_field'] = array(
    'bundle' => 'vs_untimed_event_cards',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => 'A field replacing fieldable panel pane title.',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'plain_text',
          ),
        ),
        'type' => 'text_default',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'title_field',
    'label' => 'Title',
    'required' => FALSE,
    'settings' => array(
      'context' => '',
      'dnd_enabled' => 0,
      'entity_translation_sync' => FALSE,
      'hide_label' => array(
        'entity' => FALSE,
        'page' => FALSE,
      ),
      'mee_enabled' => 0,
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'module' => 'text',
      'settings' => array(
        'size' => 60,
      ),
      'type' => 'text_textfield',
      'weight' => -10,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_video_banner-field_component_heading'.
  $field_instances['fieldable_panels_pane-vs_video_banner-field_component_heading'] = array(
    'bundle' => 'vs_video_banner',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'plain_text',
          ),
        ),
        'type' => 'text_default',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_component_heading',
    'label' => 'Component Heading',
    'required' => 0,
    'settings' => array(
      'context' => 'title',
      'context_default' => 'sdl_editor_representation',
      'dnd_enabled' => 0,
      'entity_translation_sync' => FALSE,
      'mee_enabled' => 0,
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'size' => 60,
      ),
      'type' => 'text_textfield',
      'weight' => 1,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_video_banner-field_cta_links'.
  $field_instances['fieldable_panels_pane-vs_video_banner-field_cta_links'] = array(
    'bundle' => 'vs_video_banner',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'link',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'form',
          ),
        ),
        'type' => 'link_default',
        'weight' => 6,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_cta_links',
    'label' => 'Call to action button',
    'required' => 0,
    'settings' => array(
      'absolute_url' => 1,
      'attributes' => array(
        'class' => '',
        'configurable_class' => 0,
        'configurable_title' => 0,
        'rel' => '',
        'target' => 'user',
        'title' => '',
      ),
      'display' => array(
        'url_cutoff' => 80,
      ),
      'enable_tokens' => 1,
      'entity_translation_sync' => FALSE,
      'rel_remove' => 'default',
      'title' => 'optional',
      'title_label_use_field_label' => 0,
      'title_maxlength' => 128,
      'title_value' => '',
      'url' => 0,
      'user_register_form' => FALSE,
      'validate_url' => 1,
    ),
    'widget' => array(
      'active' => 0,
      'module' => 'link',
      'settings' => array(),
      'type' => 'link_field',
      'weight' => 8,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_video_banner-field_header_image'.
  $field_instances['fieldable_panels_pane-vs_video_banner-field_header_image'] = array(
    'bundle' => 'vs_video_banner',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'atom_reference',
        'settings' => array(
          'link' => 0,
          'override' => 0,
          'quickedit' => array(
            'editor' => 'form',
          ),
        ),
        'type' => 'title',
        'weight' => 1,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_header_image',
    'label' => 'Header Image',
    'required' => 0,
    'settings' => array(
      'allow_override' => 0,
      'entity_translation_sync' => FALSE,
      'referencable_types' => array(
        'image' => 'image',
      ),
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'atom_reference',
      'settings' => array(
        'context' => 'sdl_editor_representation',
      ),
      'type' => 'atom_reference_textfield',
      'weight' => 2,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_video_banner-field_overlay_video_poster_image'.
  $field_instances['fieldable_panels_pane-vs_video_banner-field_overlay_video_poster_image'] = array(
    'bundle' => 'vs_video_banner',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'atom_reference',
        'settings' => array(
          'link' => 0,
          'override' => 0,
          'quickedit' => array(
            'editor' => 'form',
          ),
        ),
        'type' => 'title',
        'weight' => 5,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_overlay_video_poster_image',
    'label' => 'Overlay Video Poster Image',
    'required' => 0,
    'settings' => array(
      'allow_override' => 0,
      'entity_translation_sync' => FALSE,
      'referencable_types' => array(
        'image' => 'image',
      ),
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'atom_reference',
      'settings' => array(
        'context' => 'sdl_editor_representation',
      ),
      'type' => 'atom_reference_textfield',
      'weight' => 7,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_video_banner-field_overlay_video_url'.
  $field_instances['fieldable_panels_pane-vs_video_banner-field_overlay_video_url'] = array(
    'bundle' => 'vs_video_banner',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'plain_text',
          ),
        ),
        'type' => 'text_default',
        'weight' => 4,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_overlay_video_url',
    'label' => 'Overlay Video URL',
    'required' => 0,
    'settings' => array(
      'context' => 'title',
      'context_default' => 'sdl_editor_representation',
      'dnd_enabled' => 0,
      'entity_translation_sync' => FALSE,
      'mee_enabled' => 0,
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'size' => 60,
      ),
      'type' => 'text_textfield',
      'weight' => 6,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_video_banner-field_slider_images'.
  $field_instances['fieldable_panels_pane-vs_video_banner-field_slider_images'] = array(
    'bundle' => 'vs_video_banner',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'atom_reference',
        'settings' => array(
          'link' => 0,
          'override' => 0,
          'quickedit' => array(
            'editor' => 'form',
          ),
        ),
        'type' => 'title',
        'weight' => 7,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_slider_images',
    'label' => 'Slider Images',
    'required' => 0,
    'settings' => array(
      'allow_override' => 0,
      'entity_translation_sync' => FALSE,
      'referencable_types' => array(
        'image' => 'image',
      ),
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'atom_reference',
      'settings' => array(
        'context' => 'sdl_editor_representation',
      ),
      'type' => 'atom_reference_textfield',
      'weight' => 3,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_video_banner-field_video_poster_image'.
  $field_instances['fieldable_panels_pane-vs_video_banner-field_video_poster_image'] = array(
    'bundle' => 'vs_video_banner',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'atom_reference',
        'settings' => array(
          'link' => 0,
          'override' => 0,
          'quickedit' => array(
            'editor' => 'form',
          ),
        ),
        'type' => 'title',
        'weight' => 3,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_video_poster_image',
    'label' => 'Video Poster Image',
    'required' => 0,
    'settings' => array(
      'allow_override' => 0,
      'entity_translation_sync' => FALSE,
      'referencable_types' => array(
        'image' => 0,
      ),
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'atom_reference',
      'settings' => array(
        'context' => 'sdl_editor_representation',
      ),
      'type' => 'atom_reference_textfield',
      'weight' => 5,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_video_banner-field_video_url'.
  $field_instances['fieldable_panels_pane-vs_video_banner-field_video_url'] = array(
    'bundle' => 'vs_video_banner',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'plain_text',
          ),
        ),
        'type' => 'text_default',
        'weight' => 2,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_video_url',
    'label' => 'Video URL',
    'required' => 0,
    'settings' => array(
      'context' => 'title',
      'context_default' => 'sdl_editor_representation',
      'dnd_enabled' => 0,
      'entity_translation_sync' => FALSE,
      'mee_enabled' => 0,
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'size' => 60,
      ),
      'type' => 'text_textfield',
      'weight' => 4,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_video_block-field_component_heading'.
  $field_instances['fieldable_panels_pane-vs_video_block-field_component_heading'] = array(
    'bundle' => 'vs_video_block',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'plain_text',
          ),
        ),
        'type' => 'text_default',
        'weight' => 1,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_component_heading',
    'label' => 'Component Heading',
    'required' => 0,
    'settings' => array(
      'context' => 'title',
      'context_default' => 'sdl_editor_representation',
      'dnd_enabled' => 0,
      'entity_translation_sync' => FALSE,
      'mee_enabled' => 0,
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'size' => 60,
      ),
      'type' => 'text_textfield',
      'weight' => 1,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_video_block-field_video_poster_image'.
  $field_instances['fieldable_panels_pane-vs_video_block-field_video_poster_image'] = array(
    'bundle' => 'vs_video_block',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'atom_reference',
        'settings' => array(
          'link' => 0,
          'override' => 0,
          'quickedit' => array(
            'editor' => 'form',
          ),
        ),
        'type' => 'title',
        'weight' => 2,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_video_poster_image',
    'label' => 'Video Poster Image',
    'required' => 1,
    'settings' => array(
      'allow_override' => 0,
      'entity_translation_sync' => FALSE,
      'referencable_types' => array(
        'image' => 'image',
      ),
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'atom_reference',
      'settings' => array(
        'context' => 'virgin_full',
      ),
      'type' => 'atom_reference_textfield',
      'weight' => 2,
    ),
  );

  // Exported field_instance:
  // 'fieldable_panels_pane-vs_video_block-field_video_url'.
  $field_instances['fieldable_panels_pane-vs_video_block-field_video_url'] = array(
    'bundle' => 'vs_video_block',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'plain_text',
          ),
        ),
        'type' => 'text_default',
        'weight' => 3,
      ),
    ),
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_video_url',
    'label' => 'Video URL',
    'required' => 1,
    'settings' => array(
      'context' => 'title',
      'context_default' => 'sdl_editor_representation',
      'dnd_enabled' => 0,
      'entity_translation_sync' => FALSE,
      'mee_enabled' => 0,
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'size' => 60,
      ),
      'type' => 'text_textfield',
      'weight' => 3,
    ),
  );

  // Exported field_instance: 'paragraphs_item-vs_accordion_item-field_answer'.
  $field_instances['paragraphs_item-vs_accordion_item-field_answer'] = array(
    'bundle' => 'vs_accordion_item',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'plain_text',
          ),
        ),
        'type' => 'text_default',
        'weight' => 1,
      ),
      'paragraphs_editor_preview' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'paragraphs_item',
    'field_name' => 'field_answer',
    'label' => 'Content',
    'required' => 0,
    'settings' => array(
      'context' => 'title',
      'context_default' => 'virgin_full',
      'dnd_enabled' => 0,
      'entity_translation_sync' => FALSE,
      'mee_enabled' => 0,
      'text_processing' => 1,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'rows' => 5,
      ),
      'type' => 'text_textarea',
      'weight' => 3,
    ),
  );

  // Exported field_instance: 'paragraphs_item-vs_accordion_item-title_field'.
  $field_instances['paragraphs_item-vs_accordion_item-title_field'] = array(
    'bundle' => 'vs_accordion_item',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'plain_text',
          ),
        ),
        'type' => 'text_default',
        'weight' => 0,
      ),
      'paragraphs_editor_preview' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'paragraphs_item',
    'field_name' => 'title_field',
    'label' => 'Title',
    'required' => 0,
    'settings' => array(
      'context' => 'title',
      'context_default' => 'sdl_editor_representation',
      'dnd_enabled' => 0,
      'entity_translation_sync' => FALSE,
      'mee_enabled' => 0,
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'size' => 60,
      ),
      'type' => 'text_textfield',
      'weight' => 2,
    ),
  );

  // Exported field_instance:
  // 'paragraphs_item-vs_cta_block-field_cta_card_image'.
  $field_instances['paragraphs_item-vs_cta_block-field_cta_card_image'] = array(
    'bundle' => 'vs_cta_block',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'atom_reference',
        'settings' => array(
          'link' => 0,
          'override' => 0,
          'quickedit' => array(
            'editor' => 'form',
          ),
        ),
        'type' => 'title',
        'weight' => 6,
      ),
      'paragraphs_editor_preview' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'paragraphs_item',
    'field_name' => 'field_cta_card_image',
    'label' => 'Card Image',
    'required' => 1,
    'settings' => array(
      'allow_override' => 0,
      'entity_translation_sync' => FALSE,
      'referencable_types' => array(
        'image' => 'image',
      ),
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'atom_reference',
      'settings' => array(
        'context' => 'sdl_editor_representation',
      ),
      'type' => 'atom_reference_textfield',
      'weight' => 2,
    ),
  );

  // Exported field_instance: 'paragraphs_item-vs_cta_block-field_cta_links'.
  $field_instances['paragraphs_item-vs_cta_block-field_cta_links'] = array(
    'bundle' => 'vs_cta_block',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'link',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'form',
          ),
        ),
        'type' => 'link_default',
        'weight' => 4,
      ),
      'paragraphs_editor_preview' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'paragraphs_item',
    'field_name' => 'field_cta_links',
    'label' => 'Call to action buttons',
    'required' => 1,
    'settings' => array(
      'absolute_url' => 1,
      'attributes' => array(
        'class' => '',
        'configurable_class' => 0,
        'configurable_title' => 0,
        'rel' => '',
        'target' => 'user',
        'title' => '',
      ),
      'display' => array(
        'url_cutoff' => 80,
      ),
      'enable_tokens' => 1,
      'entity_translation_sync' => FALSE,
      'rel_remove' => 'default',
      'title' => 'required',
      'title_label_use_field_label' => 0,
      'title_maxlength' => 128,
      'title_value' => '',
      'url' => 'optional',
      'user_register_form' => FALSE,
      'validate_url' => 1,
    ),
    'widget' => array(
      'active' => 0,
      'module' => 'link',
      'settings' => array(),
      'type' => 'link_field',
      'weight' => 5,
    ),
  );

  // Exported field_instance: 'paragraphs_item-vs_cta_block-field_cta_type'.
  $field_instances['paragraphs_item-vs_cta_block-field_cta_type'] = array(
    'bundle' => 'vs_cta_block',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'list',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'form',
          ),
        ),
        'type' => 'list_default',
        'weight' => 5,
      ),
      'paragraphs_editor_preview' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'paragraphs_item',
    'field_name' => 'field_cta_type',
    'label' => 'CTA Type',
    'required' => 0,
    'settings' => array(
      'entity_translation_sync' => FALSE,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'options',
      'settings' => array(
        'apply_chosen' => '',
      ),
      'type' => 'options_select',
      'weight' => 1,
    ),
  );

  // Exported field_instance:
  // 'paragraphs_item-vs_cta_block-field_description_short'.
  $field_instances['paragraphs_item-vs_cta_block-field_description_short'] = array(
    'bundle' => 'vs_cta_block',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'plain_text',
          ),
        ),
        'type' => 'text_default',
        'weight' => 3,
      ),
      'paragraphs_editor_preview' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'paragraphs_item',
    'field_name' => 'field_description_short',
    'label' => 'CTA Description',
    'required' => 0,
    'settings' => array(
      'context' => 'title',
      'context_default' => 'sdl_editor_representation',
      'display_summary' => 0,
      'dnd_enabled' => 0,
      'entity_translation_sync' => FALSE,
      'mee_enabled' => 0,
      'text_processing' => 1,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'rows' => 20,
        'summary_rows' => 5,
      ),
      'type' => 'text_textarea_with_summary',
      'weight' => 4,
    ),
  );

  // Exported field_instance: 'paragraphs_item-vs_cta_block-field_image_effect'.
  $field_instances['paragraphs_item-vs_cta_block-field_image_effect'] = array(
    'bundle' => 'vs_cta_block',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'list',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'form',
          ),
        ),
        'type' => 'list_default',
        'weight' => 2,
      ),
      'paragraphs_editor_preview' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'paragraphs_item',
    'field_name' => 'field_image_effect',
    'label' => 'Image Effect',
    'required' => 1,
    'settings' => array(
      'entity_translation_sync' => FALSE,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'options',
      'settings' => array(
        'apply_chosen' => '',
      ),
      'type' => 'options_select',
      'weight' => 3,
    ),
  );

  // Exported field_instance: 'paragraphs_item-vs_cta_block-title_field'.
  $field_instances['paragraphs_item-vs_cta_block-title_field'] = array(
    'bundle' => 'vs_cta_block',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'plain_text',
          ),
        ),
        'type' => 'text_default',
        'weight' => 0,
      ),
      'paragraphs_editor_preview' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'paragraphs_item',
    'field_name' => 'title_field',
    'label' => 'Card Title',
    'required' => 1,
    'settings' => array(
      'context' => 'title',
      'context_default' => 'sdl_editor_representation',
      'dnd_enabled' => 0,
      'entity_translation_sync' => FALSE,
      'mee_enabled' => 0,
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'size' => 60,
      ),
      'type' => 'text_textfield',
      'weight' => 0,
    ),
  );

  // Exported field_instance:
  // 'paragraphs_item-vs_custom_banner-field_brand_color'.
  $field_instances['paragraphs_item-vs_custom_banner-field_brand_color'] = array(
    'bundle' => 'vs_custom_banner',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'list',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'form',
          ),
        ),
        'type' => 'list_default',
        'weight' => 5,
      ),
      'paragraphs_editor_preview' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'paragraphs_item',
    'field_name' => 'field_brand_color',
    'label' => 'Brand Color',
    'required' => 1,
    'settings' => array(
      'entity_translation_sync' => FALSE,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'options',
      'settings' => array(
        'apply_chosen' => '',
      ),
      'type' => 'options_select',
      'weight' => 2,
    ),
  );

  // Exported field_instance: 'paragraphs_item-vs_custom_banner-field_caption'.
  $field_instances['paragraphs_item-vs_custom_banner-field_caption'] = array(
    'bundle' => 'vs_custom_banner',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'plain_text',
          ),
        ),
        'type' => 'text_default',
        'weight' => 3,
      ),
      'paragraphs_editor_preview' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'paragraphs_item',
    'field_name' => 'field_caption',
    'label' => 'Hero Image Caption',
    'required' => 0,
    'settings' => array(
      'context' => 'title',
      'context_default' => 'sdl_editor_representation',
      'dnd_enabled' => 0,
      'entity_translation_sync' => FALSE,
      'mee_enabled' => 0,
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'size' => 60,
      ),
      'type' => 'text_textfield',
      'weight' => 4,
    ),
  );

  // Exported field_instance:
  // 'paragraphs_item-vs_custom_banner-field_cta_links'.
  $field_instances['paragraphs_item-vs_custom_banner-field_cta_links'] = array(
    'bundle' => 'vs_custom_banner',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'link',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'form',
          ),
        ),
        'type' => 'link_default',
        'weight' => 4,
      ),
      'paragraphs_editor_preview' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'paragraphs_item',
    'field_name' => 'field_cta_links',
    'label' => 'Call to action buttons',
    'required' => 0,
    'settings' => array(
      'absolute_url' => 1,
      'attributes' => array(
        'class' => '',
        'configurable_class' => 0,
        'configurable_title' => 0,
        'rel' => '',
        'target' => 'user',
        'title' => '',
      ),
      'display' => array(
        'url_cutoff' => 80,
      ),
      'enable_tokens' => 1,
      'entity_translation_sync' => FALSE,
      'rel_remove' => 'default',
      'title' => 'required',
      'title_label_use_field_label' => 0,
      'title_maxlength' => 128,
      'title_value' => '',
      'url' => 'optional',
      'user_register_form' => FALSE,
      'validate_url' => 1,
    ),
    'widget' => array(
      'active' => 0,
      'module' => 'link',
      'settings' => array(),
      'type' => 'link_field',
      'weight' => 5,
    ),
  );

  // Exported field_instance:
  // 'paragraphs_item-vs_custom_banner-field_description_short'.
  $field_instances['paragraphs_item-vs_custom_banner-field_description_short'] = array(
    'bundle' => 'vs_custom_banner',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'plain_text',
          ),
        ),
        'type' => 'text_default',
        'weight' => 1,
      ),
      'paragraphs_editor_preview' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'paragraphs_item',
    'field_name' => 'field_description_short',
    'label' => 'Short Description',
    'required' => 1,
    'settings' => array(
      'context' => 'title',
      'context_default' => 'sdl_editor_representation',
      'display_summary' => 0,
      'dnd_enabled' => 0,
      'entity_translation_sync' => FALSE,
      'mee_enabled' => 0,
      'text_processing' => 1,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'rows' => 20,
        'summary_rows' => 5,
      ),
      'type' => 'text_textarea_with_summary',
      'weight' => 1,
    ),
  );

  // Exported field_instance:
  // 'paragraphs_item-vs_custom_banner-field_hero_image'.
  $field_instances['paragraphs_item-vs_custom_banner-field_hero_image'] = array(
    'bundle' => 'vs_custom_banner',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'atom_reference',
        'settings' => array(
          'link' => 0,
          'override' => 0,
          'quickedit' => array(
            'editor' => 'form',
          ),
        ),
        'type' => 'title',
        'weight' => 6,
      ),
      'paragraphs_editor_preview' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'paragraphs_item',
    'field_name' => 'field_hero_image',
    'label' => 'Hero Image',
    'required' => 1,
    'settings' => array(
      'allow_override' => 0,
      'entity_translation_sync' => FALSE,
      'referencable_types' => array(
        'image' => 'image',
      ),
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'atom_reference',
      'settings' => array(
        'context' => 'sdl_editor_representation',
      ),
      'type' => 'atom_reference_textfield',
      'weight' => 3,
    ),
  );

  // Exported field_instance: 'paragraphs_item-vs_custom_banner-title_field'.
  $field_instances['paragraphs_item-vs_custom_banner-title_field'] = array(
    'bundle' => 'vs_custom_banner',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'plain_text',
          ),
        ),
        'type' => 'text_default',
        'weight' => 0,
      ),
      'paragraphs_editor_preview' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'paragraphs_item',
    'field_name' => 'title_field',
    'label' => 'Card Title',
    'required' => 1,
    'settings' => array(
      'context' => 'title',
      'context_default' => 'sdl_editor_representation',
      'dnd_enabled' => 0,
      'entity_translation_sync' => FALSE,
      'mee_enabled' => 0,
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'size' => 60,
      ),
      'type' => 'text_textfield',
      'weight' => 0,
    ),
  );

  // Exported field_instance:
  // 'paragraphs_item-vs_event_festival_banner-field_festival_event_reference'.
  $field_instances['paragraphs_item-vs_event_festival_banner-field_festival_event_reference'] = array(
    'bundle' => 'vs_event_festival_banner',
    'default_value' => NULL,
    'default_value_function' => '',
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'entityreference',
        'settings' => array(
          'link' => FALSE,
          'quickedit' => array(
            'editor' => 'form',
          ),
        ),
        'type' => 'entityreference_label',
        'weight' => 0,
      ),
      'paragraphs_editor_preview' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'paragraphs_item',
    'field_name' => 'field_festival_event_reference',
    'label' => 'Choose a Festival or Event to promote',
    'required' => 0,
    'settings' => array(
      'behaviors' => array(
        'prepopulate' => array(
          'status' => 0,
        ),
      ),
      'entity_translation_sync' => FALSE,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'options',
      'settings' => array(
        'apply_chosen' => '',
        'match_operator' => 'CONTAINS',
        'path' => '',
        'size' => 60,
      ),
      'type' => 'options_select',
      'weight' => 1,
    ),
  );

  // Exported field_instance:
  // 'paragraphs_item-vs_package_card-field_description'.
  $field_instances['paragraphs_item-vs_package_card-field_description'] = array(
    'bundle' => 'vs_package_card',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'plain_text',
          ),
        ),
        'type' => 'text_default',
        'weight' => 2,
      ),
      'paragraphs_editor_preview' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'paragraphs_item',
    'field_name' => 'field_description',
    'label' => 'Content',
    'required' => 0,
    'settings' => array(
      'context' => 'title',
      'context_default' => 'sdl_editor_representation',
      'display_summary' => 0,
      'dnd_enabled' => 0,
      'entity_translation_sync' => FALSE,
      'mee_enabled' => 0,
      'text_processing' => 1,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'rows' => 20,
        'summary_rows' => 5,
      ),
      'type' => 'text_textarea_with_summary',
      'weight' => 5,
    ),
  );

  // Exported field_instance:
  // 'paragraphs_item-vs_package_card-field_package_reference'.
  $field_instances['paragraphs_item-vs_package_card-field_package_reference'] = array(
    'bundle' => 'vs_package_card',
    'default_value' => NULL,
    'default_value_function' => '',
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'entityreference',
        'settings' => array(
          'link' => FALSE,
          'quickedit' => array(
            'editor' => 'form',
          ),
        ),
        'type' => 'entityreference_label',
        'weight' => 0,
      ),
      'paragraphs_editor_preview' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'paragraphs_item',
    'field_name' => 'field_package_reference',
    'label' => 'Choose a Package',
    'required' => 1,
    'settings' => array(
      'behaviors' => array(
        'prepopulate' => array(
          'status' => 0,
        ),
      ),
      'entity_translation_sync' => FALSE,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'options',
      'settings' => array(
        'apply_chosen' => '',
      ),
      'type' => 'options_select',
      'weight' => 1,
    ),
  );

  // Exported field_instance: 'paragraphs_item-vs_package_card-title_field'.
  $field_instances['paragraphs_item-vs_package_card-title_field'] = array(
    'bundle' => 'vs_package_card',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'plain_text',
          ),
        ),
        'type' => 'text_default',
        'weight' => 1,
      ),
      'paragraphs_editor_preview' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'paragraphs_item',
    'field_name' => 'title_field',
    'label' => 'Title',
    'required' => 0,
    'settings' => array(
      'context' => 'title',
      'context_default' => 'sdl_editor_representation',
      'dnd_enabled' => 0,
      'entity_translation_sync' => FALSE,
      'mee_enabled' => 0,
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'size' => 60,
      ),
      'type' => 'text_textfield',
      'weight' => 3,
    ),
  );

  // Exported field_instance: 'paragraphs_item-vs_slide-field_brand_color'.
  $field_instances['paragraphs_item-vs_slide-field_brand_color'] = array(
    'bundle' => 'vs_slide',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'list',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'form',
          ),
        ),
        'type' => 'list_default',
        'weight' => 3,
      ),
      'paragraphs_editor_preview' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'paragraphs_item',
    'field_name' => 'field_brand_color',
    'label' => 'Brand Color',
    'required' => 0,
    'settings' => array(
      'entity_translation_sync' => FALSE,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'options',
      'settings' => array(
        'apply_chosen' => '',
      ),
      'type' => 'options_select',
      'weight' => 3,
    ),
  );

  // Exported field_instance: 'paragraphs_item-vs_slide-field_description'.
  $field_instances['paragraphs_item-vs_slide-field_description'] = array(
    'bundle' => 'vs_slide',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'plain_text',
          ),
        ),
        'type' => 'text_default',
        'weight' => 1,
      ),
      'paragraphs_editor_preview' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'paragraphs_item',
    'field_name' => 'field_description',
    'label' => 'Photo Description',
    'required' => 1,
    'settings' => array(
      'context' => 'title',
      'context_default' => 'sdl_editor_representation',
      'display_summary' => 0,
      'dnd_enabled' => 0,
      'entity_translation_sync' => FALSE,
      'mee_enabled' => 0,
      'text_processing' => 1,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'rows' => 20,
        'summary_rows' => 5,
      ),
      'type' => 'text_textarea_with_summary',
      'weight' => 1,
    ),
  );

  // Exported field_instance: 'paragraphs_item-vs_slide-field_slide_image'.
  $field_instances['paragraphs_item-vs_slide-field_slide_image'] = array(
    'bundle' => 'vs_slide',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'atom_reference',
        'settings' => array(
          'link' => 0,
          'override' => 0,
          'quickedit' => array(
            'editor' => 'form',
          ),
        ),
        'type' => 'title',
        'weight' => 2,
      ),
      'paragraphs_editor_preview' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'paragraphs_item',
    'field_name' => 'field_slide_image',
    'label' => 'Photo',
    'required' => 1,
    'settings' => array(
      'allow_override' => 0,
      'entity_translation_sync' => FALSE,
      'referencable_types' => array(
        'image' => 'image',
      ),
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'atom_reference',
      'settings' => array(
        'context' => 'sdl_editor_representation',
      ),
      'type' => 'atom_reference_textfield',
      'weight' => 0,
    ),
  );

  // Exported field_instance: 'paragraphs_item-vs_teaser-field_alignment'.
  $field_instances['paragraphs_item-vs_teaser-field_alignment'] = array(
    'bundle' => 'vs_teaser',
    'default_value' => array(
      0 => array(
        'value' => 'left',
      ),
    ),
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'list',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'form',
          ),
        ),
        'type' => 'list_default',
        'weight' => 5,
      ),
      'paragraphs_editor_preview' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'paragraphs_item',
    'field_name' => 'field_alignment',
    'label' => 'Alignment',
    'required' => 1,
    'settings' => array(
      'entity_translation_sync' => FALSE,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'options',
      'settings' => array(
        'apply_chosen' => '',
      ),
      'type' => 'options_select',
      'weight' => 3,
    ),
  );

  // Exported field_instance: 'paragraphs_item-vs_teaser-field_body'.
  $field_instances['paragraphs_item-vs_teaser-field_body'] = array(
    'bundle' => 'vs_teaser',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'plain_text',
          ),
        ),
        'type' => 'text_default',
        'weight' => 1,
      ),
      'paragraphs_editor_preview' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'paragraphs_item',
    'field_name' => 'field_body',
    'label' => 'Content',
    'required' => 1,
    'settings' => array(
      'context' => 'title',
      'context_default' => 'virgin_full',
      'display_summary' => 0,
      'dnd_enabled' => 0,
      'entity_translation_sync' => FALSE,
      'mee_enabled' => 0,
      'text_processing' => 1,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'rows' => 20,
        'summary_rows' => 5,
      ),
      'type' => 'text_textarea_with_summary',
      'weight' => 4,
    ),
  );

  // Exported field_instance: 'paragraphs_item-vs_teaser-field_card_images'.
  $field_instances['paragraphs_item-vs_teaser-field_card_images'] = array(
    'bundle' => 'vs_teaser',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'atom_reference',
        'settings' => array(
          'link' => 0,
          'override' => 0,
          'quickedit' => array(
            'editor' => 'form',
          ),
        ),
        'type' => 'title',
        'weight' => 8,
      ),
      'paragraphs_editor_preview' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'paragraphs_item',
    'field_name' => 'field_card_images',
    'label' => 'Images',
    'required' => 1,
    'settings' => array(
      'allow_override' => 0,
      'entity_translation_sync' => FALSE,
      'referencable_types' => array(
        'image' => 'image',
      ),
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'atom_reference',
      'settings' => array(
        'context' => 'sdl_editor_representation',
      ),
      'type' => 'atom_reference_textfield',
      'weight' => 5,
    ),
  );

  // Exported field_instance: 'paragraphs_item-vs_teaser-field_cta_links'.
  $field_instances['paragraphs_item-vs_teaser-field_cta_links'] = array(
    'bundle' => 'vs_teaser',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'link',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'form',
          ),
        ),
        'type' => 'link_default',
        'weight' => 6,
      ),
      'paragraphs_editor_preview' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'paragraphs_item',
    'field_name' => 'field_cta_links',
    'label' => 'Call to action button',
    'required' => 0,
    'settings' => array(
      'absolute_url' => 1,
      'attributes' => array(
        'class' => '',
        'configurable_class' => 0,
        'configurable_title' => 0,
        'rel' => '',
        'target' => 'user',
        'title' => '',
      ),
      'display' => array(
        'url_cutoff' => 80,
      ),
      'enable_tokens' => 1,
      'entity_translation_sync' => FALSE,
      'rel_remove' => 'default',
      'title' => 'required',
      'title_label_use_field_label' => 0,
      'title_maxlength' => 128,
      'title_value' => '',
      'url' => 'optional',
      'user_register_form' => FALSE,
      'validate_url' => 1,
    ),
    'widget' => array(
      'active' => 0,
      'module' => 'link',
      'settings' => array(),
      'type' => 'link_field',
      'weight' => 6,
    ),
  );

  // Exported field_instance: 'paragraphs_item-vs_teaser-field_outline_title'.
  $field_instances['paragraphs_item-vs_teaser-field_outline_title'] = array(
    'bundle' => 'vs_teaser',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'plain_text',
          ),
        ),
        'type' => 'text_default',
        'weight' => 4,
      ),
      'paragraphs_editor_preview' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'paragraphs_item',
    'field_name' => 'field_outline_title',
    'label' => 'Outline Title',
    'required' => 0,
    'settings' => array(
      'context' => 'title',
      'context_default' => 'sdl_editor_representation',
      'dnd_enabled' => 0,
      'entity_translation_sync' => FALSE,
      'mee_enabled' => 0,
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'size' => 60,
      ),
      'type' => 'text_textfield',
      'weight' => 1,
    ),
  );

  // Exported field_instance: 'paragraphs_item-vs_teaser-field_teaser_layout'.
  $field_instances['paragraphs_item-vs_teaser-field_teaser_layout'] = array(
    'bundle' => 'vs_teaser',
    'default_value' => array(
      0 => array(
        'value' => 'landscape',
      ),
    ),
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'list',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'form',
          ),
        ),
        'type' => 'list_default',
        'weight' => 7,
      ),
      'paragraphs_editor_preview' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'paragraphs_item',
    'field_name' => 'field_teaser_layout',
    'label' => 'Layout arrangement',
    'required' => 1,
    'settings' => array(
      'entity_translation_sync' => FALSE,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'options',
      'settings' => array(
        'apply_chosen' => '',
      ),
      'type' => 'options_select',
      'weight' => 2,
    ),
  );

  // Exported field_instance: 'paragraphs_item-vs_teaser-title_field'.
  $field_instances['paragraphs_item-vs_teaser-title_field'] = array(
    'bundle' => 'vs_teaser',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'plain_text',
          ),
        ),
        'type' => 'text_default',
        'weight' => 0,
      ),
      'paragraphs_editor_preview' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'paragraphs_item',
    'field_name' => 'title_field',
    'label' => 'Title',
    'required' => 1,
    'settings' => array(
      'context' => 'title',
      'context_default' => 'sdl_editor_representation',
      'dnd_enabled' => 0,
      'entity_translation_sync' => FALSE,
      'mee_enabled' => 0,
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'size' => 60,
      ),
      'type' => 'text_textfield',
      'weight' => 0,
    ),
  );

  // Exported field_instance:
  // 'paragraphs_item-vs_ticket_card-field_ticket_reference'.
  $field_instances['paragraphs_item-vs_ticket_card-field_ticket_reference'] = array(
    'bundle' => 'vs_ticket_card',
    'default_value' => NULL,
    'default_value_function' => '',
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'entityreference',
        'settings' => array(
          'link' => FALSE,
          'quickedit' => array(
            'editor' => 'form',
          ),
        ),
        'type' => 'entityreference_label',
        'weight' => 0,
      ),
      'paragraphs_editor_preview' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'paragraphs_item',
    'field_name' => 'field_ticket_reference',
    'label' => 'Choose a Ticket',
    'required' => 0,
    'settings' => array(
      'behaviors' => array(
        'prepopulate' => array(
          'status' => 0,
        ),
      ),
      'entity_translation_sync' => FALSE,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'options',
      'settings' => array(
        'apply_chosen' => '',
        'match_operator' => 'CONTAINS',
        'path' => '',
        'size' => 60,
      ),
      'type' => 'options_select',
      'weight' => 1,
    ),
  );

  // Exported field_instance:
  // 'paragraphs_item-vs_untimed_event_card-field_cta_link'.
  $field_instances['paragraphs_item-vs_untimed_event_card-field_cta_link'] = array(
    'bundle' => 'vs_untimed_event_card',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'link',
        'settings' => array(),
        'type' => 'link_default',
        'weight' => 3,
      ),
      'paragraphs_editor_preview' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'paragraphs_item',
    'field_name' => 'field_cta_link',
    'label' => 'Call to action button',
    'required' => 0,
    'settings' => array(
      'absolute_url' => 1,
      'attributes' => array(
        'class' => '',
        'configurable_class' => 0,
        'configurable_title' => 0,
        'rel' => '',
        'target' => 'user',
        'title' => '',
      ),
      'display' => array(
        'url_cutoff' => 80,
      ),
      'enable_tokens' => 1,
      'entity_translation_sync' => FALSE,
      'rel_remove' => 'default',
      'title' => 'required',
      'title_label_use_field_label' => 0,
      'title_maxlength' => 128,
      'title_value' => '',
      'url' => 'optional',
      'user_register_form' => FALSE,
      'validate_url' => 1,
    ),
    'widget' => array(
      'active' => 0,
      'module' => 'link',
      'settings' => array(),
      'type' => 'link_field',
      'weight' => 6,
    ),
  );

  // Exported field_instance:
  // 'paragraphs_item-vs_untimed_event_card-field_price'.
  $field_instances['paragraphs_item-vs_untimed_event_card-field_price'] = array(
    'bundle' => 'vs_untimed_event_card',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'money',
        'settings' => array(
          'quickedit' => array(
            'editor' => 'form',
          ),
        ),
        'type' => 'money_default',
        'weight' => 1,
      ),
      'paragraphs_editor_preview' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'paragraphs_item',
    'field_name' => 'field_price',
    'label' => 'Price',
    'required' => 0,
    'settings' => array(
      'entity_translation_sync' => FALSE,
      'max' => '',
      'min' => '',
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'money',
      'settings' => array(
        'currencies' => array(
          'allowed_currencies' => array(
            'ADF' => 0,
            'ADP' => 0,
            'AED' => 0,
            'AFA' => 0,
            'AFN' => 0,
            'ALK' => 0,
            'ALL' => 0,
            'AMD' => 0,
            'ANG' => 0,
            'AOA' => 0,
            'AOK' => 0,
            'AON' => 0,
            'AOR' => 0,
            'ARA' => 0,
            'ARL' => 0,
            'ARM' => 0,
            'ARP' => 0,
            'ARS' => 0,
            'ATS' => 0,
            'AUD' => 0,
            'AWG' => 0,
            'AZM' => 0,
            'AZN' => 0,
            'BAM' => 0,
            'BBD' => 0,
            'BDT' => 0,
            'BEC' => 0,
            'BEF' => 0,
            'BEL' => 0,
            'BGL' => 0,
            'BGN' => 0,
            'BHD' => 0,
            'BIF' => 0,
            'BMD' => 0,
            'BND' => 0,
            'BOB' => 0,
            'BOP' => 0,
            'BOV' => 0,
            'BRB' => 0,
            'BRC' => 0,
            'BRE' => 0,
            'BRL' => 0,
            'BRN' => 0,
            'BRR' => 0,
            'BRZ' => 0,
            'BSD' => 0,
            'BTN' => 0,
            'BWP' => 0,
            'BYB' => 0,
            'BYR' => 0,
            'BZD' => 0,
            'CAD' => 0,
            'CDF' => 0,
            'CHE' => 0,
            'CHF' => 0,
            'CHW' => 0,
            'CLE' => 0,
            'CLF' => 0,
            'CLP' => 0,
            'CNY' => 0,
            'COP' => 0,
            'COU' => 0,
            'CRC' => 0,
            'CSD' => 0,
            'CSK' => 0,
            'CUC' => 0,
            'CUP' => 0,
            'CVE' => 0,
            'CYP' => 0,
            'CZK' => 0,
            'DDM' => 0,
            'DEM' => 0,
            'DJF' => 0,
            'DKK' => 0,
            'DOP' => 0,
            'DZD' => 0,
            'ECS' => 0,
            'ECV' => 0,
            'EEK' => 0,
            'EGP' => 0,
            'ERN' => 0,
            'ESA' => 0,
            'ESB' => 0,
            'ESP' => 0,
            'ETB' => 0,
            'EUR' => 0,
            'FIM' => 0,
            'FJD' => 0,
            'FKP' => 0,
            'FRF' => 0,
            'GBP' => 'GBP',
            'GEL' => 0,
            'GHC' => 0,
            'GHS' => 0,
            'GIP' => 0,
            'GMD' => 0,
            'GNE' => 0,
            'GNF' => 0,
            'GNS' => 0,
            'GQE' => 0,
            'GRD' => 0,
            'GTQ' => 0,
            'GWP' => 0,
            'GYD' => 0,
            'HKD' => 0,
            'HNL' => 0,
            'HRD' => 0,
            'HRK' => 0,
            'HTG' => 0,
            'HUF' => 0,
            'IDR' => 0,
            'IEP' => 0,
            'ILP' => 0,
            'ILR' => 0,
            'ILS' => 0,
            'INR' => 0,
            'IQD' => 0,
            'IRR' => 0,
            'ISJ' => 0,
            'ISK' => 0,
            'ITL' => 0,
            'JMD' => 0,
            'JOD' => 0,
            'JPY' => 0,
            'KES' => 0,
            'KGS' => 0,
            'KHR' => 0,
            'KMF' => 0,
            'KPW' => 0,
            'KRH' => 0,
            'KRW' => 0,
            'KWD' => 0,
            'KYD' => 0,
            'KZT' => 0,
            'LAK' => 0,
            'LBP' => 0,
            'LKR' => 0,
            'LRD' => 0,
            'LSL' => 0,
            'LTL' => 0,
            'LTT' => 0,
            'LUF' => 0,
            'LVL' => 0,
            'LVR' => 0,
            'LYD' => 0,
            'MAD' => 0,
            'MAF' => 0,
            'MCF' => 0,
            'MDC' => 0,
            'MDL' => 0,
            'MGA' => 0,
            'MGF' => 0,
            'MKD' => 0,
            'MKN' => 0,
            'MLF' => 0,
            'MMK' => 0,
            'MNT' => 0,
            'MOP' => 0,
            'MRO' => 0,
            'MTL' => 0,
            'MTP' => 0,
            'MUR' => 0,
            'MVQ' => 0,
            'MVR' => 0,
            'MWK' => 0,
            'MXN' => 0,
            'MXP' => 0,
            'MXV' => 0,
            'MYR' => 0,
            'MZE' => 0,
            'MZM' => 0,
            'MZN' => 0,
            'NAD' => 0,
            'NFD' => 0,
            'NGN' => 0,
            'NIO' => 0,
            'NLG' => 0,
            'NOK' => 0,
            'NPR' => 0,
            'NZD' => 0,
            'OMR' => 0,
            'PAB' => 0,
            'PEH' => 0,
            'PEI' => 0,
            'PEN' => 0,
            'PGK' => 0,
            'PHP' => 0,
            'PKR' => 0,
            'PLN' => 0,
            'PLZ' => 0,
            'PTE' => 0,
            'PYG' => 0,
            'QAR' => 0,
            'RHD' => 0,
            'ROL' => 0,
            'RON' => 0,
            'RSD' => 0,
            'RUB' => 0,
            'RUR' => 0,
            'RWF' => 0,
            'SAR' => 0,
            'SBD' => 0,
            'SCR' => 0,
            'SDD' => 0,
            'SDG' => 0,
            'SDP' => 0,
            'SEK' => 0,
            'SGD' => 0,
            'SHP' => 0,
            'SIT' => 0,
            'SKK' => 0,
            'SLL' => 0,
            'SML' => 0,
            'SOS' => 0,
            'SRD' => 0,
            'SRG' => 0,
            'SSP' => 0,
            'STD' => 0,
            'SUR' => 0,
            'SVC' => 0,
            'SYP' => 0,
            'SZL' => 0,
            'THB' => 0,
            'TJR' => 0,
            'TJS' => 0,
            'TMM' => 0,
            'TMT' => 0,
            'TND' => 0,
            'TOP' => 0,
            'TPE' => 0,
            'TRL' => 0,
            'TRY' => 0,
            'TTD' => 0,
            'TWD' => 0,
            'TZS' => 0,
            'UAH' => 0,
            'UAK' => 0,
            'UGS' => 0,
            'UGX' => 0,
            'USD' => 'USD',
            'USN' => 0,
            'USS' => 0,
            'UYI' => 0,
            'UYN' => 0,
            'UYU' => 0,
            'UZS' => 0,
            'VAL' => 0,
            'VEB' => 0,
            'VEF' => 0,
            'VND' => 0,
            'VUV' => 0,
            'WST' => 0,
            'XAF' => 0,
            'XAG' => 0,
            'XAU' => 0,
            'XBA' => 0,
            'XBB' => 0,
            'XBC' => 0,
            'XBD' => 0,
            'XCD' => 0,
            'XDR' => 0,
            'XEU' => 0,
            'XFO' => 0,
            'XFU' => 0,
            'XOF' => 0,
            'XPD' => 0,
            'XPF' => 0,
            'XPT' => 0,
            'XTS' => 0,
            'XXX' => 0,
            'YDD' => 0,
            'YER' => 0,
            'YUD' => 0,
            'YUG' => 0,
            'YUM' => 0,
            'YUN' => 0,
            'YUO' => 0,
            'YUR' => 0,
            'ZAL' => 0,
            'ZAR' => 0,
            'ZMK' => 0,
            'ZMW' => 0,
            'ZRN' => 0,
            'ZRZ' => 0,
            'ZWD' => 0,
            'ZWL' => 0,
            'ZWN' => 0,
            'ZWR' => 0,
          ),
        ),
        'currency_display_mode' => 'a|s',
        'currency_select_mode' => 'code',
        'decimals_display_mode' => 'field',
      ),
      'type' => 'money_widget',
      'weight' => 3,
    ),
  );

  // Exported field_instance:
  // 'paragraphs_item-vs_untimed_event_card-field_untimed_event_reference'.
  $field_instances['paragraphs_item-vs_untimed_event_card-field_untimed_event_reference'] = array(
    'bundle' => 'vs_untimed_event_card',
    'default_value' => NULL,
    'default_value_function' => '',
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'entityreference',
        'settings' => array(
          'link' => FALSE,
          'quickedit' => array(
            'editor' => 'form',
          ),
        ),
        'type' => 'entityreference_label',
        'weight' => 0,
      ),
      'paragraphs_editor_preview' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'paragraphs_item',
    'field_name' => 'field_untimed_event_reference',
    'label' => 'Choose an Untimed Event',
    'required' => 0,
    'settings' => array(
      'behaviors' => array(
        'prepopulate' => array(
          'status' => 0,
        ),
      ),
      'entity_translation_sync' => FALSE,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'options',
      'settings' => array(
        'apply_chosen' => '',
        'match_operator' => 'CONTAINS',
        'path' => '',
        'size' => 60,
      ),
      'type' => 'options_select',
      'weight' => 1,
    ),
  );

  // Translatables
  // Included for use with string extractors like potx.
  t('A field replacing fieldable panel pane title.');
  t('Accordion Items');
  t('Accordion Title');
  t('Align content');
  t('Alignment');
  t('Autoplay');
  t('Background Image');
  t('Banner Image Title');
  t('Banners');
  t('Brand Color');
  t('CTA Blocks');
  t('CTA Description');
  t('CTA Type');
  t('Call to action button');
  t('Call to action buttons');
  t('Card Image');
  t('Card Title');
  t('Carousel Style');
  t('Choose a Festival or Event to promote');
  t('Choose a Hero Event');
  t('Choose a Package');
  t('Choose a Ticket');
  t('Choose an Untimed Event');
  t('Component Heading');
  t('Constrained width');
  t('Content');
  t('Event');
  t('Festival');
  t('Gameface ID');
  t('Header Image');
  t('Heading');
  t('Hero Banner Image');
  t('Hero Image');
  t('Hero Image Caption');
  t('Hero Image Size');
  t('Hero Image Title');
  t('Hootsuite Campaign URL');
  t('Horizontal Scrolling Image');
  t('Image Effect');
  t('Images');
  t('Layout arrangement');
  t('MyLaps ID');
  t('Outline Title');
  t('Overlay Video Poster Image');
  t('Overlay Video URL');
  t('Packages');
  t('Photo');
  t('Photo Description');
  t('Price');
  t('Short Description');
  t('Show share buttons');
  t('Slide');
  t('Slider Images');
  t('Smaller height');
  t('Subheading');
  t('Thumbnails');
  t('Tickets');
  t('Title');
  t('Untimed Events');
  t('Video Poster Image');
  t('Video URL');

  return $field_instances;
}
