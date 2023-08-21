export const fecha = [
    {
        $match: { Fecha_Inicio: new Date('2023-07-19') }
    },
    {
        $project : {
            _id : 0
            
        }
    }
];
let generoConsultado = "Masculino";
export const generoAtendido = [
    {
        $lookup: {
            from: "usuario",
            localField: "cit_datosUsuario",
            foreignField: "_id",
            as: "datosUsuario"
        }
    },
    {
        $match: {
            "datosUsuario.usu_genero": generoConsultado,
            "cit_estado": "Realizada"
        }
    },
    {
        $project: {
            _id: 0,
            "cita": "$$ROOT"
        }
    }
];
let mesEspecifico = 7;
export const rechazadaCita = [
    {
        $match: {
        cit_estado: "Rechazada",
        cit_fecha: {
            $gte: new Date(`2023-${mesEspecifico}-01`),
            $lt: new Date(`2023-${mesEspecifico + 1}-01`)
        }
        }
    },
    {
        $lookup: {
        from: "usuario",
        localField: "cit_datosUsuario",
        foreignField: "_id",
        as: "usuario"
        }
    },
    {
        $lookup: {
        from: "medico",
        localField: "cit_medico",
        foreignField: "_id",
        as: "medico"
        }
    },
    {
        $project: {
        _id: 0,
        cit_fecha: 1,
        "usuario.usu_nombre": 1,
        "usuario.usu_primer_apellido": 1,
        "medico.med_nombreCompleto": 1
        }
    }
    ];