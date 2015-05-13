<?php
/**
 * @file
 * virgin_event.field_group.inc
 */

/**
 * Implements hook_field_group_info().
 */
function virgin_event_field_group_info() {
  $export = array();

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_about|node|event|form';
  $field_group->group_name = 'group_about';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'event';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_information';
  $field_group->data = array(
    'label' => 'About',
    'weight' => '36',
    'children' => array(
      0 => 'body',
      1 => 'field_what_to_bring',
      2 => 'field_useful_information',
    ),
    'format_type' => 'htab',
    'format_settings' => array(
      'formatter' => 'closed',
      'instance_settings' => array(
        'description' => '',
        'classes' => 'group-about field-group-htab ',
        'required_fields' => 1,
      ),
    ),
  );
  $export['group_about|node|event|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_base|node|event|form';
  $field_group->group_name = 'group_base';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'event';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_information';
  $field_group->data = array(
    'label' => 'Base',
    'weight' => '35',
    'children' => array(
      0 => 'field_event_end_date',
      1 => 'field_event_flag',
      2 => 'field_event_reg_end_date',
      3 => 'field_event_start_date',
      4 => 'field_event_status',
      5 => 'field_event_type',
      6 => 'title',
    ),
    'format_type' => 'htab',
    'format_settings' => array(
      'label' => 'Base',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => 'group-base field-group-htab ',
        'description' => '',
      ),
      'formatter' => 'open',
    ),
  );
  $export['group_base|node|event|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_charities|node|event|form';
  $field_group->group_name = 'group_charities';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'event';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_information';
  $field_group->data = array(
    'label' => 'Charities',
    'weight' => '44',
    'children' => array(
      0 => 'field_charities',
      1 => 'field_charity_link',
    ),
    'format_type' => 'htab',
    'format_settings' => array(
      'label' => 'Charities',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => 'group-charities field-group-htab ',
        'description' => '',
      ),
      'formatter' => 'open',
    ),
  );
  $export['group_charities|node|event|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_course|node|event|form';
  $field_group->group_name = 'group_course';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'event';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_information';
  $field_group->data = array(
    'label' => 'Course',
    'weight' => '37',
    'children' => array(
      0 => 'field_course_file',
      1 => 'field_course_image',
      2 => 'field_course_link',
    ),
    'format_type' => 'htab',
    'format_settings' => array(
      'label' => 'Course',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => '',
        'description' => 'In here you configure the course information, such as the course map and downloadable file.',
      ),
      'formatter' => 'open',
    ),
  );
  $export['group_course|node|event|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_faq|node|event|form';
  $field_group->group_name = 'group_faq';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'event';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_information';
  $field_group->data = array(
    'label' => 'FAQ',
    'weight' => '45',
    'children' => array(
      0 => 'field_faq',
    ),
    'format_type' => 'htab',
    'format_settings' => array(
      'label' => 'FAQ',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => 'group-faq field-group-htab ',
        'description' => 'In here you add the frequently asked questions and their answers.',
      ),
      'formatter' => 'closed',
    ),
  );
  $export['group_faq|node|event|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_features|node|event|form';
  $field_group->group_name = 'group_features';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'event';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_information';
  $field_group->data = array(
    'label' => 'Features',
    'weight' => '39',
    'children' => array(
      0 => 'field_features',
    ),
    'format_type' => 'htab',
    'format_settings' => array(
      'label' => 'Features',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => 'group-features field-group-htab ',
        'description' => 'In here you describe the kind of features and attractions an attendee can expect when participating in the event.',
      ),
      'formatter' => 'open',
    ),
  );
  $export['group_features|node|event|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_highlights|node|event|form';
  $field_group->group_name = 'group_highlights';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'event';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_information';
  $field_group->data = array(
    'label' => 'Highlights',
    'weight' => '38',
    'children' => array(
      0 => 'field_highlights',
    ),
    'format_type' => 'htab',
    'format_settings' => array(
      'label' => 'Highlights',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => 'group-highlights field-group-htab ',
        'description' => 'In here your describe different highlights of the event. These highlights are meant to be changed throughout the lifecycle of the event. For example: "Register for the event", "What to bring tomorrow" and "See the finish photos"',
      ),
      'formatter' => 'open',
    ),
  );
  $export['group_highlights|node|event|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_information|node|event|form';
  $field_group->group_name = 'group_information';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'event';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Information',
    'weight' => '6',
    'children' => array(
      0 => 'group_course',
      1 => 'group_highlights',
      2 => 'group_features',
      3 => 'group_schedule',
      4 => 'group_transportation',
      5 => 'group_sponsors',
      6 => 'group_charities',
      7 => 'group_base',
      8 => 'group_integrations',
      9 => 'group_social',
      10 => 'group_registration',
      11 => 'group_about',
      12 => 'group_faq',
    ),
    'format_type' => 'htabs',
    'format_settings' => array(
      'label' => 'Information',
      'instance_settings' => array(
        'classes' => 'group-information field-group-htabs ',
      ),
    ),
  );
  $export['group_information|node|event|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_integrations|node|event|form';
  $field_group->group_name = 'group_integrations';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'event';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_information';
  $field_group->data = array(
    'label' => 'Integrations',
    'weight' => '47',
    'children' => array(
      0 => 'field_event_id',
      1 => 'field_event_parent_id',
      2 => 'field_vmg_id',
      3 => 'field_sugar_id',
    ),
    'format_type' => 'tab',
    'format_settings' => array(
      'formatter' => 'closed',
      'instance_settings' => array(
        'description' => '',
        'classes' => 'group-integrations field-group-tab ',
        'required_fields' => 1,
      ),
    ),
  );
  $export['group_integrations|node|event|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_registration|node|event|form';
  $field_group->group_name = 'group_registration';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'event';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_information';
  $field_group->data = array(
    'label' => 'Registration',
    'weight' => '40',
    'children' => array(
      0 => 'field_ticket_types',
    ),
    'format_type' => 'htab',
    'format_settings' => array(
      'label' => 'Registration',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => 'group-registration field-group-htab ',
        'description' => 'In here you describe the different registration options available for this event.',
      ),
      'formatter' => 'closed',
    ),
  );
  $export['group_registration|node|event|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_schedule|node|event|form';
  $field_group->group_name = 'group_schedule';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'event';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_information';
  $field_group->data = array(
    'label' => 'Schedule',
    'weight' => '41',
    'children' => array(
      0 => 'field_schedule',
    ),
    'format_type' => 'htab',
    'format_settings' => array(
      'label' => 'Schedule',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => 'group-schedule field-group-htab ',
        'description' => 'In here you configure the schedule for the day of the event, such as specific milestones that take place during a specific time of the day.',
      ),
      'formatter' => 'closed',
    ),
  );
  $export['group_schedule|node|event|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_social|node|event|form';
  $field_group->group_name = 'group_social';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'event';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_information';
  $field_group->data = array(
    'label' => 'Social',
    'weight' => '46',
    'children' => array(
      0 => 'field_facebook_link',
      1 => 'field_twitter_link',
      2 => 'field_twitter_hashtag',
    ),
    'format_type' => 'htab',
    'format_settings' => array(
      'formatter' => 'closed',
      'instance_settings' => array(
        'description' => '',
        'classes' => 'group-social field-group-htab ',
        'required_fields' => 1,
      ),
    ),
  );
  $export['group_social|node|event|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_sponsors|node|event|form';
  $field_group->group_name = 'group_sponsors';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'event';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_information';
  $field_group->data = array(
    'label' => 'Sponsors',
    'weight' => '43',
    'children' => array(
      0 => 'field_sponsors',
      1 => 'field_sponsor_link',
    ),
    'format_type' => 'htab',
    'format_settings' => array(
      'label' => 'Sponsors',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => 'group-sponsors field-group-htab ',
        'description' => '',
      ),
      'formatter' => 'open',
    ),
  );
  $export['group_sponsors|node|event|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_transportation|node|event|form';
  $field_group->group_name = 'group_transportation';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'event';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_information';
  $field_group->data = array(
    'label' => 'Transportation',
    'weight' => '42',
    'children' => array(
      0 => 'field_transportation',
    ),
    'format_type' => 'htab',
    'format_settings' => array(
      'label' => 'Transportation',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => 'group-transportation field-group-htab ',
        'description' => 'In here you configure the transportation available to the event, such as the different means of transportation and parking information.',
      ),
      'formatter' => 'open',
    ),
  );
  $export['group_transportation|node|event|form'] = $field_group;

  return $export;
}
