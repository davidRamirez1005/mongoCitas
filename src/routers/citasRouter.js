import {Router} from 'express';
import dotenv from 'dotenv';
import { listar, idEsp } from '../controllers/citasController.js'

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


export default appCitas;