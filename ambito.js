//ÁMBITO DE LAS VARIABLES O CICLO DE VIDA (donde nace y muere una variable)
//las variables que se definen dentro de una function solo viven dentro de dicha funcion
'use strict'

var global= 'funcion global xd';

function MostrarConsola(){
    var variable_funcion='Variable dentro de la funcion';
    console.log(global);
    console.log(variable_funcion);
}

MostrarConsola();

console.log(variable_funcion); //Esta variable DARA ERROR porque no existe (no puede ser utilizada) afuera de la funcion donde fue definida.
console.log(global); //Esta si porque esta fuera de una funcion (existe en todo el codigo en general) 
                     //Por lo tanto puede ser llamada dentro de otras funciones