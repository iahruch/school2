import express from 'express';
import passport from 'passport';
import {get, post } from './handlers';
import { userByHash, userUpdateByHash, userDeleteByHash } from './hash';

import { validator } from './../../utils';
import { createUserSchema } from './../../schemas/schemaUser';

import { authenticate } from './../../utils';
const router = express.Router();

router.get('/', passport.authenticate('jwt', { session: false }), get);
router.post('/', [validator(createUserSchema)], post);

router.get('/:userHash', [authenticate], userByHash);
router.put('/:userHash', [authenticate], userUpdateByHash);
router.delete('/:userHash', [authenticate], userDeleteByHash);

export { router as users };