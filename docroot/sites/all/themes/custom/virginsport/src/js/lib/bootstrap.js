import bootstrap from 'bootstrap.native/dist/bootstrap-native';
import $ from './jquery';

export default () => {
  window.Drupal.behaviors.virginBootstrap = {
    attach: () => {
      $('[data-toggle="vs-collapse"]').not('.vs-collapse--found').each((idx, el) => {
        let $el = $(el);

        $el.addClass('vs-collapse--found');
        
        let collapse = new bootstrap.Collapse(el, { duration: $el.attr('data-duration') });
        
        // Ensure aria-expanded attribute is set on the parent collapse element
        let openOriginal = collapse._open;
        let closeOriginal = collapse._close;
        
        collapse._open = function (c) {
          $el.attr('aria-expanded', 'true');
          openOriginal.apply(collapse, [c]);
        };
        
        collapse._close = function (c) {
          $el.attr('aria-expanded', 'false');
          closeOriginal.apply(collapse, [c]);
        };
      });

      $('[data-toggle="tab"], [data-toggle="pill"]').each((idx, el) => {
        let $el = $(el);
        let duration = $el.attr('data-duration') && $el.getAttribute('data-duration') || false;

        (new bootstrap.Tab(el, { duration: duration }))
      });

      $('[data-toggle="tooltip"]').each((idx, el) => {
        let $el = $(el);
        let properties = {
          animation: $el.attr('data-animation'),
          placement: $el.attr('data-placement'),
          duration: $el.attr('data-duration'),
          delay: $el.attr('data-delay')
        };

        (new bootstrap.Tooltip(el, properties))
      });
    }
  };
};
