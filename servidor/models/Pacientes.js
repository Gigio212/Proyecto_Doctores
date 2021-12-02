const mongoose = require('mongoose')
const { stringify } = require('querystring')
const Pacientes = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    //Formato con el que se recibira el Json y se tendra la BD 
    nombre:{
        type: String,
        required: true,
        minlength: 5,
        maxlength: 70
    },
    edad:{
        type: String,
        required: true
    },
    nacimiento:{
        type: String,
        required: true,
        minlength: 2,
        maxlength: 30
    },
    enfermedad:{
        type: String,
        required: true
    },
    descripcion:{
        type: String,
        required: true
    }
},{collection:'Pacientes'})
//Modulo para exportar la base
module.exports = mongoose.model('Pacientes',Pacientes)