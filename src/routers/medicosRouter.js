import {Router} from 'express';
import dotenv from 'dotenv';
import { especialidadEsp } from '../controllers/medicoController.js'

dotenv.config();

const appMedico = Router();

/**
 * ! GET
 * ? Obtener todos los médicos de una especialidad específica (por ejemplo, 'Pediatría'):
 * * http://127.0.0.3:5012/medico/Pediatría
 */
appMedico.get('/especialidad',especialidadEsp)


export default appMedico;