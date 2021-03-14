'use strict';

//la PROGRAMACION ORIENTADA OBJETO NO ES UNA PARTICULARIDAD DE JAVASCRIPT SINO DE OTROS LENGUAJES DE ALTO NIVEL
//SINO QUE DESDE ECMAScript 6 JAVASCRIPT ESTE PARADIGMA 

//------------------------------------------
//CREAMOS NUESTRO OBJETO


function Persona(edad,altura,peso){

//Para acceder a las propiedades de dicho objeto:
   this.edad=edad;  //esto es igual que decir Persona.edad
   this.altura=altura;
   this.peso=peso;


// tambien colocamos sus funciones

  this.caminar= () =>{
    console.log('Esta persona esta caminando');
  }

  this.sentarse = ()=>{
    console.log('la persona esta sentada');
  }
}

//para darle valores a dicho objeto debemos INSTANCIAR, para esto hacemos lo siguiente:

//1) para instanciar el objeto con sus caraterisiticas:

    var Manuel= new Persona(21,1.70,60);
    var Luisa= new Persona(25,1.80,70);

//2) para instanciar sus acciones o metodos:
    
   console.log(Manuel.caminar());
   console.log(Luisa.sentarse());


