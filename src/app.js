import express from 'express';
import dotenv from 'dotenv';
import {servidor} from './config/connect.js';
import {limitget} from './helpers/configLimit.js'
import appUsuarios from './routers/usuariosRouter.js';
import passportHelper from './helpers/passportHelpert.js';
import { crearToken } from './Auth/middlewareJWT.js';
import validarPermisos from './jwt/permisosRoles.js';

dotenv.config();
const appExpress = express();
appExpress.use(passportHelper.initialize());

appExpress.use(express.json());

// Middleware para validar permisos de roles

appExpress.get('/api/admin', passportHelper.authenticate('bearer', { session: false }), validarPermisos, (req, res) => {
    res.json({mensaje: 'Hola admin', usuario : req.user});
});
appExpress.get('/api/vendedor', passportHelper.authenticate('bearer', { session: false }), validarPermisos, (req, res) => {
    res.json({mensaje: 'Hola vendedor'});
});



appExpress.use('/token/:usuario',limitget(),crearToken)
appExpress.use('/usuario',limitget(), appUsuarios)




appExpress.listen(servidor.port, () => {
    console.log(`Servidor escuchando en http://${servidor.addresses}:${servidor.port}`);
});

export default appExpress;