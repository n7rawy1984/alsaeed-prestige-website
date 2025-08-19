import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaQuoteRight, FaPlay, FaPause } from './Icons';

function Testimonials() {
  const { t } = useTranslation();
  const videoRefs = useRef([]);
  const [playingIndex, setPlayingIndex] = useState(null);

  const testimonials = [
    { id: 1, name: t('testimonial_1_name'), role: t('testimonial_1_role'), content: t('testimonial_1_content'), rating: 5, video: "/assets/videos/testimonial1.mp4", poster: "/assets/images/testimonial1-poster.jpg" },
    { id: 2, name: t('testimonial_2_name'), role: t('testimonial_2_role'), content: t('testimonial_2_content'), rating: 4, video: "/assets/videos/testimonial2.mp4", poster: "/assets/images/testimonial2-poster.jpg" },
    { id: 3, name: t('testimonial_3_name'), role: t('testimonial_3_role'), content: t('testimonial_3_content'), rating: 5, video: "/assets/videos/testimonial3.mp4", poster: "/assets/images/testimonial3-poster.jpg" }
  ];

  const handleVideoPlay = (index) => {
    videoRefs.current.forEach((video, i) => {
      if (i !== index && video) {
        video.pause();
      }
    });
    setPlayingIndex(index);
  };

  const togglePlayPause = (index) => {
    const video = videoRefs.current[index];
    if (video.paused) {
      video.play();
      handleVideoPlay(index);
    } else {
      video.pause();
      setPlayingIndex(null);
    }
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h3 className="section-title"><span>{t('testimonials_title')}</span></h3>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="media-container">
                {testimonial.video && (
                  <div className="video-wrapper">
                    <video ref={el => videoRefs.current[index] = el} onPlay={() => handleVideoPlay(index)} poster={testimonial.poster} className="testimonial-video" playsInline>
                      <source src={testimonial.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <button className="video-control" onClick={() => togglePlayPause(index)}>
                      {playingIndex === index ? <FaPause /> : <FaPlay />}
                    </button>
                  </div>
                )}
                <div className="testimonial-content">
                  <FaQuoteRight className="quote-icon" />
                  <p>{testimonial.content}</p>
                </div>
              </div>
              <div className="testimonial-meta">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < testimonial.rating ? 'filled' : ''}>★</span>
                  ))}
                </div>
                <h4>{testimonial.name}</h4>
                <p className="role">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
