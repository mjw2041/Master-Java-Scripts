$(document).ready( function() {
    
    // Selectores de Clases
    var miClase = $(".zebra");
    console.log(miClase);

    // Seleccionar un elemento 
    console.log(miClase[0]);
    console.log(miClase.eq(1));

    var miClase = $('.zebra').css("padding", "5px");

    $('.sinBorder').click(function(){
        console.log("Click Dado");
        $(this).addClass('zebra');
    });

    // Selectores de etiqueta
    var parrafos = $('p').css("cursor", "pointer");

    parrafos.click(function(){
        var este = $(this);
        if ( este.hasClass('grande')) {
            este.removeClass('grande');
        }else {
            este.addClass('grande');
        }
    });

    // Selectores de atributos
    $('[title="Google"]').css('background', '#ccc');
    $('[title="Facebook"]').css('background', 'blue').css('color', 'white');

    // Otros
    /* $('p, a').addClass('margen-superior');*/
/*
    var busqueda = $("#caja").find('.resaltado');
    console.log('busqueda ');
    console.log(busqueda);

    var busqueda = $("#caja").parent().find('.resaltado');
    console.log('busqueda ');
    console.log(busqueda);
*/
    var busqueda = $("#caja").parent().parent().find('.resaltado');
    console.log('busqueda ');
    console.log(busqueda);

    var busqueda = $("#elemento2").parent().parent().find('.resaltado');
    console.log('busqueda ');
    console.log(busqueda);
/*
    var busquedapadre1 = $("#caja .resaltado").parent().find('[title="Google"]');    
    console.log('busqueda 1 ');
    console.log(busquedapadre1);

    console.log('busqueda 2');
    var busquedapadre2 = $("#caja .resaltado").eq(0).parent().parent().find('[title="Google"]');    
    console.log(busquedapadre2);
    
    console.log('busqueda 3 ');
    var busquedapadre3 = $("#caja .resaltado").eq(0).parent().parent().parent().find('[title="Google"]');    
    console.log(busquedapadre3);
*/
    
})
