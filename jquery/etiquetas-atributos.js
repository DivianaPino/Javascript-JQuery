'use strict';

$(document).ready(function(){

//SELECTOR DE ETIQUETAS

var span= $('span'); //esto es igual que decir: var span= document.getElementById('span'); en JS
span.css('border', '1px solid blue'); //un estilo css creado con JQUERY
console.log(span.text()); //mostrar el span en la consola (no en el navegador)


//SELECTORES DE ATRIBUTOS

// el atributo en este caso es title="google"

var atributo= $('[title="google"]');
atributo.css('font-size' ,'50px');
console.log(atributo.text());



    
 })