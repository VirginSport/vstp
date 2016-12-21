/**
 * Activates the basic content block timeline images scroll
 */
export default () => {
  let $elements = $('.vs-scroller.vs-scroller--active');
  let margin = 300;

  function updatePosition($el, margin) {
    let $scroll = $el.find('.vs-scroller--basic-content-block');
    let scroll = $scroll.get(0);
    let left = $scroll.scrollLeft();
    let scrollValue = left + margin;
    let maxScrollLeft = scroll.scrollWidth - scroll.clientWidth;

    let $next = $el.find('.vs-scroller--next');
    let $prev = $el.find('.vs-scroller--prev');

    if (scrollValue <= 0) {
      $prev.removeClass('active');
      scrollValue = 0;
    } else {
      $prev.addClass('active');
    }

    if (scrollValue >= maxScrollLeft) {
      $next.removeClass('active');
      scrollValue = maxScrollLeft;
    } else {
      $next.addClass('active');
    }

    $scroll.animate({scrollLeft: scrollValue});
  }

  $elements.each(function() {
    let $el = $(this);

    $el.find('.vs-scroller--prev').click(function() {
      updatePosition($el, margin * -1)
    });

    $el.find('.vs-scroller--next').click(function() {
      updatePosition($el, margin);
    });

    updatePosition($el, 0);
  });
};
