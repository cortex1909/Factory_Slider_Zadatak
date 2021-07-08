const topImages = $('.top-row')
const bottomImages = $('.bottom-row')
const rightBtn = $('#right')
const leftBtn = $('#left')
const appendLeftBtn = $('main .columns .slider-container .bottom-space .buttons')


$(rightBtn).click(() => {
    $(leftBtn).prop("disabled", false).html('<img src="assets/img/strelice/arrow-blue-left.png" alt="left">')

    $(topImages).fadeTo("slow", 0.2)
    let lastImageTop = $(".top-row .img-slide").last()
    $(lastImageTop).clone().prependTo(topImages)
    $(topImages).scrollLeft($(topImages).prop("scrollWidth") - $(lastImageTop).outerWidth(true))    
    $(lastImageTop).remove()
    $(topImages).fadeTo("slow", 1)

    $(bottomImages).fadeTo("slow", 0.2)
    let lastImageBottom = $(".bottom-row .img-slide").last()
    $(lastImageBottom).clone().prependTo(bottomImages)
    $(bottomImages).scrollLeft($(bottomImages).prop("scrollWidth") - $(lastImageBottom).outerWidth(true))
    $(lastImageBottom).remove()
    $(bottomImages).fadeTo("slow", 1)

})

$(leftBtn).click(() => {
    $(topImages).fadeTo("slow", 0.2)
    let firstImageTop = $(".top-row .img-slide").first()
    $(topImages).scrollLeft($(topImages).prop("scrollWidth") - $(firstImageTop).outerWidth(true))
    $(firstImageTop).clone().appendTo(topImages)
    $(firstImageTop).remove()
    $(topImages).fadeTo("slow", 1)

    $(bottomImages).fadeTo("slow", 0.2)
    let firstImageBottom = $(".bottom-row .img-slide").first()
    $(bottomImages).scrollLeft($(bottomImages).prop("scrollWidth") - $(firstImageBottom).outerWidth(true))
    $(firstImageBottom).clone().appendTo(bottomImages)
    $(firstImageBottom).remove()
    $(bottomImages).fadeTo("slow", 1)
})