import {con} from '../config/atlas.js'
import { encontrar_medCon, countCitas } from '../data/medicoQuery.js'

const especialidadEsp = async(req, res) =>{
    if(!req.rateLimit) return;

    let db = await con();
    let coleccion = db.collection('medico');
    let result = await coleccion.find({med_especialidad : 'Pediatría'}).toArray();
    res.send(result)
}
const medico_consultorio = async(req, res) =>{
    if(!req.rateLimit) return;

    let db = await con();
    let coleccion = db.collection('medico');
    let result = await coleccion.aggregate(encontrar_medCon).toArray();
    res.send(result)
}
const numeroCitas = async(req, res) =>{
    if(!req.rateLimit) return;

    let db = await con();
    let coleccion = db.collection('cita');
    let result = await coleccion.aggregate(countCitas).toArray();
    res.send(result)
}


export { especialidadEsp, medico_consultorio, numeroCitas }