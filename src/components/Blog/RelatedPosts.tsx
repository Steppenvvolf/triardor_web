import React from 'react';
import AnimatedSection from '../AnimatedSection';

const RelatedPosts = () => {
  const posts = [
    {
      title: "The Evolution of Board Game Design",
      date: "March 10, 2024",
      image: "https://images.unsplash.com/photo-1632501641765-e568d28b0015?auto=format&fit=crop&q=80"
    },
    {
      title: "Digital Integration in Modern Board Games",
      date: "March 5, 2024",
      image: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&q=80"
    },
    {
      title: "Sustainability in Board Game Production",
      date: "February 28, 2024",
      image: "https://images.unsplash.com/photo-1637425242467-3def0e6ede44?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="py-16 bg-[#394E59]/20">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-[#FBB659] text-center mb-12">
            Related Articles
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {posts.map((post, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <div className="bg-[#0F1013] rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
                <div className="aspect-video">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm text-[#FBB659]">{post.date}</span>
                  <h3 className="text-xl font-bold text-[#BBBFC4] mt-2 hover:text-[#FBB659] transition-colors duration-300">
                    {post.title}
                  </h3>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedPosts;