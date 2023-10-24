import express from 'express';
import cors from 'cors'
import passport from '../../Auth/app/passportService.js'
import { limitget } from '../../config/infraestructure/configLimit.js';
import { startProductionServer } from '../domain/dominio.js';
import { routesRepository } from '../infraestructure/rutas.js';


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


startProductionServer(appExpress)
routesRepository(appExpress)

