import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const res = await fetch('http://localhost:3000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (res.ok) {
      alert('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } else {
      console.error('Error:', data);
      alert(data?.errors?.[0]?.msg || 'Failed to send message.');
    }
  } catch (error) {
    console.error('Network error:', error);
    alert('Network error. Please try again later.');
  }
};

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-black dark:from-black dark:via-gray-900 dark:to-slate-900 relative">
      {/* Tech Pattern Background */}
      <div className="absolute inset-0 opacity-3 sm:opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 255, 255, 0.3) 1px, transparent 0)`,
          backgroundSize: '30px 30px sm:40px sm:40px'
        }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h2 
            className="text-6xl md:text-7xl font-bold mb-8 font-mono"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-transparent bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-600 bg-clip-text">
              Get In Touch
            </span>
          </motion.h2>

          <motion.p 
            className="text-xl text-gray-300 font-mono max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's create something amazing together. Drop me a message!
          </motion.p>

          <motion.div
            className="bg-black/90 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl shadow-cyan-500/10"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.form 
              onSubmit={handleSubmit} 
              className="space-y-4 sm:space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 sm:py-4 border border-cyan-500/20 bg-gray-900/50 backdrop-blur-sm text-white rounded-lg focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400/50 outline-none transition-all duration-300 font-mono placeholder-gray-500 text-sm sm:text-base"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 sm:py-4 border border-cyan-500/20 bg-gray-900/50 backdrop-blur-sm text-white rounded-lg focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400/50 outline-none transition-all duration-300 font-mono placeholder-gray-500 text-sm sm:text-base"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                viewport={{ once: true }}
              >
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 sm:py-4 border border-cyan-500/20 bg-gray-900/50 backdrop-blur-sm text-white rounded-lg focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400/50 outline-none transition-all duration-300 font-mono placeholder-gray-500 text-sm sm:text-base"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                viewport={{ once: true }}
              >
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 sm:py-4 border border-cyan-500/20 bg-gray-900/50 backdrop-blur-sm text-white rounded-lg focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400/50 outline-none transition-all duration-300 resize-none font-mono placeholder-gray-500 text-sm sm:text-base"
                ></textarea>
              </motion.div>

              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                viewport={{ once: true }}
              >
                <motion.button
                  type="submit"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 sm:py-4 px-6 sm:px-8 rounded-lg font-semibold flex items-center justify-center gap-2 sm:gap-3 transition-all duration-300 shadow-lg shadow-cyan-500/30 font-mono text-sm sm:text-base"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaPaperPlane className="text-sm sm:text-base" />
                  <span>Send Message</span>
                </motion.button>
              </motion.div>
            </motion.form>

            {/* Contact Info Footer */}
            <motion.div
              className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-cyan-500/20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-gray-400 font-mono text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <FaEnvelope className="text-cyan-400" />
                  <span>your.email@example.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaPhone className="text-cyan-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-cyan-400" />
                  <span>Your City, Country</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
