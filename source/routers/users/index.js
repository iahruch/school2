import express from 'express';
import {get, post } from './handlers';
import { userByHash, userUpdateByHash, userDeleteByHash } from './hash';

import { validator } from './../../utils';
import { createUserSchema } from './../../schemas/schemaUser';

import { isAuthorization } from './../../utils';
const router = express.Router();

router.get('/', [isAuthorization], get);
router.post('/', [validator(createUserSchema)], post);

router.get('/:userHash', [isAuthorization], userByHash);
router.put('/:userHash', [isAuthorization], userUpdateByHash);
router.delete('/:userHash', [isAuthorization], userDeleteByHash);

export { router as users };