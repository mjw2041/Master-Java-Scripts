'use_strict'

var params = process.argv.slice(1);
console.log (params);

var params = process.argv.slice(2);

var numero1 = parseFloat(params[0]);
var numero2 = parseFloat(params[1]);

var plantilla = ` 
La suma es: ${numero1 + numero2}
La multiplicacion es: ${numero1 * numero2}
La multiplicacion es: ${numero1 / numero2}
La multiplicacion es: ${numero1 - numero2}
` 


console.log (plantilla);

console.log("Hola Mundo con JS")