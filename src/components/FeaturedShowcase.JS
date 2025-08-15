function FeaturedShowcase() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? ASSETS.sliderImages.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === ASSETS.sliderImages.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <section id="showcase" className="showcase">
            <div className="slider-container">
                <div className="slider-arrow left" onClick={goToPrevious}><FaChevronLeft /></div>
                <div className="slider-arrow right" onClick={goToNext}><FaChevronRight /></div>
                <div className="slide" style={{ backgroundImage: `url(${ASSETS.sliderImages[currentIndex]})` }}></div>
            </div>
        </section>
    );
}