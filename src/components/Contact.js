import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaLinkedin, FaGithub, FaMedium, FaInstagram, FaPaperPlane } from 'react-icons/fa';

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

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length === 0) {
      // Form is valid, submit it
      console.log('Form submitted:', formData);
      
      // Simulate form submission
      setTimeout(() => {
        alert('Thank you! Your message has been sent successfully.');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        setIsSubmitting(false);
      }, 1000);
    } else {
      // Form has errors
      setErrors(formErrors);
      setIsSubmitting(false);
    }
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
      icon: <FaLinkedin />,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/kumaramit207999/"
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      value: "View my projects",
      href: "https://github.com/kamit20799"
    },
    {
      icon: <FaMedium />,
      label: "Medium",
      value: "Read my articles",
      href: "https://medium.com/@kumaramit20799"
    },
    {
      icon: <FaInstagram />,
      label: "Instagram",
      value: "View my profile",
      href: "https://www.instagram.com/kumaramit20799/"
    }
  ];

  return (
    <motion.section 
      id="contact" 
      className="section"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container">
        <motion.div className="section-header" variants={itemVariants}>
          <h2 className="section-title">Let's Work Together</h2>
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
                    className={errors.name ? 'error' : ''}
                    required
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your email"
                    className={errors.email ? 'error' : ''}
                    required
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
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
                  placeholder="Your message"
                  className={errors.message ? 'error' : ''}
                  required
                ></textarea>
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>
              <motion.button
                type="submit"
                className="btn btn-primary form-submit"
                disabled={isSubmitting}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaPaperPlane />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
