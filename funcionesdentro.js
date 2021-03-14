'use strict'


var n1= prompt('Ingresa una palabra', 'Una');
var n2= prompt('Ingresa tra palabra', 'Otra');


function MostrarConsola(primerapalabra, segundapalabra){ //creamos la funcion en general 

      console.log(primerapalabra+' '+ segundapalabra);

}

function EnDocumento(primerapalabra, segundapalabra){

    document.write(primerapalabra+' '+ segundapalabra);
}

function Mostrar (n1, n2, n3=false){
   if(n3==false){
        MostrarConsola(n1,n2);
   }else{
        EnDocumento(n1,n2);
   }

}

Mostrar(n1,n2,true);