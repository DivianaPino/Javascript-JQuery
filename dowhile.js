'use strict'

// CICLO DO WHILE: se utiliza cuando no sabemos el numero de iteraciones
// el ciclo Do while por lo menos se ejecuta una vez en cambio los bucles 
//for y while se pueden ejeuctar 0 veces

var dato =1

do{//has esto
    console.log('El valor de dato es: ' + dato);
    dato ++;

}while(dato <= 5); //miestras se cumpla esta condicion

console.log('Salimos del bucle dowhile');