import express from 'express';
import { login, logout } from './handlers';
import { limiter } from './../../utils';
import { authenticate } from '../../utils';

const router = express.Router();

router.post('/login', [limiter(3, 60 * 1000)], login);
router.post('/logout', [authenticate], logout);

export { router as auth };