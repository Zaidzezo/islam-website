import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PEOPLE } from '../data';
import type { Person } from '../types';
import { FaUser, FaCalendarAlt, FaUsers, FaStar } from 'react-icons/fa';
import { MdCheckCircle, MdBook, MdMilitaryTech } from 'react-icons/md';

const People: React.FC = () => {
  const [selectedPerson, setSelectedPerson] = useState<Person>(PEOPLE[0]);
  const [activeTab, setActiveTab] = useState<'all' | 'prophet' | 'caliphs' | 'companions'>('all');

  const filteredPeople = PEOPLE.filter(person => {
    if (activeTab === 'all') return true;
    if (activeTab === 'prophet') return person.id === 'muhammad';
    if (activeTab === 'caliphs') return ['abubakr', 'umar', 'uthman', 'ali'].includes(person.id);
    if (activeTab === 'companions') return !['muhammad', 'abubakr', 'umar', 'uthman', 'ali'].includes(person.id);
    return true;
  });

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
            الصحابة الكرام
          </h1>
        </motion.div>
        
        <motion.h2 
          className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#2c2c2c] mb-4 md:mb-6 tracking-tight"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          The Best of Generations
        </motion.h2>
        
        <motion.p 
          className="text-sm md:text-base lg:text-lg text-[#4a4a4a] max-w-3xl mx-auto leading-relaxed mb-6 md:mb-8 lg:mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Explore the lives of Prophet Muhammad ﷺ and the Ten Promised Paradise (Ashara Mubashshara)
        </motion.p>

        {/* Stats Bar */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 md:gap-4 lg:gap-6 mb-6 md:mb-8 lg:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="bg-white rounded-lg md:rounded-xl lg:rounded-2xl shadow border border-[#e8e0cf] px-4 py-3 md:px-6 md:py-4 lg:px-8 lg:py-6 hover:shadow-md transition-shadow">
            <div className="text-2xl md:text-3xl font-bold text-[#2c2c2c] mb-1 md:mb-2">{PEOPLE.length - 1}</div>
            <div className="text-xs md:text-sm text-[#4a4a4a]">Total Companions</div>
          </div>
          <div className="bg-white rounded-lg md:rounded-xl lg:rounded-2xl shadow border border-[#e8e0cf] px-4 py-3 md:px-6 md:py-4 lg:px-8 lg:py-6 hover:shadow-md transition-shadow">
            <div className="text-2xl md:text-3xl font-bold text-[#2c2c2c] mb-1 md:mb-2">10</div>
            <div className="text-xs md:text-sm text-[#4a4a4a]">Promised Paradise</div>
            <div className="text-xs text-[#6e6e6e] mt-1">Ashara Mubashshara</div>
          </div>
          <div className="bg-white rounded-lg md:rounded-xl lg:rounded-2xl shadow border border-[#e8e0cf] px-4 py-3 md:px-6 md:py-4 lg:px-8 lg:py-6 hover:shadow-md transition-shadow">
            <div className="text-2xl md:text-3xl font-bold text-[#2c2c2c] mb-1 md:mb-2">4</div>
            <div className="text-xs md:text-sm text-[#4a4a4a]">Rightly Guided</div>
            <div className="text-xs text-[#6e6e6e] mt-1">Caliphs</div>
          </div>
          <div className="bg-white rounded-lg md:rounded-xl lg:rounded-2xl shadow border border-[#e8e0cf] px-4 py-3 md:px-6 md:py-4 lg:px-8 lg:py-6 hover:shadow-md transition-shadow">
            <div className="text-2xl md:text-3xl font-bold text-[#2c2c2c] mb-1 md:mb-2">1</div>
            <div className="text-xs md:text-sm text-[#4a4a4a]">Final Prophet</div>
            <div className="text-xs text-[#6e6e6e] mt-1">Muhammad ﷺ</div>
          </div>
        </motion.div>
      </div>

      {/* Filter Tabs */}
      <motion.div 
        className="bg-white rounded-xl md:rounded-2xl lg:rounded-3xl shadow border border-[#e8e0cf] p-4 md:p-6 mb-6 md:mb-8 lg:mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <div className="flex flex-wrap gap-2 md:gap-3 lg:gap-4 justify-center">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 rounded-lg md:rounded-xl lg:rounded-2xl text-xs md:text-sm font-semibold transition-all flex items-center gap-1 md:gap-2 ${activeTab === 'all'
              ? 'bg-gradient-to-r from-[#c9a961] to-[#8b6914] text-white shadow'
              : 'bg-[#f8f6f0] text-[#4a4a4a] hover:bg-[#ede8d8] border border-[#e8e0cf]'
            }`}
          >
            <FaUsers size={14} />
            All Companions
          </button>
          <button
            onClick={() => setActiveTab('prophet')}
            className={`px-4 py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 rounded-lg md:rounded-xl lg:rounded-2xl text-xs md:text-sm font-semibold transition-all flex items-center gap-1 md:gap-2 ${activeTab === 'prophet'
              ? 'bg-gradient-to-r from-[#2c5282] to-[#2b6cb0] text-white shadow'
              : 'bg-[#f8f6f0] text-[#4a4a4a] hover:bg-[#ede8d8] border border-[#e8e0cf]'
            }`}
          >
            <FaStar size={14} />
            The Prophet ﷺ
          </button>
          <button
            onClick={() => setActiveTab('caliphs')}
            className={`px-4 py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 rounded-lg md:rounded-xl lg:rounded-2xl text-xs md:text-sm font-semibold transition-all flex items-center gap-1 md:gap-2 ${activeTab === 'caliphs'
              ? 'bg-gradient-to-r from-[#b45309] to-[#d97706] text-white shadow'
              : 'bg-[#f8f6f0] text-[#4a4a4a] hover:bg-[#ede8d8] border border-[#e8e0cf]'
            }`}
          >
            <MdMilitaryTech size={16} />
            Rightly Guided Caliphs
          </button>
          <button
            onClick={() => setActiveTab('companions')}
            className={`px-4 py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 rounded-lg md:rounded-xl lg:rounded-2xl text-xs md:text-sm font-semibold transition-all flex items-center gap-1 md:gap-2 ${activeTab === 'companions'
              ? 'bg-gradient-to-r from-[#2d5016] to-[#4a7c1f] text-white shadow'
              : 'bg-[#f8f6f0] text-[#4a4a4a] hover:bg-[#ede8d8] border border-[#e8e0cf]'
            }`}
          >
            <MdBook size={16} />
            Other Companions
          </button>
        </div>
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
        {/* Left Sidebar - People List */}
        <div className="lg:col-span-2">
          <div className="sticky top-20 md:top-24 space-y-4 md:space-y-6">
            {/* People List */}
            <div className="bg-white rounded-xl md:rounded-2xl lg:rounded-3xl shadow border border-[#e8e0cf] overflow-hidden">
              <div className="bg-gradient-to-r from-[#c9a961] to-[#8b6914] p-4 md:p-6 text-white">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-base md:text-lg lg:text-xl font-bold">Companions Directory</h2>
                    <p className="text-xs opacity-90 mt-1">Select a companion to learn more</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xl md:text-2xl font-bold">{filteredPeople.length}</div>
                    <div className="text-xs opacity-75">companions</div>
                  </div>
                </div>
              </div>
              
              <div className="max-h-[500px] md:max-h-[600px] lg:max-h-[700px] overflow-y-auto p-3 md:p-4">
                <div className="space-y-2 md:space-y-3">
                  {filteredPeople.map((person) => (
                    <button
                      key={person.id}
                      onClick={() => setSelectedPerson(person)}
                      className={`w-full text-left p-3 md:p-4 lg:p-5 rounded-lg md:rounded-xl lg:rounded-2xl transition-all duration-300 flex items-center gap-3 md:gap-4 ${selectedPerson.id === person.id
                        ? 'bg-gradient-to-r from-[#c9a961]/10 to-[#8b6914]/10 border-2 border-[#c9a961]/50 shadow transform scale-[1.02]'
                        : 'hover:bg-[#f8f6f0] border border-transparent hover:border-[#e8e0cf]'
                      }`}
                    >
                      {/* Person Icon */}
                      <div className={`w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-lg md:rounded-xl flex items-center justify-center text-base md:text-lg font-bold flex-shrink-0 ${selectedPerson.id === person.id
                        ? 'bg-gradient-to-r from-[#c9a961] to-[#8b6914] text-white shadow'
                        : 'bg-[#f8f6f0] text-[#4a4a4a] border border-[#e8e0cf]'
                      }`}>
                        {person.id === 'muhammad' ? 'ﷺ' : person.name.charAt(0)}
                      </div>

                      {/* Person Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-1 md:gap-2">
                            <span className={`font-bold truncate text-sm md:text-base ${selectedPerson.id === person.id ? 'text-[#2c2c2c]' : 'text-[#2c2c2c]'}`}>
                              {person.name}
                            </span>
                            {['muhammad', 'abubakr', 'umar', 'uthman', 'ali'].includes(person.id) && (
                              <span className="text-xs px-1.5 py-0.5 md:px-2 md:py-1 rounded-full bg-gradient-to-r from-[#c9a961]/20 to-[#8b6914]/20 text-[#8b6914] border border-[#c9a961]/30">
                                {person.id === 'muhammad' ? 'Prophet' : 'Caliph'}
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-[#6e6e6e]">
                            {person.tribe.split('(')[0].trim()}
                          </div>
                        </div>
                        
                        <p className={`text-xs md:text-sm truncate ${selectedPerson.id === person.id ? 'text-[#8b6914]' : 'text-[#6e6e6e]'}`}>
                          {person.title}
                        </p>
                        
                        <div className="flex items-center justify-between mt-1 md:mt-2">
                          <div className="text-xs text-[#6e6e6e] flex items-center gap-1">
                            <FaCalendarAlt size={9} />
                            <span>{person.birth.split(',')[0]}</span>
                          </div>
                          {selectedPerson.id === person.id && (
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
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Person Details */}
        <div className="lg:col-span-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedPerson.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white rounded-xl md:rounded-2xl lg:rounded-3xl shadow border border-[#e8e0cf] overflow-hidden">
                {/* Person Header */}
                <div className="bg-gradient-to-r from-[#c9a961] via-[#b8954a] to-[#8b6914] p-6 md:p-8 lg:p-10 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-white/10 rounded-full -translate-y-24 translate-x-24 md:-translate-y-28 md:translate-x-28 lg:-translate-y-32 lg:translate-x-32"></div>
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative z-10">
                    <div className="mb-6 md:mb-0">
                      <div className="flex items-center flex-wrap gap-2 md:gap-3 mb-4 md:mb-6">
                        <span className="bg-white/20 backdrop-blur-sm text-white text-xs md:text-sm font-bold px-3 py-1.5 md:px-4 md:py-2 rounded-full">
                          {selectedPerson.id === 'muhammad' ? 'Final Prophet' : 
                           ['abubakr', 'umar', 'uthman', 'ali'].includes(selectedPerson.id) ? 'Rightly Guided Caliph' : 'Companion'}
                        </span>
                        <span className={`text-xs md:text-sm font-medium px-3 py-1.5 md:px-4 md:py-2 rounded-full ${['muhammad', 'abubakr', 'umar', 'uthman', 'ali'].includes(selectedPerson.id)
                          ? 'bg-gradient-to-r from-[#2d5016] to-[#4a7c1f] text-white'
                          : 'bg-white/20 text-white'
                        }`}>
                          {selectedPerson.tribe.split('(')[0].trim()}
                        </span>
                        <span className="text-xs md:text-sm bg-white/20 px-3 py-1.5 md:px-4 md:py-2 rounded-full">
                          Ashara Mubashshara
                        </span>
                      </div>
                      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">{selectedPerson.name}</h1>
                      <p className="text-lg md:text-xl opacity-90 italic">{selectedPerson.title}</p>
                    </div>
                    <div className="text-center md:text-right">
                      <div className="text-base md:text-lg font-medium opacity-90 mb-3 md:mb-4">Status</div>
                      <div className="text-3xl md:text-4xl font-bold">
                        {selectedPerson.id === 'muhammad' ? 'ﷺ' : 'رضي الله عنه'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Biography Content */}
                <div className="p-4 md:p-6 lg:p-8 md:p-12 bg-[#f8f6f0]">
                  <div className="mb-6 md:mb-8">
                    <div className="flex items-center justify-between mb-6 md:mb-8 lg:mb-10">
                      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#2c2c2c] flex items-center gap-2 md:gap-3">
                        <span className="w-2 h-6 md:w-3 md:h-8 lg:w-3 lg:h-10 bg-gradient-to-b from-[#c9a961] to-[#8b6914] rounded-full"></span>
                        Detailed Biography
                      </h2>
                      <div className="flex items-center space-x-2 md:space-x-3 lg:space-x-4">
                        <div className="text-xs md:text-sm text-[#6e6e6e] bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg md:rounded-xl border border-[#e8e0cf] flex items-center gap-1 md:gap-2">
                          <FaCalendarAlt size={12} />
                          Born: {selectedPerson.birth}
                        </div>
                      </div>
                    </div>
                    
                    <div className="prose prose-sm md:prose-base lg:prose-lg max-w-none">
                      <div className="bg-white rounded-xl md:rounded-2xl lg:rounded-3xl p-4 md:p-6 lg:p-8 border border-[#e8e0cf] mb-4 md:mb-6 lg:mb-8">
                        <p className="text-base md:text-lg text-[#4a4a4a] leading-relaxed whitespace-pre-wrap">
                          {selectedPerson.description}
                        </p>
                      </div>
                      
                      <div className="bg-white rounded-xl md:rounded-2xl lg:rounded-3xl p-4 md:p-6 lg:p-8 border border-[#e8e0cf]">
                        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[#2c2c2c] mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
                          <span className="w-1.5 h-4 md:w-2 md:h-5 lg:w-2 lg:h-6 bg-[#8b6914] rounded-full"></span>
                          Full Biography
                        </h3>
                        <div className="text-[#4a4a4a] leading-relaxed whitespace-pre-wrap text-base md:text-lg">
                          {selectedPerson.fullBiography}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Achievements Section */}
                  <div className="mt-8 md:mt-12 lg:mt-16 pt-6 md:pt-8 lg:pt-12 border-t border-[#e8e0cf]">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[#2c2c2c] mb-4 md:mb-6 lg:mb-8 flex items-center gap-2 md:gap-3">
                      <span className="w-2 h-4 md:w-2.5 md:h-6 lg:w-3 lg:h-8 bg-[#c9a961] rounded-full"></span>
                      Key Historical Achievements
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-6">
                      {selectedPerson.achievements.map((achievement, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 + idx * 0.05 }}
                          whileHover={{ scale: 1.03, y: -4 }}
                          className="bg-gradient-to-r from-[#f8f6f0] to-[#f5f3ee] rounded-lg md:rounded-xl lg:rounded-2xl p-3 md:p-4 lg:p-6 border border-[#e8e0cf] hover:border-[#c9a961]/50 transition-all group"
                        >
                          <div className="flex items-start gap-3 md:gap-4">
                            <div className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-gradient-to-br from-[#c9a961] to-[#8b6914] rounded-lg md:rounded-xl flex items-center justify-center text-white flex-shrink-0">
                              <MdCheckCircle size={16} />
                            </div>
                            <div>
                              <div className="flex items-center gap-1 md:gap-2 mb-1 md:mb-2">
                                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#c9a961] rounded-full"></div>
                                <span className="text-xs md:text-sm font-medium text-[#6e6e6e]">Achievement {idx + 1}</span>
                              </div>
                              <h4 className="font-bold text-[#2c2c2c] text-sm md:text-base lg:text-lg">{achievement}</h4>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="mt-8 md:mt-12 pt-6 md:pt-8 lg:pt-12 border-t border-[#e8e0cf]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                      <div>
                        <h4 className="text-lg md:text-xl font-bold text-[#2c2c2c] mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
                          <span className="w-1.5 h-4 md:w-2 md:h-5 lg:w-2 lg:h-6 bg-[#2d5016] rounded-full"></span>
                          Legacy & Impact
                        </h4>
                        <div className="bg-white rounded-lg md:rounded-xl lg:rounded-2xl p-4 md:p-6 border border-[#e8e0cf]">
                          <p className="text-[#4a4a4a] leading-relaxed text-sm md:text-base">
                            {selectedPerson.name} played a pivotal role in the establishment and spread of Islam. 
                            {selectedPerson.id === 'muhammad' ? ' As the final messenger of Allah, his life serves as the perfect example for all Muslims.' : 
                             ' Their contributions to the early Muslim community remain foundational to Islamic history and continue to inspire Muslims worldwide.'}
                          </p>
                          <div className="mt-3 md:mt-4 flex items-center gap-1 md:gap-2 text-xs md:text-sm text-[#8b6914]">
                            <FaStar size={12} />
                            <span>One of the Ten Promised Paradise</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-lg md:text-xl font-bold text-[#2c2c2c] mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
                          <span className="w-1.5 h-4 md:w-2 md:h-5 lg:w-2 lg:h-6 bg-[#2c5282] rounded-full"></span>
                          Historical Context
                        </h4>
                        <div className="bg-white rounded-lg md:rounded-xl lg:rounded-2xl p-4 md:p-6 border border-[#e8e0cf]">
                          <div className="space-y-3 md:space-y-4">
                            <div className="flex items-center gap-2 md:gap-3">
                              <div className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-[#f8f6f0] rounded-lg flex items-center justify-center text-[#6e6e6e] border border-[#e8e0cf]">
                                <FaUser size={12} />
                              </div>
                              <div>
                                <div className="text-xs text-[#6e6e6e]">Tribe/Clan</div>
                                <div className="font-medium text-[#2c2c2c] text-sm md:text-base">{selectedPerson.tribe}</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 md:gap-3">
                              <div className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-[#f8f6f0] rounded-lg flex items-center justify-center text-[#6e6e6e] border border-[#e8e0cf]">
                                <FaCalendarAlt size={12} />
                              </div>
                              <div>
                                <div className="text-xs text-[#6e6e6e]">Birth</div>
                                <div className="font-medium text-[#2c2c2c] text-sm md:text-base">{selectedPerson.birth}</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 md:gap-3">
                              <div className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-[#f8f6f0] rounded-lg flex items-center justify-center text-[#6e6e6e] border border-[#e8e0cf]">
                                <MdMilitaryTech size={14} />
                              </div>
                              <div>
                                <div className="text-xs text-[#6e6e6e]">Status</div>
                                <div className="font-medium text-[#2c2c2c] text-sm md:text-base">
                                  {selectedPerson.id === 'muhammad' ? 'Final Prophet' : 'Companion'}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default People;