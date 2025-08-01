import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaProjectDiagram, FaBook, FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '#home', icon: FaHome, type: 'scroll', order: 0 },
    { name: 'About', href: '#about', icon: FaUser, type: 'scroll', order: 0 },
    { name: 'Projects', href: '/projects', icon: FaBriefcase, type: 'page', order: 1 },
    { name: 'Case Studies', href: '/case-studies', icon: FaProjectDiagram, type: 'page', order: 2 },
    { name: 'Blog', href: '/blog', icon: FaBook, type: 'page', order: 3 },
    { name: 'Contact', href: '/contact', icon: FaEnvelope, type: 'page', order: 4 },
  ];

  // Get current page order for directional transitions
  const getCurrentPageOrder = () => {
    if (location.pathname === '/') return 0;
    const currentItem = navItems.find(item => item.href === location.pathname);
    return currentItem ? currentItem.order : 0;
  };

  // Navigation handler for both scroll and page navigation
  const handleNavigation = (item: any) => {
    if (item.type === 'scroll') {
      // Check if we're on the home page
      if (location.pathname !== '/') {
        // If not on home page, navigate to home first
        navigate('/');
        // Wait for navigation to complete, then scroll
        setTimeout(() => {
          const element = document.querySelector(item.href);
          if (element) {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }
        }, 100);
      } else {
        // Already on home page, just scroll
        const element = document.querySelector(item.href);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    } else if (item.type === 'page') {
      // Determine transition direction based on page order
      const currentOrder = getCurrentPageOrder();
      const targetOrder = item.order;
      const isForward = targetOrder > currentOrder;
      
      // Set transition direction
      const exitDirection = isForward ? '-100%' : '100%';
      
      // Page transition with directional logic
      document.body.style.transition = 'transform 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      document.body.style.transform = `translateX(${exitDirection})`;
      
      setTimeout(() => {
        // Store navigation direction for entrance animation
        sessionStorage.setItem('transitionDirection', isForward ? 'forward' : 'backward');
        navigate(item.href);
        // Reset transform after navigation
        setTimeout(() => {
          document.body.style.transform = 'translateX(0)';
        }, 30);
      }, 250);
    }
  };

  // Determine if navigation item is active
  const isActiveNavItem = (item: any) => {
    if (item.type === 'scroll') {
      // Only highlight scroll items when we're on the home page
      return location.pathname === '/' && activeSection === item.href.substring(1);
    } else {
      return location.pathname === item.href;
    }
  };

  // Track active section on scroll (only for scroll-type nav items)
  useEffect(() => {
    const handleScroll = () => {
      const scrollItems = navItems.filter(item => item.type === 'scroll');
      const sections = scrollItems.map(item => ({
        id: item.href.substring(1),
        element: document.querySelector(item.href)
      }));

      const scrollPosition = window.scrollY + 100;

      // Update scroll position
      setScrollY(window.scrollY);

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const offsetTop = (section.element as HTMLElement).offsetTop;
          if (scrollPosition >= offsetTop) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    // Ensure we're listening to scroll events
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Call once to set initial state
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  return (
    <>
      {/* Mobile Top Header */}
      <motion.header 
        className="sticky top-0 left-0 right-0 z-[90] nav:hidden"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-gray-900/95 dark:bg-black/95 backdrop-blur-xl border-b border-cyan-500/20 px-3 sm:px-4 py-2.5 sm:py-3">
          <div className="flex items-center justify-center">
            {/* Mobile Logo */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-base sm:text-lg font-bold text-cyan-400 dark:text-cyan-300 font-mono tracking-wider">&lt;Dhairya.dev/&gt;</span>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Desktop Navigation */}
      <motion.header 
        className="sticky top-6 left-0 right-0 z-[100] px-6 hidden nav:block"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-center max-w-7xl mx-auto relative">
          {/* Name/Logo - Left (absolute positioned) */}
          <motion.div 
            className="absolute left-0 px-4 py-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-sm font-bold text-cyan-400 dark:text-cyan-300 font-mono tracking-wider">&lt;Dhairya.dev/&gt;</span>
          </motion.div>
          
          {/* Navigation - Center */}
          <motion.nav 
            className="flex items-center bg-gray-900/90 dark:bg-black/90 backdrop-blur-xl shadow-2xl rounded-full border border-cyan-500/30 dark:border-cyan-400/40 px-3 py-1 gap-1 shadow-cyan-500/20"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {navItems.map((item) => (
            <motion.button
              key={item.name}
              onClick={() => handleNavigation(item)}
              className={`flex items-center justify-center px-4 py-1.5 rounded-full transition-all duration-200 group relative ${
                isActiveNavItem(item)
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30' 
                  : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 dark:text-gray-400 dark:hover:text-cyan-300 dark:hover:bg-gray-900/50'
              }`}
              whileHover={{ y: -1 }}
              whileTap={{ y: 0 }}
            >
              <item.icon className="text-sm mr-1.5" />
              <span className="text-xs font-medium">{item.name}</span>
            </motion.button>
          ))}
          
          {/* Divider */}
          <div className="w-px h-5 bg-cyan-500/30 dark:bg-cyan-400/40 mx-1" />
          
          {/* Theme toggle - Desktop Only */}
          <motion.button
            onClick={toggleTheme}
            className="flex items-center justify-center px-3 py-1.5 rounded-full text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 dark:text-gray-400 dark:hover:text-cyan-300 dark:hover:bg-gray-900/50 transition-all duration-200"
            whileHover={{ y: -1 }}
            whileTap={{ y: 0 }}
            title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? (
              <FaSun className="w-4 h-4" />
            ) : (
              <FaMoon className="w-4 h-4" />
            )}
          </motion.button>
        </motion.nav>
        </div>
      </motion.header>

      {/* Mobile Floating Navigation - Moves with Content */}
      <motion.div 
        className="fixed right-2 sm:right-3 md:right-4 z-[100] nav:hidden"
        style={{ 
          top: `${Math.max(12, scrollY * 0.1 + 12)}px`
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {/* Navigation Items - Toggleable */}
        <motion.div
          className="flex flex-col-reverse space-y-reverse space-y-1.5 sm:space-y-2 mb-2 sm:mb-3"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ 
            opacity: isMobileMenuOpen ? 1 : 0,
            scale: isMobileMenuOpen ? 1 : 0.8,
            y: isMobileMenuOpen ? 0 : 20,
            pointerEvents: isMobileMenuOpen ? 'auto' : 'none'
          }}
          transition={{ duration: 0.3 }}
        >
          {navItems.map((item, index) => (
            <motion.button
              key={item.name}
              onClick={() => handleNavigation(item)}
              className={`relative w-8 h-8 sm:w-10 sm:h-10 rounded-full shadow-md flex items-center justify-center transition-all duration-200 group backdrop-blur-xl ${
                isActiveNavItem(item)
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-cyan-500/40 border border-cyan-400/30'
                  : 'bg-gradient-to-r from-gray-900/90 to-black/90 text-gray-300 border border-cyan-500/20 shadow-gray-900/40 hover:border-cyan-400/40 hover:text-cyan-400 hover:scale-105'
              }`}
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.3, delay: (navItems.length - index) * 0.1 + 0.6 }}
              whileHover={{ scale: 1.05, x: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              {/* Icon with circular ring background */}
              <div className="relative flex items-center justify-center">
                {/* Outer ring */}
                <motion.div
                  className={`absolute w-6 h-6 sm:w-8 sm:h-8 rounded-full ${
                    isActiveNavItem(item)
                      ? 'bg-white/10 border border-white/20'
                      : 'bg-cyan-500/10 border border-cyan-500/20'
                  }`}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.7, 0.3]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Inner ring */}
                <motion.div
                  className={`absolute w-4 h-4 sm:w-6 sm:h-6 rounded-full ${
                    isActiveNavItem(item)
                      ? 'bg-white/5 border border-white/15'
                      : 'bg-cyan-400/10 border border-cyan-400/20'
                  }`}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.5, 0.2]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
                
                {/* Icon */}
                <item.icon className="text-xs sm:text-sm relative z-10" />
              </div>
              
              {/* Tooltip */}
              <motion.div
                className="absolute right-9 sm:right-12 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-gray-900/95 to-black/95 backdrop-blur-xl text-white px-2 py-1 rounded-md text-xs font-mono border border-cyan-500/20 whitespace-nowrap shadow-md opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 z-10"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 0, x: 0 }}
              >
                {item.name}
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-3 border-transparent border-l-gray-900/95"></div>
              </motion.div>
            </motion.button>
          ))}
          
          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            className="relative w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-gray-900/90 to-black/90 backdrop-blur-xl rounded-full shadow-md flex items-center justify-center text-gray-300 border border-cyan-500/20 shadow-gray-900/40 transition-all duration-200 hover:border-cyan-400/40 hover:text-cyan-400 hover:scale-105 group"
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.3, delay: (navItems.length + 1) * 0.1 + 0.6 }}
            whileHover={{ scale: 1.05, x: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Icon with circular ring background */}
            <div className="relative flex items-center justify-center">
              {/* Outer ring */}
              <motion.div
                className="absolute w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-amber-500/10 border border-amber-500/20"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Inner ring */}
              <motion.div
                className="absolute w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-amber-400/10 border border-amber-400/20"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.5, 0.2]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
              
              {/* Icon */}
              <div className="relative z-10">
                {isDarkMode ? (
                  <FaSun className="text-xs sm:text-sm" />
                ) : (
                  <FaMoon className="text-xs sm:text-sm" />
                )}
              </div>
            </div>
            
            {/* Tooltip */}
            <motion.div
              className="absolute right-9 sm:right-12 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-gray-900/95 to-black/95 backdrop-blur-xl text-white px-2 py-1 rounded-md text-xs font-mono border border-cyan-500/20 whitespace-nowrap shadow-md opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 z-10"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 0, x: 0 }}
            >
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-3 border-transparent border-l-gray-900/95"></div>
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Toggle Button - Always Visible */}
        <motion.button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-500/90 to-blue-500/90 backdrop-blur-xl rounded-full shadow-lg flex items-center justify-center text-white border border-cyan-400/50 transition-all duration-200 hover:scale-105 mt-2 sm:mt-3"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ rotate: isMobileMenuOpen ? 45 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isMobileMenuOpen ? (
              <div className="w-3 h-3 sm:w-4 sm:h-4 relative">
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white transform -translate-y-1/2 rotate-45"></div>
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white transform -translate-y-1/2 -rotate-45"></div>
              </div>
            ) : (
              <div className="w-3 h-3 sm:w-4 sm:h-4 relative">
                <div className="absolute top-0.5 left-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full transform -translate-x-1/2"></div>
                <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0.5 left-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full transform -translate-x-1/2"></div>
              </div>
            )}
          </motion.div>
        </motion.button>
      </motion.div>
    </>
  );
};

export default Header;
