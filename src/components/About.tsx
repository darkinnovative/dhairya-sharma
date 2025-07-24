import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLightbulb, FaUsers, FaRocket, FaHeart, FaCoffee } from 'react-icons/fa';

interface Stat {
  number: string;
  label: string;
  icon: React.ReactNode;
}

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const About: React.FC = () => {
  const stats: Stat[] = [
    { number: '25+', label: 'Products Launched', icon: <FaRocket /> },
    { number: '5+', label: 'Years Experience', icon: <FaCode /> },
    { number: '98%', label: 'User Satisfaction', icon: <FaHeart /> },
  ];

  const features: Feature[] = [
    {
      icon: <FaLightbulb />,
      title: 'Strategic Vision',
      description: 'Developing comprehensive product roadmaps aligned with business objectives and user needs'
    },
    {
      icon: <FaUsers />,
      title: 'Cross-functional Leadership',
      description: 'Leading diverse teams of engineers, designers, and stakeholders to deliver exceptional products'
    },
    {
      icon: <FaCode />,
      title: 'Data-Driven Decisions',
      description: 'Using analytics and user research to guide product decisions and optimize user experiences'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4 relative"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About Me
            <div className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-500 rounded-full"></div>
          </motion.h2>

          <motion.p 
            className="text-center text-gray-600 text-lg mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Strategic product leader transforming ideas into market-winning solutions
          </motion.p>

          {/* Main Content Card */}
          <motion.div
            className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16 border border-gray-100"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                    <FaCoffee className="text-brown-500" />
                    My Journey
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Hello! I'm a strategic Product Manager with a passion for transforming
                    innovative ideas into successful digital products. My journey in product
                    management started 5+ years ago, and I've been driving product excellence
                    and user satisfaction ever since.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <p className="text-gray-600 leading-relaxed text-lg">
                    I specialize in product strategy, user experience optimization, and
                    cross-functional team leadership. My expertise spans from market research
                    and competitive analysis to feature prioritization and go-to-market strategies.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <p className="text-gray-600 leading-relaxed text-lg">
                    When I'm not analyzing user data or planning product roadmaps, you can find me
                    mentoring aspiring product managers, exploring emerging technologies, or
                    studying successful product case studies. I believe in continuous learning
                    and staying ahead of industry trends.
                  </p>
                </motion.div>
              </div>

              {/* Features Grid */}
              <div className="grid gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">{feature.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-xl text-center border border-gray-100 hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.05 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {stat.icon}
                </motion.div>
                <motion.h3 
                  className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
