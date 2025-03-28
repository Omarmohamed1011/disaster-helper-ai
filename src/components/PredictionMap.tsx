
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

// Mock data for AI predictions
const predictionData = [
  { id: 1, lat: 34.0522, lng: -118.2437, risk: 0.8, type: 'Earthquake', region: 'Los Angeles' },
  { id: 2, lat: 29.7604, lng: -95.3698, risk: 0.7, type: 'Flood', region: 'Houston' },
  { id: 3, lat: 25.7617, lng: -80.1918, risk: 0.9, type: 'Hurricane', region: 'Miami' },
  { id: 4, lat: 37.7749, lng: -122.4194, risk: 0.6, type: 'Wildfire', region: 'San Francisco' },
  { id: 5, lat: 40.7128, lng: -74.0060, risk: 0.5, type: 'Flood', region: 'New York' },
];

const PredictionMap = () => {
  const [activeRegion, setActiveRegion] = useState<number | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => {
      if (mapRef.current) {
        observer.unobserve(mapRef.current);
      }
    };
  }, []);

  const getRiskColor = (risk: number) => {
    if (risk >= 0.8) return 'bg-red-500';
    if (risk >= 0.6) return 'bg-orange-500';
    if (risk >= 0.4) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <section 
      id="predictions" 
      className="py-16 px-6 bg-gradient-to-b from-blue-50 to-white" // Reduced vertical padding
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10"> {/* Reduced bottom margin */}
          <span className="px-4 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-medium mb-3 inline-block"> {/* Reduced margin */}
            AI POWERED
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"> {/* Reduced margin */}
            Predicting Disaster-Prone Areas
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our advanced AI algorithm analyzes historical data, weather patterns, geological information, and more to predict areas most likely to be affected by natural disasters.
          </p>
        </div>
        
        <div 
          ref={mapRef}
          className={cn(
            "rounded-xl overflow-hidden shadow-2xl neo-effect transition-all duration-1000 transform",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          )}
        >
          <div className="aspect-video bg-white relative rounded-xl overflow-hidden">
            {/* USA Map background - simplified for this example */}
            <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
              <svg 
                viewBox="0 0 800 450" 
                className="w-full h-full opacity-30"
              >
                <path 
                  d="M198.66,95.52l-0.78-1.55l-2.33-0.39l-0.39-0.39l-2.33-0.39l-1.16,0.39l-1.55-0.39l-1.55,1.16l0.39,1.94l1.94,1.55l1.16,1.94l1.94,1.55l1.16,0.39l1.55-0.78l1.16-1.55l-0.78-1.16L198.66,95.52z M209.96,102.64l0.39-1.16l-2.33-0.39l-1.94,0.39l-0.39,1.16l2.72,0.39L209.96,102.64z M215.41,102.64l-1.55,0.78l-1.16-0.39l-0.78-1.16l-0.78-1.94l0.39-1.55l-1.55-0.78l-1.94,0.39l0.39,2.72l1.55,1.55l2.72,1.55l1.94-0.39L215.41,102.64z M217.35,112.78l-1.55-0.78l-1.55,1.16l1.55,1.16L217.35,112.78z M212.68,113.95l-1.16,0.78l1.16,1.16l1.16-0.78L212.68,113.95z M216.57,115.5l-1.55-0.78l-1.16,0.78l1.55,0.78L216.57,115.5z"
                  fill="#D0D0D0"
                ></path>
                {/* Simplified US mainland outline */}
                <path 
                  d="M153,160 Q200,150 250,160 Q300,170 350,165 Q400,160 450,140 Q500,120 550,130 Q600,140 650,160 Q700,180 750,190 L750,350 Q700,330 650,320 Q600,310 550,300 Q500,290 450,300 Q400,310 350,320 Q300,330 250,335 Q200,340 150,335 L153,160"
                  fill="#D0D0D0"
                ></path>
              </svg>
              
              {/* Map dots for disaster predictions */}
              {predictionData.map((region) => (
                <div 
                  key={region.id}
                  className={cn(
                    "absolute transition-all duration-500",
                    activeRegion === region.id ? 'z-10 scale-110' : 'z-0',
                    isInView ? 'opacity-100' : 'opacity-0'
                  )}
                  style={{ 
                    left: `${region.lng + 140}px`, 
                    top: `${region.lat + 140}px` 
                  }}
                  onMouseEnter={() => setActiveRegion(region.id)}
                  onMouseLeave={() => setActiveRegion(null)}
                >
                  <div 
                    className={cn(
                      "w-4 h-4 rounded-full shadow-lg transform transition-all duration-500 cursor-pointer",
                      getRiskColor(region.risk),
                      activeRegion === region.id ? 'scale-150' : 'scale-100'
                    )}
                  ></div>
                  <div 
                    className={cn(
                      "absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white rounded-lg p-2 shadow-lg transition-opacity duration-300 w-32",
                      activeRegion === region.id ? 'opacity-100' : 'opacity-0'
                    )}
                  >
                    <p className="text-xs font-medium text-gray-900">{region.region}</p>
                    <p className="text-xs text-gray-600">{region.type}</p>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                      <div 
                        className={cn("h-1.5 rounded-full", getRiskColor(region.risk))}
                        style={{ width: `${region.risk * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-6 border-t border-gray-100">
            <h3 className="text-lg font-semibold mb-4">How our AI Prediction Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                </div>
                <h4 className="text-base font-medium mb-2">Data Collection</h4>
                <p className="text-sm text-gray-600">We gather historical data from various sources including weather stations, geological surveys, and past disaster records.</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                </div>
                <h4 className="text-base font-medium mb-2">Analysis & Pattern Recognition</h4>
                <p className="text-sm text-gray-600">Our AI models identify patterns and correlations that humans might miss, predicting potential disaster zones.</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                  </svg>
                </div>
                <h4 className="text-base font-medium mb-2">Real-time Mapping</h4>
                <p className="text-sm text-gray-600">Predictions are visualized on our interactive map, helping organizations prepare and respond effectively.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PredictionMap;
