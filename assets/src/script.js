$(document).ready(function () {
    const topImages = $('.top-row')
    const bottomImages = $('.bottom-row')
    const rightBtn = $('#right')
    const leftBtn = $('#left')

    $(rightBtn).click(() => {
        $(rightBtn).prop('disabled', true)
        let lastImageTop = $(".top-row .img-slide").last()
        $(lastImageTop).clone().prependTo(topImages)
        $(lastImageTop).remove()
        let lastImageBottom = $(".bottom-row .img-slide").last()
        $(lastImageBottom).clone().prependTo(bottomImages)
        $(lastImageBottom).remove()
        if ($(rightBtn).is(':animated')) {
            $(rightBtn).prop('disabled', true)
        };
        setTimeout(() => {
            $(rightBtn).prop('disabled', false)
        }, 500)
    })

    $(leftBtn).click(() => {
        $(leftBtn).prop('disabled', true)
        let firstImageTop = $(".top-row .img-slide").first()
        $(firstImageTop).clone().appendTo(topImages)
        $(firstImageTop).remove()
        let firstImageBottom = $(".bottom-row .img-slide").first()
        $(firstImageBottom).clone().appendTo(bottomImages)
        $(firstImageBottom).remove()
        setTimeout(() => {
            $(leftBtn).prop('disabled', false)
        }, 500)
    })
});