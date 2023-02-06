'use strict'
console.log("archivo js en uso")

/**
 *  Transformaciones de Texto
 */

 var numero = 444;
 var texto1 = "Bienvenido al curso de Javascripts de Victor Robles"
 var texto2 = "Es muy buen curso"
/**
 *   .toString()  ---> convierte un numero en string
 *   .toUpperCase ---> convierte todo a mayuscula
 *   .toLowerCase ---> convierte todo a minuscula
 *   .length      ---> Tamaño del texto
 *   +            ---> Concatenar Texto  
 *   .concat      ---> Concatenar Texto  
 *   
 *   Busqueda
 *   .indexOf     ---> Buscar una cadena dentro de otra  Devuelve la posicion
 *   .lastIndexOf  ---> Buscar la ultima coincidencia    Devuelve la posicion
 *   .search      ---> Buscar una cadena dentro de otra  Devuelve la posicion
 *   .match       ---> Buscar una cadena dentro de otra  Devuelve un aaray
 *                         poscion --> la palabra buscada
 * 
 *   .substr( desde, cantidad_caracteres) ---> saca la palabra que va desde hasta cantidad_Caracteres                          
 *   .charAt                              ---> Extrae una letra en particular
 * 
 *   .startsWith                          ---> Determina si un texto comienza con
 * 
 *   .endWith                             ---> Detemina si un texot termina con  
 * 
 *   .includes                            ---> Dtermina si una palabra Existe en un texto 
 * 
 *    Reemplazar 
 *    .replace                            ---> Reemplaza una palabra por otra en un texto
 *                                             solo lo hace en la primera ocurrencia 
 * 
 *    .slice                              ---> Corta el Strng desde la poscion indicada
 * 
 *    .split                              ---> Separa las palabras y lo coloca dentro de un array
 * 
 *    .Trim                               ---> Saca los espacion en blanco por delante o atras

 */   

 var dato = numero.toString();
 console.log(dato + " " + typeof dato);

 var mayuscula = texto1.toUpperCase();
 console.log( mayuscula);

 var minuscula = texto1.toLowerCase();
 console.log( minuscula);

 var cantidadCartacteres  = texto1.length;
 console.log( cantidadCartacteres );

 var concatenar = texto1 + ' ' + texto2;
 console.log( concatenar );

 var concatenar = texto1.concat(texto2);
 console.log( concatenar );

 var textoaBuscar = "El mejor curso de los curso";
 
 var busqueda = textoaBuscar.indexOf("curso");
 console.log( "Lo encontre en la posicion " + busqueda );

 var busqueda = textoaBuscar.lastIndexOf("curso");
 console.log( "La ultima la encontre en la posicion " + busqueda );

 var busquedaSearch = textoaBuscar.search("curso");
 console.log( "La ultima la encontre en la posicion " + busquedaSearch );

 var busquedaMatch = textoaBuscar.match(/o/g);
 console.log(busquedaMatch );

 var extraer = textoaBuscar.substr(0,5);
 console.log(extraer);

 var extraerLetra = textoaBuscar.charAt(5);
 console.log(extraerLetra);

 var empiezaCon = textoaBuscar.startsWith("El");
 console.log(empiezaCon);

 var terminaCon = textoaBuscar.endsWith("curso");
 console.log(terminaCon);

 var existePalabra = textoaBuscar.includes("curso");
 console.log(existePalabra);

 var textoReemplazado = textoaBuscar.replace("curso", "simposio")
 console.log(textoReemplazado);

 var separarString = textoaBuscar.replace(14, 22)
 console.log(separarString);

 var separarPalabras = textoaBuscar.split(" ")
 console.log(separarPalabras);

 var sacarBlanco = textoaBuscar.trim( sacarBlanco);
 console.log(sacarBlanco);