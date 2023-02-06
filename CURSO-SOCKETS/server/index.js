var express = require('express');
var app = express();
var server = require('http').Server(app);
/*
var io = require('socket.io')(server);
*/


var io = require('socket.io')(server,{
    cors: { // Permite el acceso de orígenes mixtos (CORS)
        origin: '*'
    }
});

var messages = [{
    id: 1,
    text: "Bienvenido al chat privado de Socket.io y NODEJS de Victor Robles",
    nickname: "Bot - VisctorRobles"
}]



app.get('/holaMundo', function( req, res) {
    res.status(200).send('Hola Mundo desde una ruta'); 
})

app.use(express.static('client')); 

io.on('connection', function(socket){        
    socket.emit('messages',  messages);
    socket.on('add-message', function(data){
        messages.push(data);    
        socket.emit('messages', messages);
    })

})

server.listen(6677, function(){
    console.log('Servidor esta funcionando en http://localhost:6677')
})
