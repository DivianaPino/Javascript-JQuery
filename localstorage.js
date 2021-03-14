'use strict'

//localstorage: Es una propiedad que permite a los sitios y aplicaciones JS guardar pares clave  valor en un navegador web, es decir
//que sus datos persitan en el navegador incluso despues de que se cierre la ventana del navegador.


//COMPROBAR SORPOTE : PARA SAVER SI EL USUARIO TIENE LOCALSTORAGE EN SU NAVEGADOR

if(typeof (Storage)){
    console.log('Disponible');
}else{
    console.log('No Disponible');
}

localStorage.setItem('clave', 'texto o valor de esta clave');  //le pasamos primero la clave y luego el valor

localStorage.setItem('edad', 25);  //le pasamos primero la clave y luego el valor


//PARA VER EL TEXTO QUE CORRESPONDE UNA CLAVE

var valor= localStorage.getItem('clave');
console.log(valor);

//OBJETO JSON 
//NOTA: CUANDO SE DECLARAN VAN CON CORCHETES {}

var persona= {
    edad: 37,
    nombre: 'Manuel',
}

//----GUARDAR el JSON CREADO EN EL LOCALSTORAGE:----
//le colocamos la clave, por ejemplo 'persona' y
//le pasamos el objeto JSON 
//NOTA: El Objeto JSON debemos pasarlo a un texto plano
//y esto se hace con la clase JSON y el metodo stringify
//Ejemplo: JSON.stringify(nombredelObjetoJSON)

localStorage.setItem('persona', JSON.stringify(persona)); //JSON es para trabajar con datos JSON Y stringify es pasar de JSON a STRING
//---RECUPERAMOS LOS DATOS JSON------
//debemos parsearlo otra vez a tipo JSON

var per= JSON.parse(localStorage.getItem('persona')); //le pasamos la clave del JSON que vamos a recuperar

//accedemos a las propiedades del objeto JSON
console.log(per.nombre);
