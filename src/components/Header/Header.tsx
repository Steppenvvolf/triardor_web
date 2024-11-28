import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import MobileMenu from './MobileMenu';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-[#0F1013]/95 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <Navigation />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;