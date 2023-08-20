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
export const generoAtendido = [
    {
        $match: { usu_genero: 'Masculino' }
    },
    {
        $project : {
            _id : 0
            
        }
    }
];