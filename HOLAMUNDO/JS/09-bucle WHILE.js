'use strict'
console.log("archivo js en uso")

/**
 *  Bucle WHILE 
 *  Es un bucle con un indeterminada cantidad de veces
 */

 var year = 2018;

 while ( year <= 2050){
     year ++;
     console.log("Estamos en el año " + year );
 }

 console.log("*** FIN ***" );


 var year = 2050;

 while ( year != 2018){
     year --;
     console.log("Estamos en el año " + year );     
 }

 /**
  *  DO WHILE
  */

  var hasta = 0;
  do {
    alert ( "TODAVIA NO ES IGUAL A 20");
    hasta = 20;

 } while ( hasta != 20 );
 alert ( "AHORA SI");

/**
 *  break corta la ejecucion del bloque
 */
 var numero = 0;

 while ( true ){
     numero ++;
     if ( numero > 100 ){ 
         break;
     }
     console.log("Nro: " + numero );     
 }
