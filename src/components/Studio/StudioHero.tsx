import React from 'react';
import AnimatedSection from '../AnimatedSection';

const StudioHero = () => {
  return (
    <div className="relative min-h-[80vh] pt-16">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#0F1013]">
          <svg className="w-full h-full" viewBox="0 0 800 600">
            <g stroke="#FFFFFF" strokeWidth="2" fill="none">
              {/* Left Pillar */}
              <path d="M250,500 L250,150 M230,150 L270,150 M230,500 L270,500" />
              <path d="M230,170 L270,170" strokeDasharray="2,4" />
              <path d="M230,480 L270,480" strokeDasharray="2,4" />
              
              {/* Middle Pillar */}
              <path d="M400,500 L400,100 M380,100 L420,100 M380,500 L420,500" />
              <path d="M380,120 L420,120" strokeDasharray="2,4" />
              <path d="M380,480 L420,480" strokeDasharray="2,4" />
              
              {/* Right Pillar */}
              <path d="M550,500 L550,150 M530,150 L570,150 M530,500 L570,500" />
              <path d="M530,170 L570,170" strokeDasharray="2,4" />
              <path d="M530,480 L570,480" strokeDasharray="2,4" />
            </g>
          </svg>
        </div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-32">
        <AnimatedSection>
          <h1 className="text-5xl md:text-7xl font-bold text-[#FBB659] mb-6">
            Welcome to TriArdor Studio
          </h1>
          <div className="max-w-2xl">
            <p className="text-xl text-[#BBBFC4] mb-8 leading-relaxed">
              Where passion ignites creativity, strength builds resilience, and timeless innovation shapes the future of games.
            </p>
            <p className="text-lg text-[#BBBFC4] leading-relaxed">
              At TriArdor, we are more than a board game design studio; we are a forge of ideas, crafting experiences that bring people together and challenge the imagination. Inspired by ancient virtues and the enduring power of human ingenuity, we create games that blend strategy, storytelling, and creativity for players around the world.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default StudioHero;