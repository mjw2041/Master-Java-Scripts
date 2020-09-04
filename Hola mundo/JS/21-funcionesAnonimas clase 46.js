'use strict'
console.log("archivo js en uso")

/**
 *  Funcione Anonimas
 *  son aquella que no tienen nombre
 * 
 *  CallBacks
 *  Es una funcion que llama a otra funcion adentro
 * 
 */

var pelicula = function( nombrePelicula ) {
    return "El nombre de la pelicula " + nombrePelicula;
}

console.log(pelicula("nombre"));

/**
 *  CallBacks 
 */

function sumame ( numero1, numero2, sumayMuestra, sumaPorDos) {
    var sumar = numero1 + numero2
    sumayMuestra ( sumar);
    sumaPorDos ( sumar );    
}

sumame ( 5, 7, 
    function ( dato) {
        console.log("La suma es: ", dato) ;
    },

    function ( dato) {
        console.log("El doble es: ", ( dato * 2)) 
    });

/* Funcion de Flecha */

sumame ( 5, 7, 
    ( dato) => {
        console.log("La suma es: ", dato) ;
    },

    (dato) => {
        console.log("El doble es: ", ( dato * 2)) 
    });

/* Variante */ 

sumame ( 5, 7, 
    dato => {
        console.log("La suma es: ", dato) ;
    },

    dato => {
        console.log("El doble es: ", ( dato * 2)) 
    });