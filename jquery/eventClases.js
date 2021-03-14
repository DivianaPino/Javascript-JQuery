'use strict';

// Eventos para eliminar y agregar clases

$(document).ready(function(){

    $('.parrafo').hover(function(){   

          $(this).addClass('borde');  //this hace referencia al elemento padre, es decir en el elemento donde nos encontramos 

    }, function(){
        
          $(this).removeClass('borde');

    })

});