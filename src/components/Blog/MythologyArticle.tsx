import React from 'react';
import AnimatedSection from '../AnimatedSection';
import { Share2 } from 'lucide-react';

const MythologyArticle = () => {
  return (
    <div className="py-16 bg-[#0F1013]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="mb-6">
              <span className="text-[#FBB659] text-sm font-medium">March 12, 2024</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#FBB659] mb-6">
              From Myths to Mechanics: How World Mythology Shapes Modern Board Games
            </h1>
            <div className="aspect-video rounded-lg overflow-hidden mb-8">
              <img
                src="https://images.unsplash.com/photo-1596854372407-baba7fef6e51?auto=format&fit=crop&q=80"
                alt="Ancient mythology artifacts"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="prose prose-invert max-w-none">
              <div className="text-[#BBBFC4] space-y-6">
                <p className="text-xl leading-relaxed">
                  Throughout history, mythology has served as a wellspring of inspiration for storytellers, 
                  artists, and now, board game designers. From ancient Norse sagas to Japanese yokai tales, 
                  mythological elements continue to enrich the gaming experience, creating immersive worlds 
                  that bridge the ancient and modern.
                </p>

                <h2 className="text-2xl font-bold text-[#FBB659] mt-8 mb-4">
                  Norse Mythology in Gaming
                </h2>
                <p>
                  The rich tapestry of Norse mythology, with its tales of gods, giants, and the nine worlds, 
                  has inspired numerous board games. Key elements frequently incorporated include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The World Tree, Yggdrasil, as a central board mechanic</li>
                  <li>Ragnarök as an end-game condition or timer</li>
                  <li>Rune-based resource systems</li>
                  <li>Character abilities based on Norse gods</li>
                </ul>

                <h2 className="text-2xl font-bold text-[#FBB659] mt-8 mb-4">
                  Greek Mythology's Influence
                </h2>
                <p>
                  Greek mythology's dramatic narratives and complex character relationships provide rich 
                  material for game mechanics and storytelling:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Hero's journey as a progression system</li>
                  <li>Olympian politics as player interaction mechanics</li>
                  <li>Mythical creatures as game challenges</li>
                  <li>Ancient artifacts as powerful item cards</li>
                </ul>

                <h2 className="text-2xl font-bold text-[#FBB659] mt-8 mb-4">
                  Eastern Mythologies
                </h2>
                <p>
                  Asian mythologies offer unique perspectives and mechanics:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Chinese zodiac cycles for game phases</li>
                  <li>Japanese kami as area control elements</li>
                  <li>Indian epic narratives for campaign modes</li>
                  <li>Feng shui principles in tile-placement games</li>
                </ul>

                <h2 className="text-2xl font-bold text-[#FBB659] mt-8 mb-4">
                  Modern Integration
                </h2>
                <p>
                  Contemporary board game designers are finding innovative ways to incorporate mythological 
                  elements while respecting their cultural origins:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Blending multiple mythologies in single games</li>
                  <li>Using myths as frameworks for new narratives</li>
                  <li>Incorporating historical accuracy with gameplay</li>
                  <li>Creating educational opportunities through play</li>
                </ul>

                <div className="flex justify-center my-8">
                  <button className="flex items-center gap-2 bg-[#394E59] text-[#BBBFC4] px-4 py-2 rounded-lg hover:bg-[#394E59]/80 transition-colors duration-300">
                    <Share2 className="w-5 h-5" />
                    Share Article
                  </button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default MythologyArticle;