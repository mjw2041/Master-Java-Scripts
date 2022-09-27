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

});