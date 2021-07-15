"use strict";

var topImages = $('.top-row');
var bottomImages = $('.bottom-row');
var rightBtn = $('#right');
var leftBtn = $('#left');
$(rightBtn).click(function () {
  $(rightBtn).prop('disabled', true);
  var lastImageTop = $(".top-row .img-slide").last();
  $(lastImageTop).clone().prependTo(topImages);
  $(topImages).fadeOut(500, function () {
    $(topImages).fadeIn(500);
  });
  $(lastImageTop).remove();
  var lastImageBottom = $(".bottom-row .img-slide").last();
  $(lastImageBottom).clone().prependTo(bottomImages);
  $(bottomImages).fadeOut(500, function () {
    $(bottomImages).fadeIn(500);
  });
  $(lastImageBottom).remove();

  if ($(rightBtn).is(':animated')) {
    $(rightBtn).prop('disabled', true);
  }

  ;
  setTimeout(function () {
    $(rightBtn).prop('disabled', false);
  }, 1000);
});
$(leftBtn).click(function () {
  $(leftBtn).prop('disabled', true);
  var firstImageTop = $(".top-row .img-slide").first();
  $(topImages).fadeOut(500, function () {
    $(topImages).fadeIn(500);
  });
  $(firstImageTop).clone().appendTo(topImages);
  $(firstImageTop).remove();
  var firstImageBottom = $(".bottom-row .img-slide").first();
  $(bottomImages).fadeOut(500, function () {
    $(bottomImages).fadeIn(500);
  });
  $(firstImageBottom).clone().appendTo(bottomImages);
  $(firstImageBottom).remove();
  setTimeout(function () {
    $(leftBtn).prop('disabled', false);
  }, 1000);
});