import {Router} from 'express';
import dotenv from 'dotenv';
import { especialidadEsp, medico_consultorio, numeroCitas } from '../controllers/medicoController.js'
import validarPermisos from '../Auth/permisosRoles.js'

dotenv.config();

const appMedico = Router();
appMedico.use(validarPermisos)
/**
 * ! GET
 * ? Obtener todos los médicos de una especialidad específica (por ejemplo, 'Pediatría'):
 * * http://127.0.0.3:5012/medico/medico/Pediatría
 */
appMedico.get('/medico/especialidad',especialidadEsp)
/**
 * ! GET
 * ? Obtener los médicos y sus consultorios
 * * http://127.0.0.3:5012/medico/medico/medCon
 */
appMedico.get('/medico/medCon',medico_consultorio)
/**
 * ! GET
 * ? Contar el número de citas que un médico tiene en un día específico (por ejemplo, el médico con med_nroMatriculaProfesional 12345 en '2023-07-19')
 * * http://127.0.0.3:5012/medico/medico/numeroCitas
 */
appMedico.get('/medico/numeroCitas',numeroCitas)


export default appMedico;