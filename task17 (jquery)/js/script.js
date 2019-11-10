$(document).ready(function () {

  let overlay = $('.overlay'),
    modal = $('.modal');

  $('.js-modal').on('click', function () {
    overlay.fadeIn(500);
    modal.slideDown(500);
  });

  $('.close').on('click', function () {
    overlay.fadeOut(500);
    modal.slideUp(500);
  });

});