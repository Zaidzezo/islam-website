import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PILLARS_OF_ISLAM, ARTICLES_OF_FAITH, WUDU_STEPS } from '../data';
import VisualPrayerFlow from '../components/VisualPrayerFlow';

// Proper Islamic-themed SVG Icons
const ShahadaIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);

const PrayerIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/>
  </svg>
);

const ZakatIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M11 8h2v4h-2zm0 6h2v2h-2z"/>
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
    <path d="M7 10h2v4H7zm4 4h2v2h-2zm0-8h2v2h-2zm4 4h2v4h-2z"/>
  </svg>
);

const FastingIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z"/>
  </svg>
);

const HajjIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"/>
    <circle cx="12" cy="9" r="2.5"/>
  </svg>
);

const AllahIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
  </svg>
);

const AngelsIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);

const BooksIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 4h2v5l-1-.75L9 9V4zm9 16H6V4h1v9l3-2.25L13 13V4h5v16z"/>
  </svg>
);

const ProphetsIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
  </svg>
);

const DayOfJudgmentIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
  </svg>
);

const DivineDecreeIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
    <path d="M7 10h2v4H7zm4 4h2v2h-2zm0-8h2v2h-2zm4 4h2v4h-2z"/>
  </svg>
);

const WaterIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8zM7.83 14c.37 0 .67.26.74.62.41 2.22 2.28 2.98 3.64 2.87.43-.02.79.32.79.75 0 .4-.32.73-.72.75-2.13.13-4.62-1.09-5.19-4.12-.08-.45.28-.87.74-.87z"/>
  </svg>
);

