'use strict'

var Project = require('../models/project.js');
var fs = require('fs');
const { exists } = require('../models/project.js');
var path = require('path');


var controller = {
    home: function( req, res) {
        return res.status(200).send({
            message: 'soy la home' 
        });
    },
    test: function(req, res){
        return res.status(200).send({
            message: 'Soy el metodo o accion test del controlador project'
        });
    },    
     
    saveProject: function( req, res) {
        var project = new Project();        
        var params = req.body;   

    
        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.year = params.year;
        project.lang = params.lang;
        project.image = null;

        project.save((err, projectStored ) =>{
            if(err) return res.status(500).send({
                message: 'Error al guardar los documento.'
            });

            if (!projectStored) return res.status(404).send({ 
                message: 'No se a podido guardar el documento'        
            })

            console.log(project);
            return res.status(200).send({project: projectStored});

        });

        
        /*
        return res.status(200).send({
            project: project,
            message: "Metodo saveProject"
        })
        */
    },

    getProject: function(req, res){
        var projectId = req.params.id;

        if ( projectId == null ) {
            return res.status(404).send({
                message: 'El proyecto no existe'
            });
        }
        
        Project.findById( projectId, (error, project) => {
            if(error) return res.status(500).send({
                message: 'Error al devolver los datos.'
            }); 

            if(!project) return res.status(404).send({
                message: 'El proyecto no existe'
            }); 

            return res.status(200).send({
                project
            });

        });

        
    }, 

    getProjects: function(req, res){        
      
        Project.find({}).sort('+year').exec((error, projects) => {
            if(error) return res.status(500).send({
                message: 'Error al devolver los datos.'
            }); 

            if(!projects) return res.status(404).send({
                message: 'El proyecto no existe'
            }); 

            return res.status(200).send({
                projects
            });

        });        
    },

    updateProject: function(req, res){
        var projectId = req.params.id;
        var update = req.body;
        
        Project.findByIdAndUpdate( projectId, update, {new: true}, (error, projectUpdate) => {
            if(error) return res.status(500).send({
                message: 'Error al actualizar.'
            }); 

            if(!projectUpdate) return res.status(404).send({
                message: 'El proyecto a actualizar no existe'
            }); 

            return res.status(200).send({
                message: projectUpdate
            });

        });

        
    }, 

    removeProject: function(req, res){
        var projectId = req.params.id;        
        
        Project.findByIdAndRemove( projectId, (error, projectRemove) => {
            if(error) return res.status(500).send({
                message: 'Error al Eliminar.'
            }); 

            if(!projectRemove) return res.status(404).send({
                message: 'El proyecto a elimonar no existe'
            }); 

            return res.status(200).send({
                message: projectRemove
            });

        });        
    },

    uploadImage: function(req, res ){
        var projectId = req.params.id;
        var fileName = 'Imagen no subida ....';

        if (req.files) { 
            var filePath = req.files.image.path;
            var fileSplit = filePath.split('\\');
            var fileName = fileSplit[1];
            var extSplit = fileName.split('\.');
            var fileExt  = extSplit[1];

            if ( fileExt =='png' || fileExt =='jpg' || fileExt =='jpeg' || fileExt =='gif') {
                Project.findByIdAndUpdate( projectId, {image: fileName} , {new: true },(error, projectUpdate) => {
                    if(error) return res.status(500).send({
                        message: 'La imagen no se ha subido.'
                    }); 
        
                    if(!projectUpdate) return res.status(404).send({
                        message: 'El proyecto a actualizar no existe'
                    }); 
        
                    return res.status(200).send({
                        file: fileName,
                        project: projectUpdate,
                        message: 'Correcto'        
                    });        
                });            
            } else {
                fs.unlink(filePath, (err) => {
                    return res.status(200).send({
                        message: 'La extension no es válida'
                    });
                });
            }            
        } else {
            return res.status(200).send ({
                message: fileName
            });
        }
    },
    
    getImageFile: function(req, res) {
        var file = req.params.image;
        var pathFile = './uploads/' + file;
        
        console.log(req.params);
        console.log('pathFile ' + pathFile); 
        fs.exists(pathFile, (exists) => {
            if (exists){
                return res.sendFile(path.resolve(pathFile))
            }else {
                return res.status(200).send({
                    message: 'No existe la imagen'
                });
            }
        });
    }
};

module.exports = controller;
