import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p className="footer-text">
              Built and designed by <span className="footer-name">Amit Kumar</span> with{' '}
              <FaHeart className="footer-heart" /> using React
            </p>
            <p className="footer-copyright">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <motion.button
        className="back-to-top"
        onClick={scrollToTop}
        animate={{
          opacity: showBackToTop ? 1 : 0,
          scale: showBackToTop ? 1 : 0.8,
          y: showBackToTop ? 0 : 20
        }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{
          pointerEvents: showBackToTop ? 'auto' : 'none'
        }}
      >
        <FaArrowUp />
      </motion.button>
    </>
  );
};

export default Footer;