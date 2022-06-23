// Core
import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import passport from 'passport';
import passportCong from './utils/options/passport.conf';

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

app.use(bodyParser.json({ limit: '10kb' }));
app.use(session(sessionOptions));

//passport
passportCong(passport);
app.use(passport.initialize());

//logger console
if (process.env.NODE_ENV === 'development') {
    app.use(logger);
}

//Routers
app.use('/users', routers.users);
app.use('/auth', routers.auth);
app.use('/classes', routers.classes);
app.use('/lessons', routers.lessons);
app.use('/api', routers.api);

app.use('*', otherRouterHandler);
if (process.env.NODE_ENV !== 'test') {
    app.use(generalErrorHandler);
}

export { app };