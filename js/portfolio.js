$(function () {
    $('.kontacts').click(function () {
      $('html, body').animate({
        scrollTop: $('section#mykontacts').offset().top
      }, 'slow');
      return false;
    });
  });
  