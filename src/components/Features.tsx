import React from 'react';
import { Clock, Users, BookOpen, Boxes, Compass } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Features = () => {
  return (
    <div className="bg-[#0F1013] py-24">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-[#FBB659] text-center mb-16">Game Features</h2>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Clock />,
              title: "Aging System",
              description: "Experience a unique aging mechanic that affects your character's abilities and decisions throughout the game.",
              delay: 0.2
            },
            {
              icon: <Users />,
              title: "Hybrid Gameplay",
              description: "Balance cooperation and competition in this innovative PvE and PvP blend.",
              delay: 0.4
            },
            {
              icon: <Boxes />,
              title: "Resource Management",
              description: "Carefully manage your resources to survive in the harsh Sunless World.",
              delay: 0.6
            },
            {
              icon: <BookOpen />,
              title: "Deck Building",
              description: "Build and customize your deck as you progress through the game.",
              delay: 0.8
            },
            {
              icon: <Compass />,
              title: "World Progression",
              description: "Navigate through dynamic events that shape the world around you.",
              delay: 1.0
            }
          ].map((feature, index) => (
            <AnimatedSection key={index} delay={feature.delay}>
              <FeatureCard {...feature} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-[#394E59] p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
    <div className="text-[#FBB659] w-12 h-12 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-[#FBB659] mb-3">{title}</h3>
    <p className="text-[#BBBFC4]">{description}</p>
  </div>
);

export default Features;