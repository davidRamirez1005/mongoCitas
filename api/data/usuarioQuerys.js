/**
 * ? Encontrar todos los pacientes que tienen citas con un médico específico (por ejemplo, el médico con _id 1)
 */
export const datos_usuario = (medicoId) => [
    {
        $match: { cit_medico: medicoId }
    },
    {
        $lookup: {
            from: "usuario",
            localField: "cit_datosUsuario",
            foreignField: "_id",
            as: "datosUsuario"
        }
    },
    {
        $unwind: "$datosUsuario"
    },
    {
        $project: {
            _id: "$datosUsuario._id",
            nombre_usuario: "$datosUsuario.usu_nombre",
            primer_apellido : "$datosUsuario.usu_primer_apellido",
            segundo_apellido : "$datosUsuario.usu_primer_apellido",
            usu_segundo_apellido : "$datosUsuario.usu_segundo_apellido",
            correo: "$datosUsuario.usu_email",
            telefono: "$datosUsuario.usu_telefono",
            documento : "$datosUsuario.usu_tipodoc",
            cita: {
                _id: "$_id",
                fecha: "$cit_fecha",
                estado: "$cit_estado",
                id_medico : "$cit_medico"
            }
        }
    }
];
/**
 * ? Obtener las consultorías para un paciente específico (por ejemplo, paciente con usu_id 1)
 */
export const consultoria = (usuarioId) => [

    {
        $lookup: {
            from: "usuario",
            localField: "cit_datosUsuario",
            foreignField: "_id",
            as: "datosUsuario"
        }
    },
    {
        $match: { "datosUsuario._id": usuarioId }
    },
    {
        $unwind: "$datosUsuario"
    },
    {
        $project: {
            _id: "$datosUsuario._id",
            nombre_usuario: "$datosUsuario.usu_nombre",
            primer_apellido : "$datosUsuario.usu_primer_apellido",
            segundo_apellido : "$datosUsuario.usu_primer_apellido",
            usu_segundo_apellido : "$datosUsuario.usu_segundo_apellido",
            correo: "$datosUsuario.usu_email",
            telefono: "$datosUsuario.usu_telefono",
            documento : "$datosUsuario.usu_tipodoc",
            cita: {
                _id: "$_id",
                fecha: "$cit_fecha",
                estado: "$cit_estado",
                id_medico : "$cit_medico"
            }
        }
    }
];