const mongoose = require('mongoose')
const { stringify } = require('querystring')
const Pacientes = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    //Formato con el que se recibira el Json y se tendra la BD 
        Nombre:{
        type: String,
        required: true,
        minlength: 5,
        maxlength: 70
    },
    Edad:{
        type: String,
        required: true
    },
    Naciemiento:{
        type: String,
        required: true,
        minlength: 2,
        maxlength: 30
    },
    Enfermedad:{
        type: String,
        required: true
    },
    Descripcion:{
        type: String,
        required: true
    }
},{collection:'Pacientes'})
//Modulo para exportar la base
module.exports = mongoose.model('Pacientes',Pacientes)