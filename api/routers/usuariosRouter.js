import {Router} from 'express';
import dotenv from 'dotenv';
import { listar, Paciente_medico, pacientes, insertarPaciente } from '../controllers/usuariosController.js'
import validarPermisos from '../Auth/domain/permisosRoles.js'

dotenv.config();

const appUsuarios = Router();
appUsuarios.use(validarPermisos)

/**
 * ! GET
 * ? listar todas los usuarios ordenados alfabeticamente
 * * http://127.0.0.3:5012/usuario/usuario/listar
 */
appUsuarios.get('/usuario/listar',listar)
/**
 * ! GET
 * ? Encontrar todos los pacientes que tienen citas con un médico específico (por ejemplo, el médico con _id 1)
 * * http://127.0.0.3:5012/usuario/usuario/medico/2
 */
appUsuarios.get('/usuario/medico/:medicoId',Paciente_medico)
/**
 * ! GET
 * ? Obtener las consultorías para un paciente específico (por ejemplo, paciente con usu_id 1)
 * * http://127.0.0.3:5012/usuario/usuario/consultoria/2
 */
appUsuarios.get('/usuario/consultoria/:usuarioId',pacientes)
/**
 * ! POST
 * ? Insertar un paciente a la tabla usuario pero si es menor de edad solicitar primero que ingrese el acudiente y validar si ya estaba registrado el acudiente.
 * * http://127.0.0.3:5012/usuario/usuario
 */
appUsuarios.post('/usuario',insertarPaciente)

export default appUsuarios;