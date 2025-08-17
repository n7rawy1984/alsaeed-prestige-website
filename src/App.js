import React, { useState, useRef, useEffect } from 'react';
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
  
  // عند تحميل الصفحة، ابحث عن الثيم المحفوظ، وإلا استخدم 'dark'
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'dark';
  });

  const audioSrc = "/assets/audio/welcome-audio.wav";

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  // هذا الكود يعمل عند كل تغيير للثيم ليقوم بتطبيقه على الصفحة وحفظه
  useEffect(() => {
    document.body.className = '';
    document.body.classList.add(`${theme}-mode`);
    localStorage.setItem('theme', theme);
  }, [theme]);

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