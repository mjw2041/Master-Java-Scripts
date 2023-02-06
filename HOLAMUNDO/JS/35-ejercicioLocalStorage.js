'use strict'
window.addEventListener('load', function(){
     var formulario = document.querySelector("#a");
     formulario.addEventListener('submit', function(){  
        var titulo = document.querySelector("#addpelicula").value;                        
        if (titulo.length >= 1) {        
            localStorage.setItem(titulo, titulo)
        }        
     })

     console.log("1");
     var ul = document.querySelector("#peliculas-list"); 
     for ( var i in localStorage) {
        if (typeof localStorage[i] == 'string') { 
            var li = document.createElement("li");
            li.append(localStorage[i]); 
            ul.append(li);
 
    }}    
        var formulariob = document.querySelector("#formBorraPelicula");
        formulariob.addEventListener('submit', function(){  
           var titulob = document.querySelector("#borrarpelicula").value;                        
           if (titulob.length >= 1) {        
               localStorage.removeItem(titulob)
           }        
    })
})



