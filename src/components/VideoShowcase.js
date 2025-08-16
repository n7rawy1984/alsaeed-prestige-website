import React, { useRef, useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from './Icons';

const videos = [
  { 
    src: "/assets/videos/intro-1.mp4", 
    poster: "/assets/images/video-poster-1.jpg",
    isIntro: true
  },
  { 
    src: "/assets/videos/intro-2.mp4", 
    poster: "/assets/images/video-poster-2.jpg" 
  },
  { 
    src: "/assets/videos/intro-3.mp4", 
    poster: "/assets/images/video-poster-3.jpg" 
  }
];

function VideoShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasIntroPlayed, setHasIntroPlayed] = useState(false);
  const videoRef = useRef(null);

  // تشغيل الفيديو الأول عند الـ hover فقط في المرة الأولى
  const handleMouseEnter = () => {
    if (currentIndex === 0 && !hasIntroPlayed) {
      videoRef.current.play()
        .then(() => setHasIntroPlayed(true))
        .catch(error => console.log("Autoplay failed:", error));
    }
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? videos.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === videos.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    // إعادة تعيين حالة التشغيل عند تغيير الفيديو
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [currentIndex]);

  return (
    <section id="showcase" className="showcase">
      <div 
        className="slider-container"
        onMouseEnter={handleMouseEnter}
      >
        <div className="slider-arrow left" onClick={goToPrevious}>
          <FaChevronLeft />
        </div>
        <div className="slider-arrow right" onClick={goToNext}>
          <FaChevronRight />
        </div>
        
        <video 
          ref={videoRef}
          key={videos[currentIndex].src}
          className="slide-video"
          poster={videos[currentIndex].poster}
        //   muted={currentIndex === 0}
          playsInline
          controls={currentIndex !== 0 || hasIntroPlayed}
        >
          <source src={videos[currentIndex].src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}

export default VideoShowcase;