import React from 'react';
import AnimatedSection from '../AnimatedSection';

const team = [
  {
    name: "Stefan",
    position: "CEO, Founder, Game Designer and Visionary",
    bio: "With 6+ years of experience in AAA, mobile and Blockchain gaming industry, multidisciplinary experience out of IT and chaotic creativity.",
    silhouetteColor: "#FBB659"
  },
  {
    name: "Danijel",
    position: "COO, Co-Founder, Business Development Director and Producer",
    bio: "With over 10 years of experience in multimedia, brand growth and animated movies",
    silhouetteColor: "#C38855"
  },
  {
    name: "Mario",
    position: "Co-Founder, Creative Director, Narrative Designer, World Builder",
    bio: "Over 10 years of experience as a Writer and a World Builder.",
    silhouetteColor: "#394E59"
  }
];

const Team = () => {
  return (
    <div className="relative py-24">
      <div className="absolute inset-0 bg-[#394E59]/30 backdrop-blur-md"></div>
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-[#FBB659] text-center mb-16">Meet Our Team</h2>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <div className="bg-[#0F1013]/80 backdrop-blur-sm rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
                <div 
                  className="w-full h-64 relative"
                  style={{
                    background: `linear-gradient(45deg, ${member.silhouetteColor}88, ${member.silhouetteColor}44)`
                  }}
                >
                  <svg 
                    viewBox="0 0 100 100" 
                    className="absolute inset-0 w-full h-full p-8"
                    style={{ fill: member.silhouetteColor }}
                  >
                    <path d="M50,0 C55,25 70,35 85,35 C70,45 70,65 85,85 C70,80 55,80 50,100 C45,80 30,80 15,85 C30,65 30,45 15,35 C30,35 45,25 50,0" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#FBB659] mb-2">{member.name}</h3>
                  <p className="text-[#C38855] mb-4 text-sm">{member.position}</p>
                  <p className="text-[#BBBFC4]">{member.bio}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;