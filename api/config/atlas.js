import {MongoClient} from  'mongodb'
import dotenv from 'dotenv';
import {loadEnv} from 'vite'

let env = loadEnv('development', process.cwd(), "ATLAS");
dotenv.config();

const URI = `mongodb+srv://${env.ATLAS_USER}:${env.ATLAS_PASSWORD}@cluster0.xuq9yaf.mongodb.net/${env.ATLAS_DB}`;

export async function con() {
    try {
        const client = await MongoClient.connect(URI);
        return client.db()
    } catch (error) {
        return{status: 500, message: error};
    }
}