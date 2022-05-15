import express from 'express';
import { getClasses, createClasses } from './helpers';
import { getClassByHash, updateClassByHash, deleteClassByHash, enrollStudentClass, expelStudentClass } from './hash';
import { isAuthorization } from './../../utils';

const router = express.Router();

router.get('/', getClasses);
router.post('/', [isAuthorization], createClasses);

router.get('/:classHash', [isAuthorization], getClassByHash);
router.put('/:classHash', [isAuthorization], updateClassByHash);
router.delete('/:classHash', [isAuthorization], deleteClassByHash);

router.post('/:classHash/enroll', [isAuthorization], enrollStudentClass);
router.post('/:classHash/expel', [isAuthorization], expelStudentClass);

export { router as classes };