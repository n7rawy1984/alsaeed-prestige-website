import React from 'react';
import { FaPlay, FaPause } from './Icons';

function Hero({ onPlayAudio, isPlaying }) {
  const heroBannerUrl = "/assets/images/hero-banner.png";

  return (
    // The section is now split into two parts: text content and the banner image
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h2>قمة الأداء، فخامة الاختيار</h2>
            <p>وجهتك الأولى للإطارات والجنوط الفاخرة في دبي. اكتشف مجموعتنا الحصرية التي تضمن لك قيادة آمنة وأداءً استثنائياً.</p>
            <div className="hero-ctas">
              <a className="btn primary" href="#products">تصفح المنتجات</a>
              <button className="btn" onClick={onPlayAudio}>
                {isPlaying ? <FaPause /> : <FaPlay />}
                <span>{isPlaying ? 'إيقاف' : 'الرسالة الترحيبية'}</span>
              </button>
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