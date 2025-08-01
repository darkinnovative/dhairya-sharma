import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown, FaFileAlt, FaTimes, FaDownload } from 'react-icons/fa';

const Hero: React.FC = () => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  const [showResume, setShowResume] = useState(false);
  const navigate = useNavigate();

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCaseStudies = () => {
    navigate('/case-studies');
  };

  const scrollToContact = () => {
    navigate('/contact');
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black dark:from-black dark:via-gray-900 dark:to-slate-900 text-white relative pt-12 sm:pt-16 lg:pt-20 overflow-hidden">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 opacity-5 sm:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '30px 30px sm:50px sm:50px'
        }}></div>
      </div>
      
      {/* Animated Tech Elements - Responsive positioning */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-16 sm:top-20 left-4 sm:left-10 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-32 sm:top-40 right-8 sm:right-20 w-1 h-1 bg-green-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 sm:bottom-40 left-8 sm:left-20 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-16 sm:bottom-20 right-4 sm:right-10 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full animate-pulse"></div>
      </div>
      
      {/* Hero Content */}
      <div className="min-h-screen flex items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            className="bg-gradient-to-r from-gray-900/50 via-black/30 to-gray-900/50 backdrop-blur-xl rounded-xl sm:rounded-2xl shadow-2xl dark:shadow-cyan-500/10 p-4 sm:p-6 md:p-8 lg:p-12 border border-cyan-500/20 dark:border-cyan-400/30"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
              {/* Content Side */}
              <div className="text-center lg:text-left order-2 lg:order-1">
                <motion.h1 
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
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
                  className="text-base sm:text-lg md:text-xl font-light mb-4 sm:mb-6 opacity-90"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Senior Product Manager & Strategy Leader
                </motion.p>

                <motion.p 
                  className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 opacity-80 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  I drive product strategy and innovation, transforming user needs into successful digital products.
                  Passionate about data-driven decisions and creating exceptional user experiences.
                </motion.p>

                <motion.div 
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <motion.button 
                    className="bg-white text-blue-600 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 text-sm sm:text-base"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={scrollToCaseStudies}
                  >
                    View Case Studies
                  </motion.button>
                  <motion.button 
                    className="border-2 border-white text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 text-sm sm:text-base"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={scrollToContact}
                  >
                    Let's Connect
                  </motion.button>
                  <motion.button 
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 text-sm sm:text-base flex items-center gap-2"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowResume(true)}
                  >
                    <FaFileAlt />
                    Resume
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
                    className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full flex items-center justify-center shadow-2xl overflow-hidden border-4 border-white/20 backdrop-blur-sm"
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ duration: 0.3 }}
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(236, 72, 153, 0.4)",
                        "0 0 0 20px rgba(236, 72, 153, 0)",
                        "0 0 0 0 rgba(236, 72, 153, 0)"
                      ]
                    }}
                    style={{
                      animationDuration: "3s",
                      animationIterationCount: "infinite"
                    }}
                  >
                    {!imageError ? (
                      <div className="relative w-full h-full">
                        {imageLoading && (
                          <div className="absolute inset-0 flex items-center justify-center text-6xl md:text-7xl lg:text-8xl font-bold text-white animate-pulse">
                            DS
                          </div>
                        )}
                        <img 
                          src="/file.jpeg" 
                          alt="Dhairya Sharma" 
                          className={`w-full h-full object-cover rounded-full transition-opacity duration-500 ${
                            imageLoading ? 'opacity-0' : 'opacity-100'
                          }`}
                          onLoad={() => setImageLoading(false)}
                          onError={() => setImageError(true)}
                        />
                      </div>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-6xl md:text-7xl lg:text-8xl font-bold text-white">
                        DS
                      </div>
                    )}
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

      {/* Resume Modal */}
      <AnimatePresence>
        {showResume && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowResume(false)}
          >
            <motion.div
              className="bg-gradient-to-br from-gray-900 via-slate-900 to-black rounded-2xl shadow-2xl border border-cyan-500/20 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-700">
                <h2 className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-600 bg-clip-text font-mono">
                  Resume
                </h2>
                <div className="flex gap-3">
                  <motion.button
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      // Download functionality
                      const link = document.createElement('a');
                      link.href = '/resume.pdf'; // You'll need to add this file to your public folder
                      link.download = 'Dhairya_Sharma_Resume.pdf';
                      link.click();
                    }}
                  >
                    <FaDownload />
                    Download
                  </motion.button>
                  <motion.button
                    className="text-gray-400 hover:text-white transition-colors p-2"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setShowResume(false)}
                  >
                    <FaTimes className="text-xl" />
                  </motion.button>
                </div>
              </div>

              {/* Resume Content */}
              <div className="p-6 text-white space-y-8">
                {/* Header */}
                <div className="text-center border-b border-gray-700 pb-6">
                  <h1 className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-600 bg-clip-text mb-2">
                    Dhairya Sharma
                  </h1>
                  <p className="text-xl text-gray-300 mb-4">Product Manager & Full-Stack Developer</p>
                  <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                    <span>📧 dhairya.sharma@email.com</span>
                    <span>📱 +1 (555) 123-4567</span>
                    <span>🌐 linkedin.com/in/dhairya-sharma</span>
                    <span>💻 github.com/dhairya-sharma</span>
                  </div>
                </div>

                {/* Professional Summary */}
                <div>
                  <h2 className="text-xl font-bold text-cyan-400 mb-3 border-l-4 border-cyan-500 pl-4">
                    Professional Summary
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    Strategic Product Manager and Full-Stack Developer with 5+ years of experience building scalable web applications 
                    and leading cross-functional teams. Proven track record of transforming complex business requirements into 
                    user-centric solutions that drive growth and engagement. Expertise in React, Node.js, cloud architecture, 
                    and agile product development methodologies.
                  </p>
                </div>

                {/* Experience */}
                <div>
                  <h2 className="text-xl font-bold text-cyan-400 mb-4 border-l-4 border-cyan-500 pl-4">
                    Professional Experience
                  </h2>
                  <div className="space-y-6">
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                        <h3 className="text-lg font-semibold text-white">Senior Product Manager</h3>
                        <span className="text-cyan-400 font-mono text-sm">2022 - Present</span>
                      </div>
                      <p className="text-gray-400 mb-3">TechCorp Solutions • San Francisco, CA</p>
                      <ul className="text-gray-300 space-y-1 text-sm">
                        <li>• Led product strategy for e-commerce platform serving 10M+ users</li>
                        <li>• Increased user engagement by 45% through data-driven feature development</li>
                        <li>• Managed cross-functional team of 12 engineers and designers</li>
                        <li>• Reduced customer acquisition cost by 30% through optimized user onboarding</li>
                      </ul>
                    </div>

                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                        <h3 className="text-lg font-semibold text-white">Full-Stack Developer</h3>
                        <span className="text-cyan-400 font-mono text-sm">2020 - 2022</span>
                      </div>
                      <p className="text-gray-400 mb-3">InnovateLabs • Remote</p>
                      <ul className="text-gray-300 space-y-1 text-sm">
                        <li>• Developed and maintained React-based web applications with Node.js backends</li>
                        <li>• Implemented microservices architecture reducing system latency by 60%</li>
                        <li>• Built real-time collaboration tools using WebSocket and Redis</li>
                        <li>• Achieved 99.9% uptime through robust testing and monitoring practices</li>
                      </ul>
                    </div>

                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                        <h3 className="text-lg font-semibold text-white">Software Engineer</h3>
                        <span className="text-cyan-400 font-mono text-sm">2019 - 2020</span>
                      </div>
                      <p className="text-gray-400 mb-3">StartupXYZ • Austin, TX</p>
                      <ul className="text-gray-300 space-y-1 text-sm">
                        <li>• Built mobile-first web applications using React and TypeScript</li>
                        <li>• Integrated third-party APIs and payment processing systems</li>
                        <li>• Optimized application performance resulting in 40% faster load times</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h2 className="text-xl font-bold text-cyan-400 mb-4 border-l-4 border-cyan-500 pl-4">
                    Technical Skills
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                      <h4 className="font-semibold text-white mb-3">Frontend Development</h4>
                      <div className="flex flex-wrap gap-2">
                        {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion'].map((skill) => (
                          <span key={skill} className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm border border-cyan-500/30">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                      <h4 className="font-semibold text-white mb-3">Backend Development</h4>
                      <div className="flex flex-wrap gap-2">
                        {['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Redis'].map((skill) => (
                          <span key={skill} className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm border border-cyan-500/30">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                      <h4 className="font-semibold text-white mb-3">Cloud & DevOps</h4>
                      <div className="flex flex-wrap gap-2">
                        {['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'].map((skill) => (
                          <span key={skill} className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm border border-cyan-500/30">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                      <h4 className="font-semibold text-white mb-3">Product Management</h4>
                      <div className="flex flex-wrap gap-2">
                        {['Agile', 'Scrum', 'Product Strategy', 'User Research', 'Analytics'].map((skill) => (
                          <span key={skill} className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm border border-cyan-500/30">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div>
                  <h2 className="text-xl font-bold text-cyan-400 mb-4 border-l-4 border-cyan-500 pl-4">
                    Education
                  </h2>
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                      <h3 className="text-lg font-semibold text-white">Master of Science in Computer Science</h3>
                      <span className="text-cyan-400 font-mono text-sm">2017 - 2019</span>
                    </div>
                    <p className="text-gray-400 mb-2">Stanford University • Stanford, CA</p>
                    <p className="text-gray-300 text-sm">Specialization: Software Engineering & Human-Computer Interaction</p>
                  </div>
                </div>

                {/* Certifications */}
                <div>
                  <h2 className="text-xl font-bold text-cyan-400 mb-4 border-l-4 border-cyan-500 pl-4">
                    Certifications
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                      <h4 className="font-semibold text-white">AWS Certified Solutions Architect</h4>
                      <p className="text-cyan-400 text-sm">Amazon Web Services • 2023</p>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                      <h4 className="font-semibold text-white">Certified Scrum Product Owner</h4>
                      <p className="text-cyan-400 text-sm">Scrum Alliance • 2022</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
