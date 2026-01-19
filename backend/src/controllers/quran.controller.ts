import { Request, Response } from 'express';
import { quranService } from '../services/quran.service';

export class QuranController {
  async getAllSurahs(req: Request, res: Response) {
    try {
      console.log('📖 Fetching all surahs...');
      const surahs = await quranService.getAllSurahs();
      console.log(`✅ Successfully fetched ${surahs.length} surahs`);
      
      res.json({
        success: true,
        data: surahs,
        count: surahs.length
      });
    } catch (error: any) {
      console.error('❌ Error fetching surahs:', error);
      res.status(500).json({
        success: false,
        error: error.message || 'Failed to fetch surahs from API'
      });
    }
  }

  async getSurah(req: Request, res: Response) {
    try {
      const surahNumber = parseInt(req.params.id);
      const translation = req.query.translation as string;
      
      if (isNaN(surahNumber) || surahNumber < 1 || surahNumber > 114) {
        return res.status(400).json({
          success: false,
          error: 'Invalid surah number. Must be between 1 and 114'
        });
      }

      const surah = await quranService.getSurah(surahNumber, translation);
      res.json({
        success: true,
        data: surah
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: error.message
      });
    }
  }

  async getVerse(req: Request, res: Response) {
    try {
      const surahId = parseInt(req.params.surahId);
      const verseId = parseInt(req.params.verseId);
      const translation = req.query.translation as string;
      
      if (isNaN(surahId) || surahId < 1 || surahId > 114) {
        return res.status(400).json({
          success: false,
          error: 'Invalid surah number'
        });
      }

      if (isNaN(verseId) || verseId < 1) {
        return res.status(400).json({
          success: false,
          error: 'Invalid verse number'
        });
      }

      const verse = await quranService.getVerse(surahId, verseId, translation);
      res.json({
        success: true,
        data: verse
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: error.message
      });
    }
  }

  async searchQuran(req: Request, res: Response) {
    try {
      const query = req.query.q as string;
      const translation = req.query.translation as string;
      
      if (!query || query.trim().length < 2) {
        return res.status(400).json({
          success: false,
          error: 'Search query must be at least 2 characters long'
        });
      }

      const results = await quranService.searchQuran(query, translation);
      res.json({
        success: true,
        query: query,
        count: results.length,
        data: results
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: error.message
      });
    }
  }

  async getJuz(req: Request, res: Response) {
    try {
      const juzId = parseInt(req.params.juzId);
      const translation = req.query.translation as string;
      
      if (isNaN(juzId) || juzId < 1 || juzId > 30) {
        return res.status(400).json({
          success: false,
          error: 'Invalid juz number. Must be between 1 and 30'
        });
      }

      const juz = await quranService.getJuz(juzId, translation);
      res.json({
        success: true,
        data: juz
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: error.message
      });
    }
  }
}

export const quranController = new QuranController();