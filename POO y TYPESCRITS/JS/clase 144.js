'use strict'
console.log("archivo js en uso")

/*
   Definicion de un objeto por medio de un JSON
*/
var Bicicleta = {
    color: "rojo",
    modelo: "BMX",
    freno: "De Disco",
    velocidadMaxima: "60k",
    /* Defincion del metodo */
    cambiarColor : function( nuevoColor) {
        Bicicleta.color = nuevoColor;
        this.color;        
    }
};

/* 
   Mostrar por pangtalla en Objeto
*/
console.log( Bicicleta);

/* 
   Mostrar un atributo del Objeto
*/
console.log( "Modelo: " + Bicicleta.modelo);

/*
   Utilizacion Metodo 
*/
console.log( "Color Anterior: " + Bicicleta.color);
Bicicleta.cambiarColor("Verde");
console.log( "Color Nuevo: " + Bicicleta.color);
