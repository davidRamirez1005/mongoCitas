import {con} from '../../db/atlas.js'

const especialidadEsp = async(req, res) =>{
    if(!req.rateLimit) return;

    let db = await con();
    let coleccion = db.collection('medico');
    let result = await coleccion.find({med_especialidad : 'Pediatría'}).toArray();
    res.send(result)
}


export { especialidadEsp }