import express from 'express';
import { getLessons, createLesson } from './helpers';
import { getLessonByHash, updateLessonByHash, deleteLessonByHash } from './hash';
import { addLessonVideo, getVideoLesson, deleteVideoLesson } from './hash/videos';
import { addKeynotesLesson, getKeynotesLesson, deleteKeynotesLesson } from './hash/keynotes';

const router = express.Router();

router.get('/', getLessons);
router.post('/', createLesson);

router.get('/:lessonHash', getLessonByHash);
router.put('/:lessonHash', updateLessonByHash);
router.delete('/:lessonHash', deleteLessonByHash);

router.post('/:lessonHash/videos', addLessonVideo);
router.get('/:lessonHash/videos/:videoHash', getVideoLesson);
router.delete('/:lessonHash/videos/:videoHash', deleteVideoLesson);

router.post('/:lessonHash/keynotes', addKeynotesLesson);

router.get('/:lessonHash/keynotes/:keynoteHash', getKeynotesLesson);
router.delete('/:lessonHash/keynotes/:keynoteHash', deleteKeynotesLesson);

export { router as lessons };