import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaCode, FaLightbulb, FaUsers, FaTimes, FaGithub, FaRocket, FaBullseye, FaChartLine } from 'react-icons/fa';

interface CaseStudy {
  id: number;
  title: string;
  type: 'System Design' | 'Product Thinking';
  description: string;
  challenge: string;
  solution: string;
  impact: string;
  technologies: string[];
  duration: string;
  team: string;
  link: string;
  image: string;
  keyMetrics: {
    label: string;
    value: string;
  }[];
}

const CaseStudies: React.FC = () => {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  const systemDesignCases: CaseStudy[] = [
    {
      id: 1,
      title: "Scalable E-commerce Microservices Architecture",
      type: "System Design",
      description: "Designed and implemented a distributed microservices architecture for a high-traffic e-commerce platform handling 10M+ users.",
      challenge: "The existing monolithic architecture was struggling with peak traffic, causing frequent downtime and poor user experience during sales events.",
      solution: "Implemented a microservices architecture with event-driven communication, implemented caching strategies, and designed for horizontal scaling.",
      impact: "Reduced system downtime by 99.5%, improved response times by 60%, and enabled the platform to handle 5x traffic during peak events.",
      technologies: ["Node.js", "Docker", "Kubernetes", "Redis", "MongoDB", "RabbitMQ", "AWS"],
      duration: "6 months",
      team: "8 engineers",
      link: "https://github.com/yourusername/ecommerce-microservices",
      image: "system-design-1",
      keyMetrics: [
        { label: "Uptime Improvement", value: "99.5%" },
        { label: "Response Time", value: "-60%" },
        { label: "Traffic Capacity", value: "5x" },
        { label: "Cost Reduction", value: "30%" }
      ]
    },
    {
      id: 3,
      title: "Real-time Chat System with Auto-scaling",
      type: "System Design",
      description: "Built a real-time messaging platform capable of handling millions of concurrent users with auto-scaling infrastructure.",
      challenge: "Existing chat system couldn't handle peak loads during major events, causing message delays and connection drops.",
      solution: "Implemented WebSocket clustering with Redis pub/sub, horizontal auto-scaling, and message queuing for reliability.",
      impact: "Achieved 99.9% uptime, reduced message latency by 80%, and enabled seamless scaling for 2M+ concurrent users.",
      technologies: ["Node.js", "Socket.io", "Redis", "Docker", "Kubernetes", "AWS", "PostgreSQL"],
      duration: "4 months",
      team: "6 engineers",
      link: "https://github.com/yourusername/realtime-chat",
      image: "system-design-2",
      keyMetrics: [
        { label: "Concurrent Users", value: "2M+" },
        { label: "Message Latency", value: "-80%" },
        { label: "System Uptime", value: "99.9%" },
        { label: "Auto-scaling", value: "100%" }
      ]
    }
  ];

  const productThinkingCases: CaseStudy[] = [
    {
      id: 2,
      title: "AI-Powered Learning Platform",
      type: "Product Thinking",
      description: "Led the product strategy and development of an adaptive learning platform that personalizes education content based on user behavior and learning patterns.",
      challenge: "Students were struggling with one-size-fits-all learning approaches, resulting in low engagement and poor learning outcomes.",
      solution: "Developed an AI-driven personalization engine that adapts content difficulty, learning path, and delivery method based on individual student progress and preferences.",
      impact: "Increased student engagement by 85%, improved learning outcomes by 70%, and reduced course completion time by 40%.",
      technologies: ["React", "Python", "TensorFlow", "PostgreSQL", "AWS", "D3.js"],
      duration: "8 months",
      team: "12 members",
      link: "https://learning-platform-demo.com",
      image: "product-thinking-1",
      keyMetrics: [
        { label: "User Engagement", value: "+85%" },
        { label: "Learning Outcomes", value: "+70%" },
        { label: "Completion Time", value: "-40%" },
        { label: "User Retention", value: "+65%" }
      ]
    },
    {
      id: 4,
      title: "Data-Driven Product Analytics Dashboard",
      type: "Product Thinking",
      description: "Created a comprehensive analytics platform to help product teams make data-driven decisions with real-time insights and predictive analytics.",
      challenge: "Product teams were making decisions based on gut feeling rather than data, leading to missed opportunities and inefficient resource allocation.",
      solution: "Built an integrated analytics dashboard with real-time data visualization, A/B testing framework, and predictive modeling capabilities.",
      impact: "Improved decision-making speed by 60%, increased feature adoption by 45%, and reduced development costs by 25%.",
      technologies: ["React", "D3.js", "Python", "Apache Kafka", "ClickHouse", "Docker", "AWS"],
      duration: "6 months",
      team: "10 members",
      link: "https://analytics-dashboard-demo.com",
      image: "product-thinking-2",
      keyMetrics: [
        { label: "Decision Speed", value: "+60%" },
        { label: "Feature Adoption", value: "+45%" },
        { label: "Cost Reduction", value: "-25%" },
        { label: "Data Accuracy", value: "99.8%" }
      ]
    }
  ];

  const getTypeIcon = (type: string) => {
    return type === 'System Design' ? <FaCode /> : <FaLightbulb />;
  };

  const getTypeColor = (type: string) => {
    return type === 'System Design' 
      ? 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 border border-green-500/30' 
      : 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30';
  };

  const renderCaseCard = (study: CaseStudy, index: number) => (
    <motion.div
      key={study.id}
      className="bg-gradient-to-r from-gray-900/80 via-black/60 to-gray-900/80 backdrop-blur-xl rounded-2xl shadow-2xl shadow-cyan-500/10 overflow-hidden border border-cyan-500/20 hover:border-cyan-400/40 hover:shadow-cyan-500/20 transition-all duration-500"
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
          <span className={`px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 font-mono ${getTypeColor(study.type)}`}>
            {getTypeIcon(study.type)}
            {study.type}
          </span>
          <div className="text-gray-400 text-sm font-mono">{study.duration}</div>
        </div>

        {/* Title and Description */}
        <h3 className="text-2xl font-bold text-white mb-4 font-mono hover:text-cyan-400 transition-colors">
          {study.title}
        </h3>
        
        <p className="text-gray-300 mb-6 leading-relaxed font-mono text-sm">
          {study.description}
        </p>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {study.keyMetrics.slice(0, 4).map((metric, metricIndex) => (
            <motion.div
              key={metricIndex}
              className="bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-xl p-3 rounded-lg border border-cyan-500/20 text-center"
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
              <div className="text-lg font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text font-mono">{metric.value}</div>
              <div className="text-xs text-gray-400 font-mono">{metric.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {study.technologies.slice(0, 6).map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-2 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/30 rounded text-xs font-medium font-mono"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-400 text-sm font-mono">
            <FaUsers className="text-cyan-400" />
            {study.team}
          </div>
          <motion.button
            onClick={() => setSelectedStudy(study)}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-cyan-500/30 font-mono text-sm"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View Details
            <FaExternalLinkAlt size={12} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );

  // Modal Component for Detailed View
  const CaseStudyModal = () => {
    if (!selectedStudy) return null;

    return (
      <AnimatePresence>
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedStudy(null)}
        >
          <motion.div
            className="bg-gradient-to-br from-gray-900/95 via-black/90 to-gray-900/95 backdrop-blur-xl rounded-3xl shadow-2xl shadow-cyan-500/20 w-full h-full max-w-7xl max-h-[95vh] overflow-y-auto border border-cyan-500/30"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative p-12 pb-8">
              <button
                onClick={() => setSelectedStudy(null)}
                className="absolute top-8 right-8 text-gray-400 hover:text-white transition-colors duration-200 p-3 rounded-full hover:bg-gray-800/50"
              >
                <FaTimes size={24} />
              </button>
              
              <div className="flex items-center gap-6 mb-6">
                <span className={`px-6 py-3 rounded-full text-lg font-semibold flex items-center gap-3 font-mono ${getTypeColor(selectedStudy.type)}`}>
                  {getTypeIcon(selectedStudy.type)}
                  {selectedStudy.type}
                </span>
                <div className="text-gray-400 text-lg font-mono">{selectedStudy.duration}</div>
              </div>

              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 font-mono leading-tight">
                {selectedStudy.title}
              </h2>
              
              <p className="text-gray-300 text-xl leading-relaxed font-mono max-w-4xl">
                {selectedStudy.description}
              </p>
            </div>

            {/* Content */}
            <div className="px-12 pb-12">
              {/* Key Metrics */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-white mb-6 font-mono flex items-center gap-3">
                  <FaChartLine className="text-cyan-400" size={24} />
                  Key Metrics & Impact
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {selectedStudy.keyMetrics.map((metric, index) => (
                    <motion.div
                      key={index}
                      className="bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-xl p-6 rounded-xl border border-cyan-500/20 text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text font-mono">
                        {metric.value}
                      </div>
                      <div className="text-base text-gray-400 font-mono mt-2">{metric.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Main Content Grid */}
              <div className="grid lg:grid-cols-2 gap-12 mb-12">
                {/* Challenge */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6 font-mono flex items-center gap-3">
                    <FaBullseye className="text-red-400" size={24} />
                    The Challenge
                  </h3>
                  <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-xl p-8">
                    <p className="text-gray-300 leading-relaxed font-mono text-lg">{selectedStudy.challenge}</p>
                  </div>
                </div>

                {/* Solution */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6 font-mono flex items-center gap-3">
                    <FaRocket className="text-green-400" size={24} />
                    The Solution
                  </h3>
                  <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-8">
                    <p className="text-gray-300 leading-relaxed font-mono text-lg">{selectedStudy.solution}</p>
                  </div>
                </div>
              </div>

              {/* Impact */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-white mb-6 font-mono flex items-center gap-3">
                  <FaChartLine className="text-purple-400" size={24} />
                  Business Impact
                </h3>
                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-8">
                  <p className="text-gray-300 leading-relaxed font-mono text-lg max-w-5xl">{selectedStudy.impact}</p>
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-white mb-6 font-mono">
                  Technologies & Tools
                </h3>
                <div className="flex flex-wrap gap-4">
                  {selectedStudy.technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      className="px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/30 rounded-lg font-medium font-mono text-lg"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Team & Duration */}
              <div className="mb-12">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-xl p-8 rounded-xl border border-cyan-500/20">
                    <h4 className="text-xl font-bold text-white mb-4 font-mono flex items-center gap-3">
                      <FaUsers className="text-cyan-400" size={20} />
                      Team Size
                    </h4>
                    <p className="text-gray-300 font-mono text-2xl">{selectedStudy.team}</p>
                  </div>
                  <div className="bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-xl p-8 rounded-xl border border-cyan-500/20">
                    <h4 className="text-xl font-bold text-white mb-4 font-mono">Project Duration</h4>
                    <p className="text-gray-300 font-mono text-2xl">{selectedStudy.duration}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-6">
                <motion.a
                  href={selectedStudy.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-5 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-cyan-500/30 font-mono text-lg"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaGithub size={24} />
                  View Project
                  <FaExternalLinkAlt size={20} />
                </motion.a>
                <motion.button
                  onClick={() => setSelectedStudy(null)}
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
      </AnimatePresence>
    );
  };

  return (
    <>
      <CaseStudyModal />
      <section id="case-studies" className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-black dark:from-black dark:via-gray-900 dark:to-slate-900 relative">
      {/* Tech Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 255, 255, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-6xl md:text-7xl font-bold mb-8 font-mono"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-transparent bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-600 bg-clip-text">
              Case Studies
            </span>
          </motion.h2>

          <motion.p 
            className="text-xl text-gray-300 font-mono max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Detailed analysis of complex technical challenges and strategic solutions
          </motion.p>
        </motion.div>

        {/* System Design Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <FaCode className="text-2xl text-green-400" />
            <h3 className="text-2xl md:text-3xl font-bold text-white font-mono">
              System Design
            </h3>
            <div className="flex-1 h-px bg-gradient-to-r from-green-400/50 to-transparent"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {systemDesignCases.map((study, index) => renderCaseCard(study, index))}
          </div>
        </motion.div>

        {/* Product Thinking Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <FaLightbulb className="text-2xl text-purple-400" />
            <h3 className="text-2xl md:text-3xl font-bold text-white font-mono">
              Product Thinking
            </h3>
            <div className="flex-1 h-px bg-gradient-to-r from-purple-400/50 to-transparent"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {productThinkingCases.map((study, index) => renderCaseCard(study, index))}
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
};

export default CaseStudies;
