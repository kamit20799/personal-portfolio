import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const contactMethods = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "kumaramit207999@gmail.com",
      href: "mailto:kumaramit207999@gmail.com"
    },
    {
      icon: <FaPhone />,
      label: "Phone",
      value: "+91 8757126629",
      href: "tel:+918757126629"
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://linkedin.com/in/kumaramit207999"
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      value: "View my projects",
      href: "https://github.com"
    }
  ];

  return (
    <motion.section 
      id="contact" 
      className="section"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="container">
        <motion.div className="section-header" variants={itemVariants}>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle">
            Ready to improve your software quality? Let's discuss how I can help your team 
            deliver reliable, high-quality software solutions.
          </p>
        </motion.div>
        
        <div className="contact-content">
          <motion.div className="contact-methods" variants={itemVariants}>
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.href}
                className="contact-method"
                target={method.href.startsWith('http') ? '_blank' : '_self'}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : ''}
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="contact-icon">{method.icon}</div>
                <div className="contact-info">
                  <h3>{method.label}</h3>
                  <p>{method.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div className="contact-form-wrapper" variants={itemVariants}>
            <h3 className="form-title">Send me a message</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-field">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project or how I can help..."
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="btn btn-primary form-submit"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaPaperPlane />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
