$(document).ready( function() {
     reloadLink();
     console.log(' Cantidad Elementos ' +  $('a').length); 

     $("#add_button")
          .removeAttr("disabled")
          .click( function(){
               var link = $("#add_link").val();
                    /* $("#menu").html('<li><a href="' + link  + '"> </a></li>');*/ /* Crea una lista nueva */
                    /*$("#menu").before('<li><a href="' + link  + '"> </a></li>');*/  /* Fuera de la lista */
                    /*$("#menu").after('<li><a href="' + link  + '"> </a></li>'); */ /* Fuera de la lista pero abajo*/
                    /* $("#menu").prepend('<li><a href="' + link  + '"> </a></li>');*/ /* Arriba de la lista */
                    $("#menu").append('<li><a href="' + link  + '"> </a></li>'); /* abajo de la lista */                    
                    reloadLink();
                    $("#add_link").val(' ');
               })
});    

function reloadLink(){
     $('a').each(function(){
          var that =  $(this)
          var enlace = that.attr('href');
          console.log(enlace);
          that.text(enlace);
          that.attr("target", "_blank"); /* Agrego un atributos */         
     })
}