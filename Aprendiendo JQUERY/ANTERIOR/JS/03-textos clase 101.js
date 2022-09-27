console.log("Js Activado");

/**
 * 
 *   append ---> agrega un nuevo elementeo a lo que ya habia 
 *   prepend ---> lo agraga al principio de la lista
 *   html   ---> reemplaza la lista con el nuevo elemento
 *   before ---> afuera antes de la lista 
 *   after ---> afuera desspues de la lsta
 *   attr ---> permita cambiar los atributos
 *   removeAttr ---> permite eliminar un atributi
 *   
 */

$(document).ready(function(){

    reloadLinks();
     
    $('#add_button')
        .removeAttr('disabled') 
        .click( function() {        
        /*$("#menu").html('<a href="'+ $("#add_link").val()+'"></a>');     */
            $("#menu").append('<li><a href="'+ $("#add_link").val()+'"></a></li>');     
            $("#add_link").val('');
            reloadLinks();
        });
/*
    var cantidadElementos = $('a').length;
    console.log("Cantidad Elementos" + cantidadElementos) 
*/    
    function reloadLinks(){
        $('a').each( function( index){
            var that = $(this);
            var enlace = that.attr("href");
            that.attr('target', '_blank');
            that.text(enlace);                    
        });        
    }
})

