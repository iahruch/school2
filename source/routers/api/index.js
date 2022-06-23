import express from 'express';
import jwt from 'jsonwebtoken';
import { ValidationError } from '../../utils/errors/validationError';

import { getPassword } from '../../utils';

const router = express.Router();

router.post('/login', (req, res) => {
    try {
        const auth = req.header('authorization');

        if (!auth) {
            return res.status(401).json({ message: 'no auth header' });
        }
        const [type, credentials] = auth.split(' ');
        const [email, password] = Buffer.from(credentials, 'base64').toString()
            .split(':');
        console.log(email, password);
        
        let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
        if (!regex.test(email)) {
            return res.status(401).json({ message: 'email not valid' });
        }

        req.session.email = email;
        console.log(req.session);
        res.status(200).json({ message: 'OK' });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
});


router.post('/logout', (req, res) => {
    if (!req.session.email) {
        throw new ValidationError('cookie invalid', 401);
    } else {
        delete req.session.email;
        req.session.cookie.maxAge = new Date();
        res.sendStatus(204);
    }
} )

export { router as api };