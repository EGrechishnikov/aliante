$(document).ready(function () {
    showLogo();
});

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

let flag = false;
function showGreeting() {
    let element = $('.greeting')[!flag ? 0 : 1];
    $(element).animate(
        {
            marginLeft: "+=30",
            opacity: "1"
        },
        {
            duration: 1000,
            complete: !flag ? showGreeting : showFooter
        });
    flag = true;
}

function showFooter() {
    $('#footer').animate({
        opacity: "1"
    }, 1200);
}