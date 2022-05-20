import { getPassword } from './env';
import { ValidationError } from './errors/validationError';


// const password = getPassword();


export const authenticate = (req, res, next) => {
    console.log('req.session :>> ', req.headers);

    if (!req.session.email) {
        throw new ValidationError('cookie invalid', 401);
    } else {
        next();
    }

    //old
    // const auth = req.header('Authorization');

    // if (auth && auth === password) {
    //     next();
    // } else {
    //     throw new ValidationError('Authentication credentials are not valid', 401);
    // }
};