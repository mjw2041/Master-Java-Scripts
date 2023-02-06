'use strict'
console.log("archivo js en uso")

/**
 *  Que  nos diga si un numero es par p impar
 *  1 ventana prompt
 *  2 Si no es valido que lo vualva a pedir
 */

 do {
     var numero = parseInt( prompt( "Ingrese un numero ", 0));
 } while ( isNaN(numero))
 
 if ( numero % 2 == 0 ) {
    console.log ("El nrumero " ,  numero , "es par");    
 } else { 
    console.log ("El nrumero " ,  numero , "es impar");    
}
 

