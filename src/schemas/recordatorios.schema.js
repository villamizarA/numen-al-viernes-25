import { body } from "express-validator";

export const createRecordatorioSchema = [
  body('title')
    .notEmpty().withMessage('el titulo es obligatorio')
    .isString().withMessage('titulo'),

  body('description')
    .optional()
    .isString().withMessage('Descripción'),

];
