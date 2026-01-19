import axios, { AxiosInstance } from 'axios';
import { QURAN_API } from '../config/constants';

class APIClient {
  private quranClient: AxiosInstance;

  constructor() {
    this.quranClient = axios.create({
      baseURL: QURAN_API.BASE_URL,
      timeout: 10000,
      headers: { 'Accept': 'application/json' }
    });
  }

  async getSurahs() {
    try {
      const response = await this.quranClient.get('/surah');
      if (!response.data || !response.data.data) {
        throw new Error('Invalid response format from Quran API');
      }
      return response.data.data;
    } catch (error: any) {
      console.error('API Client Error (getSurahs):', error.message);
      if (error.response) {
        console.error('API Response Status:', error.response.status);
        console.error('API Response Data:', error.response.data);
      }
      throw new Error(`Failed to fetch surahs: ${error.message}`);
    }
  }

  async getSurah(surahNumber: number, translation: string = QURAN_API.TRANSLATIONS.ENGLISH) {
    const response = await this.quranClient.get(
      `/surah/${surahNumber}/editions/quran-uthmani,${translation}`
    );
    return response.data.data;
  }

  async getVerse(surahNumber: number, verseNumber: number, translation: string = QURAN_API.TRANSLATIONS.ENGLISH) {
    const response = await this.quranClient.get(
      `/ayah/${surahNumber}:${verseNumber}/editions/quran-uthmani,${translation}`
    );
    return response.data.data;
  }

  async searchQuran(query: string, translation: string = QURAN_API.TRANSLATIONS.ENGLISH) {
    const response = await this.quranClient.get(
      `/search/${query}/all/${translation}`
    );
    return response.data.data;
  }

  async getJuz(juzNumber: number, translation: string = QURAN_API.TRANSLATIONS.ENGLISH) {
    const response = await this.quranClient.get(
      `/juz/${juzNumber}/${translation}`
    );
    return response.data.data;
  }
}

export const apiClient = new APIClient();