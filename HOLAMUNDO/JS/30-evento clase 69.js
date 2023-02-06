'use strict'
console.log("archivo js en uso")

/***
 *   EVENTO DE RATON
 *   boton.addEventListener permite capturar un evento del mouse
 
 *      onclick    --- click
 *      ondblclick --- Doble click
 *      mouseover  --- Se ejecuta cuando pasas por arribe del objeto 
 *      mouseout   --- Se ejecuta cuando va del objeto
 * 
 *      EVENTO TECLADO
 *      focus   --- Cuando se ingresa al foco del input
 *      blur    --- Cuando se salgo al foco del input
 *      keydown --- Cuando estas pulsando una tecla
 *      keyup   --- Cuando estas soltando una tecla
 *      keypress --- Tecla Presionada
 * 
 *      NOTA: 
 *      String.fromCharCode(event.keyCode) ---  Permite ver que caracter se esta ingresado
 *      (event.key)                        ---  Otra Forma;
 *      String.fromCharCode                ---  Convierte ASCII A Sring
 *      (event.keyCode)                    ---  Codigo ASCII tecla presionada
 * 
 *      load                               --- Permite ejecutar el programa cuando se haya cargado el HTML
 * 
 *      this  --- Se utiliza para hacer mencion al componente.                              
 *         ( no funciona dentro de una funcion de flecha )
 *     
 * 
 * 

 */

window.addEventListener ( 'load', () => {

    function cambiarColor () {
        console.log("llamaste a la funcion cambiarColor");
        
        var bg = boton.style.background;
        if (bg == "green") {
            boton.style.background = "red";
            boton.style.padding = "10px";
            boton.style.border = "1px solid #ccc";
            
        } else {
            boton.style.background = "green";
            boton.style.padding = "20px";
            boton.style.border = "5px solid red";
        }
        
        return true;
        
    }
    var boton = document.querySelector("#boton");
    
    /*  otra forma de invocar a una funcion en el addEventListener */

    boton.addEventListener("click", function () {
        cambiarColor()
        this.style.background = "VIOLET";
        console.log(this.style.background);
    });
    

/*
    boton.addEventListener("click", () =>  {
            cambiarColor();
            this.style.border = "10px solid black";
            this.style.background = "VIOLET";
            console.log(this.style.background);
    });    
*/
    
    boton.addEventListener("mouseover", () => {
             boton.style.background = "yellow" ;  
    });
    
    boton.addEventListener("mouseout", () => {
        boton.style.background = "gray" ;  
        
    });
    
    var input = document.querySelector("#campoNombre");
    
    input.addEventListener("focus", () => {
        console.log("[focus] Ingresó al focos del input")
    })
    
    input.addEventListener("blur", () => {
        console.log(" [blur] Salío del focos del input")
    })
    
    input.addEventListener("keydown", (event) => {
        console.log(" [keydown] Cuando estas pulsando una tecla. Se pulsó la tecla ", String.fromCharCode(event.keyCode) ,
               "Codigo ASCII ", event.keyCode0
               );       
    })
    
    input.addEventListener("keyup", () => {
        console.log(" [keyup] Cuando estás soltando una tecla");    
    })
    
    input.addEventListener("keypress" ,( event)=> {
        console.log(" [keypress] Se presionó la teclaa." , event.key);
    }) 
})



 
    