import { SignJWT, jwtVerify } from "jose"
import { con } from "../config/atlas.js";
import { ObjectId } from "mongodb";
import dotenv from 'dotenv';
dotenv.config();

const conexionDB = await con();

const crearToken = async (req, res) => {
    const encoder = new TextEncoder();

    // Busca el parámetro ``usuario`` en la colección "usuarios"
    const result = await conexionDB.collection('eje').findOne({usuario: req.params.usuario});
    console.log(result);
    if (!result) return res.status(404).send('Usuario no encontrado');
    const id = result._id.toString();

    // Crear el token con el id del documento buscado
    const jwtConstructor = await new SignJWT({ id: id})
        .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
        .setIssuedAt()
        .setExpirationTime('1h')
        .sign(encoder.encode(process.env.JWT_SECRET));
    res.send(jwtConstructor);
}

const validarToken = async (token) => {
    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
            token,
            encoder.encode(process.env.JWT_SECRET)
        );

        // Buscar el id del token en la colección token
        /*
        Si el token es válido, se retorna el documento de la colección token
        Si el token es válido, pero no existe en la colección token, se retorna null
        Si el token no es válido, se retorna false
        */
        return await conexionDB.collection('eje').findOne({_id: new ObjectId(jwtData.payload.id)});
    } catch (error) {
        console.log(error);
        return false;
    }

}

export {
    crearToken,
    validarToken
}