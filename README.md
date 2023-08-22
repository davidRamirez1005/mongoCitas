# Citas en Mongo

### Solicitar token:

1. GET -- `/login`

debe pasar como body el email y contraseña que del rol que desea consultar:

#### => usuario, cita : rol de paciente

```json
{
  "ROL_EMAIL": "paciente1@example.com",
  "ROL_PASSWORD": "paciente123"
}
```
#### => usuario, cita, medico : rol de administrador

```json
{
  "ROL_EMAIL": "admin@example.com",
  "ROL_PASSWORD": "admin123"
}
```
#### => medico, cita : rol de medico

```json
{
  "ROL_EMAIL": "medico1@example.com",
  "ROL_PASSWORD": "medico123"
}
```
2. Al generar el token ubiquelo en 'Authorization' ___ bearer 'token generado ( importante colocar bearer antes del token)
#### => Gestión de usuarios:

Usar el endpoint `/usuario

1. GET -- *listar todas los usuarios ordenados alfabeticamente* => `/listar`: *http://127.0.0.3:5012/usuario/usuario/listar*
2. GET -- *Encontrar todos los pacientes que tienen citas con un médico específico (por ejemplo, el médico con _id 1)*  => `/medico/2`: *http://127.0.0.3:5012/usuario/usuario/medico/2*
3. GET -- *Obtener las consultorías para un paciente específico (por ejemplo, paciente con usu_id 1)* => `/consultoria/2`: *http://127.0.0.3:5012/usuario/usuario/consultoria/2*
4. POST --*Insertar un paciente a la tabla usuario pero si es menor de edad solicitar primero que ingrese el acudiente y validar si ya estaba registrado el acudiente:* : *http://127.0.0.3:5012/usuario/usuario*

```json
{
 "usu_nombre": "prueba",
"usu_primer_apellido": "González",
"usu_segundo_apellido": "Sánchez",
"usu_telefono": "5555555555",
"usu_direccion": "Calle 123, Ciudad",
"usu_email": "carlos@example.com",
"usu_tipodoc": "Cédula de Ciudadanía",
"usu_genero": "Masculino",
"usu_acudiente": 3
}
```



#### => Gestión de *citas*:

Usar el endpoint `/cita`

1. GET -- *Obtener todas las citas alfabéticamente* => `/listar`: *http://127.0.0.3:5012/cita/cita/listar*
2. GET -- *Encontrar todas las citas para un día específico (por ejemplo, '2023-07-19')* => `/diaEsp`: *http://127.0.0.3:5012/cita/cita/diaEsp*
3. GET -- *Mostrar todas las citas que fueron rechazadas y en un mes específico, mostrar la fecha de la cita, el nombre del usuario y el médico.* => `/citaRechazada`: *http://127.0.0.3:5012/cita/cita/citaRechazada*
4. GET -- *Obtener todas las citas realizadas por los pacientes de un genero si su estado de la cita fue realizada* => `/pacienteGenero`: *http://127.0.0.3:5012/cita/cita/pacienteGenero*
5. GET -- *Encontrar la próxima cita para un paciente específico (por ejemplo, el paciente con usu_id 1):* => `/cita/1`: *http://127.0.0.3:5012/cita/cita/1*

#### => Gestión de **medicos**:

Usar el endpoint `/medico`

1. GET -- *Obtener todos los médicos de una especialidad específica (por ejemplo, 'Pediatría'):* => `/Pediatría`: *http://127.0.0.3:5012/medico/medico/Pediatría*
2. GET -- *Obtener los médicos y sus consultorios*  => `/medCon`: *http://127.0.0.3:5012/medico/medico/medCon*
3. GET -- *Contar el número de citas que un médico tiene en un día específico (por ejemplo, el médico con med_nroMatriculaProfesional 12345 en '2023-07-19')*  => `/numeroCitas`: *http://127.0.0.3:5012/medico/medico/numeroCitas*