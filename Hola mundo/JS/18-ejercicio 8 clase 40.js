'use strict'
console.log("archivo js en uso")

/**
 *  Calculadora 
 *  Pida por pantalla dos numero 
 *  Si metemos uno mal que lo vuelva a pedir
 *  En el cuerpo de la pagina, en una alerta y por la consola el resultado de  
 *  sumar restar multiplicar y dividir estas cifras
 * 
 *  SALTO LINEA
 *  ===========
 *  \n Salto de linea para usa en la consola o en la pantalla 
 * "<br/> Salto de linea para usar en la pagina WEB
 * 
 */

do {
    var numero1 = parseInt ( prompt ( "ingrese el primer numero"));
} while ( isNaN(numero1))

do {
    var numero2 = parseInt ( prompt ( "ingrese el segundo numero"));    
} while ( isNaN(numero2))

do {
    var signo =  prompt ( "ingrese el signo");
} while ( signo != '+' && signo != '-' && signo != '*' && signo != '/' ) 

if (signo == '+' ) {
   console.log( numero1 + ' ' + signo + ' ' + numero2 + ' = ' + ( numero1 + numero2 ) );
} else if ( signo == '-'){
    console.log( numero1 + ' ' + signo + ' ' + numero2 + ' = ' + ( numero1 - numero2 ) );
} else if ( signo == '*') {
    console.log( numero1 + ' ' + signo + ' ' + numero2 + ' = ' + ( numero1 * numero2 ) );
} else if ( signo == '/') {
    console.log( numero1 + ' ' + signo + ' ' + numero2 + ' = ' + ( numero1 / numero2 ) );
}

/*
  Solucion Video
*/
var resultado = " La suma es: " + ( numero1 + numero2) + "<br/>" + 
                " La Resta es: " + ( numero1 - numero2) + "<br/>" + 
                " La Multiplicacion es: " + ( numero1 * numero2) + "<br/>" + 
                " La Division es: " + ( numero1 / numero2) + "<br/>";
var resultado2 = " La suma es: " + ( numero1 + numero2) + "\n" + 
                " La Resta es: " + ( numero1 - numero2) + "\n" + 
                " La Multiplicacion es: " + ( numero1 * numero2) + "\n" + 
                " La Division es: " + ( numero1 / numero2) + "\n";

document.write (resultado);

alert( resultado2);

                  
