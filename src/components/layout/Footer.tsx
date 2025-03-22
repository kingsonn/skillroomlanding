'use client';

import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      className="w-full bg-blue-600/10 backdrop-blur-sm border-t border-white/10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
    >
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-blue-100/80 text-sm">
            © {new Date().getFullYear()} UpLeveling Labs. All rights reserved.
          </p>
          <p className="text-blue-100/80 text-sm">
            For queries: <a href="mailto:player0@uplevelinglabs.com" className="text-yellow-300 hover:text-yellow-400 transition-colors">player0@uplevelinglabs.com</a>
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
