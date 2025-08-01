import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCalendar, FaClock, FaArrowRight, FaSearch, FaTimes, FaCode, FaMobile, FaDesktop, FaServer, FaDatabase } from 'react-icons/fa';

interface Project {
  id: number;
  title: string;
  excerpt: string;
  description: string;
  category: 'Frontend' | 'Backend' | 'Mobile' | 'Full Stack' | 'Desktop';
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  featured: boolean;
  keyMetrics: {
    label: string;
    value: string;
  }[];
  completionDate: string;
  duration: string;
}

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform with Microservices",
      excerpt: "A scalable e-commerce platform built with React, Node.js, and MongoDB featuring microservices architecture, real-time notifications, and advanced analytics.",
      description: `
        <h3>Project Overview</h3>
        <p>Built a comprehensive e-commerce platform from the ground up using modern web technologies and microservices architecture. The platform handles thousands of concurrent users and processes millions of transactions.</p>
        
        <h3>Key Features</h3>
        <ul>
          <li>User authentication and authorization with JWT</li>
          <li>Real-time shopping cart with Redis caching</li>
          <li>Payment integration with Stripe and PayPal</li>
          <li>Order tracking and notification system</li>
          <li>Admin dashboard with analytics and reporting</li>
          <li>Responsive design for mobile and desktop</li>
        </ul>
        
        <h3>Technical Implementation</h3>
        <p>The backend consists of multiple microservices including user management, product catalog, order processing, and payment handling. Used Docker for containerization and Kubernetes for orchestration.</p>
        
        <h3>Challenges & Solutions</h3>
        <p>Implemented complex state management using Redux Toolkit, optimized database queries for performance, and ensured secure payment processing with PCI compliance.</p>
      `,
      category: 'Full Stack',
      technologies: ['React', 'Node.js', 'MongoDB', 'Redux', 'Stripe', 'Docker', 'Kubernetes'],
      github: 'https://github.com/username/ecommerce-platform',
      demo: 'https://ecommerce-demo.com',
      image: '/projects/ecommerce-platform.jpg',
      featured: true,
      keyMetrics: [
        { label: 'Users Handled', value: '10K+' },
        { label: 'Response Time', value: '<200ms' },
        { label: 'Uptime', value: '99.9%' },
        { label: 'Conversion Rate', value: '12%' }
      ],
      completionDate: '2024-01-15',
      duration: '4 months'
    },
    {
      id: 2,
      title: "Real-Time Collaboration App",
      excerpt: "A modern team collaboration platform with real-time messaging, file sharing, video calls, and project management tools built with React and Socket.io.",
      description: `
        <h3>Project Overview</h3>
        <p>Developed a comprehensive collaboration platform that enables teams to communicate, share files, and manage projects in real-time. The application supports unlimited users and integrates with popular productivity tools.</p>
        
        <h3>Core Features</h3>
        <ul>
          <li>Real-time messaging with typing indicators</li>
          <li>File sharing with drag-and-drop interface</li>
          <li>Video conferencing integration</li>
          <li>Kanban-style project boards</li>
          <li>Calendar integration and scheduling</li>
          <li>Mobile-responsive design</li>
        </ul>
        
        <h3>Technical Architecture</h3>
        <p>Built using React for the frontend with Material-UI for consistent design. Backend powered by Node.js with Socket.io for real-time communication and MongoDB for data persistence.</p>
        
        <h3>Performance Optimization</h3>
        <p>Implemented message pagination, file compression, and lazy loading to ensure smooth performance even with large teams and extensive message history.</p>
      `,
      category: 'Full Stack',
      technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'Material-UI', 'WebRTC'],
      github: 'https://github.com/username/collaboration-app',
      demo: 'https://collab-demo.com',
      image: '/projects/collaboration-app.jpg',
      featured: true,
      keyMetrics: [
        { label: 'Active Users', value: '5K+' },
        { label: 'Messages/Day', value: '50K+' },
        { label: 'File Transfers', value: '1TB+' },
        { label: 'User Rating', value: '4.8★' }
      ],
      completionDate: '2024-01-10',
      duration: '3 months'
    },
    {
      id: 3,
      title: "AI-Powered Analytics Dashboard",
      excerpt: "An intelligent analytics dashboard using machine learning for predictive insights, built with React, Python, and TensorFlow for data visualization and analysis.",
      description: `
        <h3>Project Overview</h3>
        <p>Created an advanced analytics dashboard that leverages machine learning algorithms to provide predictive insights and automated reporting for business intelligence.</p>
        
        <h3>Key Capabilities</h3>
        <ul>
          <li>Real-time data visualization with D3.js</li>
          <li>Predictive analytics using TensorFlow</li>
          <li>Automated report generation</li>
          <li>Custom dashboard creation</li>
          <li>Data export and sharing features</li>
          <li>Multi-source data integration</li>
        </ul>
        
        <h3>ML Implementation</h3>
        <p>Integrated TensorFlow models for time series forecasting, anomaly detection, and trend analysis. The Python backend processes large datasets and serves predictions via RESTful APIs.</p>
        
        <h3>Data Processing</h3>
        <p>Built ETL pipelines to handle data from multiple sources including databases, APIs, and file uploads. Implemented real-time data streaming with Apache Kafka.</p>
      `,
      category: 'Frontend',
      technologies: ['React', 'D3.js', 'Python', 'TensorFlow', 'PostgreSQL', 'Apache Kafka'],
      github: 'https://github.com/username/ai-dashboard',
      demo: 'https://ai-dashboard-demo.com',
      image: '/projects/ai-dashboard.jpg',
      featured: false,
      keyMetrics: [
        { label: 'Data Points', value: '1M+' },
        { label: 'Accuracy', value: '94%' },
        { label: 'Processing Speed', value: '5ms' },
        { label: 'Cost Savings', value: '40%' }
      ],
      completionDate: '2024-01-05',
      duration: '6 months'
    },
    {
      id: 4,
      title: "Mobile Fitness Tracking App",
      excerpt: "A comprehensive fitness tracking mobile application with workout planning, nutrition tracking, and social features built using React Native and Firebase.",
      description: `
        <h3>Project Overview</h3>
        <p>Developed a feature-rich mobile fitness application that helps users track workouts, monitor nutrition, and connect with a fitness community. Available on both iOS and Android platforms.</p>
        
        <h3>Main Features</h3>
        <ul>
          <li>Workout tracking with timer and progress monitoring</li>
          <li>Nutrition logging with barcode scanning</li>
          <li>Social features and community challenges</li>
          <li>Goal setting and achievement tracking</li>
          <li>Integration with health apps and wearables</li>
          <li>Offline mode for uninterrupted tracking</li>
        </ul>
        
        <h3>Technical Stack</h3>
        <p>Built with React Native for cross-platform compatibility, Firebase for real-time database and authentication, and integrated third-party APIs for nutrition data and exercise libraries.</p>
        
        <h3>User Experience</h3>
        <p>Focused on intuitive design with smooth animations, easy navigation, and accessibility features. Implemented push notifications and gamification elements to increase user engagement.</p>
      `,
      category: 'Mobile',
      technologies: ['React Native', 'Firebase', 'Redux', 'Expo', 'AsyncStorage'],
      github: 'https://github.com/username/fitness-app',
      demo: 'https://fitness-app-demo.com',
      image: '/projects/fitness-app.jpg',
      featured: false,
      keyMetrics: [
        { label: 'Downloads', value: '25K+' },
        { label: 'Daily Active Users', value: '3K+' },
        { label: 'App Store Rating', value: '4.7★' },
        { label: 'Retention Rate', value: '78%' }
      ],
      completionDate: '2023-12-20',
      duration: '5 months'
    }
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Mobile', 'Full Stack', 'Desktop'];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredProjects = filteredProjects.filter(project => project.featured);
  const regularProjects = filteredProjects.filter(project => !project.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Frontend': 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 border border-blue-500/30',
      'Backend': 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 border border-green-500/30',
      'Mobile': 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30',
      'Full Stack': 'bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-300 border border-orange-500/30',
      'Desktop': 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-300 border border-yellow-500/30'
    };
    return colors[category] || 'bg-gradient-to-r from-gray-500/20 to-gray-600/20 text-gray-300 border border-gray-500/30';
  };

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: React.ReactElement } = {
      'Frontend': <FaDesktop className="text-sm" />,
      'Backend': <FaServer className="text-sm" />,
      'Mobile': <FaMobile className="text-sm" />,
      'Full Stack': <FaDatabase className="text-sm" />,
      'Desktop': <FaDesktop className="text-sm" />
    };
    return icons[category] || <FaCode className="text-sm" />;
  };

  const renderProjectCard = (project: Project, index: number) => (
    <motion.div
      key={project.id}
      className="bg-gradient-to-r from-gray-900/80 via-black/60 to-gray-900/80 backdrop-blur-xl rounded-2xl shadow-2xl shadow-blue-500/10 overflow-hidden border border-blue-500/20 hover:border-blue-400/40 hover:shadow-blue-500/20 transition-all duration-500"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2,
        ease: "easeOut"
      }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -8, 
        scale: 1.02,
        transition: { duration: 0.4, ease: "easeInOut" }
      }}
    >
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <span className={`px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 font-mono ${getCategoryColor(project.category)}`}>
            {getCategoryIcon(project.category)}
            {project.category}
          </span>
          <div className="text-gray-400 text-sm font-mono">{project.duration}</div>
        </div>

        {/* Title and Description */}
        <h3 className="text-2xl font-bold text-white mb-4 font-mono hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-300 mb-6 leading-relaxed font-mono text-sm">
          {project.excerpt}
        </p>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {project.keyMetrics.slice(0, 4).map((metric, metricIndex) => (
            <motion.div
              key={metricIndex}
              className="bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-xl p-3 rounded-lg border border-blue-500/20 text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.3 + metricIndex * 0.1,
                type: "spring",
                stiffness: 150
              }}
              viewport={{ once: true }}
            >
              <div className="text-lg font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text font-mono">{metric.value}</div>
              <div className="text-xs text-gray-400 font-mono">{metric.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 6).map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-2 py-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 border border-blue-500/30 rounded text-xs font-medium font-mono"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-400 text-sm font-mono">
            <FaCalendar className="text-blue-400" />
            {formatDate(project.completionDate)}
          </div>
          <div className="flex gap-3">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-700/80 to-gray-800/80 hover:from-gray-600 hover:to-gray-700 text-white px-3 py-2 rounded-lg font-medium transition-all duration-300 shadow-lg shadow-gray-500/20 font-mono text-xs"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="text-xs" />
              Code
            </motion.a>
            <motion.button
              onClick={() => setSelectedProject(project)}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/80 to-cyan-500/80 hover:from-blue-500 hover:to-cyan-500 text-white px-3 py-2 rounded-lg font-medium transition-all duration-300 shadow-lg shadow-blue-500/20 font-mono text-xs"
              whileHover={{ scale: 1.05, x: 4 }}
              whileTap={{ scale: 0.95 }}
            >
              View Details
              <FaArrowRight className="text-xs" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <>
      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-gradient-to-br from-gray-900/95 via-black/90 to-gray-900/95 backdrop-blur-xl rounded-3xl shadow-2xl shadow-blue-500/20 w-full h-full max-w-7xl max-h-[95vh] overflow-y-auto border border-blue-500/30"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="relative p-12 pb-8">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-8 right-8 text-gray-400 hover:text-white transition-colors duration-200 p-3 rounded-full hover:bg-gray-800/50"
                >
                  <FaTimes size={24} />
                </button>
                
                <div className="flex items-center gap-4 mb-6">
                  <span className={`px-6 py-3 rounded-full text-lg font-medium font-mono ${getCategoryColor(selectedProject.category)}`}>
                    {selectedProject.category}
                  </span>
                  {selectedProject.featured && (
                    <span className="bg-gradient-to-r from-red-500/20 to-pink-500/20 text-red-300 border border-red-500/30 px-4 py-2 rounded-full text-lg font-medium font-mono">
                      Featured
                    </span>
                  )}
                </div>

                <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 font-mono leading-tight">
                  {selectedProject.title}
                </h2>
                
                <p className="text-gray-300 text-xl leading-relaxed font-mono mb-6 max-w-4xl">
                  {selectedProject.excerpt}
                </p>

                <div className="flex items-center gap-8 text-lg text-gray-400">
                  <span className="flex items-center gap-3 font-mono">
                    <FaCalendar className="text-blue-400" size={20} />
                    {formatDate(selectedProject.completionDate)}
                  </span>
                  <span className="flex items-center gap-3 font-mono">
                    <FaClock className="text-blue-400" size={20} />
                    {selectedProject.duration}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="px-12 pb-12">
                {/* Key Metrics */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-white mb-6 font-mono">Project Metrics</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {selectedProject.keyMetrics.map((metric, index) => (
                      <motion.div
                        key={index}
                        className="bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-xl p-6 rounded-xl border border-blue-500/20 text-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text font-mono mb-2">{metric.value}</div>
                        <div className="text-gray-400 font-mono">{metric.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-white mb-6 font-mono">Technologies Used</h3>
                  <div className="flex flex-wrap gap-4">
                    {selectedProject.technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        className="px-6 py-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 border border-blue-500/30 rounded-lg font-medium font-mono text-lg"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-white mb-6 font-mono">Project Details</h3>
                  <div className="bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-xl p-10 rounded-xl border border-blue-500/20">
                    <div 
                      className="prose prose-invert prose-blue prose-lg max-w-none font-mono text-gray-300 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: selectedProject.description }}
                      style={{
                        fontSize: '1.125rem',
                        lineHeight: '1.75'
                      }}
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-6">
                  <motion.a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-5 rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg shadow-blue-500/30 font-mono text-lg"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaExternalLinkAlt size={20} />
                    View Live Demo
                  </motion.a>
                  <motion.a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-4 bg-gradient-to-r from-gray-700 to-gray-800 text-white px-8 py-5 rounded-xl font-semibold hover:from-gray-600 hover:to-gray-700 transition-all duration-300 font-mono text-lg"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaGithub size={20} />
                    View Code
                  </motion.a>
                  <motion.button
                    onClick={() => setSelectedProject(null)}
                    className="px-8 py-5 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-xl font-semibold hover:from-gray-600 hover:to-gray-700 transition-all duration-300 font-mono text-lg"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-black dark:from-black dark:via-gray-900 dark:to-slate-900 relative">
        {/* Tech Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-7xl font-bold mb-8 font-mono">
              <span className="text-transparent bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-600 bg-clip-text">
                Featured Projects
              </span>
            </h2>
            <p className="text-xl text-gray-300 font-mono max-w-3xl mx-auto leading-relaxed">
              Showcasing innovative web applications, mobile solutions, and full-stack projects 
              built with modern technologies and best practices.
            </p>
          </motion.div>

          {/* Search and Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-gradient-to-r from-gray-900/80 via-black/60 to-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/20">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Search Bar */}
                <div className="flex-1 relative">
                  <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors font-mono"
                  />
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-3">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-6 py-4 rounded-xl font-medium transition-all duration-300 font-mono ${
                        selectedCategory === category
                          ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30'
                          : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/70'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Featured Projects */}
          {featuredProjects.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h3 className="text-4xl font-bold text-white mb-12 font-mono">
                <span className="text-transparent bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text">
                  Featured Projects
                </span>
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {featuredProjects.map((project, index) => renderProjectCard(project, index))}
              </div>
            </motion.div>
          )}

          {/* Regular Projects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold text-white mb-12 font-mono">
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text">
                All Projects
              </span>
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {(selectedCategory === 'All' && searchTerm === '' ? regularProjects : filteredProjects).map((project, index) => renderProjectCard(project, index))}
            </div>
          </motion.div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-6">💻</div>
              <h3 className="text-2xl font-bold text-white mb-4 font-mono">No Projects Found</h3>
              <p className="text-gray-400 font-mono">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
};

export default Projects;
