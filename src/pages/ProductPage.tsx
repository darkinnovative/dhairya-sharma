import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Product from '../components/Product';
import Footer from '../components/Footer';
import { ThemeProvider } from '../contexts/ThemeContext';

const ProductPage: React.FC = () => {
  useEffect(() => {
    // Get transition direction from sessionStorage
    const direction = sessionStorage.getItem('transitionDirection') || 'forward';
    const startPosition = direction === 'forward' ? '100%' : '-100%';
    
    // Page entrance animation from appropriate direction
    document.body.style.transform = `translateX(${startPosition})`;
    document.body.style.transition = 'none';
    
    setTimeout(() => {
      document.body.style.transition = 'transform 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      document.body.style.transform = 'translateX(0)';
    }, 30);

    // Cleanup on unmount
    return () => {
      document.body.style.transform = '';
      document.body.style.transition = '';
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black dark:from-black dark:via-gray-900 dark:to-slate-900 relative transition-colors duration-300 overflow-x-hidden">
        {/* Tech Pattern Background */}
        <div className="absolute inset-0 opacity-3 sm:opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(147, 51, 234, 0.3) 1px, transparent 0)`,
            backgroundSize: '30px 30px sm:40px sm:40px'
          }}></div>
        </div>

        <motion.main 
          className="relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Product />
        </motion.main>

        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default ProductPage;
