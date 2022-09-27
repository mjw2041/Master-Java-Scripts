
$(document).ready( function(){
    console.log("Estamos listos");
    /**
     *   Selectores ID
     */
    
    var parrafoRojo = $("#rojo")
    
    console.log(parrafoRojo);

    /** Cambiar Atributios */
    
    parrafoRojo = $("#rojo").css("background", "red")
    .css("colo", "white");
    
    
    $("#amarillo").css("background", "yellow") 
                  .css("color", "black");

    $("#verde").css("background", "green")
                  .css("color", "white")                    


    /**
     *  Selectores Clases 
     */

    var claseZebra = $(".zebra");
    console.log(claseZebra);

    /** Selecionar un elemento */
    console.log(claseZebra[1]);
    console.log(claseZebra.eq(1));

    /** Cambiar Atributios */

    claseZebra = $(".zebra").css("border", "5px dashed black" )

    $('.sinBorde').click( function(){
        console.log("Se Hizo click");
        $(this).addClass('agregarBorde');
    })

    /**
     *  Selectores de Atributos
     */

     var parrafos = $('p').css("cursor", "pointer");
     parrafos.click( function (){ 
            var este = $(this);
            if ( este.hasClass('agregarBorde')){
                console.log("Hizo Click en el selector de etiqueta");
                este.removeClass("agregarBorde");
            }
     })
     parrafos.click( function (){        
        var seleccionado = $(this)
        console.log("Hizo Click Tamaño Letra");
        if ( seleccionado.hasClass('grande')){        
            seleccionado.removeClass("grande") 
        } else {
            seleccionado.addClass("grande") 
        } ;        
     })

     /**
     *  Selectores de Etiqueta
     */
    $('[title="Google"]').css('background', '#ccc');
    $('[title = "Facebook"]').css('background', 'black');

    /**
     *   Otros
     */

    $('p ,a').addClass('margerSuperior') ;  

    /* Busqueda de elementos */
    var busqueda = $("#caja").find('.resaltado');
    console.log("Busqueda");
    console.log(busqueda);

    /* Salir a los elementos de arriba */
    var busquedaPadre = $("#caja .resaltado").eq(0).parent().parent().parent().find('[title="Google"]');
    console.log(busquedaPadre);

})