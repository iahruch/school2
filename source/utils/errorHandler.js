import { time } from 'console';
import { createLogger, format, transports } from 'winston';
const { combine, timestamp, printf, align } = format;


export const generalErrorHandler = (err, req, res, next) => {
    // console.log('NODE_ENV :>> ', process.env.NODE_ENV);
    if (process.env.NODE_ENV === 'test') {
        const logConfig = {
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

        const logger = createLogger(logConfig);
        logger.error(err.message);
    }
    console.log('err :>> ', err);
    res.status(err.statusCode || 400).json({ message: err.message });
};