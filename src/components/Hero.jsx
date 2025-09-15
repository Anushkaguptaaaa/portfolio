import React from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-lavender/30 to-white relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <motion.div 
        className="absolute top-20 right-20 text-4xl decorative-element"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        ✨
      </motion.div>
      <motion.div 
        className="absolute bottom-40 left-20 text-4xl decorative-element"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        ✨
      </motion.div>
      
      {/* Additional Coquette Elements */}
      <motion.div 
        className="absolute top-40 left-[15%] text-4xl"
        initial={{ opacity: 0, rotate: -10 }}
        animate={{ opacity: 0.8, rotate: 0 }}
        transition={{ delay: 0.9, duration: 1 }}
      >
        🎀
      </motion.div>
      <motion.div 
        className="absolute top-[30%] right-[15%] text-4xl"
        initial={{ opacity: 0, rotate: 10 }}
        animate={{ opacity: 0.8, rotate: 0 }}
        transition={{ delay: 1.1, duration: 1 }}
      >
        🧸
      </motion.div>
      <motion.div 
        className="absolute bottom-[35%] left-[10%] text-4xl"
        initial={{ opacity: 0, rotate: -5 }}
        animate={{ opacity: 0.8, rotate: 0 }}
        transition={{ delay: 1.3, duration: 1 }}
      >
        👾
      </motion.div>
      <motion.div 
        className="absolute bottom-[25%] right-[10%] text-4xl"
        initial={{ opacity: 0, rotate: 5 }}
        animate={{ opacity: 0.8, rotate: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        👩🏻‍💻
      </motion.div>
      
      <div className="container mx-auto px-4 text-center">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-4 font-playfair"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Anushka Gupta
        </motion.h1>
        
        <motion.div
          className="h-1 w-24 bg-rose-blush mx-auto mb-6"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
        
        <motion.h2 
          className="text-xl md:text-2xl mb-8 text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Full-Stack & App Developer
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a 
            href="https://drive.google.com/file/d/1-NkLbstMrNRkFv8KZ7FYsHlOGHrdGb3j/view?usp=drivesdk" 
            target="_blank" 
            rel="noopener noreferrer"
            className="coquette-button inline-block"
          >
            View Resume
          </a>
        </motion.div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
      >
        <FiChevronDown size={24} className="text-rose-blush" />
      </motion.div>
    </section>
  );
};

export default Hero;