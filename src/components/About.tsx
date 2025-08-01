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
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-black dark:from-black dark:via-gray-900 dark:to-slate-900 relative">
      {/* Tech Pattern Background */}
      <div className="absolute inset-0 opacity-3 sm:opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 255, 255, 0.3) 1px, transparent 0)`,
          backgroundSize: '30px 30px sm:40px sm:40px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-6xl md:text-7xl font-bold text-center mb-8 font-mono"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-transparent bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-600 bg-clip-text">
              About
            </span>
          </motion.h2>

          <motion.p 
            className="text-center text-xl text-gray-300 font-mono max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Strategic product leader transforming ideas into market-winning solutions
          </motion.p>

          {/* Main Content Card */}
          <motion.div
            className="bg-gradient-to-r from-gray-900/80 via-black/60 to-gray-900/80 backdrop-blur-xl rounded-2xl shadow-2xl shadow-cyan-500/10 p-8 md:p-12 mb-16 border border-cyan-500/20"
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
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3 font-mono">
                    <FaCoffee className="text-cyan-400" />
                    <span className="text-cyan-400">//</span> My Journey
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg font-mono">
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
                  <p className="text-gray-300 leading-relaxed text-lg font-mono">
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
                  <p className="text-gray-300 leading-relaxed text-lg font-mono">
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
                    className="bg-gradient-to-r from-gray-900/80 via-black/60 to-gray-900/80 backdrop-blur-xl p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0 shadow-lg shadow-cyan-500/30">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-2 font-mono">{feature.title}</h4>
                        <p className="text-gray-300 text-sm leading-relaxed font-mono">{feature.description}</p>
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
                className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl p-8 rounded-2xl shadow-2xl shadow-cyan-500/10 text-center border border-cyan-500/20 hover:border-cyan-400/40 hover:shadow-cyan-500/20 transition-all duration-500 ease-in-out"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.15, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -12, 
                  scale: 1.08,
                  transition: { duration: 0.4, ease: "easeInOut" }
                }}
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center text-white text-2xl mx-auto mb-4 shadow-lg shadow-cyan-500/30"
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.1,
                    transition: { duration: 0.6, ease: "easeInOut" }
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  {stat.icon}
                </motion.div>
                <motion.h3 
                  className="text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text mb-2 font-mono"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    duration: 0.7, 
                    delay: 1 + index * 0.15,
                    type: "spring",
                    stiffness: 150,
                    damping: 12
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3, ease: "easeInOut" }
                  }}
                >
                  {stat.number}
                </motion.h3>
                <motion.p 
                  className="text-gray-300 font-medium font-mono"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 1.2 + index * 0.15,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true }}
                >
                  {stat.label}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
