import {Router} from 'express';
import dotenv from 'dotenv';
import { listar } from '../controllers/usuariosController.js'

dotenv.config();

const appUsuarios = Router();

/**
 * ! GET
 * ? listar todas los usuarios ordenados alfabeticamente
 * * http://127.0.0.3:5012/usuario/listar
 */
appUsuarios.get('/listar',listar)


export default appUsuarios;