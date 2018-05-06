$(document).ready(function() {
    footerInit();
    popupInit();
});

function popupInit() {
    var showingDate = JSON.parse(localStorage.getItem('popupShowingDate'));
    if(showingDate === null || new Date(showingDate).getDate() !== new Date().getDate()) {
        localStorage.setItem('popupShowingDate', JSON.stringify(new Date()));
        $('#popup').modal();
    }
}

$(window).resize(footerInit);

function footerInit() {
    var margin = 7;
    var footerHeight = $('footer').height();
    var totalElementHeight = margin + footerHeight;
    if (window.innerHeight - totalElementHeight > document.body.scrollHeight) {
        $('footer').css('top',  (window.innerHeight - margin));
    }
}