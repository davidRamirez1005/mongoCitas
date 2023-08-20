import {Router} from 'express';
import dotenv from 'dotenv';
import { especialidadEsp, medico_consultorio, numeroCitas } from '../controllers/medicoController.js'

dotenv.config();

const appMedico = Router();

/**
 * ! GET
 * ? Obtener todos los médicos de una especialidad específica (por ejemplo, 'Pediatría'):
 * * http://127.0.0.3:5012/medico/Pediatría
 */
appMedico.get('/especialidad',especialidadEsp)
/**
 * ! GET
 * ? Obtener los médicos y sus consultorios
 * * http://127.0.0.3:5012/medico/medCon
 */
appMedico.get('/medCon',medico_consultorio)
/**
 * ! GET
 * ? Contar el número de citas que un médico tiene en un día específico (por ejemplo, el médico con _id 1 en '2023-07-19')
 * * http://127.0.0.3:5012/medico/numeroCitas
 */
appMedico.get('/numeroCitas',numeroCitas)



export default appMedico;