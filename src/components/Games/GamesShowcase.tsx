import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../AnimatedSection';
import { ArrowRight } from 'lucide-react';

const GamesShowcase = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h1 className="text-5xl font-bold text-[#FBB659] text-center mb-16">Our Games</h1>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <AnimatedSection delay={0.2}>
            <div className="bg-[#394E59]/20 rounded-lg overflow-hidden backdrop-blur-sm">
              <div className="aspect-video w-full">
                <img
                  src="https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&q=80"
                  alt="Keeper of the Words"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-bold text-[#FBB659] mb-4">Keeper of the Words</h2>
                <p className="text-[#BBBFC4] mb-6 text-lg leading-relaxed">
                  A strategic board game where players navigate through a dying world, racing against time 
                  to restore an ancient mechanism. Blend cooperation with competition as you manage 
                  resources, build powerful decks, and face the consequences of an innovative aging system.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="bg-[#0F1013]/50 px-4 py-2 rounded-lg">
                    <span className="text-[#FBB659]">3-6 Players</span>
                  </div>
                  <div className="bg-[#0F1013]/50 px-4 py-2 rounded-lg">
                    <span className="text-[#FBB659]">90-120 Minutes</span>
                  </div>
                  <div className="bg-[#0F1013]/50 px-4 py-2 rounded-lg">
                    <span className="text-[#FBB659]">Age 14+</span>
                  </div>
                </div>
                <Link 
                  to="/"
                  className="inline-flex items-center gap-2 bg-[#FBB659] text-[#0F1013] px-6 py-3 rounded-lg font-medium hover:bg-[#C38855] transition-colors duration-300 group"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default GamesShowcase;