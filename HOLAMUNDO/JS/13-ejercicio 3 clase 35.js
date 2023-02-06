'use strict'
console.log("archivo js en uso")

/**
 *  Hacer un programa que muestre todos los numero entre dos numero 
 *  introducidos por el usuario
 * 
 *  DOCUMENT.WRITE --> permite ingresar un texto dentro de la pagina WEB
 * 
 */

 var numero1 = parseInt(prompt( "Introduce el primer numero ", 0));
 var numero2 = parseInt(prompt(" Introduce el segundo nuemero", 0));

 document.write ( "<h1> DE " + numero1 + " a " + numero2 + " estan los numeros: </h1>")
 for ( var i = numero1; i <= numero2; i++ ){
    document.write(i + "<br>");
 } 
