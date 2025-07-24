import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendar, FaClock, FaArrowRight, FaSearch } from 'react-icons/fa';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  readTime: string;
  publishDate: string;
  image: string;
  featured: boolean;
}

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Building Scalable React Applications with TypeScript",
      excerpt: "Learn best practices for structuring large-scale React applications with TypeScript, including advanced patterns and performance optimization techniques.",
      content: "Full article content would go here...",
      category: "Frontend",
      tags: ["React", "TypeScript", "Performance", "Architecture"],
      readTime: "8 min read",
      publishDate: "2024-01-15",
      image: "react-typescript",
      featured: true
    },
    {
      id: 2,
      title: "Microservices Architecture: Lessons from Production",
      excerpt: "Real-world experiences and lessons learned from implementing microservices architecture in production environments.",
      content: "Full article content would go here...",
      category: "Backend",
      tags: ["Microservices", "Node.js", "Docker", "System Design"],
      readTime: "12 min read",
      publishDate: "2024-01-10",
      image: "microservices",
      featured: true
    },
    {
      id: 3,
      title: "The Art of Product Thinking in Tech",
      excerpt: "How to develop a product mindset as a developer and make decisions that drive user value and business impact.",
      content: "Full article content would go here...",
      category: "Product",
      tags: ["Product Management", "UX", "Strategy", "Leadership"],
      readTime: "6 min read",
      publishDate: "2024-01-05",
      image: "product-thinking",
      featured: false
    },
    {
      id: 4,
      title: "Advanced CSS Techniques for Modern Web Design",
      excerpt: "Explore cutting-edge CSS features and techniques that will elevate your web design skills and create stunning user interfaces.",
      content: "Full article content would go here...",
      category: "Frontend",
      tags: ["CSS", "Design", "Animation", "Layout"],
      readTime: "10 min read",
      publishDate: "2023-12-28",
      image: "advanced-css",
      featured: false
    },
    {
      id: 5,
      title: "Database Design Patterns for High-Performance Applications",
      excerpt: "Learn about database design patterns, indexing strategies, and optimization techniques for building high-performance applications.",
      content: "Full article content would go here...",
      category: "Backend",
      tags: ["Database", "PostgreSQL", "Performance", "Optimization"],
      readTime: "15 min read",
      publishDate: "2023-12-20",
      image: "database-design",
      featured: false
    },
    {
      id: 6,
      title: "User-Centered Design: From Research to Implementation",
      excerpt: "A comprehensive guide to user-centered design process, from conducting user research to implementing design solutions.",
      content: "Full article content would go here...",
      category: "Design",
      tags: ["UX Research", "Design Process", "User Testing", "Prototyping"],
      readTime: "9 min read",
      publishDate: "2023-12-15",
      image: "user-centered-design",
      featured: false
    }
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Product', 'Design'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      Frontend: 'bg-blue-100 text-blue-600',
      Backend: 'bg-green-100 text-green-600',
      Product: 'bg-purple-100 text-purple-600',
      Design: 'bg-pink-100 text-pink-600'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-600';
  };

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4 relative">
            Blog & Insights
            <div className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-500 rounded-full"></div>
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Sharing thoughts on development, design, and building products that matter.
          </p>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="relative flex-1">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors duration-200 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Posts */}
          {selectedCategory === 'All' && searchTerm === '' && (
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Featured Articles</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-lg font-semibold">
                      {post.image}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(post.category)}`}>
                          {post.category}
                        </span>
                        <span className="text-red-500 text-sm font-medium">Featured</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <FaCalendar />
                            {formatDate(post.publishDate)}
                          </span>
                          <span className="flex items-center gap-1">
                            <FaClock />
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <button className="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors">
                        Read More
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          )}

          {/* Regular Posts */}
          <div>
            {selectedCategory !== 'All' || searchTerm !== '' ? (
              <h3 className="text-2xl font-bold text-gray-800 mb-8">
                {searchTerm ? `Search Results (${filteredPosts.length})` : `${selectedCategory} Articles`}
              </h3>
            ) : (
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Latest Articles</h3>
            )}
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(selectedCategory === 'All' && searchTerm === '' ? regularPosts : filteredPosts).map((post, index) => (
                <motion.article
                  key={post.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="h-40 bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center text-white font-semibold">
                    {post.image}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(post.category)}`}>
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <FaCalendar />
                        {formatDate(post.publishDate)}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaClock />
                        {post.readTime}
                      </span>
                    </div>
                    <button className="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors text-sm">
                      Read More
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
