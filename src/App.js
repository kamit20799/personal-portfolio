import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Recommendations from './components/Recommendations';
import Articles from './components/Articles';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import './styles/professional.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <AnimatedBackground />
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Recommendations />
        <Articles />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;