'use strict';

 //let cambia el valor de las variable solo en el bloque en donde se encuentra. En cambio 'var' cambia el valor 
 //en todo el script

 //EJEMPLO

var numero=25; //declaramos la variable con valor numerico 25

if(true){

    let numero= 40;  //aqui la variable es 40
    console.log(numero);
}

console.log(numero); //aqui vuelve a ser 25 