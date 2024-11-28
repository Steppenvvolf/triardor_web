import React from 'react';
import Header from '../components/Header/Header';
import GamesShowcase from '../components/Games/GamesShowcase';
import Footer from '../components/Footer';

const Games = () => {
  return (
    <div className="min-h-screen bg-[#0F1013]">
      <Header />
      <GamesShowcase />
      <Footer />
    </div>
  );
};

export default Games;