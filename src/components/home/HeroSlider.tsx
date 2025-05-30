
import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Define the slides interface
interface Slide {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  ctaLink: string;
}

const slides: Slide[] = [
  {
    title: "100% Citizen Owned",
    subtitle: "Agricultural Solutions",
    description: "Supporting local agriculture by providing quality supplies and fostering sustainable farming practices in Botswana",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
    ctaLink: "/about",
  },
  {
    title: "Premium Quality",
    subtitle: "Seeds and Seedlings",
    description: "We provide practical solutions that drive efficiencies across key dimensions of the production cycle",
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
    ctaLink: "/products/seeds",
  },
  {
    title: "Modern Farming",
    subtitle: "Equipment & Tools",
    description: "Solutions tailored to specific local conditions to help Batswana make informed decisions for improved productivity",
    image: "https://images.unsplash.com/photo-1573561368183-fd88bdb4503d?q=80&w=2040&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ctaLink: "/products/equipment",
  },
  {
    title: "Quality Stock Feed",
    subtitle: "For Healthy Livestock",
    description: "Supporting Botswana's farming community with high-quality products for improved animal health and productivity",
    image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2742&q=80",
    ctaLink: "/products/feed",
  },

];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Automatic slide progression
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setPrevSlide(currentSlide);
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 1000);
      }
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval);
  }, [currentSlide, isAnimating]);

  // Handle navigation
  const goToSlide = useCallback((index: number) => {
    if (!isAnimating && index !== currentSlide) {
      setPrevSlide(currentSlide);
      setCurrentSlide(index);
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 1000);
    }
  }, [currentSlide, isAnimating]);

  const goToPrevSlide = useCallback(() => {
    if (!isAnimating) {
      setPrevSlide(currentSlide);
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 1000);
    }
  }, [currentSlide, isAnimating]);

  const goToNextSlide = useCallback(() => {
    if (!isAnimating) {
      setPrevSlide(currentSlide);
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 1000);
    }
  }, [currentSlide, isAnimating]);

  return (
    <div className="relative h-[70vh] md:h-[80vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`
            absolute inset-0 w-full h-full transition-all duration-1000
            ${currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}
          `}
        >
          {/* Background image with improved parallax effect */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-2000 ease-out"
            style={{
              backgroundImage: `url(${slide.image})`,
              transform: `scale(${currentSlide === index ? '1' : '1.1'})`,
            }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>

          {/* Content */}
          <div className="container mx-auto px-4 h-full flex items-center relative z-10">
            <div
              className={`max-w-3xl transform transition-all duration-1000 ${currentSlide === index ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-white">
                {slide.title} <span className="text-primary-light">{slide.subtitle}</span>
              </h1>
              <p className="text-xl text-white mb-8 max-w-xl">
                {slide.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link to={slide.ctaLink}>Learn More</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors z-20"
        onClick={goToPrevSlide}
        aria-label="Previous slide"
        disabled={isAnimating}
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors z-20"
        onClick={goToNextSlide}
        aria-label="Next slide"
        disabled={isAnimating}
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Dots navigation */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-primary w-8' : 'bg-white/60'
              }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            disabled={isAnimating}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
