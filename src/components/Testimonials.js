import React, { useRef, useState } from 'react';
import { FaQuoteRight, FaPlay, FaPause } from './Icons';

const testimonials = [
  {
    id: 1,
    name: 'سالم مبارك',
    role: 'مالك سيارة رينج روفر',
    content: 'أفضل خدمة في دبي، فريق محترف ومنتجات أصلية بأسعار مناسبة.',
    rating: 5,
    video: "/assets/videos/testimonial1.mp4",
    poster: "/assets/images/testimonial1-poster.jpg"
  },
  {
    id: 2,
    name: 'سهيل جاسم',
    role: 'مالكة سيارة مرسيدس',
    content: 'نصيحتهم ساعدتني في اختيار الإطار المناسب لسيارتي، شكراً لكم!',
    rating: 4,
    video: "/assets/videos/testimonial2.mp4",
    poster: "/assets/images/testimonial2-poster.jpg"
  },
  {
    id: 3,
    name: 'سلطان عبدالله',
    role: 'مالك سيارة بورش',
    content: 'الخدمة سريعة والتركيب دقيق، أنصح الجميع بتجربة خدماتهم.',
    rating: 5,
    video: "/assets/videos/testimonial3.mp4",
    poster: "/assets/images/testimonial3-poster.jpg"
  }
];

function Testimonials() {
  const videoRefs = useRef([]);
  const [playingIndex, setPlayingIndex] = useState(null);

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
        <h3 className="section-title"><span>آراء عملائنا</span></h3>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="media-container">
                {testimonial.video && (
                  <div className="video-wrapper">
                    <video
                      ref={el => videoRefs.current[index] = el}
                      onPlay={() => handleVideoPlay(index)}
                      poster={testimonial.poster}
                      className="testimonial-video"
                    >
                      <source src={testimonial.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <button 
                      className="video-control"
                      onClick={() => togglePlayPause(index)}
                    >
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