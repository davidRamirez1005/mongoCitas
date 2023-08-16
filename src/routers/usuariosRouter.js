import {Router} from 'express';
import dotenv from 'dotenv';
import {con} from '../../db/atlas.js'
import siguienteId from '../helpers/siguienteId.js';

dotenv.config();

const appUsuarios = Router();

/**
 * ! GET
 * ? listar todas las bodegas ordenadas
 * * http://127.0.0.3:5012/usuario/listar
 */
appUsuarios.get('/listar', async(req, res) =>{
    if(!req.rateLimit) return;

    let db = await con();
    let coleccion = db.collection('usuario');
    let result = await coleccion.find().sort({ nombre: 1 }).project({_id : 0}).toArray();
    res.send(result)
})

/**
* ! POST
* ? agregar una nueva bodega
* * http://127.0.0.3:5012/usuario
*/
appUsuarios.post('/', async (req, res) => {
    if (!req.rateLimit) return;

    try {
        const newId = await siguienteId( "usuario");

        let db = await con();
        let coleccion = db.collection('usuario');
        
        const newDocument = {
            _id: newId,
            ...req.body
        };
        let result = await coleccion.insertOne(newDocument);
        console.log(result);
        res.status(201).send({ status: 201, message: 'documento creado con exito' });
    } catch (error) {
        console.log(error);
        res.status(406).send('no se ha podido crear el documento');
    }
});


export default appUsuarios;