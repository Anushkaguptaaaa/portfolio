import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-lavender/30 py-10">
      <div className="container mx-auto px-4">
        {/* Scroll to Top Button */}
        <div className="flex justify-center mb-6">
          <motion.button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-rose-blush text-white flex items-center justify-center shadow-soft"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <FiArrowUp />
          </motion.button>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <motion.a
            href="mailto:aanushkagupta4@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            className="w-10 h-10 rounded-full bg-white text-rose-blush flex items-center justify-center shadow-soft"
            aria-label="Email"
          >
            <FiMail />
          </motion.a>
          
          <motion.a
            href="https://github.com/Anushkaguptaaaa"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            className="w-10 h-10 rounded-full bg-white text-rose-blush flex items-center justify-center shadow-soft"
            aria-label="GitHub"
          >
            <FiGithub />
          </motion.a>
          
          <motion.a
            href="https://linkedin.com/in/anushkagupta04"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            className="w-10 h-10 rounded-full bg-white text-rose-blush flex items-center justify-center shadow-soft"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </motion.a>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Anushka Gupta. All rights reserved.</p>
          <p className="mt-1 text-xs">
            Built with <span className="text-rose-blush">♥</span> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
