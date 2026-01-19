import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaBook } from 'react-icons/fa';
import { MdInfo, MdMenuBook } from 'react-icons/md';

interface HomeProps {
  onNavigate: (path: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const sections = [
    { 
      title: 'The Foundations', 
      arabic: 'الأصول', 
      desc: 'Learn the Five Pillars of Islam, Articles of Faith, Wudu, and Salah with authentic guidance.', 
      path: 'basics',
      icon: MdInfo,
      color: 'text-[#c9a961]',
      bgColor: 'bg-white border-[#e8e0cf] hover:border-[#c9a961] hover:shadow-md'
    },
    { 
      title: 'Holy Qur\'an', 
      arabic: 'القرآن الكريم', 
      desc: 'Read and explore all 114 surahs with authentic Arabic text and accurate translations.', 
      path: 'surahs',
      icon: MdMenuBook,
      color: 'text-[#8b6914]',
      bgColor: 'bg-white border-[#e8e0cf] hover:border-[#8b6914] hover:shadow-md'
    },
    { 
      title: 'The Companions', 
      arabic: 'الرسول ﷺ والصحابة الكرام', 
      desc: 'Discover the lives of Prophet Muhammad ﷺ and the Ten Promised Paradise.', 
      path: 'people',
      icon: FaUsers,
      color: 'text-[#2d5016]',
      bgColor: 'bg-white border-[#e8e0cf] hover:border-[#2d5016] hover:shadow-md'
    },
    { 
      title: 'Sahih Traditions', 
      arabic: 'احاديث نبوية', 
      desc: 'Authentic narrations from Sahih Al-Bukhari and Sahih Muslim with complete references.', 
      path: 'hadith',
      icon: FaBook,
      color: 'text-[#6b5633]',
      bgColor: 'bg-white border-[#e8e0cf] hover:border-[#6b5633] hover:shadow-md'
    },
  ];

  const commitmentCards = [
    {
      id: 1,
      title: '100% Verified',
      description: 'All content sourced from authenticated Islamic texts and verified by scholars',
      image: '/111.png',
      alt: 'Verified Islamic texts',
      features: ['Scholar Verified', 'Authentic Sources', 'Peer Reviewed'],
      icon: '✓'
    },
    {
      id: 2,
      title: 'Sahih Only',
      description: 'Hadith collection exclusively from Sahih Al-Bukhari and Sahih Muslim',
      image: '/222.png',
      alt: 'Sahih hadith collections',
      features: ['Sahih Al-Bukhari', 'Sahih Muslim', 'Mutually Authentic'],
      icon: '📚'
    },
    {
      id: 3,
      title: 'Accurate Order',
      description: 'Quran surahs in Mushaf order with precise verse numbering',
      image: '/333.png',
      alt: 'Quran Mushaf order',
      features: ['Uthmani Script', 'Verse Numbering', 'Proper Sequence'],
      icon: '📖'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f6f0] text-sm md:text-base">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-[#f8f6f0] via-[#f5f3ee] to-[#ede8d8] pt-8 md:pt-12 lg:pt-16 xl:pt-20 pb-8 md:pb-12 lg:pb-16 xl:pb-24 border-b border-[#e8e0cf]">
        {/* Subtle Pattern Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(201,169,97,0.15) 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }}></div>
        </div>
        
        <div className="max-w-[95%] lg:max-w-[90%] xl:max-w-5xl mx-auto px-4 pt-8 md:pt-12 lg:pt-16 pb-8 md:pb-12 lg:pb-16 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Arabic Title */}
            <motion.div
              className="mb-4 md:mb-6 lg:mb-8"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="arabic-text text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1a1a1a] mb-4 md:mb-6 leading-[1.3] tracking-tight">
                القرآن الكريم
              </h1>
            </motion.div>

            {/* English Title */}
            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#2c2c2c] mb-4 md:mb-6 tracking-tight"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Noor Academy
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              className="text-sm md:text-base lg:text-lg text-[#4a4a4a] max-w-2xl mx-auto leading-relaxed font-normal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Discover authentic Islamic knowledge through the Quran, Hadith, and the lives of the righteous predecessors
            </motion.p>

            {/* Decorative Line */}
            <motion.div
              className="mt-6 md:mt-8 lg:mt-12 flex items-center justify-center gap-3 md:gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="h-px w-12 md:w-16 lg:w-20 bg-gradient-to-r from-transparent to-[#c9a961]/40"></div>
              <div className="flex items-center gap-1 md:gap-2">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#c9a961]"></div>
                <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-[#8b6914]"></div>
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#c9a961]"></div>
              </div>
              <div className="h-px w-12 md:w-16 lg:w-20 bg-gradient-to-l from-transparent to-[#c9a961]/40"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[95%] lg:max-w-[90%] xl:max-w-6xl mx-auto px-4 py-8 md:py-12 lg:py-16 xl:py-20 mt-0 relative z-20">
        {/* Sections Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12 md:mb-16 lg:mb-20 xl:mb-24"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.path}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onNavigate(section.path)}
                className={`group relative ${section.bgColor} border rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 cursor-pointer transition-all duration-300 bg-white`}
              >
                {/* Icon */}
                <div className={`${section.color} mb-3 md:mb-4 lg:mb-6 transition-transform group-hover:scale-110`}>
                  <Icon size={28} />
                </div>

                {/* Arabic Text */}
                <div className="arabic-text text-lg md:text-xl lg:text-2xl font-medium text-[#1a1a1a] mb-3 md:mb-4 leading-relaxed">
                  {section.arabic}
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-[#2c2c2c] mb-2 md:mb-3">
                  {section.title}
                </h3>

                {/* Description */}
                <p className="text-[#4a4a4a] leading-relaxed mb-3 md:mb-4 lg:mb-6 text-sm md:text-base">
                  {section.desc}
                </p>

                {/* Arrow */}
                <div className={`${section.color} flex items-center gap-1 md:gap-2 text-xs md:text-sm font-medium group-hover:gap-2 md:group-hover:gap-3 transition-all`}>
                  <span>Explore</span>
                  <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Enhanced Our Commitment Section */}
        <motion.div
          className="mb-12 md:mb-16 lg:mb-20 xl:mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <motion.div 
              className="inline-block mb-3 md:mb-4 lg:mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="arabic-text text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-3 md:mb-4 leading-[1.3] tracking-tight">
                التزامنا
              </h2>
            </motion.div>
            
            <motion.h2 
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#2c2c2c] mb-4 md:mb-6 tracking-tight"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our Commitment
            </motion.h2>
            
            <motion.p 
              className="text-sm md:text-base lg:text-lg text-[#4a4a4a] max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Authentic sources, verified content, presented with care and precision
            </motion.p>
          </div>

          {/* Commitment Cards with Images */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {commitmentCards.map((card) => (
              <motion.div
                key={card.id}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group bg-white rounded-xl md:rounded-2xl lg:rounded-3xl shadow border border-[#e8e0cf] overflow-hidden hover:shadow-lg hover:border-[#c9a961]/50 transition-all duration-300"
              >
                {/* Image Section */}
                <div className="relative h-32 md:h-40 lg:h-48 overflow-hidden bg-gradient-to-br from-[#c9a961]/20 to-[#8b6914]/20 flex items-center justify-center">
                  {/* Try to load actual image */}
                  <img 
                    src={card.image} 
                    alt={card.alt}
                    className="w-[100px] h-[80px] md:w-[110px] md:h-[90px] lg:w-[130px] lg:h-[100px] object-cover group-hover:scale-110 transition-transform duration-300"
                    onLoad={(e) => {
                      e.currentTarget.style.opacity = '1';
                    }}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        const existingFallback = parent.querySelector('.image-fallback');
                        if (!existingFallback) {
                          const fallback = document.createElement('div');
                          fallback.className = 'image-fallback absolute inset-0 flex items-center justify-center';
                          fallback.innerHTML = `<span class="text-4xl md:text-5xl text-white">${card.icon}</span>`;
                          parent.appendChild(fallback);
                        }
                      }
                    }}
                    style={{ opacity: 0, transition: 'opacity 0.3s' }}
                  />
                  
                  {/* Badge */}
                  <div className="absolute top-2 md:top-3 lg:top-4 left-2 md:left-3 lg:left-4">
                    <span className="text-xs font-bold text-white bg-gradient-to-r from-[#c9a961] to-[#8b6914] px-2 py-1 rounded-full">
                      Commitment {card.id}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-4 md:p-6 lg:p-8">
                  <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                    <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-[#c9a961] to-[#8b6914] rounded-lg md:rounded-xl flex items-center justify-center text-white text-lg md:text-xl font-bold">
                      {card.icon}
                    </div>
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[#2c2c2c]">{card.title}</h3>
                  </div>
                  
                  <p className="text-[#4a4a4a] leading-relaxed mb-4 md:mb-6 lg:mb-8 text-sm md:text-base">
                    {card.description}
                  </p>
                  
                  <div className="space-y-2 md:space-y-3">
                    {card.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 md:gap-3">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#c9a961] rounded-full"></div>
                        <span className="text-xs md:text-sm text-[#6e6e6e]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="px-4 md:px-6 lg:px-8 py-3 md:py-4 lg:py-6 bg-gradient-to-r from-[#f8f6f0] to-[#f5f3ee] border-t border-[#e8e0cf]">
                  <div className="flex items-center justify-between">
                    <div className="text-xs md:text-sm text-[#6e6e6e]">
                      Authenticity Guaranteed
                    </div>
                    <div className="flex items-center gap-1 md:gap-2 text-[#8b6914]">
                      <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs md:text-sm font-medium">Verified</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Decorative Separator */}
          <motion.div 
            className="mt-8 md:mt-12 lg:mt-16 relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#e8e0cf]"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="bg-white px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4">
                <div className="flex items-center gap-2 md:gap-3 lg:gap-4 text-xs md:text-sm text-[#6e6e6e]">
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-[#c9a961] rounded-full"></div>
                  <span className="italic">Authenticity is our priority, accuracy is our promise</span>
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-[#8b6914] rounded-full"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;