import express from 'express';
import { getClasses, createClasses } from './helpers';
import { getClassByHash, updateClassByHash, deleteClassByHash, enrollStudentClass, expelStudentClass } from './hash';
import { authenticate } from './../../utils';

const router = express.Router();

router.get('/', getClasses);
router.post('/', [authenticate], createClasses);

router.get('/:classHash', [authenticate], getClassByHash);
router.put('/:classHash', [authenticate], updateClassByHash);
router.delete('/:classHash', [authenticate], deleteClassByHash);

router.post('/:classHash/enroll', [authenticate], enrollStudentClass);
router.post('/:classHash/expel', [authenticate], expelStudentClass);

export { router as classes };