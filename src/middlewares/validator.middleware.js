import { validationResult } from 'express-validator';

export const validateSchema = (schemaArray) => async (req, res, next) => {
await Promise.all(schemaArray.map(schema => schema.run(req)));

const errors = validationResult(req);
if (errors.isEmpty()) {
return next();
}

return res.status(400).json({ errors: errors.array() });
};
