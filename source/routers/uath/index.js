import express from 'express';
import { login, logout } from './handlers';
import { limiter } from './../../utils';

const router = express.Router();

router.post('/login', [limiter(3, 60 * 1000)], login);
router.post('/logout', logout);

export { router as auth };