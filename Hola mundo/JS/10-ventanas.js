'use strict'
console.log("archivo js en uso")

/**
 *  Alerta 
 */

 alert ( "Esto es un alerta");

 alert ( "Esto es mi texto");

 /**
  *  Confirmacion
  */

  var confirmacion = confirm("Estas seguro de querer confirmar ???")

  console.log ( "Su respuesta fue " + confirmacion );

  /**
   *  INGRESO DE DATOS 
   */

   var resultado = prompt( "Que edad tienes", 18);

   console.log("Su edad es ", resultado, " ", typeof( resultado)); /* String* */ 
   console.log("Su edad es ", parseInt(resultado), " ", typeof( parseInt(resultado))); /* String* */ 
