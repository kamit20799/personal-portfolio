import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    // Generate random bubbles
    const generateBubbles = () => {
      const newBubbles = [];
      for (let i = 0; i < 15; i++) {
        newBubbles.push({
          id: i,
          size: Math.random() * 60 + 20, // 20-80px
          x: Math.random() * 100, // 0-100%
          y: Math.random() * 100, // 0-100%
          duration: Math.random() * 20 + 10, // 10-30 seconds
          delay: Math.random() * 5, // 0-5 seconds delay
          opacity: Math.random() * 0.3 + 0.1, // 0.1-0.4 opacity
        });
      }
      setBubbles(newBubbles);
    };

    generateBubbles();
  }, []);

  return (
    <div className="animated-background">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="bubble"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            opacity: bubble.opacity,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            delay: bubble.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Additional floating particles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.random() * 30 - 15, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: Math.random() * 15 + 8,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;