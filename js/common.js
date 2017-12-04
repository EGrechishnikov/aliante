$(document).ready(init);

function init() {
    if(isReadyToShowBanner()) {
        setTimeout(function() {
            showBanner();
            document.getElementById("close-button").onclick = hideBanner;
        }, 200);
    } else {
        document.getElementById("banner").style = "display: none";
    }
}

function isReadyToShowBanner() {
    var oldDate = new Date(localStorage.getItem('dateOfShow'));
    var newDate = new Date();
    if(oldDate.getDate() !== newDate.getDate() || (oldDate.getHours() < newDate.getHours() &&
    oldDate.getMinutes() < newDate.getMinutes())) {
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
    localStorage.setItem('dateOfShow', new Date());
}