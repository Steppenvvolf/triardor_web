import React from 'react';
import AnimatedSection from '../AnimatedSection';
import { Share2 } from 'lucide-react';

const BlogContent = () => {
  return (
    <div className="py-16 bg-[#0F1013]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="prose prose-invert max-w-none">
              <div className="text-[#BBBFC4] space-y-6">
                <p className="text-xl leading-relaxed">
                  The board game industry has experienced unprecedented growth in recent years, 
                  with market analysts projecting continued expansion through 2029. This 
                  comprehensive analysis explores current trends, market dynamics, and future 
                  projections that shape the tabletop gaming landscape.
                </p>

                <h2 className="text-2xl font-bold text-[#FBB659] mt-8 mb-4">
                  Current Market Overview
                </h2>
                <p>
                  The global board games market size was valued at $11.2 billion in 2023, 
                  with a projected CAGR of 7.8% through 2029. This growth is driven by 
                  several key factors:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Rising popularity of strategy and hobby games</li>
                  <li>Increased interest in social and family entertainment</li>
                  <li>Growing collector and enthusiast communities</li>
                  <li>Integration of digital companions and hybrid experiences</li>
                </ul>

                <h2 className="text-2xl font-bold text-[#FBB659] mt-8 mb-4">
                  Industry Projections (2024-2029)
                </h2>
                <p>
                  Market analysts predict significant growth across multiple segments:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Strategy Games: Expected 9.2% CAGR</li>
                  <li>Family Games: Projected 6.5% CAGR</li>
                  <li>Card Games: Anticipated 8.1% CAGR</li>
                  <li>Collectible Games: Forecasted 10.3% CAGR</li>
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

export default BlogContent;