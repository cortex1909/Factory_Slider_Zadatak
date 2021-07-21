"use strict";

$(document).ready(function () {
  var topImages = $('.top-row');
  var bottomImages = $('.bottom-row');
  var rightBtn = $('#right');
  var leftBtn = $('#left');
  $(rightBtn).click(function () {
    $(rightBtn).prop('disabled', true);
    var lastImageTop = $(".top-row .img-slide").last();
    $(lastImageTop).clone().prependTo(topImages);
    $(lastImageTop).remove();
    var lastImageBottom = $(".bottom-row .img-slide").last();
    $(lastImageBottom).clone().prependTo(bottomImages);
    $(lastImageBottom).remove();

    if ($(rightBtn).is(':animated')) {
      $(rightBtn).prop('disabled', true);
    }

    ;
    setTimeout(function () {
      $(rightBtn).prop('disabled', false);
    }, 500);
  });
  $(leftBtn).click(function () {
    $(leftBtn).prop('disabled', true);
    var firstImageTop = $(".top-row .img-slide").first();
    $(firstImageTop).clone().appendTo(topImages);
    $(firstImageTop).remove();
    var firstImageBottom = $(".bottom-row .img-slide").first();
    $(firstImageBottom).clone().appendTo(bottomImages);
    $(firstImageBottom).remove();
    setTimeout(function () {
      $(leftBtn).prop('disabled', false);
    }, 500);
  });
});