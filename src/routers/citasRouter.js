import {Router} from 'express';
import dotenv from 'dotenv';
import { listar, idEsp, diaEspe, citaGenero } from '../controllers/citasController.js'

dotenv.config();

const appCitas = Router();

/**
 * ! GET
 * ? Obtener todas las citas alfabéticamente
 * * http://127.0.0.3:5012/cita/listar
 */
appCitas.get('/listar',listar)
/**
 * ! GET
 * ? Encontrar la próxima cita para un paciente específico (por ejemplo, el paciente con usu_id 1):
 * * http://127.0.0.3:5012/cita/1
 */
appCitas.get('/:citaId', idEsp);
/**
 * ! GET
 * ? Encontrar todas las citas para un día específico (por ejemplo, '2023-07-19')
 * * http://127.0.0.3:5012/cita/diaEsp
 * ! terminar
 */
appCitas.get('/diaEsp', diaEspe);
/**
 * ! GET
 * ? Obtener todas las citas realizadas por los pacientes de un genero si su estado de la cita fue atendidad
 * * http://127.0.0.3:5012/cita/pacienteGenero
 * ! terminar
 */
appCitas.get('/pacienteGenero', citaGenero);


export default appCitas;