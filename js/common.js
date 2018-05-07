$(document).ready(popupInit);

function popupInit() {
    var showingDate = JSON.parse(localStorage.getItem('popupShowingDate'));
    if(showingDate === null || new Date(showingDate).getDate() !== new Date().getDate()) {
        localStorage.setItem('popupShowingDate', JSON.stringify(new Date()));
        $('#popup').modal();
    }
}