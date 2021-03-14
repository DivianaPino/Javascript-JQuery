'use strict'

var n1= prompt('Ingresa una palabra', 'Hola');
var n2= prompt('Ingresa tra palabra', 'como estas');


function UnirPalabras(primerapalabra, segundapalabra, tercerapalabra=false){ //creamos la funcion en general 
  if(tercerapalabra== false){
      console.log( primerapalabra+' '+ segundapalabra);
  }else{
      document.write(primerapalabra+ ' ' + segundapalabra);  //document.write sirva para que imprima en el documento HTML Y NO en la consola
  }

}

UnirPalabras(n1,n2);  //el tercer parametro es OPCIONAL ya que esta definido como false

UnirPalabras(n1,n2,true); //si queremos cambiar su valor lo tenemos que colocarlo en el parametro