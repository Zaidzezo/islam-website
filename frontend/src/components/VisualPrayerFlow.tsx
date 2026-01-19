import React from 'react';
import { motion } from 'framer-motion';
import { VISUAL_PRAYER_FLOW, TASHAHHUD_TEXT, NULLIFIERS_OF_PRAYER, POST_SALAH_DHIKR, SALAH_RECITATION, SALAT_AL_IBRAHIMIYYAH } from '../data';

interface VisualPrayerFlowProps {
  className?: string;
}

const VisualPrayerFlow: React.FC<VisualPrayerFlowProps> = ({ className = '' }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
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

  return (
    <div className={`bg-white rounded-3xl shadow-lg border border-[#e8e0cf] ${className}`}>
      {/* Header */}
      <div className="bg-gradient-to-r from-[#c9a961] to-[#8b6914] text-white rounded-t-3xl p-8">
        <h1 className="text-3xl font-bold mb-2">Visual Prayer Flow</h1>
        <p className="text-[#f8f6f0] opacity-90">Complete guide to performing Salah correctly</p>
      </div>

      <div className="p-8">
        {/* Prayer Flow Steps */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#2c2c2c] mb-6 pb-4 border-b border-[#e8e0cf]">
            Prayer Positions Sequence
          </h2>
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {VISUAL_PRAYER_FLOW.prayerSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.05 }}
                className="bg-[#f8f6f0] border border-[#e8e0cf] rounded-2xl p-6 text-center hover:border-[#c9a961] transition-all group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#c9a961] to-[#8b6914] rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto">
                  {index + 1}
                </div>
                <h3 className="font-bold text-[#2c2c2c] text-lg mb-2">{step.english}</h3>
                <p className="arabic-text text-2xl text-[#2d5016] mb-2">{step.arabic}</p>
                <p className="text-[#4a4a4a] text-sm italic">{step.transliteration}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Preparation Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#2c2c2c] mb-6 pb-4 border-b border-[#e8e0cf]">
            Preparation for Prayer
          </h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {VISUAL_PRAYER_FLOW.preparation.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-[#f8f6f0] border border-[#e8e0cf] rounded-2xl p-6 hover:border-[#8b6914] transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#c9a961] to-[#8b6914] rounded-xl flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#2c2c2c] text-lg">{item.title}</h3>
                    <p className="arabic-text text-[#2d5016] font-bold">{item.arabic}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {item.descriptions.map((desc, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[#4a4a4a] text-sm">
                      <div className="w-1.5 h-1.5 bg-[#c9a961] rounded-full mt-2 flex-shrink-0"></div>
                      {desc}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Five Daily Prayers */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#2c2c2c] mb-6 pb-4 border-b border-[#e8e0cf]">
            The Five Daily Prayers
          </h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {VISUAL_PRAYER_FLOW.dailyPrayers.map((prayer, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.08, rotate: 2 }}
                className={`bg-gradient-to-br ${prayer.color} text-white rounded-2xl p-6 text-center shadow-lg transform hover:shadow-xl transition-all`}
              >
                <h3 className="text-2xl font-bold mb-2">{prayer.name}</h3>
                <div className="text-5xl font-black mb-2">{prayer.rakahs}</div>
                <p className="text-sm opacity-90 mb-3">Rak'ahs</p>
                <p className="text-xs bg-white/20 px-3 py-1 rounded-full inline-block">
                  {prayer.time}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Prayer Positions & Movements */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#2c2c2c] mb-6 pb-4 border-b border-[#e8e0cf]">
            Prayer Positions & Movements
          </h2>
          
          {/* Positions */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {VISUAL_PRAYER_FLOW.prayerPositions.map((position, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.03 }}
                className="bg-[#f8f6f0] border border-[#e8e0cf] rounded-2xl p-6 hover:border-[#2d5016] transition-all"
              >
                <h3 className="font-bold text-[#2c2c2c] text-lg mb-2">{position.english}</h3>
                <p className="arabic-text text-2xl text-[#2d5016] mb-3">{position.arabic}</p>
                <p className="text-[#4a4a4a] text-sm mb-4">{position.description}</p>
                <p className="text-[#8b6914] text-sm italic">{position.transliteration}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Movement Sequence */}
          <motion.div 
            className="bg-gradient-to-br from-[#f8f6f0] to-[#f5f3ee] border border-[#e8e0cf] rounded-2xl p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-[#2c2c2c] mb-6 flex items-center gap-3">
              <span className="w-3 h-8 bg-[#c9a961] rounded-full"></span>
              Complete Movement Sequence
            </h3>
            <ol className="space-y-4">
              {VISUAL_PRAYER_FLOW.movementSequence.map((step, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl border border-[#e8e0cf] hover:border-[#c9a961] transition-all"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-[#c9a961] to-[#8b6914] rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-[#4a4a4a] leading-relaxed pt-1">{step}</span>
                </motion.li>
              ))}
            </ol>
          </motion.div>
        </section>

        {/* Prayers & Recitations Section */}
        <section className="mb-12">
          <motion.div 
            className="bg-gradient-to-r from-[#c9a961]/10 to-[#8b6914]/10 rounded-3xl p-8 border border-[#e8e0cf]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-[#2c2c2c] mb-8 pb-4 border-b border-[#e8e0cf]">
              Prayers & Recitations
            </h2>

            {/* Prayer Recitations */}
            <div className="space-y-8 mb-12">
              {SALAH_RECITATION.map((recitation, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.01, x: 5 }}
                  className="bg-white rounded-2xl p-6 border border-[#e8e0cf] hover:border-[#c9a961]/50 transition-all group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#c9a961] to-[#8b6914] rounded-lg flex items-center justify-center text-white font-bold">
                      {recitation.step}
                    </div>
                    <h3 className="font-bold text-[#2c2c2c] text-lg">{recitation.title}</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div>
                      <p className="text-sm text-[#4a4a4a] mb-2">Arabic</p>
                      <p className="arabic-text text-xl text-[#2c2c2c] leading-loose" style={{ direction: 'rtl' }}>
                        {recitation.arabic}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-[#4a4a4a] mb-2">Transliteration</p>
                      <p className="text-lg text-[#4a4a4a] font-medium italic">{recitation.transliteration}</p>
                    </div>
                    <div>
                      <p className="text-sm text-[#4a4a4a] mb-2">Translation</p>
                      <p className="text-[#4a4a4a]">{recitation.translation}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tashahhud Section */}
            <motion.div 
              className="mb-12 p-6 bg-gradient-to-r from-[#c9a961]/20 to-[#8b6914]/20 rounded-2xl border border-[#c9a961]/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-xl font-bold text-[#2c2c2c] mb-4 flex items-center gap-3">
                <span className="w-3 h-6 bg-[#8b6914] rounded-full"></span>
                Tashahhud (Final Sitting)
              </h3>
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-[#4a4a4a] mb-2">Arabic</p>
                  <p className="arabic-text text-2xl text-[#2c2c2c] leading-loose" style={{ direction: 'rtl', textAlign: 'right' }}>
                    {TASHAHHUD_TEXT.arabic}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-[#4a4a4a] mb-2">Transliteration</p>
                  <p className="text-[#4a4a4a] italic text-lg">{TASHAHHUD_TEXT.transliteration}</p>
                </div>
                <div>
                  <p className="text-sm text-[#4a4a4a] mb-2">Translation</p>
                  <p className="text-[#4a4a4a]">{TASHAHHUD_TEXT.translation}</p>
                </div>
              </div>
            </motion.div>

            {/* As-Salat al-Ibrahimiyyah Section */}
            <motion.div 
              className="mb-12 p-6 bg-gradient-to-r from-[#2d5016]/10 to-[#8b6914]/10 rounded-2xl border border-[#2d5016]/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-6 bg-[#2d5016] rounded-full"></span>
                <h3 className="text-xl font-bold text-[#2c2c2c]">As-Salat al-Ibrahimiyyah</h3>
                <span className="text-xs bg-[#2d5016] text-white px-2 py-1 rounded-full ml-2">
                  After Final Tashahhud
                </span>
              </div>
              <p className="text-sm text-[#4a4a4a] mb-6 italic">
                This prayer is recited after the final Tashahhud and before Tasleem (ending the prayer).
              </p>
              
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-[#4a4a4a] mb-2">Arabic</p>
                  <p className="arabic-text text-xl text-[#2c2c2c] leading-loose" style={{ direction: 'rtl', textAlign: 'right' }}>
                    {SALAT_AL_IBRAHIMIYYAH.arabic}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-[#4a4a4a] mb-2">Transliteration</p>
                  <p className="text-[#4a4a4a] italic text-lg">{SALAT_AL_IBRAHIMIYYAH.transliteration}</p>
                </div>
                <div>
                  <p className="text-sm text-[#4a4a4a] mb-2">Translation</p>
                  <p className="text-[#4a4a4a]">{SALAT_AL_IBRAHIMIYYAH.translation}</p>
                </div>
              </div>
            </motion.div>

            {/* What Breaks the Prayer & Recommended Dhikr */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* What Breaks the Prayer */}
              <motion.div 
                className="bg-white rounded-2xl p-6 border border-[#e8e0cf]"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                <h3 className="text-xl font-bold text-[#2c2c2c] mb-6 flex items-center gap-3">
                  <span className="w-3 h-6 bg-red-500 rounded-full"></span>
                  What Breaks the Prayer
                </h3>
                
                <div className="space-y-4">
                  {NULLIFIERS_OF_PRAYER.map((nullifier, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + idx * 0.05 }}
                      className="flex items-start gap-3 p-4 bg-red-50/50 rounded-xl border border-red-200"
                    >
                      <div className="w-6 h-6 bg-red-500/20 text-red-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        ❌
                      </div>
                      <span className="text-red-700">{nullifier}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Recommended Dhikr After Salah */}
              <motion.div 
                className="bg-white rounded-2xl p-6 border border-[#e8e0cf]"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                <h3 className="text-xl font-bold text-[#2c2c2c] mb-6 flex items-center gap-3">
                  <span className="w-3 h-6 bg-[#2d5016] rounded-full"></span>
                  Recommended Dhikr After Salah
                </h3>
                
                <div className="space-y-4">
                  {POST_SALAH_DHIKR.map((dhikr, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + idx * 0.05 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="bg-[#f8f6f0] rounded-xl p-4 border border-[#e8e0cf] hover:bg-[#2d5016]/5 transition-colors"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <p className="arabic-text text-lg text-[#2d5016] font-bold">{dhikr.arabic}</p>
                        {dhikr.times > 1 && (
                          <span className="bg-[#2d5016] text-white text-xs px-2 py-1 rounded-full">
                            {dhikr.times} times
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-[#4a4a4a] mb-1 italic">{dhikr.transliteration}</p>
                      <p className="text-[#4a4a4a] text-sm">{dhikr.meaning}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default VisualPrayerFlow;