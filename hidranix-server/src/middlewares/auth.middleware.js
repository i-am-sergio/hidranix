import jwt from 'jsonwebtoken';
import { JWT_SECRET_KEY } from '../config/config.js'; 

export const authenticate = (req, res, next) => {
  // 1. Obtener el token de las cookies
  const token = req.cookies.access_token;
  
  if (!token) {
    return res.status(401).json({ 
      message: 'No autorizado: Token no proporcionado' 
    });
  }

  // 2. Verificar el token
  jwt.verify(token, JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({ 
        success: false,
        message: 'No autorizado: Token inválido' 
      });
    }
    
    // 3. Añadir el usuario decodificado al request
    req.user = decoded;
    next();
  });
};


// Middleware para verificar roles
export const authorize = (roles = []) => {
  return (req, res, next) => {

    if (!req.user?.role) {
      return res.status(403).json({ message: 'Rol no definido en el token' });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ 
        message: `Acceso denegado. Se requiere uno de estos roles: ${roles.join(', ')}`,
        yourRole: req.user.role // ← Para debug
      });
    }
    next();
  };
};