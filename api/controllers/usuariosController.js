import {con} from '../config/atlas.js'
import {datos_usuario, consultoria} from '../data/usuarioQuerys.js'
import siguienteId from '../helpers/siguienteId.js'

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
        ...consultoria(usuarioId)
    ]).toArray();
    res.status(200).json(result);
}

const insertarPaciente = async(req, res) =>{
    if (!req.rateLimit) return;

    try {
        const newId = await siguienteId( "usuario");

        let db = await con();
        const acudiente = await db.collection('usuario').findOne({ _id: Number(req.body.usu_acudiente) });
        if (!acudiente) {
            console.log("El acudiente no está registrado. Registre primero al acudiente.");
            return;
        }
        let coleccion = db.collection('usuario');
        
        const newDocument = {
            _id: newId,
            ...req.body
        };
        let result = await coleccion.insertOne(newDocument);
        // console.log(result);
        res.status(201).send({ status: 201, message: 'documento creado con exito' });
    } catch (error) {
        console.log(error);
        res.status(406).send('no se ha podido crear el documento');
    }
}


export { listar, Paciente_medico, pacientes, insertarPaciente }