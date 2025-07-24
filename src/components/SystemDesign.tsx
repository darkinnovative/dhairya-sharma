import React from 'react';
import { motion } from 'framer-motion';
import { FaServer, FaNetworkWired, FaCloud, FaCogs, FaDatabase } from 'react-icons/fa';

interface ArchitectureFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: ArchitectureFeature[] = [
  {
    icon: <FaServer />,
    title: 'Microservices',
    description: 'Decoupled services for scalability, maintainability, and independent deployments.'
  },
  {
    icon: <FaNetworkWired />,
    title: 'API Gateway',
    description: 'Centralized entry point for routing, authentication, and monitoring.'
  },
  {
    icon: <FaCloud />,
    title: 'Cloud Native',
    description: 'Leveraging cloud platforms for elasticity, reliability, and cost efficiency.'
  },
  {
    icon: <FaCogs />,
    title: 'CI/CD Automation',
    description: 'Automated build, test, and deployment pipelines for rapid iteration.'
  },
  {
    icon: <FaDatabase />,
    title: 'Distributed Data',
    description: 'Scalable databases and caching for high performance and availability.'
  }
];

const SystemDesign: React.FC = () => {
  return (
    <section id="system-design" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16 relative">
            System Design
            <div className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-500 rounded-full"></div>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-100 hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-base leading-relaxed">{feature.description}</p>
                <a
                  href="#case-studies"
                  className="inline-flex items-center gap-2 mt-6 bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow"
                >
                  View Details
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SystemDesign;
