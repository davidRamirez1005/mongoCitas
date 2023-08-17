import {con} from '../../db/atlas.js'
import {especialidad} from '../data/medicoQuerys.js'

const especialidadEsp = async(req, res) =>{
    if(!req.rateLimit) return;

    let db = await con();
    let coleccion = db.collection('medico');
    let result = await coleccion.aggregate(especialidad).toArray();
    res.send(result)
}


export { especialidadEsp }