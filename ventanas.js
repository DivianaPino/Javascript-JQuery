'use strict'

//alert: nos muestra un mensaje en pantalla

//TIPOS DE ALERT:
//------------------PRIMER EJEMPLO---------------------------------
//ventana normal

alert('Mensaje de Alerta');

//------------------OTRA---------------------------------
//Ventana de Confirmación : Alerta con opciones SI y NO dependiendo de la respuesta se ejecuta una accion
var result=confirm('Cuidado que vas a dañar la PC'); 
if (result=true){
    alert('Tu pulsaste true jeje')
}else{
    alert('Tu pulsaste false jeje')
}

//alert(result);
 //si pulsa aceptar se mostrar true por ventana y si pulsa cancekar se mostrara false.

//-----------------OTRA-----------------------------

//Ventana de ingreso de datos

var res= prompt('Enserio quieres dañar la PC', 'Claro que si') //recibe dos parametros 1: lo que le estamos preguntando y 2: Respuesta por defecto
alert('has Dicho que' + res); //el usuario modifica el texto por defecto y se imprime por ventana


