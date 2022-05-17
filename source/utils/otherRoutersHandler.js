import { NotFoundError } from './errors';

export const otherRouterHandler = (req, res, next) => {
    const message = `Router does not exist. Method: ${req.method}. Url: ${req.originalUrl}`;
    const error = new NotFoundError(message, 404);
    next(error);
};