
export interface Surah {
  id: number;
  name: string;
  arabicName: string;
  meaning: string;
  verseCount: number;
  revelationType: 'Meccan' | 'Medinan';
  text: string;
  englishTranslation: string;
}

export interface Hadith {
  id: number;
  arabicText: string;
  englishMeaning: string;
  topic: string;
  source: string; // e.g., "Sahih Bukhari, 1"
  book: string;
  reference: string;
}

export interface Person {
  id: string;
  name: string;
  title: string;
  description: string;
  birth: string;
  tribe: string;
  achievements: string[];
  fullBiography: string; 
}

export interface Step {
  title: string;
  arabic?: string;
  description: string;
  icon?: string;
}

export interface SalahPreparation {
  title: string;
  description: string;
  icon: string;
  arabic: string;
  details: string[];
}

export interface SalahPosition {
  id: string;
  title: string;
  arabic: string;
  description: string;
  icon: string;
  steps: string[];
  visual: string;
  arabicTerm: string;
}

export interface Recitation {
  step: number;
  title: string;
  arabic: string;
  transliteration: string;
  translation: string;
  note?: string;
}

export interface PrayerType {
  name: string;
  rakats: number;
  time: string;
  type: string;
  audible: boolean;
  color: string;
}

export interface Dhikr {
  arabic: string;
  transliteration: string;
  times: number;
  meaning: string;
}

export interface Tashahhud {
  arabic: string;
  transliteration: string;
  translation: string;
}

export interface VisualPrayerStep {
  english: string;
  arabic: string;
  transliteration: string;
}

export interface PrayerPreparation {
  title: string;
  arabic: string;
  descriptions: string[];
}

export interface DailyPrayer {
  name: string;
  time: string;
  rakahs: number;
  color: string;
}

export interface PrayerPosition {
  english: string;
  arabic: string;
  transliteration: string;
  description: string;
}

export interface VisualPrayerFlowData {
  prayerSteps: VisualPrayerStep[];
  preparation: PrayerPreparation[];
  dailyPrayers: DailyPrayer[];
  prayerPositions: PrayerPosition[];
  movementSequence: string[];
}