'use strict';


$(document).ready(function(){


    // $('#btnMostrar').click(function(){
    //     $('#texto').html('Este es el texto');  // para modificar texto de utiliza .html('aqui el texto')
    // });

    
    // $('#btnOcultar').click(function(){
    //     $('#texto').hide(1000);   // hide es para ocultar el tiempo y se le pasa el tiempo en que tardara para ocultarse en milisegundos
    // });


//---------------------------------------------------------------
// -----------------EVENT HOVER----------------------------------
//HOVER es para cuando pasamos el raton por encima y lo quitamos
    
$('#btn').html('PASA EL RATON')

$('#btn').hover(function(){
        //su primera funcion es indicarle que hara cuando se pasa el raton por encima
        $('#btn').html('SACA EL RATON')
        $('#texto1').show(500); //SHOW sirve para mostrar elementos que estan ocultos

    }, function(){
        
        // Y su segunda funcion es indicarle que hara cuando quitemos el raton de encima del elemento
        $('#btn').html('PASA EL RATON')
        $('#texto1').hide(500);
    })

});