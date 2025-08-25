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
      icon: "🛠️",
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
      icon: "💻",
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
      icon: "🔗",
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
      icon: "📋",
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
      icon: "⚙️",
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
      icon: "🗄️",
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
        </motion.div>
        
        <div className="skills-grid-modern">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              className="skill-card-modern"
              variants={itemVariants}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <div className="skill-card-header">
                <div className="skill-icon">{skillGroup.icon}</div>
                <h3 className="skill-title-modern">{skillGroup.category}</h3>
              </div>
              
              <div className="skill-items-modern">
                {skillGroup.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-item-modern"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: index * 0.1 + skillIndex * 0.05,
                      duration: 0.4,
                      ease: "easeOut"
                    }}
                    whileHover={{ 
                      x: 4,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className="skill-dot"></div>
                    <span className="skill-name">{skill}</span>
                  </motion.div>
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