const Basics: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'pillars' | 'faith' | 'wudu' | 'salah'>('pillars');
  const [activePillar, setActivePillar] = useState<number | null>(null);

  const TabButton = ({ id, label, arabic }: { id: typeof activeTab, label: string, arabic: string }) => {
    const isActive = activeTab === id;
    return (
      <motion.button
        onClick={() => setActiveTab(id)}
        className={`relative px-4 py-3 rounded-xl font-bold transition-all duration-300 group text-sm md:text-base ${
          isActive 
          ? 'text-[#c9a961] bg-white shadow-lg' 
          : 'text-[#6e6e6e] hover:text-[#8b6914] bg-white/50 hover:bg-white'
        }`}
        whileHover={{ y: -3, scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="flex flex-col items-center">
          <motion.span 
            className="arabic-text text-lg md:text-xl mb-1 transition-transform"
            whileHover={{ scale: 1.1 }}
          >
            {arabic}
          </motion.span>
          <span className="text-xs uppercase tracking-widest">{label}</span>
        </div>
        {isActive && (
          <motion.div 
            className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#c9a961] to-[#8b6914] rounded-t-full shadow-[0_-2px_10px_rgba(201,169,97,0.5)]"
            layoutId="activeTabIndicator"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
      </motion.button>
    );
  };

  const pillarIcons = [ShahadaIcon, PrayerIcon, ZakatIcon, FastingIcon, HajjIcon];
  const faithIcons = [AllahIcon, AngelsIcon, BooksIcon, ProphetsIcon, DayOfJudgmentIcon, DivineDecreeIcon];

  return (
    <div className="max-w-[95%] lg:max-w-[90%] xl:max-w-7xl mx-auto px-4 py-8 md:py-12 lg:py-16">
      {/* Header */}
      <motion.div 
        className="text-center mb-8 md:mb-12 lg:mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="arabic-text text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a] mb-4 md:mb-6 lg:mb-8 leading-[1.3] tracking-tight">
          أساسيات الإسلام
        </h1>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3 md:mb-4 text-[#1a1a1a]">Foundations of the Faith</h1>
        <p className="text-[#4a4a4a] max-w-2xl mx-auto text-sm md:text-base lg:text-lg">Interactive guide to the essential practices and beliefs that form the core of Islamic life and worship.</p>
      </motion.div>
      
      {/* Tab Navigation */}
      <motion.div 
        className="flex justify-center gap-2 md:gap-4 mb-8 md:mb-12 lg:mb-16 overflow-x-auto scrollbar-hide"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <TabButton id="pillars" label="5 Pillars of Islam" arabic="أركان الإسلام" />
        <TabButton id="faith" label="6 Articles of Faith" arabic="أركان الإيمان" />
        <TabButton id="wudu" label="Ablution (Wudu)" arabic="الوضوء" />
        <TabButton id="salah" label="Prayer Guide" arabic="الصلاة" />
      </motion.div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'pillars' && (
            <div className="space-y-8">
              {/* Pillars Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center gap-3 mb-4">
                  <div className="w-2 h-8 bg-gradient-to-b from-[#c9a961] to-[#8b6914] rounded-full"></div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#2c2c2c]">The Five Pillars of Islam</h2>
                  <div className="w-2 h-8 bg-gradient-to-b from-[#c9a961] to-[#8b6914] rounded-full"></div>
                </div>
                <p className="text-[#4a4a4a] max-w-2xl mx-auto text-sm md:text-base">These are the foundation of Muslim life and are considered obligatory acts of worship for all believers.</p>
              </div>

              {/* Interactive Pillars Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
                {PILLARS_OF_ISLAM.map((pillar, idx) => {
                  const Icon = pillarIcons[idx];
                  const isActive = activePillar === idx;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ y: -8, scale: 1.05 }}
                      onClick={() => setActivePillar(isActive ? null : idx)}
                      className="cursor-pointer"
                    >
                      <div className={`bg-gradient-to-br ${isActive ? 'from-[#c9a961] to-[#8b6914]' : 'from-white to-[#f5f3ee]'} rounded-2xl p-6 border ${isActive ? 'border-[#c9a961] shadow-xl' : 'border-[#e8e0cf] hover:border-[#c9a961]/50 hover:shadow-lg'} h-full transition-all duration-300`}>
                        <div className="flex flex-col items-center text-center">
                          {/* Icon */}
                          <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${isActive ? 'bg-white text-[#c9a961]' : 'bg-[#c9a961] text-white'} shadow-lg`}>
                            <Icon />
                          </div>
                          
                          {/* Number Badge */}
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-3 ${isActive ? 'bg-white/20 text-white' : 'bg-white text-[#c9a961]'} text-lg font-bold shadow-md`}>
                            {idx + 1}
                          </div>
                          
                          <h3 className={`text-lg font-bold mb-3 ${isActive ? 'text-white' : 'text-[#2c2c2c]'}`}>
                            {pillar.name}
                          </h3>
                          
                          <p className={`text-sm ${isActive ? 'text-white/90' : 'text-[#4a4a4a]'} ${isActive ? '' : 'line-clamp-3'}`}>
                            {pillar.desc}
                          </p>
                          
                          {isActive && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="mt-4 pt-4 border-t border-white/20 w-full"
                            >
                              <span className="text-xs font-medium uppercase tracking-widest opacity-80">Essential Practice</span>
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Visual Timeline */}
              <motion.div 
                className="mt-12 bg-gradient-to-r from-[#f8f6f0] to-[#f5f3ee] rounded-2xl p-6 border border-[#e8e0cf]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h3 className="text-xl font-bold text-[#2c2c2c] mb-6 flex items-center gap-2">
                  <ShahadaIcon />
                  Pillars Timeline
                </h3>
                <div className="relative">
                  <div className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-[#c9a961] to-[#8b6914] transform -translate-y-1/2 rounded-full"></div>
                  
                  <div className="relative flex justify-between">
                    {PILLARS_OF_ISLAM.map((pillar, idx) => {
                      const Icon = pillarIcons[idx];
                      return (
                        <div key={idx} className="flex flex-col items-center z-10">
                          <motion.div 
                            className="w-12 h-12 bg-white rounded-full border-4 border-[#c9a961] flex items-center justify-center shadow-lg mb-3 cursor-pointer hover:scale-110 transition-transform"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                            onClick={() => setActivePillar(idx)}
                          >
                            <div className="text-[#8b6914]">
                              <Icon />
                            </div>
                          </motion.div>
                          <span className="text-sm font-medium text-[#2c2c2c] text-center max-w-[100px]">{pillar.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </div>
          )}

          {activeTab === 'faith' && (
            <div className="space-y-8">
              {/* Articles of Faith Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center gap-3 mb-4">
                  <div className="w-2 h-8 bg-gradient-to-b from-[#2c5282] to-[#2b6cb0] rounded-full"></div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#2c2c2c]">The Six Articles of Faith</h2>
                  <div className="w-2 h-8 bg-gradient-to-b from-[#2c5282] to-[#2b6cb0] rounded-full"></div>
                </div>
                <p className="text-[#4a4a4a] max-w-2xl mx-auto text-sm md:text-base">These are the core beliefs that every Muslim must affirm in their heart.</p>
              </div>

              {/* Articles Cards with Icons */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {ARTICLES_OF_FAITH.map((article, idx) => {
                  const Icon = faithIcons[idx];
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ y: -4, scale: 1.02 }}
                      className="cursor-pointer group"
                    >
                      <div className="bg-white rounded-2xl p-6 border border-[#e8e0cf] hover:border-[#2c5282] hover:shadow-lg transition-all duration-300 h-full">
                        <div className="flex items-start gap-4">
                          <div className="flex flex-col items-center">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#2c5282] to-[#2b6cb0] rounded-xl flex items-center justify-center text-white mb-2">
                              <Icon />
                            </div>
                            <div className="w-8 h-8 bg-white border-2 border-[#2c5282] rounded-full flex items-center justify-center text-[#2c5282] font-bold text-xs">
                              {idx + 1}
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-[#2c2c2c] text-lg mb-2">
                              {article.name}
                            </h3>
                            <p className="text-[#4a4a4a] text-sm leading-relaxed">
                              {article.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Articles Summary */}
              <motion.div 
                className="mt-8 bg-gradient-to-r from-[#2c5282]/5 to-[#2b6cb0]/5 rounded-2xl p-6 border border-[#2c5282]/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-xl font-bold text-[#2c2c2c] mb-4 flex items-center gap-2">
                  <BooksIcon />
                  The Foundation of Belief
                </h3>
                <p className="text-[#4a4a4a] text-sm md:text-base">
                  These six articles form the bedrock of Islamic theology. They're mentioned in the Quran and Hadith 
                  as essential beliefs that define a Muslim's faith. Together with the Five Pillars of Islam, they 
                  complete the framework of Islamic practice and belief.
                </p>
              </motion.div>
            </div>
          )}

          {activeTab === 'wudu' && (
            <div className="space-y-8">
              {/* Wudu Header */}
              <div className="relative overflow-hidden bg-gradient-to-r from-[#2b6cb0] to-[#4299e1] rounded-2xl p-8 text-white">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <WaterIcon />
                    <h2 className="text-2xl md:text-3xl font-bold">The Ablution (Wudu)</h2>
                    <WaterIcon />
                  </div>
                  <p className="text-center max-w-2xl mx-auto text-white/90 text-sm md:text-base">
                    Spiritual purification before prayer. Follow these steps in order to ensure your ablution is valid according to the Sunnah of Prophet Muhammad ﷺ.
                  </p>
                </div>
              </div>

              {/* Interactive Wudu Steps */}
              <div className="space-y-4">
                {WUDU_STEPS.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ x: 5, scale: 1.01 }}
                    className="group"
                  >
                    <div className="bg-white rounded-xl border border-[#e8e0cf] hover:border-[#2b6cb0]/50 p-6 transition-all duration-300 hover:shadow-lg">
                      <div className="flex items-start gap-4 md:gap-6">
                        {/* Step Number */}
                        <div className="relative flex-shrink-0">
                          <div className="w-16 h-16 bg-gradient-to-br from-[#2b6cb0] to-[#4299e1] rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                            {idx + 1}
                          </div>
                          <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-[#2b6cb0] rounded-full flex items-center justify-center">
                            <WaterIcon />
                          </div>
                        </div>

                        {/* Step Content */}
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="text-lg md:text-xl font-bold text-[#2c2c2c]">{step.title}</h3>
                            <span className="text-xs font-medium px-3 py-1 rounded-full bg-[#2b6cb0]/10 text-[#2b6cb0] border border-[#2b6cb0]/20">
                              Step {idx + 1}
                            </span>
                          </div>
                          
                          <p className="text-[#4a4a4a] text-sm md:text-base mb-4">{step.description}</p>
                          
                          {/* Water Droplet Visual */}
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <div 
                                key={i}
                                className="flex-1 h-2 bg-gradient-to-r from-[#2b6cb0] to-[#4299e1] rounded-full"
                                style={{ opacity: 0.2 + (i * 0.2) }}
                              ></div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Wudu Benefits */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="bg-gradient-to-br from-[#2b6cb0]/10 to-[#4299e1]/10 rounded-xl p-6 border border-[#2b6cb0]/20">
                  <h4 className="font-bold text-[#2c2c2c] mb-2 flex items-center gap-2">
                    <div className="w-2 h-4 bg-[#2b6cb0] rounded-full"></div>
                    Spiritual Purification
                  </h4>
                  <p className="text-[#4a4a4a] text-sm">Cleanses minor sins and prepares the heart for prayer</p>
                </div>
                <div className="bg-gradient-to-br from-[#2b6cb0]/10 to-[#4299e1]/10 rounded-xl p-6 border border-[#2b6cb0]/20">
                  <h4 className="font-bold text-[#2c2c2c] mb-2 flex items-center gap-2">
                    <div className="w-2 h-4 bg-[#2b6cb0] rounded-full"></div>
                    Physical Cleanliness
                  </h4>
                  <p className="text-[#4a4a4a] text-sm">Ensures hygiene of body parts exposed during prayer</p>
                </div>
                <div className="bg-gradient-to-br from-[#2b6cb0]/10 to-[#4299e1]/10 rounded-xl p-6 border border-[#2b6cb0]/20">
                  <h4 className="font-bold text-[#2c2c2c] mb-2 flex items-center gap-2">
                    <div className="w-2 h-4 bg-[#2b6cb0] rounded-full"></div>
                    Mental Focus
                  </h4>
                  <p className="text-[#4a4a4a] text-sm">Helps transition from worldly affairs to worship</p>
                </div>
              </motion.div>
            </div>
          )}

          {activeTab === 'salah' && (
            <div className="space-y-8">
              {/* Visual Prayer Flow */}
              <VisualPrayerFlow />

              {/* Additional Resources */}
              <motion.div 
                className="bg-gradient-to-br from-[#c9a961]/10 to-[#8b6914]/10 rounded-2xl p-6 border border-[#c9a961]/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-xl font-bold text-[#2c2c2c] mb-4 flex items-center gap-2">
                  <PrayerIcon />
                  Prayer Resources
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-xl p-4 border border-[#e8e0cf] hover:border-[#c9a961] hover:shadow-md transition-all group">
                    <h4 className="font-bold text-[#2c2c2c] mb-2 group-hover:text-[#8b6914]">Prayer Times</h4>
                    <p className="text-[#4a4a4a] text-sm">Get accurate prayer times for your location</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-[#e8e0cf] hover:border-[#c9a961] hover:shadow-md transition-all group">
                    <h4 className="font-bold text-[#2c2c2c] mb-2 group-hover:text-[#8b6914]">Qibla Finder</h4>
                    <p className="text-[#4a4a4a] text-sm">Find the direction of prayer from anywhere</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-[#e8e0cf] hover:border-[#c9a961] hover:shadow-md transition-all group">
                    <h4 className="font-bold text-[#2c2c2c] mb-2 group-hover:text-[#8b6914]">Prayer Reminders</h4>
                    <p className="text-[#4a4a4a] text-sm">Set up notifications for prayer times</p>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Basics;