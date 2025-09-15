import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/skills';

const Skills = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-20 bg-lavender/20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Programming Languages */}
          <motion.div 
            className="coquette-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-playfair mb-4">Programming</h3>
            <motion.div 
              className="flex flex-wrap"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skills.programming.map((skill) => (
                <motion.span 
                  key={skill.id} 
                  className="skill-badge"
                  variants={itemVariants}
                >
                  {skill.name}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Web & Frameworks */}
          <motion.div 
            className="coquette-card"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-playfair mb-4">Web & Frameworks</h3>
            <motion.div 
              className="flex flex-wrap"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skills.webFrameworks.map((skill) => (
                <motion.span 
                  key={skill.id} 
                  className="skill-badge"
                  variants={itemVariants}
                >
                  {skill.name}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Databases */}
          <motion.div 
            className="coquette-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-xl font-playfair mb-4">Databases</h3>
            <motion.div 
              className="flex flex-wrap"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skills.databases.map((skill) => (
                <motion.span 
                  key={skill.id} 
                  className="skill-badge"
                  variants={itemVariants}
                >
                  {skill.name}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Tools */}
          <motion.div 
            className="coquette-card"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-xl font-playfair mb-4">Tools</h3>
            <motion.div 
              className="flex flex-wrap"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skills.tools.map((skill) => (
                <motion.span 
                  key={skill.id} 
                  className="skill-badge"
                  variants={itemVariants}
                >
                  {skill.name}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
