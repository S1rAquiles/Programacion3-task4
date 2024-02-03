const jwt = require('jsonwebtoken');
const { secretKey2 } = process.env;
function verifyToken2(req, res, next) {
	
	const token = req.cookies.token2;

  if (token) {
    // Verificar y decodificar el token
    jwt.verify(token,secretKey2,(err, decodedToken) => {
      if (err) {
        // Error de verificación del token
        res.status(401).json({ error: 'Token inválido' });
      } else {
        // Token válido, almacenar los datos decodificados en el objeto de solicitud para su uso posterior
        req.user = decodedToken.user;
        next();
      }
    });
  } else {
    // No se proporcionó el token
    res.redirect('/login');
  }
}

module.exports = {
  verifyToken2
};