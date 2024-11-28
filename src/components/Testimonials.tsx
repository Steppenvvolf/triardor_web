import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  return (
    <div className="bg-[#394E59] py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#FBB659] text-center mb-16">Player Testimonials</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            text="A perfect balance of strategy, cooperation, and betrayal—this game keeps you on edge until the last move."
            rating={5}
          />
          <TestimonialCard
            text="The aging mechanic is brilliant! It changes how you approach every decision."
            rating={5}
          />
          <TestimonialCard
            text="A must-have for fans of strategy and mythology-inspired board games!"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};

const TestimonialCard = ({ text, rating }) => (
  <div className="bg-[#0F1013] p-8 rounded-lg">
    <div className="flex mb-4">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="w-5 h-5 text-[#FBB659] fill-current" />
      ))}
    </div>
    <p className="text-[#BBBFC4] italic">{text}</p>
  </div>
);

export default Testimonials;