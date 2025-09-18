import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../users/users.model.js";
import { SALT_ROUNDS, JWT_SECRET_KEY, JWT_TOKEN_EXPIRES_IN } from "../config/config.js"; 

// Función para registrar un nuevo usuario
export async function registerUser({ name, email, password }) {
  // Comprobar si el email ya está registrado
  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) {
    throw new Error("El email ya está registrado");
  }

  // Hash de la contraseña
  // const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS || 10);

  // Crear el nuevo usuario en la base de datos
  const newUser = await User.create({
    name,
    email,
    password,
    role: 'CLIENT', // Asignar rol por defecto
  });

  // Generar token JWT
  const token = jwt.sign(
    { id: newUser.id, email: newUser.email, role: newUser.role },
    JWT_SECRET_KEY,
    { expiresIn: JWT_TOKEN_EXPIRES_IN || '1h' }
  );

  return {
    id: newUser.id,
    name: newUser.name,
    email: newUser.email,
    createdAt: newUser.createdAt,
    token,
  };
}

export async function loginUser({ email, password }) {
  // 1. Buscar usuario
  const user = await User.findOne({ where: { email } });
  if (!user) {
    throw new Error('El Usuario no existe');
  }

  // 2. Verificar contraseña
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error('Contraseña incorrecta');
  }

  // 3. Generar JWT (sin datos sensibles)
  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role,
    },
    JWT_SECRET_KEY,
    { expiresIn: JWT_TOKEN_EXPIRES_IN || '1h' } 
  );

  // 4. Retornar datos seguros
  return {
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
    token
  };
}