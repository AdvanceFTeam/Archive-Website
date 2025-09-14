import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Check, Shield, Cpu, Wifi, AppWindow as Windows } from 'lucide-react';

const DownloadPage = () => {
  const features = [
    {
      icon: Windows,
      title: 'Title 1',
      description: 'The Descriptions.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Cpu,
      title: 'Title 2',
      description: 'The Descriptions.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Shield,
      title: 'Title 3',
      description: 'The Descriptions.',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: Wifi,
      title: 'Title 4',
      description: 'The Descriptions.',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-32 px-4 pb-24 relative"
    >
      <div className="blob blob-1" />
      <div className="blob blob-2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center mb-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-primary to-accent-secondary blur-2xl opacity-20 rounded-full" />
              <Download className="w-16 h-16 text-white relative" />
            </div>
          </motion.div>
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-white bg-clip-text"
          >
            Download Zen
          </motion.h1>
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Experience the most simple Roblox executor, designed to execute normal scripts.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Windows Card */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            <div className="glass-card p-8 relative">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/20">
                      Window
                    </span>
                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 border border-yellow-500/20">
                      Coming Soon
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Windows Executor</h2>
                  <p className="text-gray-400">Version 1.0.0</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary p-0.5">
                  <div className="w-full h-full rounded-xl bg-black/30 flex items-center justify-center">
                    <Download className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              <button 
                className="btn-primary w-full group mb-8"
                disabled
              >
                <span>Download for Windows</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors duration-300"
                  >
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0`}>
                      <feature.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-white mb-1">{feature.title}</h3>
                      <p className="text-xs text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Android Card */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            <div className="glass-card p-8 relative">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/20">
                      Android
                    </span>
                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 border border-yellow-500/20">
                      Coming Soon
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Mobile Executor</h2>
                  <p className="text-gray-400">Version 1.0.0</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary p-0.5">
                  <div className="w-full h-full rounded-xl bg-black/30 flex items-center justify-center">
                    <Download className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              <button 
                className="btn-primary w-full group mb-8"
                disabled
              >
                <span>Download for Android</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors duration-300"
                  >
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0`}>
                      <feature.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-white mb-1">{feature.title}</h3>
                      <p className="text-xs text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default DownloadPage;
