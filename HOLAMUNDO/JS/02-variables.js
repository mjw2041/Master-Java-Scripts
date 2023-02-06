/**
 * use strict obliga a que el codigo generado sea mas estricto en cuanto a la escritura
 * por ejemplo requiere que la defincion de la variables sea con la palabra reservada var
 * y se activan nuevas funcionalidades 
 */

'use strict'

// Comentario una Linea 
/**
 *   Comenatario Multilinea
 */
/**
 *  Variable es un contenedor de informacion
 */
 
 console.log("archivo js en uso")
// Definicion de variable 
 var pais = "España";
 var continente = 'Europa';
 

 // Definicion variables usando el LET
 let antiguedad = 2019;
 
 // concatenar variables caracter (+)
 var paisycontinente = pais + ' ' + continente

 // Reasignar el valor de variable
 pais = "Argentina"
 continente = "Latinoamerica"


// Mostrar el valor de la variable
 console.log(pais, " - ", continente, " - ", antiguedad);
 alert(paisycontinente);
