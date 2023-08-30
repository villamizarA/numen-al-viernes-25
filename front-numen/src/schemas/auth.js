import { body } from 'express-validator';

// Definición para el inicio de sesión
export const loginSchema = [
  body('email')
    .notEmpty().withMessage('El email es requerido.')
    .isEmail().withMessage('Debe proporcionar un correo válido.'),
  body('password')
    .notEmpty().withMessage('La contraseña es requerida.')
];

// para el registro
export const registerSchema = [
  body('username')
    .notEmpty().withMessage('El nombre de usuario es requerido.')
    .isLength({ min: 3 }).withMessage('El nombre de usuario debe tener al menos 3 caracteres.'),
  body('email')
    .notEmpty().withMessage('El email es requerido.')
    .isEmail().withMessage('Debe ingresar un correo válido.'),
  body('password')
    .notEmpty().withMessage('La contraseña es requerida.')
    .isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres.'),
  body('confirmPassword')
    .notEmpty().withMessage('La confirmación de contraseña es requerida.')
    .isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres.')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Las contraseñas no coinciden');
      }
      return true;
    }),
];
