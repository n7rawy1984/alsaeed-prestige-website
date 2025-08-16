import React, { useState, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import VideoShowcase from './components/VideoShowcase';
import Services from './components/Services';
import Products from './components/Products';
import WhyUs from './components/WhyUs'; // جديد
import Testimonials from './components/Testimonials'; // معدل
import FAQ from './components/FAQ'; // جديد
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FeaturedVideo from './components/FeaturedVideo';
import './styles.css';

function App() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioSrc = "/assets/audio/welcome-audio.wav";

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
      <Header />
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