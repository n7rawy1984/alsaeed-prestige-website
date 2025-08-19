import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';
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

// --- NEW: Define audio sources for both languages ---
const audioSources = {
  ar: "/assets/audio/welcome-audio.wav",       // Your existing Arabic audio file
  en: "/assets/audio/welcome-audio-en.wav"    // The new English audio file
};
// --- END NEW ---

function App() {
  const { i18n } = useTranslation();
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'dark';
  });

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  useLayoutEffect(() => {
    document.body.className = '';
    document.body.classList.add(`${theme}-mode`);
    localStorage.setItem('theme', theme);
  }, [theme]);
  
  useEffect(() => {
    const sections = document.querySelectorAll('div[id]');
    const navLinks = document.querySelectorAll('.nav a, .nav-mobile a');
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

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    // Stop audio when language changes
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  }, [i18n.language]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(error => console.log("Audio play failed:", error));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div 
      className="app-root" 
      style={{ backgroundImage: `url(/assets/images/background.jpg)` }}
    >
      {/* --- MODIFIED: Audio player now dynamically selects the language source --- */}
      <audio 
        ref={audioRef} 
        src={audioSources[i18n.language]} 
        key={i18n.language} // This key is crucial to force re-render on language change
        onEnded={() => setIsPlaying(false)} 
      />
      {/* --- END MODIFIED --- */}

      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero onPlayAudio={togglePlay} isPlaying={isPlaying} />
        <WhyUs />
        <Services />
        <VideoShowcase />
        <Products />
        <Testimonials />
        <FeaturedVideo />
        <FAQ />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;