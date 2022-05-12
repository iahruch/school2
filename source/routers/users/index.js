import express from 'express';
import {get, post } from './handlers';
import { userByHash, userUpdateByHash, userDeleteByHash } from './hash';

import { validator } from './../../utils';
import { createUserSchema } from './../../schemas/schemaUser';

const router = express.Router();

router.get('/', get);
router.post('/', [validator(createUserSchema)], post);

router.get('/:userHash', userByHash);
router.put('/:userHash', userUpdateByHash);
router.delete('/:userHash', userDeleteByHash);

export { router as users };