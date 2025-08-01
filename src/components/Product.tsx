import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCalendar, FaClock, FaArrowRight, FaSearch, FaTimes, FaExternalLinkAlt, FaLightbulb, FaChartLine, FaRocket, FaCog, FaBullseye } from 'react-icons/fa';

interface ProductItem {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: 'Strategy' | 'Research' | 'Development' | 'Analytics' | 'Growth';
  tags: string[];
  timeframe: string;
  publishDate: string;
  image: string;
  featured: boolean;
  keyMetrics: {
    label: string;
    value: string;
  }[];
  link?: string;
}

const Product: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const productItems: ProductItem[] = [
    {
      id: 1,
      title: "E-Learning Platform Product Strategy",
      excerpt: "Developed comprehensive product strategy for an adaptive learning platform, leading to 300% user growth and 85% retention rate improvement.",
      content: `
        <h3>Challenge</h3>
        <p>The existing e-learning platform had low user engagement and high churn rates. Users were struggling with one-size-fits-all content that didn't adapt to their learning pace and preferences.</p>
        
        <h3>Strategy & Approach</h3>
        <ul>
          <li>Conducted comprehensive user research with 200+ learners</li>
          <li>Analyzed learning behavior patterns and drop-off points</li>
          <li>Designed personalized learning paths using AI/ML algorithms</li>
          <li>Implemented adaptive content delivery system</li>
          <li>Created gamification elements to increase engagement</li>
        </ul>
        
        <h3>Implementation</h3>
        <p>Led cross-functional teams of 15+ engineers, designers, and data scientists through a 9-month development cycle. Implemented agile methodology with 2-week sprints and continuous user feedback loops.</p>
        
        <h3>Results & Impact</h3>
        <p>The new platform launched with significant improvements in user experience, leading to substantial business growth and positive user feedback.</p>
      `,
      category: 'Strategy',
      tags: ['Product Strategy', 'User Research', 'AI/ML', 'Personalization', 'Agile'],
      timeframe: '9 months',
      publishDate: '2024-01-15',
      image: '/products/elearning-strategy.jpg',
      featured: true,
      keyMetrics: [
        { label: 'User Growth', value: '300%' },
        { label: 'Retention Rate', value: '85%' },
        { label: 'Engagement', value: '4.2x' },
        { label: 'Completion Rate', value: '78%' }
      ]
    },
    {
      id: 2,
      title: "Data Analytics Dashboard Development",
      excerpt: "Led product development of a comprehensive analytics platform that reduced decision-making time by 60% and improved data accuracy by 95%.",
      content: `
        <h3>Business Need</h3>
        <p>Product teams were making decisions based on fragmented data sources and gut feelings rather than comprehensive analytics, leading to missed opportunities and inefficient resource allocation.</p>
        
        <h3>Product Vision</h3>
        <ul>
          <li>Unified data visualization platform</li>
          <li>Real-time analytics and insights</li>
          <li>Predictive analytics capabilities</li>
          <li>Customizable dashboards for different roles</li>
          <li>Automated reporting and alerts</li>
        </ul>
        
        <h3>Development Process</h3>
        <p>Collaborated with data engineers, UX designers, and stakeholders to create an intuitive, powerful analytics platform. Used design thinking methodology and rapid prototyping.</p>
        
        <h3>Business Impact</h3>
        <p>The platform transformed how teams make decisions, leading to more informed product choices and significantly improved business outcomes.</p>
      `,
      category: 'Development',
      tags: ['Data Analytics', 'Dashboard Design', 'Business Intelligence', 'UX Design', 'Product Development'],
      timeframe: '6 months',
      publishDate: '2024-01-10',
      image: '/products/analytics-dashboard.jpg',
      featured: true,
      keyMetrics: [
        { label: 'Decision Speed', value: '60%↓' },
        { label: 'Data Accuracy', value: '95%' },
        { label: 'User Adoption', value: '89%' },
        { label: 'Cost Reduction', value: '45%' }
      ]
    },
    {
      id: 3,
      title: "Mobile App User Experience Optimization",
      excerpt: "Redesigned mobile app user experience through extensive user research and A/B testing, resulting in 250% increase in user engagement.",
      content: `
        <h3>Initial Assessment</h3>
        <p>The mobile app had high download rates but poor user retention. Users were dropping off during onboarding and rarely returned after the first session.</p>
        
        <h3>Research & Analysis</h3>
        <ul>
          <li>User journey mapping and pain point identification</li>
          <li>Usability testing with 50+ participants</li>
          <li>Competitor analysis and industry benchmarking</li>
          <li>Analytics deep-dive on user behavior patterns</li>
        </ul>
        
        <h3>UX Improvements</h3>
        <p>Implemented streamlined onboarding, improved navigation, personalized content recommendations, and simplified core user flows based on research insights.</p>
        
        <h3>Validation & Results</h3>
        <p>Conducted extensive A/B testing to validate improvements before full rollout, ensuring data-driven decision making throughout the process.</p>
      `,
      category: 'Research',
      tags: ['User Research', 'UX Design', 'A/B Testing', 'Mobile App', 'User Retention'],
      timeframe: '4 months',
      publishDate: '2024-01-05',
      image: '/products/mobile-ux.jpg',
      featured: false,
      keyMetrics: [
        { label: 'User Engagement', value: '250%↑' },
        { label: 'Retention (D7)', value: '68%' },
        { label: 'App Store Rating', value: '4.7★' },
        { label: 'Session Duration', value: '3.2x' }
      ]
    },
    {
      id: 4,
      title: "SaaS Product Growth Strategy",
      excerpt: "Developed and executed growth strategy for B2B SaaS product, achieving 180% revenue growth and expanding to 3 new market segments.",
      content: `
        <h3>Growth Challenge</h3>
        <p>The SaaS product had reached a plateau in its primary market and needed expansion strategies to achieve ambitious revenue targets.</p>
        
        <h3>Market Analysis</h3>
        <ul>
          <li>Comprehensive competitive landscape analysis</li>
          <li>Customer segmentation and persona development</li>
          <li>Market sizing and opportunity assessment</li>
          <li>Pricing strategy optimization</li>
        </ul>
        
        <h3>Growth Initiatives</h3>
        <p>Launched targeted marketing campaigns, developed new product features for different segments, and implemented a customer success program to reduce churn.</p>
        
        <h3>Scaling Success</h3>
        <p>Successfully expanded into new markets while maintaining product quality and customer satisfaction, establishing sustainable growth foundations.</p>
      `,
      category: 'Growth',
      tags: ['Growth Strategy', 'Market Expansion', 'SaaS', 'Revenue Growth', 'Customer Success'],
      timeframe: '12 months',
      publishDate: '2023-12-20',
      image: '/products/saas-growth.jpg',
      featured: false,
      keyMetrics: [
        { label: 'Revenue Growth', value: '180%' },
        { label: 'Market Segments', value: '3 new' },
        { label: 'Customer LTV', value: '2.4x' },
        { label: 'Churn Reduction', value: '35%' }
      ]
    }
  ];

  const categories = ['All', 'Strategy', 'Research', 'Development', 'Analytics', 'Growth'];

  const filteredProducts = productItems.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredProducts = filteredProducts.filter(product => product.featured);
  const regularProducts = filteredProducts.filter(product => !product.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Strategy': 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30',
      'Research': 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 border border-blue-500/30',
      'Development': 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 border border-green-500/30',
      'Analytics': 'bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-300 border border-orange-500/30',
      'Growth': 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-300 border border-yellow-500/30'
    };
    return colors[category] || 'bg-gradient-to-r from-gray-500/20 to-gray-600/20 text-gray-300 border border-gray-500/30';
  };

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: React.ReactElement } = {
      'Strategy': <FaBullseye className="text-sm" />,
      'Research': <FaChartLine className="text-sm" />,
      'Development': <FaCog className="text-sm" />,
      'Analytics': <FaChartLine className="text-sm" />,
      'Growth': <FaRocket className="text-sm" />
    };
    return icons[category] || <FaLightbulb className="text-sm" />;
  };

  const renderProductCard = (product: ProductItem, index: number) => (
    <motion.div
      key={product.id}
      className="bg-gradient-to-r from-gray-900/80 via-black/60 to-gray-900/80 backdrop-blur-xl rounded-2xl shadow-2xl shadow-purple-500/10 overflow-hidden border border-purple-500/20 hover:border-purple-400/40 hover:shadow-purple-500/20 transition-all duration-500"
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
          <span className={`px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 font-mono ${getCategoryColor(product.category)}`}>
            {getCategoryIcon(product.category)}
            {product.category}
          </span>
          <div className="text-gray-400 text-sm font-mono">{product.timeframe}</div>
        </div>

        {/* Title and Description */}
        <h3 className="text-2xl font-bold text-white mb-4 font-mono hover:text-purple-400 transition-colors">
          {product.title}
        </h3>
        
        <p className="text-gray-300 mb-6 leading-relaxed font-mono text-sm">
          {product.excerpt}
        </p>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {product.keyMetrics.slice(0, 4).map((metric, metricIndex) => (
            <motion.div
              key={metricIndex}
              className="bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-xl p-3 rounded-lg border border-purple-500/20 text-center"
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
              <div className="text-lg font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-mono">{metric.value}</div>
              <div className="text-xs text-gray-400 font-mono">{metric.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {product.tags.slice(0, 6).map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-2 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30 rounded text-xs font-medium font-mono"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-400 text-sm font-mono">
            <FaCalendar className="text-purple-400" />
            {formatDate(product.publishDate)}
          </div>
          <motion.button
            onClick={() => setSelectedProduct(product)}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/80 to-pink-500/80 hover:from-purple-500 hover:to-pink-500 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 shadow-lg shadow-purple-500/20 font-mono text-sm"
            whileHover={{ scale: 1.05, x: 4 }}
            whileTap={{ scale: 0.95 }}
          >
            View Details
            <FaArrowRight className="text-xs" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <>
      {/* Product Item Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              className="bg-gradient-to-br from-gray-900/95 via-black/90 to-gray-900/95 backdrop-blur-xl rounded-3xl shadow-2xl shadow-purple-500/20 w-full h-full max-w-7xl max-h-[95vh] overflow-y-auto border border-purple-500/30"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="relative p-12 pb-8">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-8 right-8 text-gray-400 hover:text-white transition-colors duration-200 p-3 rounded-full hover:bg-gray-800/50"
                >
                  <FaTimes size={24} />
                </button>
                
                <div className="flex items-center gap-4 mb-6">
                  <span className={`px-6 py-3 rounded-full text-lg font-medium font-mono ${getCategoryColor(selectedProduct.category)}`}>
                    {selectedProduct.category}
                  </span>
                  {selectedProduct.featured && (
                    <span className="bg-gradient-to-r from-red-500/20 to-pink-500/20 text-red-300 border border-red-500/30 px-4 py-2 rounded-full text-lg font-medium font-mono">
                      Featured
                    </span>
                  )}
                </div>

                <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 font-mono leading-tight">
                  {selectedProduct.title}
                </h2>
                
                <p className="text-gray-300 text-xl leading-relaxed font-mono mb-6 max-w-4xl">
                  {selectedProduct.excerpt}
                </p>

                <div className="flex items-center gap-8 text-lg text-gray-400">
                  <span className="flex items-center gap-3 font-mono">
                    <FaCalendar className="text-purple-400" size={20} />
                    {formatDate(selectedProduct.publishDate)}
                  </span>
                  <span className="flex items-center gap-3 font-mono">
                    <FaClock className="text-purple-400" size={20} />
                    {selectedProduct.timeframe}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="px-12 pb-12">
                {/* Key Metrics */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-white mb-6 font-mono">Key Results</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {selectedProduct.keyMetrics.map((metric, index) => (
                      <motion.div
                        key={index}
                        className="bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-xl p-6 rounded-xl border border-purple-500/20 text-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-mono mb-2">{metric.value}</div>
                        <div className="text-gray-400 font-mono">{metric.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-white mb-6 font-mono">Skills & Technologies</h3>
                  <div className="flex flex-wrap gap-4">
                    {selectedProduct.tags.map((tag, index) => (
                      <motion.span
                        key={index}
                        className="px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30 rounded-lg font-medium font-mono text-lg"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        #{tag}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-white mb-6 font-mono">Project Details</h3>
                  <div className="bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-xl p-10 rounded-xl border border-purple-500/20">
                    <div 
                      className="prose prose-invert prose-purple prose-lg max-w-none font-mono text-gray-300 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: selectedProduct.content }}
                      style={{
                        fontSize: '1.125rem',
                        lineHeight: '1.75'
                      }}
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-6">
                  <motion.button
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                    }}
                    className="flex-1 inline-flex items-center justify-center gap-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-5 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg shadow-purple-500/30 font-mono text-lg"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaExternalLinkAlt size={20} />
                    Share Project
                  </motion.button>
                  <motion.button
                    onClick={() => setSelectedProduct(null)}
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

      <section id="product" className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-black dark:from-black dark:via-gray-900 dark:to-slate-900 relative">
        {/* Tech Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(147, 51, 234, 0.3) 1px, transparent 0)`,
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
              <span className="text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-600 bg-clip-text">
                Product Portfolio
              </span>
            </h2>
            <p className="text-xl text-gray-300 font-mono max-w-3xl mx-auto leading-relaxed">
              Showcasing strategic product initiatives, user research insights, and data-driven solutions 
              that drive business growth and exceptional user experiences.
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
            <div className="bg-gradient-to-r from-gray-900/80 via-black/60 to-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/20">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Search Bar */}
                <div className="flex-1 relative">
                  <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors font-mono"
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
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30'
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

          {/* Featured Products */}
          {featuredProducts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h3 className="text-4xl font-bold text-white mb-12 font-mono">
                <span className="text-transparent bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text">
                  Featured Products
                </span>
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {featuredProducts.map((product, index) => renderProductCard(product, index))}
              </div>
            </motion.div>
          )}

          {/* Regular Products */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold text-white mb-12 font-mono">
              <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text">
                All Products
              </span>
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {(selectedCategory === 'All' && searchTerm === '' ? regularProducts : filteredProducts).map((product, index) => renderProductCard(product, index))}
            </div>
          </motion.div>

          {/* No Results */}
          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-6">📋</div>
              <h3 className="text-2xl font-bold text-white mb-4 font-mono">No Products Found</h3>
              <p className="text-gray-400 font-mono">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
};

export default Product;
