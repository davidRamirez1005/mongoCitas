import {Router} from 'express';
import dotenv from 'dotenv';
import { listar, Paciente_medico, pacientes } from '../controllers/usuariosController.js'

dotenv.config();

const appUsuarios = Router();

/**
 * ! GET
 * ? listar todas los usuarios ordenados alfabeticamente
 * * http://127.0.0.3:5012/usuario/listar
 */
appUsuarios.get('/listar',listar)
/**
 * ! GET
 * ? Encontrar todos los pacientes que tienen citas con un médico específico (por ejemplo, el médico con _id 1)
 * * http://127.0.0.3:5012/usuario/medico/2
 */
appUsuarios.get('/medico/:medicoId',Paciente_medico)
/**
 * ! GET
 * ? Obtener las consultorías para un paciente específico (por ejemplo, paciente con usu_id 1)
 * * http://127.0.0.3:5012/usuario/consultoria/2
 */
appUsuarios.get('/consultoria/:usuarioId',pacientes)

export default appUsuarios;