'use strict'
console.log("archivo js en uso")

/**
 *  Local Storage permite guardar informacion en el navagador durante la sesion
 *     localStorage.setItem( <clave>, <valor>)
 *     localStorage.getItem( < clave> );
 */

 /* Permite saber si el navegador es compatible con el local storage  */

 if ( typeof(Storage) != 'undefined') {
     console.log ( "Este navegador soporta LOCAL STORAGE");     
 } else {
    console.log ( "Este navegador NO soporta LOCAL STORAGE");     
 }

 /* Guardar Datos en el STORAGE */

 localStorage.setItem( "titulo", "Batman y Robin")

/* Obtener Datos del STORAGE */

var valorStorage = localStorage.getItem("titulo");
console.log("Valor almacenado en el LOCALSTORAGE", valorStorage);

var cajaPeliculas = document.querySelector("#peliculas");

var p = document.createElement("p");
p.append( valorStorage );
cajaPeliculas.append(p);     

/* Guardar un json u objeto en la STORAGE */

var usuario = { 
    nombre: "Weihmuller Maximiliano",
    direccion: "Paraguay 726 2 2",
    email: "mweihmuller72@hotmail.com"

}

localStorage.setItem("usuario", JSON.stringify(usuario));

/* Recuperar un OBJETO desde el STORAGE */ 
usuario = JSON.parse(localStorage.getItem("usuario"));
console.log(usuario);

var cajaDatos = document.querySelector("#datos");
var p1 = document.createElement("p");
p1.append("Nombre Usuario ", usuario.nombre);
cajaDatos.append(p1);

p1.append("  Direccion ", usuario.direccion);
cajaDatos.append(p1);

/* Remover datos del STORAGE */
localStorage.removeItem("usuario");
usuario = JSON.parse(localStorage.getItem("usuario"));
console.log("usuario fue removido" , usuario);

 




