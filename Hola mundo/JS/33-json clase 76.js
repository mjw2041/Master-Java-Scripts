'use strict'
console.log("archivo js en uso")

/**
 *  JSON JavaScript Onbject Notatio
 */

 var pelicula = {
     titulo: 'Bataman vs Superman',
     year: 2017,
     pais: 'E.E.U.U'
 }

 /* Muestra el objeto */
 var peli = pelicula;
 console.log(peli);

 /* Muestra un atributo del objeto */

 var titulo = pelicula.titulo;
 console.log(titulo);

 /* Cambiar un valor del atributo */
 
 pelicula.titulo = "Matrix";
 console.log(pelicula);

 /* ARRAY JSON */

 var peliculas = [
     pelicula,
     { titulo: '1917', year: 2020 , pais: 'E.E.U.U' }
 ]
 console.log(peliculas);

 /* Recorrer el array */

 var index;
 var cajaPeliculas = document.querySelector("#peliculas");
 for ( index in peliculas) {     
     var p = document.createElement("p");
     p.append( index + ". " + peliculas[index].titulo + " Filmada en " + peliculas[index].year);
     cajaPeliculas.append(p);     
 }

