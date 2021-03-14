//MANIPULACIÓN DEL DOM EN JAVASCRIPT

'use strict'

// DOM- DOCUMENT OBJECT MODEL (MODELO DE OBJETOS DEL DOCUMENTO)

//---------EJEMPLO ACCEDIENDO AL ELEMENTO POR SU ID-------------
//el id solo puede ser utilizado por un solo elemento 
var div1= document.getElementById('div1');  //nos muestra el contenido del elemento que tiene la Id: div1 en el DOM (ARCHIVO INDEX.HTML), 
                                            //document se refiere al documento DOM
                                            //getElementById : muetra el contenido del elemento que le corresponda la 'id' que se le esta pasando. 
console.log(div1);


// ---------EJEMPLO ACCEDIENDO AL ELEMENTO POR SU CLASE------------------------------------------------
//las clases pueden se utilizadas por varios elementos

var parrafo1= document.getElementsByClassName('parrafo1');
console.log(parrafo1);



//----------- EJMPLO DE COMO MODIFICAR LOS ELEMENTOS DEL DOM-----------------

var div2= document.getElementById('div1');  
div2.innerHTML='texto cambiado desde el JAVASCRIPT';


var parrafo2= document.getElementsByClassName('parrafo1');
parrafo2[1].innerHTML='texto cambiado';


//-----------CAMBIAR EL ESTILO DE LOS ELEMTOS DEL DOM-------------

div2.style.fontSize= '25px';

