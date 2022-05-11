import express from 'express';
import { getLessons, createLesson } from './helpers';
import { getLessonByHash, updateLessonByHash, deleteLessonByHash } from './hash';
import { addVideos } from './hash/videos';
import { getVideoLesson, deleteVideoLesson } from './hash/videos/hash';

const router = express.Router();

router.get('/', getLessons);
router.post('/', createLesson);

router.get('/:lessonHash', getLessonByHash);
router.put('/:lessonHash', updateLessonByHash);
router.delete('/:lessonHash', deleteLessonByHash);

router.post('/:lessonHash/videos', addVideos);
router.get('/:lessonHash/videos/:videoHash ', getVideoLesson);
router.delete('/:lessonHash/videos/:videoHash ', deleteVideoLesson);

export { router as lessons };