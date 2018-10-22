"use strict";

var CONTENT_SELECTOR = "#content";
var TYPE_FACTORY = "FACTORY";
var TYPE_CATALOG = "CATALOG";
var baseUrl = "https://aliante.outsystemscloud.com/ALIANTE_ADMIN/rest/api/";
var step = 0;
var currentCatalog = 0;
var backButton = "<span id='back' class=\"glyphicon glyphicon-chevron-left\" onclick='changeStep(step - 1, currentCatalog);'></span>";

$(document).ready(render);

function render(id) {
    if (step === 0) {
        loadFactories();
    } else if (step === 1) {
        loadCatalogs(id);
    } else if (step === 2) {
        loadImages(id);
    }
}

function changeStep(number, id) {
    step = number;
    if (step === 0) {
        $(CONTENT_SELECTOR).css('opacity', 0);
        setTimeout(render, 500);
    } else {
        render(id);
    }
}

function loadFactories() {
    var factories = sessionStorage.getItem(TYPE_FACTORY);
    if (factories) {
        drawFactories(JSON.parse(factories));
    } else {
        $.get(baseUrl + "factories").then(function (response) {
            sessionStorage.setItem(TYPE_FACTORY, JSON.stringify(response));
            console.log(response);
            drawFactories(response);
        });
    }
}

function loadCatalogs(factoryId) {
    currentCatalog = factoryId;
    $(CONTENT_SELECTOR).css('opacity', 0);
    var factoriesWrapper = JSON.parse(sessionStorage.getItem(TYPE_FACTORY));
    var factory = factoriesWrapper.filter(function (e) {
        return e.factory.Id === Number(factoryId)
    })[0];
    if (factoryId === sessionStorage.getItem("currentFactory")) {
        drawCatalogs(factory, JSON.parse(sessionStorage.getItem("catalogs")));
    } else {
        $.get(baseUrl + "factory/" + factoryId + "/catalogs").then(function (response) {
            sessionStorage.setItem("catalogs", JSON.stringify(response));
            sessionStorage.setItem("currentFactory", factoryId);
            drawCatalogs(factory, response);
        });
    }
}

function loadImages(catalogId) {
    $(CONTENT_SELECTOR).css('opacity', 0);
    $.get(baseUrl + "catalog/" + catalogId).then(drawCatalog);
    $.get(baseUrl + "catalog/" + catalogId + "/images").then(drawImages);
}

function drawFactories(factories) {
    var result = "";
    $(factories).each(function (index, element) {
        result += drawElement(TYPE_FACTORY, element);
    });
    $(CONTENT_SELECTOR).html(result);
    $(CONTENT_SELECTOR).css('opacity', 1);
    $(".logo").click(function (e) {
        changeStep(1, e.currentTarget.id);
    });
}

function drawCatalogs(factoryWrapper, catalogs) {
    if (factoryWrapper) {
        var factory = factoryWrapper.factory;
        setTimeout(function () {
            var result = "<div id='concrete-factory'>" + backButton + "<h1>" + factory.Name + "</h1>";
            var description = factory.Description ? factory.Description : '';
            result += "<img src=\"data:image/png;base64," + factoryWrapper.logo + "\" alt=\"" + factory.Name + "\ logo\"><div><h3>" + description + "</h3>";
            $(catalogs).each(function (index, element) {
                result += drawElement(TYPE_CATALOG, element);
            });
            result += "</div></div>";
            $(CONTENT_SELECTOR).html(result);
            $(CONTENT_SELECTOR).css('opacity', 1);
            $('.catalog').click(function (e) {
                changeStep(2, e.currentTarget.id);
            });
        }, 500);
    }
}

function drawCatalog(wrapper) {
    var catalog = wrapper.catalog;
    setTimeout(function () {
        var result = "<div id='concrete-factory'>" + backButton + "<h1>" + catalog.Name + "</h1>";
        result += "<img style='max-width: 200px;' src=\"data:image/png;base64," + wrapper.logo + "\" alt=\"" + catalog.Name + "\ logo\"><div>";
        result += "</div></div>";
        $(CONTENT_SELECTOR).html(result);
        $(CONTENT_SELECTOR).css('opacity', 1);
    }, 500);
}

function drawImages(images) {
    console.log(images);
    //TODO
}

function drawElement(type, element) {
    switch (type) {
        case TYPE_FACTORY :
            return "<div id='" + element.factory.Id + "' class=\"logo\"><img src=\"data:image/png;base64," + element.logo + "\" alt=\"" + element.factory.Name + "\ logo\"></div>";
        case TYPE_CATALOG :
            return "<div id='" + element.catalog.Id + "' class=\"catalog\"><img src=\"data:image/png;base64," + element.logo + "\" alt=\"" + element.catalog.Description + "\"></div>";
    }
}