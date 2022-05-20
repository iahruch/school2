import express from 'express';
import { getLessons, createLesson } from './helpers';
import { getLessonByHash, updateLessonByHash, deleteLessonByHash } from './hash';
import { addLessonVideo, getVideoLesson, deleteVideoLesson } from './hash/videos';
import { addKeynotesLesson, getKeynotesLesson, deleteKeynotesLesson } from './hash/keynotes';
import { authenticate } from './../../utils';

const router = express.Router();

router.get('/', getLessons);
router.post('/', [authenticate], createLesson);

router.get('/:lessonHash', [authenticate], getLessonByHash);
router.put('/:lessonHash', [authenticate], updateLessonByHash);
router.delete('/:lessonHash', [authenticate], deleteLessonByHash);

router.post('/:lessonHash/videos', [authenticate], addLessonVideo);
router.get('/:lessonHash/videos/:videoHash', [authenticate], getVideoLesson);
router.delete('/:lessonHash/videos/:videoHash', [authenticate], deleteVideoLesson);

router.post('/:lessonHash/keynotes', [authenticate], addKeynotesLesson);

router.get('/:lessonHash/keynotes/:keynoteHash', [authenticate], getKeynotesLesson);
router.delete('/:lessonHash/keynotes/:keynoteHash', [authenticate], deleteKeynotesLesson);

export { router as lessons };