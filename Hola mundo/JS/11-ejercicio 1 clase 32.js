'use strict'
console.log("archivo js en uso")



/**
 *  Programa que nos pida dos numero y nos diga cual es el mayor, cual es el menor, son iguales
 *  PLUS: Si los nro no son numero o menores o iguales a cero (0) que los vuelva pedir
 *  isNaN -->  ntenta convertir el parámetro pasado a un número. 
 *           Si el parámetro no se puede convertir, devuelve true; en caso contrario, devuelve false.
 */


 var numero1 = parseInt(prompt("Introduce el primer numero", 0));
 var numero2 = parseInt(prompt("Introduce el segundo numero", 0));

 while ( numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {
    numero1 = parseInt(prompt("Introduce el primer numero", 0));
    numero2 = parseInt(prompt("Introduce el segundo numero", 0));
 }


console.log("numero 1 ", numero1, "numero 2 ", numero2 );
 if (numero1 == numero2) {
     console.log("el numero1 es igual al numero 2");
 } else if ( numero1 > numero2) {
     console.log("numero mayor es ", numero1);
     console.log("numero menor es ", numero2);

 } else {
    console.log("numero mayor es ", numero2);
    console.log("numero menor es ", numero1);
 }
