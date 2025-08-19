import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaPlay, FaPause } from './Icons';
import CountUp from 'react-countup';

function Hero({ onPlayAudio, isPlaying }) {
  const { t } = useTranslation();
  const heroBannerUrl = "/assets/images/hero-banner.png";
  const [startCounters, setStartCounters] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && !startCounters) {
        setStartCounters(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [startCounters]);

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h2>{t('hero_title')}</h2>
            <p>{t('hero_subtitle')}</p>
            <div className="hero-ctas">
              <a className="btn primary" href="#products">{t('hero_cta_browse')}</a>
              <button className="btn" onClick={onPlayAudio}>
                {isPlaying ? <FaPause /> : <FaPlay />}
                <span>{isPlaying ? t('hero_stop') : t('hero_welcome_message')}</span>
              </button>
            </div>
            
            <div className="achievements">
              <div className="achievement-item">
                <h3>
                  {startCounters ? <CountUp end={40} duration={2} /> : '0'}+
                </h3>
                <p>{t('hero_experience')}</p>
              </div>
              <div className="achievement-item">
                <h3>
                  {startCounters ? <CountUp end={20000} duration={2} /> : '0'}+
                </h3>
                <p>{t('hero_satisfied_client')}</p>
              </div>
              <div className="achievement-item">
                <h3>
                  {startCounters ? <CountUp end={500} duration={2} /> : '0'}+
                </h3>
                <p>{t('hero_brand')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-banner-container">
        <img src={heroBannerUrl} alt="AL SAEED Prestige Banner" className="hero-banner-image" />
      </div>
    </section>
  );
}

export default Hero;
