import {con} from '../../db/atlas.js'

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
    let result = await coleccion.findOne({ cit_datosUsuario: citaId }); // Usar findOne para obtener un solo documento
    res.send(result);
};



export { listar, idEsp }