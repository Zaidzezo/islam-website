import { apiClient } from '../utils/api-client';
import { cacheService } from './cache.service';
import { QURAN_API } from '../config/constants';

export class QuranService {
  async getAllSurahs() {
    // Check cache first
    const cached = cacheService.getSurahs();
    if (cached) {
      return cached;
    }

    const surahs = await apiClient.getSurahs();
    
    const formattedSurahs = surahs.map((surah: any) => ({
      id: surah.number,
      name: surah.englishName,
      arabicName: surah.name,
      englishName: surah.englishNameTranslation,
      revelationType: surah.revelationType,
      verseCount: surah.numberOfAyahs
    }));

    // Cache the result
    cacheService.setSurahs(formattedSurahs);
    return formattedSurahs;
  }

  async getSurah(surahNumber: number, translation?: string) {
    // Check cache
    const cached = cacheService.getSurah(surahNumber, translation);
    if (cached) {
      return cached;
    }

    const data = await apiClient.getSurah(surahNumber, translation);
    
    if (!data || data.length < 2) {
      throw new Error('Invalid response from Quran API');
    }

    const arabicEdition = data[0];
    const translationEdition = data[1];

    const formattedSurah = {
      surah: {
        id: arabicEdition.number,
        name: arabicEdition.englishName,
        arabicName: arabicEdition.name,
        englishName: arabicEdition.englishNameTranslation,
        revelationType: arabicEdition.revelationType,
        verseCount: arabicEdition.numberOfAyahs
      },
      verses: arabicEdition.ayahs.map((ayah: any, index: number) => ({
        verseNumber: ayah.numberInSurah,
        verseId: ayah.number,
        arabicText: ayah.text,
        englishTranslation: translationEdition.ayahs[index]?.text || '',
        juz: ayah.juz,
        page: ayah.page
      }))
    };

    // Cache the result
    cacheService.setSurah(surahNumber, formattedSurah, translation);
    return formattedSurah;
  }

  async getVerse(surahNumber: number, verseNumber: number, translation?: string) {
    const data = await apiClient.getVerse(surahNumber, verseNumber, translation);
    
    if (!data || data.length < 2) {
      throw new Error('Invalid response from Quran API');
    }

    const arabicVerse = data[0];
    const translationVerse = data[1];

    return {
      verseNumber: verseNumber,
      verseId: arabicVerse.number,
      arabicText: arabicVerse.text,
      englishTranslation: translationVerse.text,
      surah: {
        id: surahNumber,
        name: arabicVerse.surah.englishName,
        arabicName: arabicVerse.surah.name
      },
      juz: arabicVerse.juz,
      page: arabicVerse.page
    };
  }

  async searchQuran(query: string, translation?: string) {
    // Check cache
    const cached = cacheService.getSearch(query);
    if (cached) {
      return cached;
    }

    const data = await apiClient.searchQuran(query, translation);
    
    const formattedResults = data.matches.map((match: any) => ({
      surahId: match.surah.number,
      surahName: match.surah.englishName,
      verseNumber: match.numberInSurah,
      arabicText: match.text,
      englishTranslation: match.translation
    }));

    cacheService.setSearch(query, formattedResults);
    return formattedResults;
  }

  async getJuz(juzNumber: number, translation?: string) {
    const data = await apiClient.getJuz(juzNumber, translation);
    
    return {
      juzNumber: juzNumber,
      verses: data.map((verse: any) => ({
        surahId: verse.surah.number,
        surahName: verse.surah.englishName,
        verseNumber: verse.numberInSurah,
        arabicText: verse.text,
        englishTranslation: verse.translation
      }))
    };
  }
}

export const quranService = new QuranService();