import $ from '../lib/jquery';

export default () => {
  window.Drupal.behaviors.virginIPE = {
    attach: () => {
      $('.panels-ipe-portlet-wrapper').each((idx, el) => {
        let $wrapper = $(el);
        let $first = $wrapper.find('.panels-ipe-portlet-content > *').first();
        let classes = $first.attr("class").split(' ');
        
        classes = classes.map((c) => {
          return 'panels-ipe--' + c;
        });
        
        $wrapper.addClass(classes.join(' '));
      });
    }
  };
};
