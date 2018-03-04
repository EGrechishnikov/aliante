$(document).ready(footerInit);

$(window).resize(footerInit);

function footerInit() {
    var margin = 8;
    var footerHeight = $('footer').height();
    var totalElementHeight = margin + footerHeight;
    var height = window.innerHeight - totalElementHeight > document.body.scrollHeight ?
        window.innerHeight - totalElementHeight + margin :
        document.body.scrollHeight + margin;
    $('footer').css('top', height);
}