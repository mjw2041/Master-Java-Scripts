'use strict'
console.log("archivo js en uso")

var categorias = [ "Accion", "Terror", "Comedia"];
var peliculas = [ "Star Ward", "Avenger", "Pacific Rim"];

var cine = [ categorias, peliculas];

/* Muestro todo el array  */

console.log(cine);

/**
 *  Muestro una fila
 */

console.log(cine[0]);

/**
 *  Muestro un determinado elemento
 */
 
 console.log(cine[0] [1]);

 /* Operaciones con array */

 /**
  *     Operaciones con array   
  *    
  *     push() ---> Añadir un elemento 
  *     pop()  ---> Elimina el uttimo Elemento del arreglo
  *     = underfined --- Se coloca como indefinido un posicion oea que se que borrar el contenido
  *     .splice(desde, cantidad) ---> borra los elemento de un array desde "desde", la cantidad de registro "cantidad"
  *     .join --> array a Texto separado por coma
  *     .split(separador columna) --+> texto a array 
  *     .sort  ---> Ordenamiento  ascendente
  *     .reverse ---> Ordenamiento  descendente
  * 
  * */

  /*
  var tuPelicula = prompt( "Ingresa tu pelicula ( X = TERMINAR ): ");
  while ( tuPelicula != "X"){
      peliculas.push( tuPelicula);
      var tuPelicula = prompt( "Ingresa tu pelicula ( X = TERMINAR ): ");
  }
  */
  /**
   *  Otra variante 
  */
  
   do {
        var tuPelicula = prompt( "Ingresa tu pelicula ( X = TERMINAR ): ");
        peliculas.push( tuPelicula);
   } while ( tuPelicula != "X")

   peliculas.pop();
   console.log( peliculas);
  
   peliculas[0] = undefined;
   console.log(peliculas);

   peliculas.push( "IronMan");
   var indice = peliculas.indexOf("IronMan");
   console.log( indice);

   if (indice > - 1) {
       peliculas.splice(indice, 1);
   }

   console.log( peliculas);

   var textoPeliculas = peliculas.join();
   console.log( textoPeliculas );

   var texto = "possicion 0, posicion 1, posicion 2, posicion 3";
   var textoArray = texto.split(", ");
   console.log(textoArray);

   var ordenadoAscendente = peliculas.sort();
   console.log(ordenadoAscendente)

   var ordenadoDescendente = peliculas.reverse();
   console.log(ordenadoDescendente);



