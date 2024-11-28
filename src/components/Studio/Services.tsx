import React from 'react';
import { Palette, BookOpen, Users, Rocket } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';

const services = [
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Game Design",
    description: "Crafting innovative mechanics and engaging gameplay experiences that captivate players."
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Narrative Design",
    description: "Creating rich storylines and immersive worlds that bring games to life."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Playtesting",
    description: "Rigorous testing and refinement to ensure balanced and enjoyable gameplay."
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Production",
    description: "Full-scale game production from concept to manufacturing and distribution."
  }
];

const Services = () => {
  return (
    <div className="py-24 bg-[#394E59]">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-[#FBB659] text-center mb-16">Our Services</h2>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <div className="bg-[#0F1013] p-6 rounded-lg transform transition-all duration-300 hover:scale-105">
                <div className="text-[#FBB659] mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-[#FBB659] mb-3">{service.title}</h3>
                <p className="text-[#BBBFC4]">{service.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;