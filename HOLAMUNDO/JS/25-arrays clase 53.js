'use strict'
console.log("archivo js en uso")

/**
 *   Arrays
 *   Coleccion de datos que pueda contener una variabla
 *   
 *   .length ---> Cantidad de elemento de mi array
 *   .find   ---> Permite buscar el elemento 
 *   .indexOf ---> Devuelve el elemento
 *   .some    ---> devuelve true si existen valores que cumplen con una condicion
 */

 var nombre = "Maximiliano"  /// Un solo valor
 /**
  *  LLenado
  */

 var nombres = [ "Maximiliano", "Pedro" ,"Juan", 52, true, [ 1,2,3,4] ]  /// Un solo valor

 var lenguajesProgramacion = new Array ( "PHP", "GO", "JAVA", "C")
/**
 *  Visualizar todo el array
 */
 
 console.log(nombres);
 console.log(lenguajesProgramacion);

 /**
  *  Visualizar un solo elemento
  */

  console.log(nombres[1]);

  var cantidadElemento = nombres.length;
  console.log( cantidadElemento);
 
  var queElementoQueres = parseInt( prompt( "Que elemento queres ?? ", 0));

  if ( queElementoQueres > nombre.length ){
      console.log("El numero debe ser menor que ", nombres.length);
  } else {

      alert ( "El elemento seleccionado es: " + nombres[queElementoQueres]);      
  }
  
   document.write( `<h1> Lenguajes  de programacion del 2018</h1> `)
   document.write( `<h2> Metodo Comun  </h2> `)
   
   document.write("<ul>"); 

   for ( var i = 0; i < lenguajesProgramacion.length; i++){
       document.write("<li>" + lenguajesProgramacion[i] + "</li>")      
    }

    document.write( `<h2> Metodo For Each </h2> `)
    
    lenguajesProgramacion.forEach( (elemento, indice, arreglo) => {
        console.log(arreglo); 
        document.write("<li>" + indice + " - " + elemento + "</li>")
    });  

    document.write( `<h2> Metodo For IN </h2> `)

    for ( let indice in lenguajesProgramacion) {
        document.write("<li>" + indice + " - " + lenguajesProgramacion[indice] + "</li>")
    }
    
    document.write("</ul>"); 

    /**
     *  Busqueda 
     */


     var busqueda = lenguajesProgramacion.find ( function (lenguaje){
         return lenguaje == "PHP";
     })
     console.log("Elemento encotrato: " + busqueda);

     var busquedaFuncionFlecha = lenguajesProgramacion.find ( (lenguaje) => {
        return lenguaje == "PHP";
    })
    console.log("Elemento encontrato funcion flecha: " + busquedaFuncionFlecha);

    var busquedaFunFlechaCorta = lenguajesProgramacion.find ( lenguaje =>  lenguaje == "PHP" );
    console.log("Elemento encotrato Corto: " + busquedaFunFlechaCorta);

    var indiceArray = lenguajesProgramacion.findIndex ( (lenguaje) => {
        return lenguaje == "GO";
    })

    console.log("Indices encontrado: " + indiceArray);

    var precios = [ 10, 20, 30, 40];
    var valoresCumple = precios.some ( (precio) => {
        return  precio >= 100;
    })

    console.log("Hay valores que cumplen con la condicion: " + valoresCumple);




