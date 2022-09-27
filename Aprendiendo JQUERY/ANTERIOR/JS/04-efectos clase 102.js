/*
        show --> Permite mostrar un elemente
        hide ---> Permite ocultar un elemento
        fadeIn ---> Efecto Fundido
        fadeOut ---> Efecto Fundido
        fadeTo --- Pasa de FadeIn a FedeOut en un sola sentencia
        slideUp --> abre con efecto slide
        slideDown --> abre con efecto slide
        toggle ---> abre si esta cerrado y cierra si esta abierto.
        fadetogle --->  con efecto Fade
        slidetoggle --->  con efecto slide
        animate( {}, 'velodad') ---> permite animar 


*/

console.log("Archivo JS Activo");

$(document).ready(function(){

    var caja = $('#caja');

    $("#mostrar").hide();
    
    $("#mostrar").click( function(){
        $(this).hide();
        $("#ocultar").show();
        /*$("#caja").show('normal');*/
        /* $("#caja").fadeIn('slow');*/
        caja.fadeTo('slow',1);

    });

    $("#ocultar").click( function(){
        $(this).hide();
        /*$("#caja").fadeOut('slow');*/
        /*$("#caja").hide('normal');*/
        caja.fadeTo('slow',0);
        $("#mostrar").show();
    });

    $("#todoenuno").click( function(){
        caja.toggle('normal', function(){
            console.log('termino');
        });
    });

    $("#animar").click( function(){
        caja.animate({
                       marginLeft: '500px',
                       fontSize: '40px', 
                       height: '110px'
                     }, 'fast') 
            .animate({
                        borderRadius: '900px',
                        marginTop: '80px'
                     }, 'slow')         
            .animate({
                        borderRadius: '0px',
                        marginLeft: '0px'
                     }, 'slow')   
            .animate({
                        borderRadius: '900px',
                        marginTop: '0px'
                     }, 'slow') 
            .animate({
                        marginLeft: '500px',
                        fontSize: '40px', 
                        height: '110px'
                      }, 'slow')                                    
    })
})