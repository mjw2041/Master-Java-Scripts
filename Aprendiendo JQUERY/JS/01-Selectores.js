$(document).ready(function() {
    var color = "black";
    console.log("!Estamos listos");
    // Selectores ID 
    var rojo = $("#rojo").css("background", "red")
                         .css("color", color);
   
    var amarillo = $("#amarillo").css("background", "yellow") 
                                 .css("color", "green");                    

    var verde = $("#verde").css("background", "green")
                           .css("color", "white"); 

    console.log(rojo);
    console.log(amarillo);
    console.log(verde);
})