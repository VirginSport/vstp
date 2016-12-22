import 'slick-carousel';

export default () => {
  let $el = $('.slider');
  
  function slickify() {
    $el.slick({
      arrows: false,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            arrows: false,
            centerPadding: 0,
            autoplay: true
          }
        }, {
          breakpoint: 768,
          settings: "unslick"
        }
      ]
    });
  }

  slickify();
};
