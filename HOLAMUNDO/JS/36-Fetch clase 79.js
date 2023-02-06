'use strict'
console.log("archivo js en uso")
/* Fetch ( ajax) y petisiones  a servicios / apis rest */

var divUsuarios = document.querySelector("#usuarios");
var divUsuario = document.querySelector("#usuario");

var usuario = [];

getUsuarios()
.then( data => data.json())
.then( users => {
    usuario = users.data;
    console.log(usuario);
    listadoUsuarios(users.data);
    return getUsuario();    
})
.then ( data => data.json())

.then( usuario => {
      
    console.log(usuario.data);
    mostrarUsuario(usuario.data);
    return getInfo();
})
.then ( profesor => {
    console.log(profesor);
})
.catch(error => {
    console.log("Error: " + error);
    alert( "Error: " + error);
});

function getUsuarios () {
    return fetch("https://reqreseee.in/api/users?page=2")
}

function getUsuario() {
    return fetch("https://reqres.in/api/users/9")
};

function getInfo () {
    var profesor = {
        nombre: 'Victor',
        apellido: 'Robles',
        url: 'https://victorroblesweb.es'
    };
    
    return new Promise( ( resolve, reject) => {
        var profesorString = JSON.stringify(profesor);
        if ( typeof profesorString != 'string') {
            return reject('error')
        } else {
            return resolve(profesorString);
        }
    });
}

function listadoUsuarios( usuarios) {
    usuarios.map (( user, id ) => {                
        let nombre = document.createElement("h3");
        nombre.innerHTML = id + " Nombre: " + user.last_name + " , " + user.first_name;
        divUsuarios.appendChild(nombre);
        document.querySelector("#loading").style.display = "none";
    } )
}

function mostrarUsuario( usuario ) {                
        let nombre = document.createElement("h4");
        
        let avatar = document.createElement("img");
        
        nombre.innerHTML = " Nombre: " + usuario.last_name + " , " + usuario.first_name;        
        
        avatar.src = usuario.avatar;
        avatar.width = "100"; 
        
        divUsuario.appendChild(nombre);
        divUsuario.appendChild(avatar); 
        document.querySelector("#carga").style.display = "none";
}
  


 