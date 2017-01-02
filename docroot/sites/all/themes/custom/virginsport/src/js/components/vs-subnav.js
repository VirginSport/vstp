import $ from '../lib/jquery';

export default () => {
  let $subnav = $('.vs-subnav');
  
  $subnav.each((idx, el) => {
    let $el = $(el);
    let $list = $el.find('.vs-subnav__list');
    let $active = $el.find('.vs-subnav__link--active');
    let $item = $active.parent('.vs-subnav__item');
    
    if (!$item.length) {
      return;
    }
    
    let navWidth = $el.width();
    let itemWidth = $item.outerWidth();
    let itemOffset = $item.offset();
    let visibleOffset = itemOffset.left + itemWidth;
    
    if (visibleOffset > navWidth) {
      $list.scrollLeft(visibleOffset - navWidth);
    }
  });
};
