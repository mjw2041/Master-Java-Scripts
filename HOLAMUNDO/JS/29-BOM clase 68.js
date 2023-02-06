'use strict'
console.log("archivo js en uso")

/**
 *  BOM --> Browser Object Model
 *  window.innerHeight --- > Alto de la Ventana
 *  window.innerWidth  --- > Ancho de la Ventana
 *  screen.innerHeight; --> Alto Pantalla
 *  screen.innerHeight; --> Ancho Pantalla
 *  window.location ---> Objeto con los datos de la pagina
 *  window.location.href ---> url Actual
 *     Se puede asignar una nueva direccion para redigir la pagina
 */

 var altoVentana = window.innerHeight; 
 console.log('altoVentana ' , altoVentana);

 var anchoVentana = window.innerWidth;
 console.log('anchoVentana ' , anchoVentana) ;

 var altoPantalla = screen.height; 
 console.log('altoPantalla ' , altoPantalla);

 var anchoPantalla = screen.width;
 console.log('anchoPantalla ' , anchoPantalla) ;

 var urlActual = window.location.href;
 console.log('urlActual ' , urlActual) ;

 function irAgoogle(){
      window.location.href = 'https://google.com.ar';
 }

 function iraGoogle(){
    window.location.href = 'https://google.com.ar';
}

function abrirVentana () {
    window.open('https://google.com.ar', "", "width=300, height=300");
}