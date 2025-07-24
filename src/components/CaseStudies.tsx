import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaCode, FaLightbulb, FaUsers, FaChartLine } from 'react-icons/fa';

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
  const caseStudies: CaseStudy[] = [
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
      id: 2,
      title: "AI-Powered Learning Platform",
      type: "Product Thinking",
      description: "Led the product strategy and development of an adaptive learning platform that personalizes education content based on user behavior and learning patterns.",
      challenge: "Students were struggling with one-size-fits-all learning approaches, resulting in low engagement and poor learning outcomes.",
      solution: "Developed an AI-driven personalization engine that adapts content difficulty, learning path, and delivery method based on individual student progress and preferences.",
      impact: "Increased student engagement by 85%, improved learning outcomes by 70%, and reduced course completion time by 40%.",
      technologies: ["React", "Python", "TensorFlow", "PostgreSQL", "AWS", "D3.js"],
      duration: "8 months",
      team: "12 members (4 engineers, 3 designers, 2 data scientists, 3 product)",
      link: "https://learning-platform-demo.com",
      image: "product-thinking-1",
      keyMetrics: [
        { label: "User Engagement", value: "+85%" },
        { label: "Learning Outcomes", value: "+70%" },
        { label: "Completion Time", value: "-40%" },
        { label: "User Retention", value: "+65%" }
      ]
    }
  ];

  const getTypeIcon = (type: string) => {
    return type === 'System Design' ? <FaCode /> : <FaLightbulb />;
  };

  const getTypeColor = (type: string) => {
    return type === 'System Design' ? 'bg-green-100 text-green-600' : 'bg-purple-100 text-purple-600';
  };

  return (
    <section id="case-studies" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16 relative">
            Case Studies
            <div className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-500 rounded-full"></div>
          </h2>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Content Side */}
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-3 mb-6">
                      <span className={`px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 ${getTypeColor(study.type)}`}>
                        {getTypeIcon(study.type)}
                        {study.type}
                      </span>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                      {study.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {study.description}
                    </p>

                    <div className="space-y-6 mb-8">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                          Challenge
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{study.challenge}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                          Solution
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{study.solution}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          Impact
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{study.impact}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <h5 className="font-semibold text-gray-800 text-sm mb-1 flex items-center gap-1">
                          <FaUsers className="text-blue-500" />
                          Team
                        </h5>
                        <p className="text-gray-600 text-sm">{study.team}</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 text-sm mb-1 flex items-center gap-1">
                          <FaChartLine className="text-green-500" />
                          Duration
                        </h5>
                        <p className="text-gray-600 text-sm">{study.duration}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {study.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <motion.a
                      href={study.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Details
                      <FaExternalLinkAlt size={14} />
                    </motion.a>
                  </div>

                  {/* Visual Side */}
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 lg:p-12 flex flex-col justify-center">
                    <div className="text-white mb-8">
                      <h4 className="text-lg font-semibold mb-4">Key Metrics</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {study.keyMetrics.map((metric, metricIndex) => (
                          <motion.div
                            key={metricIndex}
                            className="text-center"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: metricIndex * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <div className="text-2xl font-bold mb-1">{metric.value}</div>
                            <div className="text-sm opacity-90">{metric.label}</div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white/10 rounded-xl p-6 text-center text-white">
                      <div className="text-lg font-semibold mb-2">{study.image}</div>
                      <div className="text-sm opacity-90">Visual Mockup</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
