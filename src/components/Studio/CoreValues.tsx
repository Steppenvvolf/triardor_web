import React from 'react';
import { Dumbbell, Brain, Hourglass } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';

const values = [
  {
    icon: <Dumbbell className="w-12 h-12" />,
    title: "Strength",
    description: "Resilience in every design, building games that stand the test of time."
  },
  {
    icon: <Brain className="w-12 h-12" />,
    title: "Creativity",
    description: "Innovation in every mechanic, pushing the boundaries of game design."
  },
  {
    icon: <Hourglass className="w-12 h-12" />,
    title: "Timelessness",
    description: "Creating enduring experiences that resonate across generations."
  }
];

const CoreValues = () => {
  return (
    <div className="py-24 bg-[#0F1013]">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-[#FBB659] text-center mb-16">Our Core Values</h2>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-3 gap-12">
          {values.map((value, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <div className="text-center">
                <div className="text-[#FBB659] mb-6 flex justify-center">{value.icon}</div>
                <h3 className="text-2xl font-bold text-[#FBB659] mb-4">{value.title}</h3>
                <p className="text-[#BBBFC4]">{value.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreValues;