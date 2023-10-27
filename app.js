// MENU LATERAL
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu() {
    if (menu_visible == false) {
        menu.style.display = "block";
        menu_visible = true;
    } else {
        menu.style.display = "none";
        menu_visible= false
    }
}
// OCULTO EL MENU UNA VEZ QUE SELECCIONE UNA OPCION

let links = document.querySelectorAll("nav a");
for (var x = 0; x<links.length; x++){
    links[x].onclink = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
   
}
// creo las barritas de una barra particular identificada por su id

function CrearBarra(id_barra) {
    for (i = 0; i <= 16; i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div)
    }
}

// SELECCIONO TODAS LAS BARRAS GENERALES PAR A LUEGO MANIPULARLOS

let html  = document.getElementById("html");
CrearBarra(html);



let javascript = document.getElementById("javascript");
CrearBarra(javascript);

let sistemas = document.getElementById("sistemas");
CrearBarra(sistemas);

let excel = document.getElementById("excel");
CrearBarra(excel);

/*AHORA VOY A GUARDAR LA CANTIDAD DE BARRITAS QUE SE VAN A IR PINTANDO POR CADA BARRA PARA ESO UTILIZO UN ARREGLO POSICCION PERTENECE A UN ELEMENTO COMIENZA EN -1 PORQUE NO TIENE NINGUNA PINTADA AL INICIARSE*/

let contadores = [-1, -1, -1, -1, -1, -1,];

let entro = false;

/* FUNCION QUE APLICA LAS ANIMACIONES  DE LA HABILIDADES */

function efectoHabilidades() {
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if (distancia_skills >= 300 && entro == false) {
        entro = true;
        const intervalHtml = setInterval(function () {
            pintarBarra(html, 14, 0, intervalHtml);
        }, 100);

       
         const intervaljavascript = setInterval(function () {
            pintarBarra(javascript, 15, 1, intervaljavascript);
         }, 100);
        const intervalsistemas= setInterval(function () {
            pintarBarra(sistemas, 10, 2, intervalsistemas);
        }, 100);
        const intervalexcel= setInterval(function () {
            pintarBarra(excel, 16, 3, intervalexcel);
        }, 100);
    }
}

// LLENA UNA BARRA PARTICULAR CON LA CANTIDAD INDICADA

function pintarBarra(id_barra, cantidad, indice, interval) {
    contadores[indice]++;
    x = contadores[indice];
    if (x < cantidad) {
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#940253";

    } else {
        clearInterval(interval)
    }
}

// DETECTO EL SCROLLING DEL MOUSE PARA APLICAR LA ANIMACION DE LA BARRA

window.onscroll = function () {
    efectoHabilidades();
}