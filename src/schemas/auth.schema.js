import { body } from 'express-validator';

export const registerSchema = [
  body('email')
    .notEmpty().withMessage('El email es requerido.')
    .isEmail().withMessage('Debe ingresar un correo válido.'),
  body('password')
    .notEmpty().withMessage('la contraseña es requerida.')
    .isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres.'),
  body('username')
    .notEmpty().withMessage('El nombre de usuario es requerido.')
];

export const loginSchema = [
  body('email')
    .notEmpty().withMessage('El email es requerido.')
    .isEmail().withMessage('Debe proporcionar un correo válido.'),
  body('password')
    .notEmpty().withMessage('El contraseña es requerido.')
];
