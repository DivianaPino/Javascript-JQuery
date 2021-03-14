'use strict'

var edad=20;
var texto='';

switch(edad){

   case 20:
      // texto= 'tiene ' + edad + ' años';
      texto= 'Eres mayor de edad';
   break; // el break es para que se detenga si cumple con la condicion y no siga comparado con las otras

   case 17:
       texto= 'No tienes 18 años';
   break;

   //si no cumple con ninguna de las condiciones
   default:  
       texto= 'Parece que no tienes edad';

}

console.log(texto);

