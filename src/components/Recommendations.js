import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaQuoteLeft, FaLinkedin } from 'react-icons/fa';

const Recommendations = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const truncateText = (text, maxLength = 150) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
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

  const recommendations = [
    {
      name: "Shivam Kumar",
      title: "Relativity Production Analyst",
      company: "eDiscovery | Data Processing",
      relationship: "College Friend & Study Partner",
      text: "Amit and I were inseparable in college—we coded together, played sports, and even pulled off some epic events. He's a genius when it comes to coding, always finding the smartest solutions and making it look easy. But he's not just about the tech; Amit knows how to bring people together and make things happen. He organized hackathons that were next-level, managing everything like a pro and making sure everyone had a blast. Honestly, if you need someone who's not only smart and skilled but also a great friend and leader, Amit's your guy!",
      linkedinUrl: "https://www.linkedin.com/in/shivam-kumar"
    },
    {
      name: "Raj Kamal", 
      title: "Software Engineer",
      company: "QASource",
      relationship: "Former Colleague",
      text: "I've had the pleasure of working with Amit Kumar, and I can't say enough good things about him. His skills as an Automation Engineer really boosted our QA processes. Amit is not just great with automation tools like Cypress or Selenium but also constantly stays on top of the latest updates, sharing new tricks and tips with the team. He's always willing to help out and is genuinely passionate about what he does. I highly recommend Amit for any automation role—he's a true asset to any team!",
      linkedinUrl: "https://www.linkedin.com/in/raj-kamal"
    }
  ];

  return (
    <motion.section 
      id="recommendations" 
      className="section"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container">
        <motion.div className="section-header" variants={cardVariants}>
          <h2 className="section-title">Professional Recommendations</h2>
        </motion.div>
        
        <div className="recommendations-grid">
          {recommendations.map((rec, index) => (
            <motion.div
              key={index}
              className="recommendation-card"
              variants={cardVariants}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <div className="recommendation-header">
                <div className="quote-icon">
                  <FaQuoteLeft />
                </div>
              </div>
              
              <p className="recommendation-text">
                {truncateText(rec.text)}
                {rec.text.length > 150 && (
                  <a 
                    href="https://www.linkedin.com/in/kumaramit207999/"
                    className="read-more-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {' '}Read more on LinkedIn
                  </a>
                )}
              </p>
              
              <div className="recommendation-footer">
                <div className="recommender-info">
                  <h4 className="recommender-name">{rec.name}</h4>
                  <p className="recommender-title">{rec.title}</p>
                  <p className="recommender-company">{rec.company}</p>
                  <span className="relationship-badge">{rec.relationship}</span>
                </div>
                <a 
                  href="https://www.linkedin.com/in/kumaramit207999/"
                  className="linkedin-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Recommendations;