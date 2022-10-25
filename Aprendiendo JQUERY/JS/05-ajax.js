$(document).ready( function() {
        console.log("JS Activado")

    // Load
    /*$("#datos").load("https://reqres.in/")*/

    // GET POST
    
    $.get("https://reqres.in/api/users", {page:2}, function(response){
        console.log(response);
        response.data.forEach(element => {
            $("#datos").append("<p>"+ element.first_name + element.last_name + "</p>")
        });
    });

    var usuario = {
        name: "Victor Robles",
        web: "victorroblesweb.es"
    };

    $.post("https://reqres.in/api/users", usuario, function(response){
        console.log(response);                
    });

    $("#formulario").submit(function(e){
        e.preventDefault();
        var usuario = {
            name: $('input[name="name"]').val(),
            web: $('input[name="web"]').val()
        };
        /*  
        $.post($(this).attr("action") , usuario, function(response){
            console.log(response);                
        }).done(function(){
            alert("Usuario añadido correctamente");
        });
        */
        $.ajax({
            type: 'POST',
            url: $(this).attr("action"),
            data: usuario,
            beforeSend: function(){
                console.log("Enviado Usuario");
            },
            success: function(response){
                console.log(response);
            },
            error: function(){
                console.log('Ocurrio un error');
            },
            timeout: 1000

        })
        return false

    });

});