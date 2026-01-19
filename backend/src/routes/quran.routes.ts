import { Router } from 'express';
import { quranController } from '../controllers/quran.controller';

const router = Router();

// Get all surahs
router.get('/surahs', quranController.getAllSurahs);

// Get specific surah
router.get('/surah/:id', quranController.getSurah);

// Get specific verse
router.get('/verse/:surahId/:verseId', quranController.getVerse);

// Search Quran
router.get('/search', quranController.searchQuran);

// Get juz
router.get('/juz/:juzId', quranController.getJuz);

export default router;