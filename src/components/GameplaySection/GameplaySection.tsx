import React from 'react';
import HexGrid from './HexGrid';

const GameplaySection = () => {
  return (
    <div className="bg-[#0F1013] py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#FBB659] mb-6">Kickstart the World Harp</h2>
            <p className="text-[#BBBFC4] mb-6 leading-relaxed">
              In this game of strategy, survival, and myth, every choice you make shapes your fate. Will you work together to reach the mechanism, or betray your allies to ensure your place in history? The world waits on the brink of rebirth—or annihilation.
            </p>
            <p className="text-[#BBBFC4] mb-6 leading-relaxed">
              The journey begins. The clock is ticking. Can you restore the balance?
            </p>
            <div className="flex gap-4">
              <div className="bg-[#394E59] p-4 rounded-lg">
                <span className="block text-[#FBB659] text-xl font-bold">90-120</span>
                <span className="text-[#BBBFC4] text-sm">Minutes</span>
              </div>
              <div className="bg-[#394E59] p-4 rounded-lg">
                <span className="block text-[#FBB659] text-xl font-bold">14+</span>
                <span className="text-[#BBBFC4] text-sm">Age</span>
              </div>
              <div className="bg-[#394E59] p-4 rounded-lg">
                <span className="block text-[#FBB659] text-xl font-bold">3-6</span>
                <span className="text-[#BBBFC4] text-sm">Players</span>
              </div>
            </div>
          </div>
          <div className="relative bg-[#0F1013] rounded-lg p-8">
            <HexGrid />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameplaySection;