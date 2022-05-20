import express from 'express';
import jwt from 'jsonwebtoken';

import { getPassword } from '../../utils';
//import getToken from './helper.js';

const router = express.Router();

const getToken = (data, password, opts) => {
    return new Promise((resolve, reject) => {
        console.log(data, password, opts);
        jwt.sign(data, password, opts, (err, token) => {
            if (err) {
                reject(err);
            }
            resolve(token);
        });
    });
};

router.post('/auth/login', (req, res) => {
    try {
        const auth = req.header('authorization');

        if (!auth) {
            return res.status(401).json({ message: 'no auth header' });
        }
        const [type, credentials] = auth.split(' ');
        const [email, password] = Buffer.from(credentials, 'base64').toString()
            .split(':');

        let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
        if (!regex.test(email)) {
            return res.status(401).json({ message: 'email not valid' });
        }

        req.session.email = email;
        res.status(200).json({ message: 'OK' });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
});


router.post('/login', async(req, res, next) => {
    const { username, email } = req.body;

    if (username !== 'hruch') {
        return res.status(401).json({ message: 'user is not valid' });
    }
    try {
        const jwtToken = await getToken({ username }, getPassword(), { expiresIn: '60s' });
        console.log('jwtToken :>> ', jwtToken);
        res.header('X-Token', `JWT ${jwtToken}`);
        res.status(200).json({ message: 'user is authenticated' });
    } catch (error) {
        return res.status(401).json({ message: error.message });
    }
});

export { router as api };