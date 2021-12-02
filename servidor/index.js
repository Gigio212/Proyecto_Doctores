const express = require("express") 
const mongoose = require("mongoose")
const PacientesRoutes = require("./routes/Pacientes")

const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json()) 
app.use(express.urlencoded({extended:true}))

app.use("/Pacientes",PacientesRoutes)
mongoose.connect('mongodb://user6:root@54.227.9.233:27017/base6?authSource=admin')
    .then(()=>{
        app.listen(8081,()=>console.log("Servidor en linea"))
    })
    .catch(err=>console.log(err))
