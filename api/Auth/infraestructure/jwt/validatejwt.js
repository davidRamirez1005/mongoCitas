import { con } from "../../../config/app/atlas.js";
import { jwtVerify } from "jose";
import {loadEnv} from 'vite'

const env = loadEnv('development', process.cwd(), "JWT");
let db = await con();
let coleccion = db.collection('roles');
    
const validateToken = async (token) => {
    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
            token,
            encoder.encode(env.JWT_SECRET)
        );
        return await coleccion.findOne({"_id": jwtData.payload.id});
    } catch (error) {
        console.log(error);
        return false;
    }
}


export {
    validateToken
}