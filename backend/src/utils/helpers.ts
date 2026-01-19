export function validateSurahId(surahId: number): boolean {
  return !isNaN(surahId) && surahId >= 1 && surahId <= 114;
}

export function validateVerseId(verseId: number): boolean {
  return !isNaN(verseId) && verseId >= 1;
}

export function validateJuzId(juzId: number): boolean {
  return !isNaN(juzId) && juzId >= 1 && juzId <= 30;
}

export function formatError(error: any): string {
  if (error.response) {
    return `API Error: ${error.response.status}`;
  } else if (error.request) {
    return 'No response from API';
  } else {
    return error.message;
  }
}