import React from 'react';
import Header from '../components/Header/Header';
import BlogHero from '../components/Blog/BlogHero';
import BlogContent from '../components/Blog/BlogContent';
import MythologyArticle from '../components/Blog/MythologyArticle';
import RelatedPosts from '../components/Blog/RelatedPosts';
import Footer from '../components/Footer';

const Blog = () => {
  return (
    <div className="min-h-screen bg-[#0F1013]">
      <Header />
      <BlogHero />
      <BlogContent />
      <div className="border-t border-[#394E59] my-16"></div>
      <MythologyArticle />
      <RelatedPosts />
      <Footer />
    </div>
  );
};

export default Blog;