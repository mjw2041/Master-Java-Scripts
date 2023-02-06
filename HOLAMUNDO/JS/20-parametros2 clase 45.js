'use strict'
console.log("archivo js en uso")

/**
 *   Parametros  REST y SPREAD 
 *   REST
 *   ...<nombre de Parametro> se almacenas los parametros se guardan en un array
 * 
 *    SPREAD
 * 
 * 
 */

 /*
   REST
 */
function listadosFrutas ( fruta1, fruta2, ...restoFrutas ) {
    console.log( "Fruta1: ", fruta1);
    console.log( "Fruta2: ", fruta2);
    console.log( "Restos Fruta2: ", restoFrutas);
}

listadosFrutas( "Naranja", "Manzana", "Sandia", "Pera", "Melon", "Coco");

/**
 *  SPREAD 
 *  Mando una array como una serie de parametros
*/

var frutas = [ "Naranjas", "Manzanas"]

listadosFrutas( ...frutas, "Sandia", "Pera", "Melon", "Coco");





