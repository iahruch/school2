import { createLogger, format, transports } from 'winston';

const { combine, timestamp, printf, align } = format;

// const serverFormat = printf(({ level, message, label, timestamp }) => {
//     return `${timestamp} [${label}] ${level}: ${message}`;
// });

export const logger = (req, res, next) => {
    const { NODE_ENV } = process.env;

    if (NODE_ENV !== 'production') {
        const logConfiguration = {
            transports: [
                new transports.Console({
                    level: 'debug',
                    format: combine(
                        timestamp({ format: 'MMM-DD-YYYY HH:mm:ss' }),
                        align(),
                        printf((info) => `[${req.method}]: ${[ info.timestamp ]}: ${info.message}`),
                    ),
                }),
            ],

        };
        const logger = createLogger(logConfiguration);
        logger.info(JSON.stringify(req.body));
    }

    return next();
};

// Используя пакет winston настроить middleware который будет выводить в консоль
// следующую информацию:
// 1. Метод запроса
// 2. Время запроса
// 3. Пейлоад

// Обратите внимание!
// 1. Middleware должна применяться на уровне приложения.
// 2. Уровень логирования — debug.
// 3. Информация должна выводиться в консоль, только если сервер работает в DEV
// режиме