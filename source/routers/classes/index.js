import express from 'express';
import { getClasses, createClasses } from './helpers';
import { getClassByHash, updateClassByHash, deleteClassByHash } from './hash';

const router = express.Router();

router.get('/', getClasses);
router.post('/', createClasses);

router.get('/:classHash', getClassByHash);
router.put('/:classHash', updateClassByHash);
router.delete('/:classHash', deleteClassByHash);


export { router as classes };