import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {useAuth} from '../../../auth/infraestructure/Context'
import LoadingQuery from '../../../shared/LoadingQuery'

let backendUrl = `${import.meta.env.VITE_HOSTNAME}:${import.meta.env.VITE_PORT_BACKEND}`;

export default function Listar() {
    const auth = useAuth();

    let [isLoading, setIsLoading] = useState(false);
    let [doctors, setDoctors] = useState([]);
    let bearerAuth = auth.user.bearer

    const listar = async () => {
        setIsLoading(true);
        try {
        const response = await axios.get(`http://${backendUrl}/medico/medico/medCon`, {
            headers: {
            'Content-Type': 'application/json',
            'Accept-Version': '1.0.0',
            'Authorization': `Bearer ${bearerAuth}`,
            },
        });
        if (response.status != 200) {
            throw new Error('Error en la solicitud');
        }
        const medicosData = response.data;
        setDoctors(medicosData);
        console.log(medicosData);
        } catch (error) {
            console.log(error);
            return alert('error en la consulta');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        listar();
    }, []);
  return (
    <div>
         {doctors.map((medico) => (
         <div key={medico._id}>
             <h1>{medico.med_nombreCompleto}</h1>
             <h3>{medico.med_consultorio}</h3>
             <hr />
         </div>
         ))}
        <div style={{display : "flex", justifyContent : "center"}}>
            {isLoading && <LoadingQuery />}
        </div>
    </div>
  )
}
