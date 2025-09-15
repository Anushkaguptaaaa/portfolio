import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Profile Image */}
          <motion.div 
            className="md:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-64 h-64 mx-auto overflow-hidden rounded-full border-4 border-lavender shadow-coquette">
              <img 
                src="https://via.placeholder.com/400x400?text=AG"
                alt="Anushka Gupta" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          {/* Bio Content */}
          <motion.div 
            className="md:w-2/3 mt-8 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="coquette-card">
              <h3 className="text-2xl font-bold mb-4 font-playfair">Hello, I'm Anushka!</h3>
              <p className="mb-4">
                I'm a Full-Stack and App Developer with a passion for building beautiful, 
                functional, and user-friendly applications. Currently pursuing my Bachelor's 
                degree in Computer Science at DIT University, I specialize in creating web 
                and mobile solutions that combine elegant design with powerful functionality.
              </p>
              <p className="mb-6">
                My focus is on modern technologies like React, Next.js, and Flutter, 
                with experience in both SQL and NoSQL databases. I enjoy tackling complex 
                problems and turning ideas into reality through clean, efficient code.
              </p>
              
              {/* Education */}
              <div className="mb-6">
                <h4 className="text-lg font-bold mb-2">Education</h4>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-rose-blush mt-2 mr-2"></div>
                  <div>
                    <p className="font-medium">Bachelor of Technology in Computer Science</p>
                    <p className="text-gray-600">DIT University, 2022-2026</p>
                    <p className="text-sm">Current CGPA: 7.21</p>
                    <p className="text-sm">Coursework: Full-Stack Development and DevOps</p>
                  </div>
                </div>
              </div>
              
              {/* Resume Button */}
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="coquette-button inline-flex items-center"
              >
                <FiDownload className="mr-2" /> Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;