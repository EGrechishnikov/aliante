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
    var factory = JSON.parse(sessionStorage.getItem(TYPE_FACTORY))[factoryId];
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
    var result = "<h1>" + factoryWrapper.factory.Name + "</h1>";
    $(CONTENT_SELECTOR).html(result);
    $(CONTENT_SELECTOR).css('opacity', 1);
}

function drawElement(type, element) {
    switch(type) {
        case TYPE_FACTORY :
            return "<div id='" + element.factory.Id + "' class=\"logo\"><img src=\"data:image/png;base64," + element.logo + "\" alt=\"" + element.factory.Name + "\ logo\"></div>";
        case TYPE_CATALOG :
            return "";
    }
}