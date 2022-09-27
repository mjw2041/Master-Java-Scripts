/*
    LOAD ---> petision ajax simple
    GET  --- Obtener datoa de una petision GET
    POST ---> Permite obtner dagtos de una petision POST
    .AJAX ---> Libreria que permite el manejo de los paquetes
*/
/***
 *   NOATA: no me funciono el data: usuario, aparentemente no lo ve
 */

$(document).ready( function(){    
    console.log("Archivo JS Activado");
    /*$("#datos").load("https://reqres.in/");*/

    console.log( "******** get ***********");

    $.get("https://reqres.in/api/users/", {page:2}, function( response){
        console.log(response.data)
        console.log(response.data[1].id);
        console.log(response.data[1].email);
        response.data.forEach((element, index) => {
            $("#datos").append("<p>" + element.first_name + " " + element.last_name+ "</p>")            
        });
    });
    
    console.log( "******** post ***********");
    
    $("#formulario").submit(function(e){    
        e.preventDefault();        
    
        var usuario = {
            name: $('input[name="name"]').val(),
            web: $('input[name="web"]').val(),
        };

        console.log(usuario);
       /*
        $.post($(this).attr("action"), usuario, function( response){
            console.log(response);
        }).done(function(){
            alert("usuario ingresado correctamente");
        });            
        */
      
        $.ajax({
            type: "POST",
            url: $(this).attr("action"),
            /*contentType:'application/json',*/
            /*data: usuario,*/
            data: {
                "nombre":"Kevin"
            },
                            /*dataType: "dataType",*/
            beforeSend: function(){
                console.log("Enviado Usuario" );                
            },
            success: function(response) {
                console.log("Respuesta: " + response);                                
            },
            error: function( ) {
                console.log("Error")
            },
            timeout: 21000 /* Retraso*/ 
        });        
        return false;  
    }); 
})