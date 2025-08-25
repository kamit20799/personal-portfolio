import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMedium, FaInstagram, FaDownload } from 'react-icons/fa';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
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

  return (
    <section id="hero" className="hero">
      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p className="hero-greeting" variants={itemVariants}>
          Hello, I'm
        </motion.p>
        
        <motion.h1 className="hero-name" variants={itemVariants}>
          Amit Kumar
        </motion.h1>
        
        <motion.h2 className="hero-title" variants={itemVariants}>
          QA Engineer & Testing Specialist
        </motion.h2>
        
        <motion.p className="hero-description" variants={itemVariants}>
          Results-driven QA Engineer with 3+ years of experience in manual and automated testing. 
          I specialize in ensuring software quality through comprehensive testing strategies, 
          focusing on test automation, API testing, and continuous integration.
        </motion.p>
        
        <motion.div className="hero-cta" variants={itemVariants}>
          <motion.a 
            href="#contact" 
            className="btn btn-primary"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Let's Work Together
          </motion.a>
          <motion.a 
            href="/AmitResume.pdf" 
            className="btn btn-secondary"
            download
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaDownload /> Download Resume
          </motion.a>
        </motion.div>

        <motion.div className="social-links" variants={itemVariants}>
          <motion.a 
            href="https://github.com/kumaramit207999" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a 
            href="https://linkedin.com/in/kumaramit207999" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a 
            href="mailto:kumaramit207999@gmail.com"
            className="social-link"
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEnvelope />
          </motion.a>
          <motion.a 
            href="https://medium.com/@kumaramit20799"
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaMedium />
          </motion.a>
          <motion.a 
            href="https://www.instagram.com/kumaramit20799/"
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaInstagram />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;