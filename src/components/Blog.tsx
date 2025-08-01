import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCalendar, FaClock, FaArrowRight, FaSearch, FaTimes, FaExternalLinkAlt, FaBookOpen, FaCode, FaLightbulb, FaRocket } from 'react-icons/fa';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: 'Frontend' | 'Backend' | 'Product' | 'Design' | 'DevOps';
  tags: string[];
  readTime: string;
  publishDate: string;
  image: string;
  featured: boolean;
  keyMetrics: {
    label: string;
    value: string;
  }[];
  link?: string;
}

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Building Scalable React Applications with TypeScript",
      excerpt: "Learn best practices for structuring large-scale React applications with TypeScript, including advanced patterns and performance optimization techniques.",
      content: `
        <h3>Introduction</h3>
        <p>Building scalable React applications requires careful consideration of architecture, TypeScript implementation, and performance optimization. In this comprehensive guide, we'll explore proven patterns and practices.</p>
        
        <h3>Key Concepts Covered</h3>
        <ul>
          <li>Advanced TypeScript patterns for React components</li>
          <li>State management with Redux Toolkit and TypeScript</li>
          <li>Performance optimization techniques</li>
          <li>Code splitting and lazy loading strategies</li>
          <li>Testing strategies for TypeScript React apps</li>
        </ul>
        
        <h3>Architecture Patterns</h3>
        <p>We'll dive deep into folder structure, component composition, and how to leverage TypeScript's type system to catch errors at compile time rather than runtime.</p>
        
        <h3>Performance Optimization</h3>
        <p>Learn about React.memo, useMemo, useCallback, and other optimization techniques that work seamlessly with TypeScript.</p>
      `,
      category: 'Frontend',
      tags: ['React', 'TypeScript', 'Performance', 'Architecture', 'Best Practices'],
      readTime: '12 min read',
      publishDate: '2024-01-15',
      image: '/blog/react-typescript.jpg',
      featured: true,
      keyMetrics: [
        { label: 'Performance Gain', value: '40%' },
        { label: 'Code Maintainability', value: '85%' },
        { label: 'Type Safety', value: '100%' },
        { label: 'Developer Experience', value: '95%' }
      ]
    },
    {
      id: 2,
      title: "Modern API Design with Node.js and GraphQL",
      excerpt: "Explore advanced GraphQL patterns, performance optimization, and security best practices for building robust APIs that scale.",
      content: `
        <h3>GraphQL Fundamentals</h3>
        <p>GraphQL provides a powerful query language for APIs that allows clients to request exactly the data they need. This comprehensive guide covers advanced implementation patterns.</p>
        
        <h3>Performance Optimization</h3>
        <ul>
          <li>DataLoader pattern for N+1 query resolution</li>
          <li>Query complexity analysis and rate limiting</li>
          <li>Caching strategies with Redis</li>
          <li>Schema federation for microservices</li>
        </ul>
        
        <h3>Security Best Practices</h3>
        <p>Learn how to implement authentication, authorization, and query validation to secure your GraphQL endpoints.</p>
      `,
      category: 'Backend',
      tags: ['Node.js', 'GraphQL', 'API Design', 'Performance', 'Security'],
      readTime: '15 min read',
      publishDate: '2024-01-10',
      image: '/blog/graphql-api.jpg',
      featured: true,
      keyMetrics: [
        { label: 'Response Time', value: '120ms' },
        { label: 'Throughput', value: '10k/sec' },
        { label: 'Security Score', value: 'A+' },
        { label: 'Code Coverage', value: '92%' }
      ]
    },
    {
      id: 3,
      title: "Designing Intuitive User Experiences",
      excerpt: "A deep dive into UX research, design systems, and accessibility principles that drive user engagement and satisfaction.",
      content: `
        <h3>User-Centered Design</h3>
        <p>Understanding your users is the foundation of great design. This guide covers research methodologies, persona development, and user journey mapping.</p>
        
        <h3>Design Systems</h3>
        <ul>
          <li>Component library development</li>
          <li>Design token management</li>
          <li>Accessibility guidelines</li>
          <li>Cross-platform consistency</li>
        </ul>
        
        <h3>Measuring Success</h3>
        <p>Learn how to implement analytics and user feedback systems to continuously improve the user experience.</p>
      `,
      category: 'Design',
      tags: ['UX Design', 'Design Systems', 'Accessibility', 'User Research'],
      readTime: '10 min read',
      publishDate: '2024-01-05',
      image: '/blog/ux-design.jpg',
      featured: false,
      keyMetrics: [
        { label: 'User Satisfaction', value: '94%' },
        { label: 'Task Completion', value: '98%' },
        { label: 'Accessibility Score', value: 'AAA' },
        { label: 'Design Consistency', value: '100%' }
      ]
    }
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Product', 'Design', 'DevOps'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

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
      'Product': 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30',
      'Design': 'bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-300 border border-orange-500/30',
      'DevOps': 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-300 border border-yellow-500/30'
    };
    return colors[category] || 'bg-gradient-to-r from-gray-500/20 to-gray-600/20 text-gray-300 border border-gray-500/30';
  };

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: React.ReactElement } = {
      'Frontend': <FaCode className="text-sm" />,
      'Backend': <FaRocket className="text-sm" />,
      'Product': <FaLightbulb className="text-sm" />,
      'Design': <FaBookOpen className="text-sm" />,
      'DevOps': <FaRocket className="text-sm" />
    };
    return icons[category] || <FaCode className="text-sm" />;
  };

  const renderBlogCard = (post: BlogPost, index: number) => (
    <motion.div
      key={post.id}
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
          <span className={`px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 font-mono ${getCategoryColor(post.category)}`}>
            {getCategoryIcon(post.category)}
            {post.category}
          </span>
          <div className="text-gray-400 text-sm font-mono">{post.readTime}</div>
        </div>

        {/* Title and Description */}
        <h3 className="text-2xl font-bold text-white mb-4 font-mono hover:text-cyan-400 transition-colors">
          {post.title}
        </h3>
        
        <p className="text-gray-300 mb-6 leading-relaxed font-mono text-sm">
          {post.excerpt}
        </p>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {post.keyMetrics.slice(0, 4).map((metric, metricIndex) => (
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

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.slice(0, 6).map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-2 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/30 rounded text-xs font-medium font-mono"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-400 text-sm font-mono">
            <FaCalendar className="text-cyan-400" />
            {formatDate(post.publishDate)}
          </div>
          <motion.button
            onClick={() => setSelectedPost(post)}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/80 to-blue-500/80 hover:from-cyan-500 hover:to-blue-500 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 shadow-lg shadow-cyan-500/20 font-mono text-sm"
            whileHover={{ scale: 1.05, x: 4 }}
            whileTap={{ scale: 0.95 }}
          >
            Read More
            <FaArrowRight className="text-xs" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <>
      {/* Blog Post Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPost(null)}
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
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-8 right-8 text-gray-400 hover:text-white transition-colors duration-200 p-3 rounded-full hover:bg-gray-800/50"
                >
                  <FaTimes size={24} />
                </button>
                
                <div className="flex items-center gap-4 mb-6">
                  <span className={`px-6 py-3 rounded-full text-lg font-medium font-mono ${getCategoryColor(selectedPost.category)}`}>
                    {selectedPost.category}
                  </span>
                  {selectedPost.featured && (
                    <span className="bg-gradient-to-r from-red-500/20 to-pink-500/20 text-red-300 border border-red-500/30 px-4 py-2 rounded-full text-lg font-medium font-mono">
                      Featured
                    </span>
                  )}
                </div>

                <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 font-mono leading-tight">
                  {selectedPost.title}
                </h2>
                
                <p className="text-gray-300 text-xl leading-relaxed font-mono mb-6 max-w-4xl">
                  {selectedPost.excerpt}
                </p>

                <div className="flex items-center gap-8 text-lg text-gray-400">
                  <span className="flex items-center gap-3 font-mono">
                    <FaCalendar className="text-cyan-400" size={20} />
                    {formatDate(selectedPost.publishDate)}
                  </span>
                  <span className="flex items-center gap-3 font-mono">
                    <FaClock className="text-cyan-400" size={20} />
                    {selectedPost.readTime}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="px-12 pb-12">
                {/* Tags */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-white mb-6 font-mono">Tags</h3>
                  <div className="flex flex-wrap gap-4">
                    {selectedPost.tags.map((tag, index) => (
                      <motion.span
                        key={index}
                        className="px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/30 rounded-lg font-medium font-mono text-lg"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        #{tag}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Article Content */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-white mb-6 font-mono">Article Content</h3>
                  <div className="bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-xl p-10 rounded-xl border border-cyan-500/20">
                    <div 
                      className="prose prose-invert prose-cyan prose-lg max-w-none font-mono text-gray-300 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: selectedPost.content }}
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
                    className="flex-1 inline-flex items-center justify-center gap-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-5 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-cyan-500/30 font-mono text-lg"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaExternalLinkAlt size={20} />
                    Share Article
                  </motion.button>
                  <motion.button
                    onClick={() => setSelectedPost(null)}
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

      <section id="blog" className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-black dark:from-black dark:via-gray-900 dark:to-slate-900 relative">
        {/* Tech Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 255, 255, 0.3) 1px, transparent 0)`,
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
              <span className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text">
                Blog & Insights
              </span>
            </h2>
            <p className="text-xl text-gray-300 font-mono max-w-3xl mx-auto leading-relaxed">
              Sharing knowledge, experiences, and insights from the world of software development, 
              design, and technology innovation.
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
            <div className="bg-gradient-to-r from-gray-900/80 via-black/60 to-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/20">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Search Bar */}
                <div className="flex-1 relative">
                  <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors font-mono"
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
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30'
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

          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h3 className="text-4xl font-bold text-white mb-12 font-mono">
                <span className="text-transparent bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text">
                  Featured Articles
                </span>
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {featuredPosts.map((post, index) => renderBlogCard(post, index))}
              </div>
            </motion.div>
          )}

          {/* Regular Posts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold text-white mb-12 font-mono">
              <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">
                All Articles
              </span>
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {(selectedCategory === 'All' && searchTerm === '' ? regularPosts : filteredPosts).map((post, index) => renderBlogCard(post, index))}
            </div>
          </motion.div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-6">📝</div>
              <h3 className="text-2xl font-bold text-white mb-4 font-mono">No Articles Found</h3>
              <p className="text-gray-400 font-mono">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
};

export default Blog;
