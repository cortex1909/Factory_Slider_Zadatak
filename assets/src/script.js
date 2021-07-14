const topImages = $('.top-row')
const bottomImages = $('.bottom-row')
const rightBtn = $('#right')
const leftBtn = $('#left')


$(rightBtn).click(() => {
    let lastImageTop = $(".top-row .img-slide").last()
    $(lastImageTop).clone().prependTo(topImages)
/*     $(topImages).animate( {
        scrollLeft: $(topImages).scrollLeft() - $('.top-row .img-slide').last().outerWidth(true)
    }, 1000) */
    $(lastImageTop).remove()

    let lastImageBottom = $(".bottom-row .img-slide").last()
    $(lastImageBottom).clone().prependTo(bottomImages)
/*     $(bottomImages).animate( {
        scrollLeft: $(bottomImages).scrollLeft() - $('.bottom-row .img-slide').last().outerWidth(true)
    }, 1000) */
    $(lastImageBottom).remove()
})

$(leftBtn).click(() => {
    let firstImageTop = $(".top-row .img-slide").first()
/*     $(topImages).animate( {
        scrollLeft: $(topImages).scrollLeft() + $('.top-row .img-slide').last().outerWidth(true)
    }, 1000) */
    $(firstImageTop).clone().appendTo(topImages)
    $(firstImageTop).remove()

    let firstImageBottom = $(".bottom-row .img-slide").first()
/*     $(bottomImages).animate( {
        scrollLeft: $(bottomImages).scrollLeft() + $('.bottom-row .img-slide').last().outerWidth(true)
    }, 1000) */
    $(firstImageBottom).clone().appendTo(bottomImages)
    $(firstImageBottom).remove()
})

// Nisam pronašao način kako iskoristiti animate, kako bih kroz animaciju u trajanju 1s pomaknuo cijeli red slika u lijevo, odnosno u desno. Pokušaj zakomentiran gore.