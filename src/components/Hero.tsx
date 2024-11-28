import React from 'react';
import { Scroll, Users, Clock, Award } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?auto=format&fit=crop&q=80")',
          backgroundBlendMode: 'overlay',
        }}
      >
        <div className="absolute inset-0 bg-[#0F1013] opacity-70"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-[#FBB659] mb-6">
            Keeper of the Words
          </h1>
          <p className="text-xl md:text-2xl text-[#BBBFC4] mb-8 leading-relaxed">
            Restore the ancient mechanism, survive the trials, and claim the glory of saving a dying world.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="flex flex-col items-center">
              <Users className="w-8 h-8 text-[#C38855] mb-2" />
              <span className="text-[#BBBFC4]">3-6 Players</span>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-8 h-8 text-[#C38855] mb-2" />
              <span className="text-[#BBBFC4]">90-120 Min</span>
            </div>
            <div className="flex flex-col items-center">
              <Scroll className="w-8 h-8 text-[#C38855] mb-2" />
              <span className="text-[#BBBFC4]">Age 14+</span>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-8 h-8 text-[#C38855] mb-2" />
              <span className="text-[#BBBFC4]">Strategy</span>
            </div>
          </div>
          
          <button className="bg-[#FBB659] text-[#0F1013] px-8 py-4 rounded-lg text-lg font-bold hover:bg-[#C38855] transition-colors duration-300">
            Join the Waiting List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;