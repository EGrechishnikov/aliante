$(document).ready(showLogo);

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