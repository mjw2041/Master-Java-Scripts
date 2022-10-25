$(document).ready(function(){
    
    
    // Eventos MouseOver y MouseOUT
    var caja = $("#caja");
/*
    caja.mouseover(function(){
        $(this).css('background', 'red');
    })


    caja.mouseout(function(){
        $(this).css('background', 'green');
    })
*/
    function cambiarRojo(){
        $(this).css('background', 'red');
    }

    function cambiarVerde(){
        $(this).css('background', 'green');
    }

    caja.hover(cambiarRojo, cambiarVerde);

    caja.click(function(){
        $(this).css("background", "blue")
               .css("color", "white"); 
    });

    caja.dblclick(function(){
        $(this).css("background", "pink")
               .css("color", "yellow"); 
    });

    // focus y blur 
    var nombre = $("#nombre");
    var datos = $("#datos"); 
    nombre.focus(function(){
        console.log("focus");
        $(this).css("border", "2px solid green");
    })

    nombre.blur(function(){
        console.log("blur");
        $(this).css("border", "2px solid trasparent");
        datos.text($(this).val()).show();
    })

    // Mousedown - Mouseup
    datos.mousedown(function(){
        $(this).css("border-color", "red");
    })

    datos.mouseup(function(){
        $(this).css("border-color", "black");
    })

    // Mousemove 
    $(document).mousemove(function(){
        $("body").css("cursor", "none");
        var sigueme =  $("#sigueme");
        sigueme.css("left", event.clientX )
               .css("top", event.clientY );
    })
});