// FUNCIONES FLECHA O ARROW FUNCTIONS
// ES UNA MEJORA DE LA FUNCIONES ANONIMAS O CALLBACKS
'use strict'

function sumar (n1,n2, fun){ //fun es una function
    var suma= n1 + n2;
    fun(suma);
    return suma;
};

 sumar(5,7, d =>{  //aqui en d=> es igual que colocar  function(d) recibimos el parametro que nos retorna la funcion JEFA, en este caso es SUMAR
     console.log('La suma es:' + d);
     console.log('La multiplicación es:' + d * 2);
 });


