import { loadConfiguration } from '../infraestructure/atlasUri.js';
import {MongoClient} from  'mongodb'


export async function con() {
    try {
        const client = await MongoClient.connect(loadConfiguration());
        return client.db()
    } catch (error) {
        return{status: 500, message: error};
    }
}