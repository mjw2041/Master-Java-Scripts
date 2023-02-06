'use strict'

var mongoose  = require('mongoose');
var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://admin:Juanca1936@cluster0.yxxqbzi.mongodb.net/?retryWrites=true&w=majority')
       .then(()=> {
        console.log("Conexion a Base de Datos establecida con exito...")
        // Creacion del servidor 
        
        app.listen(port, ()=>{
              console.log("Servidor corriendo correctamente en la url: localhost:3700");
        })
       })
       .catch(()=>{
        console.log("Conexion con error")
       })
      