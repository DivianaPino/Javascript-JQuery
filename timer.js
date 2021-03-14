'use strict'

//FUNCIONES DE TIEMPO: SIRVE PARA PROGRAMAR EN CUANTO TIEMPO SE TIENE QUE LLAMAR UNA FUNCION

window.addEventListener('load', ()=>{
   var tiempo= setInterval(()=>{
       console.log('Este mensaje se muestra cada 3 segundos');
     
   }, 3000);
          

});