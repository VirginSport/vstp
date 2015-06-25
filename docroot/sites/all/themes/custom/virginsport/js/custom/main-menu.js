(function ($) {

  $(document).ready(run);

  function run () {
    var $menu = $('#main-menu');
    var $burger = $('#burger');
    var $expanded = $menu.find('.expanded');

    $burger.click(function () {
      $menu.toggleClass('open');
      $burger.toggleClass('open');
      $expanded.removeClass('open');
    });

    $expanded.each(function (index, element) {
      var $item = $(element);
      var $link = $item.find('> a');

      $link.on('click', function (e) {
        if (!$item.hasClass('open')) {
          e.preventDefault();
        }

        $item.addClass('open');
      });
    });
  }

}(jQuery));
