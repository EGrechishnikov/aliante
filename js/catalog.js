"use strict";

var CONTENT_SELECTOR = "#content";
var TYPE_FACTORY = "FACTORY";
var TYPE_CATALOG = "CATALOG";
var baseUrl = "https://aliante.outsystemscloud.com/ALIANTE_ADMIN/rest/api/";
var step = 0;

$(document).ready(render);

function render(id) {
    if(step === 0) {
        loadFactories();
    } else if(step === 1) {
        loadCatalogs(id);
    }
}

function loadFactories() {
    var factories = sessionStorage.getItem(TYPE_FACTORY);
    if (factories) {
        drawFactories(JSON.parse(factories));
    } else {
        $.get(baseUrl + "factories").then(drawFactories);
    }
}

function loadCatalogs(factoryId) {
    $(CONTENT_SELECTOR).css('opacity', 0);
    var factoriesWrapper = JSON.parse(sessionStorage.getItem(TYPE_FACTORY));
    var factory = factoriesWrapper.filter(function(e) {return e.factory.Id === Number(factoryId)})[0];
    $.get(baseUrl + "factory/" + factoryId + "/catalogs").then(function(response) {
        drawCatalogs(factory, response);
    });
}

function drawFactories(factories) {
    sessionStorage.setItem(TYPE_FACTORY, JSON.stringify(factories));
    var result = "";
    $(factories).each(function(index, element) {
        result += drawElement(TYPE_FACTORY, element);
    });
    $(CONTENT_SELECTOR).html(result);
    $(CONTENT_SELECTOR).css('opacity', 1);
    $(".logo").click(function(e) {
        step = 1;
        render(e.currentTarget.id);
    });
}

function drawCatalogs(factoryWrapper, catalogs) {
    var factory = factoryWrapper.factory;
    setTimeout(function() {
        var result = "<div id='concrete-factory'><h1>" + factory.Name + "</h1>";
        result += "<img src=\"data:image/png;base64," + factoryWrapper.logo + "\" alt=\"" + factory.Name + "\ logo\"><div><h3>" + factory.Description +"</h3>";
        $(catalogs).each(function(index, element) {
            console.log(element);
            result += drawElement(TYPE_CATALOG, element);
        });
        result += "</div></div>";
        $(CONTENT_SELECTOR).html(result);
        $(CONTENT_SELECTOR).css('opacity', 1);
    }, 500);
}

function drawElement(type, element) {
    switch(type) {
        case TYPE_FACTORY :
            return "<div id='" + element.factory.Id + "' class=\"logo\"><img src=\"data:image/png;base64," + element.logo + "\" alt=\"" + element.factory.Name + "\ logo\"></div>";
        case TYPE_CATALOG :
            return "<div class=\"logo\"><img src=\"data:image/png;base64," + element.logo + "\" alt=\"" + element.catalog.Description + "\"></div>";
    }
}