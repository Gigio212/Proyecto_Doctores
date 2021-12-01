const Pacientes = require('../models/Pacientes')
const mongoose = require("mongoose")

//insertar nuevos elementos a la BD
exports.postAgregarPacientes = async (req,res)=>{
    const pacientes = new Pacientes(req.body)
    pacientes._id = new mongoose.Types.ObjectId() //se le asigna un id al objeto 
        try{
            // Agregar documento a la coleccion y verifica que no se repita el nombre del paciente
            const pacientesExs = await Pacientes.exists({Nombre: req.body.Nombre});
            if (!pacientesExs){
                await pacientes.save()
                console.log(pacientes)
                console.log("paciente registrado")
                res.send({operacion:"Correcta"})
            }else{
                res.send({operacion:"El paciente ya está registrado"})
            }
    
        }catch(err){
            console.log(err)
            res.send({operacion:"incorrecta verifica"})
        }
    }

//consultar el status de la BD
exports.getObtenerPacientes = async (req,res)=>{
    const Pac = await Pacientes.find()
    console.log(Pac)
    res.json(Pac)
}
exports.postActualizarPacientes = async (req,res)=>{
    // Filtro y cambio para actualizar la info de paciente
    try {
        await Pacientes.findOneAndUpdate({ Nombre: req.body.Nombre },req.body.actualizar)
        Pacientes.exists()
        console.log("Paciente Actualizado")
        res.json({operacion:"correcta"})
    }catch(err){
        console.log(err)
        console.log("incorrecto verifica")
    }
}

exports.postBorrarPacientes = async (req,res)=>{
    //Borramos de acuerdo al nombre del paciente
    try{
        const existe = await Pacientes.exists({ Nombre: req.body.Nombre })
        if (existe){
            await Pacientes.findOneAndRemove({ Nombre: req.body.Nombre })
            console.log("Paciente eliminado")
            res.json({operacion:"correcto"})
        }else{
            console.log("Paciente no encontrado")
            res.json({operacion:"incorrecto"})
        }
    }catch(err){
        console.log(err)
        res.send({operacion:"incorrecta"})
    }
}
