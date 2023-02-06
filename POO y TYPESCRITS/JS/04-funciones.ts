console.log ( "clase 155 Funcionando");

/*

( numeroRecibido = 12) 12 es el valor por defecto
*/

function getNumero ( numeroRecibido = 12): string {    
    return "El numero recibido es: " + numeroRecibido;
}

console.log(getNumero(15));
