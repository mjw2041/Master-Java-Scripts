'use strict'
console.log("archivo js en uso")

/**
 *  Document Object Model 
 * 
 *   document.getElementById --- > devuelve los atributos del id
 *   document.getElementById(nombre del elemento).innerHTML --- > devuelve el texto del HTML
 *   .innerHTML = Puedo modificar el texto
 *   .style  ---> cambiar el estilo
 *   .className ---> Cambiar el nombre
 * 
 *   document.querySelecto() --> seleccionar los atributo de un elemento
 *         (#nombreId)
 *         (.nombreId)
 *    Nota: Solo se puede seleccionar el primer elemento que busco
 * 
 *    document.getElementsByTagName('nombre tag') ---> devuelve en un array todos los elementos 
 *             del nombre tag ; 
 *    Nota: Selecciona todos los elementos
 * 
 *    document.getElementsByClassName("rojo"); -- Devuelbe un arrary con todos los elemento de la clase rojo
 * *    Nota: Selecciona todos los elementos
 * 
 *    Para seleccionar muchos elementos existe el método querySelectorAll, te dejo una referencia por aquí:
 *    https://developer.mozilla.org/es/docs/Web/API/Document/querySelectorAll
 */

 function cambiarcolor ( color ) {
     atributosmicaja.style.background = color;
 }

 /**
  *  Coseguir elemento por un id en concreto
  */
 /*var atributosmicaja = document.getElementById("micaja");*/
 var atributosmicaja = document.querySelector("#micaja");
 var textomicaja = document.getElementById("micaja").innerHTML;
 console.log(micaja);

 atributosmicaja.innerHTML = "Texto agregado desde JS";

 atributosmicaja.style.background = "RED";
 atributosmicaja.style.color = "WHITE";
 atributosmicaja.style.padding = "20px";
 atributosmicaja.className = "Hola";

 /**
  *  Conseguir elemento por su etiqueta 
  */

  var todosLosDivs = document.getElementsByTagName('div');
  console.log(todosLosDivs);

  /**
   *  acceder a un elemento
   */

var contenidoTag = todosLosDivs[2];
contenidoTag.innerHTML = "Contenido cambiado desde JS";
contenidoTag.color = "RED";
console.log(contenidoTag);

var valor;
var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");

for ( valor in todosLosDivs) {
       if ( typeof todosLosDivs[valor].textContent == 'string' ) {
           var parrafo = document.createElement("p");
           var texto = document.createTextNode( todosLosDivs[valor].textContent );
           parrafo.appendChild(texto);
           seccion.append(parrafo);                   
       }
}

seccion.append(hr)


 /**
  *  Conseguir elemento por su clase
  */

var elementoPorClase = document.getElementsByClassName("rojo");
var divAmarillos = document.getElementsByClassName("amarillo");

console.log(elementoPorClase);
console.log(divAmarillos);

/**
 *  acceder a un elemento
 */

 divAmarillos[0].style.background = "YELLOW";

 for ( var div in elementoPorClase) {
     if (elementoPorClase[div].className == "rojo") {
         elementoPorClase[div].style.background = "RED";
     } 
 }

 /* Selecionar por medio de un query selector */

 var id = document.querySelector("#encabezado");
 console.log(id);




