// rutas 
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// cargar archivo de rutas 
var projectRoutes = require('./routes/project')

// middlaewares
app.use(bodyParser.urlencoded({extends:false}));
app.use(bodyParser.json());

// CORS
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


// RUTAS 
/*  Rutas generadas manualmente */
app.get('/', (req, res) =>{
    res.status(200).send(
         "<h1>Pagina de inicio</h1>"
    )
})

app.get('/test/:id', (req, res) =>{
    console.log(req.body.nombre);
    console.log(req.query.web);
    console.log(req.params.id);
    res.status(200).send({        
        message: "Hola mundo desde mi API de NODEJS"
    });
})

/* Rutas cargadas en un archivo aparte */
app.use('/api', projectRoutes);

//exportar
module.exports = app;


