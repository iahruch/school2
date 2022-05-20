import { time } from 'console';
import { createLogger, format, transports } from 'winston';
import path from 'path';
const { combine, timestamp, printf, colorize } = format;

const pathLogGeneral = path.resolve(path.join('logs', path.sep, 'errors.log'));
const pathLogValidation = path.resolve(path.join('logs', path.sep, 'validation_errors.log'));
const pathLogNotFound = path.resolve(path.join('logs', path.sep, 'not_found_errors.log'));

export const generalErrorHandler = (err, req, res, next) => {
    const logConfigGeneral = {
        transports: [
            new transports.File({
                filename: pathLogGeneral,
                level: 'debug',
                format: combine(
                    timestamp(),
                    colorize(),
                    printf(({ timestamp, message }) => `${timestamp}: ${err.name}: ${message}`),
                ),
            }),
        ],
    };
    const logConfigValidation = {
        transports: [
            new transports.File({
                filename: pathLogValidation,
                level: 'debug',
                format: combine(
                    timestamp(),
                    printf(({ timestamp, message }) => `${timestamp}: ${req.method}: ${req.originalUrl}: [${message}]: ${JSON.stringify(req.body)}`),
                ),
            }),
        ],
    };

    const logConfigNotFound = {
        transports: [
            new transports.File({
                filename: pathLogNotFound,
                level: 'debug',
                format: combine(
                    timestamp(),
                    colorize(),
                    printf(({ timestamp, message }) => `${timestamp}: ${req.method}: ${req.originalUrl}`),
                ),
            }),
        ],
    };

    let logger = null;
    switch (err.name) {
        case 'NotFoundError': // if (x === 'value1')
            logger = createLogger(logConfigNotFound);
            break;
        case 'ValidationError': // if (x === 'value2')
            logger = createLogger(logConfigValidation);
            break;
        default:
            logger = createLogger(logConfigGeneral);
            break;
    }
    logger.error(err.message);
    res.status(err.statusCode || 400).json({ message: err.message });
};