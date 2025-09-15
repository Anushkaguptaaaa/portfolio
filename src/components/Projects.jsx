import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div 
      className="project-card h-full flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -5 }}
    >
      {/* Project Image */}
      <div className="relative">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover rounded-t-coquette"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://via.placeholder.com/400x200?text=${project.title}`;
          }}
        />
        {project.featured && (
          <span className="absolute top-3 right-3 bg-rose-blush text-white text-xs px-2 py-1 rounded-full">
            Featured
          </span>
        )}
      </div>
      
      {/* Project Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-playfair font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{project.description}</p>
        
        {/* Tech Tags */}
        <div className="mb-4">
          <div className="flex flex-wrap">
            {project.technologies.slice(0, 3).map((tech, i) => (
              <span key={i} className="tech-tags inline-block">
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-xs text-gray-500 mt-1">
                +{project.technologies.length - 3} more
              </span>
            )}
          </div>
        </div>
        
        {/* Project Links */}
        <div className="flex items-center mt-auto">
          {project.demoLink && (
            <a 
              href={project.demoLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-links flex items-center mr-4"
              aria-label={`View ${project.title} demo`}
            >
              <FiExternalLink className="mr-1" /> Demo
            </a>
          )}
          {project.githubLink && (
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-links flex items-center"
              aria-label={`View ${project.title} GitHub repository`}
            >
              <FiGithub className="mr-1" /> GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
