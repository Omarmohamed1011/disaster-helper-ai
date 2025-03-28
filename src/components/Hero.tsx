
import { useEffect, useRef } from 'react';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.classList.add('animate-fade-up');
    }
    
    setTimeout(() => {
      if (subtitleRef.current) {
        subtitleRef.current.classList.add('animate-fade-up');
      }
    }, 300);
    
    setTimeout(() => {
      if (ctaRef.current) {
        ctaRef.current.classList.add('animate-fade-up');
      }
    }, 600);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-14 px-6 overflow-hidden" // Reduced top padding
    >
      {/* Background circles */}
      <div className="absolute top-1/4 left-1/5 w-64 h-64 rounded-full bg-blue-100/30 blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/5 w-80 h-80 rounded-full bg-cyan-100/30 blur-3xl animate-float animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto z-10 text-center">
        <h1 
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 opacity-0"
        >
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            Blockchain Integrated Humanitarian
          </span>
          Food Supply Chain with AI Forecasting
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-10 opacity-0"
        >
          A revolutionary platform that combines the power of artificial intelligence and blockchain technology to predict, track, and optimize food distribution in crisis-affected areas with unprecedented efficiency and transparency.
        </p>
        
        <div 
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 opacity-0"
        >
          <button className="px-8 py-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300 shadow-lg hover:shadow-xl text-lg font-medium w-full sm:w-auto flex items-center justify-center">
            <span>Get Started</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
          
          <button className="px-8 py-3 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-50 transition-colors duration-300 text-lg font-medium w-full sm:w-auto flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 16 16 12 12 8"></polyline>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
            <span>Learn More</span>
          </button>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block"> // Moved up
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
