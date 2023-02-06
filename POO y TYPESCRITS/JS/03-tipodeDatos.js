var cadena;
cadena = "Esto es un cadena";
console.log("cadena: " + cadena);
var edad = 18;
console.log("edad", edad);
var verdaderoFalso = true;
console.log("verdaderooFalso", verdaderoFalso);
var cualquiera = true;
console.log("cualquiera", cualquiera);
cualquiera = 12;
console.log("cualquiera", cualquiera);
cualquiera = "Hola";
console.log("cualquiera", cualquiera);
var arreglo = ['A', 'B', 'C', 'D'];
console.log("Arreglo", arreglo);
var arregloAny = ['A', 1, true];
console.log("ArregloAny", arregloAny);
var arregloNumber = [12, 1, 3];
console.log("ArregloNumber", arregloNumber);
var tipoCombinado = 12;
console.log("tipoCombinado", tipoCombinado);
tipoCombinado = "Hola mundo";
console.log("tipoCombinado", tipoCombinado);
var tipoDatosPer = 12;
console.log("tipoDatosPer", tipoDatosPer);
tipoDatosPer = "Hola Munds";
console.log("tipoDatosPer", tipoDatosPer);
/* LET VS VAR */
var numero1 = 10;
var numero2 = 20;
console.log("Antes del Bloque ", numero1, numero2);
{
    var numero1_1 = 15;
    var numero2 = 30;
    console.log("Dentro Bloque ", numero1_1, numero2);
}
console.log("Fuera Bloque ", numero1, numero2);
