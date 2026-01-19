import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Basics from "./pages/Basics";
import Surahs from "./pages/Surahs";
import People from "./pages/People";
import Hadiths from "./pages/Hadiths";
import { FaHome, FaUsers, FaBook, FaGithub, FaTwitter } from "react-icons/fa";
import { MdInfo, MdMenuBook } from "react-icons/md";

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>("home");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        setCurrentPath(hash);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigate = (path: string) => {
    window.location.hash = path;
    setCurrentPath(path);
  };

  const renderPage = () => {
    switch (currentPath) {
      case "home":
        return <Home onNavigate={navigate} />;
      case "basics":
        return <Basics />;
      case "surahs":
        return <Surahs />;
      case "people":
        return <People />;
      case "hadith":
        return <Hadiths />;
      default:
        return <Home onNavigate={navigate} />;
    }
  };

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const pageTransition = {
    type: "tween",
    ease: "easeInOut",
    duration: 0.4,
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f6f0] text-[#1a1a1a] text-sm md:text-base">
      <Navbar currentPath={currentPath} onNavigate={navigate} />

      <main className="flex-grow relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPath}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="bg-white border-t border-[#e8e0cf] mt-12 md:mt-16 lg:mt-20 w-full">
        <div className="mx-auto px-4 py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
            {/* Brand Section */}
            <div className="md:col-span-2 flex flex-col md:flex-row items-start gap-6 md:gap-8">
              <div
                className="flex items-center cursor-pointer group"
                onClick={() => navigate("home")}
              >
                <div className="flex items-center justify-center">
                  <img
                    src="/logo.png"
                    alt="Noor Academy Logo"
                    className="h-32 md:h-40 lg:h-48 w-auto object-contain"
                  />
                </div>
              </div>

              <div className="flex-1">
                <div className="mb-4 md:mb-6">
                  <h3 className="text-lg md:text-xl font-bold text-[#2c2c2c] mb-2">
                    Our Mission
                  </h3>
                  <p className="text-[#4a4a4a] text-sm md:text-base leading-relaxed">
                    Providing authentic, verified Islamic education to seekers
                    of knowledge worldwide. Every resource is carefully curated
                    from trusted sources.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <h4 className="text-[#6e6e6e] text-sm font-medium">
                    Follow us:
                  </h4>
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f5f3ee] to-[#ede8d8] hover:from-[#c9a961]/10 hover:to-[#8b6914]/10 flex items-center justify-center text-[#4a4a4a] hover:text-[#c9a961] transition-all hover:scale-110 border border-[#e8e0cf]"
                      aria-label="GitHub"
                    >
                      <FaGithub size={20} />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f5f3ee] to-[#ede8d8] hover:from-[#c9a961]/10 hover:to-[#8b6914]/10 flex items-center justify-center text-[#4a4a4a] hover:text-[#c9a961] transition-all hover:scale-110 border border-[#e8e0cf]"
                      aria-label="Twitter"
                    >
                      <FaTwitter size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-[#2c2c2c] font-bold mb-3 md:mb-4 flex items-center gap-2 text-sm md:text-base">
                <span className="text-[#c9a961]">
                  <MdMenuBook size={14} />
                </span>
                Navigation
              </h3>
              <ul className="space-y-1 md:space-y-2">
                <li>
                  <button
                    onClick={() => navigate("home")}
                    className="text-[#4a4a4a] hover:text-[#c9a961] transition-colors text-xs md:text-sm flex items-center gap-1 md:gap-2"
                  >
                    <FaHome size={10} />
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("basics")}
                    className="text-[#4a4a4a] hover:text-[#c9a961] transition-colors text-xs md:text-sm flex items-center gap-1 md:gap-2"
                  >
                    <MdInfo size={10} />
                    The Basics
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("surahs")}
                    className="text-[#4a4a4a] hover:text-[#c9a961] transition-colors text-xs md:text-sm flex items-center gap-1 md:gap-2"
                  >
                    <MdMenuBook size={10} />
                    Holy Qur'an
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("people")}
                    className="text-[#4a4a4a] hover:text-[#c9a961] transition-colors text-xs md:text-sm flex items-center gap-1 md:gap-2"
                  >
                    <FaUsers size={10} />
                    Companions
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("hadith")}
                    className="text-[#4a4a4a] hover:text-[#c9a961] transition-colors text-xs md:text-sm flex items-center gap-1 md:gap-2"
                  >
                    <FaBook size={10} />
                    Hadith
                  </button>
                </li>
              </ul>
            </div>

            {/* About */}
            <div>
              <h3 className="text-[#2c2c2c] font-bold mb-3 md:mb-4 text-sm md:text-base">
                About
              </h3>
              <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-[#4a4a4a]">
                <li className="hover:text-[#c9a961] transition-colors cursor-pointer">
                  Our Mission
                </li>
                <li className="hover:text-[#c9a961] transition-colors cursor-pointer">
                  Content Sources
                </li>
                <li className="hover:text-[#c9a961] transition-colors cursor-pointer">
                  Contact Us
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 md:pt-8 border-t border-[#e8e0cf] text-center">
            <p className="text-xs text-[#6e6e6e]">
              &copy; {new Date().getFullYear()} Noor Academy. All content is
              authentic and verified.
              <span className="mx-1 md:mx-2">•</span>
              May Allah accept our efforts.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
