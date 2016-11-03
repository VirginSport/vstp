import bootstrap from 'bootstrap.native/dist/bootstrap-native';
import $ from './jquery';

export default () => {
  window.Drupal.behaviors.virginBootstrap = {
    attach: () => {
      $('[data-toggle="vs-collapse"]').not('.vs-collapse--found').each((idx, el) => {
        let $el = $(el);

        $el.addClass('vs-collapse--found');
        (new bootstrap.Collapse(el, { duration: $el.attr('data-duration') }))
      });
    }
  };
};
