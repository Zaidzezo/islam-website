const API_BASE_URL = 'http://localhost:3001/api';

const handleResponse = async (response: Response) => {
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`HTTP ${response.status}: ${errorText}`);
  }
  return response.json();
};

export const fetchSurahs = async () => {
  try {
    console.log('Fetching surahs from:', `${API_BASE_URL}/quran/surahs`);
    const response = await fetch(`${API_BASE_URL}/quran/surahs`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await handleResponse(response);
    console.log('Surahs data received:', data);
    return data.data || [];
  } catch (error) {
    console.error('❌ Error fetching surahs:', error);
    return [];
  }
};

export const fetchSurah = async (surahId: number) => {
  try {
    console.log(`Fetching surah ${surahId} from:`, `${API_BASE_URL}/quran/surah/${surahId}`);
    const response = await fetch(`${API_BASE_URL}/quran/surah/${surahId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await handleResponse(response);
    console.log(`Surah ${surahId} data received:`, data);
    return data.data || null;
  } catch (error) {
    console.error(`❌ Error fetching surah ${surahId}:`, error);
    return null;
  }
};