import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import {limitget} from './config/configLimit.js'
import passport from './helpers/passportHelpert.js';
import { generateToken } from './jwt/token.js';
import appUsuarios from './routers/usuariosRouter.js';
import appCitas from './routers/citasRouter.js';
import appMedico from './routers/medicosRouter.js';
import {loadEnv} from 'vite'

const env = loadEnv('development', process.cwd(), "VITE");

dotenv.config();
const appExpress = express();
appExpress.use(passport.initialize());

const corsOptions = {
    origin: '*',
    methods: 'GET,PUT,POST,DELETE',
    optionsSuccessStatus: 204
};
appExpress.use(cors(corsOptions));
appExpress.use(express.json());


appExpress.use(limitget())

appExpress.use('/login', generateToken)
appExpress.use('/usuario', passport.authenticate('bearer', { session: false }),appUsuarios)
appExpress.use('/cita', passport.authenticate('bearer', { session: false }), appCitas)
appExpress.use('/medico', passport.authenticate('bearer', { session: false }), appMedico)




const config = {
    port: env.VITE_PORT_BACKEND,
    hostname: env.VITE_HOSTNAME
}
appExpress.listen(config, () =>{
    console.log(`listening on http://${config.hostname}:${config.port}`);
})
