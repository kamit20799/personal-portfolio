import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [activeCard, setActiveCard] = React.useState(0);
  const [progressPercent, setProgressPercent] = React.useState(0);
  const [filledDots, setFilledDots] = React.useState([false, false, false]);

  React.useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Calculate progress and update state
          const newProgress = getTimelineProgress();
          setProgressPercent(newProgress);
          
          // Find which card is currently active and calculate dot states
          const timelineItems = document.querySelectorAll('.timeline-item');
          const viewportCenter = window.scrollY + window.innerHeight / 2;
          
          let newActiveCard = 0;
          const newFilledDots = [false, false, false];
          
          // Check if experience section is in view
          const experienceSection = document.getElementById('experience');
          const isExperienceInView = experienceSection && 
            experienceSection.getBoundingClientRect().top < window.innerHeight && 
            experienceSection.getBoundingClientRect().bottom > 0;
          
          if (isExperienceInView) {
            timelineItems.forEach((item, index) => {
              const itemRect = item.getBoundingClientRect();
              const itemCenter = itemRect.top + itemRect.height / 3 + window.scrollY;
              
              if (viewportCenter >= itemCenter) {
                newActiveCard = index;
              }
            });
            
            // Tie dot highlighting directly to progress percentage with strict thresholds
            // Only highlight dots when progress bar has actually reached their positions
            const strictThresholds = [35, 70, 95]; // Very strict thresholds
            
            // Only highlight if we have meaningful progress and section is well in view
            if (newProgress > 10) {
              strictThresholds.forEach((threshold, index) => {
                if (newProgress >= threshold) {
                  newFilledDots[index] = true;
                }
              });
            }
          }
          
          setActiveCard(newActiveCard);
          setFilledDots(newFilledDots);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate progress percentage based on timeline dots positions
  const getTimelineProgress = () => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    if (!timelineItems.length) return 0;
    
    const viewportCenter = window.scrollY + window.innerHeight / 2;
    
    // Get first and last timeline item positions
    const firstItem = timelineItems[0].getBoundingClientRect();
    const lastItem = timelineItems[timelineItems.length - 1].getBoundingClientRect();
    
    const startPoint = firstItem.top + firstItem.height / 3 + window.scrollY;
    const endPoint = lastItem.top + lastItem.height / 3 + window.scrollY;
    
    if (viewportCenter < startPoint) return 0;
    if (viewportCenter > endPoint) return 100;
    
    const progress = ((viewportCenter - startPoint) / (endPoint - startPoint)) * 100;
    return Math.min(Math.max(progress, 0), 100);
  };


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { 
      x: -100, 
      opacity: 0,
      scale: 0.8,
      rotateY: -15
    },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    }
  };

  const experiences = [
    {
      title: "Software Tester",
      company: "iMark Infotech Pvt. Ltd",
      period: "January 2024 - Present",
      location: "Chandigarh",
      type: "Full-time",
      summary: "Comprehensive manual testing for web applications with complete test coverage",
      keyPoints: [
        "Manual testing & bug identification",
        "Test case management & execution", 
        "Stakeholder collaboration"
      ]
    },
    {
      title: "Software Development Engineer in Test",
      company: "Trimindtech Solutions",
      period: "August 2023 - December 2023",
      location: "Hyderabad",
      type: "Contract",
      summary: "Automated 100+ UAT test cases using Robot Framework and Python",
      keyPoints: [
        "Robot Framework automation",
        "Excel data validation",
        "Team framework support"
      ]
    },
    {
      title: "Software Development Engineer in Test",
      company: "QASource",
      period: "March 2022 - July 2023",
      location: "Chandigarh",
      type: "Full-time",
      summary: "Developed automation frameworks and performed comprehensive testing",
      keyPoints: [
        "Cypress.io automation",
        "API testing with Postman",
        "BDD with Cucumber"
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
      animate="visible"
    >
      <div className="container">
        <motion.div className="section-header" variants={cardVariants}>
          <h2 className="section-title">Professional Experience</h2>
        </motion.div>
      
        <div className="experience-timeline-modern">
          <div className="timeline-line">
            <motion.div 
              className="timeline-progress"
              initial={{ height: "0%" }}
              animate={{ 
                height: inView ? `${progressPercent}%` : "0%" 
              }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 30,
                mass: 0.8,
                restDelta: 0.001
              }}
            />
            
          </div>
          
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            
            return (
              <div
                key={index}
                className={`timeline-item ${isLeft ? 'timeline-left' : 'timeline-right'}`}
              >
                <motion.div 
                  className={`timeline-dot ${filledDots[index] ? 'filled' : ''} ${activeCard === index ? 'active' : ''}`}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: 1
                  }}
                  transition={{ 
                    duration: 0.5,
                    ease: "easeOut"
                  }}
                >
                  <FaBriefcase />
                </motion.div>
                
                <div 
                  className="timeline-card"
                >
                <div className="timeline-badge">{exp.type}</div>
                
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3 className="timeline-title">{exp.title}</h3>
                    <h4 className="timeline-company">{exp.company}</h4>
                  </div>
                  
                  <div className="timeline-meta">
                    <div className="meta-item">
                      <FaCalendarAlt />
                      <span>{exp.period}</span>
                    </div>
                    <div className="meta-item">
                      <FaMapMarkerAlt />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  <p className="timeline-summary">{exp.summary}</p>
                  
                  <div className="timeline-skills">
                    {exp.keyPoints.map((point, pointIndex) => (
                      <span
                        key={pointIndex}
                        className="timeline-skill-tag"
                      >
                        {point}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
