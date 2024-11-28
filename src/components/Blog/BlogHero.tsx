import React from 'react';
import AnimatedSection from '../AnimatedSection';

const BlogHero = () => {
  return (
    <div className="relative pt-32 pb-16">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="text-[#FBB659] text-sm font-medium">March 15, 2024</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#FBB659] mb-6">
              The Rising Tide: Board Game Industry Growth and Future Projections
            </h1>
            <div className="aspect-video rounded-lg overflow-hidden mb-8">
              <img
                src="https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&q=80"
                alt="Board Game Industry"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default BlogHero;