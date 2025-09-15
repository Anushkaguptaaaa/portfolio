import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiSend } from 'react-icons/fi';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      setSubmitStatus('sending');
      
      // Replace with your EmailJS service ID, template ID, and user ID
      emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
        },
        'YOUR_USER_ID'
      )
        .then(() => {
          setFormData({ name: '', email: '', message: '' });
          setSubmitStatus('success');
          setTimeout(() => setSubmitStatus(null), 5000);
        })
        .catch(() => {
          setSubmitStatus('error');
          setTimeout(() => setSubmitStatus(null), 5000);
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Form */}
            <motion.div 
              className="coquette-card"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-xl font-playfair mb-4">Send a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`coquette-input ${errors.name ? 'border-red-300' : ''}`}
                    placeholder="Your Name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`coquette-input ${errors.email ? 'border-red-300' : ''}`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
                
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className={`coquette-input ${errors.message ? 'border-red-300' : ''}`}
                    placeholder="Your message here..."
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="coquette-button w-full flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <FiSend className="mr-2" /> Send Message
                    </span>
                  )}
                </button>
                
                {submitStatus === 'success' && (
                  <p className="text-green-500 text-sm mt-2 text-center">
                    Message sent successfully!
                  </p>
                )}
                
                {submitStatus === 'error' && (
                  <p className="text-red-500 text-sm mt-2 text-center">
                    Failed to send message. Please try again later.
                  </p>
                )}
              </form>
            </motion.div>
            
            {/* Contact Info */}
            <motion.div 
              className="coquette-card"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-xl font-playfair mb-6">Connect With Me</h3>
              
              <div className="space-y-6">
                {/* Location */}
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-gray-600">Dehradun, Uttarakhand, India</p>
                </div>
                
                {/* Contact Links */}
                <div>
                  <h4 className="font-medium mb-3">Social Links</h4>
                  <div className="space-y-3">
                    <a 
                      href="mailto:aanushkagupta4@gmail.com" 
                      className="flex items-center text-gray-700 hover:text-rose-blush transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiMail className="mr-3" />
                      <span>aanushkagupta4@gmail.com</span>
                    </a>
                    
                    <a 
                      href="https://github.com/Anushkaguptaaaa" 
                      className="flex items-center text-gray-700 hover:text-rose-blush transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiGithub className="mr-3" />
                      <span>github.com/Anushkaguptaaaa</span>
                    </a>
                    
                    <a 
                      href="https://linkedin.com/in/anushkagupta04" 
                      className="flex items-center text-gray-700 hover:text-rose-blush transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiLinkedin className="mr-3" />
                      <span>linkedin.com/in/anushkagupta04</span>
                    </a>
                  </div>
                </div>
                
                {/* Phone */}
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <p className="text-gray-600">+91 9068946316</p>
                </div>
                
                {/* Decorative Element */}
                <div className="text-center mt-8">
                  <span className="text-4xl decorative-element">✨</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
