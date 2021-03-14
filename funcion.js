'use strict'


function NombreFuncion(){
    return 'Hola soy la primera funcion';   //se llama desde la consola del navegador\
}                                           //IMPORTANTE: En la consola se coloca la funcion sin parentesis para se muestre toda la funcion
                                            //O se coloca con parentesis para se muestre solo lo que retorna la función


function MostrarMensaje(){
    for(var i=0;i<=5;i++) {
    console.log('Hola soy la segunda funcion ' + i); //se muestra directamente en la consola
    }                                           
}

NombreFuncion();
MostrarMensaje ();

