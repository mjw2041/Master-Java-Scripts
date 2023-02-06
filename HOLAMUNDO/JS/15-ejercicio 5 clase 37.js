'use strict'
console.log("archivo js en uso")

/**
 *  Mueste todos los numero divisores de un numero  que se introduce en prompts
 */

 var numero = parseInt( prompt( "Introduce un numero ", 1)) ;
 var cantidadDividores = 0;

 for ( var i = 0; i <= numero; i++ ) {
     if ( numero % i == 0 ){
         console.log(i);
         cantidadDividores ++
     }        
    };
    
    if (cantidadDividores <= 2 ) {
        console.log("El numero es primo")
    }
