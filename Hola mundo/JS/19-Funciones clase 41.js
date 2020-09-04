'use strict'
console.log("archivo js en uso")

/**
 *  FUNCIONES
 *  Funciones, es una agrupacion reutilizables de un conjunto de instrucciones 
 *  
 * 
 */

 /* Funcion sin parametro */
 // Definicion de la funcion 


 /* Sin Valor Retorno */
 function mensaje() {
     console.log("Hola soy la calculadora");
     console.log("Si soy yo");    
 }


 /* Con Valor Retorno */
 function mensajeVR() {
    /* Puede devolver un valor */
    return ( "Hola soy la calculadora" )
}
 
 /* Invocamos */  
 mensaje();
 
 /* Asognacion a una variale  */

 var resultado = mensajeVR();
 
 console.log("resultado ", resultado);
 
 // ************************************************************************************************

 /* Funcion con Parametro sin vlaor de retorno  */
 
 function calculadora ( numero1, numero2) {    
    console.log( "Suma: " + ( numero1 + numero2 ));
    console.log( "Resta: " + ( numero1 - numero2 ));
    console.log( "Multiplicacion: " + ( numero1 * numero2 ));
    console.log( "Division: " + ( numero1 / numero2 ));
}
  
calculadora(4,6);

/* Uso dentro de un bucle */

for ( var i = 1; i <= 10; i++) {
    console.log(" ********************************* ") 
    console.log(" Iteracion ", i ) ;
    calculadora(i,10);
}
  

/** 
 *  Parametros Opcionales
 */

function calculadoraOpc ( numero1, numero2, mostrar = false ) {    
    if ( mostrar == false) {
        console.log( "************************" );
        console.log( " Parametro Opcional " );
        console.log( "Suma: " + ( numero1 + numero2 ));
        console.log( "Resta: " + ( numero1 - numero2 ));
        console.log( "Multiplicacion: " + ( numero1 * numero2 ));
        console.log( "Division: " + ( numero1 / numero2 ));
    } else {        
        document.write( "************************ <br/>" );
        document.write( " Parametro Opcional <br/>" );
        document.write( "Suma: " + ( numero1 + numero2 ) + '<br/>');
        document.write( "Resta: " + ( numero1 - numero2 )  + '<br/>');
        document.write( "Multiplicacion: " + ( numero1 * numero2 ) + '<br/>');
        document.write( "Division: " + ( numero1 / numero2 ) + '<br/>');
    }
}

calculadoraOpc(4,6);

/**
 *  LLamr a una funcion dentro de otra 
 *  
 */

 function porConsola (numero1, numero2 ) {
    console.log( "************************" );
    console.log( " Sub funcion " );
    console.log( "Suma: " + ( numero1 + numero2 ));
    console.log( "Resta: " + ( numero1 - numero2 ));
    console.log( "Multiplicacion: " + ( numero1 * numero2 ));
    console.log( "Division: " + ( numero1 / numero2 ));
 }

 function porPantalla ( numero1, numero2 ) {
    document.write( "************************ <br/>" );
    document.write( " Sub funcion <br/>" );
    document.write( "Suma: " + ( numero1 + numero2 ) + '<br/>');
    document.write( "Resta: " + ( numero1 - numero2 )  + '<br/>');
    document.write( "Multiplicacion: " + ( numero1 * numero2 ) + '<br/>');
    document.write( "Division: " + ( numero1 / numero2 ) + '<br/>');
 }


 function subCalculadora ( numero1, numero2, salida = true) {
     if ( !salida ) {
       porConsola(numero1, numero2);     
     } else {
         porPantalla( numero1, numero2 );
     }
 };

 /* Invcamos */ 
 subCalculadora ( 4,6);

