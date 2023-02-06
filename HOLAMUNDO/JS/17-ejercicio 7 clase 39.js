'use strict'
console.log("archivo js en uso")

do {
    var numero = parseInt ( prompt( " De que numero quieres la tabña ??"));
} while ( isNaN(numero));

console.log( " **** TABLA DE MULTIPLICACION **** ");
document.write ("<h1> Tabla del " + numero + "</h1>");

for ( var i = 0; i <= 10; i++) {
    console.log(numero + " X " + i + " = " + (numero * i) );
    document.write( numero + " X " + i + " = " + (numero * i) +"<br/>" )
}    

console.log( " **** FIN **** ");
 /**
  *  TODAS LAS TABLAS  
*/

for (var j = 0; j <= 10; j++) {
    document.write ("<h1> Tabla del " + j + "</h1>");

    for ( var i = 0; i <= 10; i++) {
        console.log(j + " X " + i + " = " + (j * i) );
        document.write( j + " X " + i + " = " + (j * i) +"<br/>" )
    }    
}