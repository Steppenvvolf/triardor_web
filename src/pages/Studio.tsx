import React from 'react';
import Header from '../components/Header/Header';
import StudioHero from '../components/Studio/StudioHero';
import CoreValues from '../components/Studio/CoreValues';
import Team from '../components/Studio/Team';
import Footer from '../components/Footer';

const Studio = () => {
  return (
    <div className="min-h-screen bg-[#0F1013]">
      <Header />
      <StudioHero />
      <CoreValues />
      <Team />
      <Footer />
    </div>
  );
};

export default Studio;