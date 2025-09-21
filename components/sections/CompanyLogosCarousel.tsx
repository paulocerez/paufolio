"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const companies = [
  { name: "telli", logo: "/company-logos/telli-logo.png", description: "YC F24" },
  { name: "Ivy", logo: "/company-logos/ivy-logo.png", description: "Software Engineering" },
  { name: "LANCH", logo: "/company-logos/lanch-logo.png", description: "Tech Entrepreneurship" },
  { name: "Cardino", logo: "/company-logos/cardino-logo.png", description: "Product & Strategy" },
  { name: "Octopus Energy", logo: "/company-logos/octopus-logo.png", description: "Business Development" },
  { name: "Enpal", logo: "/company-logos/enpal-logo.png", description: "Recruiting & Operations" },
  { name: "CODE University", logo: "/company-logos/code-logo.png", description: "B.Sc. Software Engineering" },
];

export default function CompanyLogosCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % companies.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-8">
      <h2 className="text-2xl font-crimson font-light text-white mb-8 text-center">
        Experience
      </h2>
      
      <div className="relative max-w-2xl mx-auto">
        {/* Main featured company */}
        <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 hover:border-gray-700/50 transition-all duration-500 text-center">
          <div className="relative w-24 h-24 mx-auto mb-6 rounded-xl overflow-hidden bg-white/5 p-4">
            <Image
              src={companies[currentIndex].logo}
              alt={`${companies[currentIndex].name} logo`}
              fill
              className="object-contain"
            />
          </div>
          
          <h3 className="text-white text-xl font-light mb-2">
            {companies[currentIndex].name}
          </h3>
          <p className="text-gray-400 text-sm font-light">
            {companies[currentIndex].description}
          </p>
        </div>
        
        {/* Company indicators */}
        <div className="flex justify-center space-x-2 mt-6">
          {companies.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white w-8' 
                  : 'bg-gray-600 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
        
        {/* All logos strip */}
        <div className="mt-8 flex space-x-4 overflow-x-auto pb-2 scrollbar-hide">
          {companies.map((company, index) => (
            <div
              key={company.name}
              className={`flex-shrink-0 w-12 h-12 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 flex items-center justify-center p-2 cursor-pointer ${
                index === currentIndex ? 'ring-2 ring-white/20' : ''
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={24}
                height={24}
                className="object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
