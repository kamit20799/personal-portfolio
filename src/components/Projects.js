import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaExternalLinkAlt, FaCertificate, FaPlay, FaGraduationCap } from 'react-icons/fa';

const Projects = () => {
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

  const cardVariants = {
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

  const projects = [
    {
      title: "The Complete Cypress 12+ Course: From Zero to Expert!",
      platform: "Udemy",
      type: "Course Completion",
      description: "Comprehensive course covering Cypress automation framework from basics to advanced concepts including API testing, custom commands, and CI/CD integration.",
      skills: ["Cypress.io", "JavaScript", "API Testing", "CI/CD"],
      icon: <FaPlay />,
      link: "#",
      category: "certification"
    },
    {
      title: "Robot Framework Test Automation",
      platform: "LinkedIn Learning",
      type: "Professional Course",
      description: "Mastered Robot Framework for test automation, including keyword-driven testing, test libraries, and reporting mechanisms.",
      skills: ["Robot Framework", "Python", "Selenium", "Test Automation"],
      icon: <FaGraduationCap />,
      link: "#",
      category: "certification"
    },
    {
      title: "Learning Git and GitHub",
      platform: "LinkedIn Learning",
      type: "Version Control",
      description: "Comprehensive understanding of Git version control, GitHub workflows, branching strategies, and collaborative development practices.",
      skills: ["Git", "GitHub", "Version Control", "Collaboration"],
      icon: <FaCertificate />,
      link: "#",
      category: "certification"
    }
  ];

  return (
    <motion.section 
      id="projects" 
      className="section"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="container">
        <motion.div className="section-header" variants={cardVariants}>
          <h2 className="section-title">Projects & Certifications</h2>
          <p className="section-subtitle">
            Professional certifications and continuous learning in quality assurance and testing automation
          </p>
        </motion.div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={cardVariants}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <div className="project-header">
                <div className="project-icon">
                  {project.icon}
                </div>
                <div className="project-meta">
                  <span className="project-platform">{project.platform}</span>
                  <span className="project-type">{project.type}</span>
                </div>
              </div>
              
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-skills">
                {project.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="project-skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
              
              <motion.a 
                href={project.link}
                className="project-link"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaExternalLinkAlt />
                View Certificate
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
