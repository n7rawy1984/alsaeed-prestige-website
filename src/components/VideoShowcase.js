import React, { useState, useRef, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from './Icons';

const videos = [
    { src: "/assets/videos/intro-1.mp4", poster: "/assets/images/video-poster-1.jpg" },
    { src: "/assets/videos/intro-2.mp4", poster: "/assets/images/video-poster-2.jpg" },
    { src: "/assets/videos/intro-3.mp4", poster: "/assets/images/video-poster-3.jpg" }
];

function VideoShowcase() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const videoRef = useRef(null);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? videos.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === videos.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    useEffect(() => {
        if(videoRef.current) {
            videoRef.current.load();
            videoRef.current.play().catch(error => {
                console.log("Autoplay with sound was prevented by the browser. This is normal.", error);
            });
        }
    }, [currentIndex]);

    return (
        <section id="showcase" className="showcase">
            <div className="slider-container">
                <div className="slider-arrow left" onClick={goToPrevious}><FaChevronLeft /></div>
                <div className="slider-arrow right" onClick={goToNext}><FaChevronRight /></div>
                <video 
                    ref={videoRef}
                    key={videos[currentIndex].src} 
                    className="slide-video" 
                    autoPlay 
                    muted
                    playsInline
                    poster={videos[currentIndex].poster}
                >
                    <source src={videos[currentIndex].src} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    );
}

export default VideoShowcase;
