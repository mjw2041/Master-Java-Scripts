'use strict'
console.log("archivo js en uso")

/**
 *  Transformaciones de Texto
 */

 var numero = 444;
 var texto1 = "Bienvenido al curso de Javascripts de Victor Robles"
 var texto2 = "Es muy buen curso"
/**
 *   .toString() --->   convierte un numero en string
 *   .toUpperCase ---> convierte todo a mayuscula
 *   .toLowerCase --->  convierte todo a minuscula
 *   .length
 */ 

 var dato = numero.toString();
 console.log(dato + " " + typeof dato);

 var mayuscula = texto1.toUpperCase();
 console.log( mayuscula);

 var minuscula = texto1.toLowerCase();
 console.log( minuscula);

 var cantidadCartacteres  = texto1.length;
 console.log( cantidadCartacteres );