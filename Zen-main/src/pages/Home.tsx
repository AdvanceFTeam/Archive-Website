import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code, Download, ArrowRight } from 'lucide-react';

const Home = () => {
  const tags = ['Version 1.0.0'];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen relative overflow-hidden"
    >
      <div className="blob blob-1" />
      <div className="blob blob-2" />

      <section className="min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center relative z-10"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-12 relative inline-block group"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <img 
                src="https://files.catbox.moe/9jexr1.png" 
                alt="Logo" 
                className="w-32 h-32" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full opacity-0 group-hover:opacity-50 filter blur-2xl transition-opacity duration-300" />
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-7xl font-bold mb-8 text-white"
          >
            Zen
          </motion.h1>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex justify-center gap-4 mb-8"
          >
            {tags.map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="tag"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            The Description.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link to="/download" className="btn-primary group">
              <Download className="w-5 h-5" />
              <span>Download</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <Link to="/script" className="btn-secondary group">
              <Code className="w-5 h-5" />
              <span>Get Script</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Home;