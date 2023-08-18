import {con} from '../config/atlas.js'
import {datos_usuario, consultoria} from '../data/usuarioQuerys.js'

const listar = async(req, res) =>{
    if(!req.rateLimit) return;

    let db = await con();
    let coleccion = db.collection('usuario');
    let result = await coleccion.find().sort({ nombre: 1 }).project({_id : 0}).toArray();
    res.send(result)
}

const Paciente_medico = async(req, res) =>{
    if (!req.rateLimit) return;

    const medicoId = parseInt(req.params.medicoId);

    let db = await con();
    let coleccion = db.collection('cita');
    let result = await coleccion.aggregate([
        ...datos_usuario(medicoId)
    ]).toArray();
    res.status(200).json(result);
}

const pacientes = async(req, res) =>{
    if (!req.rateLimit) return;

    const usuarioId = parseInt(req.params.usuarioId);

    let db = await con();
    let coleccion = db.collection('cita');
    let result = await coleccion.aggregate([
        ...datos_usuario(usuarioId)
    ]).toArray();
    res.status(200).json(result);
}

export { listar, Paciente_medico, pacientes }