import {con} from '../config/atlas.js'
import { fecha, generoAtendido } from '../data/citaQuery.js'

const listar = async(req, res) =>{
    if(!req.rateLimit) return;

    let db = await con();
    let coleccion = db.collection('cita');
    let result = await coleccion.find().sort({ nombre: 1 }).project({_id : 0}).toArray();
    res.send(result)
}
const idEsp = async (req, res) => {
    if (!req.rateLimit) return;

    const citaId = parseInt(req.params.citaId);

    let db = await con();
    let coleccion = db.collection('cita');
    let result = await coleccion.findOne({ cit_datosUsuario: citaId });
    res.send(result);
};

const diaEspe = async (req, res) => {
    if (!req.rateLimit) return;

    let db = await con();
    let coleccion = db.collection('cita');
    let result = await coleccion.aggregate(fecha).toArray();
    res.send(result);
};
const citaGenero = async (req, res) => {
    if (!req.rateLimit) return;

    let db = await con();
    let coleccion = db.collection('cita');
    let result = await coleccion.aggregate(generoAtendido).toArray();
    res.send(result);
};

export { listar, idEsp, diaEspe, citaGenero }