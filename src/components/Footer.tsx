import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-cyan-500/20 py-4 sm:py-6 md:py-8 lg:py-10">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-base font-mono">
            <span className="flex items-center gap-1 sm:gap-2">
              <span className="text-cyan-400">//</span> Made with <FaHeart className="text-red-500 text-xs sm:text-sm md:text-base animate-pulse" />
            </span>
            <span>by <span className="text-cyan-400">&lt;Dhairya-Sharma.dev/&gt;</span></span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
