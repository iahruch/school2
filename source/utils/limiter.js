import rateLimit from 'express-rate-limit';

export const limiter = (numRequest, resetIn) => rateLimit({
    windowMs: resetIn,
    max: numRequest,
    message: 'Too many requests try again after some time',
    standardHeaders: false,
    //legacyHeaders: false,
});