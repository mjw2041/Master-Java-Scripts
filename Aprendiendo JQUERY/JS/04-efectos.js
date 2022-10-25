$(document).ready( function() {
    var caja = $('#caja');
    $('#caja').show();
    $('#mostrar').hide();
    
    $('#mostrar').click(function(){
        $(this).hide();
        $('#ocultar').show();
        /*$("#caja").show('fast');*/
        /*$("#caja").fadeIn('fast');*/
        $("#caja").fadeTo('fast',0.5);
    });

    $('#ocultar').click(function(){
        $(this).hide();
        $('#mostrar').show();
        /*$("#caja").hide('fast');*/
        /*$("#caja").fadeOut('fast');*/
        /*$("#caja").fadeTo('fast',0.2);*/
        caja.slideUp('slow', function(){
            console.log("Cartel Ocultado");
        });
    });

    $('#todoEnUno').click(function(){
        
        /* $("#caja").toggle('fast');*/
        $("#caja").fadeToggle('fast');
        $("#caja").slideToggle('fast');
    });

    $('#animar').click(function(){             
        caja.animate({
             marginLeft: '500px',
             fontSize: '40px',
             height: '110px'
            }, 'slow')
            
            .animate({
                borderRadius: '900px',
                marginTop: '80px'
            },'slow')
            .animate({
                borderRadius: '0px',
                marginLeft: '0px'
            },'slow')
            
            .animate({
                borderRadius: '100px',
                marginTop: '0px'
            },'slow') 
            
            .animate({
                marginLeft: '500px',
                fontSize: '40px',
                height: '110px'
               }, 'slow')
    });
});

