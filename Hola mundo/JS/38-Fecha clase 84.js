'use strict'
console.log("archivo js en uso")

/*
  Fechas
*/

/* Crea variable DATE con la fecha de hoy*/

var hoy = new Date(); 

console.log( "Hoy es : " + hoy);

/* Sacar el año de la fecha 
   getYear ---> el año
   getFullYearr ---> el año completo
   getMonth ---> el mes
   getDay ---> el dia
   getHours ---> el dia
   getMinutes ---> los minutos
*/
var year = hoy.getFullYear();
var month = hoy.getMonth();
var day = hoy.getDay();
var hora = hoy.getHours();
var minutes = hoy.getMinutes();

var textoHora = ` 
    El año es: ${ year }
    El mes es: ${ month }
    El dia es: ${ day }
    El hora es: ${ hora }
    Los minutos son: ${ minutes }
    `

console.log(textoHora);


/**
 *  Funciones Matematicas
 * Random ---> Numero aleatorio
 * ceil ---> Le sacamos los decimales
 */

 var nroAleatorio = Math.ceil(Math.random()*1000);

 console.log(nroAleatorio);

 