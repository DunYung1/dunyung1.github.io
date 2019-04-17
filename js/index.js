$(function () {
  $('.scroll-down, .coskills').click(function () {
    $('html, body').animate({
      scrollTop: $('section#myskills').offset().top
    }, 'slow');
    return false;
  });
});
