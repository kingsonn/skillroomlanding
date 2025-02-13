'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 20);
    });
  }

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-blue-600/80 backdrop-blur-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div className="relative w-12 h-12 transition-all duration-300">
              <Image src="/logo.svg" alt="UpLeveling Logo" fill className="object-contain" priority />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-2xl font-oxanium tracking-wider bg-gradient-to-r from-[#edc44d] via-yellow-300 to-[#edc44d] bg-clip-text text-transparent">UpLeveling</span>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
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
              className="bg-yellow-300 hover:bg-yellow-200 text-blue-900 px-4 py-2 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl font-oxanium tracking-wide text-sm"
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
