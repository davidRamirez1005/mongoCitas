const rolesPermitidos = {
    admin: ['admin', 'vendedor'],
    vendedor: ['vendedor']
}
const validarPermisos = (req, res, next) => {
    //Comprueba que el usuario este accediendo a la url permitida para su rol
    if (rolesPermitidos[req.user.rol].includes(req.url.split('/')[2])) {
      next();
    } else {
      res.status(403).send('No tienes permisos para acceder a este recurso');
    }
}
export default validarPermisos;