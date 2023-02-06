'use strict'
console.log("archivo js en uso")

/**
 *   Tarea
 *  1-.  Pida 6 numero por pantalla  y los mesta en un array
 *  2-. Mostrar el array en el cuerpo de la pagina y en la consola
 *  3-. Ordenarlo y mostrarlo
 *  4-. Invertir el orden y mostrarlo
 *  5-. Mostrar cuantos elementos tiene el array
 *  6-. Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra  y su indice 
 *  ( Se valora el uso de las dos funciones )
 */

 var numeros = [];
 /* var numeros = new Array(6);*/

 var numeroOrdenadoAsc = [];
 var numeroOrdenadoDes = [];

 var numeroIngresado = 0;
 var tamanoArray = 0;

 function Mostrar ( arregloaMostrar, titulo ) {
    document.write ("<h2> " + titulo + " </h2>");
    console.log(" Ordenamiento Ascendente ")
    arregloaMostrar.forEach( (elemento, indice) => {    
        document.write("<li>" + indice + " - " + elemento + "</li>")
        console.log( indice + " " + elemento );
    });  
 }

 
 for ( var i = 0; i <= 5; i++) {
    numeroIngresado = parseInt( prompt ( "Que numero quiere ingresar en la posicio " + i , i) );
    numeros.push(numeroIngresado);
    /* Otra forma */
    /* numero[i] = = parseInt( prompt ( "Que numero quiere ingresar en la posicio " + i , i) ); */
 }

document.write ("<h1>" + " Ejercicio ARRAY " + "</h1>"); 
Mostrar(numeros, " Array Ingresado ");

numeroOrdenadoAsc = numeros.sort();
Mostrar(numeroOrdenadoAsc, "  Ordenamiento Ascendente ");

numeroOrdenadoDes = numeros.reverse();
Mostrar(numeroOrdenadoDes, " Ordenamiento Descendente ");

tamanoArray = numeros.length;
document.write( "El array tiene " +  tamanoArray + "</br>");
console.log( "El array tiene " +  tamanoArray );

var numeroBuscar = parseInt( prompt( "Ingrese el nro a buscar", 0));

var posicion = numeros.findIndex ( (numero) => {
    return numeroBuscar == numero;
})

if (posicion != - 1) {
    console.log("El numero se encuentra en la posicion " + posicion);
    document.write("El numero se encuentra en la posicion " + posicion + "</br>") ;
} else {
    console.log("El numero no fue encontrado");
    document.write("el numero no fue encontrado" + "</br>");
}

var loEncontre = numeros.some ( (numero) => {
    return  numero == numeroBuscar;
})

console.log("Encontre el numero: " + loEncontre);
document.write("Encontre el numero " + loEncontre + "</br>") ;

