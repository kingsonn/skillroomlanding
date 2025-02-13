'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    // First scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    // Find the email input and trigger the highlight
    const emailInput = document.querySelector('input[type="email"]') as HTMLInputElement;
    if (emailInput) {
      // Focus the input after scrolling
      setTimeout(() => {
        emailInput.focus();
      }, 800); // Wait for scroll to complete
    }
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-blue-600/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-4 py-3 lg:py-4 mt-2 sm:mt-0">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-1.5 lg:gap-2 group"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div className="relative w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 transition-all duration-300">
              <Image src="/logo.svg" alt="UpLeveling Logo" fill className="object-contain" priority />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg sm:text-xl lg:text-2xl font-oxanium tracking-wider bg-gradient-to-r from-[#edc44d] via-yellow-300 to-[#edc44d] bg-clip-text text-transparent">
                UpLeveling
              </span>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* XP Points */}
            <motion.div 
              className="hidden sm:flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-yellow-300 text-sm">✨</span>
              <span className="text-white font-medium font-oxanium tracking-wider text-sm">2,450 XP</span>
            </motion.div>

            {/* Get Started Button */}
            <motion.button
              onClick={scrollToTop}
              className="bg-gradient-to-r from-yellow-300 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 text-blue-900 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl font-oxanium tracking-wide text-xs sm:text-sm whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              JOIN WAITLIST
            </motion.button>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
