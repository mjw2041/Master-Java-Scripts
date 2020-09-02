'use strict'
console.log("archivo js en uso")

/**
 *  Mostrar todos los numero impares que se encuentran entre dos numero ingresado
 *  % --> Resto de la operacion
 */

var numero1 = parseInt(prompt( "Introduce el primer numero ", 0));
var numero2 = parseInt(prompt(" Introduce el segundo nuemero", 0));

while ( numero1 < numero2) {
    numero1 ++;
    if ( (numero1%2) != 0 ) {
        console.log( "El numero " + numero1 + "es impar");
    }
}

