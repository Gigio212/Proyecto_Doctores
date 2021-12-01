const router = require("express").Router();

//nos permite saber que camino tomar para llegar al controlador
const PacientesController = require('../controllers/Pacientes');

//metodos a ocupar para usar y probar la BD
router.post('/agregarPacientes',PacientesController.postAgregarPacientes)
router.get('/obtenerPacientes',PacientesController.getObtenerPacientes)
router.post('/actualizarPacientes',PacientesController.postActualizarPacientes)
router.post('/borrarPacientes',PacientesController.postBorrarPacientes)
//crear un modulo llamado router para ser consumido en otro lado 
module.exports = router