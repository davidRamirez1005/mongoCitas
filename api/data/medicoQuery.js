/**
 * ? Obtener los médicos y sus consultorios
 */
export const encontrar_medCon = [

    {
        $project: {
            _id: 1,
            med_nombreCompleto: 1,
            med_consultorio : 1,

        }
    }
];
/**
 * ? Contar el número de citas que un médico tiene en un día específico (por ejemplo, el médico con med_nroMatriculaProfesional 12345 en '2023-07-19')
 */
const fechaEspecifica = new Date('2023-07-19');
const numeroMedico = 12345;

export const countCitas = [
    {
        $lookup: {
            from: "medico",
            localField: "cit_medico",
            foreignField: "_id",
            as: "medico_relacionado"
        }
    },
    {
        $match: {
            cit_fecha: fechaEspecifica,
            "medico_relacionado.med_nroMatriculaProfesional": numeroMedico
        }
    },
    {
        $unwind: "$medico_relacionado"
    },
    {
        $group: {
            _id: "$cit_medico",
            medico: { $first: "$medico_relacionado.med_nombreCompleto" },
            numeroCitas: { $sum: 1 }
        }
    }
];


