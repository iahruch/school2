import { time } from 'console';
import { createLogger, format, transports } from 'winston';
const { combine, timestamp, printf, align } = format;


export const generalErrorHandler = (err, req, res, next) => {
    if (process.env.NODE_ENV === 'test') {
        const logConfigGeneral = {
            transports: [
                new transports.File({
                    filename: 'logs/errors.log',
                    level: 'debug',
                    format: combine(
                        timestamp(),
                        printf(({ timestamp, message }) => `${timestamp}: ${err.name}: ${message}`),
                    ),
                }),
            ],
        };
        const logConfigValidation = {
            transports: [
                new transports.File({
                    filename: 'logs/validation_errors.log',
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
                    filename: 'logs/not_found_errors.log',
                    level: 'debug',
                    format: combine(
                        timestamp(),
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
    }
    res.status(err.statusCode || 400).json({ message: err.message });
};