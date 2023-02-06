'use strict'
console.log("archivo js en uso")

/**
 *  Plantillas
 *  Se puede escibir grandes cantidades de texto respetando los espacios
 *  dentro de ${} se pueden pner la variables
 */

 
 var nombre = prompt("Ingrese su nombre");
 var apellido = prompt("Ingrese su apellido");

 var texto = "Su nombre es " + nombre + " <br/> Su apellido es " + apellido;
 document.write(texto);

 var plantilla = `
     <h1> Hola que tal</h1>
     <h2> Tu nombre es ${ nombre } </h2>
     <h2>y tu apellido es ${ apellido }</h2>     
 `


