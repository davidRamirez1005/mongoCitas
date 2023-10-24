import genCollection from '../config/connect.js';
import { jwtVerify } from "jose";
import {loadEnv} from 'vite'

const env = loadEnv('development', process.cwd(), "JWT");

    
const validateToken = async (token) => {
    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
            token,
            encoder.encode(env.JWT_SECRET)
        );
        return await genCollection("roles").findOne({"_id": jwtData.payload.id});
    } catch (error) {
        console.log(error);
        return false;
    }
}


export {
    validateToken
}