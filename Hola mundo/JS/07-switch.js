'use strict'
console.log("archivo js en uso")

var edad = 18;
var imprime = "";

switch ( edad)  {
    case 18:
        imprime = "Acabas de cumplir 18"
        break;
    case 25:
        imprime = "Eres un adulto"    
        break;

    case 25:
        imprime = "Crisis de los 40"        
        break;
    case 80: 
        imprime = "Eres un anciano"    
        break;
    default:
        imprime = "Edad Neutra";
        break;    
}    

console.log (imprime);

