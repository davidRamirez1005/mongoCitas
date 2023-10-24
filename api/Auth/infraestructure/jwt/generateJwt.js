import { con } from "../../../config/app/atlas.js";
import { SignJWT } from "jose";
import {loadEnv} from 'vite'

const env = loadEnv('development', process.cwd(), "JWT");
let db = await con();
let coleccion = db.collection('roles');

// Validacion de las credenciales de login
const validateCredentials = async (req) => {
    const { ROL_EMAIL, ROL_PASSWORD } = req.body;
    const result = await coleccion.findOne({ email_registro: ROL_EMAIL, password_registro: ROL_PASSWORD })
    if (!result) {
        throw new Error('Usuario no encontrado en la base de datos');
    }
    return result;
};

// Creacion del token
const generateJWT = async (datauser) => {
    const encoder = new TextEncoder();
    const jwtConstructor = await new SignJWT(datauser)
        .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
        .setIssuedAt()
        .setExpirationTime('1h')
        .sign(encoder.encode(env.JWT_SECRET));
    return jwtConstructor;
};

// Funcion principal
const generateToken = async (req, res) => {
    try {
        const user = await validateCredentials(req);
        const token = await generateJWT({ id: user._id });
        res.send({ Token: token });
    } catch (error) {
        res.send({ status: 404, message: error.message });
    }
};

    


export {
    generateToken
}