<?php

/**
 * @file
 * Default theme implementation to display a node of type festival with
 * view mode teaser.
 *
 * Available variables:
 * - $grapher: EntityGrapher object.
 * - $title: the (sanitized) title of the node.
 * - $content: An array of node items. Use render($content) to print them all,
 *   or print a subset such as render($content['field_example']). Use
 *   hide($content['field_example']) to temporarily suppress the printing of a
 *   given element.
 * - $user_picture: The node author's picture from user-picture.tpl.php.
 * - $date: Formatted creation date. Preprocess functions can reformat it by
 *   calling format_date() with the desired parameters on the $created variable.
 * - $name: Themed username of node author output from theme_username().
 * - $node_url: Direct URL of the current node.
 * - $display_submitted: Whether submission information should be displayed.
 * - $submitted: Submission information created from $name and $date during
 *   template_preprocess_node().
 * - $classes: String of classes that can be used to style contextually through
 *   CSS. It can be manipulated through the variable $classes_array from
 *   preprocess functions. The default values can be one or more of the
 *   following:
 *   - node: The current template type; for example, "theming hook".
 *   - node-[type]: The current node type. For example, if the node is a
 *     "Blog entry" it would result in "node-blog". Note that the machine
 *     name will often be in a short form of the human readable label.
 *   - node-teaser: Nodes in teaser form.
 *   - node-preview: Nodes in preview mode.
 *   The following are controlled through the node publishing options.
 *   - node-promoted: Nodes promoted to the front page.
 *   - node-sticky: Nodes ordered above other non-sticky nodes in teaser
 *     listings.
 *   - node-unpublished: Unpublished nodes visible only to administrators.
 * - $title_prefix (array): An array containing additional output populated by
 *   modules, intended to be displayed in front of the main title tag that
 *   appears in the template.
 * - $title_suffix (array): An array containing additional output populated by
 *   modules, intended to be displayed after the main title tag that appears in
 *   the template.
 *
 * Other variables:
 * - $node: Full node object. Contains data that may not be safe.
 * - $type: Node type; for example, story, page, blog, etc.
 * - $comment_count: Number of comments attached to the node.
 * - $uid: User ID of the node author.
 * - $created: Time the node was published formatted in Unix timestamp.
 * - $classes_array: Array of html class attribute values. It is flattened
 *   into a string within the variable $classes.
 * - $zebra: Outputs either "even" or "odd". Useful for zebra striping in
 *   teaser listings.
 * - $id: Position of the node. Increments each time it's output.
 *
 * Node status variables:
 * - $view_mode: View mode; for example, "full", "teaser".
 * - $teaser: Flag for the teaser state (shortcut for $view_mode == 'teaser').
 * - $page: Flag for the full page state.
 * - $promote: Flag for front page promotion state.
 * - $sticky: Flags for sticky post setting.
 * - $status: Flag for published status.
 * - $comment: State of comment settings for the node.
 * - $readmore: Flags true if the teaser content of the node cannot hold the
 *   main body content.
 * - $is_front: Flags true when presented in the front page.
 * - $logged_in: Flags true when the current user is a logged-in member.
 * - $is_admin: Flags true when the current user is an administrator.
 *
 * Field variables: for each field instance attached to the node a corresponding
 * variable is defined; for example, $node->body becomes $body. When needing to
 * access a field's raw values, developers/themers are strongly encouraged to
 * use these variables. Otherwise they will have to explicitly specify the
 * desired field language; for example, $node->body['en'], thus overriding any
 * language negotiation rule that was previously applied.
 *
 * @see template_preprocess()
 * @see template_preprocess_node()
 * @see template_process()
 *
 * @ingroup themeable
 */

// Sort by the view row position if inside the context of a view, otherwise
// fallback to the global zebra.
if (!empty($view) && isset($view->row_index)) {
  $zebra = ($view->row_index % 2) ? 'even' : 'odd';
}

?>

<div class="vs-card-upcoming">
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-md-7 vs-card-upcoming__image-wrapper <?php print ($zebra == 'even') ? '' : 'push-md-5'; ?>">
        <div
          class="vs-card-upcoming__image"
          <?php if (!empty($grapher->relation('field_card_image')->property('sid'))): ?>
          style="<?php print virginsport_atom_background($grapher->relation('field_card_image')->getEntity()); ?>"
          <?php endif; ?>
        >
        </div>
      </div>
      <div class="col-xs-12 col-md-5 vs-card-upcoming__content-wrapper <?php print ($zebra == 'even') ? '' : 'pull-md-7'; ?>">
        <div class="vs-card-upcoming__content vs-card-upcoming__content--gradient-<?php print $grapher->fieldGetOne('field_brand_color'); ?>">
          <?php print theme('virginsport_color', array('brand_color' => $grapher->fieldGetOne('field_brand_color'), 'brand_pattern' => $grapher->fieldGetOne('field_brand_pattern'))); ?>

          <?php if(!empty($grapher->fieldGetOne('title_field'))): ?>
            <h3 class="vs-card-upcoming__title">
              <?php print $grapher->fieldGetOne('title_field'); ?>
            </h3>
          <?php endif; ?>

          <div class="vs-card-upcoming__date">
           <?php print virginsport_date_interval($grapher->relation('field_festival_state')->fieldGetOne('field_start_date'), $grapher->relation('field_festival_state')->fieldGetOne('field_end_date'), $grapher->relation('field_festival_state')->fieldGetOne('field_timezone')); ?>
          </div>

          <?php if (!empty($grapher->fieldRendered('field_description'))): ?>
            <p class="vs-card-upcoming__text">
                <?php print strip_tags($grapher->fieldRendered('field_description')); ?>
            </p>
          <?php endif; ?>

          <a
            class="hidden-sm-down btn vs-btn vs-btn--sm vs-btn--transparent vs-card-upcoming__button"
            href="<?php print url('node/' . $grapher->property('nid')); ?>"
          >
            <?php print t('Details'); ?>
          </a>

          <a
            class="hidden-md-up btn vs-btn vs-btn--min-sm vs-btn--transparent vs-card-upcoming__button"
            href="<?php print url('node/' . $grapher->property('nid')); ?>"
          >
            <?php print t('View details'); ?>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
