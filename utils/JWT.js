const jwt = require('jsonwebtoken');
const { secretKey } = process.env;
function verifyToken(req, res, next) {
	
	const token = req.cookies.token;

  if (token){
    // Verificar y decodificar el token
    jwt.verify(token,secretKey,(err, decodedToken) => {
      if (err){
        // Error de verificación del token
        res.status(401).json({ error: 'Token inválido' });
      } else{
        //Token válido, almacenar los datos decodificados en el objeto de solicitud para su uso posterior
        req.user = decodedToken.user;
        console.log('datos del token desde el middleware JWT',req.user);
        next();
      }
    });
  } else {
    // No se proporcionó el token
    res.redirect('/registroUsers');
  }
}

module.exports = {
  verifyToken
};