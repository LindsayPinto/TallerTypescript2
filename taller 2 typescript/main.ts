import {Serie} from './Serie.js';
import {series} from './data.js';

let tablaSeries: HTMLElement = document.getElementById ("tablaSeries")!;

cargarCard();
mostrarSeries(series);


function mostrarSeries (series:Serie[]){
    let cuerpoTabla = document.createElement("tbody");
    let textoSeries = "";
    let suma = 0;
    for (let serie of series){
        textoSeries += `<tr><td> ${serie.numero}</td><td> <a  href= "#" id="serie${serie.numero}">${serie.name}</a> </td><td> ${serie.channel}</td><td> ${serie.seasons}</td> </tr>`;
        suma += serie.seasons;
    }
    textoSeries += `<tr><td colspan = "4"> Seasons average: ${suma/series.length} </td></tr>`
    cuerpoTabla.innerHTML = textoSeries;
    tablaSeries.appendChild(cuerpoTabla);

    for (let serie of series){
       let nombreSerie = document.getElementById(`serie${serie.numero}`)!;
       nombreSerie.addEventListener("click", function(event){
        mostrarCard();
        let nombreCard = document.getElementById(`card${serie.numero}`)!;
        nombreCard.style.display="block";
       });
    }
    }

function cargarCard (){
    let contenedor:HTMLElement = document.getElementById("contenedor")!;
    let textoCard = "";
    for (let serie of series){
        let card = document.createElement("div");
        card.classList.add('card', 'w-25',  'ml-5');
        card.setAttribute('id', `card${serie.numero}`);
        card.style.display="none";
        textoCard = `<img src="${serie.img}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${serie.name}</h5>
          <p class="card-text">${serie.plot}</p>
          <a href="${serie.url}" class="btn btn-primary">${serie.url}</a>
        </div>`;
      card.innerHTML=textoCard;
      contenedor.appendChild(card);
    }
    
}

function mostrarCard (){
    for (let serie of series){
        let nombreSerie = document.getElementById(`card${serie.numero}`)!;
        nombreSerie.style.display="none";
        
     }
     
}