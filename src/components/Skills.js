import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
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

  const skills = [
    {
      category: "Testing Frameworks",
      items: [
        "Cypress.io",
        "Selenium WebDriver",
        "Robot Framework",
        "Playwright",
        "TestNG",
        "Cucumber BDD"
      ]
    },
    {
      category: "Programming Languages",
      items: [
        "JavaScript",
        "Python",
        "Java",
        "C/C++",
        "TypeScript"
      ]
    },
    {
      category: "API Testing",
      items: [
        "Postman",
        "REST API Testing",
        "GraphQL",
        "API Automation",
        "JSON/XML Validation"
      ]
    },
    {
      category: "Testing Methodologies",
      items: [
        "Manual Testing",
        "Automated Testing",
        "Regression Testing",
        "Performance Testing",
        "Integration Testing",
        "User Acceptance Testing"
      ]
    },
    {
      category: "Tools & Technologies",
      items: [
        "JIRA",
        "TestRail",
        "Maven",
        "Apache JMeter",
        "Git/GitHub",
        "CI/CD Pipelines"
      ]
    },
    {
      category: "Databases",
      items: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "SQL Queries"
      ]
    }
  ];

  return (
    <motion.section 
      id="skills" 
      className="section"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="container">
        <motion.div className="section-header" variants={itemVariants}>
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            A comprehensive toolkit for ensuring software quality and reliability
          </p>
        </motion.div>
        
        <div className="skills-grid">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              className="skill-group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="skill-category-title">{skillGroup.category}</h3>
              <div className="skill-tags">
                {skillGroup.items.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="skill-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ 
                      delay: index * 0.1 + skillIndex * 0.05,
                      duration: 0.3
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
