const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json()) 

let info = {
    Pacientes:[{
        Nombre:'Rodrigo',
        Edad:'21',
        Naciemiento:'CDMX',
        Enfermedad:"tos",
        Descripcion:"catarro"

    },
    {
        Nombre:'Angel',
        Edad:'22',
        Naciemiento:'Oaxaca',
        Enfermedad:"dolor de estomago",
        Descripcion:"lele panza"
    }],
    id: 1

}

app.get('/pacientes',(req,res)=>{
    res.json(info)
})

app.post('/paciente',(req,res)=>{
    console.log(req.body)
    res.json({
        mensaje:"Post realizado con éxito"
    })
})

app.listen(8080,()=>console.log("En línea"))