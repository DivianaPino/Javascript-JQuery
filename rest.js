'use strict'

//Parametros REST

function ListadoPaises(p1,p2, ...p){ //...p con esto le indicamos al compilador de javascript que este es un parametro rest
    console.log(p1);                 // y que podemos introducir la cantidad de parametros que queramos y Javascript lo va a formatear dentro de un array
    console.log(p2);
    console.log(p);
}

ListadoPaises('España', 'Alemania', 'Inglaterra', 'Suiza');