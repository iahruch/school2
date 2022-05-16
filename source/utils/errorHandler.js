import { time } from 'console';
import { createLogger, format, transports } from 'winston';
const { combine, timestamp, printf, align } = format;


export const errorHandler = (err, req, res, next) => {
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
    //console.log('err.message :>> ', err.message);
    res.status(400).json({ message: err.message });
};