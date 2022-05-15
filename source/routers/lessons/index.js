import express from 'express';
import { getLessons, createLesson } from './helpers';
import { getLessonByHash, updateLessonByHash, deleteLessonByHash } from './hash';
import { addLessonVideo, getVideoLesson, deleteVideoLesson } from './hash/videos';
import { addKeynotesLesson, getKeynotesLesson, deleteKeynotesLesson } from './hash/keynotes';
import { isAuthorization } from './../../utils';

const router = express.Router();

router.get('/', getLessons);
router.post('/', [isAuthorization], createLesson);

router.get('/:lessonHash', [isAuthorization], getLessonByHash);
router.put('/:lessonHash', [isAuthorization], updateLessonByHash);
router.delete('/:lessonHash', [isAuthorization], deleteLessonByHash);

router.post('/:lessonHash/videos', [isAuthorization], addLessonVideo);
router.get('/:lessonHash/videos/:videoHash', [isAuthorization], getVideoLesson);
router.delete('/:lessonHash/videos/:videoHash', [isAuthorization], deleteVideoLesson);

router.post('/:lessonHash/keynotes', [isAuthorization], addKeynotesLesson);

router.get('/:lessonHash/keynotes/:keynoteHash', [isAuthorization], getKeynotesLesson);
router.delete('/:lessonHash/keynotes/:keynoteHash', [isAuthorization], deleteKeynotesLesson);

export { router as lessons };