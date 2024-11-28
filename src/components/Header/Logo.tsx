import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className="flex items-center space-x-3">
      <Link to="/" className="flex items-center hover:opacity-80 transition-opacity duration-300">
        <svg width="32" height="32" viewBox="0 0 32 32" className="text-[#FBB659]">
          <g stroke="currentColor" strokeWidth="2" fill="none">
            {/* Left Pillar */}
            <line x1="8" y1="6" x2="8" y2="26" />
            <line x1="6" y1="6" x2="10" y2="6" />
            <line x1="6" y1="26" x2="10" y2="26" />
            
            {/* Middle Pillar */}
            <line x1="16" y1="4" x2="16" y2="28" />
            <line x1="14" y1="4" x2="18" y2="4" />
            <line x1="14" y1="28" x2="18" y2="28" />
            
            {/* Right Pillar */}
            <line x1="24" y1="6" x2="24" y2="26" />
            <line x1="22" y1="6" x2="26" y2="6" />
            <line x1="22" y1="26" x2="26" y2="26" />
          </g>
        </svg>
      </Link>
      <Link 
        to="/studio" 
        className="cinzel-company-name text-xl text-[#FBB659] hover:text-[#C38855] transition-colors duration-300"
      >
        TriArdor
      </Link>
    </div>
  );
};

export default Logo;