'use strict'

window.addEventListener('load', function(){
    console.log('DOM cargado');

    var formulario = document.querySelector("#formulario");    
    var boxDashed = document.querySelector(".dashed");
    console.log(formulario);
    boxDashed.style.display = 'none';
    /*
    boxDashed.style.display = "none";
      */
    formulario.addEventListener('submit', function(){
        console.log("Evento submit capturado");

        var nombre =  formulario.querySelector("#nombre").value;       
        var apellido = formulario.querySelector("#apellidos").value;
        var edad =  parseInt(formulario.querySelector("#edad").value);

        if (nombre.trim() == null || nombre.trim().length == 0 ){
            alert('El nombre no es valido');
            document.querySelector("#errorNombre").innerHTML = "El nombre no es válido";
            return false;
        }  else {
            alert("paso");
            document.querySelector("#errorNombre").style.display = "none"; 
        }

        if (apellido.trim() == null || apellido.trim().length == 0 ){
            alert('El apellido no es valido');
            document.querySelector("#errorApellido").innerHTML = "El apellido no es válido";
            return false;
        }  else {
            document.querySelector("#errorApellido").style.display = "none"; 
        }

        if (edad == null || edad <= 0  || isNaN(edad) ){
            alert('La eada no  es valido');
            document.querySelector("#errorEdad").innerHTML = "La edad no es válido";
            return false;
        }  else  {
            document.querySelector("#errorEdad").style.display = "none"; 
        }

       
        console.log(nombre + ' ' + apellido + ' ' + edad);
        boxDashed.style.display = 'block';

        var pNombre = document.querySelector("#nombre span");
        console.log(pNombre);
        pNombre.innerHTML = nombre;  

        var pApellido = document.querySelector("#apellido span");
        pApellido.innerHTML = apellido;

        var pEdad = document.querySelector("#edad span");
        pEdad.innerHTML = edad;

       
        /*
        var datosUsuario = [nombre, apellido, edad];
     
        for  (var  indice in datosUsuario) {
            var parrafo = document.createElement("p");    
            parrafo.append(datosUsuario[indice]);  
            boxDashed.append(parrafo);
        }
        */
    })
});
