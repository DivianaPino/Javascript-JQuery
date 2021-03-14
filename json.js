'use strict'

//JSON: Es un formato de archivo

var persona= {
    edad:20,
    altura:1.97,
    peso:70,

}

console.log(persona);

// Para acceder a sus propiedades:

console.log(persona.edad);
console.log(persona.altura);
console.log(persona.peso);


//----ARRAYS DE OBJETOS JSON: VA A CONTENER VARIOS OBJETOS JSOSN

var coches=[
    {marca: 'SEAT', color: 'rojo'},
    {marca: 'BMW', color: 'negro'}

]

//acceder a las propiedades de los JSON en el  arrays:

//1)para que nos muestre todos los coches:

console.log(coches);

//2) Para que nos muestre las propiedades de cada coche

console.log(coches[0].marca); //nos mostrara la marca del coche que esta en la posición 0


