import express from 'express';
import dotenv from 'dotenv';
import {servidor} from './config/connect.js';
import {limitget} from './helpers/configLimit.js'
import passportHelper from './helpers/passportHelpert.js';
import { crearToken } from './jwt/configJwt.js';
import validarPermisos from './Auth/permisosRoles.js';
import appUsuarios from './routers/usuariosRouter.js';
import appCitas from './routers/citasRouter.js';
import appMedico from './routers/medicosRouter.js';

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
appExpress.use('/cita',limitget(), appCitas)
appExpress.use('/medico',limitget(), appMedico)




appExpress.listen(servidor.port, () => {
    console.log(`Servidor escuchando en http://${servidor.addresses}:${servidor.port}`);
});

export default appExpress;