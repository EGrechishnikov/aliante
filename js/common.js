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
    var margin = 8;
    var footerHeight = $('footer').height();
    var totalElementHeight = margin + footerHeight;
    if (window.innerHeight - totalElementHeight > document.body.scrollHeight) {
        $('footer').css('top', (window.innerHeight - totalElementHeight + margin));
    }
    // var height = window.innerHeight - totalElementHeight > document.body.scrollHeight ?
    //     window.innerHeight - totalElementHeight + margin :
    //     document.body.scrollHeight + margin;
    // $('footer').css('top', height);
}