import React, { useState, useEffect } from 'react';
import { FaPlay, FaPause } from './Icons';
import CountUp from 'react-countup'; // ستحتاج إلى تثبيت هذه الحزمة

function Hero({ onPlayAudio, isPlaying }) {
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
            
            <div className="achievements">
              <div className="achievement-item">
                <h3>
                  {startCounters ? <CountUp end={40} duration={2} /> : '0'}+
                </h3>
                <p>سنوات خبرة</p>
              </div>
              <div className="achievement-item">
                <h3>
                  {startCounters ? <CountUp end={20000} duration={2} /> : '0'}+
                </h3>
                <p>عميل راضٍ</p>
              </div>
              <div className="achievement-item">
                <h3>
                  {startCounters ? <CountUp end={500} duration={2} /> : '0'}+
                </h3>
                <p>علامة تجارية</p>
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