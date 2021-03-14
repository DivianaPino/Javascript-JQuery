'use strict';


$(document).ready(function(){

    $('#mostrar').click(function(){

            $('#textoLorem').slideToggle(1000, 'swing', function(){  //slideToggle es para dar efecto de acordeon (Pulsar abre y Pulsar otra vez cierra) 
                                                                     //Primer parametro es el tiempo que dura en salir el efecto, el efecto que tendra y tercero(OPCIONAL) 
                                                                     //si al terminar deberia de hacer una funcion o algo
            console.log('TERMINADO');

            })
    })

});