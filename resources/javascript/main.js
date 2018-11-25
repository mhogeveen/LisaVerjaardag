$(document).ready(function() {
  $('.fotos').slick({
    slidesToShow: 3,
    swipe: true,
    swipeToSlide: true,
    adaptiveHeight: true,
  });

  $('.kroatian span').click(function() {
    $('.kroatian').css('display', 'none');
    $('.dutch').css('display', 'block');
  });

  $('.dutch span').click(function() {
    $('.dutch').css('display', 'none');
    $('.kroatian').css('display', 'block');
  });
});
