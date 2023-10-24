// import passport from '../../Auth/app/passportService.js';
import { generateToken } from '../../Auth/infraestructure/jwt/generateJwt.js';
// import appUsuarios from '../../routers/usuariosRouter.js';
// import appCitas from '../../routers/citasRouter.js';
// import appMedico from '../../routers/medicosRouter.js';

export function routesRepository(nameExpress) {
    nameExpress.use('/login', generateToken)
}
// appExpress.use('/usuario', passport.authenticate('bearer', { session: false }),appUsuarios)
// appExpress.use('/cita', passport.authenticate('bearer', { session: false }), appCitas)
// appExpress.use('/medico', passport.authenticate('bearer', { session: false }), appMedico)

