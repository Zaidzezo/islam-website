// Simple in-memory cache using Map
import { CACHE_TTL } from '../config/constants';

interface CacheItem {
  value: any;
  expiry: number;
}

class CacheService {
  private cache: Map<string, CacheItem>;
  private timers: Map<string, NodeJS.Timeout>;

  constructor() {
    this.cache = new Map();
    this.timers = new Map();
  }

  get(key: string): any {
    const item = this.cache.get(key);
    if (!item) return undefined;
    
    if (Date.now() > item.expiry) {
      this.cache.delete(key);
      return undefined;
    }
    
    return item.value;
  }

  set(key: string, value: any, ttl?: number): boolean {
    const expiry = Date.now() + (ttl || 3600) * 1000;
    this.cache.set(key, { value, expiry });
    
    // Clear existing timer
    const existingTimer = this.timers.get(key);
    if (existingTimer) {
      clearTimeout(existingTimer);
    }
    
    // Set new timer to delete the key when it expires
    const timer = setTimeout(() => {
      this.cache.delete(key);
      this.timers.delete(key);
    }, ttl ? ttl * 1000 : 3600 * 1000);
    
    this.timers.set(key, timer);
    return true;
  }

  getSurah(surahId: number, translation?: string): any {
    const key = `surah_${surahId}_${translation || 'en'}`;
    return this.get(key);
  }

  setSurah(surahId: number, data: any, translation?: string, ttl?: number): boolean {
    const key = `surah_${surahId}_${translation || 'en'}`;
    return this.set(key, data, ttl || CACHE_TTL.SURAH_DETAILS);
  }

  getSurahs(): any {
    return this.get('all_surahs');
  }

  setSurahs(data: any): boolean {
    return this.set('all_surahs', data, CACHE_TTL.SURAHS);
  }

  getSearch(query: string): any {
    const key = `search_${query.toLowerCase().replace(/\s+/g, '_')}`;
    return this.get(key);
  }

  setSearch(query: string, data: any): boolean {
    const key = `search_${query.toLowerCase().replace(/\s+/g, '_')}`;
    return this.set(key, data, CACHE_TTL.SEARCH);
  }

  // Clear cache for debugging
  clear(): void {
    this.cache.clear();
    this.timers.forEach(timer => clearTimeout(timer));
    this.timers.clear();
  }
}

export const cacheService = new CacheService();