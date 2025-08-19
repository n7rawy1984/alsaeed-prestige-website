import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaPlay, FaPause } from './Icons';

function FeaturedVideo() {
  const { t } = useTranslation();
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const videoData = {
    src: "/assets/videos/featured-video.mp4",
    poster: "/assets/images/featured-video-poster.jpg"
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch(error => {
        console.log("Play failed:", error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="featured-video-section">
      <div className="container">
        <h3 className="section-title"><span>{t('featured_video_title')}</span></h3>
        <div 
          className="featured-video-container"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="video-frame">
            <video
              ref={videoRef}
              className="featured-video"
              poster={videoData.poster}
              loop
              playsInline
            >
              <source src={videoData.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {(isHovered || !isPlaying) && (
              <button 
                className="featured-play-button"
                onClick={togglePlayPause}
                aria-label={isPlaying ? t('video_pause_aria') : t('video_play_aria')}
              >
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>
            )}
          </div>
          <div className="video-caption">
            <h4>{t('featured_video_caption_title')}</h4>
            <p>{t('featured_video_caption_desc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedVideo;
