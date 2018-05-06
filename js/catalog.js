'use strict';

var logoPath = 'img/wallpaper/';
var countPerPage = 10;
var startIndex = 0;

$(document).ready(render);

function render() {
    $('#content').html('');
    for (var i = startIndex; i < countPerPage + startIndex; i++) {
        if (db.wallpaper.length > i) {
            createElement(db.wallpaper[i]);
        }
    }
}

function changePageByDirection(next) {
    if (next) {
        if (db.wallpaper.length >= startIndex + countPerPage) {
            startIndex += countPerPage;
            render();
        }
    } else {
        if (startIndex !== 0) {
            startIndex -= countPerPage;
            render();
        }
    }
}

function createElement(element) {
    $('#content').append('<div><h3>' + element.name + '</h3></div>');
}


var db = {
    wallpaper: [{
        name: 'BN International',
        logo: logoPath + 'bn-logo.png',
        description: '',
        images: []
    }, {
        name: '1838 Wallcoverings',
        logo: logoPath + '1838-logo.png',
        description: '',
        images: []
    }, {
        name: 'Atlas',
        logo: logoPath + 'atlas-logo.png',
        description: '',
        images: []
    }, {
        name: 'Loymina',
        logo: logoPath + 'loymina-logo.png',
        description: '',
        images: []
    }, {
        name: 'Limonta',
        logo: logoPath + 'limonta-logo.jpg',
        description: '',
        images: []
    }, {
        name: 'A.Rossi',
        logo: logoPath + 'arossi-logo.png',
        description: '',
        images: []
    }, {
        name: 'Cristiana Masi',
        logo: logoPath + 'masi-logo.jpg',
        description: '',
        images: []
    }, {
        name: 'Rasch',
        logo: logoPath + 'rasch-logo.jpg',
        description: '',
        images: []
    }, {
        name: 'Grandeco',
        logo: logoPath + 'grandeco-logo.jpg',
        description: '',
        images: []
    }, {
        name: 'Q.Parete',
        logo: logoPath + 'parete-logo.jpg',
        description: '',
        images: []
    }, {
        name: 'Arthouse',
        logo: '',
        description: '',
        images: []
    }, {
        name: 'Lutece',
        logo: '',
        description: '',
        images: []
    }, {
        name: 'A.Decori',
        logo: '',
        description: '',
        images: []
    }, {
        name: 'Milassa',
        logo: '',
        description: '',
        images: []
    }, {
        name: 'Origin',
        logo: '',
        description: '',
        images: []
    }, {
        name: 'Midbec',
        logo: '',
        description: '',
        images: []
    }, {
        name: 'Borastapeter',
        logo: '',
        description: '',
        images: []
    }, {
        name: 'Marburg',
        logo: '',
        description: '',
        images: []
    }, {
        name: 'Ugepa',
        logo: '',
        description: '',
        images: []
    }, {
        name: 'Cole & Son',
        logo: '',
        description: '',
        images: []
    }, {
        name: 'Lutece',
        logo: '',
        description: '',
        images: []
    }, {
        name: 'Sirpi',
        logo: '',
        description: '',
        images: []
    }, {
        name: 'A.S. Creation',
        logo: '',
        description: '',
        images: []
    }]
};