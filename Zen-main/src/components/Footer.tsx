import React from 'react';
import { FaDiscord, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-full py-12 bg-[#12141A]/70 backdrop-blur-xl border border-white/5 rounded-t-2xl mt-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="https://files.catbox.moe/9jexr1.png"
                alt="Logo"
                className="w-10 h-10"
              />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                Zen
              </h3>
            </div>
            <p className="text-gray-400 max-w-md">
              The Description.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              <Link to="/download" className="text-gray-400 hover:text-white transition-colors">Download</Link>
              <Link to="/script" className="text-gray-400 hover:text-white transition-colors">Script</Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect With Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://youtube.com/@ItzNpg"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-accent-primary transition-all duration-300"
              >
                <FaYoutube className="w-5 h-5" />
              </a>
              <a
                href="https://discord.gg/zen-hub"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-accent-secondary transition-all duration-300"
              >
                <FaDiscord className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="text-center text-sm text-gray-400">
            © 2025 Zen. All rights reserved.
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
