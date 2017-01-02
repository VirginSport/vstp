import 'dragscroll';
import Drupal from '../lib/drupal';

/**
 * Activates the basic content block timeline images scroll
 */
export default () => {
  Drupal.behaviors.virginSportSlick = {
    attach: () => findScrollers()
  };
};

function updatePosition($el, $scroll, margin, move = true) {
  let scroll = $scroll.get(0);
  let left = $scroll.scrollLeft();
  let scrollValue = margin;
  let maxScrollLeft = scroll.scrollWidth - scroll.clientWidth;

  let $next = $el.find('.vs-scroller--next');
  let $prev = $el.find('.vs-scroller--prev');

  if (Math.floor(left) <= 0) {
    $prev.removeClass('active');
  } else {
    $prev.addClass('active');
  }

  if (Math.ceil(left) >= maxScrollLeft) {
    $next.removeClass('active');
  } else {
    $next.addClass('active');
  }

  if (scrollValue <= 0) {
    scrollValue = 0;
  }

  if (scrollValue >= maxScrollLeft) {
    scrollValue = maxScrollLeft;
  }

  if (move) {
    $scroll.animate({scrollLeft: scrollValue});
  }
}

function findScrollers() {
  let $elements = $('.vs-scroller.vs-scroller--active');

  $elements.each(function() {
    let $el = $(this);
    let $scroll = $el.find('.vs-scroller--basic-content-block');

    let pictureWidth = $el.find('picture').width();

    // Margin set to the container width divided by the number of calculated slides
    let slidesNum = Math.ceil(pictureWidth / $el.width());
    let margin = pictureWidth / slidesNum;

    // Create the bullets
    let $bulletsContainer = $('<div>', { class: 'vs-scroller--bullets' });
    $el.closest('.vs-basic-content-block-wrapper').after($bulletsContainer);

    for (let i = 0; i < slidesNum; i++) {
      let $bullet = $('<span>', {
        class: `vs-scroller--bullets-bullet-${i}`,
        click: function() {
          updatePosition($el, $scroll, margin * i);
        }
      });

      if (i == 0 ) {
        $bullet.addClass('active');
      }

      $bulletsContainer.append($bullet);
    }

    $scroll.scroll(function() {
      updatePosition($el, $scroll, margin, false);

      // Update active bullet
      let left = $scroll.scrollLeft();
      let bulletIndex = Math.ceil(left / margin);

      let $bullet = $bulletsContainer.find(`.vs-scroller--bullets-bullet-${bulletIndex}`);
      if ($bullet.length && !$bullet.hasClass('active')) {
        $bulletsContainer.find('span').removeClass('active');
        $bullet.addClass('active');
      }
    });

    $el.find('.vs-scroller--prev').click(function() {
      updatePosition($el, $scroll, $scroll.scrollLeft() + (margin  * -1))
    });

    $el.find('.vs-scroller--next').click(function() {
      updatePosition($el, $scroll, $scroll.scrollLeft() + margin);
    });

    updatePosition($el, $scroll, 0);
  });
}
