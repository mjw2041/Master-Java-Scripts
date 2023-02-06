'use strict'
console.log("archivo js funcionando");

// OPERADORES 
var numero1 = 38;
var numero2 = 15;

var resultado = numero1 / numero2;
/**
 *  el operador % muestra el resto de una division
 */

var resto = numero1 % numero2;


console.log("el resultado de la division: ", resultado);
console.log("el resto de la division: ", resto);

/**
 *  TIPO DE DATOS
 *  ==============
 *  BOOLEAN
 *  CADENA DE TEXTO
 *  NUMERICO
 *  FLOAT --> NUMERICO FLOTANTE
 */
 
 var entero = 40;
 var cadenaTexto = "cadena 'de' texto";
 var verdaderooFalso = true;
 var flotante = 5.25;

 /**
  *  FUNCIONES DE CONVESION
  *     Number --- String to Number ( decimal, entero, flotante)
  *     parseInt --- String to Number Entero
  *     parseFloat --- String to Number flotante
  *     string     --- Numerico a String
  * 
  *     typeof --- Indica de que tipo es la variable
  */

  var snumero = "12"
  var numero = Number(snumero);
  console.log("numero", numero);

  console.log(String(numero) + 4);

  console.log("numero es del tipo ", typeof(numero));
  console.log("snumero es del tipo ", typeof(snumero));






