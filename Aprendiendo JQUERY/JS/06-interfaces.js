$(document).ready( function() {
    console.log("JS Activado")
    /// Mover elemento por la pagina
    $('.elemento').draggable();

    // Redimensionar 
    $('.elemento').resizable();

    // Elemento Seleccionables
    // $('.listaSeleccionable').selectable();
    $('.listaSeleccionable').sortable({
        update: function(){
            console.log("ha cambiado la lista")
        }
    });

    // Drop 
    $('#elementoMovido').draggable();
    $('#area').droppable({
        drop: function(){
            console.log("Has soltado algo dentro del area")
        }
    })

    // Efectos
    $("#mostrar").click(function(){
       /* $(".cajaEfectos").fadeToggle();*/
       /*$(".cajaEfectos").effect("explode");*/
       /*$(".cajaEfectos").toggle("explode");*/
       /*$(".cajaEfectos").toggle("slide");*/
       /*$(".cajaEfectos").toggle("blind");*/
       /*$(".cajaEfectos").toggle("drop");*/
       /*$(".cajaEfectos").toggle("fold");*/
       /*$(".cajaEfectos").toggle("puff");*/
       $(".cajaEfectos").toggle("scale");
       /*$(".cajaEfectos").toggle("shake", 4000);*/
    })

    /// tootimps
    $(document).tooltip();

    // Cuadro de dialogo
    $('#lanzarPopup').click( function(){
        $('#popup').dialog();
    });

    // datepicker
    $('#calendario').datepicker();

    // Tabs
    $('#pestañas').tabs();
    
    
});
