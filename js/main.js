jQuery(document).ready(function($) {
  var MQL = 1170;

  if ($(window).width() > MQL) {
    var headerHeight = $('.header').height();
    $(window).on('scroll', {
        previousTop: 0
      },
      function() {
        var currentTop = $(window).scrollTop();

        if (currentTop < this.previousTop) {

          if (currentTop > 0 && $('.header').hasClass('is-fixed')) {
            $('.header').addClass('is-visible');
          } else {
            $('.header').removeClass('is-visible is-fixed');
          }

        } else {

          $('.header').removeClass('is-visible');
          if (currentTop > headerHeight && !$('.header').hasClass('is-fixed')) $('.header').addClass('is-fixed');
        }
        this.previousTop = currentTop;
      });
  }

  $('.primary-nav-trigger').on('click', function() {
    $('.menu-icon').toggleClass('is-clicked');
    $('.header').toggleClass('menu-is-open');

    if ($('.primary-nav').hasClass('is-visible')) {
      $('.primary-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
        $('body').removeClass('overflow-hidden');
      });
    } else {
      $('.primary-nav').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
        $('body').addClass('overflow-hidden');
      });
    }
  });
});

(function () {
  var s = document.createElement('script');
  s.async = true;
  s.type = 'text/javascript';
  s.src = '//' + disqus_shortname + '.disqus.com/count.js';
  (document.getElementsByTagName('HEAD')[0] || document.getElementsByTagName('BODY')[0]).appendChild(s);
}());

;(function ($, undefined) {
  var mainHeader = $('.main-header'),
      scrollDown = $('.scroll-down'),
      scrollUp   = $('.scroll-up');

  $(document).ready(function () {
    scrollDown.scrolltoo();
    scrollUp.scrolltoo();
  });

  $(window).scroll(function () {
    var headerHeight = mainHeader.height();

    if ($(this).scrollTop() > headerHeight) {
      scrollUp.css({ 'bottom' : '15px' });
    } else {
      scrollUp.css({ 'bottom' : '-80px' });
    }
  });

  $.fn.scrolltoo = function (options) {

    var defaults = {
      elem: $(this),
      speed: 800
    },

    settings = $.extend(defaults, options);

    settings.elem.click(function (e) {
      e.preventDefault();

      var $this     = $(this),
          $htmlBody = $('html, body'),
          offset    = ($this.attr('data-offset')) ? $this.attr('data-offset') : false,
          position  = ($this.attr('data-position')) ? $this.attr('data-position') : false,
          toMove;

      if (offset) {

        toMove = parseInt(offset, 10);
        $htmlBody.stop(true, false).animate({
          scrollTop: ($(this.hash).offset().top + toMove)
        }, settings.speed);

      } else if (position) {

        toMove = parseInt(position, 10);
        $htmlBody.stop(true, false).animate({
          scrollTop: toMove
        }, settings.speed);

      } else {

        $htmlBody.stop(true, false).animate({
          scrollTop: ($(this.hash).offset().top)
        }, settings.speed);

      }
    });
  };
})(jQuery);
