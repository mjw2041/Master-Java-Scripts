'use strict'

var moogose = require('mongoose');
var Schema = moogose.Schema;

var ProjectSchema = Schema({
    name: String,
    description: String,
    category: String,
    year: Number,
    lang: String,
    image: String
});


module.exports = moogose.model('Project', ProjectSchema);
// projects --> Guarda todos los documentos en la coleccion