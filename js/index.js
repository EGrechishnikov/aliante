$(document).ready(function() {
    footerInit();
    showLogo();
});

$(window).resize(footerInit);

function footerInit() {
    var margin = 8;
    var footerHeight = $('footer').height();
    var totalElementHeight = margin + footerHeight;
    if (window.innerHeight - totalElementHeight > document.body.scrollHeight) {
        $('footer').css('top', (window.innerHeight - totalElementHeight + margin));
    }
}

function showLogo() {
    $('#image').animate(
        {
            marginTop: "+=30",
            opacity: "1"
        },
        {
            duration: 1500,
            complete: showGreeting
        });
}

var flag = false;

function showGreeting() {
    var element = $('.greeting')[!flag ? 0 : 1];
    if (window.innerWidth < 769 && flag) {
        $(element).animate(
            {
                opacity: "1"
            },
            {
                duration: 1000,
                complete: showFooter
            });
    } else {
        $(element).animate(
            {
                marginLeft: "+=30",
                opacity: "1"
            },
            {
                duration: 1000,
                complete: !flag ? showGreeting : showFooter
            });
    }
    flag = true;
}

function showFooter() {
    $('#footer').animate({
        opacity: "1"
    }, 1200);
}