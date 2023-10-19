import {con} from '../config/atlas.js'
import { SignJWT, jwtVerify } from "jose";
import {loadEnv} from 'vite'

const env = loadEnv('development', process.cwd(), "JWT");
let db = await con();
let coleccion = db.collection('roles');

const generateToken = async(req, res) => {
    //Validacion de las credenciales de login
    const {ROL_EMAIL,ROL_PASSWORD} = req.body;
    const result = await coleccion.findOne({email_registro:ROL_EMAIL, password_registro: ROL_PASSWORD })
    if(!result){return res.send({"status": 404, "message":"Usuario no encontrado en la base de datos"})}
    const datauser = {
        "id":result._id,
    }
    console.log({"datauser": datauser});
    //crecion del token
    const encoder = new TextEncoder();
    const jwtConstructor = await new SignJWT(datauser)
        .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
        .setIssuedAt()
        .setExpirationTime('1h')
        .sign(encoder.encode(env.JWT_SECRET));
    res.send({"Token":jwtConstructor});
}
    
const validateToken = async (token) => {
    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
            token,
            encoder.encode(env.JWT_SECRET)
        );

        // Buscar el id del token en la colección token
        /*
        Si el token es válido, se retorna el documento de la colección token
        Si el token es válido, pero no existe en la colección token, se retorna null
        Si el token no es válido, se retorna false
        */
        return await coleccion.findOne({"_id": jwtData.payload.id});
    } catch (error) {
        console.log(error);
        return false;
    }
}


export {
    generateToken,
    validateToken
}