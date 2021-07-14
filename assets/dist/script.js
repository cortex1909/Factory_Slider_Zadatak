"use strict";

var topImages = $('.top-row');
var bottomImages = $('.bottom-row');
var rightBtn = $('#right');
var leftBtn = $('#left');
$(rightBtn).click(function () {
  var lastImageTop = $(".top-row .img-slide").last();
  $(lastImageTop).clone().prependTo(topImages);
  /*     $(topImages).animate( {
          scrollLeft: $(topImages).scrollLeft() - $('.top-row .img-slide').last().outerWidth(true)
      }, 1000) */

  $(lastImageTop).remove();
  var lastImageBottom = $(".bottom-row .img-slide").last();
  $(lastImageBottom).clone().prependTo(bottomImages);
  /*     $(bottomImages).animate( {
          scrollLeft: $(bottomImages).scrollLeft() - $('.bottom-row .img-slide').last().outerWidth(true)
      }, 1000) */

  $(lastImageBottom).remove();
});
$(leftBtn).click(function () {
  var firstImageTop = $(".top-row .img-slide").first();
  /*     $(topImages).animate( {
          scrollLeft: $(topImages).scrollLeft() + $('.top-row .img-slide').last().outerWidth(true)
      }, 1000) */

  $(firstImageTop).clone().appendTo(topImages);
  $(firstImageTop).remove();
  var firstImageBottom = $(".bottom-row .img-slide").first();
  /*     $(bottomImages).animate( {
          scrollLeft: $(bottomImages).scrollLeft() + $('.bottom-row .img-slide').last().outerWidth(true)
      }, 1000) */

  $(firstImageBottom).clone().appendTo(bottomImages);
  $(firstImageBottom).remove();
}); // Nisam pronašao način kako iskoristiti animate, kako bih kroz animaciju u trajanju 1s pomaknuo cijeli red slika u lijevo, odnosno u desno. Pokušaj zakomentiran gore.