
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const AISection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      className="py-24 px-6 bg-gradient-to-b from-white to-blue-50"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="px-4 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-medium mb-4 inline-block">
            INTELLIGENT TECHNOLOGY
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Our AI-Powered Disaster Response
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            See how our platform leverages artificial intelligence to revolutionize disaster response and recovery efforts.
          </p>
        </div>
        
        <div className={cn(
          "grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-1000 transform",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        )}>
          <div className="rounded-xl neo-effect overflow-hidden">
            <div className="aspect-[4/3] bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white">
              <div className="max-w-md p-8">
                <h3 className="text-2xl font-bold mb-4">Predictive Analytics</h3>
                <p className="mb-6">
                  Our AI algorithms process vast amounts of data to predict disaster patterns before they occur, enabling proactive response.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-white mr-2"></div>
                    <span>Historical disaster data analysis</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-white mr-2"></div>
                    <span>Weather pattern recognition</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-white mr-2"></div>
                    <span>Geological activity monitoring</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-white mr-2"></div>
                    <span>Population density mapping</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6">
              <h4 className="text-lg font-semibold mb-4">Algorithm Overview</h4>
              <p className="text-sm text-gray-700 mb-4">
                Our system uses a combination of machine learning models specifically designed for disaster prediction and response optimization:
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-gray-900">Random Forest</h5>
                    <p className="text-xs text-gray-600">
                      For classifying disaster types based on environmental indicators
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-gray-900">LSTM Networks</h5>
                    <p className="text-xs text-gray-600">
                      For time-series prediction of disaster occurrence probability
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-gray-900">Convolutional Neural Networks</h5>
                    <p className="text-xs text-gray-600">
                      For image analysis of satellite data to detect early warning signs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-rows-2 gap-8">
            <div className="rounded-xl neo-effect overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Real-time Resource Allocation</h3>
                <p className="text-gray-700 mb-4">
                  Our AI continuously optimizes resource allocation during disaster response, ensuring aid reaches those who need it most.
                </p>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="text-base font-medium mb-3">Optimization Metrics</h4>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Population Density</span>
                        <span className="font-medium">85%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Infrastructure Damage</span>
                        <span className="font-medium">72%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '72%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Medical Need</span>
                        <span className="font-medium">91%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '91%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Supply Route Accessibility</span>
                        <span className="font-medium">64%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '64%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-xl neo-effect overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                      <line x1="6" y1="6" x2="6.01" y2="6"></line>
                      <line x1="6" y1="18" x2="6.01" y2="18"></line>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Technology Stack</h3>
                </div>
                
                <p className="text-gray-700 mb-6">
                  Our platform uses simple but powerful technologies that work together seamlessly:
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-gray-50">
                    <h4 className="text-sm font-medium mb-2">Python</h4>
                    <p className="text-xs text-gray-600">
                      Core language for AI/ML models with libraries like TensorFlow and PyTorch
                    </p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-gray-50">
                    <h4 className="text-sm font-medium mb-2">Blockchain</h4>
                    <p className="text-xs text-gray-600">
                      Secure and transparent transaction ledger for fund tracking
                    </p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-gray-50">
                    <h4 className="text-sm font-medium mb-2">GIS Systems</h4>
                    <p className="text-xs text-gray-600">
                      Geographic information systems for spatial data analysis
                    </p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-gray-50">
                    <h4 className="text-sm font-medium mb-2">REST APIs</h4>
                    <p className="text-xs text-gray-600">
                      Flexible interfaces connecting all system components
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection;
