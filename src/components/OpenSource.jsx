import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiCode } from 'react-icons/fi';

const OpenSource = () => {
  const contributions = [
    {
      id: 'inkscape',
      organization: 'Inkscape',
      description: 'Opened and merged 9+ pull requests addressing feature requests, bug fixes, and documentation corrections.',
      link: 'https://github.com/inkscape/inkscape',
      image: '/images/inkscape.jpg'
    },
    {
      id: 'palisadoes',
      organization: 'The Palisadoes Foundation',
      description: 'Improved project documentation and workflows in 3+ repositories. Collaborated closely with maintainers and global contributors.',
      link: 'https://github.com/PalisadoesFoundation',
      image: '/images/palisadoes.jpg'
    }
  ];

  return (
    <section id="opensource" className="py-20 bg-lavender/20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Open Source Contributions
        </motion.h2>
        
        <div className="max-w-3xl mx-auto">
          <motion.div 
            className="coquette-card mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/4 flex justify-center">
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-rose-blush/20">
                  <FiCode size={32} className="text-rose-blush" />
                </div>
              </div>
              <div className="md:w-3/4 text-center md:text-left">
                <p className="mb-4">
                  I'm passionate about open source software and actively contribute to projects 
                  that align with my interests and skills. Contributing to open source has helped 
                  me gain hands-on experience in large-scale open-source development while 
                  collaborating with developers around the world.
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Contributions */}
          <div className="space-y-6">
            {contributions.map((contribution, index) => (
              <motion.div 
                key={contribution.id}
                className="coquette-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="md:w-1/4">
                    <img 
                      src={contribution.image}
                      alt={contribution.organization}
                      className="w-full h-24 object-contain"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://via.placeholder.com/200x100?text=${contribution.organization}`;
                      }}
                    />
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-bold mb-2 font-playfair">
                      {contribution.organization}
                    </h3>
                    <p className="text-gray-600 mb-4">{contribution.description}</p>
                    <a 
                      href={contribution.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-rose-blush hover:text-pink-soft transition-colors"
                    >
                      <FiGithub className="mr-2" /> View Repository
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Additional Experience */}
          <motion.div 
            className="mt-8 coquette-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-4 font-playfair">Technical Coordination</h3>
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="md:w-1/4">
                <p className="font-medium">Youthopia</p>
                <p className="text-sm text-gray-500">DIT University, 2023</p>
              </div>
              <div className="md:w-3/4">
                <p className="mb-2">
                  Served as a core technical developer for Youthopia mobile app in Flutter 
                  used by 100+ attendees for event management.
                </p>
                <p>
                  Successfully coordinated 2 major technical events: Robo Laser Tag and Robo Soccer.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;