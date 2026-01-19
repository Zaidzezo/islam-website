import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaUsers, FaBook, FaBars, FaTimes } from 'react-icons/fa';
import { MdInfo, MdMenuBook } from 'react-icons/md';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', path: 'home', icon: FaHome },
    { name: 'The Basics', path: 'basics', icon: MdInfo },
    { name: 'Holy Qur\'an', path: 'surahs', icon: MdMenuBook },
    { name: 'The Companions', path: 'people', icon: FaUsers },
    { name: 'Sahih Hadith', path: 'hadith', icon: FaBook },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-[#e8e0cf] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
<motion.div 
  className="flex items-center cursor-pointer group"
  onClick={() => onNavigate('home')}
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
>
  <motion.div 
    className="flex items-center gap-2"  /* Reduced from gap-3 */
    whileHover={{ rotate: [0, -5, 5, 0] }}
    transition={{ duration: 0.4 }}
  >
    <a href="#home" className="flex items-center gap-2">
      <img 
        src="/logo.png" 
        alt="Noor Academy Logo" 
        className="h-28 md:h-32 w-auto object-contain" 
      />
      <div className="flex flex-col">
        <span className="text-base md:text-lg font-bold text-[#2c2c2c] leading-tight">
          Noor Academy
        </span>
      </div>
    </a>
  </motion.div>
</motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {links.map((link) => {
              const Icon = link.icon;
              const isActive = currentPath === link.path;
              return (
                <motion.button
                  key={link.path}
                  onClick={() => onNavigate(link.path)}
                  className={`relative px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                    isActive 
                      ? 'text-[#2c2c2c]' 
                      : 'text-[#4a4a4a] hover:text-[#2c2c2c]'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 bg-[#c9a961]/10 rounded-xl border border-[#c9a961]/30"
                      layoutId="activeTab"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className={`w-4 h-4 flex items-center ${isActive ? 'text-[#c9a961]' : ''}`}>
                    <Icon size={16} />
                  </span>
                  <span className="relative z-10">{link.name}</span>
                  {isActive && (
                      <motion.div
                        className="absolute -bottom-1 left-1/2 w-1 h-1 bg-[#c9a961] rounded-full"
                      initial={false}
                      layoutId="activeIndicator"
                      style={{ x: '-50%' }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2.5 rounded-xl text-[#4a4a4a] hover:text-[#2c2c2c] hover:bg-[#f5f3ee] focus:outline-none transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              <span className="h-6 w-6 flex items-center">
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-[#e8e0cf] overflow-hidden"
          >
            <div className="px-4 py-3 space-y-1">
              {links.map((link, index) => {
                const Icon = link.icon;
                const isActive = currentPath === link.path;
                return (
                  <motion.button
                    key={link.path}
                    onClick={() => {
                      onNavigate(link.path);
                      setIsOpen(false);
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-semibold transition-all ${
                      isActive 
                        ? 'bg-[#c9a961]/10 text-[#2c2c2c] border border-[#c9a961]/30' 
                        : 'text-[#4a4a4a] hover:bg-[#f5f3ee] hover:text-[#2c2c2c]'
                    }`}
                  >
                    <span className={`w-5 h-5 flex items-center ${isActive ? 'text-[#c9a961]' : ''}`}>
                      <Icon size={20} />
                    </span>
                    {link.name}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;