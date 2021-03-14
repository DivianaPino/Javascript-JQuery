//FUNCIONES ANONIMAS O CALLBACKS
//

'use strict'

function sumar (n1,n2, multiplicar){ //Multiplicar es una function
    var suma= n1 + n2;
    multiplicar(suma);
    return suma;
};

 sumar(5,7, function(d){  //aqui en function(d) recibimos el parametro que nos retorna la funcion JEFA, en este caso es SUMAR
     console.log('La suma es:' + d);
     console.log('La multiplicación es:' + d * 2);
 });
