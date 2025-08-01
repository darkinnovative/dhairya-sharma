import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import CaseStudies from '../components/CaseStudies';
import Footer from '../components/Footer';
import { ThemeProvider } from '../contexts/ThemeContext';

const CaseStudiesPage: React.FC = () => {
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
    
    // Clean up
    return () => sessionStorage.removeItem('transitionDirection');
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black dark:from-black dark:via-gray-900 dark:to-slate-900 relative transition-colors duration-300">
        {/* Tech Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 255, 255, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <motion.main
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.05 }}
          className="pt-20 relative z-10"
        >
          <CaseStudies />
        </motion.main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default CaseStudiesPage;
