import {Router} from 'express';
import dotenv from 'dotenv';
import { listar, idEsp, diaEspe, citaGenero, citaRechazadaMes } from '../controllers/citasController.js'
import validarPermisos from '../Auth/permisosRoles.js'

dotenv.config();

const appCitas = Router();
appCitas.use(validarPermisos)
/**
 * ! GET
 * ? Obtener todas las citas alfabéticamente
 * * http://127.0.0.3:5012/cita/cita/listar
 */
appCitas.get('/listar',listar)
/**
 * ! GET
 * ? Encontrar todas las citas para un día específico (por ejemplo, '2023-07-19')
 * * http://127.0.0.3:5012/cita/cita/diaEsp
 * ! terminar
 */
appCitas.get('/cita/diaEsp', diaEspe);
/**
 * ! GET
 * ? Mostrar todas las citas que fueron rechazadas y en un mes específico, mostrar la fecha de la cita, el nombre del usuario y el médico.
 * * http://127.0.0.3:5012/cita/cita/citaRechazada
 */
appCitas.get('/cita/citaRechazada', citaRechazadaMes);
/**
 * ! GET
 * ? Obtener todas las citas realizadas por los pacientes de un genero si su estado de la cita fue realizada
 * * http://127.0.0.3:5012/cita/cita/pacienteGenero
 */
appCitas.get('/cita/pacienteGenero', citaGenero);
/**
 * ! GET
 * ? Encontrar la próxima cita para un paciente específico (por ejemplo, el paciente con usu_id 1):
 * * http://127.0.0.3:5012/cita/cita/1
 */
appCitas.get('/cita/:citaId', idEsp);

export default appCitas;