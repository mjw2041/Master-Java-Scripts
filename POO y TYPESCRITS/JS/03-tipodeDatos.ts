let cadena :string;

cadena = "Esto es un cadena";
console.log("cadena: " + cadena);

let edad :number = 18;
console.log("edad", edad);

let verdaderoFalso :boolean = true;
console.log("verdaderooFalso", verdaderoFalso);

let cualquiera : any = true
console.log("cualquiera", cualquiera);
cualquiera = 12;
console.log("cualquiera", cualquiera);

cualquiera = "Hola";
console.log("cualquiera", cualquiera);

var arreglo: Array<string> = [ 'A' , 'B', 'C', 'D' ];
console.log("Arreglo", arreglo);

var arregloAny: Array<any> = [ 'A' , 1, true ];
console.log("ArregloAny", arregloAny);

var arregloNumber: number [] = [ 12 , 1, 3 ];
console.log("ArregloNumber", arregloNumber);

var tipoCombinado: number | string =  12;
console.log("tipoCombinado", tipoCombinado);

tipoCombinado = "Hola mundo"
console.log("tipoCombinado", tipoCombinado);

/* Tipo de datos Personalizado */
type numstr = string | number;

var tipoDatosPer : numstr = 12;
console.log("tipoDatosPer", tipoDatosPer);

tipoDatosPer = "Hola Munds";
console.log("tipoDatosPer", tipoDatosPer);

/* LET VS VAR */

var numero1 = 10;
var numero2 = 20;
console.log("Antes del Bloque ", numero1, numero2);
{ 
    let numero1 = 15;
    var numero2 = 30;
    console.log("Dentro Bloque ", numero1, numero2);
}
console.log("Fuera Bloque ", numero1, numero2);





