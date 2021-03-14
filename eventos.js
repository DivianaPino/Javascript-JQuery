'use strict'

//EVENTOs DE RATÓN 


//queryselector se le puede pasar cualquier cosa el id o la clase del elemento  en el DOM
// IMPORTANTE: si es una CLASE se escribe con un punto es decir en vez de # un . ('.boton')

var boton= document.querySelector('#boton');
var div= document.querySelector('#div');


//-------PRIMERA FORMA--------------

//addEventListener se le pasa el evento que va a escuchar, en este caso es el evento CLICK
//boton.addEventListener('click' , function (){  //al escuchar dicho evento se debe ejecutar dicha funcion

     //console.log('has pulsado el boton');

//innerHTML sirve para modificar elementos en el DOM
    // div.innerHTML= 'has pulsado el boton';


//});


//-------SEGUNDA FORMA--------------

//FUNCION PARA SER LLAMADA DESDE EVENTO EN EL DOCUMENTO index.html

function Pulsar(){
    div.innerHTML= 'has pulsado el boton';
}

function Alerta(){
    alert('has pulsado sobre el Div');
}


//-----------------------------------------------------
//------------EVENTOS DE RATON:------------------------
//-----------------------------------------------------

//onclick  --> click sobre el elemento
//oncontextmenu  --> click con el boton derecho
//onmouseenter  -->  El puntero del raton entra en el area de un elemento
//onmousedown  -->  Se pulsa un boton del raton sobre un elemento
//ondblclick  --> Doble click sobre el elemento
//onmouseleave  -->  El puntero del raton sale del  area de un elemento
//onmouseover  --> El puntero del raton se situa encima del area de un elemento
//onmouseup  -->  Un boton del raton se libera estando sobre un elemento

//IMPORTANTE: cuando se llama desde addEventListener y no del html, se quita el "on" de los eventos
//Ejemplo: oncontextmenu  --> contextmenu