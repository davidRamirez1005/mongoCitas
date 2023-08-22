import express from 'express';
import dotenv from 'dotenv';
import {servidor} from './config/connect.js';
import {limitget} from './config/configLimit.js'
import passport from './helpers/passportHelpert.js';
import { generateToken } from './jwt/token.js';
import appUsuarios from './routers/usuariosRouter.js';
import appCitas from './routers/citasRouter.js';
import appMedico from './routers/medicosRouter.js';

dotenv.config();
const appExpress = express();
appExpress.use(passport.initialize());

appExpress.use(express.json());


appExpress.use(limitget())

appExpress.use('/login', generateToken)
appExpress.use('/usuario', passport.authenticate('bearer', { session: false }),appUsuarios)
appExpress.use('/cita', passport.authenticate('bearer', { session: false }), appCitas)
appExpress.use('/medico', passport.authenticate('bearer', { session: false }), appMedico)




appExpress.listen(servidor.port, () => {
    console.log(`Servidor escuchando en http://${servidor.addresses}:${servidor.port}`);
});

export default appExpress;