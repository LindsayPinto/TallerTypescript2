import { series } from './data.js';
var tablaSeries = document.getElementById("tablaSeries");
cargarCard();
mostrarSeries(series);
function mostrarSeries(series) {
    var cuerpoTabla = document.createElement("tbody");
    var textoSeries = "";
    var suma = 0;
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        textoSeries += "<tr><td> ".concat(serie.numero, "</td><td> <a  href= \"#\" id=\"serie").concat(serie.numero, "\">").concat(serie.name, "</a> </td><td> ").concat(serie.channel, "</td><td> ").concat(serie.seasons, "</td> </tr>");
        suma += serie.seasons;
    }
    textoSeries += "<tr><td colspan = \"4\"> Seasons average: ".concat(suma / series.length, " </td></tr>");
    cuerpoTabla.innerHTML = textoSeries;
    tablaSeries.appendChild(cuerpoTabla);
    var _loop_1 = function (serie) {
        var nombreSerie = document.getElementById("serie".concat(serie.numero));
        nombreSerie.addEventListener("click", function (event) {
            mostrarCard();
            var nombreCard = document.getElementById("card".concat(serie.numero));
            nombreCard.style.display = "block";
        });
    };
    for (var _a = 0, series_2 = series; _a < series_2.length; _a++) {
        var serie = series_2[_a];
        _loop_1(serie);
    }
}
function cargarCard() {
    var contenedor = document.getElementById("contenedor");
    var textoCard = "";
    for (var _i = 0, series_3 = series; _i < series_3.length; _i++) {
        var serie = series_3[_i];
        var card = document.createElement("div");
        card.classList.add('card', 'w-25', 'ml-5');
        card.setAttribute('id', "card".concat(serie.numero));
        card.style.display = "none";
        textoCard = "<img src=\"".concat(serie.img, "\" class=\"card-img-top\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">").concat(serie.name, "</h5>\n          <p class=\"card-text\">").concat(serie.plot, "</p>\n          <a href=\"").concat(serie.url, "\" class=\"btn btn-primary\">").concat(serie.url, "</a>\n        </div>");
        card.innerHTML = textoCard;
        contenedor.appendChild(card);
    }
}
function mostrarCard() {
    for (var _i = 0, series_4 = series; _i < series_4.length; _i++) {
        var serie = series_4[_i];
        var nombreSerie = document.getElementById("card".concat(serie.numero));
        nombreSerie.style.display = "none";
    }
}
