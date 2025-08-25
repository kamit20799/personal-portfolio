import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaChevronLeft, FaChevronRight, FaMedium, FaBlog } from 'react-icons/fa';

const Articles = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  // Technical Articles & Insights
  const articles = [
    {
      title: "The Perfect Team: How AI and Humans Together Strengthen Cybersecurity",
      description: "Exploring the synergy between artificial intelligence and human expertise in building robust cybersecurity defense systems.",
      platform: "Medium",
      url: "https://medium.com/@kumaramit20799/the-perfect-team-how-ai-and-humans-together-strengthen-cybersecurity-15f4416dadd7",
      tags: ["AI", "Cybersecurity", "Human-AI Collaboration"]
    },
    {
      title: "The Dark Side of AI in Cybersecurity: Ethical Dilemmas and Tough Challenges",
      description: "Analyzing the ethical concerns and challenges that arise when implementing AI solutions in cybersecurity frameworks.",
      platform: "Medium",
      url: "https://medium.com/@kumaramit20799/the-dark-side-of-ai-in-cybersecurity-ethical-dilemmas-and-tough-challenges-772061533ccd",
      tags: ["AI Ethics", "Cybersecurity", "Risk Management"]
    },
    {
      title: "The Best AI-Powered Tools Revolutionizing Cybersecurity in 2025",
      description: "A comprehensive review of cutting-edge AI tools that are transforming the cybersecurity landscape in 2025.",
      platform: "Medium",
      url: "https://medium.com/@kumaramit20799/the-best-ai-powered-tools-revolutionizing-cybersecurity-in-2025-bc0aad1f3ed8",
      tags: ["AI Tools", "Cybersecurity", "Technology Review"]
    },
    {
      title: "How AI is Transforming Cybersecurity: A Beginner's Guide",
      description: "An introductory guide to understanding how artificial intelligence is reshaping cybersecurity practices and defense strategies.",
      platform: "Medium",
      url: "https://medium.com/@kumaramit20799/how-ai-is-transforming-cybersecurity-a-beginners-guide-4b28e9e49d1a",
      tags: ["AI", "Cybersecurity", "Beginner Guide"]
    },
    {
      title: "The Future of Web3: Are We Ready for the Decentralized Revolution?",
      description: "Examining the potential future of Web3 technology and whether society is prepared for a fully decentralized internet.",
      platform: "Medium",
      url: "https://medium.com/@kumaramit20799/part-vii-the-future-of-web3-are-we-ready-for-the-decentralized-revolution-09ce9a47e72e",
      tags: ["Web3", "Decentralization", "Future Tech"]
    },
    {
      title: "How DeFi is Revolutionizing Finance in the Web3 Era",
      description: "Deep dive into Decentralized Finance (DeFi) and its transformative impact on traditional financial systems.",
      platform: "Block Magnates",
      url: "https://blog.blockmagnates.com/part-vi-how-defi-is-revolutionizing-finance-in-the-web3-era-760fc02f96a8",
      tags: ["DeFi", "Web3", "Finance"]
    },
    {
      title: "The Role of NFTs in Web3",
      description: "Understanding the significance and applications of Non-Fungible Tokens in the Web3 ecosystem.",
      platform: "Block Magnates",
      url: "https://blog.blockmagnates.com/part-v-the-role-of-nfts-in-web3-77ac10d6544f",
      tags: ["NFTs", "Web3", "Digital Assets"]
    },
    {
      title: "Wallets and Transactions in Web3",
      description: "A comprehensive guide to understanding digital wallets and transaction mechanisms in the Web3 environment.",
      platform: "Medium",
      url: "https://medium.com/@kumaramit20799/part-iv-wallets-and-transactions-in-web3-f1a6b7075a28",
      tags: ["Web3", "Wallets", "Transactions"]
    },
    {
      title: "What are Decentralized Applications (DApps)?",
      description: "Exploring the concept, architecture, and real-world applications of Decentralized Applications in Web3.",
      platform: "Medium",
      url: "https://medium.com/@kumaramit20799/part-iii-what-are-decentralized-applications-dapps-710af4f10968",
      tags: ["DApps", "Web3", "Decentralization"]
    },
    {
      title: "The Building Blocks of Web3",
      description: "Understanding the fundamental technologies and concepts that form the foundation of Web3 infrastructure.",
      platform: "Block Magnates",
      url: "https://blog.blockmagnates.com/part-ii-the-building-blocks-of-web3-efe447c70d96",
      tags: ["Web3", "Blockchain", "Infrastructure"]
    },
    {
      title: "Discover Web3 in Simple Terms",
      description: "A beginner-friendly introduction to Web3 technology, explaining complex concepts in easy-to-understand language.",
      platform: "Medium",
      url: "https://medium.com/@kumaramit20799/discover-web3-in-simple-terms-54e1925aecd9",
      tags: ["Web3", "Beginner Guide", "Blockchain"]
    },
    {
      title: "5 Game-Changing No-Code Startup Success Stories You Need to Know",
      description: "Real-world success stories of startups that leveraged no-code platforms to build and scale their businesses.",
      platform: "Medium",
      url: "https://medium.com/@kumaramit20799/5-game-changing-no-code-startup-success-stories-you-need-to-know-bca94ecc48ad",
      tags: ["No-Code", "Startups", "Success Stories"]
    },
    {
      title: "5 Game-Changing No-Code Tools to Transform Your Ideas in 2025",
      description: "A curated list of the most powerful no-code tools that can help you bring your ideas to life without programming.",
      platform: "Medium",
      url: "https://medium.com/@kumaramit20799/5-game-changing-no-code-tools-to-transform-your-ideas-in-2025-9806f72b0a47",
      tags: ["No-Code", "Tools", "Productivity"]
    },
    {
      title: "The Rise of No-Code and Low-Code Platforms: A Game Changer for Non-Developers",
      description: "Examining how no-code and low-code platforms are democratizing software development and empowering non-technical users.",
      platform: "Medium",
      url: "https://medium.com/@kumaramit20799/the-rise-of-no-code-and-low-code-platforms-a-game-changer-for-non-developers-43afdd8ac0c9",
      tags: ["No-Code", "Low-Code", "Development"]
    }
  ];

  const articlesPerPage = 3;
  const totalPages = Math.ceil(articles.length / articlesPerPage);
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getCurrentArticles = () => {
    const startIndex = currentIndex * articlesPerPage;
    return articles.slice(startIndex, startIndex + articlesPerPage);
  };

  return (
    <motion.section 
      id="articles" 
      className="section"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="container">
        <motion.div className="section-header" variants={cardVariants}>
          <h2 className="section-title">Technical Articles & Insights</h2>
        </motion.div>
        
        <div className="articles-carousel">
          <div className="carousel-container">
            <button
              className="carousel-btn carousel-btn-prev"
              onClick={prevSlide}
              type="button"
            >
              <FaChevronLeft />
            </button>

            <div className="articles-grid">
              {getCurrentArticles().map((article, index) => (
                <motion.div
                  key={`${currentIndex}-${index}`}
                  className="article-card"
                  variants={cardVariants}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -3 }}
                >
                  <div className="article-header">
                    <div className="platform-badge">
                      {article.platform === "Medium" ? <FaMedium /> : <FaBlog />}
                      <span>{article.platform}</span>
                    </div>
                  </div>
                  
                  <h3 className="article-title">{article.title}</h3>
                  <div className="article-content">
                    <p className="article-description">
                      {article.description}...{' '}
                      <motion.a 
                        href="https://medium.com/@kumaramit20799"
                        className="article-read-more"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Read More →
                      </motion.a>
                    </p>
                  </div>
                  
                  <div className="article-tags">
                    {article.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="article-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <button
              className="carousel-btn carousel-btn-next"
              onClick={nextSlide}
              type="button"
            >
              <FaChevronRight />
            </button>
          </div>

          <div className="carousel-indicators">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
        
        <motion.div className="articles-cta" variants={cardVariants}>
          <a 
            href="https://medium.com/@kumaramit20799"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <FaMedium />
            View All Articles
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Articles;