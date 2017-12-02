$(document).ready(init);

function init() {
    if(localStorage.getItem('isBannerShowed') === null &&
        compareDate(localStorage.getItem('dateOfShow'))) {
        setTimeout(function() {
            showBanner();
            document.getElementById("close-button").onclick = hideBanner;
        }, 200);
    }
}

function compareDate(date) {
    var oldDate = new Date(date);
    var newDate = new Date();
    if(oldDate.getHours() < newDate.getHours() &&
    oldDate.getMinutes() < newDate.getMinutes()) {
        return true;
    } else {
        return false;
    }
}

function showBanner() {
    $('#banner').animate({
            opacity: 1
        },
        {
            duration: 300
        });
}

function hideBanner() {
    document.getElementById("banner").style = "display: none";
    localStorage.setItem('isBannerShowed', true);
    localStorage.setItem('dateOfShow', new Date());
}