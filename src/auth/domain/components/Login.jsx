import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';
import { useAuth } from '../../infraestructure/Context';


let backendUrl = `${import.meta.env.VITE_HOSTNAME}:${import.meta.env.VITE_PORT_BACKEND}`;

export default function Login() {
    const navigate = useNavigate();
    const auth = useAuth();

    let [ROL_EMAIL, getMail] = useState('admin@example.com');
    let [ROL_PASSWORD, getCon] = useState('admin123');
    let [token, setToken] = useState('');


const login = async () => {
    try {
        const response = await axios.post(`http://${backendUrl}/login`, {
        ROL_EMAIL,
        ROL_PASSWORD,
        }, 
        {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        });

        if (response.status != 200) {
            throw new Error('Error en la solicitud');
        }
        const data = response.data;
        setToken(data.Token);
        const TOKEN = data.Token
        localStorage.setItem('token', TOKEN, { expires: 1 }); 

        if (!TOKEN) {
            return alert('Verifica los datos ingresados');
        } else {
            auth.logins({ email: ROL_EMAIL , password : ROL_PASSWORD, bearer : TOKEN});
            navigate('/Medico');

        }
        } catch (error) {
            return alert('Verifica los datos ingresados');
        } finally {
        }
    };


    
return (
<div>
    <br />
    
<div>
    <div><span>Inicia sesión</span></div>
        <input type="email" value={ROL_EMAIL}
        onChange={(e) => getMail(e.target.value)} placeholder="Email" />
        <input type="password" value={ROL_PASSWORD}
        onChange={(e) => getCon(e.target.value)} placeholder="contraseña" />

    <button  value="login" onClick={login}>
        <span >ENVIAR</span>
    </button>
</div>
</div>
);
}