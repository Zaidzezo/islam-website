import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

const API_BASE_URL = 'http://localhost:3001/api';

const Surahs: React.FC = () => {
  const [surahs, setSurahs] = useState<any[]>([]);
  const [selectedSurah, setSelectedSurah] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filterType, setFilterType] = useState<'all' | 'meccan' | 'medinan'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadSurahs();
  }, []);

  const loadSurahs = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(`${API_BASE_URL}/quran/surahs`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      let surahsData = null;
      
      if (result.success && result.data) {
        surahsData = result.data;
      } else if (Array.isArray(result)) {
        surahsData = result;
      } else if (result.data && Array.isArray(result.data)) {
        surahsData = result.data;
      }
      
      if (surahsData && Array.isArray(surahsData) && surahsData.length > 0) {
        setSurahs(surahsData);
        await loadSurahDetails(surahsData[0].id);
      } else {
        throw new Error(result.error || 'No surahs data received or invalid format');
      }
    } catch (error: any) {
      console.error('Error loading surahs:', error);
      setError(error.message || 'Failed to load surahs. Please check if the backend server is running.');
    } finally {
      setLoading(false);
    }
  };

  const loadSurahDetails = async (surahId: number) => {
    try {
      const response = await fetch(`${API_BASE_URL}/quran/surah/${surahId}`);
      const result = await response.json();
      
      if (result.success && result.data) {
        setSelectedSurah(result.data);
      }
    } catch (error) {
      console.error(`Error loading surah ${surahId}:`, error);
    }
  };

  const filteredSurahs = useMemo(() => {
    if (!surahs.length) return [];
    
    let result = [...surahs];
    
    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase().trim();
      result = result.filter(surah => {
        const searchableText = [
          surah.name?.toLowerCase() || '',
          surah.arabicName || '',
          surah.meaning?.toLowerCase() || '',
          surah.englishName?.toLowerCase() || '',
          surah.transliteration?.toLowerCase() || ''
        ].join(' ');
        return searchableText.includes(term);
      });
    }
    
    if (filterType !== 'all') {
      result = result.filter(surah => {
        const surahType = surah.revelationType?.toLowerCase() || '';
        if (filterType === 'meccan') {
          return surahType.includes('meccan');
        } else {
          return surahType.includes('medinan');
        }
      });
    }
    
    return result;
  }, [surahs, searchTerm, filterType]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  const meccanSurahs = surahs.filter(s => 
    (s.revelationType || '').toLowerCase().includes('meccan')
  ).length;
  
  const medinanSurahs = surahs.filter(s => 
    (s.revelationType || '').toLowerCase().includes('medinan')
  ).length;

  if (loading) {
    return (
      <div className="max-w-[95%] lg:max-w-[90%] xl:max-w-7xl mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 border-b-2 border-[#c9a961] mx-auto mb-4 md:mb-6"></div>
          <h3 className="text-xl md:text-2xl font-bold text-[#2c2c2c] mb-2 md:mb-3">Loading the Holy Quran</h3>
          <p className="text-[#4a4a4a] text-sm md:text-base">Fetching all 114 surahs with authentic translations...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-[95%] lg:max-w-[90%] xl:max-w-7xl mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="text-center">
          <div className="bg-gradient-to-br from-[#f8f6f0] to-[#f5f3ee] border-2 border-[#e8e0cf] rounded-xl md:rounded-2xl lg:rounded-3xl p-6 md:p-8 lg:p-12 max-w-2xl mx-auto shadow">
            <div className="text-4xl mb-4 md:mb-6">⚠️</div>
            <h2 className="text-xl md:text-2xl font-bold text-[#2c2c2c] mb-3 md:mb-4">Unable to Load Quran Content</h2>
            <p className="text-[#4a4a4a] mb-6 md:mb-8 leading-relaxed text-sm md:text-base">{error}</p>
            <button
              onClick={loadSurahs}
              className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-[#c9a961] to-[#8b6914] text-white rounded-lg md:rounded-xl lg:rounded-2xl font-semibold hover:shadow-md transition-all hover:scale-105 active:scale-95 text-sm md:text-base"
            >
              Retry Connection
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[95%] lg:max-w-[90%] xl:max-w-7xl mx-auto px-4 py-6 md:py-8 lg:py-12">
      {/* Header */}
      <div className="text-center mb-8 md:mb-12 lg:mb-16">
        <motion.div 
          className="inline-block mb-3 md:mb-4 lg:mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="arabic-text text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1a1a1a] mb-3 md:mb-4 leading-[1.3] tracking-tight">
            القرآن الكريم
          </h1>
        </motion.div>
        
        <motion.h2 
          className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#2c2c2c] mb-4 md:mb-6 tracking-tight"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          The Holy Quran
        </motion.h2>
        
        <motion.p 
          className="text-sm md:text-base lg:text-lg text-[#4a4a4a] max-w-3xl mx-auto leading-relaxed mb-6 md:mb-8 lg:mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Complete text with authentic Arabic script and precise English translation
        </motion.p>

        {/* Stats Bar */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 md:gap-4 lg:gap-6 mb-6 md:mb-8 lg:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="bg-white rounded-lg md:rounded-xl lg:rounded-2xl shadow border border-[#e8e0cf] px-4 py-3 md:px-6 md:py-4 lg:px-8 lg:py-6 hover:shadow-md transition-shadow">
            <div className="text-2xl md:text-3xl font-bold text-[#2c2c2c] mb-1 md:mb-2">{surahs.length}</div>
            <div className="text-xs md:text-sm text-[#4a4a4a]">Total Surahs</div>
          </div>
          <div className="bg-white rounded-lg md:rounded-xl lg:rounded-2xl shadow border border-[#e8e0cf] px-4 py-3 md:px-6 md:py-4 lg:px-8 lg:py-6 hover:shadow-md transition-shadow">
            <div className="text-2xl md:text-3xl font-bold text-[#2c2c2c] mb-1 md:mb-2">{meccanSurahs}</div>
            <div className="text-xs md:text-sm text-[#4a4a4a]">Meccan</div>
          </div>
          <div className="bg-white rounded-lg md:rounded-xl lg:rounded-2xl shadow border border-[#e8e0cf] px-4 py-3 md:px-6 md:py-4 lg:px-8 lg:py-6 hover:shadow-md transition-shadow">
            <div className="text-2xl md:text-3xl font-bold text-[#2c2c2c] mb-1 md:mb-2">{medinanSurahs}</div>
            <div className="text-xs md:text-sm text-[#4a4a4a]">Medinan</div>
          </div>
          <div className="bg-white rounded-lg md:rounded-xl lg:rounded-2xl shadow border border-[#e8e0cf] px-4 py-3 md:px-6 md:py-4 lg:px-8 lg:py-6 hover:shadow-md transition-shadow">
            <div className="text-2xl md:text-3xl font-bold text-[#2c2c2c] mb-1 md:mb-2">
              {selectedSurah?.verses?.length || 0}
            </div>
            <div className="text-xs md:text-sm text-[#4a4a4a]">
              {selectedSurah ? `Verses in ${selectedSurah.surah?.name || 'Selected'}` : 'Verses Loaded'}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Search and Filter Section */}
      <motion.div 
        className="bg-white rounded-xl md:rounded-2xl lg:rounded-3xl shadow border border-[#e8e0cf] p-4 md:p-6 lg:p-8 mb-6 md:mb-8 lg:mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Search Input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 md:pl-4 flex items-center pointer-events-none">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-[#6e6e6e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search surah by name or meaning..."
              className="w-full pl-10 md:pl-12 pr-8 md:pr-10 py-2 md:py-3 lg:py-4 bg-[#f8f6f0] border border-[#e8e0cf] rounded-lg md:rounded-xl lg:rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#c9a961]/30 focus:border-[#c9a961] transition-all text-sm md:text-base"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            {searchTerm && (
              <button
                onClick={clearSearch}
                className="absolute inset-y-0 right-0 pr-3 md:pr-4 flex items-center text-[#6e6e6e] hover:text-[#c9a961] transition-colors"
                title="Clear search"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-2 md:gap-3">
            <button
              onClick={() => setFilterType('all')}
              className={`flex-1 py-2 md:py-3 lg:py-4 rounded-lg md:rounded-xl lg:rounded-2xl text-xs md:text-sm font-semibold transition-all ${filterType === 'all'
                ? 'bg-gradient-to-r from-[#c9a961] to-[#8b6914] text-white shadow'
                : 'bg-[#f8f6f0] text-[#4a4a4a] hover:bg-[#ede8d8] border border-[#e8e0cf]'
              }`}
            >
              All Surahs
            </button>
            <button
              onClick={() => setFilterType('meccan')}
              className={`flex-1 py-2 md:py-3 lg:py-4 rounded-lg md:rounded-xl lg:rounded-2xl text-xs md:text-sm font-semibold transition-all ${filterType === 'meccan'
                ? 'bg-gradient-to-r from-[#2c5282] to-[#2b6cb0] text-white shadow'
                : 'bg-[#f8f6f0] text-[#4a4a4a] hover:bg-[#ede8d8] border border-[#e8e0cf]'
              }`}
            >
              Meccan
            </button>
            <button
              onClick={() => setFilterType('medinan')}
              className={`flex-1 py-2 md:py-3 lg:py-4 rounded-lg md:rounded-xl lg:rounded-2xl text-xs md:text-sm font-semibold transition-all ${filterType === 'medinan'
                ? 'bg-gradient-to-r from-[#b45309] to-[#d97706] text-white shadow'
                : 'bg-[#f8f6f0] text-[#4a4a4a] hover:bg-[#ede8d8] border border-[#e8e0cf]'
              }`}
            >
              Medinan
            </button>
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-center md:justify-end">
            <div className="text-center">
              <div className="text-xs text-[#6e6e6e]">Showing</div>
              <div className="text-xl md:text-2xl font-bold text-[#2c2c2c]">{filteredSurahs.length}</div>
              <div className="text-xs text-[#6e6e6e">of {surahs.length} surahs</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
        {/* Left Sidebar - Surah List */}
        <div className="lg:col-span-2">
          <div className="sticky top-20 md:top-24 space-y-4 md:space-y-6">
            {/* Surah List */}
            <div className="bg-white rounded-xl md:rounded-2xl lg:rounded-3xl shadow border border-[#e8e0cf] overflow-hidden">
              <div className="bg-gradient-to-r from-[#c9a961] to-[#8b6914] p-4 md:p-6 text-white">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-base md:text-lg lg:text-xl font-bold">Surah Directory</h2>
                    <p className="text-xs opacity-90 mt-1">Select a surah to read</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xl md:text-2xl font-bold">{filteredSurahs.length}</div>
                    <div className="text-xs opacity-75">surahs</div>
                  </div>
                </div>
              </div>
              
              <div className="max-h-[500px] md:max-h-[600px] lg:max-h-[700px] overflow-y-auto p-3 md:p-4">
                {filteredSurahs.length === 0 ? (
                  <div className="text-center py-6 md:py-8 lg:py-12">
                    <div className="text-3xl mb-3 md:mb-4">📖</div>
                    <p className="text-[#6e6e6e] font-medium mb-1 md:mb-2 text-sm md:text-base">No surahs found</p>
                    <p className="text-xs md:text-sm text-[#6e6e6e] mb-3 md:mb-4">
                      {searchTerm 
                        ? `No surahs match "${searchTerm}"`
                        : 'Try searching with different keywords'}
                    </p>
                    {searchTerm && (
                      <button
                        onClick={clearSearch}
                        className="px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm bg-[#f8f6f0] text-[#8b6914] rounded-lg border border-[#e8e0cf] hover:bg-[#ede8d8] transition-colors"
                      >
                        Clear Search
                      </button>
                    )}
                  </div>
                ) : (
                  <div className="space-y-2 md:space-y-3">
                    {filteredSurahs.map((surah) => (
                      <button
                        key={surah.id}
                        onClick={() => loadSurahDetails(surah.id)}
                        className={`w-full text-left p-3 md:p-4 lg:p-5 rounded-lg md:rounded-xl lg:rounded-2xl transition-all duration-300 flex items-center gap-3 md:gap-4 ${selectedSurah?.surah?.id === surah.id
                          ? 'bg-gradient-to-r from-[#c9a961]/10 to-[#8b6914]/10 border-2 border-[#c9a961]/50 shadow transform scale-[1.02]'
                          : 'hover:bg-[#f8f6f0] border border-transparent hover:border-[#e8e0cf]'
                        }`}
                      >
                        {/* Surah Number */}
                        <div className={`w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-lg md:rounded-xl flex items-center justify-center text-base md:text-lg font-bold flex-shrink-0 ${selectedSurah?.surah?.id === surah.id
                          ? 'bg-gradient-to-r from-[#c9a961] to-[#8b6914] text-white shadow'
                          : 'bg-[#f8f6f0] text-[#4a4a4a] border border-[#e8e0cf]'
                        }`}>
                          {surah.id}
                        </div>

                        {/* Surah Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-1 md:gap-2">
                              <span className={`font-bold truncate text-sm md:text-base ${selectedSurah?.surah?.id === surah.id ? 'text-[#2c2c2c]' : 'text-[#2c2c2c]'}`}>
                                {surah.name || `Surah ${surah.id}`}
                              </span>
                              <span className={`text-xs px-1.5 py-0.5 md:px-2 md:py-1 rounded-full ${(surah.revelationType || '').toLowerCase().includes('meccan')
                                ? 'bg-blue-100 text-blue-700 border border-blue-200'
                                : 'bg-amber-100 text-amber-700 border border-amber-200'
                              }`}>
                                {(surah.revelationType || 'M').charAt(0)}
                              </span>
                            </div>
                            <div className="text-xs text-[#6e6e6e]">
                              {surah.verseCount || 0} verses
                            </div>
                          </div>
                          
                          <p className={`text-xs md:text-sm truncate ${selectedSurah?.surah?.id === surah.id ? 'text-[#8b6914]' : 'text-[#6e6e6e]'}`}>
                            {surah.meaning || surah.englishName || 'Surah'}
                          </p>
                          
                          <div className="flex items-center justify-between mt-1 md:mt-2">
                            <div className="arabic-text text-lg md:text-xl lg:text-2xl font-bold text-[#2c2c2c]">
                              {surah.arabicName || 'سورة'}
                            </div>
                            {selectedSurah?.surah?.id === surah.id && (
                              <div className="flex items-center gap-1 text-xs text-[#8b6914]">
                                <div className="w-1.5 h-1.5 bg-[#c9a961] rounded-full"></div>
                                <span>Selected</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Surah Content */}
        <div className="lg:col-span-3">
          {selectedSurah ? (
            <div className="bg-white rounded-xl md:rounded-2xl lg:rounded-3xl shadow border border-[#e8e0cf] overflow-hidden">
              {/* Surah Header */}
              <div className="bg-gradient-to-r from-[#c9a961] via-[#b8954a] to-[#8b6914] p-6 md:p-8 lg:p-10 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-white/10 rounded-full -translate-y-24 translate-x-24 md:-translate-y-28 md:translate-x-28 lg:-translate-y-32 lg:translate-x-32"></div>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative z-10">
                  <div className="mb-6 md:mb-0">
                    <div className="flex items-center flex-wrap gap-2 md:gap-3 mb-4 md:mb-6">
                      <span className="bg-white/20 backdrop-blur-sm text-white text-xs md:text-sm font-bold px-3 py-1.5 md:px-4 md:py-2 rounded-full">
                        Surah {selectedSurah.surah?.id || selectedSurah.id}
                      </span>
                      <span className={`text-xs md:text-sm font-medium px-3 py-1.5 md:px-4 md:py-2 rounded-full ${(selectedSurah.surah?.revelationType || '').toLowerCase().includes('meccan')
                        ? 'bg-blue-500/80 text-white'
                        : 'bg-amber-500/80 text-white'
                      }`}>
                        {selectedSurah.surah?.revelationType || 'Revelation'}
                      </span>
                      <span className="text-xs md:text-sm bg-white/20 px-3 py-1.5 md:px-4 md:py-2 rounded-full">
                        {selectedSurah.verses?.length || 0} Verses
                      </span>
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">{selectedSurah.surah?.name || 'Surah'}</h1>
                    <p className="text-lg md:text-xl opacity-90 italic">{selectedSurah.surah?.meaning || selectedSurah.surah?.englishName || ''}</p>
                  </div>
                  <div className="text-center md:text-right">
                    <div className="text-base md:text-lg font-medium opacity-90 mb-3 md:mb-4">Arabic Name</div>
                    <div 
                      className="arabic-text text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                      style={{ 
                        direction: 'rtl',
                        fontFamily: "'Amiri', serif",
                        textShadow: '0 2px 6px rgba(0,0,0,0.2)'
                      }}
                    >
                      {selectedSurah.surah?.arabicName || 'القرآن الكريم'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Verses */}
              <div className="p-4 md:p-6 lg:p-8 md:p-12 bg-[#f8f6f0]">
                <div className="mb-6 md:mb-8">
                  <div className="flex items-center justify-between mb-6 md:mb-8 lg:mb-10">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#2c2c2c] flex items-center gap-2 md:gap-3">
                      <span className="w-2 h-6 md:w-3 md:h-8 lg:w-3 lg:h-10 bg-gradient-to-b from-[#c9a961] to-[#8b6914] rounded-full"></span>
                      Verses
                    </h2>
                    <div className="flex items-center space-x-2 md:space-x-3 lg:space-x-4">
                      <div className="text-xs md:text-sm text-[#6e6e6e] bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg md:rounded-xl border border-[#e8e0cf]">
                        Juz {selectedSurah.verses?.[0]?.juz || 1}
                      </div>
                    </div>
                  </div>
                  
                  {selectedSurah.verses && selectedSurah.verses.length > 0 ? (
                    <div className="space-y-4 md:space-y-6 lg:space-y-8">
                      {selectedSurah.verses.map((verse: any) => (
                        <div 
                          key={verse.verseId || verse.id} 
                          id={`verse-${verse.verseNumber || verse.number}`}
                          className="group bg-white rounded-lg md:rounded-xl lg:rounded-2xl p-4 md:p-6 lg:p-8 hover:shadow-md transition-all duration-300 border border-[#e8e0cf] hover:border-[#c9a961]/50"
                        >
                          <div className="flex justify-between items-start mb-4 md:mb-6 lg:mb-8">
                            <div className="flex items-center">
                              <div className="relative">
                                <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-[#c9a961] to-[#8b6914] rounded-lg md:rounded-xl lg:rounded-2xl flex items-center justify-center shadow">
                                  <span className="text-white font-bold text-lg md:text-xl">{verse.verseNumber || verse.number}</span>
                                </div>
                                <div className="absolute -top-1.5 -right-1.5 md:-top-2 md:-right-2 w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 bg-[#8b6914] rounded-full flex items-center justify-center shadow">
                                  <span className="text-white text-xs">●</span>
                                </div>
                              </div>
                              <div className="ml-4 md:ml-6">
                                <div className="text-xs md:text-sm font-medium text-[#6e6e6e]">Verse {verse.verseNumber || verse.number}</div>
                                <div className="text-xs text-[#6e6e6e] mt-1">
                                  Page {verse.page || 1} • Juz {verse.juz || 1}
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Arabic Text */}
                          <div 
                            className="arabic-text text-xl md:text-2xl lg:text-3xl leading-relaxed text-right mb-6 md:mb-8 lg:mb-10 p-4 md:p-6 bg-gradient-to-l from-[#c9a961]/5 to-transparent rounded-lg md:rounded-xl lg:rounded-2xl border-r-4 border-[#c9a961]/30"
                            style={{ 
                              direction: 'rtl',
                              fontFamily: "'Amiri', serif",
                              lineHeight: '2.2',
                              textAlign: 'justify',
                              color: '#1a1a1a'
                            }}
                          >
                            {verse.arabicText || verse.text || 'آية قرآنية'}
                          </div>
                          
                          {/* Translation */}
                          <div className="bg-gradient-to-br from-[#f8f6f0] to-[#f5f3ee] rounded-lg md:rounded-xl lg:rounded-2xl p-4 md:p-6 lg:p-8 border border-[#e8e0cf] shadow-sm">
                            <div className="flex items-start">
                              <svg className="w-5 h-5 md:w-6 md:h-6 text-[#c9a961] mt-1 mr-3 md:mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                              </svg>
                              <div>
                                <div className="text-xs md:text-sm font-medium text-[#6e6e6e] uppercase tracking-wider mb-2 md:mb-3">English Translation</div>
                                <p className="text-base md:text-lg text-[#4a4a4a] leading-relaxed italic">
                                  "{verse.englishTranslation || verse.translation || 'Translation not available'}"
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-6 md:py-8 lg:py-12 bg-white rounded-lg md:rounded-xl lg:rounded-2xl border border-[#e8e0cf]">
                      <div className="text-3xl mb-3 md:mb-4">📖</div>
                      <h3 className="text-lg md:text-xl font-bold text-[#2c2c2c] mb-2 md:mb-3">No Verses Loaded</h3>
                      <p className="text-[#6e6e6e] text-sm md:text-base">Verses data is not available for this surah.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl md:rounded-2xl lg:rounded-3xl shadow border border-[#e8e0cf] p-8 md:p-12 lg:p-16 text-center">
              <div className="max-w-md mx-auto">
                <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-[#c9a961]/20 to-[#8b6914]/20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 lg:mb-8">
                  <svg className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-[#c9a961]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#2c2c2c] mb-3 md:mb-4">Welcome to the Quran</h3>
                <p className="text-sm md:text-base lg:text-lg text-[#4a4a4a] mb-6 md:mb-8 lg:mb-10 leading-relaxed">
                  {searchTerm 
                    ? `No surah found for "${searchTerm}". Try a different search term.`
                    : 'Select a surah from the list to begin reading the complete text with authentic translation.'}
                </p>
                {searchTerm && (
                  <button
                    onClick={clearSearch}
                    className="px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-[#c9a961] to-[#8b6914] text-white rounded-lg md:rounded-xl font-medium hover:shadow-md transition-all text-sm md:text-base"
                  >
                    Clear Search
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Surahs;