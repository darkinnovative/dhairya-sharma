import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown, FaBars, FaTimes } from 'react-icons/fa';

const Hero: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#projects' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Insights', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white relative">
      {/* Header Navigation */}
      <motion.header 
        className="absolute top-0 left-0 right-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <motion.div 
              className="text-2xl font-bold text-white"
              whileHover={{ scale: 1.05 }}
            >
              Dhairya Sharma
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-white/90 hover:text-white font-medium transition-colors duration-200"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.nav 
              className="md:hidden pb-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left py-2 text-white/90 hover:text-white font-medium"
                >
                  {item.name}
                </button>
              ))}
            </motion.nav>
          )}
        </div>
      </motion.header>

      {/* Hero Content */}
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-8 lg:p-12 border border-white/20"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content Side */}
              <div className="text-center lg:text-left">
                <motion.h1 
                  className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Hi, I'm{' '}
                  <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
                    Dhairya Sharma
                  </span>
                </motion.h1>

                <motion.p 
                  className="text-lg md:text-xl font-light mb-6 opacity-90"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Senior Product Manager & Strategy Leader
                </motion.p>

                <motion.p 
                  className="text-base md:text-lg mb-8 opacity-80 leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  I drive product strategy and innovation, transforming user needs into successful digital products.
                  Passionate about data-driven decisions and creating exceptional user experiences.
                </motion.p>

                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <motion.button 
                    className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => document.querySelector('#case-studies')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    View Case Studies
                  </motion.button>
                  <motion.button 
                    className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Let's Connect
                  </motion.button>
                </motion.div>

                <motion.div 
                  className="flex justify-center lg:justify-start space-x-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  {[
                    { icon: FaGithub, href: 'https://github.com' },
                    { icon: FaLinkedin, href: 'https://linkedin.com' },
                    { icon: FaEnvelope, href: 'mailto:your.email@example.com' },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <social.icon />
                    </motion.a>
                  ))}
                </motion.div>
              </div>

              {/* Image Side */}
              <motion.div
                className="flex justify-center lg:justify-end"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="relative">
                  <motion.div 
                    className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full flex items-center justify-center text-6xl md:text-7xl lg:text-8xl font-bold text-white shadow-2xl"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    DS
                  </motion.div>
                  {/* Decorative elements */}
                  <motion.div 
                    className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full"
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  />
                  <motion.div 
                    className="absolute -bottom-6 -left-6 w-6 h-6 bg-green-400 rounded-full"
                    animate={{ 
                      y: [0, 10, 0],
                      x: [0, 5, 0]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  />
                  <motion.div 
                    className="absolute top-1/2 -left-8 w-4 h-4 bg-blue-400 rounded-full"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              y: [0, 10, 0],
            }}
            transition={{
              opacity: { duration: 1, delay: 1.5 },
              y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
            onClick={scrollToNext}
          >
            <FaArrowDown className="text-2xl opacity-70 hover:opacity-100 transition-opacity" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
