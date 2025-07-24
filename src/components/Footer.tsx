import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 sm:py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base">
            <span className="flex items-center gap-1 sm:gap-2">
              Made with <FaHeart className="text-red-500 text-sm sm:text-base" />
            </span>
            <span>by Dhairya Sharma</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
