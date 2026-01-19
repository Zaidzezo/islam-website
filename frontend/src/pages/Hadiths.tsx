import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HADITHS } from '../data';
import { FaSearch, FaQuoteLeft, FaBook } from 'react-icons/fa';
import { MdMenuBook, MdCheckCircle, MdExpandMore, MdExpandLess } from 'react-icons/md';

const Hadiths: React.FC = () => {
  const [search, setSearch] = useState('');
  const [activeTopic, setActiveTopic] = useState<string>('All');
  const [sourceFilter, setSourceFilter] = useState<'All' | 'Bukhari' | 'Muslim'>('All');
  const [expandedArabic, setExpandedArabic] = useState<Set<number>>(new Set());

  const topics = useMemo(() => {
    const t = new Set(HADITHS.map(h => h.topic));
    return ['All', ...Array.from(t)];
  }, []);

  const filteredHadiths = useMemo(() => {
    return HADITHS.filter(h => {
      const matchesSearch = h.englishMeaning.toLowerCase().includes(search.toLowerCase()) || 
                           h.arabicText.includes(search) ||
                           h.topic.toLowerCase().includes(search.toLowerCase());
      const matchesTopic = activeTopic === 'All' || h.topic === activeTopic;
      const matchesSource = sourceFilter === 'All' || 
                          (sourceFilter === 'Bukhari' && h.source === 'Bukhari') ||
                          (sourceFilter === 'Muslim' && h.source === 'Muslim');
      return matchesSearch && matchesTopic && matchesSource;
    });
  }, [search, activeTopic, sourceFilter]);

  const toggleArabic = (id: number) => {
    const newSet = new Set(expandedArabic);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setExpandedArabic(newSet);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };

  const getArabicWordCount = (text: string): number => {
    return text.split(/[\s،.,!?;:]+/).filter(word => word.length > 0).length;
  };

  const bukhariHadiths = HADITHS.filter(h => h.source === 'Bukhari' || h.source === 'Both').length;
  const muslimHadiths = HADITHS.filter(h => h.source === 'Muslim' || h.source === 'Both').length;
  const bothHadiths = HADITHS.filter(h => h.source === 'Both').length;

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
            الأحاديث النبوية
          </h1>
        </motion.div>
        
        <motion.h2 
          className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#2c2c2c] mb-4 md:mb-6 tracking-tight"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Sahih Traditions
        </motion.h2>
        
        <motion.p 
          className="text-sm md:text-base lg:text-lg text-[#4a4a4a] max-w-3xl mx-auto leading-relaxed mb-6 md:mb-8 lg:mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Authentic narrations exclusively from Sahih Al-Bukhari and Sahih Muslim
        </motion.p>

        {/* Stats Bar */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 md:gap-4 lg:gap-6 mb-6 md:mb-8 lg:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="bg-white rounded-lg md:rounded-xl lg:rounded-2xl shadow border border-[#e8e0cf] px-4 py-3 md:px-6 md:py-4 lg:px-8 lg:py-6 hover:shadow-md transition-shadow">
            <div className="text-2xl md:text-3xl font-bold text-[#2c2c2c] mb-1 md:mb-2">{HADITHS.length}</div>
            <div className="text-xs md:text-sm text-[#4a4a4a]">Total Hadiths</div>
          </div>
          <div className="bg-white rounded-lg md:rounded-xl lg:rounded-2xl shadow border border-[#e8e0cf] px-4 py-3 md:px-6 md:py-4 lg:px-8 lg:py-6 hover:shadow-md transition-shadow">
            <div className="text-2xl md:text-3xl font-bold text-[#2c2c2c] mb-1 md:mb-2">{bukhariHadiths}</div>
            <div className="text-xs md:text-sm text-[#4a4a4a]">Sahih Al-Bukhari</div>
            <div className="text-xs text-[#6e6e6e] mt-1">Authentic</div>
          </div>
          <div className="bg-white rounded-lg md:rounded-xl lg:rounded-2xl shadow border border-[#e8e0cf] px-4 py-3 md:px-6 md:py-4 lg:px-8 lg:py-6 hover:shadow-md transition-shadow">
            <div className="text-2xl md:text-3xl font-bold text-[#2c2c2c] mb-1 md:mb-2">{muslimHadiths}</div>
            <div className="text-xs md:text-sm text-[#4a4a4a]">Sahih Muslim</div>
            <div className="text-xs text-[#6e6e6e] mt-1">Authentic</div>
          </div>
          <div className="bg-white rounded-lg md:rounded-xl lg:rounded-2xl shadow border border-[#e8e0cf] px-4 py-3 md:px-6 md:py-4 lg:px-8 lg:py-6 hover:shadow-md transition-shadow">
            <div className="text-2xl md:text-3xl font-bold text-[#2c2c2c] mb-1 md:mb-2">{bothHadiths}</div>
            <div className="text-xs md:text-sm text-[#4a4a4a]">Both Collections</div>
            <div className="text-xs text-[#6e6e6e] mt-1">Mutually Authentic</div>
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
              <FaSearch className="w-4 h-4 md:w-5 md:h-5 text-[#6e6e6e]" />
            </div>
            <input
              type="text"
              placeholder="Search within the wisdom..."
              className="w-full pl-10 md:pl-12 pr-8 md:pr-10 py-2 md:py-3 lg:py-4 bg-[#f8f6f0] border border-[#e8e0cf] rounded-lg md:rounded-xl lg:rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#c9a961]/30 focus:border-[#c9a961] transition-all text-sm md:text-base"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <button
                onClick={() => setSearch('')}
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
            <select
              className="flex-1 py-2 md:py-3 lg:py-4 pl-3 md:pl-4 pr-8 md:pr-10 bg-[#f8f6f0] border border-[#e8e0cf] rounded-lg md:rounded-xl lg:rounded-2xl text-[#4a4a4a] focus:outline-none focus:ring-2 focus:ring-[#c9a961]/30 focus:border-[#c9a961] transition-all appearance-none text-sm md:text-base"
              value={activeTopic}
              onChange={(e) => setActiveTopic(e.target.value)}
            >
              {topics.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
            <select
              className="flex-1 py-2 md:py-3 lg:py-4 pl-3 md:pl-4 pr-8 md:pr-10 bg-[#f8f6f0] border border-[#e8e0cf] rounded-lg md:rounded-xl lg:rounded-2xl text-[#4a4a4a] focus:outline-none focus:ring-2 focus:ring-[#c9a961]/30 focus:border-[#c9a961] transition-all appearance-none text-sm md:text-base"
              value={sourceFilter}
              onChange={(e) => setSourceFilter(e.target.value as any)}
            >
              <option value="All">All Sources</option>
              <option value="Bukhari">Sahih Al-Bukhari</option>
              <option value="Muslim">Sahih Muslim</option>
            </select>
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-center md:justify-end">
            <div className="text-center">
              <div className="text-xs text-[#6e6e6e]">Showing</div>
              <div className="text-xl md:text-2xl font-bold text-[#2c2c2c]">{filteredHadiths.length}</div>
              <div className="text-xs text-[#6e6e6e">of {HADITHS.length} hadiths</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Improved Hadiths Grid */}
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence mode="wait">
          {filteredHadiths.map((hadith) => {
            const isArabicExpanded = expandedArabic.has(hadith.id);
            const arabicText = hadith.arabicText;
            const arabicWordCount = getArabicWordCount(arabicText);
            
            const shouldShowFullText = arabicWordCount <= 5;
            const needsTruncation = !shouldShowFullText && !isArabicExpanded && arabicText.length > 200;
            const displayArabicText = needsTruncation 
              ? `${arabicText.substring(0, 200)}...` 
              : arabicText;
            
            return (
              <motion.div
                key={hadith.id}
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex flex-col h-full"
              >
                <div className="bg-white rounded-xl md:rounded-2xl lg:rounded-3xl shadow border border-[#e8e0cf] hover:shadow-md hover:border-[#c9a961]/50 transition-all duration-300 group overflow-hidden flex flex-col h-full">
                  <div className="p-4 md:p-6 lg:p-8 flex-grow">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-4 md:mb-6">
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${hadith.source === 'Both' ? 'bg-gradient-to-r from-[#c9a961] to-[#8b6914]' : 
                                         hadith.source === 'Bukhari' ? 'bg-blue-500' : 'bg-emerald-500'}`}></div>
                        <span className="text-xs font-bold text-[#8b6914] bg-[#f8f6f0] px-2 py-1 rounded-full border border-[#e8e0cf] uppercase tracking-widest">
                          {hadith.topic}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] md:text-xs text-[#6e6e6e] font-bold uppercase tracking-widest bg-[#f8f6f0] px-2 py-1 rounded-full border border-[#e8e0cf]">
                          Ref: {hadith.reference}
                        </div>
                      </div>
                    </div>
                    
                    {/* Arabic Text with Expand/Collapse */}
                    <div className="mb-4 md:mb-6 flex-grow min-h-[120px]">
                      <div className="relative h-full">
                        <div className={`relative ${needsTruncation && 'max-h-[150px] overflow-hidden'}`}>
                          <p 
                            className="arabic-text text-base md:text-lg lg:text-xl leading-[1.6] text-right text-[#1a1a1a] group-hover:text-[#2c2c2c] transition-colors" 
                            style={{ direction: 'rtl' }}
                          >
                            {displayArabicText}
                          </p>
                          {/* Gradient fade for truncated text */}
                          {needsTruncation && (
                            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white via-white/90 to-transparent"></div>
                          )}
                        </div>
                        
                        {/* Read More/Show Less Button */}
                        {!shouldShowFullText && arabicText.length > 200 && (
                          <div className="mt-3 pt-2 border-t border-[#e8e0cf]/50">
                            <button
                              onClick={() => toggleArabic(hadith.id)}
                              className="text-xs md:text-sm text-[#8b6914] hover:text-[#c9a961] font-medium flex items-center gap-1 transition-colors group"
                            >
                              {isArabicExpanded ? (
                                <>
                                  <MdExpandLess size={16} className="group-hover:-translate-y-0.5 transition-transform" />
                                  Show Less
                                </>
                              ) : (
                                <>
                                  <MdExpandMore size={16} className="group-hover:translate-y-0.5 transition-transform" />
                                  Read More
                                </>
                              )}
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* English Translation */}
                    <div className="mt-auto">
                      <div className="relative pt-4 md:pt-6 border-t border-[#e8e0cf]">
                        <div className="absolute top-0 right-0 w-8 h-8 text-[#e8e0cf] -translate-y-1/2 opacity-50 flex items-center group-hover:text-[#c9a961] transition-colors">
                          <FaQuoteLeft size={18} />
                        </div>
                        <div className="flex items-start gap-2 md:gap-3">
                          <div className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-gradient-to-br from-[#c9a961]/20 to-[#8b6914]/20 rounded-lg flex items-center justify-center text-[#8b6914] flex-shrink-0">
                            <MdCheckCircle size={12} />
                          </div>
                          <div className="flex-grow">
                            <div className="text-xs md:text-sm font-medium text-[#6e6e6e] uppercase tracking-wider mb-1 md:mb-2">English Translation</div>
                            <p className="text-[#4a4a4a] leading-relaxed font-medium italic text-sm md:text-base">
                              "{hadith.englishMeaning}"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Footer */}
                  <div className="px-4 md:px-6 lg:px-8 py-3 md:py-4 lg:py-6 bg-gradient-to-r from-[#f8f6f0] to-[#f5f3ee] border-t border-[#e8e0cf]">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className={`w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-lg flex items-center justify-center ${hadith.source === 'Both' ? 'bg-gradient-to-r from-[#c9a961] to-[#8b6914]' : 
                                         hadith.source === 'Bukhari' ? 'bg-blue-500' : 'bg-emerald-500'}`}>
                          <FaBook size={12} className="text-white" />
                        </div>
                        <div>
                          <div className="text-xs text-[#6e6e6e]">Source</div>
                          <div className="text-sm font-bold text-[#2c2c2c]">
                            {hadith.source === 'Both' ? 'Sahih Al-Bukhari & Sahih Muslim' : 
                             hadith.source === 'Bukhari' ? 'Sahih Al-Bukhari' : 'Sahih Muslim'}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-[#6e6e6e]">Hadith ID</div>
                        <div className="text-sm font-bold text-[#2c2c2c]">#{hadith.id}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredHadiths.length === 0 && (
        <motion.div 
          className="bg-white rounded-xl md:rounded-2xl lg:rounded-3xl shadow border border-[#e8e0cf] p-8 md:p-12 lg:p-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="max-w-md mx-auto">
            <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-[#c9a961]/20 to-[#8b6914]/20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 lg:mb-8">
              <FaBook className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-[#c9a961]" />
            </div>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#2c2c2c] mb-3 md:mb-4">No Hadiths Found</h3>
            <p className="text-sm md:text-base lg:text-lg text-[#4a4a4a] mb-6 md:mb-8 lg:mb-10 leading-relaxed">
              {search 
                ? `No hadiths match "${search}". Try a different search term.`
                : 'No hadiths match your current filters. Try adjusting your search criteria.'}
            </p>
            {(search || activeTopic !== 'All' || sourceFilter !== 'All') && (
              <button
                onClick={() => {
                  setSearch('');
                  setActiveTopic('All');
                  setSourceFilter('All');
                }}
                className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-[#c9a961] to-[#8b6914] text-white rounded-lg md:rounded-xl lg:rounded-2xl font-semibold hover:shadow-md transition-all hover:scale-105 active:scale-95 text-sm md:text-base"
              >
                Clear All Filters
              </button>
            )}
          </div>
        </motion.div>
      )}

      {/* Quick Stats Footer */}
      <motion.div 
        className="mt-8 md:mt-12 lg:mt-16 bg-gradient-to-r from-[#f8f6f0] to-[#f5f3ee] rounded-xl md:rounded-2xl lg:rounded-3xl p-4 md:p-6 lg:p-8 border border-[#e8e0cf]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          <div className="text-center">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2c2c2c] mb-1 md:mb-2">{HADITHS.length}</div>
            <div className="text-xs md:text-sm text-[#4a4a4a]">Authentic Hadiths</div>
            <p className="text-xs text-[#6e6e6e] mt-1 md:mt-2">From the most authentic collections</p>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2c2c2c] mb-1 md:mb-2">2</div>
            <div className="text-xs md:text-sm text-[#4a4a4a]">Sahih Collections</div>
            <p className="text-xs text-[#6e6e6e] mt-1 md:mt-2">Bukhari & Muslim only</p>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2c2c2c] mb-1 md:mb-2">20+</div>
            <div className="text-xs md:text-sm text-[#4a4a4a">Topics Covered</div>
            <p className="text-xs text-[#6e6e6e] mt-1 md:mt-2">Faith, character, worship & more</p>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2c2c2c] mb-1 md:mb-2">100%</div>
            <div className="text-xs md:text-sm text-[#4a4a4a">Verified Authentic</div>
            <p className="text-xs text-[#6e6e6e] mt-1 md:mt-2">All hadiths are from Sahih sources</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hadiths;