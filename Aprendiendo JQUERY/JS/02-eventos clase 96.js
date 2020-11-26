$(document).ready(function() {
    console.log("Eventos funcionandos");
    var caja = $("#caja");
    /**
     *    Evengtos mouseover(adentro), mouseOut ( Afuera  )
     */

/*
    caja.mouseover( function(){
        $(this).css("background", "grey");
    })

    caja.mouseout( function(){
        $(this).css("background", "brown");
    })
*/
    
    /**
     *   Hover imita al hover css 
     */
    function cambiarGris(){
        $(this).css("background", "grey");
    }
    
    function cambiarMarron(){
        $(this).css("background", "brown");
    }

    caja.hover(cambiarGris, cambiarMarron)

    /**
     *   eventos click y doble click
     */

     caja.click( function(){
        $(this).css("background", "yellow")
             .css("color", 'white');
     });

     caja.dblclick( function(){
        $(this).css("background", "pink")
             .css("color", 'yellow');
     });

     /**
      *   Focus Blur
      *   Aparentente en el focus ignora el .css("border", "2px solid red");
      */

     var nombre = $("#nombre");

      nombre.focus(function(){
        $(this).css("background-color", "#FFFFCC")
               .css("border", "2px solid red");
      });

     nombre.blur( function(){
        $(this).css("border", "2px solid blue")
               .css("background-color", "white");
        $("#datos").text($(this).val()).show();

     });

})