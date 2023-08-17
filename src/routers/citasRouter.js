import {Router} from 'express';
import dotenv from 'dotenv';
import { listar } from '../controllers/citasController.js'

dotenv.config();

const appCitas = Router();

/**
 * ! GET
 * ? Obtener todas las citas alfabéticamente
 * * http://127.0.0.3:5012/cita/listar
 */
appCitas.get('/listar',listar)


export default appCitas;