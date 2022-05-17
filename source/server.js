// Core
import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';

// Instruments
import {
    sessionOptions,
    logger,
    generalErrorHandler,
    otherRouterHandler,
} from './utils';

// Routers
import * as routers from './routers';

const app = express();


app.use(session(sessionOptions));
app.use(bodyParser.json({ limit: '10kb' })); //app.use(express.json({ limit: '10kb' }));
app.use(logger);

//Routers
app.use('/users', routers.users);
app.use('/auth', routers.auth);
app.use('/classes', routers.classes);
app.use('/lessons', routers.lessons);

app.use('*', otherRouterHandler);
app.use(generalErrorHandler);
export { app };