import express from 'express';
import { getClasses, createClasses } from './helpers';
import { getClassByHash, updateClassByHash, deleteClassByHash, enrollStudentClass, expelStudentClass } from './hash';

const router = express.Router();

router.get('/', getClasses);
router.post('/', createClasses);

router.get('/:classHash', getClassByHash);
router.put('/:classHash', updateClassByHash);
router.delete('/:classHash', deleteClassByHash);

router.post('/:classHash/enroll', enrollStudentClass);
router.post('/:classHash/expel', expelStudentClass);

export { router as classes };