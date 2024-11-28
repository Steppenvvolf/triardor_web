import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="hidden md:block">
      <ul className="flex space-x-8">
        {[
          { name: 'Home', path: '/' },
          { name: 'Games', path: '/games' },
          { name: 'Blog', path: '/blog' },
          { name: 'Studio', path: '/studio' },
          { name: 'Contact', path: '/contact' }
        ].map((item) => (
          <li key={item.name}>
            <Link
              to={item.path}
              className="text-[#BBBFC4] hover:text-[#FBB659] transition-colors duration-300 text-sm uppercase tracking-wider"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;