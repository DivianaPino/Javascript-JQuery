'use strict'

//FECHAS

var fecha= new Date();
var hora=fecha.getHours();
var minutos= fecha.getMinutes();
var segundos=fecha.getSeconds();

console.log(fecha);  //dos todo (fecha,hora con minutos y segundos)
console.log(hora);  //nos da la hora solamente
console.log(minutos); //nos da los minutos solamente
console.log(segundos); //nos da los segundos solamente


//PARA PASARLO A STRING

var fechaS= new Date();
var horaS=fecha.getHours();
var minutosS= fecha.getMinutes();
var segundosS=fecha.getSeconds();

//NOTA: DEBEMOS PASARLO A STRING PORQUE SINO LOS SUMA TODO YA QUE SON DATOS NUMERICOS

console.log(horaS+' ' + minutosS + ' ' + segundosS);  





