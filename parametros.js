'use strict'

var n1= prompt('Ingresa una palabra', 'Hola');
var n2= prompt('Ingresa tra palabra', 'como estas');


function UnirPalabras(primerapalabra, segundapalabra){ //creamos la funcion en general 

    var PalabrasUnidas= primerapalabra+' '+ segundapalabra;

    return PalabrasUnidas;

}

var resultado= UnirPalabras(n1,n2);  //luego llamamos dicha funcion y pasamos por parametros los datos que queremos en si 

console.log(resultado);