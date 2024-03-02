import { barcelona,roma,paris,londres } from "./ciudades.js";

//obtener el dom de index.html
let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subTituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')



//Agregar un evento click a cada enlace

enlaces.forEach(function(enlace){
//remover el activo
enlace.addEventListener('click', function(){
    enlaces.forEach(function(enlace){
        enlace.classList.remove('active')
    })

    this.classList.add('active')
    let contenido = obtenerContenido(this.textContent)
  
    tituloElemento.innerHTML = contenido.titulo
    subTituloElemento.innerHTML = contenido.subtitulo
    parrafoElemento.innerHTML = contenido.parrafo


})


})


function obtenerContenido(enlace){
  
   
    let contenido = {
        'Barcelona' : barcelona,
        'Roma' : roma,
        'París': paris,
        'Londres': londres
    }
    
    return contenido[enlace];

}

