import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const experiences = [
    {
      title: "Software Tester",
      company: "iMark Infotech Pvt. Ltd",
      period: "January 2024 - Present",
      location: "Chandigarh",
      type: "Current Role",
      achievements: [
        "Performed comprehensive manual testing for diverse web applications, ensuring functionality, reliability, and user experience.",
        "Created and executed detailed test cases for UI/UX, regression, and functional testing, ensuring complete test coverage.",
        "Identified and documented bugs, collaborating with the development team to resolve issues and improve overall software performance.",
        "Collaborated closely with stakeholders to gather requirements and ensure testing strategies aligned with business goals.",
        "Enhanced testing efficiency by implementing improvements in test case management and defect reporting processes."
      ]
    },
    {
      title: "Software Development Engineer in Test (SDET)",
      company: "Trimindtech Solutions",
      period: "August 2023 - December 2023",
      location: "Hyderabad",
      type: "Contract",
      achievements: [
        "Automated 100+ UAT test cases with the Robot Framework and Python, focusing on UI testing and Excel-based validations.",
        "Developed custom keywords using libraries like SeleniumLibrary, Faker, and RPA Framework - Excel for tailored test case automation.",
        "Read and processed large datasets with XLRD, enabling extensive automation of data validations.",
        "Assisted a 10-member team with framework setup, troubleshooting, and creating scalable testing solutions for complex scenarios.",
        "Pushed automation code to version control systems for review and successfully merged changes after feedback."
      ]
    },
    {
      title: "Software Development Engineer in Test (SDET)",
      company: "QASource",
      period: "March 2022 - July 2023",
      location: "Chandigarh",
      type: "Full-time",
      achievements: [
        "Designed and executed smoke, functional, and regression test cases to ensure robust application performance.",
        "Developed and maintained reusable automation frameworks, automating 100+ smoke and functional test cases with Cypress.io.",
        "Performed API testing using Postman, validating endpoints, request/response payloads, and API integrations.",
        "Performed API automation using Cypress.io, creating test scripts to validate API endpoints.",
        "Implemented BDD using Cucumber, writing Gherkin-based test scenarios to bridge communication between technical and non-technical teams."
      ]
    }
  ];

  return (
    <motion.section 
      id="experience" 
      className="section"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="container">
        <motion.div className="section-header" variants={cardVariants}>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            My journey in quality assurance, building reliable software through comprehensive testing
          </p>
        </motion.div>
      
        
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-item"
              variants={cardVariants}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <div className="experience-header">
                <div className="experience-icon">
                  <FaBriefcase />
                </div>
                <div className="experience-meta">
                  <span className="experience-badge">{exp.type}</span>
                </div>
              </div>
              
              <div className="experience-content">
                <h3 className="experience-title">{exp.title}</h3>
                <h4 className="experience-company">{exp.company}</h4>
                
                <div className="experience-info">
                  <div className="info-item">
                    <FaCalendarAlt />
                    <span>{exp.period}</span>
                  </div>
                  <div className="info-item">
                    <FaMapMarkerAlt />
                    <span>{exp.location}</span>
                  </div>
                </div>
                
                <div className="experience-achievements">
                  <h5>Key Achievements</h5>
                  <ul>
                    {exp.achievements.map((achievement, achIndex) => (
                      <motion.li 
                        key={achIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ delay: index * 0.1 + achIndex * 0.05 }}
                      >
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
