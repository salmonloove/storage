function mainHide() {
    $('main .video').animate({'top':'-1000px'}, 500)
    $('ul.menu').delay(300).animate({'top':'1000px'}, 500)
    $('.main-visual').addClass('on')
    $('#sec1').show()
}
function mainShow() {
    $('main .video').animate({'top':'-0px'}, 500)
    $('ul.menu').delay(300).animate({'top':'00px'}, 500)
    $('.main-visual').removeClass('on')
    $('#sec1').show()
}