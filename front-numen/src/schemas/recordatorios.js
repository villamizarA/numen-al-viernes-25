const { body } = require('express-validator');

// validación para la tarea
export const taskSchema = [
  body('title')
    .notEmpty().withMessage('Title is required'),
  body('description')
    .notEmpty().withMessage('Description is required'),
];
