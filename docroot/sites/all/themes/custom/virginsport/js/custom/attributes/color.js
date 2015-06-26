(function ($) {

  $(document).ready(run);

  function run () {
    var $window = $(window);
    var $account = $('#account-menu');
    var $header = $('#header');
    var $targets = $('[color-target]');
    var $triggers = $('[color-trigger]');
    var $current = undefined;

    detect();
    $window.scroll(detect);

    function detect () {
      var $nearest = nearestTrigger();

      if ($nearest && $nearest != $current) {
        var color = $nearest.attr('color-trigger');
        $targets.attr('color-target', color);

        $current = $nearest;
      }

      if (!$nearest) {
        $targets.attr('color-target', '');
      }
    }

    function nearestTrigger () {
      var offset = 1;
      var height = $window.height();
      var top = $window.scrollTop() + $header.height() + $account.height() + offset;
      var $nearest = undefined;

      $triggers.each(function (index, element) {
        var $block = $(element);
        var bheight = $block.outerHeight();
        var start = $block.offset().top;
        var finish = bheight + start;

        if (top > start) {
          if (top < finish) {
            $nearest = $block;
          }
        }
      });

      return $nearest;
    }
  }

}(jQuery));
