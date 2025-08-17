import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import VideoShowcase from './components/VideoShowcase';
import Services from './components/Services';
import Products from './components/Products';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FeaturedVideo from './components/FeaturedVideo';
import './styles.css';

function App() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'dark';
  });

  const audioSrc = "/assets/audio/welcome-audio.wav";

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  useLayoutEffect(() => {
    document.body.className = '';
    document.body.classList.add(`${theme}-mode`);
    localStorage.setItem('theme', theme);
  }, [theme]);
  
  // --- NEW: Active Link Highlighting Logic ---
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav a');

    const handleScroll = () => {
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 150) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // --- END NEW ---

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div 
      className="app-root" 
      style={{ backgroundImage: `url(/assets/images/background.jpg)` }}
    >
      <audio ref={audioRef} src={audioSrc} onEnded={() => setIsPlaying(false)} />
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        {/* Make sure your sections have IDs that match the nav links */}
        <section id="hero"><Hero onPlayAudio={togglePlay} isPlaying={isPlaying} /></section>
        <section id="why-us"><WhyUs /></section>
        <section id="services"><Services /></section>
        <VideoShowcase />
        <section id="products"><Products /></section>
        <section id="testimonials"><Testimonials /></section>
        <FeaturedVideo />
        <section id="faq"><FAQ /></section>
        <section id="blog"><Blog /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;