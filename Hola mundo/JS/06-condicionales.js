'use strict'
console.log("archivo js en uso")

/**
 *  La sentencia IF, permite comparar dos valores o variables 
 *  Operadores Relacionales
 *      Mayor : >
 *      Menor : <
 *      Mayor o igual: >=
 *      Menor o igual: <=
 *      Igual : == o === ( tambien evalua que el tipo de variable sea el mismo )
 *      Distinto : != 
 */

 /**
  *  Operadores
  *  AND --> &&
  *  OR  -->= ||
  *  Negacion --> ! 
  */

 var edad1 = 30;
 var edad2 = 12;

 if ( edad1 > edad2) {
    console.log(" edad1 es mayor que edad2");
 } else {
    console.log("edad2 es mayor que edad1")
 };

 var edad = 84;
 var nombre = "Maximiliano"

 if ( edad >= 18 ) {
    console.log(nombre, "tiene " , edad ," años, es mayor de edad");
    if ( edad <= 33) {
        console.log("Todavia eres millenial");
    } else if ( edad >= 80 ) {
        console.log("Eres un anciano");
    } else {
        console.log("Ya no eres millenial");
    };
 } else {
    console.log(nombre, "tiene " , edad ," años, es menor de edad");
 } 

 var anio = 2018;

 /// Negacion 
  if ( anio != 2016) {
     console.log("el año no es 2016 es realmente " + anio);
  }

/// AND  
if ( anio >= 2000 && anio <= 2020 && anio != 2018 ) {
   console.log( "Estamos en la era actual");
} else {
   console.log("Estamos en la era post moderna");
}

/// OR
if ( anio == 2008 || ( anio > 2017 && anio < 2019) ) {
   console.log( "El año acaba en 8");
} else {
   console.log( "El año no acaba en 8");
}
