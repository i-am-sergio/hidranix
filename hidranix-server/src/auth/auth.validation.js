import Joi from 'joi';

// Validación de los datos de registro
export function validateRegisterData(data) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    email: Joi.string().email().required(),
    password: Joi.boolean().required(),
  });
  return schema.validate(data);
}

// Validación de los datos de login
export function validateLoginData(data) {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
}
