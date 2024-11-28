import React from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import GameplaySection from '../components/GameplaySection/GameplaySection';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="min-h-screen bg-[#0F1013]">
      <Header />
      <Hero />
      <Features />
      <GameplaySection />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;