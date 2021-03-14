'use strict'

//BOM - BROWSER OBJECT MODEL (modelo de objeto del navegador)
//BOM NOS DA INFORMACION DE LA VENTANA DEL NAVEGADOR QUE SE ESTA EJECUTANDO, ES DECIR DONDE NOS ENCONTRAMOS 

//windows da la altura del NAVEGADOR  excluyendo barra de tareas y barra de titulo (si es visible) en pixeles

console.log(window.innerHeight);

console.log(window.innerWidth);

//screen da la altura real del dispositivo del MONITOR incluyendo barra de tareas y barra de titulo en pixeles

console.log(screen.height);   

console.log(screen.width);

//Para ver la ruta donde nos encontramos 

console.log(window.location);