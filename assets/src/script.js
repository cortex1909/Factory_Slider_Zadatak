const topImages = $('.top-row')
const bottomImages = $('.bottom-row')
const rightBtn = $('#right')
const leftBtn = $('#left')

$(rightBtn).click(() => {
    $(rightBtn).prop('disabled', true)
    let lastImageTop = $(".top-row .img-slide").last()
    $(lastImageTop).clone().prependTo(topImages)
    $(topImages).fadeOut(500, function(){
        $(topImages).fadeIn(500);
    });
    $(lastImageTop).remove()

    let lastImageBottom = $(".bottom-row .img-slide").last()
    $(lastImageBottom).clone().prependTo(bottomImages)
    $(bottomImages).fadeOut(500, function(){
        $(bottomImages).fadeIn(500);
    });
    $(lastImageBottom).remove()
    if ($(rightBtn).is(':animated')) {
        $(rightBtn).prop('disabled', true)
    };

    setTimeout(() => {
        $(rightBtn).prop('disabled', false)
    }, 1000)
})

$(leftBtn).click(() => {
    $(leftBtn).prop('disabled', true)
    let firstImageTop = $(".top-row .img-slide").first()
    $(topImages).fadeOut('fast', function(){
        $(topImages).fadeIn();
    });
    $(firstImageTop).clone().appendTo(topImages)
    $(firstImageTop).remove()

    let firstImageBottom = $(".bottom-row .img-slide").first()
    $(bottomImages).fadeOut('fast', function(){
        $(bottomImages).fadeIn();
    });
    $(firstImageBottom).clone().appendTo(bottomImages)
    $(firstImageBottom).remove()
    
    setTimeout(() => {
        $(leftBtn).prop('disabled', false)
    }, 1000)
})