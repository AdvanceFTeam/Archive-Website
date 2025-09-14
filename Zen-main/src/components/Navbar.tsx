import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Download, Code, Home, Menu, X } from 'lucide-react';
import { FaDiscord, FaYoutube } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/download', label: 'Download', icon: Download },
    { path: '/script', label: 'Script', icon: Code },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'py-2' : 'py-4'}`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-[#12141A]/70 backdrop-blur-xl border border-white/5 rounded-2xl px-6 py-4 flex items-center justify-between relative">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img
                src="https://files.catbox.moe/9jexr1.png"
                alt="Logo"
                className="w-10 h-10 md:w-8 md:h-8 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full opacity-0 group-hover:opacity-50 filter blur-xl transition-opacity duration-300" />
            </div>
            <span className="text-2xl md:text-xl font-bold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              Zen
            </span>
          </Link>

          <div className="hidden md:flex items-center justify-center flex-grow">
            <div className="flex space-x-8">
              {navLinks.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  className={`nav-link ${location.pathname === path ? 'active' : ''}`}
                >
                  <motion.span 
                    className="flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{label}</span>
                  </motion.span>
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://youtube.com/@ItzNpg"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-white/5 text-gray-400 hover:text-accent-primary transition-all duration-300"
            >
              <FaYoutube className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://discord.gg/zen-hub"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-white/5 text-gray-400 hover:text-accent-secondary transition-all duration-300"
            >
              <FaDiscord className="w-5 h-5" />
            </motion.a>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ 
            opacity: isMobileMenuOpen ? 1 : 0,
            y: isMobileMenuOpen ? 0 : -20
          }}
          transition={{ duration: 0.2 }}
          className={`md:hidden absolute left-0 right-0 mt-2 px-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
        >
          <div className="bg-[#12141A]/70 backdrop-blur-xl border border-white/5 rounded-2xl p-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 ${
                    location.pathname === path 
                      ? 'bg-white/10 text-white' 
                      : 'text-gray-400 hover:bg-white/5 hover:text-white'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{label}</span>
                </Link>
              ))}
              
              <div className="h-px bg-white/5 my-2" />
              
              <div className="flex items-center justify-around py-2">
                <a
                  href="https://youtube.com/@ItzNpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl hover:bg-white/5 text-gray-400 hover:text-accent-primary transition-all duration-300"
                >
                  <FaYoutube className="w-6 h-6" />
                </a>
                <a
                  href="https://discord.gg/zen-hub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl hover:bg-white/5 text-gray-400 hover:text-accent-secondary transition-all duration-300"
                >
                  <FaDiscord className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
