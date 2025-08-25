import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  const stats = [
    { number: "3+", label: "Years\nExperience" },
    { number: "50+", label: "Projects\nTested" },
    { number: "100%", label: "Bug\nReduction" },
    { number: "10+", label: "Tools\nMastered" }
  ];

  return (
    <motion.section 
      id="about" 
      className="section"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container">
        <motion.div className="section-header" variants={itemVariants}>
          <h2 className="section-title">About Me</h2>
        </motion.div>
        
        <div className="about-content">
          <motion.div className="about-text" variants={itemVariants}>
            <p className="about-description">
              With over 3 years of experience in quality assurance, I specialize in both manual and automated testing processes. My expertise spans across functional testing, regression testing, API testing, and test automation using modern frameworks like Cypress.io, Selenium, and Robot Framework. I have successfully delivered high-quality software solutions while working with diverse teams and technologies.
            </p>
            
            <p className="about-description">
              I have a proven track record of identifying critical bugs, improving test coverage by 45%, and implementing efficient CI/CD pipelines for automated testing. My experience includes BDD methodologies using Cucumber, comprehensive API testing with Postman, and performance testing with JMeter. I'm passionate about staying updated with the latest testing tools and contributing to the delivery of robust, user-centric software products.
            </p>
          </motion.div>

          <motion.div className="about-stats" variants={itemVariants}>
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="stat-card"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
