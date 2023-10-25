import passport from '../../Auth/app/passportService.js';
import { generateToken } from '../../Auth/infraestructure/jwt/generateJwt.js';
import appUsuarios from '../../usuario/app/usuariosRouter.js';
import appCitas from '../../citas/app/citasRouter.js'
import appMedico from '../../medico/app/medicosRouter.js';

export function routesRepository(nameExpress) {
    nameExpress.use('/login', generateToken)
    nameExpress.use('/cita', passport.authenticate('bearer', { session: false }), appCitas)
    nameExpress.use('/medico', passport.authenticate('bearer', { session: false }), appMedico)
    nameExpress.use('/usuario', passport.authenticate('bearer', { session: false }),appUsuarios)
}

