import { ValidationError } from './errors/validationError';

export const isAuthorization = (req, res, next) => {
    //console.log('req.headers() :>> ', req.header('Authorization'));
    const authHeader = req.header('Authorization');
    const { PASSWORD } = process.env;

    if (!authHeader) {
        throw new ValidationError('You must be logged in to use the resource.', 401);
    }

    if (authHeader !== PASSWORD) {
        throw new ValidationError('Entered incorrect password', 401);
    }
    next();
};