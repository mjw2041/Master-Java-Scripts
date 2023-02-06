'use strict'

console.log("archivo js funcionando")

/**
 *  Diferencia entre el VAR y LET
 *  VAR crea variables GLOBALES y tiene validez para todo el codigo
 *  LET crea variables LOCALES y solo tienen validez dentro del bloque donde fueron creadas.
 *      Si la variable se crea al comienzo del codigo cumple la misma funcion que VAR.
 */

/// VAR

 var numero = 40;
 console.log("numero " , numero);

 if (true) {
     var numero = 50;
     console.log("numero dentro del if ", numero);
 }

 console.log("numero final del codigo ", numero);

 /// LET 
 var texto = "Curso JAVA";
 console.log("valor variable texto ", texto);

 if (true) {
     let texto = "Curso Laravel 5"
     console.log("valor variable texto dentro del if(LET)", texto);
 }

 console.log("valor de texto fin del bloque ", texto);
