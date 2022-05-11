// Core
import express from 'express';
import session from 'express-session';

// Instruments
import {
    sessionOptions,
} from './utils';

// Routers
import * as routers from './routers';

const app = express();

app.use(session(sessionOptions));
app.use(express.json({ limit: '10kb' }));

//Routers
app.use('/users', routers.users);
app.use('/auth', routers.auth);
app.use('/classes', routers.classes);
app.use('/lessons', routers.lessons);

export { app };