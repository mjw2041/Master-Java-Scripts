'use strict'
console.log("archivo js en uso")

/**
 * 
 *  Utilizando un bucle mostrar la suma y la media de los numero introducidos 
 *  hasta que el usuario introduzca un negativo
 */


 var suma = 0;
 var contador = 0;

 do {
    var numero = parseInt( prompt("introduce un numero hasta el que metas un negativo", 0));
    if ( isNaN(numero)) {
        numero = 0

    } else if ( numero >= 0 ) {
          suma += numero;
          contador ++;
          console.log("La suma es ", suma);
          console.log( "El Cantidad es " , contador );


    }
 } while (  numero >= 0);

 alert ("La suma es " + suma );
 alert( "El promedio es " + (suma / contador) );
