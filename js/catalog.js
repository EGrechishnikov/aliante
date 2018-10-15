var baseUrl = "https://aliante.outsystemscloud.com/ALIANTE_ADMIN/rest/api/";

$(document).ready(init);

function init() {
    $(".logo").click(function(e) {
        var id = e.currentTarget.id;
        if (id) {
            getFactory(id);
        }
    });
}

function getCountries() {
    $.get(baseUrl + "countries").then(function(e) {
        console.log(e);
    });
}

function getFactories() {
    $.get(baseUrl + "factories").then(function(e) {
        var result = "";
        $(e).each(function(index, element) {
            result += "<div><p>" + element.Name + "</p></div>"
        });
        console.log(result);
    });
}

function getCatalogs() {
    $.get(baseUrl + "catalogs").then(function(e) {
        console.log(e);
    });
}

function getFactory(id) {
    console.log(id);
    // $.get(baseUrl + "factory/" + id).then(function(e) {
    //     console.log(e);
    //     console.log(element);
    // });
}

function getImage(id) {
    $.get(baseUrl + "attachment/" + id).then(function(e) {
        console.log(e);
    });
}