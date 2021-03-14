'use strict'
$(document).ready(function(){

var parrafo = document.getElementById('parrafo');
console.log(parrafo);


console.log($('.parrafo'));
var parrafos=$('.parrafo');
$('.parrafo').html('Texto cambiado');
$('.parrafo').css('font-size', '45px');
console.log(parrafo[0].textContent);






});