'use strict'
console.log("archivo js en uso")

/**
 *   FUNCIONES Timer
 *      seInterval    ---> ejecutar por un intervalo de veces
 *      setTimeOut    ---> Se ejecuta solo una vez
 *      clearInterval ---> Se usa para parar un intervalo
 * 
 */

window.addEventListener('load', () => {
    var nro = 0; 

    function intervalo () {
        var tiempo = setInterval( () =>{         
            var encabezado =  document.querySelector("h1");
                if (encabezado.style.fontSize  == "50px" ) {
                    document.querySelector("h1").style.fontSize = "20px"
                } else {
                    document.querySelector("h1").style.fontSize = "50px"
                }
                console.log ( "nro", nro++ );
            }, 1000 );
        
        return tiempo; 
    }

    var tiempo = intervalo();
/*     
    var tiempo = setInterval( () =>{         
    
        var encabezado =  document.querySelector("h1");
        if (encabezado.style.fontSize  == "50px" ) {
            document.querySelector("h1").style.fontSize = "20px"
        } else {
            document.querySelector("h1").style.fontSize = "50px"
        }
        console.log ( "nro", nro++ );
    }, 1000 );
*/

    var tiempoOut = setTimeout( () =>{         
        var encabezado =  document.querySelector("h1");        
        document.querySelector("h1").style.color = "RED";
        console.log ( "Se ejecuto el TIMEOUT" );
    }, 5000 );


    var stop = document.querySelector("#stop");

    stop.addEventListener("click", () => {
        clearInterval(tiempo);
        clearInterval(tiempos);
        console.log("Has parado en intervalo en bucle");
    });


    var start = document.querySelector("#start");
    start.addEventListener("click",() => {
       var tiempo = intervalo();
       console.log("Comienza el parpadeo"); 
    });

})