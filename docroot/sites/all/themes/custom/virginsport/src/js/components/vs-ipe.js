import $ from '../lib/jquery';

export default () => {
  window.Drupal.behaviors.virginIPE = {
    attach: () => {
      $('.panels-ipe-portlet-wrapper').each((idx, el) => {
        let $wrapper = $(el);
        let $first = $wrapper.find('.panels-ipe-portlet-content > *').first();
        let classes = $first.attr("class");
        
        if (classes && classes.length) {
          classes = classes.split(' ');
        } else {
          return;
        }
        
        classes = classes.map((c) => {
          return 'panels-ipe--' + c;
        });
        
        $wrapper.addClass(classes.join(' '));
      });
    }
  };
  
  // Fix IPE drag-and-drop for large height components
  if ($.ui && $.ui.sortable) {
    var originalStart = $.ui.sortable.prototype._mouseStart;
    var originalStop = $.ui.sortable.prototype._mouseStop;
  
    $.widget("ui.sortable", $.extend({}, $.ui.sortable.prototype, {
      _mouseStart: function(event, overrideHandle, noActivation) {
        this.element.addClass('vs-ipe-drag-on');
        originalStart.apply(this, [event, overrideHandle, noActivation]);
      },
    
      _mouseStop: function(event, overrideHandle, noActivation) {
        this.element.removeClass('vs-ipe-drag-on');
        originalStop.apply(this, [event, overrideHandle, noActivation]);
      }
    }));
  }
};
