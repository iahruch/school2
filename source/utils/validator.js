import Ajv from 'ajv';

export const validator = (schema) => (req, res, next) => {
    const ajv = new Ajv();
    const validate = ajv.compile(schema);

    const valid = validate(req.body);

    if (valid) {
        return next();
    }
    const validateErrors = validate.errors.map(({ message }) => message).join('. ');

    res.status(400).json({ message: validateErrors });
};